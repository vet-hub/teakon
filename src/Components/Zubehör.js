import Teedose from "../img/zubehör/Tee-Dose-Produktbild-scaled.jpg";
import Aufgusskanne from "../img/zubehör/Aufgusskanne.jpg";
import Bambusbesen from "../img/zubehör/Bambusbesen.jpg";
import Besenhalter from "../img/zubehör/Bambusbesenhalter.jpg";
import Bambusloeffel from "../img/zubehör/Bambuslöffel.jpg";
import Teewaage from "../img/zubehör/Teewaage.jpg";
import Wasserkocher from "../img/zubehör/Wasserkocher.jpg";
import Stoevchen from "../img/zubehör/Stövchen.jpg";

export default function Zubehör() {
    /* TODO responsiveness bilder */
    return(
        
        <div className="mt-6 mb-6">
            <div className="card card-side bg-base-100 shadow-xl mb-4">
                <figure><img className="object-scale-down h-48 w-96" src={Teedose} alt="Movie"/></figure>
                <div className="card-body">
                    <h2 className="card-title">Teedose aus Edelstahl</h2>
                    <p>Mit einer Teedose bleibt das Aroma des Tee's optimal für einen längeren Zeitraum erhalten.</p>
                </div>
            </div>    
            <div className="card card-side bg-base-100 shadow-xl mb-4">
                <figure><img className="object-scale-down h-48 w-96" src={Aufgusskanne} alt="Movie"/></figure>
                <div className="card-body">
                    <h2 className="card-title">Aufgusskanne</h2>
                    <p>Durch die verwendung einer Aufgusskanne können die Teeblätter das Aroma optimal entfalten.</p>
                </div>
            </div>    
            <div className="card card-side bg-base-100 shadow-xl mb-4">
                <figure><img className="object-scale-down h-48 w-96" src={Bambusbesen} alt="Movie"/></figure>
                <div className="card-body">
                    <h2 className="card-title">Bambusbesen</h2>
                    <p>Ein Bambusbesen ist ein original-Utensil für die japanische Teezeremonie, welcher zum Verquirlen des Matcha-Tees verwendet wird.</p>
                </div>
            </div>    
            <div className="card card-side bg-base-100 shadow-xl mb-4">
                <figure><img className="object-scale-down h-48 w-96" src={Besenhalter} alt="Movie"/></figure>
                <div className="card-body">
                    <h2 className="card-title">Bambusbesenhalter</h2>
                    <p>Ein Bambusbesenhalter verlängert die Lebensdauer des Bambusbesen und sorgt dafür, dass er seine typische Form für eine lange Zeit behält.</p>
                </div>
            </div>    
            <div className="card card-side bg-base-100 shadow-xl mb-4">
                <figure><img className="object-scale-down h-48 w-96" src={Bambusloeffel} alt="Movie"/></figure>
                <div className="card-body">
                    <h2 className="card-title">Bambuslöffel</h2>
                    <p>Der Bambuslöffel auch Chashaku gennant, wrid traditionell verwendet um Matcha-Tee korrekt dosieren zu können.</p>
                </div>
            </div>    
            <div className="card card-side bg-base-100 shadow-xl mb-4">
                <figure><img className="object-scale-down h-48 w-96" src={Teewaage} alt="Movie"/></figure>
                <div className="card-body">
                    <h2 className="card-title">Teewaage</h2>
                    <p>Die Teewaage wird dazu verwendet um die Teeblätter grammgenau abwiegen zu können.</p>
                </div>
            </div>    
            <div className="card card-side bg-base-100 shadow-xl mb-4">
                <figure><img className="object-scale-down h-48 w-96" src={Wasserkocher} alt="Movie"/></figure>
                <div className="card-body">
                    <h2 className="card-title">Wasserkocher mit einstellbarer Wassertemperatur </h2>
                    <p>Ist notwendig um die Brühtemperatur für die verschiedenen Teesorten einzustellen.</p>
                </div>
            </div>    
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img className="object-scale-down h-48 w-96" src={Stoevchen} alt="Movie"/></figure>
                <div className="card-body">
                    <h2 className="card-title">Tee-Stövchen</h2>
                    <p>Ein Tee-Stövchen wird dazu verwendet um die Temperatur in der Aufgusskanne zu halten.</p>
                </div>
            </div>    
        </div>
    )
}