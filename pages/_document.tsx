import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
    return (
        <Html>
             <Head>
                     <link rel="icon" href="/favicon.ico"/>
                     <link href="https://fonts.googleapis.com/css?family=Dosis:200,300,400,500,700" rel="stylesheet"/>
                     <link href="https://fonts.googleapis.com/css?family=Overpass:300,400,400i,600,700" rel="stylesheet"/>
             </Head>
            <body>
            <Main />
            <NextScript />
            {/* eslint-disable-next-line @next/next/no-sync-scripts */}
            <script src="/static/js/jquery.min.js"/>
            {/* eslint-disable-next-line @next/next/no-sync-scripts */}
            <script src="/static/js/jquery-migrate-3.0.1.min.js" />
            {/* eslint-disable-next-line @next/next/no-sync-scripts */}
            <script src="/static/js/popper.min.js" />
            {/* eslint-disable-next-line @next/next/no-sync-scripts */}
            <script src="/static/js/bootstrap.min.js" />
            {/* eslint-disable-next-line @next/next/no-sync-scripts */}
            <script src="/static/js/jquery.easing.1.3.js" />
            {/* eslint-disable-next-line @next/next/no-sync-scripts */}
            <script src="/static/js/jquery.waypoints.min.js" />
            {/* eslint-disable-next-line @next/next/no-sync-scripts */}
            <script src="/static/js/jquery.stellar.min.js" />
            {/* eslint-disable-next-line @next/next/no-sync-scripts */}
            <script src="/static/js/owl.carousel.min.js" />
            {/* eslint-disable-next-line @next/next/no-sync-scripts */}
            <script src="/static/js/jquery.magnific-popup.min.js" />
            {/* eslint-disable-next-line @next/next/no-sync-scripts */}
            <script src="/static/js/aos.js"/>
            {/* eslint-disable-next-line @next/next/no-sync-scripts */}
            <script src="/static/js/jquery.animateNumber.min.js" />
            {/* eslint-disable-next-line @next/next/no-sync-scripts */}
            <script src="/static/js/bootstrap-datepicker.js" />
            {/* eslint-disable-next-line @next/next/no-sync-scripts */}
            <script src="/static/js/jquery.timepicker.min.js" />
            {/* eslint-disable-next-line @next/next/no-sync-scripts */}
            <script src="/static/js/scrollax.min.js" />
            {/*<Script src="/static/https://maps.googleapis.com/maps/api/js?key=AIzaSyBVWaKrjvy3MaE7SQ74_uJiULgl1JY0H2s&sensor=false" strategy={"beforeInteractive"}/>*/}
            {/*<Script src="/static/js/google-map.js" strategy={"beforeInteractive"}/>*/}
            <Script src="/static/js/main.js" strategy={"afterInteractive"}/>
            </body>
        </Html>
    )
}