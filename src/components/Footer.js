import MyLogo from "../img/teekonmasala_logo-removebg-preview.png";
import { Link } from "react-router-dom";
import {useNavigate} from "react-router"

export default function Footer({setChosenCriterias,allTeearten,allAnbaugebiete,allBenefits,allAromen,allCoffein}) {
    /* TODO responsiveness */
    const navigateTo = useNavigate();
    const addTeasCriteria=(e)=>{
        setChosenCriterias([{name:e.target.innerHTML, checked: true, category:"teas"}]);
        navigateTo("/ergebnisse/suche");
    };
    const addOriginCriteria=(e)=>{
        setChosenCriterias([{name:e.target.innerHTML, checked: true, category:"origin"}]);
        navigateTo("/ergebnisse/suche");
    };
    const addAromaCriteria=(e)=>{
        setChosenCriterias([{name:e.target.innerHTML, checked: true, category:"flavour"}]);
        navigateTo("/ergebnisse/suche");
    };
    return (
        <>

            <footer className="footer p-10 bg-gray-300 text-base-content rounded-xl ">
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
                    <span className="footer-title">Geschmack</span>
                    {allAromen.map((aroma)=>{return(
                        <a className="link link-hover" key={aroma.name} onClick={addAromaCriteria}>{aroma.name}</a>
                    )
                    })}
                </div>
                
            </footer>

        </>
    )
};