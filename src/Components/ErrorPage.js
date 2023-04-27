import { useNavigate } from "react-router-dom";
import erphto from  "../img/drew-jemmett-qEcWgrTG578-unsplash.jpg";

export default function ErrorPage() {
    const navigate = useNavigate();
    return (
        <div className="hero min-h-screen rounded-box">
            <img src={erphto} alt='Foto von Drew Jemmett auf unsplash' className='w-full h-auto rounded-box'></img>
            <div className="hero-overlay bg-opacity-60 rounded-box"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">404</h1>
                    <p className="mb-5">PAGE NOT FOUND</p>
                    <button onClick={() => navigate("/")} className="btn btn-primary">Startseite</button>
                </div>
            </div>
        </div>
    );
}
