import './App.css';

import { Routes, Route, Switch, BrowserRouter } from "react-router-dom";
import { useNavigate } from "react-router";

import { useState } from 'react';

import Navbar from './components/Navbar';
import LandingPage from "./components/LandingPage";
import ErgebnisseSeite from "./components/ErgebnisseSeite";
import TeeArtDetail from "./components/TeeArtDetail";
import TeeSorteDetail from "./components/TeeSorteDetail";
import Zubehör from "./components/Zubehör";
import ErrorPage from './components/ErrorPage';
import Footer from './components/Footer'


function App() {
  const [allTeas,setAllTeas] = useState([
    {id:1,
    name:"Darjeeling",
    teeart:"Schwarzer Tee",
    anbaugebiet:"Nordindien",
    aromen:["vollmundig","süßlich"],
    benefits:[""],
    coffein:true
    },
    {id:2,
      name:"Macha",
      teeart:"Grüner Tee",
      anbaugebiet:"Japan",
      aromen:["süßlich"],
      benefits:["kann Cholesterienspiegel senken"],
      coffein:true
      },
      {id:3,
        name:"Schwarzer Japaner",
        teeart:"Schwarzer Tee",
        anbaugebiet:"Japan",
        aromen:["vollmundig"],
        benefits:["Immunsystem stärken"],
        coffein:true
        }
  ]);/* mit useEffect und fetch/axios füllen */
  const [allTeearten,setAllTeearten]=useState(["Schwarzer Tee","Grüner Tee"]);/* mit useEffect und fetch/axios füllen */
  const [allAnbaugebiete,setAllAnbaugebiete]=useState(["Nordindien","Japan"]);/* mit useEffect und fetch/axios füllen */
  const [allBenefits,setAllBenefits]=useState(["kann Cholesterienspiegel senken","Immunsystem stärken"]);/* mit useEffect und fetch/axios füllen */
  const [allAromen,setAllAromen]=useState(["süßlich","vollmundig"]);/* mit useEffect und fetch/axios füllen */
  const [allCoffein,setAllCoffein]=useState(["koffeinhaltig","koffeinfrei"]);/* mit useEffect und fetch/axios füllen */
  const [chosenCriterias,setChosenCriterias] = useState([]);
  const [resultTeas, setResultTeas] = useState([]);

  const navigate=useNavigate();

  const searchFunktion=()=>{
    /* variablen anpassen? */
    let foundTeas =[...allTeas];

    const chosenCriteriasTemp=[...chosenCriterias];

    const nameSearch=chosenCriteriasTemp.filter(criteria=>criteria.category==="name");
console.log(nameSearch)
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
    navigate("/ergebnisse/suche")
  }
  return (


    <div className="App flex flex-col justify-center  container mx-auto bg-white-300 rounded-xl shadow border p-8 m-10">
      <Navbar chosenCriterias={chosenCriterias} setChosenCriterias={setChosenCriterias} searchFunktion={searchFunktion} allTeearten={allTeearten} allAnbaugebiete={allAnbaugebiete} allBenefits={allBenefits} allAromen={allAromen} allCoffein={allCoffein}/>

        
      <Routes>
        <Route path='/' element={<LandingPage chosenCriterias={chosenCriterias} setChosenCriterias={setChosenCriterias} searchFunktion={searchFunktion} allTeearten={allTeearten} allAnbaugebiete={allAnbaugebiete} allBenefits={allBenefits} allAromen={allAromen} allCoffein={allCoffein} />} />
        <Route path='/ergebnisse/:kriteria' element={<ErgebnisseSeite resultTeas={resultTeas} />} />
        <Route path='/teeart' element={<TeeArtDetail/>} />
        <Route path='/teesorte' element={<TeeSorteDetail/>} />
        <Route path='/zubehör' element={<Zubehör/>} />
        <Route path='*' element={<ErrorPage/>} />        
      </Routes>
      <Footer />
    </div>
  );
}

export default App;