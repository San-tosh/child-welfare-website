import {NextPage} from "next";
import Nav from "../components/nav.component";
import dynamic from "next/dynamic";
import Head from "next/head";
import {Intro} from "../components/about/intro.component";
import Footer from "../components/footer.component";
import Section from "../components/services/section.component";

const HeroComponentWithNoSSR = dynamic(
    () => import('../components/services/hero.component'),
    {ssr: false}
)

const HeroSectionComponentWithNoSSR = dynamic(
    () => import('../components/hero-section.component'),
    {ssr: false}
)

const Services: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Marloes Day Care Centre Services</title>
                <meta name="description" content="Day Care Centre for Cerebral Palsy Children for Nepal"/>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
            </Head>
            <Nav/>
            <HeroComponentWithNoSSR/>
            <Section/>
            <Footer/>
        </div>
    )
}

export default Services