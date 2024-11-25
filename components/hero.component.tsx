import ReactPlayer from "react-player";

const Hero = ()=>{

return (
    <div className="hero-wrap" style={{backgroundImage: "url(\"landing/landing_1.jpg\")"}} data-stellar-background-ratio="0.5">
        <div className="overlay" style={{background: `rgba(0,0,0,0.6)`, opacity: 0.7}}/>
        <div className="container">
            <div className="row no-gutters slider-text align-items-center justify-content-center"
                 data-scrollax-parent="true">
                <div className="col-md-7 ftco-animate text-center fadeInUp ftco-animated" data-scrollax=" properties: { translateY: '70%' }">
                    <h1 className="mb-2" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">
                        Empowering Disablities</h1>
                    <span style={{color:'white', fontSize:'1.2rem',fontWeight:'lighter'}}>The Ultimate resource for Cerebral Palsy children</span>
                    {/*<p className="mt-3 mb-5" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"><a*/}
                    {/*    href="#">CONNECT US</a></p>*/}

                    <p data-scrollax="properties: { translateY: '30%', opacity: 1.6 }" className="mt-3">
                        <a
                        href="https://youtu.be/lm9KIutwSYU?feature=shared"
                        className="btn btn-white btn-outline-white px-4 py-3 popup-vimeo"><span
                        className="icon-play mr-2"/>Watch Video</a>
                    </p>
                </div>
            </div>
        </div>
    </div>
)
}

export default Hero;