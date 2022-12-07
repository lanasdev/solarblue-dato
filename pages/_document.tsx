import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="de" className="scroll-smooth">
      <Head />
      <body className="bg-white text-black">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
