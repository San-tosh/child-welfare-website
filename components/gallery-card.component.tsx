import {useEffect} from "react";

const GalleryCardComponent = ({imagePath} : {imagePath: string}) =>{
    // Use effect to initialize the lightbox script when the component is mounted
    useEffect(() => {
        if (typeof window !== 'undefined') {
            // Initialize your gallery plugin here if needed
            // Example: If using Magnific Popup
            // @ts-ignore
            $('.image-popup').magnificPopup({
                type: 'image',
                gallery: {
                    enabled: true,
                }
            });
        }
    }, []);

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