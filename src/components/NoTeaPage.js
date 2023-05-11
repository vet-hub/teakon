import { useNavigate } from "react-router-dom";
import erphto from  "../img/drew-jemmett-qEcWgrTG578-unsplash.jpg";

export default function NoTeaPage({setChosenCriterias}) {
    const navigate = useNavigate();
    return (
        <div className="hero min-h-screen rounded-box">
            <img src={erphto} alt='Foto von Drew Jemmett auf unsplash' className='w-full h-auto rounded-box'></img>
            <div className="hero-overlay bg-opacity-60 rounded-box"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Es wurde leider kein Tee mit deinen Suchkriterien gefunden.</h1>
                    <p className="mb-5">Versuche doch andere Kriterien.</p>
                    <button onClick={() => {setChosenCriterias([]); navigate("/")}} className="btn btn-primary">Startseite</button>
                </div>
            </div>
        </div>
    );
}
