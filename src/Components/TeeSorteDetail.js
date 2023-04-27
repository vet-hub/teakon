import wrldmap from '../img/61752.jpg';


export default function TeeSorteDetails() {
    return (
        <>
            <div class=" ">

                <div class="container m-auto grid grid-cols-12 grid-rows-8 gap-5 bg-gray-200 rounded-xl shadow border">

                    <div class="tile col-span-full">
                        <h1 className='tile-marker text-5xl text-gray-900 bg-grey-600 text-center font-bold my-6'>TEESORTE</h1>
                    </div>

                    <div class="tile col-start-2 col-span-3 flex items-center">
                        <img src={wrldmap} alt='wimage' className='w-80 h-80 mx-4 ml-0 my-4 rounded-lg ' />
                    </div>

                    <div class="tile col-span-3 col-start-5 flex flex-col justify-end mx-4 my-5">
                        <p className=' text-gray-500'>Aroma:</p>
                        <p className=' text-gray-500'>Koffeingehalt:</p>
                        <p className=' text-gray-500'>Warm/ Kalt:</p>
                        <p className=' text-gray-500'>Teeart:</p>
                    </div>

                    <div class="tile col-span-5 col-start-8 flex items-center">
                        <img src={wrldmap} alt='wimage' className='w-full h-80 ml-300 mx-4 ml-0 my-4 m-30 rounded-lg' />
                    </div>

                    {/* TEXTFELDER */}

                    <div class="tile col-start-4 col-span-2 row-start-5 bg-lime-600">
                        <h4 className='text-gray-600 text-xl'>Beschreibung:</h4>
                        <p className='text-gray-500'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                    </div>

                    <div class="tile col-start-6 col-span-2 row-start-5 bg-green-600">
                        <h4 className='text-gray-600 text-xl'>Nährstoffe:</h4>
                        <p className='text-gray-500'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                    </div>

                    <div class="tile col-start-8 col-span-2 row-start-5 bg-emerald-500">
                        <h4 className='text-gray-600 text-xl'>Zubereitung:</h4>
                        <p className='text-gray-500'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                    </div>

                    <div class="tile col-start-5 col-span-2 row-start-7 bg-teal-500">
                        <h4 className='text-gray-600 text-xl'>Nebenwirkungen:</h4>
                        <p className='text-gray-500'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                    </div>

                    <div class="tile col-start-7 col-span-2 row-start-7 bg-purple-500">
                        <h4 className='text-gray-600 text-xl'>Benefits:</h4>
                        <p className='text-gray-500'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                    </div>

                </div>
            </div >
        </>
    )
};