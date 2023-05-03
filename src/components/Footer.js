import MyLogo from "../img/teekonmasala_logo-removebg-preview.png";
import { Link } from "react-router-dom"
export default function Footer() {
    /* TODO responsiveness */
    return (
        <>

            <footer className="footer p-10 bg-base-200 text-base-content rounded-xl ">
                <div>
                <div className="flex-1 px-2 lg:flex-none">
                    <Link to="/"><img src={MyLogo}></img></Link>
                </div> 
                    <p>Teakon-Masala GmbH.<br />Providing reliable infos since 2023</p>
                </div>
                <div>
                    <span className="footer-title">Teeart</span>
                    <a className="link link-hover"><Link to="/ergebnisse/schwarztee">Schwarzer Tee</Link></a>
                    <a className="link link-hover"><Link to="/ergebnisse/weissertee">Weißer Tee</Link></a>
                    <a className="link link-hover"><Link to="/ergebnisse/gruenertee">Grüner Tee</Link></a>
                    <a className="link link-hover"><Link to="/ergebnisse/gelbertee">Gelber Tee</Link></a>
                    <a className="link link-hover"><Link to="/ergebnisse/oolongtee">Oolong Tee</Link></a>
                    <a className="link link-hover"><Link to="/ergebnisse/fruechtetee">Früchtetee</Link></a>
                    <a className="link link-hover"><Link to="/ergebnisse/krautertee">Kräuter Tee</Link></a>
                    <a className="link link-hover"><Link to="/ergebnisse/eistee">Eistee</Link></a>
                    
                </div>
                <div>
                    <span className="footer-title">Anbaugebiet</span>
                    <a className="link link-hover">Assam us</a>
                    <a className="link link-hover">China</a>
                    <a className="link link-hover">Darjeeling</a>
                    <a className="link link-hover">Japan</a>
                    <a className="link link-hover">Nepal</a>
                    <a className="link link-hover">Südkorea</a>

                </div>
                <div>
                    <span className="footer-title">Wirkung</span>
                    <a className="link link-hover">Anregend</a>
                    <a className="link link-hover">Erfrischend</a>
                    <a className="link link-hover">Wärmend</a>
                </div>
                <div>
                    <span className="footer-title">Geschmack</span>
                    <a className="link link-hover">Cremig</a>
                    <a className="link link-hover">Duftig-spritzig</a>
                    <a className="link link-hover">Kräftig</a>
                    <a className="link link-hover">Säurearme Früchtetees</a>
                    <a className="link link-hover">Umami</a>
                    <a className="link link-hover">Würzig</a>
                    <a className="link link-hover">Zitronig</a>
                </div>
                <div>
                    <span className="footer-title">Zutaten</span>
                    <a className="link link-hover">Chai</a>
                    <a className="link link-hover">Earl Grey / Bergamotte</a>
                    <a className="link link-hover">Ingwer</a>
                    <a className="link link-hover">Kamille</a>
                    <a className="link link-hover">Minze</a>
                </div>
            </footer>

        </>
    )
};