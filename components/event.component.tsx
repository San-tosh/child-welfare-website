import {EventType} from "./latest-event.component";

const Event = ({image,date,heading,time,description,location}: EventType) => {
    return (
        <div className="col-md-4 d-flex ftco-animate fadeInUp ftco-animated">
            <div className="blog-entry align-self-stretch">
                <a href="blog-single.html" className="block-20"
                   style={{backgroundImage:`url(${image})`}}>
                </a>
                <div className="text p-4 d-block">
                    <div className="meta mb-3">
                        <div><a href="#">{date}</a></div>
                    </div>
                    <h3 className="heading mb-4"><a href="#">{heading}</a></h3>
                    <p className="time-loc">
                        <span><i className="icon-map-o"/> {location}</span></p>
                    <p>{description}</p>
                    <p><a href="event.html">Read more <i className="ion-ios-arrow-forward"/></a></p>
                </div>
            </div>
        </div>
    )
}

export default Event;