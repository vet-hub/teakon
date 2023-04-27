import { useParams } from "react-router-dom"
import Alletees from "./Alletees";

export default function ErgebnisseSeite() {
    const { kriteria } = useParams();

    return(
        <div>
            <Alletees/>
        </div>
    )
}