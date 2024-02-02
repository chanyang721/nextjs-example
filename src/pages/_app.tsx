import { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  const body = 'test'

  return (
    <div>{body}</div>
  )
}
