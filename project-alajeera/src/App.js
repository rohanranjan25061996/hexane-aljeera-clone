import './App.css';
import { FooterContainer } from './Common/Footer/Containers/Footer';
import Navbar from './Common/Navbar/Navbar';
import {BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Navbar />
      <FooterContainer/>
    </Router>  
  );
}

export default App;
