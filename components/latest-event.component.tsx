import Event from "./event.component";

export type EventType ={
    image: string,
    date: string,
    heading: string,
    time: string,
    description: string,
    location: string,
}
const LatestEvent = () => {
    const events : EventType[] = [
        {
            heading: "World Cerebral Palsy Day",
            time: "10:30AM-03:30PM",
            description: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
            date: "Sept 10, 2018",
            image: "event-1.jpg",
            location: "Kapan - KTM, Marloes Day Care Centre",
        },
        {
            heading: "Happy Deepawali",
            time: "10:30AM-03:30PM",
            description: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
            date: "Sept 10, 2018",
            image: "event-2.jpg",
            location: "Kapan - KTM, Marloes Day Care Centre",
        },
        {
            heading: "Merry Christmas",
            time: "10:30AM-03:30PM",
            description: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
            date: "Sept 10, 2018",
            image: "event-3.jpg",
            location: "Kapan - KTM, Marloes Day Care Centre",
        },

    ];
    return (
            <section className="ftco-section bg-light">
                <div className="container">
                    <div className="row justify-content-center mb-5 pb-3">
                        <div className="col-md-7 heading-section ftco-animate fadeInUp text-center ftco-animated ">
                            <h2 className="mb-4">Our Latest Events</h2>
                        </div>
                    </div>
                    <div className="row">
                        {events.map((event,key)=> (
                            <Event key={key} {...event}/>
                         ))}
                    </div>
                </div>
            </section>
    )
}

export default LatestEvent;