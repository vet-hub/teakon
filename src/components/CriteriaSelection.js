import CheckboxContainer from "./CheckboxContainer";
import SelectedCriterias from "./SelectedCriterias";
import { useState } from "react";

export default function CriteriaSelection () {
    const [selectedCategory,setSelectedCategory] = useState("teas");
    const [chosenCriterias,setChosenCriterias] = useState(["test"])
    const setToTeas=()=>{setSelectedCategory("teas")};
    const setToOrigin=()=>{setSelectedCategory("origin")};
    const setToCoffein=()=>{setSelectedCategory("coffein")};
    const setToFlavour=()=>{setSelectedCategory("flavour")};
    const setToEffect=()=>{setSelectedCategory("effect")};


return(
<div className="criteriaSelection flex flex-col items-center w-full">
<h2>Kriterien Auswahl</h2>
<div className=" mainCriterias my-5 flex justify-evenly w-full ">
    <div className="criteriaSelector shadow border  flex justify-center content-center "  onClick={setToTeas }>
        <img className="criteriaImage" src="" alt="" />
        <h3 className="criteriaName">Teeart</h3>
    </div>
    <div className="criteriaSelector shadow border  flex justify-center content-center " onClick={setToOrigin}>
        <img className="criteriaImage" src="" alt="" />
        <h3 className="criteriaName">Anbaugebiet</h3>
    </div>
    <div className="criteriaSelector shadow border  flex justify-center content-center " onClick={setToCoffein}>
        <img className="criteriaImage" src="" alt="" />
        <h3 className="criteriaName">Koffeingehalt</h3>
    </div>
    <div className="criteriaSelector shadow border  flex justify-center content-center " onClick={setToFlavour}>
        <img className="criteriaImage" src="" alt="" />
        <h3 className="criteriaName">Geschmacksrichtung</h3>
    </div>
    <div className="criteriaSelector shadow border  flex justify-center content-center " onClick={setToEffect}>
        <img className="criteriaImage" src="" alt="" />
        <h3 className="criteriaName">Wirkung</h3>
    </div>
</div>

<CheckboxContainer selectedCategory={selectedCategory} setChosenCriterias={setChosenCriterias} />
<SelectedCriterias chosenCriterias={chosenCriterias} setChosenCriterias={setChosenCriterias} />
<button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-3 px-7 mt-4 border border-blue-500 hover:border-transparent rounded-full">Ergebnisse anzeigen</button>

</div>
)}