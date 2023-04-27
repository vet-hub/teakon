import { useParams } from "react-router-dom"

export default function ErgebnisseSeite() {
    const { kriteria } = useParams();

    return(
        <div>
            <p>Ich bin die Ergebniss Seite</p>
        </div>
    )
}