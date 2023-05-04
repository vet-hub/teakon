import wrldmap from '../img/61752.jpg';
import testbild from '../img/drew-jemmett-qEcWgrTG578-unsplash.jpg'


export default function TeeSorteDetails() {
    return (
        <>
            <div className='container'>
                <h1 className='text-5xl text-white bg-grey-600 text-center font-bold my-6'>TEESORTE</h1>


                <div className='flex justify-between sm:px-0 sm:justify-center'>
                    {/* -------------------------BILD-01--------------------------------- */}


                    <div class="flex items-center ">
                        <img src={testbild} alt='test' className='w-80 h-80 mx-4 ml-0 my-4 rounded-lg  ' />
                    </div>

                    {/* -------------------------TEXTFELD-01--------------------------------- */}


                    <div class="flex flex-col justify-end mb-5">
                        <p className=' text-gray-500 my-3'>Aroma:LoremseinIpsum--------------------</p>
                        <p className=' text-gray-500 my-3'>Koffeingehalt: LoremseinIpsum----------------</p>
                        <p className=' text-gray-500 my-3'>Warm/ Kalt: LoremseinIpsum----------------</p>
                        <p className=' text-gray-500 my-3'>Teeart: LoremseinIpsum----------------</p>
                    </div>
                    {/* -------------------------BILD-02-------------------------------- */}
                    <div class="flex items-center sm:justify-center">
                        <img src={wrldmap} alt='wimage' className='w-96 h-80 ml-300 mx-4 ml-100 my-4 m-30 rounded-lg' />
                    </div>

                </div>

                {/* -------------------------TEXTFELDER-CARDS-------------------------------- */}
                {/* -------------------------TEXTFELDER-CARDS-------------------------------- */}
                {/* -------------------------TEXTFELDER-CARDS-------------------------------- */}
                <div className='flex flex-col'>
                    {/* -------------------------TEXTFELD-01--------------------------------- */}
                    <div className="bg-lime-600 card  my-4 text-primary-content">
                        <div className="card-body">
                            <h2 className="card-title">Beschreibung:</h2>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                        </div>
                    </div>
                    {/* -------------------------TEXTFELD-02--------------------------------- */}
                    <div className="my-4 flex align-center justify-center bg-green-600 card   text-primary-content">
                        <div className="card-body">
                            <h2 className="card-title">Nährstoffe:</h2>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                        </div>
                    </div>
                    {/* -------------------------TEXTFELD-03--------------------------------- */}
                    <div className=" bg-emerald-500 card  my-4 text-primary-content row-span-3">
                        <div className="card-body">
                            <h2 className="card-title">Zubereitung:</h2>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                        </div>
                    </div>
                    {/* -------------------------TEXTFELD-04--------------------------------- */}
                    <div className=" bg-teal-500 card my-4 text-primary-content">
                        <div className="card-body">
                            <h2 className="card-title">Nebenwirkungen:</h2>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                        </div>
                    </div>
                    {/* -------------------------TEXTFELD-05--------------------------------- */}
                    <div className="  bg-purple-500 card mt-4 mb-4 text-primary-content">
                        <div className="card-body">
                            <h2 className="card-title">Benefits:</h2>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                        </div>
                    </div>
                </div >
            </div>


        </>
    )
};