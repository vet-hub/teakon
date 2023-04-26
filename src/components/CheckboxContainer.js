
import { useState,useEffect } from "react";

export default function CheckboxContainer ({selectedCategory,chosenCriterias, setChosenCriterias}) {
    /* TODO wann fetchen? arrayquellen anpassen */
const [subCriteriaArray,setSubCriteriaArray]=useState([])
    const subCriteriaArrayTemp=[]
    let fetchedSubCriteriaArray=[]
    /* fetchsimulation */


useEffect(() => {
    switch(selectedCategory){
        case "origin":
            fetchedSubCriteriaArray=["origin1","origin2"];
            break;
        case "coffein":
            fetchedSubCriteriaArray=["coffein1","coffein2"];
            break;
        case "flavour":
            fetchedSubCriteriaArray=["flavour1","flavour2","flavour3"];
            break;
        case "effect":
            fetchedSubCriteriaArray=["effect2","effect1"];
            break;
        default:
            fetchedSubCriteriaArray = ["tee1", "tee2", "tee3"];
            break;
    }
    
    fetchedSubCriteriaArray.map(entry=>{
console.log("entry: ",entry)
console.log("chosenCriterias: ", chosenCriterias)
console.log(chosenCriterias.includes(entry))
        let obj={};
        if (chosenCriterias.includes(entry)){
            obj={name: entry, checked: true};
        }else{
            obj={name: entry, checked: false};}
    subCriteriaArrayTemp.push(obj);
    setSubCriteriaArray(subCriteriaArrayTemp)
    });


}
, [selectedCategory]);

const handleCheck=(e)=>{
    const subCriteriaArrayTemp=[...subCriteriaArray];
    const index = subCriteriaArrayTemp.findIndex((criteria)=>criteria.name === e.target.value);
    subCriteriaArrayTemp[index].checked=!subCriteriaArrayTemp[index].checked;
    const chosenCriteriasTemp=[...chosenCriterias];

    if (chosenCriteriasTemp.includes(subCriteriaArrayTemp[index].name) && (subCriteriaArrayTemp[index].checked === false)){
        const indexToDelete = chosenCriteriasTemp.findIndex((criteria)=>criteria === subCriteriaArrayTemp[index].name)
        chosenCriteriasTemp.splice(indexToDelete,1);
        setChosenCriterias(chosenCriteriasTemp);
        }

    else if(!chosenCriteriasTemp.includes(subCriteriaArrayTemp[index].name) && subCriteriaArrayTemp[index].checked === true){
        chosenCriteriasTemp.push(subCriteriaArrayTemp[index].name);
        setChosenCriterias(chosenCriteriasTemp);
        }
    setSubCriteriaArray(subCriteriaArrayTemp);
}

    return (
    <fieldset className="checkboxContainer flex flex-col flex-wrap shadow border my-5 w-3/4 px-5 py-2 max-h-32 ">
        {subCriteriaArray.map(entry=>{return( 
            <div >
                <input type="checkbox" id={entry.name} className={entry.name} value={entry.name} checked={entry.checked} onChange={handleCheck}/>
                <label htmlFor={entry.name} className="m-2 text-gray-500">{entry.name}</label>
            </div>
        )})}
    </fieldset>
    )
};