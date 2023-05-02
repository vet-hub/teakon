import wrldmap from '../img/61752.jpg';


export default function TeeSorteDetails() {
    return (
        <>
            <div className='container'>
                <div class="container m-auto grid grid-cols-12 grid-rows-12  gap-x-5 gap-y-5  bg-gray-200 rounded-xl shadow border">

                    <div class="tile col-span-full">
                        <h1 className='tile-marker text-5xl text-gray-900 bg-grey-600 text-center font-bold my-6'>TEESORTE</h1>
                    </div>
                    {/* -------------------------BILD--------------------------------- */}


                    <div class="tile col-start-3 row-start-2 col-span-3  flex items-center">
                        <img src={wrldmap} alt='wimage' className='w-80 h-80 mx-4 ml-0 my-4 rounded-lg ' />
                    </div>

                    {/* -------------------------TEXTFELDER--------------------------------- */}


                    <div class="tile col-span-3 col-start-6 row-start-2 flex flex-col justify-end mb-5">
                        <p className=' text-gray-500'>Aroma:</p>
                        <p className=' text-gray-500'>Koffeingehalt:</p>
                        <p className=' text-gray-500'>Warm/ Kalt:</p>
                        <p className=' text-gray-500'>Teeart:</p>
                    </div>
                    {/* -------------------------BILD--------------------------------- */}
                    <div class="tile col-span-5 col-start-9 flex items-center">
                        <img src={wrldmap} alt='wimage' className='w-96 h-80 ml-300 mx-4 ml-0 my-4 m-30 rounded-lg' />
                    </div>

                    {/* -------------------------TEXTFELDER--------------------------------- */}
                    {/* -------------------------TEXTFELDER--------------------------------- */}

                    {/* -------------------------TEXTFELD1--------------------------------- */}
                    <div className="tile col-start-3 row-start-5 col-span-3 bg-lime-600 card   text-primary-content">
                        <div className="card-body">
                            <h2 className="card-title">Beschreibung:</h2>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                        </div>
                    </div>
                    {/* -------------------------TEXTFELD2--------------------------------- */}
                    <div className="tile col-start-6 col-span-3 row-start-5 flex align-center justify-center bg-green-600 card   text-primary-content">
                        <div className="card-body">
                            <h2 className="card-title">Nährstoffe:</h2>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                        </div>
                    </div>
                    {/* -------------------------TEXTFELD3--------------------------------- */}
                    <div className="tile col-start-9 col-span-3 row-start-5 bg-emerald-500 card   text-primary-content row-span-3">
                        <div className="card-body">
                            <h2 className="card-title">Zubereitung:</h2>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                        </div>
                    </div>
                    {/* -------------------------TEXTFELD4--------------------------------- */}
                    <div className="tile col-start-3 col-span-3 row-start-7 bg-teal-500 card  text-primary-content">
                        <div className="card-body">
                            <h2 className="card-title">Nebenwirkungen:</h2>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                        </div>
                    </div>
                    {/* -------------------------TEXTFELD5--------------------------------- */}
                    <div className="tile col-start-6 col-span-3 row-start-7  bg-purple-500 card  text-primary-content">
                        <div className="card-body">
                            <h2 className="card-title">Benefits:</h2>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                        </div>
                    </div>

                </div>
            </div >
        </>
    )
};