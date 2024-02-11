import {NextPage} from "next";
import Nav from "../components/nav.component";
import dynamic from "next/dynamic";
import Head from "next/head";
import Footer from "../components/footer.component";
import Section from "../components/services/section.component";
import Main from "../components/contact/main.component";

const HeroComponentWithNoSSR = dynamic(
    () => import('../components/contact/hero.component'),
    {ssr: false}
)

const Contact: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Marloes Day Care Centre Services Contact</title>
                <meta name="description" content="Day Care Centre Contact for Cerebral Palsy Children for Nepal"/>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
            </Head>
            <Nav/>
            <HeroComponentWithNoSSR/>
            <Main/>
            <Footer/>
        </div>
    )
}

export default Contact