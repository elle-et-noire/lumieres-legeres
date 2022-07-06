---
title: 清水熱力学5章メモ
date: '2022-07-06'
tags:
  - phys
  - thermodynamics
description: "清水熱力学5章のメモ。"
---

<div className="hidden">$$
\definecolor{bg}{rgb}{0, 0.168, 0.212}
\newcommand{\lointerv}{[\kern -0.32em\raise 0.1ex{\scriptsize\bullet}\kern -0.37em\raise -0.32ex{\color{bg}\Large\cdot}}
\newcommand{\rointerv}{\kern 0.15em]\kern -0.32em\raise 0.1ex{\scriptsize\bullet}\kern -0.37em\raise -0.31ex{\color{bg}\Large\cdot}\kern -0.07em}
\DeclarePairedDelimiters{\IntervalOO}{\lointerv}{\rointerv}
\newcommand{\ivo}[2]{\IntervalOO{#1, #2}}
\def\defiff{\stackrel{\mathrm{def}}{\iff}}
$$</div>

# エントロピーの数学的な性質

## 5.1 相加性・同次性・密度

### 5.1.1 相加性

:::thm 定理5.1
（局所平衡？）エントロピーは相加的。したがって均一な平衡状態では示量的。
:::
相加的：全系の物理量が各部分系の物理量の和になっている様。
示量的：均一な系の部分系で物理量が体積に比例する様。

非平衡状態では$U$などは定義できても、$S$は定義できない（ので局所平衡エントロピーを持ち出さないとおかしい？）。

### 5.1.2 同次性

**この章の残りの節では単純系だけを扱う。**

平衡状態にある単純系を$p$等分する（すべての部分系$i=1,\dots,p$について$X_k^{(i)}=X_k/p$となるようにする）と、局所平衡エントロピーの相加性から
\begin{align}
  S(X_0,\dots,X_t)=pS(X_0/p,\dots,X_t/p)
\end{align}
となる。$q$等分しても同じなので
\begin{align}
  qS(X_0/q,\dots,X_t/q)=pS(X_0/p,\dots,X_t/p)
\end{align}
となり、$X_k/p$を新しく$X_k$と置きなおせば
\begin{align}
  S\qty(\dfrac{p}{q}X_0,\dots,\dfrac{p}{q}X_t)=\dfrac{p}{q}S(X_0,\dots,X_t)
\end{align}
となり、正の有理数についての1次同次性が言える。したがって、$S$は連続であることから任意の正数$\lambda$について（$\lambda$に収束する有理数列を取ることで）
\begin{align}
  S(\lambda X_0,\dots,\lambda X_t)=\lambda S(X_0,\dots,X_t)
\end{align}
が成り立つ（問題5.1）。
:::thm 定理5.2
単純系の（局所平衡？）エントロピーは、その自然な変数の1次同次関数である。
:::

### 5.1.3 エントロピー密度
$V_0$をマクロな単位体積として、局所平衡エントロピーの1次同次性より
\begin{align}
  \dfrac{1}{V}S(U,V,N,\dots,X_t)&=\dfrac{1}{V_0}S\qty(V_0\dfrac{U}{V},V_0,V_0\dfrac{N}{V},\dots,V_0\dfrac{X_t}{V})\\
  &=\dfrac{1}{V_0}S\qty(V_0u,V_0,V_0n,\dots,V_0x_t)
\end{align}
と変形できる。$V_0$は固定されているのでエントロピー密度は自然な示量変数の密度のみに依存することが分かる（V_0をあらわに書いているのは次元を分かりやすくするため？）。

:::thm 定理5.3
エントロピーの自然な変数の数が$t+1$個であるような単純系の性質は、$t$個の変数を持つ関数であるエントロピー密度$s$で決まり、
基本関係式は次のように表せる：
\begin{align}
  S=S(U,V,N,\dots,X_t)=Vs(u,n,\dots,x_t)\label{eq:entdens}\\
  \text{where}\quad u=U/V,\ n=N/V,\ \dots,\ x_t=X_t/V
\end{align}
:::
エントロピー密度も基本関係式を与え（それゆえに完全な熱力学関数の1つ）、エントロピーの自然な変数の密度$u,n,\dots,x_t$はエントロピー密度の自然な変数であり、実質的に熱力学的状態空間を成す（エントロピーの自然な変数が示量変数であることを用いて次元を1つ落とせるということ？逆に言えば$U,V,N,\dots,X_t$で張られる空間は冗長性を持っている？）。

$t=0$では$s$が定数となる。$t=1$の系は後で出てくる。

実際には
\begin{align}
  s\coloneqq \dfrac{1}{V}S(U,V,N,\dots,X_t)
\end{align}
として計算すればよい。

逆に\eqref{eq:entdens}が成り立てば、$1/V$を$\lambda$と読み替えれば$S$が1次同次であることが分かる。

$V$の代わりに$N$で割ってもよい。

**問題5.2** $S=K(UVN)^{1/3}$のとき
1. $S(\lambda U,\lambda V, \lambda N)=S(\lambda^3 UVN)^{1/3}=\lambda S(U,V,N)$より1次同次であることが確認できる。
2. 体積についてのエントロピー密度は$s^{(V)}=K(un)^{1/3}$、物質量についてのエントロピー密度は$s^{(N)}=K(uv)^{1\3}$となる。

### 5.1.4 均一でない平衡状態について

定理5.2の証明における仮想的な$p$等分は、そのような分割が1つ存在していればよいので、たとえば水と水蒸気の比率が全系と同じになるような分割（それはいつでも可能なように思えるが証明の仕方が分からない😢）をすればよく、定理5.2は均一でない平衡状態についても成り立つ。

定理5.3は定理5.2から導かれるのでやはり均一でない平衡状態についても成り立つ。液体と気体に相分離しているような系では
\begin{align}
  u=\dfrac{U}{V}=\dfrac{V^lu^l+V^gu^g}{V^l+V^g}
\end{align}
となり、$u$は体積の重み付けをした平均エネルギー密度だと思える。

## 5.2 凸関数

:::def 凸関数
区間$I\subset \R$について、関数$f\colon I\to \R$が、任意の$a,b\in I,\,\lambda\in \ivo{0}{1}$について
\begin{align}
  f(\lambda a+(1-\lambda)b)\ge \lambda f(a)+(1-\lambda)f(b)
\end{align}
であるとき$f$は$I$において**上に凸 concave**であると言い、不等号が逆向きなら**下に凸 convex**と言う。
:::

$f$が$I$において上に凸$\defiff \qty{(x,y)\mid x\in I,y\ge f(x)}$。

:::thm 補題1
$I$上で定義された$f$および$a < b < c$なる$a,b,c\in I$について以下は同値：
1. $\dfrac{f(b)-f(a)}{b-a}\le \dfrac{f(c)-f(b)}{c-b}$
1. $\dfrac{f(b)-f(a)}{b-a}\dfrac{f(c)-f(a)}{c-a}\le \dfrac{f(c)-f(b)}{c-b}$
:::
:::proof
$2.\implies 1.$は自明。$1.\implies 2.$については、一般に
\begin{align}
  y_1,y_2>0,\dfrac{x_1}{y_1}\le\dfrac{x_2}{y_2}\implies \dfrac{x_1}{y_1}\le\dfrac{x_1+x_2}{y_1+y_2}\le \dfrac{x_2}{y_2}
\end{align}
が成り立つ（引き算すれば$x_2y_1-x_1y_2$が分子に現れ、それは仮定から正）ので成り立つ。
:::

:::thm 補題2
$f$が補題1の条件をみたすことと$f$が$I$において上に凸であることは同値。
:::
:::proof
$d\coloneqq \lambda a+(1-\lambda)b$とおくと$a < d < b$である。$d-a=(1-\lambda)(b-a)$および$b-d=\lambda(b-a)$より
\begin{align}
  \dfrac{f(d)-f(a)}{d-a}\le \dfrac{f(b)-f(d)}{b-d}\iff \lambda(f(d)-f(a))\le (1-\lambda)(f(b)-f(d))\iff f(d)\le \lambda f(a)+(1-\lambda)f(b)
\end{align}
と変形でき、同値であることが分かる。
:::


:::thm 数学の定理5.1
区間$I$において上に凸な関数$f$について
1. $I$の内点$a$において右微分可能かつ左微分可能であり、$D_x^-(a)\le D_x^+(a)$である。従って連続である。
1. $I$の内点$a,b$について$D_x^+(a)\ge D_x^-(b)$。
1. $I$から高々可算個の点を除いた集合$I^\ast$の上で連続的微分可能である。
1. $f'(x-0)\ge f'(x+0)$
1. $a<b\implies f'(a+0)\ge f'(b-0)$
:::
:::proof
1. 
$I$の内点$a$について、$x < a < y$なる$x,y\in I$を取ることができ、補題2より
\begin{align}
  \dfrac{f(a)-f(x)}{a-x}\le \dfrac{f(y)-f(a)}{y-a}\label{eq:gue}
\end{align}
となる。補題1の2.より、$x\to a-0$と増やしてゆくと\eqref{eq:gue}の左辺が増加する。かつ右辺で上から抑えられているので、収束値が存在して左微分可能ということになる：
\begin{align}
  D_x^-(a)\le \dfrac{f(y)-f(a)}{y-a}.
\end{align}
右辺についても、$y\to a+0$と減らしてゆくと補題1の2.から右辺が減少し、かつ下から抑えられているので収束して
\begin{align}
  D_x^-(a)\le D_x^+(a)
\end{align}
が得られる。左右微分可能なので特に左右に連続であり、つまり$f$は$a$において連続である。
1. uo
1. [凸関数](https://ieyasu03.web.fc2.com/PhysicsMath/16-convex.html)を参照。
:::

\begin{align}
  a < b\implies f'(a-0)\ge f'(a+-)\ge f'(b-0)\ge f'(b+0)\label{eq:nya}
\end{align}

**問題5.4** 2点ほど除けば微係数は連続で減少している（不連続点をまたぐ場合も減少）。

:::thm 数学の定理5.2
区間$I$において$f$が連続かつ高々可算個の点を除いた集合$I^\ast$が存在してその上で微分可能でさらに$f'(x)$が$I^\ast$の上で減少関数であれば$f$は$I$において上に凸である。
:::

$I$において$f$が2階微分可能であれば「$f''(x)\le 0\iff f$が上に凸」に帰着する。

**問題5.5**
1. $f(x)=-x^2$について$f''(x)=-2$で上に凸。
1. $f(x)=\ln x$について$f''(x)=-x^{-2}$で上に凸。
1. $f(x)=\sqrt{-x}$について$f''(x)=-x^{-3/2}/4$で上に凸。

:::thm 数学の定理5.3
区間$I$で上に凸な$f$について
1. $I$の内点$x_\ast$について$f'(x_\ast+0)\le f'(x_\ast -0)\implies f(x_\ast)\ge f(x)\ ({}^\forall x\in I)$。つまり$x_\ast$において$f(x)$は最大値を取る。
1. $x_\ast$において微分可能なら、$f'(x_\ast)=0\implies x_\ast$において$f(x)$は最大値を取る。
:::

:::thm 数学の定理5.4
$f,g$を区間$I$において上に凸な関数とすると以下の$h(x)$も括弧内の区間において上に凸。
1. $c>0$について$h(x)=cf(x)\ (x\in I)$
1. $h(x)=f(X-x)\ (X-x\in I)$
1. $h(x)=f(x)+g(x)\ (x\in I)$
1. $h(x)=f(x)+g(X-x)\ (x,X-x\in I)$
1. $h(x)=\operatorname{min}\ (x\in I)$
:::
:::proof
1. $f(\lambda a+(1-\lambda)b)\ge \lambda f(a)+(1-\lambda)f(b)$の両辺を$c$倍すればよい。
1. ただの変数変換。
1. $f(\lambda a+(1-\lambda)b)\ge \lambda f(a)+(1-\lambda)f(b)$と$g$についての不等式を辺々足せばよい。
1. 3.の変数変換（2.で変数変換した場合の不等式が成り立ち、それと$f$についての不等式を足せばよい）。
1. 例えば、$f(\lambda a+(1-\lambda)b)\ge \lambda f(a)+(1-\lambda)f(b)$の不等式で右辺をより小さい$g(a)$で置き換えても不等号は成り立つ。
:::

### 5.2.2 多変数の凸関数

:::def 多変数の凸関数
凸集合$D\subset \R^n$（$a,b\in D\implies \lambda a+(1-\lambda)b\in D$）について関数$f\colon D\to \R$が、任意の$a,b\in D,\,\lambda\in \ivo{0}{1}$について
\begin{align}
  f(\lambda a+(1-\lambda)b)\ge \lambda f(a)+(1-\lambda)f(b)
\end{align}
であるとき$f$は$D$において**上に凸 concave**であると言い、不等号が逆向きなら**下に凸 convex**と言う。
:::

上に凸な$n$変数関数について、$k$個の変数を固定すれば、上に凸な$n-k$変数関数が得られる。

:::thm 数学の定理5.5
上に凸な多変数関数$f$は、各々の変数についても上に凸。
:::

:::thm 数学の定理5.6
数学の定理5.4の多変数版。証明も同じ。
:::

**問題5.8**
アドリブ

## 5.3 エントロピーの凸性

$(\lambda U_a,\lambda V_a),((1-\lambda)U_b,(1-\lambda)V_b)$の2つの部分系から成る複合系について、要請IIより
\begin{align}
  S(\lambda U_a+(1-\lambda)U_b,\lambda V_a+(1-\lambda)V_b)\ge S(\lambda U_a,\lambda V_a)+S((1-\lambda)U_b,(1-\lambda)V_b)
\end{align}
となり、同次性から
\begin{align}
  S(\lambda U_a+(1-\lambda)U_b,\lambda V_a+(1-\lambda)V_b)\ge \lambda S(U_a,V_a)+(1-\lambda)S(U_b,V_b)
\end{align}
となる。すなはち
:::thm 定理5.4
単純系のエントロピーは、その事前な変数について上に凸な関数である。
:::
:::thm 定理5.5
単純系のエントロピーは、その自然な変数の各々について上に凸な関数である。
:::
対偶を取れば、エントロピーが凸関数でなければ要請IIは満たされない。

エントロピーの同次性から、エントロピー密度も示量変数の密度について上に凸であることが分かる。

:::thm 定理5.6
単純系のエントロピー密度は上に凸な関数である。
:::

数学の定理5.1（高々可算個の点を除いて連続的微分可能で、\eqref{eq:nya}より左右それぞれの偏微係数は減少する）と$S$が連続的微分可能であるという要請から
:::thm 定理5.7
単純系のエントロピーの、その自然な変数についての偏微分係数は連続な減少関数である。エントロピー密度も示量変数の密度についての偏微係数は連続な減少関数である。
:::



# 参考文献

1. 清水 明『熱力学の基礎 第2版 I 熱力学の基本構造』（2021、東京大学出版会）
1. [凸関数の理論（PDF）](https://soar-ir.repo.nii.ac.jp/record/17481/files/Liberal_arts24-12.pdf)
1. [凸関数](https://ieyasu03.web.fc2.com/PhysicsMath/16-convex.html)