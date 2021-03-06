import type { AppProps } from "next/app";
import Head from "next/head";
import { Layout } from "~/layouts/layout";
import { Loading } from "~/layouts/loading";
import "~/styles/app.css";
import { MathJaxEnvironment } from "~/components/mathjaxenvironment";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
      </Head>
      <Loading />
      <MathJaxEnvironment>
        <Component {...pageProps} />
      </MathJaxEnvironment>
    </Layout>
  );
}
