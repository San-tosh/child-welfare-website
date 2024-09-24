export type BlogType ={
    title: string,
    description: string,
    createdAt: string,
    image: string
}
const RecentBlog = () => {
    const blogs : BlogType[] = [
        {
            title: "Hurricane Irma has devastated Florida",
            description: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
            createdAt: "Sept 10, 2018",
            image: "image_1.jpg"
        },
        {
            title: "Hurricane Irma has devastated Florida",
            description: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
            createdAt: "Sept 10, 2018",
            image: "image_2.jpg"
        },
        {
            title: "Hurricane Irma has devastated Florida",
            description: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
            createdAt: "Sept 10, 2018",
            image: "image_3.jpg"
        },
    ];

    return (
        <section className="ftco-section">
            <div className="container">
                <div className="row justify-content-center mb-5 pb-3">
                    <div className="col-md-7 heading-section ftco-animate text-center fadeInUp ftco-animated">
                        <h2 className="mb-4">Recent from blog</h2>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                            there live the blind texts.</p>
                    </div>
                </div>
                <div className="row d-flex">
                    {blogs.map((blog,key)=>{
                    return (
                        <div className="col-md-4 d-flex ftco-animate fadeInUp ftco-animated" key={key}>
                            <div className="blog-entry align-self-stretch">
                                <a href="#" className="block-20"
                                   style={{backgroundImage:`url(${blog.image})`}}>
                                </a>
                                <div className="text p-4 d-block">
                                    <div className="meta mb-3">
                                        <div><a href="#">{blog.createdAt}</a></div>
                                    </div>
                                    <h3 className="heading mt-3"><a href="#">{blog.title}</a>
                                    </h3>
                                    <p>{blog.description}</p>
                                </div>
                            </div>
                        </div>
                    )})}
                </div>
                </div>
        </section>
    )
}

export default RecentBlog;