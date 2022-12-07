const Footer = ()=>{
    const year = new Date().getFullYear();
    return (
        <footer className="ftco-footer ftco-section img">
            <div className="overlay"/>
            <div className="container">
                <div className="row mb-5">
                    <div className="col-md-5">
                        <div className="ftco-footer-widget mb-4">
                            <h2 className="ftco-heading-2">About Us</h2>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                                there live the blind texts.</p>
                            <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                                <li className="ftco-animate"><a href="#"><span className="icon-twitter"/></a></li>
                                <li className="ftco-animate"><a href="#"><span className="icon-facebook"/></a>
                                </li>
                                <li className="ftco-animate"><a href="#"><span className="icon-instagram"/></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="ftco-footer-widget mb-4 ml-md-4">
                            <h2 className="ftco-heading-2">Site Links</h2>
                            <ul className="list-unstyled">
                                <li><a href="#" className="py-2 d-block">Home</a></li>
                                <li><a href="#" className="py-2 d-block">About</a></li>
                                <li><a href="#" className="py-2 d-block">Donate</a></li>
                                <li><a href="#" className="py-2 d-block">Causes</a></li>
                                <li><a href="#" className="py-2 d-block">Event</a></li>
                                <li><a href="#" className="py-2 d-block">Blog</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="ftco-footer-widget mb-4">
                            <h2 className="ftco-heading-2">Have a Questions?</h2>
                            <div className="block-23 mb-3">
                                <ul>
                                    <li><span className="icon icon-map-marker"/><span className="text">Kapan, Kathmandu, Nepal</span>
                                    </li>
                                    <li><a href="#"><span className="icon icon-phone"/><span className="text">9841XXXXXX</span></a>
                                    </li>
                                    <li><a href="#"><span className="icon icon-envelope"/><span
                                        className="text">info@yourdomain.com</span></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 text-center">
                        <p>
                            Copyright &copy;
                            {year} &nbsp;&nbsp;All rights reserved
                            <a href="https://colorlib.com" style={{visibility: "hidden"}} target="_blank">Colorlib</a>
                            </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;