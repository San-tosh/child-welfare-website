import {NextPage} from "next";
import Nav from "../components/nav.component";
import dynamic from "next/dynamic";
import Head from "next/head";
import {Intro} from "../components/about/intro.component";
import Footer from "../components/footer.component";

const HeroComponentWithNoSSR = dynamic(
    () => import('../components/about/hero.component'),
    {ssr: false}
)

const HeroSectionComponentWithNoSSR = dynamic(
    () => import('../components/hero-section.component'),
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
            <Intro/>
            <div style={{marginTop: "70px", marginBottom:"70px"}}>
                <HeroSectionComponentWithNoSSR/>
            </div>
            <Footer/>
        </div>
    )
}

export default About