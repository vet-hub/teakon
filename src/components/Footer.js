import MyLogo from "../img/teekonmasala_logo-removebg-preview.png";
import { Link } from "react-router-dom";
import {useNavigate} from "react-router"

export default function Footer({setChosenCriterias,allTeearten,allAnbaugebiete,allBenefits,allAromen,allCoffein}) {
    /* TODO responsiveness */
    const navigateTo = useNavigate();
    const addTeasCriteria=(e)=>{
        setChosenCriterias([{name:e.target.innerHTML, checked: true, category:"teas"}])
                navigateTo("/ergebnisse/suche")
    };
    const addOriginCriteria=(e)=>{
        setChosenCriterias([{name:e.target.innerHTML, checked: true, category:"origin"}])
                navigateTo("/ergebnisse/suche")
    };
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
                    {allTeearten.map((teeart)=>{return(
                        <a className="link link-hover" key={teeart.name} onClick={addTeasCriteria}>{teeart.name}</a>
                    )
                    })}
                </div>
                <div>
                    <span className="footer-title">Anbaugebiet</span>
                    {allAnbaugebiete.map((anbaugebiet)=>{return(
                        <a className="link link-hover" key={anbaugebiet.name} onClick={addOriginCriteria}>{anbaugebiet.name}</a>
                    )
                    })}

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