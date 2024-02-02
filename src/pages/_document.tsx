import { Head, Html, Main, NextScript } from 'next/document'
import { JSX } from 'react'



export default function Document(): JSX.Element {

  return (
    <Html lang="kr">
      <Head/>
      <body>
        <title>Boxer Front</title>
        <meta name='description' content='Boxer page'/>
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