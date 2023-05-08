import { Link } from "react-router-dom"
import { useState } from "react";
import {useNavigate} from "react-router"
import MyLogo from "../img/teekonmasala_logo-removebg-preview.png";


export default function Navbar({setChosenCriterias,allTeearten,allAnbaugebiete,allBenefits,allAromen,allCoffein}) {
    const [userInput,setUserInput] = useState("")
    const navigateTo = useNavigate()
    /* TODO responsiveness (burgermenu) */
    const inputHandler=(e)=>{
        setUserInput(e.target.value)
    }
    const resolveSearchBar=(e)=>{
        e.preventDefault();
        let userInputTemp=userInput.toLocaleLowerCase();
        const foundCriterias=[];
        /* Suche nach Teearten-Kriterien in der Searchbar */
        allTeearten.map((teeart)=>{
            if (userInputTemp.indexOf(teeart.name.toLocaleLowerCase())>=0){
                const criteriaObj={name:teeart.name,checked:true,category:"teas"};
                foundCriterias.push(criteriaObj);
                userInputTemp=userInputTemp.slice(0,userInputTemp.indexOf(teeart.name.toLocaleLowerCase()))+userInputTemp.slice(userInputTemp.indexOf(teeart.name.toLocaleLowerCase())+teeart.name.length)
            }
        })
        /* Suche nach Anbaugebiets-Kriterien in der Searchbar */
        allAnbaugebiete.map((origin)=>{
            if (userInputTemp.indexOf(origin.name.toLocaleLowerCase())>=0){
                const criteriaObj={name:origin.name,checked:true,category:"origin"};
                foundCriterias.push(criteriaObj);
                userInputTemp=userInputTemp.slice(0,userInputTemp.indexOf(origin.name.toLocaleLowerCase()))+userInputTemp.slice(userInputTemp.indexOf(origin.name.toLocaleLowerCase())+origin.name.length)
            }
        })
        /* Suche nach Wirkungs-Kriterien in der Searchbar */
        allBenefits.map((benefit)=>{
            if (userInputTemp.indexOf(benefit.name.toLocaleLowerCase())>=0){
                const criteriaObj={name:benefit.name,checked:true,category:"effect"};
                foundCriterias.push(criteriaObj);
                userInputTemp=userInputTemp.slice(0,userInputTemp.indexOf(benefit.name.toLocaleLowerCase()))+userInputTemp.slice(userInputTemp.indexOf(benefit.name.toLocaleLowerCase())+benefit.name.length)
            }
        })
        /* Suche nach Aromen-Kriterien in der Searchbar */
        allAromen.map((aroma)=>{
            if (userInputTemp.indexOf(aroma.name.toLocaleLowerCase())>=0){
                const criteriaObj={name:aroma.name,checked:true,category:"flavour"};
                foundCriterias.push(criteriaObj);
                userInputTemp=userInputTemp.slice(0,userInputTemp.indexOf(aroma.name.toLocaleLowerCase()))+userInputTemp.slice(userInputTemp.indexOf(aroma.name.toLocaleLowerCase())+aroma.name.length)
            }
        })
        /* Suche nach Koffein-Kriterien in der Searchbar */
        allCoffein.map((coffein)=>{
            if (userInputTemp.indexOf(coffein.name.toLocaleLowerCase())>=0){
                const criteriaObj={name:coffein.name,checked:true,category:"coffein"};
                foundCriterias.push(criteriaObj);
                userInputTemp=userInputTemp.slice(0,userInputTemp.indexOf(coffein.name.toLocaleLowerCase()))+userInputTemp.slice(userInputTemp.indexOf(coffein.name.toLocaleLowerCase())+coffein.name.length)
            }
        })
        /* Entfernen von Sonderzeichen und Leerzeichen(an den Enden) */
        const regex= /[^\w\säöüÄÖÜß]/g ;
        userInputTemp=userInputTemp.replaceAll(regex,"");
        userInputTemp=userInputTemp.trim();
        /* Verbliebene Buchstaben als Namen-Kriterium verwenden */
        if(userInputTemp.length>0){
            const criteriaObj={name:userInputTemp,category:"name"};
            foundCriterias.push(criteriaObj);
        }
        setChosenCriterias(foundCriterias);
        navigateTo("/ergebnisse/suche")
    }
    /* Aus Dropdown Menü gewählte Teeart als Kriterium wählen und zur Suche gehen */
    const addCategory=(e)=>{
        setChosenCriterias([{name:e.target.innerHTML, checked: true, category:"teas"}])
                navigateTo("/ergebnisse/suche")
    }

    return (
        
        <div className="navbar bg-gray-300 dark:bg-gray-800 p-3 rounded-box">
            {/* ---------------- Logo section -------------- */}
            <div className="flex-1 px-2 lg:flex-none">
                <Link to="/"><img src={MyLogo}></img></Link>
            </div> 

        <div className="flex justify-end flex-1 px-2">
        <div className="flex items-stretch">
            {/* ----------------- Searchbar ---------------- */}
            <form className="form-control" onSubmit={resolveSearchBar}>
                <input type="search" placeholder="Suche" className="input input-bordered" onChange={inputHandler}  />
            </form>
            {/* ------------------ zubehör ----------------- */}
            <Link className="btn btn-ghost rounded-btn" to="/zubehör">Zubehör</Link>
            {/* ---------------- Dropdown menü ------------- */}
            <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost rounded-btn">Tee</label>
                <ul tabIndex={0} className="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4">
                    {allTeearten.map((teeart)=>{return(
                        <li key={teeart.name}><div key={teeart.name} onClick={addCategory}>{teeart.name}</div></li>
                    )
                    })}
                </ul>

            </div>

        </div>
        </div>
        </div>
    )
}