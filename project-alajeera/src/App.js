import './App.css';
import { AllRoutes } from './Routes/Routes';
import { FooterContainer } from './Common/Footer/Containers/Footer';
import Navbar from './Common/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
      <FooterContainer/>
    </div>
  );
}

export default App;
