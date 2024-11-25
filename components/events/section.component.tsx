import {events} from "../../data/events";
import Link from "next/link";
import Event from "./event.component";

const Section = () => {
    return (
        <section className="ftco-section bg-light pb-3">
            <div className="container">
                <div className="row justify-content-center mb-5 pb-3">
                    <div className="col-md-7 heading-section ftco-animate fadeInUp text-center ftco-animated ">
                        <h2 className="mb-4">New Events</h2>
                    </div>
                </div>
                <div className="row">
                    {events.map((event,key)=> (
                        <Event key={key} {...event}/>
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