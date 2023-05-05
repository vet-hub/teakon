import wrldmap from '../img/61752.jpg';
import testbild from '../img/drew-jemmett-qEcWgrTG578-unsplash.jpg'
import Accordion from './accordion.js'
import { useParams } from 'react-router-dom';
import darjeelingtee from "../img/teesorten/01_darjeelingtee.jpg";
import assamtee from "../img/teesorten/02_assamtee.jpg";
import ceylontee from "../img/teesorten/03_ceylontee.jpg";
import keemuntee from "../img/teesorten/04_keemuntee.jpg";
import lapsangsuchongtee from "../img/teesorten/05_lapsangsuchongtee.jpg";
import senchatee from "../img/teesorten/06_senchatee.jpg";
import matchatee from "../img/teesorten/07_matchatee.jpg";
import dragonwelltee from "../img/teesorten/08_dragonwelltee.jpg";
import gyokurotee from "../img/teesorten/09_gyokurotee.jpg";
import junshanyinzhentee from "../img/teesorten/10_junshanyinzhentee.jpg";
import huoshanhuangyatee from "../img/teesorten/11_huoshanhuangyatee.jpg";
import mengdinghuangyatee from "../img/teesorten/12_mengdinghuangyatee.jpg";
import baihaoyinzhentee from "../img/teesorten/13_baihaoyinzhentee.jpg";
import baimudantee from "../img/teesorten/14_baimudantee.jpg";
import shoumeitee from "../img/teesorten/15_shoumeitee.jpg";
import darjeelinwhitetee from "../img/teesorten/16_darjeelinwhitetee.jpg";
import ceylonwhitetee from "../img/teesorten/17_ceylonwhitetee.jpg";
import tieguanyintee from "../img/teesorten/18_tieguanyintee.jpg";
import wuyiyanchatee from "../img/teesorten/19_wuyiyanchatee.jpg";
import dahongpaotee from "../img/teesorten/20_dahongpaotee.jpg";
import orientalbeautytee from "../img/teesorten/21_orientalbeautytee.jpg";
import jinxuantee from "../img/teesorten/22_jinxuantee.jpg";
import hagebuttentee from "../img/teesorten/23_hagebuttentee.jpg";
import hibiskustee from "../img/teesorten/24_hibiskustee.jpg";
import holunderbeerentee from "../img/teesorten/25_holunderbeerentee.jpg";
import heidelbeerentee from "../img/teesorten/26_heidelbeerentee.jpg";
import erdbeertee from "../img/teesorten/27_erdbeertee.jpg";
import kamillentee from "../img/teesorten/28_kamillentee.jpg";
import pfefferminztee from "../img/teesorten/29_pfefferminztee.jpg";
import ingwertee from "../img/teesorten/30_ingwertee.jpg";
import zitronnenmelissentee from "../img/teesorten/31_zitronnenmelissentee.jpg";
import brennnesseltee from "../img/teesorten/32_brennnesseltee.jpeg";
import china from "../img/laender/china.jpg";
import indien from "../img/laender/indien.jpg";
import japan from "../img/laender/japan.jpg";
import kenya from "../img/laender/kenya.jpg";
import kolumbien from "../img/laender/kolumbien.jpg";
import mosambik from "../img/laender/mosambik.jpg";
import nepal from "../img/laender/nepal.jpg";
import ostafrika from "../img/laender/ostafrika.jpg";
import ruanda from "../img/laender/ruanda.jpg";
import srilanka from "../img/laender/srilanka.jpg";
import taiwan from "../img/laender/taiwan.jpg";
import tanzania from "../img/laender/tanzania.jpg";
import vietnam from "../img/laender/vietnam.jpg";
import world from "../img/laender/world.jpg";

