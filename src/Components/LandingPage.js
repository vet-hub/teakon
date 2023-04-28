
import CriteriaSelection from './CriteriaSelection';
import Infosection from './Infosection';


export default function LandingPage({chosenCriterias,setChosenCriterias,searchFunktion,allTeearten,allAnbaugebiete,allBenefits,allAromen,allCoffein}) {
    return(
        <div>

        <Infosection />
        <CriteriaSelection chosenCriterias={chosenCriterias} setChosenCriterias={setChosenCriterias} searchFunktion={searchFunktion} allTeearten={allTeearten} allAnbaugebiete={allAnbaugebiete} allBenefits={allBenefits} allAromen={allAromen} allCoffein={allCoffein} />
        </div>
    )
}