import './App.css';

import Landing from './Pages/Landing/Landing';
import { AllRoutes } from './Routes/Routes';
import Navbar from './Common/Navbar/Navbar';
// import index from './Common/Footer/Footer/index';
// import {Footer} from './Common/Footer/Footer/index';
// import { FooterContainer } from './Common/Footer/Containers/Footer';
import Video from './Pages/Video/Video';
import { Corona } from './Pages/Coronavirus/Corona';

function App() {
  return (
    <div className='App'>
      {/* <Landing /> */}
      {/* <Corona /> */}
      <AllRoutes />
      {/* <Navbar />
      <FooterContainer /> */}
      {/* <Video /> */}
    </div>
  );
}

export default App;
