import './App.css';
import Live from './Pages/Live/Live';
// import Landing from './Pages/Landing/Landing';
// import Navbar from './Common/Navbar/Navbar';
import { AllRoutes } from './Routes/Routes';
import { FooterContainer } from './Common/Footer/Containers/Footer';
import Navbar from './Common/Navbar/Navbar';
function App() {
  return (
    <div className='App'>
      <Navbar/>
      <AllRoutes />
    </div>
  );
}

export default App;
