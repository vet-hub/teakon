import MyLogo from "../img/teekonmasala_logo-removebg-preview.png";
import { Link } from "react-router-dom";
import {useNavigate} from "react-router"
import { useEffect, useState } from "react";

export default function Footer({setChosenCriterias,allTeearten,allAnbaugebiete,allBenefits,allAromen,allCoffein}) {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    // Rerender windwos.innerwidth 
    useEffect(() => {
        function handleResize() {
            setScreenWidth(window.innerWidth);
        }
        window.addEventListener("resize", handleResize);
        return() => {
            window.removeEventListener("resize", handleResize);
        }
        }, [])

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
            <footer className="footer pl-4 pt-3 lg:pl-2 lg:pt-10 bg-gray-300 dark:bg-gray-800 text-base-content rounded-xl pb-5">
                <div>
                    {screenWidth < 500 ? (<div>
                        <Link to="/"><img className="w-48" src={MyLogo}></img></Link>
                    </div> 
                    ) : (
                    <>
                        <div className="flex-1 px-2 lg:flex-none">
                            <Link to="/"><img src={MyLogo}></img></Link>
                        </div> 
                        <p className="invisible md:visible ">Teekon-Masala GmbH.<br />Zuverlässige Teeinformationen seit 2023</p>
                    </> 
                        )
                    }
                    
                </div>
                <div>
                    <span className="footer-title underline">Teeart</span>
                    <div className="grid grid-flow-row grid-cols-1 gap-1">
                        {allTeearten.map((teeart)=>{return(
                            <a className="link link-hover" key={teeart.name} onClick={addTeasCriteria}>{teeart.name}</a>
                        )
                        })}
                    </div>
                </div>              
                <div>
                    <span className="footer-title underline md:pl-4">Anbaugebiet</span>
                    <div className="grid grid-flow-row grid-cols-1 gap-1 min-[320px]:grid-cols-2">
                        {allAnbaugebiete.map((anbaugebiet)=>{return(
                            <a className="link link-hover pr-4 md:pl-4" key={anbaugebiet.name} onClick={addOriginCriteria}>{anbaugebiet.name}</a>
                        )
                        })}
                    </div>
                </div>
                <div>
                    <span className="footer-title underline mr-6">Geschmack</span>
                    <div className="grid grid-flow-row grid-cols-1 min-[330px]:grid-cols-2 min-[1024px]:grid-cols-3">
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