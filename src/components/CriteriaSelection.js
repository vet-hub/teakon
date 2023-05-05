import CheckboxContainer from "./CheckboxContainer";
import SelectedCriterias from "./SelectedCriterias";
import { useState } from "react";
import { useNavigate } from "react-router";


export default function CriteriaSelection ({chosenCriterias, setChosenCriterias,allTeearten,allAnbaugebiete,allBenefits,allAromen,allCoffein}) {
    const [selectedCategory,setSelectedCategory] = useState();
    const navigateTo=useNavigate();
    const startSearch=()=>{navigateTo("/ergebnisse/suche")}
    /* Funktionen zur Festlegung der angezeigten Kriterienkategorie */
    const setToTeas=()=>{setSelectedCategory("teas")};
    const setToOrigin=()=>{setSelectedCategory("origin")};
    const setToCoffein=()=>{setSelectedCategory("coffein")};
    const setToFlavour=()=>{setSelectedCategory("flavour")};
    const setToEffect=()=>{setSelectedCategory("effect")};
/* TODO responsiveness */
return(
<div className="criteriaSelection flex flex-col items-center w-full p-5">
    <h2 className="italic mb-10 font-bold md:m-5 text-4xl text-black" >Kriterien Auswahl</h2>
    <div className="mainCriterias text-center md:flex md:justify-evenly md:flex-wrap w-full ">
        
        <div className="md:mt-3 md:criteriaSelector md:opacity-60 md:shadow md:border md:visible md:border-black md:rounded-xl md:flex md:justify-center md:w-1/6 md:mb-5 md:aspect-square md:hover:cursor-pointer md:bg-teas-bg md:bg-cover"  onClick={setToTeas } >
            <h3 className="italic criteriaName mb-1 font-bold min-[1025px]:text-3xl self-center text-black ">Teeart</h3>
        </div>

        <div className="md:mt-3 md:criteriaSelector md:opacity-60 md:shadow md:border md:visible md:border-black md:rounded-xl md:flex md:justify-center md:w-1/6 md:mb-5 md:aspect-square md:hover:cursor-pointer md:bg-origin-bg md:bg-cover" onClick={setToOrigin}>
            <h3 className="italic criteriaName mb-1 font-bold min-[1025px]:text-3xl self-center text-black ">Anbaugebiet</h3>
        </div>

        <div className="md:mt-3 md:criteriaSelector md:opacity-60 md:shadow md:border md:visible md:border-black md:rounded-xl md:flex md:justify-center md:w-1/6 md:mb-5 md:aspect-square md:hover:cursor-pointer md:bg-coffein-bg md:bg-cover" onClick={setToCoffein}>
            <h3 className="italic criteriaName mb-1 font-bold min-[1025px]:text-3xl self-center text-black ">Koffeingehalt</h3>
        </div>

        <div className="md:mt-3 md:criteriaSelector md:opacity-60 md:shadow md:border md:visible md:border-black md:rounded-xl md:flex md:justify-center md:w-1/6 md:mb-5 md:aspect-square md:hover:cursor-pointer md:bg-flavour-bg md:bg-cover" onClick={setToFlavour}>
            <h3 className="italic criteriaName mb-1 font-bold min-[1025px]:text-3xl self-center text-black ">Geschmack</h3>
        </div>

        <div className="md:mt-3 md:criteriaSelector md:opacity-60 md:shadow md:border md:visible md:border-black md:rounded-xl md:flex md:justify-center md:w-1/6 md:mb-5 md:aspect-square md:hover:cursor-pointer md:bg-effect-bg md:bg-cover" onClick={setToEffect}>
            <h3 className="italic criteriaName mb-1 font-bold min-[1025px]:text-3xl self-center text-black ">Wirkung</h3>
        </div>
   
             {selectedCategory && <CheckboxContainer selectedCategory={selectedCategory} chosenCriterias={chosenCriterias} setChosenCriterias={setChosenCriterias} allTeearten={allTeearten} allAnbaugebiete={allAnbaugebiete} allBenefits={allBenefits} allAromen={allAromen} allCoffein={allCoffein} />}
            {chosenCriterias.length>0 && <><p className="text-black mt-5">Ausgewählte Kriterien:</p>
            <SelectedCriterias chosenCriterias={chosenCriterias} setChosenCriterias={setChosenCriterias} /></>}
            <button onClick={startSearch} className="bg-black hover:bg-white text-white font-bold hover:text-black py-3 px-7 mt-7 mb-7 border border-black hover:border-black rounded-full duration-200">Ergebnisse anzeigen</button>
       
        </div>
    </div> 
    )
}