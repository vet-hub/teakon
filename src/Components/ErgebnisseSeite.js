import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import wrldmap from '../img/61752.jpg';
import { Link } from 'react-router-dom';
import SelectedCriterias from "./SelectedCriterias";
import schwarzerTee from "../img/teearten/schwarzertee.jpg";
import gruenerTee from "../img/teearten/gruenertee.jpg";
import eisTee from "../img/teearten/eistee.jpg";
import fruechteTee from "../img/teearten/fruechtetee.jpg";
import gelberTee from "../img/teearten/gelbertee.jpg";
import kraeuterTee from "../img/teearten/kraeutertee.jpg";
import oolongTee from "../img/teearten/oolongtee.jpg";
import weißerTee from "../img/teearten/weissertee.jpg";



export default function ErgebnisseSeite({ chosenCriterias, setChosenCriterias, allTeas, allTeearten }) {
    const { kriteria } = useParams();
    const navigateTo = useNavigate();
    const [resultTeas, setResultTeas] = useState(allTeas)

    let foundTeas = [...allTeas];
    const searchFunktion = () => {
        /*TODO variablen anpassen? */
        const chosenCriteriasTemp = [...chosenCriterias];

        const nameSearch = chosenCriteriasTemp.filter(criteria => criteria.category === "name");

        const teeartSearch = chosenCriteriasTemp.filter(criteria => criteria.category === "teas");

        const originSearch = chosenCriteriasTemp.filter(criteria => criteria.category === "origin");

        const flavourSearch = chosenCriteriasTemp.filter(criteria => criteria.category === "flavour");

        const benefitSearch = chosenCriteriasTemp.filter(criteria => criteria.category === "effect");

        const coffeinSearch = chosenCriteriasTemp.filter(criteria => criteria.category === "coffein");

        if (nameSearch.length > 0) {
            foundTeas = foundTeas.filter(tea => tea.name.toLowerCase() === nameSearch[0].name);
        } else /* wenn kein tee namentlich gesucht wird */ {
            if (teeartSearch.length > 0) {
                const foundInCategory = []
                teeartSearch.map(criteria => {
                    const foundByCriteria = foundTeas.filter(tea => tea.teeart === criteria.name)
                    foundInCategory.push(...foundByCriteria)
                });
                foundTeas = foundInCategory;
            }
            if (originSearch.length > 0) {
                const foundInCategory = []
                originSearch.map(criteria => {
                    const foundByCriteria = foundTeas.filter(tea => tea.anbaugebiet === criteria.name)
                    foundInCategory.push(...foundByCriteria)
                })
                foundTeas = foundInCategory;
            }
            if (flavourSearch.length > 0) {
                flavourSearch.map(criteria => { foundTeas = foundTeas.filter(tea => tea.aromen.includes(criteria.name)) })
            }
            if (benefitSearch.length > 0) {
                benefitSearch.map(criteria => { foundTeas = foundTeas.filter(tea => tea.benefits.includes(criteria.name)) })
            }
            if (coffeinSearch.length > 0) {
                foundTeas = foundTeas.filter(tea => tea.coffein === coffeinSearch[0].name)
            }
        }
        setResultTeas(foundTeas)
    }

    const teeArtImmages = {
        "schwarzertee": schwarzerTee,
        "grünertee": gruenerTee,
        "eistee": eisTee,
        "früchtetee": fruechteTee,
        "gelbertee": gelberTee,
        "kräutertee": kraeuterTee,
        "oolongtee": oolongTee,
        "weißertee": weißerTee
    }
    useEffect(() => {
        setResultTeas(allTeas)
        if (kriteria === "suche") {
            switch (chosenCriterias.length) {
                case 0:
                    navigateTo("/ergebnisse/alle");
                    break;
                case 1:
                    if (chosenCriterias[0].category === "teas") {
                        const chosenTeeart = chosenCriterias[0].name.toLowerCase().replace(" ", "");
                        searchFunktion();
                        navigateTo(`/ergebnisse/${chosenTeeart}`)
                    };

                default:
                    searchFunktion();
                    if (!foundTeas.length) { navigateTo("/*") }
                    break;
            }
        }

    }, [chosenCriterias])

    return (
        <>
            <p className='text-5xl text-gray-900 bg-grey-600 text-center font-bold my-6'>Die Welt des Tee</p>

            {/* für alle tees */}
            {kriteria === "alle" && <p className='text-5xl text-gray-900 bg-grey-600 text-center font-bold my-6'>Alle Tees</p>}

            {/* für einzelne teeart */}
            {chosenCriterias.length === 1 &&
                (allTeearten.findIndex(teeart => teeart.name === chosenCriterias[0].name) >= 0) && (
                    <div className="mt-6 mb-6">
                        <div className="card card-side bg-base-100 shadow-xl mb-4">
                            <figure><img className="object-scale-down h-48 w-96" src={teeArtImmages[kriteria]} alt={allTeearten[allTeearten.findIndex(teeart => teeart.name === chosenCriterias[0].name)].name} /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{chosenCriterias[0].name}</h2>
                                <p>{allTeearten[allTeearten.findIndex(teeart => teeart.name === chosenCriterias[0].name)].beschreibung}</p>
                            </div>
                        </div>
                    </div>)}

            {/* für suchergebniss  */}
            {kriteria === "suche" && <SelectedCriterias chosenCriterias={chosenCriterias} setChosenCriterias={setChosenCriterias} />}

            {/* anzeige aller gefundener tees */}
            <div className='md:flex md:flex-wrap md:justify-center md:items-center md:gap-x-6  md:gap-y-6 md:mt-10 md:mb-7'>
                {resultTeas.map(tea => {
                    return (
                        // DIV onClick={() => navigateTo("/teesorte")}
                        <div className="flex md:flex-col max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" onClick={() => navigateTo("/teesorte")}>
                            <a href="#" onClick={() => navigateTo("/teesorte")}>
                                <img src={wrldmap} alt='wimage' className='w-20 h-20 my-2 rounded-lg md:w-full md:h-80 md:my-4 md:rounded-lg' />
                            </a>
                            <div className="pl-5 pt-2  md:p-5 md:flex md:flex-col">
                                <a href="#" onClick={() => navigateTo("/teesorte")}>
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{tea.name}</h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{tea.anbaugebiet}</p>
                                <button onClick={() => navigateTo("/teesorte")} className="hidden md:block md:bg-transparent md:hover:bg-blue-500 md:text-blue-700 font-semibold md:hover:text-white md:py-3 md:px-7 md:mt-4 md:border md:border-blue-500 md:hover:border-transparent md:rounded-full ">anzeigen</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}