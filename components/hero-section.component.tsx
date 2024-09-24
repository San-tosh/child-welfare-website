import {useEffect} from "react";

const HeroSection = () => {
    const counter = () => {
            // @ts-ignore
        $('#section-counter').waypoint( function( direction ) {

                // @ts-ignore
            if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {

                    // @ts-ignore
                    var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
                    $('.number').each(function(){
                        var $this = $(this),
                            num = $this.data('number');
                        console.log(num);
                        // @ts-ignore
                        $this.animateNumber(
                            {
                                number: num,
                                numberStep: comma_separator_number_step
                            }, 7000
                        );
                    });

                }
            } , { offset: '95%' } );
        }

    useEffect(()=>{
        counter();
    },[]);

    return (
        <section className="ftco-counter ftco-intro" id="section-counter">
            <div className="container">
                <div className="row no-gutters">
                    <div className="col-md-5 d-flex justify-content-center counter-wrap ftco-animate fadeInUp ftco-animated">
                        <div className="block-18 color-1 align-items-stretch">
                            <div className="text">
                                <span>Served Over</span>
                                <strong className="number" data-number="200">0</strong>
                                <span>Children in Nepal</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md d-flex justify-content-center counter-wrap ftco-animate fadeInUp ftco-animated">
                        <div className="block-18 color-2 align-items-stretch">
                            <div className="text">
                                <h3 className="mb-4">Donate Money</h3>
                                <p>Your contribution enables vital programs and therapies, providing these resilient kids with the care they deserve.</p>
                                <p><a href="#" className="btn btn-white px-3 py-2 mt-2">Donate Now</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md d-flex justify-content-center counter-wrap ftco-animate fadeInUp ftco-animated">
                        <div className="block-18 color-3 align-items-stretch">
                            <div className="text">
                                <h3 className="mb-4">Be a Volunteer</h3>
                                <p>Become a beacon of hope for children with cerebral palsy by volunteering with Marloes Day Care Centre.</p>
                                <p><a href="#" className="btn btn-white px-3 py-2 mt-2">Be A Volunteer</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection;