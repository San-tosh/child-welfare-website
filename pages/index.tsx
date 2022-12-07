import type {NextPage} from 'next'
import Head from 'next/head'
import Nav from "../components/nav.component";
import dynamic from "next/dynamic";
import SectionFirst from "../components/section-first.component";
import DonatedComponent from "../components/donated.component";
import GalleryComponent from "../components/gallery.component";
import RecentBlog from "../components/recent-blog.component";
import LatestEvent from "../components/latest-event.component";
import Volunteer from "../components/volunteer.component";
import Footer from "../components/footer.component";

const HeroComponentWithNoSSR = dynamic(
    () => import('../components/hero.component'),
    {ssr: false}
)
const HeroSectionComponentWithNoSSR = dynamic(
    () => import('../components/hero-section.component'),
    {ssr: false}
)

const CausesComponentWithNoSSR = dynamic(
    () => import('../components/causes.component'),
    {ssr: false}
)
const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Marloes Day Care Centre</title>
                <meta name="description" content="Marloes Day Care Centre"/>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
                <link rel="icon" href="/favicon.ico"/>
                <link href="https://fonts.googleapis.com/css?family=Dosis:200,300,400,500,700" rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css?family=Overpass:300,400,400i,600,700" rel="stylesheet"/>

            </Head>
            {/*//components*/}
            <Nav/>
            <HeroComponentWithNoSSR/>
            <HeroSectionComponentWithNoSSR/>
            <SectionFirst/>
            <CausesComponentWithNoSSR/>
            <DonatedComponent/>
            <GalleryComponent/>
            <RecentBlog/>
            <LatestEvent/>
            <Volunteer/>
            <Footer/>
        </div>
    )
}

export default Home
