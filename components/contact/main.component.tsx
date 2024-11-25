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
                    <p><span>Phone:</span> <a href="tel://+977 9843353175"><br/>+977 9843353175</a></p>
                </div>
                <div className="col-md-3">
                    <p><span>Email:</span> <a href="mailto:info@marloesdaycarecentre.org">info@marloesdaycarecentre.org</a></p>
                </div>
                <div className="col-md-3">
                    <p><span>Website</span> <a href="https://www.marloesdaycarecentre.org">www.marloesdaycarecentre.org</a></p>
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
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.3116721804695!2d85.35855097538138!3d27.73853127616474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1b478a7937b5%3A0xd5f9c6d9e383f168!2sMarlos%20Day%20Care!5e0!3m2!1sen!2snp!4v1732505491252!5m2!1sen!2snp"
                    width="100%" height="100%" style={{border: "0"}} allowFullScreen={false} loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </div>
    </div>
</section>
)
}

export default Main;