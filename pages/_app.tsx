import '../styles/globals.css'

import '../styles/css/open-iconic-bootstrap.min.css'
import '../styles/css/animate.css'

import '../styles/css/owl.carousel.min.css'
import '../styles/css/owl.theme.default.min.css'
import '../styles/css/magnific-popup.css'

import '../styles/css/aos.css'
import '../styles/css/ionicons.min.css'

import '../styles/css/jquery.timepicker.css'

import '../styles/css/style.css'
import '../styles/css/flaticon.css'
import '../styles/css/icomoon.css'

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {

  return <>
    <Component {...pageProps} />
    </>
}

export default MyApp
