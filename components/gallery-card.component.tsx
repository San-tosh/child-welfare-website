
const GalleryCardComponent = ({imagePath} : {imagePath: string}) =>{
    return (
        <a href={imagePath}
           className="gallery image-popup d-flex justify-content-center align-items-center img ftco-animate fadeInUp ftco-animated"
           style={{backgroundImage:`url(${imagePath})`}}>
            <div className="icon d-flex justify-content-center align-items-center">
                <span className="icon-search"/>
            </div>
        </a>
    )
}

export default GalleryCardComponent;