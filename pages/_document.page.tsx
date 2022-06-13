import { Html, Head, Main, NextScript } from "next/document";
import type { NextPage } from "next";

const Document: NextPage = () => (
  <Html lang="ja">
    <Head>
      <meta charSet="UTF-8" />
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat:700&display=swap"
        rel="stylesheet"
      />
      <link rel="icon" href="favicon.svg" type="image/svg+xml" />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
