import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
    const navigate = useNavigate();
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("/images/stock/photo-1507358522600-9f71e620c44e.jpg")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
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
