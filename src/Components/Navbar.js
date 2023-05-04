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
        allTeearten.map((teeart)=>{
            if (userInputTemp.indexOf(teeart.name.toLocaleLowerCase())>=0){
                const criteriaObj={name:teeart.name,checked:true,category:"teas"};
                foundCriterias.push(criteriaObj);
                userInputTemp=userInputTemp.slice(0,userInputTemp.indexOf(teeart.name.toLocaleLowerCase()))+userInputTemp.slice(userInputTemp.indexOf(teeart.name.toLocaleLowerCase())+teeart.name.length)
            }
        })
        allAnbaugebiete.map((origin)=>{
            if (userInputTemp.indexOf(origin.name.toLocaleLowerCase())>=0){
                const criteriaObj={name:origin.name,checked:true,category:"origin"};
                foundCriterias.push(criteriaObj);
                userInputTemp=userInputTemp.slice(0,userInputTemp.indexOf(origin.name.toLocaleLowerCase()))+userInputTemp.slice(userInputTemp.indexOf(origin.name.toLocaleLowerCase())+origin.name.length)
            }
        })
        allBenefits.map((benefit)=>{
            if (userInputTemp.indexOf(benefit.name.toLocaleLowerCase())>=0){
                const criteriaObj={name:benefit.name,checked:true,category:"effect"};
                foundCriterias.push(criteriaObj);
                userInputTemp=userInputTemp.slice(0,userInputTemp.indexOf(benefit.name.toLocaleLowerCase()))+userInputTemp.slice(userInputTemp.indexOf(benefit.name.toLocaleLowerCase())+benefit.name.length)
            }
        })
        allAromen.map((aroma)=>{
            if (userInputTemp.indexOf(aroma.name.toLocaleLowerCase())>=0){
                const criteriaObj={name:aroma.name,checked:true,category:"flavour"};
                foundCriterias.push(criteriaObj);
                userInputTemp=userInputTemp.slice(0,userInputTemp.indexOf(aroma.name.toLocaleLowerCase()))+userInputTemp.slice(userInputTemp.indexOf(aroma.name.toLocaleLowerCase())+aroma.name.length)
            }
        })
        allCoffein.map((coffein)=>{
            if (userInputTemp.indexOf(coffein.name.toLocaleLowerCase())>=0){
                const criteriaObj={name:coffein.name,checked:true,category:"coffein"};
                foundCriterias.push(criteriaObj);
                userInputTemp=userInputTemp.slice(0,userInputTemp.indexOf(coffein.name.toLocaleLowerCase()))+userInputTemp.slice(userInputTemp.indexOf(coffein.name.toLocaleLowerCase())+coffein.name.length)
            }
        })
        const regex= /[^\w\säöüÄÖÜß]/g ;
        userInputTemp=userInputTemp.replaceAll(regex,"");
        userInputTemp=userInputTemp.trim();
        if(userInputTemp.length>0){
            const criteriaObj={name:userInputTemp,category:"name"};
            foundCriterias.push(criteriaObj);
        }
        setChosenCriterias(foundCriterias);
        navigateTo("/ergebnisse/suche")
    }

    const addCategory=(e)=>{
        setChosenCriterias([{name:e.target.innerHTML, checked: true, category:"teas"}])
                navigateTo("/ergebnisse/suche")
    }

    return (
        
        <div className="navbar p-7 bg-base-200 rounded-box">
            {/* ---------------- Logo section -------------- */}

            <div className="flex-1 px-2 lg:flex-none">
                <Link to="/"><img src={MyLogo}></img></Link>
            </div> 
        <div className="flex justify-end flex-1 px-2">
        <div className="flex items-stretch">
            {/* ----------------- Searchbar ---------------- */}
            <form className="form-control" onSubmit={resolveSearchBar}>
                <input type="search" placeholder="Search" className="input input-bordered" onChange={inputHandler}  />
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