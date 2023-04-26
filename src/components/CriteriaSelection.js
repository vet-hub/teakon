import CheckboxContainer from "./CheckboxContainer";
import SelectedCriterias from "./SelectedCriterias";
import { useState } from "react";

export default function CriteriaSelection ({chosenCriterias, setChosenCriterias}) {
    const [selectedCategory,setSelectedCategory] = useState("teas");
    
    
    const setToTeas=()=>{setSelectedCategory("teas")};
    const setToOrigin=()=>{setSelectedCategory("origin")};
    const setToCoffein=()=>{setSelectedCategory("coffein")};
    const setToFlavour=()=>{setSelectedCategory("flavour")};
    const setToEffect=()=>{setSelectedCategory("effect")};


return(
<div className="criteriaSelection flex flex-col items-center w-full p-5 ">
<h2 className="font-bold m-5 text-2xl text-gray-500" >Kriterien Auswahl</h2>
<div className=" mainCriterias flex justify-evenly w-full ">
    <div className="criteriaSelector shadow border flex justify-center w-1/7 aspect-square "  onClick={setToTeas }>
        <img className="criteriaImage" src="" alt="" />
        <h3 className="criteriaName self-center text-gray-500">Teeart</h3>
    </div>
    <div className="criteriaSelector shadow border  flex justify-center w-1/7 aspect-square " onClick={setToOrigin}>
        <img className="criteriaImage" src="" alt="" />
        <h3 className="criteriaName self-center text-gray-500">Anbaugebiet</h3>
    </div>
    <div className="criteriaSelector shadow border  flex justify-center w-1/7 aspect-square " onClick={setToCoffein}>
        <img className="criteriaImage" src="" alt="" />
        <h3 className="criteriaName self-center text-gray-500">Koffeingehalt</h3>
    </div>
    <div className="criteriaSelector shadow border  flex justify-center w-1/7 aspect-square " onClick={setToFlavour}>
        <img className="criteriaImage" src="" alt="" />
        <h3 className="criteriaName self-center text-gray-500">Geschmacksrichtung</h3>
    </div>
    <div className="criteriaSelector shadow border  flex justify-center w-1/7 aspect-square " onClick={setToEffect}>
        <img className="criteriaImage" src="" alt="" />
        <h3 className="criteriaName self-center text-gray-500">Wirkung</h3>
    </div>
</div>


<CheckboxContainer selectedCategory={selectedCategory} chosenCriterias={chosenCriterias} setChosenCriterias={setChosenCriterias} />
<p className="text-gray-500">Ausgewählte Kriterien:</p>
<SelectedCriterias chosenCriterias={chosenCriterias} setChosenCriterias={setChosenCriterias} />


<button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-3 px-7 mt-4 border border-blue-500 hover:border-transparent rounded-full">Ergebnisse anzeigen</button>{/* onCklick: save "chosenCriteria" */}

</div>
)}