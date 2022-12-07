import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
    return (
        <Html>
            <Head/>
            <body>
            <Main />
            <NextScript />
            <script src="/static/js/jquery.min.js"/>
            <script src="/static/js/jquery-migrate-3.0.1.min.js" />
            <script src="/static/js/popper.min.js" />
            <script src="/static/js/bootstrap.min.js" />
            <script src="/static/js/jquery.easing.1.3.js" />
            <script src="/static/js/jquery.waypoints.min.js" />
            <script src="/static/js/jquery.stellar.min.js" />
            <script src="/static/js/owl.carousel.min.js" />
            <script src="/static/js/jquery.magnific-popup.min.js" />
            <script src="/static/js/aos.js"/>
            <script src="/static/js/jquery.animateNumber.min.js" />
            <script src="/static/js/bootstrap-datepicker.js" />
            <script src="/static/js/jquery.timepicker.min.js" />
            <script src="/static/js/scrollax.min.js" />
            {/*<Script src="/static/https://maps.googleapis.com/maps/api/js?key=AIzaSyBVWaKrjvy3MaE7SQ74_uJiULgl1JY0H2s&sensor=false" strategy={"beforeInteractive"}/>*/}
            {/*<Script src="/static/js/google-map.js" strategy={"beforeInteractive"}/>*/}
            <Script src="/static/js/main.js" strategy={"afterInteractive"}/>
            </body>
        </Html>
    )
}