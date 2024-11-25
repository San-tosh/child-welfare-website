export type EventType ={
    image: string,
    heading: string,
    description: string,
    id: string,
    date: string,
    images?: string[],
}

export const events : EventType[] = [
    {
        id: "1",
        heading: "Dr Flavio and Team Visit",
        description: "Dr Flavio from Friuli Mandi Nepal Namaste for interaction session, counselling an check ups for kids.",
        image: "events/flavio/flavio_1.jpg",
        date: "Nov 18, 2024",
        images: [
            "events/flavio/flavio_1.jpg",
            "events/flavio/flavio_2.jpg",
            "events/flavio/flavio_3.jpg",
            "events/flavio/flavio_4.jpg",
            "events/flavio/flavio_5.jpg",
            "events/flavio/flavio_6.jpg",
            "events/flavio/flavio_7.jpg",
            "events/flavio/flavio_8.jpg",
        ],
    },
    {
        id: "2",
        heading: "Clowns Entertainment Session",
        description: "Clown entertainment Session for interaction session",
        image: "events/clown/clown_2.jpg",
        date: "Nov 24, 2024",
        images: [
            "events/clown/clown_1.jpg",
            "events/clown/clown_2.jpg",
            "events/clown/clown_3.jpg",
            "events/clown/clown_4.jpg",
            "events/clown/clown_5.jpg",
            "events/clown/clown_6.jpg",
            "events/clown/clown_7.jpg",
            "events/clown/clown_8.jpg",
        ],
    },
    {
        id: "3",
        heading: "Himalayan Art Initiatives",
        description: "Comprehensive Art and Vision Therapy for cerebral palsy children, fostering communication skills and enhancing visual abilities for improved overall development.",
        image: "cause-6.jpg",
        date: "Nov 16, 2024"
    },

];