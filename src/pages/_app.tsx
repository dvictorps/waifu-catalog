import { GlobalStyles } from '../styles'
import type { AppProps } from 'next/app'
import { Navbar } from '../components'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GlobalStyles>
      <Component {...pageProps} />
    </GlobalStyles>
  )
}
