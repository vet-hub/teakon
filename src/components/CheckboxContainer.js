
import { useState,useEffect } from "react";

export default function CheckboxContainer ({selectedCategory,chosenCriterias, setChosenCriterias,allTeearten,allAnbaugebiete,allBenefits,allAromen,allCoffein}) {
const [subCriteriaArray,setSubCriteriaArray]=useState([])
    const subCriteriaArrayTemp=[]
    let fetchedSubCriteriaArray=[]
useEffect(() => {
    switch(selectedCategory){
        case "origin":
            fetchedSubCriteriaArray=[...allAnbaugebiete];
            break;
        case "coffein":
            fetchedSubCriteriaArray=[...allCoffein];
            break;
        case "flavour":
            fetchedSubCriteriaArray=[...allAromen];
            break;
        case "effect":
            fetchedSubCriteriaArray=[...allBenefits];
            break;
        default:
            fetchedSubCriteriaArray = [...allTeearten];
            break;
    }
    
    fetchedSubCriteriaArray.map(entry=>{
        let obj={};
        if (chosenCriterias.find(criteria=>criteria.name===entry)){
            obj={name: entry, checked: true, category: selectedCategory};
        }else{
            obj={name: entry, checked: false, category: selectedCategory};}
    subCriteriaArrayTemp.push(obj);
    setSubCriteriaArray(subCriteriaArrayTemp)
    });


}
, [selectedCategory,chosenCriterias]);

const handleCheck=(e)=>{
    /* TODO löschenvia uncheck fixen */
    const subCriteriaArrayTemp=[...subCriteriaArray];
    const index = subCriteriaArrayTemp.findIndex((criteria)=>criteria.name === e.target.value);
    subCriteriaArrayTemp[index].checked=!subCriteriaArrayTemp[index].checked;
    const chosenCriteriasTemp=[...chosenCriterias];

    if (chosenCriteriasTemp.find(criteria=>criteria.name===subCriteriaArrayTemp[index].name) && (subCriteriaArrayTemp[index].checked === false)){
        const indexToDelete = chosenCriteriasTemp.findIndex((criteria)=>criteria.name === subCriteriaArrayTemp[index].name)
        chosenCriteriasTemp.splice(indexToDelete,1);
        setChosenCriterias(chosenCriteriasTemp);
        }

    else if(!chosenCriteriasTemp.find(criteria=>criteria.name===subCriteriaArrayTemp[index].name) && subCriteriaArrayTemp[index].checked === true){
        chosenCriteriasTemp.push(subCriteriaArrayTemp[index]);
        setChosenCriterias(chosenCriteriasTemp);
        }
    setSubCriteriaArray(subCriteriaArrayTemp);
}

    return (
    <fieldset className="checkboxContainer flex flex-col flex-wrap shadow border rounded-xl my-5 w-3/4 px-5 py-2 max-h-32 ">
        {subCriteriaArray.map(entry=>{return( 
            <div >
                <input type="checkbox" id={entry.name} className="hover:cursor-pointer" value={entry.name} checked={entry.checked} onChange={handleCheck}/>
                <label htmlFor={entry.name} className="m-2 hover:cursor-pointer text-gray-500">{console.log('entry log', entry)}{entry.name.name ?? entry.name}</label>
            </div>
        )})}
    </fieldset>
    )
};