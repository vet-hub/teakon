import './App.css';
import { Routes, Route, Router } from "react-router-dom";
import { useState, useEffect } from 'react';

import Navbar from './components/Navbar';
import LandingPage from "./components/LandingPage";
import ErgebnisseSeite from "./components/ErgebnisseSeite";
import TeeArtDetail from "./components/TeeArtDetail";
import TeeSorteDetail from "./components/TeeSorteDetail";
import Zubehör from "./components/Zubehör";
import ErrorPage from './components/ErrorPage';
import Footer from './components/Footer';
import NoTeaPage from "./components/NoTeaPage"
import ScrollToTop from './components/ScrollToTop';


function App() {
  const [doSearch,setDoSearch] = useState();
  const [allTeas,setAllTeas] = useState();
  const [chosenCriterias,setChosenCriterias] = useState([]);


  const urlAllArten ="https://teakon-masala-backend.onrender.com/teeapi/tees";
  const urlSearch="https://teakon-masala-backend.onrender.com/teeapi/suchkriterien";

//----------------------------------------------Fetch-Area-start-----------------------------------------------------------------------
//-------------fetch für alle TeeSorten---------------- 
  const fetchDataArten = async () => {
    try {
      const getallArten = await fetch(urlAllArten);
      if(!getallArten.ok) throw new Error(`Request failed with a status of ${getallArten.status}`);
      const parseData = await getallArten.json();
      setAllTeas(parseData.teesObjectsArray);
    } catch (error) {
      console.log(error.message);
    }
  }
  // //--------------fetch für Suche--------------------
  const fetchDataSearch = async () => {
    try {
      const getSearch = await fetch(urlSearch);
      if(!getSearch.ok) throw new Error(`Request failed with a status of ${getSearch.status}`);
      const parseData = await getSearch.json();
      setDoSearch(parseData);
    } catch (error) {
      console.log(error.message);
    }
  }
  
  //----------------------------------------Fetch-Area-End--------------------------------------------------------------------------------
  
  useEffect(() => {
    fetchDataArten();
    fetchDataSearch();
  }, [])

  return (
    <> 
      <ScrollToTop/>
      { allTeas && doSearch &&
        <div className="App flex flex-col justify-center  container mx-auto bg-gray-200 dark:bg-gray-700 rounded-xl shadow border p-5 m-5">
          <Navbar chosenCriterias={chosenCriterias} setChosenCriterias={setChosenCriterias} allTeearten={doSearch.teeArtenArray} allAnbaugebiete={doSearch.anbaugebieteArray} allBenefits={doSearch.benefitsArray} allAromen={doSearch.aromenArray} allCoffein={doSearch.attributeArray}/>
          <Routes>
              <Route path='/' element={<LandingPage chosenCriterias={chosenCriterias} setChosenCriterias={setChosenCriterias}  allTeearten={doSearch.teeArtenArray} allAnbaugebiete={doSearch.anbaugebieteArray} allBenefits={doSearch.benefitsArray} allAromen={doSearch.aromenArray} allCoffein={doSearch.attributeArray} />} />
              <Route path='/ergebnisse/:kriteria' element={<ErgebnisseSeite chosenCriterias={chosenCriterias} setChosenCriterias={setChosenCriterias} allTeas={allTeas} allTeearten={doSearch.teeArtenArray}/>} />
              <Route path='/teesorte/:id' element={<TeeSorteDetail allTeas={allTeas} doSearch={doSearch} />} />
              <Route path='/zubehör' element={<Zubehör/>} />
              <Route path='/kein-tee' element={<NoTeaPage setChosenCriterias={setChosenCriterias} />} />
              <Route path='*' element={<ErrorPage/>} />        
          </Routes>
          <Footer chosenCriterias={chosenCriterias} setChosenCriterias={setChosenCriterias} allTeearten={doSearch.teeArtenArray} allAnbaugebiete={doSearch.anbaugebieteArray} allBenefits={doSearch.benefitsArray} allAromen={doSearch.aromenArray} allCoffein={doSearch.attributeArray}/>
        </div>
      }
    </>
  );
}

export default App;/*TODO fill-rule -> fillRule; clip-rule -> clipRule; class -> className */