import '@/styles/globals.css'
import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import Head from 'next/head';
import { ReactElement, ReactNode } from 'react'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)
  return getLayout(
  <>
    <Head>
      <title>KAYPANG SILAT SPORT</title>
      {/* <link rel="shortcut icon" type="image/png" href="/img/kaypang.png" /> */}
    </Head>
    <Component {...pageProps} />
  </>
  )
}
