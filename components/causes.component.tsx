import {useEffect} from "react";

const Causes = () => {
    const carouselCause = () => {
        $('.carousel-cause').owlCarousel({
            autoplay: true,
            center: true,
            loop: true,
            items:1,
            margin: 30,
            stagePadding:0,
            nav: true,
            navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
            responsive:{
                0:{
                    items: 1,
                    stagePadding: 0
                },
                600:{
                    items: 2,
                    stagePadding: 50
                },
                1000:{
                    items: 3,
                    stagePadding: 100
                }
            }
        });
    }

    useEffect(()=>{
        carouselCause();
    },[]);

    return (
        <section className="ftco-section bg-light">
            <div className="container-fluid">
                <div className="row justify-content-center mb-5 pb-3">
                    <div className="col-md-5 heading-section ftco-animate text-center fadeInUp ftco-animated">
                        <h2 className="mb-4">Our Causes</h2>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                            there live the blind texts.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 ftco-animate fadeInUp ftco-animated">
                        <div className="carousel-cause owl-carousel owl-loaded owl-drag">
                            <div className="item">
                                <div className="cause-entry">
                                    <a href="#" className="img" style={{backgroundImage:"url(cause-1.jpg)"}}/>
                                    <div className="text p-3 p-md-4">
                                        <h3><a href="#">Clean water for the urban area</a></h3>
                                        <p>Even the all-powerful Pointing has no control about the blind texts it is an
                                            almost unorthographic life</p>
                                        <span className="donation-time mb-3 d-block">Last donation 1w ago</span>
                                        <div className="progress custom-progress-success">
                                            <div className="progress-bar bg-primary" role="progressbar"
                                                 style={{width: "28%"}} aria-valuenow={28} aria-valuemin={0}
                                                 aria-valuemax={100}/>
                                        </div>
                                        <span className="fund-raised d-block">$12,000 raised of $30,000</span>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="cause-entry">
                                    <a href="#" className="img" style={{backgroundImage:"url(cause-2.jpg)"}}/>
                                    <div className="text p-3 p-md-4">
                                        <h3><a href="#">Clean water for the urban area</a></h3>
                                        <p>Even the all-powerful Pointing has no control about the blind texts it is an
                                            almost unorthographic life</p>
                                        <span className="donation-time mb-3 d-block">Last donation 1w ago</span>
                                        <div className="progress custom-progress-success">
                                            <div className="progress-bar bg-primary" role="progressbar"
                                                 style={{width: "28%"}} aria-valuenow="28" aria-valuemin="0"
                                                 aria-valuemax="100"/>
                                        </div>
                                        <span className="fund-raised d-block">$12,000 raised of $30,000</span>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="cause-entry">
                                    <a href="#" className="img" style={{backgroundImage:"url(cause-3.jpg)"}}/>
                                    <div className="text p-3 p-md-4">
                                        <h3><a href="#">Clean water for the urban area</a></h3>
                                        <p>Even the all-powerful Pointing has no control about the blind texts it is an
                                            almost unorthographic life</p>
                                        <span className="donation-time mb-3 d-block">Last donation 1w ago</span>
                                        <div className="progress custom-progress-success">
                                            <div className="progress-bar bg-primary" role="progressbar"
                                                 style={{width: "28%"}} aria-valuenow={28} aria-valuemin={0}
                                                 aria-valuemax={100}/>
                                        </div>
                                        <span className="fund-raised d-block">$12,000 raised of $30,000</span>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="cause-entry">
                                    <a href="#" className="img" style={{backgroundImage:"url(cause-4.jpg)"}}/>
                                    <div className="text p-3 p-md-4">
                                        <h3><a href="#">Clean water for the urban area</a></h3>
                                        <p>Even the all-powerful Pointing has no control about the blind texts it is an
                                            almost unorthographic life</p>
                                        <span className="donation-time mb-3 d-block">Last donation 1w ago</span>
                                        <div className="progress custom-progress-success">
                                            <div className="progress-bar bg-primary" role="progressbar"
                                                 style={{width: "28%"}} aria-valuenow={28} aria-valuemin={0}
                                                 aria-valuemax={100}/>
                                        </div>
                                        <span className="fund-raised d-block">$12,000 raised of $30,000</span>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="cause-entry">
                                    <a href="#" className="img" style={{backgroundImage:"url(cause-5.jpg)"}}/>
                                    <div className="text p-3 p-md-4">
                                        <h3><a href="#">Clean water for the urban area</a></h3>
                                        <p>Even the all-powerful Pointing has no control about the blind texts it is an
                                            almost unorthographic life</p>
                                        <span className="donation-time mb-3 d-block">Last donation 1w ago</span>
                                        <div className="progress custom-progress-success">
                                            <div className="progress-bar bg-primary" role="progressbar"
                                                 style={{width: "28%"}} aria-valuenow={28} aria-valuemin={0}
                                                 aria-valuemax={100}/>
                                        </div>
                                        <span className="fund-raised d-block">$12,000 raised of $30,000</span>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="cause-entry">
                                    <a href="#" className="img" style={{backgroundImage:"url(cause-6.jpg)"}}/>
                                    <div className="text p-3 p-md-4">
                                        <h3><a href="#">Clean water for the urban area</a></h3>
                                        <p>Even the all-powerful Pointing has no control about the blind texts it is an
                                            almost unorthographic life</p>
                                        <span className="donation-time mb-3 d-block">Last donation 1w ago</span>
                                        <div className="progress custom-progress-success">
                                            <div className="progress-bar bg-primary" role="progressbar"
                                                 style={{width: "28%"}} aria-valuenow={28} aria-valuemin={0}
                                                 aria-valuemax={100}/>
                                        </div>
                                        <span className="fund-raised d-block">$12,000 raised of $30,000</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Causes;