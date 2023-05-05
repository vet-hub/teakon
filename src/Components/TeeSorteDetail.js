import wrldmap from '../img/61752.jpg';
import testbild from '../img/drew-jemmett-qEcWgrTG578-unsplash.jpg'
import Accordion from './accordion.js'


export default function TeeSorteDetails() {
    return (
        <>
            <div className='container'>
                <h1 className='text-5xl text-white bg-grey-600 text-center font-bold my-6'>TEESORTE</h1>


                <div className=' md:flex md:justify-between md:px-0'>
                    {/* -------------------------BILD-01--------------------------------- */}


                    <div class=" ">
                        <img src={testbild} alt='test' className='w-80 h-80 mx-4 ml-0 my-4 rounded-lg  ' />
                    </div>
                    {/* -------------------------TEXTFELD-MITTE--------------------------------- */}
                    {/* -------------------------TEXTFELD-MITTE--------------------------------- */}
                    <div class="">
                        <h3 className=' text-gray-500 my-3 text-xl'>Aroma:</h3>
                        <p className=' text-gray-500 my-3'>LoremseinIpsum--------------------------------------------------------------</p>
                        <h3 className=' text-gray-500 my-3 text-xl'>Koffeingehalt:</h3>
                        <p className=' text-gray-500 my-3'>LoremseinIpsum----------------------------------------------------------</p>
                        <h3 className=' text-gray-500 my-3 text-xl'>Warm/ Kalt:</h3>
                        <p className=' text-gray-500 my-3'>Warm/ Kalt: LoremseinIpsum----------------------------------------------------------</p>
                        <h3 className=' text-gray-500 my-3 text-xl'>Teeart:</h3>
                        <p className=' text-gray-500 my-3'>LoremseinIpsum----------------------------------------------------------</p>
                    </div>
                    {/* -------------------------BILD-02-------------------------------- */}
                    <div class="">
                        <img src={wrldmap} alt='wimage' className='md:w-96 md:h-80 md:ml-300 md:mx-4 md:ml-100 md:my-4 md:m-30 rounded-lg' />
                    </div>

                </div>

                {/* -------------------------TEXTFELDER-CARDS-------------------------------- */}
                {/* -------------------------TEXTFELDER-CARDS-------------------------------- */}
                {/* -------------------------TEXTFELDER-CARDS-------------------------------- */}
                <div className='flex flex-col'>
                    {/* -------------------------TEXTFELD-01--------------------------------- */}
                    <div className="bg-[#4B6C58] card  my-4 text-primary-content">
                        <div className="card-body">
                            <h2 className="card-title">Beschreibung:</h2>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                        </div>
                    </div>
                    {/* -------------------------TEXTFELD-02--------------------------------- */}
                    <div className="my-4 flex align-center justify-center bg-[#649165] card   text-primary-content">
                        <div className="card-body">
                            <h2 className="card-title">Nährstoffe:</h2>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                        </div>
                    </div>
                    {/* -------------------------TEXTFELD-03--------------------------------- */}
                    <div className=" bg-[#8ab66c] card  my-4 text-primary-content row-span-3">
                        <div className="card-body">
                            <h2 className="card-title">Zubereitung:</h2>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                        </div>
                    </div>
                    {/* -------------------------TEXTFELD-04--------------------------------- */}
                    <div className=" bg-[#bcd96e] card my-4 text-gray-500">
                        <div className="card-body">
                            <h2 className="card-title">Nebenwirkungen:</h2>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                        </div>
                    </div>
                    {/* -------------------------TEXTFELD-05--------------------------------- */}
                    <div className="  bg-[#fafa6e] card mt-4 mb-4 text-black">
                        <div className="card-body">
                            <h2 className="card-title">Benefits:</h2>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                        </div>
                    </div>
                    <Accordion/>
                </div >
            </div>


        </>
    )
};