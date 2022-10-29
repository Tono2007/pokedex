/* eslint-disable @next/next/no-title-in-document-head */
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="es" className="scroll-smooth">
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="robots" content="index, follow" />

        <link rel="icon" href="/images/favicon.ico" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        {/* <title></title> */}
      </Head>
      <body className="bg-bgPrimary font-montserrat text-textPrimary">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
