import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <link
            rel="stylesheet"
            href="/satoshi.css" // Caminho para o arquivo CSS da fonte Satoshi
          />
          <link
            rel="stylesheet"
            href="/integral.css" // Caminho para o arquivo CSS da fonte Integral
          />
          <link
            rel="stylesheet"
            href="/variables.css" // Caminho para o arquivo CSS da fonte Integral
          />
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
