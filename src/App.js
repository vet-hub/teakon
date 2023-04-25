import './App.css';
import Infosection from './components/Infosection';
import Footer from './components/Footer'


function App() {
  return (
    <>
      <div className="flex flex-col justify-center  container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
        <p className="text-3xl text-gray-700 font-bold mb-2 text-center">
          Welcome!
        </p>
        <p className="text-gray-500 text-lg text-center">
          React and Tailwind CSS in action
        </p>

        <Infosection />
        <Footer />

      </div>
    </>

  );
}
export default App;
