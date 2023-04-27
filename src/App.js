import './App.css';

import { Routes, Route, Switch, BrowserRouter } from "react-router-dom";


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
  const [chosenCriterias,setChosenCriterias] = useState([]);
  const [allTeas,setAllTeas] = useState([]);/* mit useEffect und fetch/axios füllen */
  const [resultTeas, setResultTeas] = useState([]);

  const searchFunktion=()=>{
    let foundTeas =[...allTeas];
    const chosenCriteriasTemp=[...chosenCriterias];
    const nameSearch=chosenCriteriasTemp.filter(criteria=>criteria.category==="name");
    const teeartSearch=chosenCriteriasTemp.filter(criteria=>criteria.category==="teas");
    const originSearch=chosenCriteriasTemp.filter(criteria=>criteria.category==="origin");
    const flavourSearch=chosenCriteriasTemp.filter(criteria=>criteria.category==="coffein");
    const benefitSearch=chosenCriteriasTemp.filter(criteria=>criteria.category==="flavour");
    const coffeinSearch=chosenCriteriasTemp.filter(criteria=>criteria.category==="effect");
    if (nameSearch.length>0){
      /* foundTeas=foundTeas.filter(tea=>tea.name===name) */
    }else /* wenn kein tee namentlich gesucht wird */
    {
    if (teeartSearch.length>0){
      const foundInCategory=[]
      teeartSearch.map(criteria=>{
        const foundByCriteria=foundTeas.filter(tea=>tea.teeart===criteria)
        foundInCategory.push(...foundByCriteria)
      })
      foundTeas=foundInCategory 
    }
    if (originSearch.length>0){
      const foundInCategory=[]
      originSearch.map(criteria=>{
        const foundByCriteria=foundTeas.filter(tea=>tea.anbaugebiet===criteria)
        foundInCategory.push(...foundByCriteria)
      })
      foundTeas=foundInCategory
    }
    if (flavourSearch.length>0){
      teeartSearch.map(criteria=>{foundTeas=foundTeas.filter(tea=>tea.aromen===criteria)})/* bei und */
      
    }
    if (benefitSearch.length>0){
      teeartSearch.map(criteria=>{foundTeas=foundTeas.filter(tea=>tea.benefits===criteria)})
    }
    if (coffeinSearch.length>0){
      foundTeas=foundTeas.filter(tea=>tea.coffein===coffeinSearch[0].name)
    }}
    setResultTeas(foundTeas)
  }
  return (


    <div className="App flex flex-col justify-center  container mx-auto bg-white-300 rounded-xl shadow border p-8 m-10">
      <Navbar/>

        
      <Routes>
        <Route path='/' element={<LandingPage chosenCriterias={chosenCriterias} setChosenCriterias={setChosenCriterias}/>} />
        <Route path='/ergebnisse/:kriteria' element={<ErgebnisseSeite/>} />
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

