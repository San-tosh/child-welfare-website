import {useRouter} from "next/router";
import Link from "next/link";

const Nav = ()=>{
    const router = useRouter();

    const goToPage = (path: string) => {
        router.push(path);
    }

    console.log("router pathname",router.pathname === "/about")
return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar" style={{flexDirection:"column"}}>
        <div className="container">
            <div className="navbar-contact" style={{display:"flex",justifyContent: "space-between",alignItems: "center", minWidth:"99%",flexWrap: "wrap"}}>
                <div style={{display:"flex",color:"white", alignItems: "center", gap: 19}}>
                    <div><span className="icon icon-map-marker" style={{marginRight: "10px"}}/><span className="text" >Kapan,Kathmandu - Nepal</span></div>
                    <div><span className="icon icon-phone" style={{marginRight: "10px"}}/><span className="text">9841XXXXXX</span></div>
                    <div><span className="icon icon-envelope" style={{marginRight: "10px"}}/><span
                        className="text">info@yourdomain.com</span>
                    </div>
                </div>
                <div style={{display:"flex",color:"white", alignItems: "center", gap: 10}}>
                    <a href="#"><span className="icon icon-twitter" style={{marginRight: "10px"}}/></a>
                    <a href="#"><span className="icon icon-facebook" style={{marginRight: "10px"}}/></a>
                    <a href="#"><span className="icon icon-instagram" style={{marginRight: "10px"}}/></a>
                </div>
            </div>
        </div>

        <div className="container">
            <a className="navbar-brand" href={"#"} onClick={()=>goToPage("/")}><br/>MARLOES DAY <br/>CARE CENTRE</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav"
                    aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="oi oi-menu"/> Menu
            </button>

            <div className="collapse navbar-collapse" id="ftco-nav">
                <ul className="navbar-nav ml-auto">
                    <li className={`nav-item ${router.pathname === "/" ? "active" : ""}`}><a href="#" onClick={()=>goToPage('/')} className="nav-link">Home</a></li>
                    <li className={`nav-item ${router.pathname === "/about" ? "active" : ""}`}><a style={{cursor: 'pointer'}} onClick={()=>goToPage('about')} className="nav-link">About</a></li>
                    <li className={`nav-item ${router.pathname === "/services" ? "active" : ""}`}>
                        <a style={{cursor: 'pointer'}} onClick={()=>goToPage('services')} className="nav-link">Services</a></li>
                    <li className="nav-item"><a href="donate.html" className="nav-link">Donate</a></li>
                    <li className="nav-item"><a href="gallery.html" className="nav-link">Gallery</a></li>
                    <li className="nav-item"><a href="event.html" className="nav-link">Events</a></li>
                    <li className={`nav-item ${router.pathname === "/contact" ? "active" : ""}`}>
                        <a style={{cursor: 'pointer'}} onClick={()=>goToPage('contact')} className="nav-link">Contact</a></li>
                </ul>
            </div>
        </div>
    </nav>
    </>
)
}

export default Nav;