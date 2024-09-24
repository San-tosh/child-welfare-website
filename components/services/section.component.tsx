import {services} from "../../data/services";
import Service from "./service.component";
import Link from "next/link";

const Section = () => {
    return (
        <section className="ftco-section bg-light pb-3">
            <div className="container">
                <div className="row justify-content-center mb-5 pb-3">
                    <div className="col-md-7 heading-section ftco-animate fadeInUp text-center ftco-animated ">
                        <h2 className="mb-4">Our Services</h2>
                    </div>
                </div>
                <div className="row">
                    {services.map((event,key)=> (
                        <Service key={key} {...event}/>
                    ))}
                </div>
            </div>
            <div className="d-flex justify-content-center">
                        <p>
                            <Link href={"/contact"}>
                                <a className="btn btn-white px-3 py-2 mt-2">Join Us</a>
                            </Link>
                        </p>
            </div>
        </section>

    )
}

export default Section;