import {ServiceType} from "../../data/services";

const Service = ({image,description,heading}: ServiceType) => {
    return (
        <div className="col-md-4 d-flex ftco-animate fadeInUp ftco-animated">
            <div className="blog-entry align-self-stretch">
                <span className="block-20"
                   style={{backgroundImage:`url(${image})`}}>
                </span>
                <div className="text p-4 d-block">
                    <h3 className="heading mb-4"><a href="#">{heading}</a></h3>
                    <p>{description}</p>
                    {/*<p><a href="event.html">Read more <i className="ion-ios-arrow-forward"/></a></p>*/}
                </div>
            </div>
        </div>
    )
}

export default Service;