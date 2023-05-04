import CheckboxContainer from "./CheckboxContainer";
import SelectedCriterias from "./SelectedCriterias";
import { useState } from "react";
import { useNavigate } from "react-router";


export default function CriteriaSelection ({chosenCriterias, setChosenCriterias,allTeearten,allAnbaugebiete,allBenefits,allAromen,allCoffein}) {
    const [selectedCategory,setSelectedCategory] = useState("teas");
    const navigateTo=useNavigate();
    
    const setToTeas=()=>{setSelectedCategory("teas")};
    const setToOrigin=()=>{setSelectedCategory("origin")};
    const setToCoffein=()=>{setSelectedCategory("coffein")};
    const setToFlavour=()=>{setSelectedCategory("flavour")};
    const setToEffect=()=>{setSelectedCategory("effect")};
    const startSearch=()=>{navigateTo("/ergebnisse/suche")}

/* TODO responsiveness */
return(
<div className="criteriaSelection flex flex-col items-center w-full p-5">
    <h2 className="italic mb-10 font-bold m-5 text-4xl text-black" >Kriterien Auswahl</h2>
    <div className="mainCriterias flex justify-evenly flex-wrap w-full ">
        
        <div className="mt-3 criteriaSelector opacity-60 shadow border border-black rounded-xl flex justify-center w-1/6 mb-5 aspect-square hover:cursor-pointer bg-teas-bg bg-cover"  onClick={setToTeas } >
            <h3 className="italic criteriaName font-bold text-3xl self-center text-black ">Teeart</h3>
        </div>

        <div className="mt-3 criteriaSelector opacity-60 shadow border border-black rounded-xl flex justify-center w-1/6 mb-5 aspect-square hover:cursor-pointer bg-origin-bg bg-cover" onClick={setToOrigin}>
            <h3 className="italic criteriaName font-bold text-3xl self-center text-black ">Anbaugebiet</h3>
        </div>

        <div className="mt-3 criteriaSelector opacity-60 shadow border border-black rounded-xl flex justify-center w-1/6 mb-5 aspect-square hover:cursor-pointer bg-coffein-bg bg-cover" onClick={setToCoffein}>
            <h3 className="italic criteriaName font-bold text-3xl self-center text-black ">Koffeingehalt</h3>
        </div>

        <div className="mt-3 criteriaSelector opacity-60 shadow border border-black rounded-xl flex justify-center w-1/6 mb-5 aspect-square hover:cursor-pointer bg-flavour-bg bg-cover" onClick={setToFlavour}>
            <h3 className="italic criteriaName font-bold text-3xl self-center text-black ">Geschmack</h3>
        </div>

        <div className="mt-3 criteriaSelector opacity-60 shadow border border-black rounded-xl flex justify-center w-1/6 mb-5 aspect-square hover:cursor-pointer bg-effect-bg bg-cover" onClick={setToEffect}>
            <h3 className="italic criteriaName font-bold text-3xl self-center text-black ">Wirkung</h3>
        </div>
    </div>


    <CheckboxContainer selectedCategory={selectedCategory} chosenCriterias={chosenCriterias} setChosenCriterias={setChosenCriterias} allTeearten={allTeearten} allAnbaugebiete={allAnbaugebiete} allBenefits={allBenefits} allAromen={allAromen} allCoffein={allCoffein} />
    <p className="text-black mt-5">Ausgewählte Kriterien:</p>
    <SelectedCriterias chosenCriterias={chosenCriterias} setChosenCriterias={setChosenCriterias} />


    <button onClick={startSearch} className="bg-black hover:bg-white text-white font-bold hover:text-black py-3 px-7 mt-7 mb-7 border border-black hover:border-black rounded-full duration-200">Ergebnisse anzeigen</button>

</div>
)}