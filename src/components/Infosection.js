
import infoPic from "../img/infoBild.jpg";
import { useNavigate } from 'react-router-dom';

export default function Infosection({ setChosenCriterias }) {
    const navigate = useNavigate();
    return (
        <>
            <div className="hero min-h-3/4">
                <img src={infoPic} alt='paul-vincent-unsplash' className='w-full h-full rounded-box'></img>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w drop-shadow-2xl">
                        <h1 className="text-center mb-7 text-teal-300 text-2xl lg:text-4xl xl:text-5xl font-medium"><span className="text-lime-950 text-3xl lg:text-5xl xl:text-8xl font-black">TEEK<span className="text-amber-900">O</span>N</span> <br />masala</h1>
                        <button onClick={() => { setChosenCriterias([]); navigate("/ergebnisse/alle") }} className="sm:mt-6 bg-black hover:bg-white text-white font-bold hover:text-black py-2 px-4 lg:py-3 lg:px-7 mt-4 border border-black hover:border-transparent rounded-full opacity-60 duration-200">Zeige alle Tees</button>
                    </div>
                </div>
            </div>
            <p className="mt-5  mb-0 p-0 lg:mb-3 lg:mt-3 text-center xl:text-2xl font-bold text-black dark:text-gray-300">Willkommen auf unserer Teewebseite! Hier findest du alles, was du über Tee wissen musst - von der Herkunft bis hin zu den verschiedenen Arten und Sorten. Wir haben sogar eine Beschreibung für jeden Tee, damit du weißt, was dich erwartet. Also schnapp dir eine Tasse und lass uns zusammen diese köstliche Welt erkunden!</p>
        </>
    )
};