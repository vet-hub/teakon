import CheckboxContainer from "./CheckboxContainer";
import SelectedCriterias from "./SelectedCriterias";
import { useState } from "react";
import { useNavigate } from "react-router";


export default function CriteriaSelection ({chosenCriterias, setChosenCriterias,searchFunktion,allTeearten,allAnbaugebiete,allBenefits,allAromen,allCoffein}) {
    const [selectedCategory,setSelectedCategory] = useState("teas");
    const navigateTo=useNavigate();
    
    /*TODO category bezeichnung anpassen */
    const setToTeas=()=>{setSelectedCategory("teas")};
    const setToOrigin=()=>{setSelectedCategory("origin")};
    const setToCoffein=()=>{setSelectedCategory("coffein")};
    const setToFlavour=()=>{setSelectedCategory("flavour")};
    const setToEffect=()=>{setSelectedCategory("effect")};
    const startSearch=()=>{navigateTo("/ergebnisse/suche")}

/* TODO responsiveness */
return(
<div className="criteriaSelection flex flex-col items-center w-full p-5 ">
    <h2 className="font-bold m-5 text-2xl text-gray-500" >Kriterien Auswahl</h2>
    <div className=" mainCriterias flex justify-evenly flex-wrap w-full ">

        <div  className="criteriaSelector shadow border rounded-xl flex justify-center w-1/6  aspect-square  hover:cursor-pointer bg-teas-bg bg-cover"  onClick={setToTeas } >
            <h3  className="criteriaName self-center text-white ">Teeart</h3>
        </div>

        <div className="criteriaSelector shadow border rounded-xl flex justify-center w-1/6  aspect-square hover:cursor-pointer bg-origin-bg bg-cover" onClick={setToOrigin}>
            <h3 className="criteriaName self-center text-white">Anbaugebiet</h3>
        </div>

        <div className="criteriaSelector shadow border rounded-xl flex justify-center w-1/6  aspect-square hover:cursor-pointer bg-coffein-bg bg-cover" onClick={setToCoffein}>
            <h3 className="criteriaName self-center text-gray-400 drop-shadow-lg shadow-black ">Koffeingehalt</h3>
        </div>

        <div className="criteriaSelector shadow border rounded-xl flex justify-center w-1/6  aspect-square hover:cursor-pointer bg-flavour-bg bg-cover" onClick={setToFlavour}>
            <h3 className="criteriaName self-center text-black">Geschmacksrichtung</h3>
        </div>

        <div className="criteriaSelector shadow border rounded-xl flex justify-center w-1/6  aspect-square hover:cursor-pointer bg-effect-bg bg-cover" onClick={setToEffect}>

            <h3 className="criteriaName self-center text-white">Wirkung</h3>
        </div>
    </div>


    <CheckboxContainer selectedCategory={selectedCategory} chosenCriterias={chosenCriterias} setChosenCriterias={setChosenCriterias} allTeearten={allTeearten} allAnbaugebiete={allAnbaugebiete} allBenefits={allBenefits} allAromen={allAromen} allCoffein={allCoffein} />
    <p className="text-gray-500">Ausgewählte Kriterien:</p>
    <SelectedCriterias chosenCriterias={chosenCriterias} setChosenCriterias={setChosenCriterias} />


    <button onClick={startSearch} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-3 px-7 mt-4 border border-blue-500 hover:border-transparent rounded-full">Ergebnisse anzeigen</button>

</div>
)}