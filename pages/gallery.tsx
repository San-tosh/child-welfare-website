import {NextPage} from "next";
import Nav from "../components/nav.component";
import dynamic from "next/dynamic";
import Head from "next/head";
import Footer from "../components/footer.component";
import MainGallery from "../components/gallery/main.component";

const HeroComponentWithNoSSR = dynamic(
    () => import('../components/gallery/hero.component'),
    {ssr: false}
)

const About: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Marloes Day Care Centre</title>
                <meta name="description" content="Day Care Centre for Cerebral Palsy Children for Nepal"/>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
            </Head>
            <Nav/>
            <HeroComponentWithNoSSR/>
            <MainGallery/>
            <Footer/>
        </div>
    )
}

export default About