
import { useState, useEffect } from "react";

export default function CheckboxContainer({ selectedCategory, chosenCriterias, setChosenCriterias, allTeearten, allAnbaugebiete, allBenefits, allAromen, allCoffein }) {
    const [subCriteriaArray, setSubCriteriaArray] = useState([])
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
    const subCriteriaArrayTemp = []
    let fetchedSubCriteriaArray = []
    useEffect(() => {
        switch (selectedCategory) {
            case "origin":/* Alle verfügbaren Anbaugebiete zuweisen */
                fetchedSubCriteriaArray = [...allAnbaugebiete];
                break;
            case "coffein":/* Alle verfügbaren Koffein-Kriterien zuweisen */
                fetchedSubCriteriaArray = [...allCoffein];
                break;
            case "flavour":/* Alle verfügbaren Aroma-Kriterien zuweisen */
                fetchedSubCriteriaArray = [...allAromen];
                break;
            case "effect":/* Alle verfügbaren Wirkungs-Kriterien zuweisen */
                fetchedSubCriteriaArray = [...allBenefits];
                break;
            default:/* Alle verfügbaren Teearten zuweisen */
                fetchedSubCriteriaArray = [...allTeearten];
                break;
        }
        fetchedSubCriteriaArray.map(entry => {/* Checkbox-kompatible Kriterienobjekte erstellen */
            let obj = {};
            if (chosenCriterias.find(criteria => criteria.name === entry.name)) {/* bereits ausgewählt */
                obj = { name: entry.name, checked: true, category: selectedCategory };
            } else {/* noch nicht ausgewählt */
                obj = { name: entry.name, checked: false, category: selectedCategory };
            }
            subCriteriaArrayTemp.push(obj);
            setSubCriteriaArray(subCriteriaArrayTemp)
        });
    }, [selectedCategory, chosenCriterias]);
    const handleCheck = (e) => {
        const subCriteriaArrayTemp = [...subCriteriaArray];
        const index = subCriteriaArrayTemp.findIndex((criteria) => criteria.name === e.target.value);
        subCriteriaArrayTemp[index].checked = !subCriteriaArrayTemp[index].checked;
        const chosenCriteriasTemp = [...chosenCriterias];
        /* Uncheck-Funktion */
        if (chosenCriteriasTemp.find(criteria => criteria.name === subCriteriaArrayTemp[index].name) && (subCriteriaArrayTemp[index].checked === false)) {
            const indexToDelete = chosenCriteriasTemp.findIndex((criteria) => criteria.name === subCriteriaArrayTemp[index].name)
            chosenCriteriasTemp.splice(indexToDelete, 1);
            setChosenCriterias(chosenCriteriasTemp);
        }
        /* Check-Funktion */
        else if (!chosenCriteriasTemp.find(criteria => criteria.name === subCriteriaArrayTemp[index].name) && subCriteriaArrayTemp[index].checked === true) {
            chosenCriteriasTemp.push(subCriteriaArrayTemp[index]);
            setChosenCriterias(chosenCriteriasTemp);
        }
        setSubCriteriaArray(subCriteriaArrayTemp);
    }

    // Rerender windwos.innerwidth 
    useEffect(() => {
        function handleResize() {
            setScreenWidth(window.innerWidth);
        }
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, [])


    return (
        <div className=" flex justify-center w-5/6">
            {screenWidth < 800 ? (
                <div tabIndex={0} className="collapse collapse-arrow border mt-5 border-base-100 bg-base-100 rounded-box">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title text-l font-medium">
                        auswählen
                    </div>
                    <div className="collapse-content">
                        <p>{subCriteriaArray.map(entry => {
                            return (
                                <div key={entry.name} >
                                    <input type="checkbox" id={entry.name} className="hover:cursor-pointer" value={entry.name} checked={entry.checked} onChange={handleCheck} />
                                    <label htmlFor={entry.name} className="m-2 hover:cursor-pointer text-gray-500 dark:text-white">{entry.name}</label>
                                </div>
                            )
                        })}</p>
                    </div>
                </div>
            ) : (
                <fieldset className="checkboxContainer flex flex-col flex-wrap shadow border border-black overflow-auto rounded-xl mt-10 my-5 w-3/4 px-5 py-2 max-h-32 ">
                    {subCriteriaArray.map(entry => {
                        return (
                            <div key={entry.name} >
                                <input type="checkbox" id={entry.name} className="hover:cursor-pointer" value={entry.name} checked={entry.checked} onChange={handleCheck} />
                                <label htmlFor={entry.name} className="m-2 hover:cursor-pointer text-gray-500 dark:text-white">{entry.name}</label>
                            </div>
                        )
                    })}
                </fieldset>
            )}
        </div>
    )
};