import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
import {useNavigate} from "react-router"
import MyLogo from "../img/teekonmasala_logo-removebg-preview.png";


export default function Navbar({chosenCriterias, setChosenCriterias,allTeearten,allAnbaugebiete,allBenefits,allAromen,allCoffein}) {
    const [userInput,setUserInput] = useState("")
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
    const navigateTo = useNavigate()

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

const bgSelector={
    "Schwarzer Tee":"bg-[#630606] text-white",
    "Grüner Tee":"bg-[#C7E9B0]",
    "Gelber Tee":"bg-[#F7D060]",
    "Weißer Tee":"bg-[#FFFBEB]",
    "Oolong Tee":"bg-[#FEBE8C]",
    "Früchtetee":"bg-[#DF2E38]",
    "Kräutertee":"bg-[#539165]"
}
    
    
    return (   
        <>
        {screenWidth < 500 ? ( <div className="navbar bg-base-100 rounded-box pb-0">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    {allTeearten.map((teeart)=>{return(
                                    <li key={teeart.name}><div key={teeart.name} onClick={addCategory}>{teeart.name}</div></li>
                                )
                    }   )  }
                    </ul>
                </div>
            </div>
            <div className="navbar-center">
                <Link to="/"><img className="w-36" src={MyLogo}></img></Link>
            </div>
            <div className="navbar-end">
            </div>
        </div>
        ) : (
        <div className={`navbar p-3 rounded-box dark:bg-gray-800 ${(chosenCriterias.length === 1 &&
            (allTeearten.findIndex(teeart => teeart.name === chosenCriterias[0].name) >= 0))?bgSelector[chosenCriterias[0].name] :"bg-gray-300  "}`}>

            {/* ---------------- Logo section -------------- */}
            <div className="flex-1 px-2 lg:flex-none">
                <Link to="/"><img src={MyLogo}></img></Link>
            </div> 

            <div className="flex justify-end flex-1 px-2">
                <div className="flex items-stretch">
                    {/* ----------------- Searchbar ---------------- */}
                    <form className="form-control" onSubmit={resolveSearchBar}>
                        <input type="search" placeholder="Suche" className="input input-bordered text-black dark:text-white" onChange={inputHandler}  />
                    </form>
                    {/* ------------------ zubehör ----------------- */}
                    <Link className="btn btn-ghost rounded-btn" to="/zubehör">Zubehör</Link>
                    {/* ---------------- Dropdown menü ------------- */}
                    <div className="dropdown dropdown-end ">
                        <label tabIndex={0} className="btn btn-ghost rounded-btn">Tee</label>
                        <ul tabIndex={0} className="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4 text-black dark:text-white">
                            {allTeearten.map((teeart)=>{return(
                                <li key={teeart.name}><div key={teeart.name} onClick={addCategory}>{teeart.name}</div></li>
                            )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>)
        }
        </>    
        
    )
}