import wrldmap from '../img/61752.jpg';

export default function Infosection() {
    return (
        <>
            <div className="flex flex-col justify-center items-center container mx-auto bg-gray-200 rounded-xl shadow border p-4 m-3">
                <p className="text-gray-500 text-lg text-center pt-3">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>

                <img src={wrldmap} alt='wimage' className='w-full h-80 my-4 rounded-lg' />

                <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-3 px-7 mt-4 border border-blue-500 hover:border-transparent rounded-full ">
                    zeige alle Tees
                </button>
            </div>
        </>
    )
};