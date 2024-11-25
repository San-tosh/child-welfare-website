import {NextPage} from "next";
import Nav from "../components/nav.component";
import dynamic from "next/dynamic";
import Head from "next/head";
import Footer from "../components/footer.component";
import Section from "../components/events/section.component";
import {useRouter} from "next/router";
import Detail from "../components/events/detail.component";

const HeroComponentWithNoSSR = dynamic(
    () => import('../components/events/hero.component'),
    {ssr: false}
)

const Events: NextPage = () => {

    const router = useRouter();
    const id : string | undefined = router.query.id as unknown as string;
    return (
        <div>
            <Head>
                <title>Marloes Day Care Centre Events</title>
                <meta name="description" content="Day Care Centre for Cerebral Palsy Children for Nepal"/>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
            </Head>
            <Nav/>
            <HeroComponentWithNoSSR/>
            {id ? <Detail id={id}/> :
            <Section/> }
            <Footer/>
        </div>
    )
}

export default Events