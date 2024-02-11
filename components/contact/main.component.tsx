const Main = ()=>{

    return (
    <section className="ftco-section contact-section ftco-degree-bg">
        <div className="container">
            <div className="row d-flex mb-5 contact-info">
                <div className="col-md-12 mb-4">
                    <h2 className="h4">Contact Information</h2>
                </div>
                <div className="w-100"></div>
                <div className="col-md-3">
                    <p><span>Address:</span><br/>Kapan, BudhanilKantha - Nepal</p>
                </div>
                <div className="col-md-3">
                    <p><span>Phone:</span> <a href="tel://1234567920"><br/>+ 1235 2355 98</a></p>
                </div>
                <div className="col-md-3">
                    <p><span>Email:</span> <a href="mailto:info@yoursite.com">contact@marloesdaycarecentre.com</a></p>
                </div>
                <div className="col-md-3">
                    <p><span>Website</span> <a href="#">www.marloesdaycarecentre.com</a></p>
                </div>
            </div>
            <div className="row block-9">
                <div className="col-md-6 pr-md-5">
                    <h4 className="mb-4">Do you have any questions?</h4>
                    <form action="#">
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Your Name"/>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Your Email"/>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Subject"/>
                        </div>
                        <div className="form-group">
                            <textarea name="" id="" cols={30} rows={7} className="form-control"
                                      placeholder="Message"/>
                        </div>
                        <div className="form-group">
                            <input type="submit" value="Send Message" className="btn btn-primary py-3 px-5"/>
                        </div>
                    </form>

                </div>

                <div className="col-md-6" id="map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9895.670003809693!2d85.3483291569755!3d27.74170337922145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1bfac9183291%3A0xa0d797e00f59ad4b!2sKopan%20Monastery!5e0!3m2!1sen!2snp!4v1707641058067!5m2!1sen!2snp"
                        width="100%" height="100%" style={{border:"0"}} allowFullScreen={false} loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    </section>
)
}

export default Main;