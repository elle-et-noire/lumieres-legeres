import rehypeExternalLinks from 'rehype-external-links'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemoteSerializeResult } from 'next-mdx-remote'
import gfm from 'remark-gfm'
import remarkUnwrapImages from 'remark-unwrap-images'

// TODO:\text{}以外にテキストモードになる命令なかったっけ？（\mathrm, \substack）
// ↑ textモードの判定を中括弧だけで行うので解決

export const markdownToHtml = async (text: string): Promise<[MDXRemoteSerializeResult, string[]]> => {
  const spacer = "\\hspace{0.2em}";
  const rsmashers = ["。", "、", "）", "，", "．", " ", "　", "-", "：", ""];
  const lsmashers = ["（", "-", ""];
  const mathblocks: string[] = [];
  const validlabels = new Set<string>();
  let ord = 0;

  const evacuees: { [label: string]: string } = {};
  const opener = (ln: string) => rsmashers.includes(ln) ? "\\(" : "\\(" + spacer;
  const closer = (rn: string) => lsmashers.includes(rn) ? "\\)" : spacer + "\\)";
  // $ で挟まれた文中数式
  let opnum = 0, clnum = 0;
  let nextop = true; // 次にくる $ の開 or 閉
  // 脚注
  let footnotes = "\n";
  let footnum = 0;

  let rear = -1;  // dispmath の直下では rear = -1
  // /(?<=\\\\|[^\\\$]|^)\$(?!\$)/g と組み合わせる replacer。数式チャンク中で $ のスペーシングを行う
  const dollarspacer = (_: string, offset: number, string: string) => {
    if (rear == -1) {
      rear = offset;
      nextop = true;
      return opener(string.substring(offset - 1, offset));
    }
    if (opnum == clnum && nextop) {
      rear = -1;
      return closer(string.substring(offset + 1, offset + 2));
    }
    const between = string.substring(rear, offset);
    const op = (between.match(/(?<!\\)\{/g) || []).length;
    const cl = (between.match(/(?<!\\)\}/g) || []).length;
    if (op == cl) nextop = !nextop;
    else nextop = op > cl;
    opnum += op;
    clnum += cl;
    rear = offset;
    return (nextop ? opener(string.substring(offset - 1, offset)) : closer(string.substring(offset + 1, offset + 2)));
  }

  const processible = text.replace(/\\(?:eq)?ref\{([^}]*)\}/g, (match: string, p1: string) => { // 参照される式ラベルを調べておく。
    validlabels.add(p1);
    return match;
  }).replace(/```[\s\S]*?```|``[\s\S]*?``|`[\s\S]*?`/g, (match: string) => { // pre > code
    evacuees["quote" + ord] = match;
    return `<quote${ord++}/>`;
  }).replace(/\\\(/g, (_, offset: number, string: string) => opener(string.substring(offset - 1, offset)))
    .replace(/\\\)/g, (_, offset: number, string: string) => closer(string.substring(offset + 2, offset + 3)))
    .replace(/\\\[[\s\S]*?\\\]|\$\$[\s\S]*?\$\$|\\begin\{([^\}]*)\}[\s\S]*?\\end\{\1\}/g, (math: string) => {
      rear = -1;  // dispmath の直下では rear = -1
      let added = false;
      // ここでは nextop はマッチした $ の開 or 閉
      evacuees["dispmath" + ord] = math.replace(/(?<=\\\\|[^\\\$]|^)\$(?!\$)/g, dollarspacer)
        .replace(/\\label\{([^}]*)\}/g, (ret: string, label: string, _, string: string) => { // prev-window
          if (!added && validlabels.has(label))
            mathblocks.push(string.replace(/(?:\\tag\{[^}]+\})?\\label\{([^}]*)\}(?:\\tag\{[^}]+\})?/g, "\\tag*{\\eqref{$1}}"));
          return ret;
        });
      opnum = clnum = 0;
      nextop = true;
      return `<dispmath${ord++}/>`;
    }).replace(/\\\([\s\S]*?\\\)/g, (match: string) => { // \( \) のスペーシングは既に行われている
      rear = -1;
      evacuees["inmath" + ord] = match.replace(/(?<=\\\\|[^\\\$]|^)\$(?!\$)/g, dollarspacer);
      return `<inmath${ord++}/>`;
    }).concat(" $").replace(/(?<=\\\\|[^\\]|^)\$([\s\S]*?(?:\\\\|[^\\]))(?=\$)/g, (match: string, p1: string, offset: number, string: string) => {
      if (opnum == clnum) {
        if (!nextop) {
          evacuees[`inmath${ord++}`] += closer(string.substring(offset + 1, offset + 2));
          nextop = true;
          return p1;
        } else
          evacuees[`inmath${ord}`] = "";
      }
      const op = (match.match(/(?<!\\)\{/g) || []).length;
      const cl = (match.match(/(?<!\\)\}/g) || []).length;
      evacuees[`inmath${ord}`] += (nextop ? opener(string.substring(offset - 1, offset)) : closer(string.substring(offset + 1, offset + 2))) + p1;
      if (op == cl) nextop = !nextop;
      else nextop = op > cl;
      opnum += op;
      clnum += cl;
      return (opnum > clnum ? "" : `<inmath${ord}/>`);
    }).replace(/\s\$/, "").replace(/\\(eq)?ref\{[^}]*\}/g, (match: string) => {
      evacuees[`inmath${ord}`] = match;
      return `<inmath${ord++}/>`;
    })
    .replace(/<br>/g, "<br/>")
    .replace(/\[([^\]]+)\]\{([^}]+)\}/g, "<span className='has-tooltip relative items-center'><span className='inline-block tooltip balloon'>$2</span>$1</span>")
    .replace(/\^\[([^\]]+)\]/g, (_, p1: string): string => {
      footnotes += `\n[^${++footnum}]: ${p1}\n`;
      return `<span className='has-tooltip relative items-center no-underline'><span className='inline-block tooltip balloon'>${p1}</span>[^${footnum}]</span>`;
    }).concat(footnotes).replace(/(<(?:inmath|dispmath)\d+\/>)\r?\n/g, "$1") // 数式と文章の間の改行による隙間を消す
    .replace(/<((?:inmath|dispmath)\d+)\/>/g, (_, mode: string): string => {
      if (mode.substring(0, 6) == "inmath") return "<span>{`" + evacuees[mode].replace(/\\/g, "\\\\") + "`}</span>";
      if (mode.substring(0, 8) == "dispmath") return "<div className='scrollable'>{`" + evacuees[mode].replace(/\\/g, "\\\\") + "`}</div>";
      return "";
    })
    .replace(/<(quote\d+)\/>/g, (_, mode: string) => evacuees[mode])
    .replace(/```mermaid([^`]+)```/g, "\n<div className='mermaid'>{`%%{init:{'theme':'base','themeVariables':{'primaryColor':'#007777','primaryTextColor':'#f0f6fc','primaryBorderColor':'#008888','secondaryColor':'#145055','tertiaryColor': '#fff0f0','edgeLabelBackground':'#002b3600','lineColor':'#007777CC','noteTextColor':'#e2e8f0','noteBkgColor':'#007777BB','textColor':'#f0f6fc','fontSize':'16px'},'themeCSS':'text.actor {font-size:20px !important;}'}}%%$1`}</div>\n")
    // .replace(/```([^`\n]+)/g, (_, p1: string): string => {
    //   const titles = p1.split(':');
    //   return (titles.length > 1 ? `<div className='code-title'>{\`${titles[1]}\`}</div>\n\n` : '') + '```' + titles[0];
    // })
    .replace(/```(.+)/g, (_, p1: string): string => {
      const titles = p1.split(':');
      return '```' + titles[0] + (titles.length > 1 ? ("[data-file='" + titles[1] + "']") : '');
    });

  const mdxSource = await serialize(processible, {
    mdxOptions: {
      remarkPlugins: [
        gfm,
        [require('remark-prism'), {
          plugins: [
            // 'autolinker',
            // 'command-line',
            // 'data-uri-highlight',
            'diff-highlight',
            // 'inline-color',
            // 'keep-markup',
            // 'line-numbers',
            // 'show-invisibles',
            // 'treeview',
          ]
        },
        remarkUnwrapImages]
      ],
      rehypePlugins: [
        [rehypeExternalLinks, { target: '_blank', rel: ['nofollow', 'noopener', 'noreferrer'] }],
      ],
    },
  });

  return [mdxSource, mathblocks];
};
