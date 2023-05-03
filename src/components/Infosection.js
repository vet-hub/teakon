
import infoPic from "../img/infoBild.jpg";
import { useNavigate } from 'react-router-dom';

export default function Infosection() {
    const navigate = useNavigate();
    return (
        <>
            <div className="hero min-h-max rounded-box">
                <img src={infoPic} alt='paul-vincent-unsplash' className='w-full h-3/4 rounded-box'></img>
                <div className="min bg-opacity-60 rounded-box"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold shadow-sm text-[#ffffff] ">TEEKON MASALA</h1>
                        <p className="mb-5 text-gray-200">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
                        <button onClick={() => navigate("/ergebnisse/alle")} className="bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-3 px-7 mt-4 border border-blue-500 hover:border-transparent rounded-full">Zeige alle Tees</button>
                    </div>
                </div>
            </div>
        </>
    )
};