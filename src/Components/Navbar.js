import { Link } from "react-router-dom"

export default function Navbar() {
    /* TODO responsiveness (burgermenu) */
    const resolveSearchBar=()=>{
        /* chosenCriterias,setChosenCriterias,searchFunktion */
    }
    return (
        <div className="navbar p-7 bg-base-200 rounded-box">
            {/* ---------------- Logo section -------------- */}
    <div className="flex-1 px-2 lg:flex-none">
        <a className="text-lg font-bold"><img></img><Link to="/"></Link></a>
    </div> 
    <div className="flex justify-end flex-1 px-2">
        <div className="flex items-stretch">
            {/* ----------------- Searchbar ---------------- */}
            <div className="form-control">
                <input type="text" placeholder="Search" className="input input-bordered" />
            </div>
            {/* ------------------ zubehör ----------------- */}
            <a className="btn btn-ghost rounded-btn"><Link to="/zubehör">Zubehör</Link></a>
            {/* ---------------- Dropdown menü ------------- */}
            <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost rounded-btn">Tee</label>
                <ul tabIndex={0} className="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4">
                    <li><a><Link to="/ergebnisse/schwarztee">Schwarz Tee</Link></a></li> 
                    <li><a><Link to="/ergebnisse/weissertee">Weißer Tee</Link></a></li> 
                    <li><a><Link to="/ergebnisse/gruenertee">Grüner Tee</Link></a></li>
                    <li><a><Link to="/ergebnisse/gelbertee">Gelber Tee</Link></a></li>
                    <li><a><Link to="/ergebnisse/oolongtee">Oolong Tee</Link></a></li>
                    <li><a><Link to="/ergebnisse/fruechtetee">Früchtetee</Link></a></li>
                    <li><a><Link to="/ergebnisse/krautertee">Kräutertee</Link></a></li>
                    <li><a><Link to="/ergebnisse/eistee">Eistee</Link></a></li>
                </ul>
            </div>
        </div>
    </div>
</div>
    )
}