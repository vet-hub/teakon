import { useParams } from "react-router-dom"

import AlleTees from "./Alletees";


export default function ErgebnisseSeite() {
    const { kriteria } = useParams();

    return(
        <div>
            <Alletees/>
        </div>
    )
}