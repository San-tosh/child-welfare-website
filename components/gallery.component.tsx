import GalleryCardComponent from "./gallery-card.component";

const GalleryComponent = () =>{
    const galleryImages : string[] = [
        'cause-2.jpg',
        'cause-3.jpg',
        'cause-4.jpg',
        'cause-5.jpg',
        'cause-6.jpg',
        'image_3.jpg',
        'image_2.jpg',
        'image_1.jpg',
    ];

    return (
        <section className="ftco-gallery">
            <div className="d-md-flex">
                { galleryImages.map((imageName: string, key) => {
                     return key < 4 && <GalleryCardComponent imagePath={imageName} key={key}/>
                })}
            </div>
            <div className="d-md-flex">
                { galleryImages.map((imageName: string, key) => {
                    return key > 3 && <GalleryCardComponent imagePath={imageName} key={key}/>
                })}
            </div>
        </section>
    )
}

export default GalleryComponent;