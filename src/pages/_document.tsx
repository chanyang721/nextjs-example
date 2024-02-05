import { Head, Html, Main, NextScript } from 'next/document'
import { JSX } from 'react'



export default function Document(): JSX.Element {
  const Forts = () => (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&display=swap"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
    </>
  )

  return (
    <Html lang="kr">
      <Head>
        <Forts/>
      </Head>
      <body>
      <title>Boxer Front</title>
      <meta name="description" content="Boxer page"/>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      />
        <Main/>
        <NextScript/>
      </body>
    </Html>
  )
}