import Link from "next/link";

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
                            <p>At the heart of our mission is a commitment to fostering a nurturing environment that empowers every child to reach their full potential.</p>
                            <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                                <li className="ftco-animate fadeInUp ftco-animated"><a href="https://www.facebook.com/p/Marloes-Daycare-Center-for-Cerebral-Palsy-Children-100080394168003/"><span className="icon-facebook"/></a>
                                </li>
                                <li className="ftco-animate fadeInUp ftco-animated"><a href="https://www.facebook.com/p/Marloes-Daycare-Center-for-Cerebral-Palsy-Children-100080394168003/"><span className="icon-instagram"/></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="ftco-footer-widget mb-4 ml-md-4">
                            <h2 className="ftco-heading-2">Site Links</h2>
                            <ul className="list-unstyled">
                                <li><Link href={"/"} className="py-2 d-block">Home</Link></li>
                                <li style={{marginTop:"9px"}}><Link href={"/about"} className="py-2 d-block">About</Link></li>
                                <li style={{marginTop:"9px"}}><Link href={"/services"} className="py-2 d-block">Services</Link></li>
                                <li style={{marginTop:"9px"}}><Link href={"/donate"} className="py-2 d-block">Donate</Link></li>
                                <li style={{marginTop:"9px"}}><Link href={"/gallery"} className="py-2 d-block">Gallery</Link></li>
                                <li style={{marginTop:"9px"}}><Link href={"/events"} className="py-2 d-block">Events</Link></li>
                                <li style={{marginTop:"9px"}}><Link href={"/contact"} className="py-2 d-block">Contact</Link></li>
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
                                    <li><span className="icon icon-phone"/><span className="text">9843353175</span></li>
                                    <li><span className="icon icon-envelope"/><span
                                        className="text">info@marloesdaycarecentre.org</span></li>
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
                            </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;