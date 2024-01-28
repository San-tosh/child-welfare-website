import {useEffect} from "react";

const services = [
    {
        name: "General Physician",
        description: "Our dedicated General Physician services for children with cerebral palsy offer specialized care, tailored medical support ensuring their overall well-being.",
        image: "cause-2.jpg"
    },
    {
        name: "Psychiatric Consultation",
        description: "Expert psychiatric consultations for cerebral palsy children, fostering mental well-being and tailored support. Our compassionate approach ensures holistic care.",
        image: "cause-1.jpg"
    },
    {
        name: "Neuro Pediatric Consultation",
        description: "Specialized Neuro Pediatric consultations for cerebral palsy children, ensuring comprehensive care and expert guidance for optimal developmental support and health.",
        image: "cause-3.jpg"
    },
    {
        name: "Orthopedic Consultation",
        description: "Tailored Orthopedic consultations for cerebral palsy children, addressing musculoskeletal needs with precision for improved mobility and well-being.",
        image: "cause-4.jpg"
    },
    {
        name: "Physiotherapy",
        description: "Expert physiotherapy services for cerebral palsy children, promoting mobility, strength, and independence through personalized care and dedicated support.",
        image: "cause-5.jpg"
    },
    {
        name: "Speech & Vision Therapy",
        description: "Comprehensive Speech and Vision Therapy for cerebral palsy children, fostering communication skills and enhancing visual abilities for improved overall development.",
        image: "cause-6.jpg"
    }
]
const Causes = () => {
    const carouselCause = () => {
        // @ts-ignore
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
                        <h2 className="mb-4">Our Services</h2>
                        <p>We provide comprehensive clinical care and support for children with Cerebral Palsy ,Autism, Down syndrome, Intellectual disabilities and other neurological disorders.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 ftco-animate fadeInUp ftco-animated">
                        <div className="carousel-cause owl-carousel owl-loaded owl-drag">
                            {services.map((service)=>{
                                return (
                                    <div className="item" key={service.name}>
                                        <div className="cause-entry">
                                            <span className="img" style={{backgroundImage:`url(${service.image})`}}/>
                                            <div className="text p-3 p-md-4">
                                                <h3>{service.name}</h3>
                                                <p>{service.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Causes;