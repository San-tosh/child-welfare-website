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
            description: "On World Cerebral Palsy Day, we celebrate to raise awareness individuals with cerebral palsy. " +
                "Through this event, we aim to promote inclusion, provide valuable information for caregivers, and build a supportive community. " +
                "Expect interactive sessions, inspirational stories, and fun activities for all ages. Let's come together.",
            date: "Oct 6, 2024",
            image: "event-1.jpg",
            location: "Kapan - KTM, Marloes Day Care Centre",
        },
        {
            heading: "Happy Deepawali",
            time: "10:30AM-03:30PM",
            description: " Celebrate the festival of lights, Deepawali, with us at Marloes Day Care Centre. This festive occasion is all about joy, togetherness, and the triumph of good over evil. Engage in traditional rituals, vibrant cultural performances, and enjoy festive delicacies. Let's illuminate the day with love, laughter, and the warmth of family and friends.",
            date: "Nov 15, 2024",
            image: "event-2.jpg",
            location: "Kapan - KTM, Marloes Day Care Centre",
        },
        {
            heading: "Merry Christmas",
            time: "10:30AM-03:30PM",
            description: "Spread the holiday cheer by joining our Merry Christmas celebration! Enjoy a day filled with festive decorations, joyful carols, and the spirit of giving. We'll have activities for kids, a special visit from Santa, and a cozy gathering to share stories and gifts. Celebrate the joy of the season with us in a warm and welcoming environment.",
            date: "Dec 25, 2023",
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