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