/* TODO Bilder */
export default function TeeSorteDetail({allTeas,doSearch}) {
    const imagesHandler={
        "01_darjeelingtee.jpg":darjeelingtee,
        "02_assamtee.jpg":assamtee,
        "03_ceylontee.jpg":ceylontee,
        "04_keemuntee.jpg":keemuntee,
        "05_lapsangsuchongtee.jpg":lapsangsuchongtee,
        "06_senchatee.jpg":senchatee,
        "07_matchatee.jpg":matchatee,
        "08_dragonwelltee.jpg":dragonwelltee,
        "09_gyokurotee.jpg":gyokurotee,
        "10_junshanyinzhentee.jpg":junshanyinzhentee,
        "11_huoshanhuangyatee.jpg":huoshanhuangyatee,
        "12_mengdinghuangyatee.jpg":mengdinghuangyatee,
        "13_baihaoyinzhentee.jpg":baihaoyinzhentee,
        "14_baimudantee.jpg":baimudantee,
        "15_shoumeitee.jpg":shoumeitee,
        "16_darjeelinwhitetee.jpg":darjeelinwhitetee,
        "17_ceylonwhitetee.jpg":ceylonwhitetee,
        "18_tieguanyintee.jpg":tieguanyintee,
        "19_wuyiyanchatee.jpg":wuyiyanchatee,
        "20_dahongpaotee.jpg":dahongpaotee,
        "21_orientalbeautytee.jpg":orientalbeautytee,
        "22_jinxuantee.jpg":jinxuantee,
        "23_hagebuttentee.jpg":hagebuttentee,
        "24_hibiskustee.jpg":hibiskustee,
        "25_holunderbeerentee.jpg":holunderbeerentee,
        "26_heidelbeerentee.jpg":heidelbeerentee,
        "27_erdbeertee.jpg":erdbeertee,
        "28_kamillentee.jpg":kamillentee,
        "29_pfefferminztee.jpg":pfefferminztee,
        "30_ingwertee.jpg":ingwertee,
        "31_zitronnenmelissentee.jpg":zitronnenmelissentee,
        "32_brennnesseltee.jpeg":brennnesseltee,
        "china.jpg":china,
        "indien.jpg":indien,
        "japan.jpg":japan,
        "kenya.jpg":kenya,
        "kolumbien.jpg":kolumbien,
        "mosambik.jpg":mosambik,
        "nepal.jpg":nepal,
        "ostafrika.jpg":ostafrika,
        "ruanda.jpg":ruanda,
        "srilanka.jpg":srilanka,
        "taiwan.jpg":taiwan,
        "tanzania.jpg":tanzania,
        "vietnam.jpg":vietnam,
        "world.jpg":world
    }
    const {id}=useParams();
    const tee = allTeas.find(tea=>tea.teeid=== Number(id))
    const kartenName=doSearch.anbaugebieteArray.find(anbaugebiet=>anbaugebiet.id===tee.anbaugebieteid[0]).karte;
    return (/* TODO zurück zur start seite? */
        <>
            <div className='container'>
                <h1 className='text-5xl text-white bg-grey-600 text-center font-bold my-6'>{tee.teename[0]}</h1>
                <div className='flex justify-between sm:px-0 sm:justify-center'>
                    {/* -------------------------BILD-01--------------------------------- */}
                    <div class="flex items-center ">
                        <img src={imagesHandler[tee.teeimage[0]]} alt={tee.teename[0]} className='w-80 h-80 mx-4 ml-0 my-4 rounded-lg  ' />
                    </div>
                    {/* -------------------------TEXTFELD-01--------------------------------- */}
                    <div class="flex flex-col justify-end mb-5">
                        <p className=' text-gray-500 my-3'>Aroma:</p>
                        <ul>
                        {tee.aromenname.map(aroma=>{return(
                        <li>{aroma}</li>)})}
                        </ul>
                        <p className=' text-gray-500 my-3'>Koffeingehalt:</p>
                        <ul>
                        {tee.attributename.map(attribute=>{return(
                        <li>{attribute}</li>)})}
                        </ul>
                        <p className=' text-gray-500 my-3'>Teeart:</p>
                        <ul>
                        {tee.tee_artenname.map(teeart=>{return(
                        <li>{teeart}</li>)})}
                        </ul>
                    </div>
                    {/* -------------------------BILD-02-------------------------------- */}
                    <div class="flex items-center">
                        <img src={imagesHandler[kartenName]} alt={tee.anbaugebietename[0]} className='w-96 h-80 ml-300 mx-4 ml-100 my-4 m-30 rounded-lg' />
                    </div>
                </div>
                {/* -------------------------TEXTFELDER-CARDS-------------------------------- */}
                <div className='flex flex-col'>
                    {/* -------------------------TEXTFELD-01--------------------------------- */}
                    <div className="bg-[#4B6C58] card  my-4 text-primary-content">
                        <div className="card-body">
                            <h2 className="card-title">Beschreibung:</h2>
                            <p>{tee.teebeschreibung[0]}</p>
                        </div>
                    </div>
                    {/* -------------------------TEXTFELD-02--------------------------------- */}
                    <div className="my-4 flex align-center justify-center bg-[#649165] card   text-primary-content">
                        <div className="card-body">
                            <h2 className="card-title">Nährstoffe:</h2>
                            <ul>
                                {tee.naerhstoffename.map(naehrstoff=>{return(
                                    <li>{naehrstoff}</li>
                                )})}
                            </ul>
                        </div>
                    </div>
                    {/* -------------------------TEXTFELD-03--------------------------------- */}
                    <div className=" bg-[#8ab66c] card  my-4 text-primary-content row-span-3">
                        <div className="card-body">
                            <h2 className="card-title">Zubereitung:</h2>
                            <p>{tee.teezubereitung[0]}</p>
                        </div>
                    </div>
                    {/* -------------------------TEXTFELD-04--------------------------------- */}
                    <div className=" bg-[#bcd96e] card my-4 text-gray-500">
                        <div className="card-body">
                            <h2 className="card-title">Nebenwirkungen:</h2>
                            <ul>
                                {tee.nebenwirkungenname.map(nebenwirkung=>{return(
                                    <li>{nebenwirkung}</li>
                                )})}
                            </ul>
                        </div>
                    </div>
                    {/* -------------------------TEXTFELD-05--------------------------------- */}
                    <div className="  bg-[#fafa6e] card mt-4 mb-4 text-black">
                        <div className="card-body">
                            <h2 className="card-title">Benefits:</h2>
                            <ul>
                                {tee.benefitsname.map(benefit=>{return(
                                    <li>{benefit}</li>
                                )})}
                            </ul>
                        </div>
                    </div>
                    <Accordion/>
                </div >
            </div>
        </>
    )
};