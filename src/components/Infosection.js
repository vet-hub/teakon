
import infoPic from "../img/infoBild.jpg";
import { useNavigate } from 'react-router-dom';

export default function Infosection() {
    const navigate = useNavigate();
    return (
        <>
            <div className="hero min-h-3/4">
                <img src={infoPic} alt='paul-vincent-unsplash' className='w-full h-full rounded-box opacity-75'></img>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w">
                        <h1 className="italic sm:mb-5 text-3xl lg:text-5xl xl:text-7xl font-bold shadow-sm text-black ">TEEKON MASALA</h1>
                        <p className="italic mb-0 p-0 lg:mb-5 xl:text-2xl font-bold text-black">Willkommen auf unserer Teewebseite! Hier findest du alles, was du über Tee wissen musst - von der Herkunft bis hin zu den verschiedenen Arten und Sorten. Wir haben sogar eine Beschreibung für jeden Tee, damit du weißt, was dich erwartet. Also schnapp dir eine Tasse und lass uns zusammen diese köstliche Welt erkunden!</p>
                        <button onClick={() => navigate("/ergebnisse/alle")} className="bg-black hover:bg-white text-white font-bold hover:text-black py-2 px-4 lg:py-3 lg:px-7 mt-4 border border-black hover:border-transparent rounded-full opacity-60 duration-200">Zeige alle Tees</button>
                    </div>
                </div>
            </div>
        </>
    )
};