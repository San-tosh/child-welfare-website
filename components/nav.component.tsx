import {useRouter} from "next/router";

const Nav = ()=>{
    const router = useRouter();

    const goToPage = (path: string) => {
        router.push(path);
    }
return (
    <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
        <div className="container">
            <a className="navbar-brand" href="index.html"><br/>MARLOES DAY <br/>CARE CENTRE</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav"
                    aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="oi oi-menu"/> Menu
            </button>

            <div className="collapse navbar-collapse" id="ftco-nav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active"><a href="#" onClick={()=>goToPage('/')} className="nav-link">Home</a></li>
                    <li className="nav-item"><span style={{cursor: 'pointer'}} onClick={()=>goToPage('about')} className="nav-link">About</span></li>
                    <li className="nav-item"><a href="causes.html" className="nav-link">Causes</a></li>
                    <li className="nav-item"><a href="donate.html" className="nav-link">Donate</a></li>
                    <li className="nav-item"><a href="blog.html" className="nav-link">Blog</a></li>
                    <li className="nav-item"><a href="gallery.html" className="nav-link">Gallery</a></li>
                    <li className="nav-item"><a href="event.html" className="nav-link">Events</a></li>
                    <li className="nav-item"><a href="contact.html" className="nav-link">Contact</a></li>
                </ul>
            </div>
        </div>
    </nav>
)
}

export default Nav;