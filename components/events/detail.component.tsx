import GalleryCardComponent from "../gallery-card.component";
import {events} from "../../data/events";
import Link from "next/link";

const Detail = ({id}: {id: string}) => {
    // Find the event matching the provided id
    const selectedEvent = events.find((event) => event.id === id);

    // If no matching event is found, display an appropriate message
    if (!selectedEvent) {
        return <p>No event found with the provided ID.</p>;
    }

    // Use the `images` property from the selected event
    const galleryImages: string[] = selectedEvent.images || [];

    return (
        <section className="ftco-section bg-light">
            <div className="row justify-content-center">
                <div className="col-md-7 heading-section text-center">
                    <h2 className="">{selectedEvent.heading}</h2>
                    <p>{selectedEvent.description}</p>
                </div>
            </div>
            <section className="ftco-gallery ftco-section" style={{paddingLeft: "150px", paddingRight: "150px"}}>
                <div className="d-md-flex">
                    {galleryImages.map((imageName: string, key) => {
                        return key < 4 && <GalleryCardComponent imagePath={imageName} key={key}/>
                    })}
                </div>
                <div className="d-md-flex">
                    {galleryImages.map((imageName: string, key) => {
                        return key > 3 && key < 8 && <GalleryCardComponent imagePath={imageName} key={key}/>
                    })}
                </div>
                <div className="d-md-flex">
                    {galleryImages.map((imageName: string, key) => {
                        return key > 7 && <GalleryCardComponent imagePath={imageName} key={key}/>
                    })}
                </div>
            </section>
            <div className="d-flex justify-content-center">
                <p>
                    <Link href={"/events"}>
                        <a className="btn btn-white px-3 py-2">Back</a>
                    </Link>
                </p>
            </div>
        </section>
    )
}

export default Detail;