
import CriteriaSelection from './CriteriaSelection';
import Infosection from './Infosection';


export default function LandingPage({chosenCriterias,setChosenCriterias}) {
    return(
        <div>

        <Infosection />
        <CriteriaSelection chosenCriterias={chosenCriterias} setChosenCriterias={setChosenCriterias} />
        </div>
    )
}