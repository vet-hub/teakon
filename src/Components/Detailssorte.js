import wrldmap from '../img/61752.jpg';


export default function Detailssorte() {
    return (
        <>
            <div className="flex flex-col flex-wrap justify-center items-center container mx-auto bg-gray-200 rounded-xl shadow border p-4 m-3">
                
                <p className='text-5xl text-gray-900 bg-grey-600 text-center font-bold my-6'>TEESORTE</p>
                <img src={wrldmap} alt='wimage' className='w-50 h-80 my-4 rounded-lg'/>
                <img src={wrldmap} alt='wimage' className='w-50 h-80 my-4 rounded-lg'/>

                <div className='flex flex-col'>
                    <div className=''>
                        <h4 className='text-gray-600'>Beschreibung:</h4>
                        <p className='text-gray-500'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                    </div>

                    <div className=''>
                        <h4 className='text-gray-600'>Nährstoffe:</h4>
                        <p className='text-gray-500'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>                    
                    </div>
                        
                    <div className=''>
                        <h4 className='text-gray-600'>Zubereitung:</h4>
                        <p className='text-gray-500'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                    </div>

                    <div className=''>
                        <h4 className='text-gray-600'>Nebenwirkungen:</h4>
                        <p className='text-gray-500'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                    </div>

                    <div className=''>
                        <h4 className='text-gray-600'>Benefits:</h4>
                        <p className='text-gray-500'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                    </div>
                </div>
                
            </div>
        </>
    )
};