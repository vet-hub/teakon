import MyLogo from "../img/teekonmasala_logo-removebg-preview.png";
import { Link } from "react-router-dom";
import {useNavigate} from "react-router"

export default function Footer({setChosenCriterias,allTeearten,allAnbaugebiete,allBenefits,allAromen,allCoffein}) {
    /* TODO responsiveness */
    const navigateTo = useNavigate();
    /* Suche nach einzelne Teeart starten */
    const addTeasCriteria=(e)=>{
        setChosenCriterias([{name:e.target.innerHTML, checked: true, category:"teas"}]);
        navigateTo("/ergebnisse/suche");
    };
    /* Suche nach einzelnes Anbaugebiet starten */
    const addOriginCriteria=(e)=>{
        setChosenCriterias([{name:e.target.innerHTML, checked: true, category:"origin"}]);
        navigateTo("/ergebnisse/suche");
    };
    /* Suche nach einzelnes Aroma starten */
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
                    <div className="grid grid-flow-row grid-cols-1 gap-1">
                        {allTeearten.map((teeart)=>{return(
                            <a className="link link-hover" key={teeart.name} onClick={addTeasCriteria}>{teeart.name}</a>
                        )
                        })}
                    </div>
                </div>              
                <div>
                    <span className="footer-title pl-4">Anbaugebiet</span>
                    <div className="grid grid-flow-row grid-cols-1 gap-1 min-[320px]:grid-cols-2">
                        {allAnbaugebiete.map((anbaugebiet)=>{return(
                            <a className="link link-hover pl-4" key={anbaugebiet.name} onClick={addOriginCriteria}>{anbaugebiet.name}</a>
                        )
                        })}
                    </div>
                </div>
                <div>
                    <span className="footer-title">Geschmack</span>
                    <div className="grid grid-flow-row grid-cols-1 min-[330px]:grid-cols-2 min-[370px]:grid-cols-3">
                        {allAromen.map((aroma)=>{return(
                            <a className="link link-hover pl-1 min-[330px]:pr-3" key={aroma.name} onClick={addAromaCriteria}>{aroma.name}</a>
                        )
                        })}
                    </div>
                </div>
            </footer>
        </>
    )
};