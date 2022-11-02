import { Head, Html, Main, NextScript } from 'next/document'
import { getCssText } from '../configs/stitches'

export default function MyDocument() {
  return (
    <Html lang='en'>
      <Head>
        <link
          href='https://fonts.googleapis.com/css2?family=Poppins:wght@100&display=optional'
          rel='stylesheet'
        />
        <style id='stitches' dangerouslySetInnerHTML={{ __html: getCssText() }} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
