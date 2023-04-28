import { Link } from "react-router-dom"
import { useState } from "react";

export default function Navbar({chosenCriterias,setChosenCriterias,searchFunktion,allTeearten,allAnbaugebiete,allBenefits,allAromen,allCoffein}) {
    const [userInput,setUserInput] = useState("Schwarzer Tee")
    /* TODO responsiveness (burgermenu) */
    const inputHandler=()=>{}
    const resolveSearchBar=(e)=>{
        e.preventDefault();
        let userInputTemp=userInput;
        /* default verhindern */
        const foundCriterias=[];
        allTeearten.map((teeart)=>{
            if (userInputTemp.indexOf(teeart)>=0){
                const criteriaObj={name:teeart,checked:true,category:"teas"};
                foundCriterias.push(criteriaObj);
                userInputTemp=userInputTemp.slice(0,userInputTemp.indexOf(teeart))+userInputTemp.slice(userInputTemp.indexOf(teeart)+teeart.length)
                console.log(userInputTemp)
            }
        })
        allAnbaugebiete.map((origin)=>{
            if (userInput.indexOf(origin)>=0){
                const criteriaObj={name:origin,checked:true,category:"origin"};
                foundCriterias.push(criteriaObj);
                userInput=userInput.slice(0,userInput.indexOf(origin))+userInput.slice(userInput.indexOf(origin)+origin.length)
            }
        })
        allBenefits.map((benefit)=>{
            if (userInput.indexOf(benefit)>=0){
                const criteriaObj={name:benefit,checked:true,category:"effect"};
                foundCriterias.push(criteriaObj);
                userInput=userInput.slice(0,userInput.indexOf(benefit))+userInput.slice(userInput.indexOf(benefit)+benefit.length)
            }
        })
        allAromen.map((aroma)=>{
            if (userInput.indexOf(aroma)>=0){
                const criteriaObj={name:aroma,checked:true,category:"flavour"};
                foundCriterias.push(criteriaObj);
                userInput=userInput.slice(0,userInput.indexOf(aroma))+userInput.slice(userInput.indexOf(aroma)+aroma.length)
            }
        })
        allCoffein.map((coffein)=>{
            if (userInput.indexOf(coffein)>=0){
                const criteriaObj={name:coffein,checked:true,category:"coffein"};
                foundCriterias.push(criteriaObj);
                userInput=userInput.slice(0,userInput.indexOf(coffein))+userInput.slice(userInput.indexOf(coffein)+coffein.length)
            }
        })
        setChosenCriterias(foundCriterias);
        /* search funktion to fast? nutzt nicht den aktuellen state von chosenCriteria */
        searchFunktion();/* in ergebnissseite? */
    }
    return (
        <div className="navbar p-7 bg-base-200 rounded-box">
            {/* ---------------- Logo section -------------- */}
    <div className="flex-1 px-2 lg:flex-none">
        <a className="text-lg font-bold"><img></img><Link to="/"></Link></a>
    </div> 
    <div className="flex justify-end flex-1 px-2">
        <div className="flex items-stretch">
            {/* ----------------- Searchbar ---------------- */}
            <form className="form-control" onSubmit={resolveSearchBar}>
                <input type="search" placeholder="Search" className="input input-bordered" onChange={inputHandler}  />
            </form>
            {/* ------------------ zubehör ----------------- */}
            <a className="btn btn-ghost rounded-btn"><Link to="/zubehör">Zubehör</Link></a>
            {/* ---------------- Dropdown menü ------------- */}
            <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost rounded-btn">Tee</label>
                <ul tabIndex={0} className="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4">
                    <li><a><Link to="/ergebnisse/schwarztee">Schwarz Tee</Link></a></li> 
                    <li><a><Link to="/ergebnisse/weissertee">Weißer Tee</Link></a></li> 
                    <li><a><Link to="/ergebnisse/gruenertee">Grüner Tee</Link></a></li>
                    <li><a><Link to="/ergebnisse/gelbertee">Gelber Tee</Link></a></li>
                    <li><a><Link to="/ergebnisse/oolongtee">Oolong Tee</Link></a></li>
                    <li><a><Link to="/ergebnisse/fruechtetee">Früchtetee</Link></a></li>
                    <li><a><Link to="/ergebnisse/krautertee">Kräutertee</Link></a></li>
                    <li><a><Link to="/ergebnisse/eistee">Eistee</Link></a></li>
                </ul>
            </div>
        </div>
    </div>
</div>
    )
}