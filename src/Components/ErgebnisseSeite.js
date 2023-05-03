import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import wrldmap from '../img/61752.jpg';
import { Link } from 'react-router-dom';
import SelectedCriterias from "./SelectedCriterias";


export default function ErgebnisseSeite({chosenCriterias, setChosenCriterias, allTeas, allTeearten}) {
    const { kriteria } = useParams();
    const navigateTo = useNavigate();
    const [resultTeas,setResultTeas]=useState(allTeas)

    let foundTeas =[...allTeas];
    const searchFunktion=()=>{
        /*TODO variablen anpassen? */
        const chosenCriteriasTemp=[...chosenCriterias];
    
        const nameSearch=chosenCriteriasTemp.filter(criteria=>criteria.category==="name");
    
        const teeartSearch=chosenCriteriasTemp.filter(criteria=>criteria.category==="teas");
    
        const originSearch=chosenCriteriasTemp.filter(criteria=>criteria.category==="origin");
    
        const flavourSearch=chosenCriteriasTemp.filter(criteria=>criteria.category==="flavour");
        
        const benefitSearch=chosenCriteriasTemp.filter(criteria=>criteria.category==="effect");
        
        const coffeinSearch=chosenCriteriasTemp.filter(criteria=>criteria.category==="coffein");
        
        if (nameSearch.length>0){
            foundTeas=foundTeas.filter(tea=>tea.name.toLowerCase()===nameSearch[0].name);
        }else /* wenn kein tee namentlich gesucht wird */
        {
            if (teeartSearch.length>0){
            const foundInCategory=[]
            teeartSearch.map(criteria=>{
            const foundByCriteria=foundTeas.filter(tea=>tea.teeart===criteria.name)
            foundInCategory.push(...foundByCriteria)
        });
            foundTeas=foundInCategory;
        }
        if (originSearch.length>0){
            const foundInCategory=[]
            originSearch.map(criteria=>{
            const foundByCriteria=foundTeas.filter(tea=>tea.anbaugebiet===criteria.name)
            foundInCategory.push(...foundByCriteria)
        })
            foundTeas=foundInCategory;
        }
        if (flavourSearch.length>0){
            flavourSearch.map(criteria=>{foundTeas=foundTeas.filter(tea=>tea.aromen.includes(criteria.name))})
        }
        if (benefitSearch.length>0){
            benefitSearch.map(criteria=>{foundTeas=foundTeas.filter(tea=>tea.benefits.includes(criteria.name))})
        }
        if (coffeinSearch.length>0){
            foundTeas=foundTeas.filter(tea=>tea.coffein===coffeinSearch[0].name)
        }}
        setResultTeas(foundTeas)
    }

useEffect(() => {
    setResultTeas(allTeas)
if (kriteria === "suche") {
                    switch (chosenCriterias.length) {
                        case 0:
                            navigateTo("/ergebnisse/alle");
                            break;
                        case 1:
                            if (chosenCriterias[0].category==="teas"){
                                const chosenTeeart=chosenCriterias[0].name.toLowerCase().replace(" ","");
                                searchFunktion();
                                navigateTo(`/ergebnisse/${chosenTeeart}`)
                            };
            
                        default:
                            searchFunktion();
                            if (!foundTeas.length){navigateTo("/*")}
                            break;
                        } 
                    }
    
}, [chosenCriterias])

    return(
        <>
            <p className='text-5xl text-gray-900 bg-grey-600 text-center font-bold my-6'>Die Welt des Tee</p>
            
            {/* für alle tees */}
            {kriteria === "alle" && <p className='text-5xl text-gray-900 bg-grey-600 text-center font-bold my-6'>Alle Tees</p>} 
            
            {/* für einzelne teeart */}
            {chosenCriterias.length===1 && 
            (allTeearten.includes(chosenCriterias[0].name)) && (
            <div className="mt-6 mb-6">
                <div className="card card-side bg-base-100 shadow-xl mb-4">
                    <figure><img className="object-scale-down h-48 w-96" src="" alt={allTeearten.findIndex(teeart=>teeart === chosenCriterias[0].name)}/></figure>
                    <div className="card-body">
                        <h2 className="card-title">{chosenCriterias[0].name}</h2>
                        <p>beschreibung für {allTeearten[allTeearten.findIndex(teeart=>teeart === chosenCriterias[0].name)]}</p>
                    </div>
                </div>
            </div>)} 

            {kriteria==="suche" && <SelectedCriterias chosenCriterias={chosenCriterias} setChosenCriterias={setChosenCriterias}/>}

            {/* anzeige aller gefundener tees */}
            <div className='flex flex-wrap justify-center items-center gap-x-6  gap-y-6 mt-10 mb-7'>
                {resultTeas.map(tea=>{return(
                    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img src={wrldmap} alt='wimage' className='w-full h-80 my-4 rounded-lg' />
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{tea.name}</h5>
                            </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{tea.anbaugebiet}</p>
                            <button onClick={() => navigateTo("/teesorte")} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-3 px-7 mt-4 border border-blue-500 hover:border-transparent rounded-full ">anzeigen<svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </button>
                        </div>
                    </div>
                )})}
            </div>
        </>
    )
}