import React from 'react';
import ReactGA from "react-ga4";

import './styles/App.css';

import logo from './logo.svg';
import underConstruction from './img/under-construction.jpg'

import BackgroundSlider from './components/BackgroundSlider';
import NavBar from './components/NavBar';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Home } from './pages';
import reportWebVitals from './reportWebVitals';

// TODO: move all pages into one import with index.
import { About } from './pages/About';
import { Cultivation } from './pages/Cultivation';
import { Nutrition } from './pages/Nutrition';
import { TreeAvailability } from './pages/TreeAvailability';
import { FurtherInfo } from './pages/FurtherInfo'
import { Products } from './pages/Products';

ReactGA.initialize("G-538DQYHYTK")

function App() {
  return (
    <Router basename='/'>
      <div className="App">
        <NavBar style={{width: '100%vw'}}/>
        <Routes>
          <Route path="/" element={<BackgroundSlider />} />
          <Route path="/about" element={<About />} />
          <Route path="/cultivation" element={<Cultivation />} />
          <Route path="/nutrition" element={<Nutrition />} />
          <Route path="/tree-availability" element={<TreeAvailability />} />
          <Route path="/products" element={<Products />} />
          <Route path="/further-information" element={<FurtherInfo />} />
        </Routes>
      </div>
    </Router>
  );
}

const SendAnalytics = ()=> {
  ReactGA.send({
    hitType: "pageview",
    page: window.location.pathname,
  });
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(SendAnalytics);

export default App;
