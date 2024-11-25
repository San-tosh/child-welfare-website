const Hero = ()=>{
return (
    <div className="hero-wrap" style={{backgroundImage: "url(\"landing/landing_2.jpg\")"}} data-stellar-background-ratio="0.5">
        <div className="overlay" style={{background: `rgba(0,0,0,0.6)`, opacity: 0.7}}/>
        <div className="container">
            <div className="row no-gutters slider-text align-items-center justify-content-center"
                 data-scrollax-parent="true">
                <div className="col-md-7 ftco-animate text-center fadeInUp ftco-animated" data-scrollax=" properties: { translateY: '70%' }">
                    <h1 className="mb-2" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">
                        Events</h1>
                    <span style={{color:'white', fontSize:'1.2rem',fontWeight:'lighter'}}><i>Initiatives to support the cause</i></span>
                </div>
            </div>
        </div>
    </div>
)
}

export default Hero;