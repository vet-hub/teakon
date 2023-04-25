import './App.css';
import Infosection from './components/Infosection';



function App() {
  return (
    <>
      <div className="flex flex-col justify-center items-center container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
        <p className="text-3xl text-gray-700 font-bold mb-5">
          Welcome!
        </p>
        <p className="text-gray-500 text-lg">
          React and Tailwind CSS in action
        </p>

        <Infosection />
 
      </div>
    </>

  );
}
export default App;
