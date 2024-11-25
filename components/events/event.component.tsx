import {EventType} from "../../data/events";
import {useRouter} from "next/router";

const Event = ({image,description,heading,date,id}: EventType) => {
    const router = useRouter();
    return (
        <div className="col-md-4 d-flex ftco-animate fadeInUp ftco-animated">
            <div className="blog-entry align-self-stretch">
                <span className="block-20"
                   style={{backgroundImage:`url('${image}')`}}>
                </span>
                <div className="text p-4 d-block">
                    <div className="meta mb-3">
                        <div>{date}</div>
                    </div>
                    <h3 className="heading mb-4"><a href="#">{heading}</a></h3>
                    <p>{description}</p>
                    <p><div style={{color:"#f86f2d", cursor: "pointer"}} onClick={()=>router.push(`events?id=${id}`)}>Read more <i className="ion-ios-arrow-forward"/></div></p>
                </div>
            </div>
        </div>
    )
}

export default Event;