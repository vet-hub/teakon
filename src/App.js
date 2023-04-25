import './App.css';
import Infosection from './components/Infosection';
import Footer from './components/Footer'


function App() {
  return (
    <>
      <div className="flex flex-col justify-center  container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">


        <Infosection />


        
        <Footer />

      </div>
    </>

  );
}
export default App;
