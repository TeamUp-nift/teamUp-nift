import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div> 
      <Head>
        <title>Nift MarketPlace</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="favicon.svg" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.14.0/css/all.css"
        integrity='sha384-HzLeBuhoNPvSl5KYnjx0BT+WB0QEEqLprO+NBkkk5gbc67FTaL7XIGa2w1L0Xbgc'
        crossOrigin='anonymous' />
      </Head>

      <Component {...pageProps} />
   </div>
  )
}

export default MyApp
