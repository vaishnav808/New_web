import React ,{useState,useEffect} from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import Slides from './Slides/Slides';
import Footer from './Footer/Footer';
import Adas_Elements from './Adas_Architecture/Adas_Archi';
import Automatic_Emergency_Steering from './Adas_Features/Automatic_Emergency_Steering';
import All_Features from './Adas_Features/All_Features';
import Adas_Archi from './Adas_Architecture/Adas_Archi';
import About_Us from './About_us/About_us';
import All_Elements from './Adas_Elements/All_Elements';
import Urban_chauffer from './Adas_Features/Urban_chauffer'
import Highway_Driving_Assist from './Adas_Features/Highway_Driving_Assist';
import Lane_Centering_Assist from './Adas_Features/Lane_Centering_Assist';



function App() {
  const [width, setWindowWidth] = useState(0);

  // componentDidMount...runs only once
  useEffect( () => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, [])

  const updateDimensions = () => {
    const width = window.innerWidth;
    setWindowWidth(width);
  };

  const responsive = {
    showTopNavMenu: width > 1023
  }
  
  return (
    <div className="App">
    

      <BrowserRouter>
        {/*HomePage*/}
        <Route exact={true} path='/'>
          <Navbar />
          <Slides />
          <Home />
          <Footer />
        </Route>

        {/*Adas Architecture page*/}
        <Route exact={true} path='/adas_archi'>
          <Navbar />
          <Adas_Archi />
          <Footer />
        </Route>

        {/*Adas Features page*/}
        <Route exact={true} path='/all_features'>
          <Navbar />
          <All_Features />
          <Footer />
        </Route>

        {/*Adas Elements Page*/}
        <Route exact={true} path='/all_elements'>
          <Navbar />
         <All_Elements/>
          <Footer />
        </Route>

        {/*Automatic Emergency Steering*/}
        <Route exact={true} path='/automatic_emergency_steering'>
          <Navbar />
         <Automatic_Emergency_Steering/>
          <Footer />
        </Route>

        {/*Highway Driving Assist*/}
        <Route exact={true} path='/highway_driving_assist'>
          <Navbar />
         <Highway_Driving_Assist/>
          <Footer />
        </Route>

        {/*Lane Centering Assist*/}
        <Route exact={true} path='/lane_centering_assist'>
          <Navbar />
         <Lane_Centering_Assist/>
          <Footer />
        </Route>

        {/*Urban Chauffer*/}
        <Route exact={true} path='/Uraban_chauffer'>
          <Navbar />
         <Urban_chauffer/>
          <Footer />
        </Route>
        
        {/*About Us page*/}
        <Route exact={true} path='/about_us'>
          <Navbar />
          <About_Us />
          <Footer />
        </Route>

      </BrowserRouter>


    </div>
  );
}

export default App;
