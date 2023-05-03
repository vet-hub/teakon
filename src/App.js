import './App.css';

import { Routes, Route, Switch, BrowserRouter } from "react-router-dom";
import { useNavigate } from "react-router";
import { useState, useEffect } from 'react';

import Navbar from './components/Navbar';
import LandingPage from "./components/LandingPage";
import ErgebnisseSeite from "./components/ErgebnisseSeite";
import TeeArtDetail from "./components/TeeArtDetail";
import TeeSorteDetail from "./components/TeeSorteDetail";
import Zubehör from "./components/Zubehör";
import ErrorPage from './components/ErrorPage';
import Footer from './components/Footer'


function App() {
  const [doSearch,setDoSearch] = useState([]);
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
  const [allTeearten,setAllTeearten]=useState([]);/* mit useEffect und fetch/axios füllen */
  const [allAnbaugebiete,setAllAnbaugebiete]=useState(["Nordindien","Japan"]);/* mit useEffect und fetch/axios füllen */
  const [allBenefits,setAllBenefits]=useState(["kann Cholesterienspiegel senken","Immunsystem stärken"]);/* mit useEffect und fetch/axios füllen */
  const [allAromen,setAllAromen]=useState(["süßlich","vollmundig"]);/* mit useEffect und fetch/axios füllen */
  const [allCoffein,setAllCoffein]=useState(["koffeinhaltig","koffeinfrei"]);/* mit useEffect und fetch/axios füllen */
  const [chosenCriterias,setChosenCriterias] = useState([]);
  const navigate=useNavigate();

  const urlAllArten ="https://teakon-masala-backend.onrender.com/teeapi/tees";
  const urlSearch="https://teakon-masala-backend.onrender.com/teeapi/suchkriterien";

//----------------------------------------------Fetch-Area-start-----------------------------------------------------------------------
//-------------fetch für alle TeeSorten---------------- 
  const fetchDataArten = async () => {
    try {
      const getallArten = await fetch(urlAllArten);
      if(!getallArten.ok) throw new Error(`Request failed with a status of ${getallArten.status}`);
      const parseData = await getallArten.json();
      setAllTeearten(parseData.teesArray);
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
      { allTeearten && doSearch &&
        <div className="App flex flex-col justify-center  container mx-auto bg-white-300 rounded-xl shadow border p-8 m-10">
          <Navbar chosenCriterias={chosenCriterias} setChosenCriterias={setChosenCriterias} searchFunktion={searchFunktion} allTeearten={allTeearten} allAnbaugebiete={allAnbaugebiete} allBenefits={allBenefits} allAromen={allAromen} allCoffein={allCoffein}/>
          <Routes>
              <Route path='/' element={<LandingPage chosenCriterias={chosenCriterias} setChosenCriterias={setChosenCriterias}  allTeearten={allTeearten} allAnbaugebiete={allAnbaugebiete} allBenefits={allBenefits} allAromen={allAromen} allCoffein={allCoffein} />} />
              <Route path='/ergebnisse/:kriteria' element={<ErgebnisseSeite chosenCriterias={chosenCriterias} setChosenCriterias={setChosenCriterias} allTeas={allTeas} allTeearten={allTeearten}/>} />
              <Route path='/teeart' element={<TeeArtDetail/>} />
              <Route path='/teesorte' element={<TeeSorteDetail/>} />
              <Route path='/zubehör' element={<Zubehör/>} />
              <Route path='*' element={<ErrorPage/>} />        
          </Routes>
          <Footer />
        </div>
      }
    </>
  );
}

export default App;