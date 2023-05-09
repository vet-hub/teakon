import { useParams } from "react-router-dom";

export default function MobileAccordion({tee}){
    return (
        <>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    Beschreibung:
                </div>
                <div className="collapse-content">
                    <p>{tee.teebeschreibung[0]}</p>
                </div>
            </div>
        </>
    )
}