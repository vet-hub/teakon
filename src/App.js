import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import LandingPage from "./Components/LandingPage";
import ErgebnisseSeite from "./Components/ErgebnisseSeite";
import TeeArtDetail from "./Components/TeeArtDetail";
import TeeSorteDetail from "./Components/TeeSorteDetail";
import Zubehör from "./Components/Zubehör";
import ErrorPage from './Components/ErrorPage';


import CriteriaSelection from './components/CriteriaSelection';
import Infosection from './components/Infosection';
import Footer from './components/Footer'


function App() {
  return (

    <div className="App flex flex-col justify-center  container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
      <Navbar/>
      <Infosection />
      <CriteriaSelection/>

        
        <Footer />
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/ergebnisse/:kriteria' element={<ErgebnisseSeite/>} />
        <Route path='/teeart' element={<TeeArtDetail/>} />
        <Route path='/teesorte' element={<TeeSorteDetail/>} />
        <Route path='/zubehör' element={<Zubehör/>} />
        <Route path='*' element={<ErrorPage/>} />
      </Routes>
    </div>
  );
} 

export default App;

