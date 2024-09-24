import GalleryCardComponent from "../gallery-card.component";

const MainGallery = () =>{
    const galleryImages : string[] = [
        'cause-2.jpg',
        'cause-3.jpg',
        'cause-4.jpg',
        'cause-5.jpg',
        'cause-6.jpg',
        'image_3.jpg',
        'image_2.jpg',
        'image_1.jpg',
        'gallery_1.jpg',
        'gallery_2.jpg',
        'gallery_3.jpg',
        'gallery_4.jpg',
    ];

    return (
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
    )
}

export default MainGallery;