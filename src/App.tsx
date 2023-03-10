import React from 'react';
import './styles/App.css';

import logo from './logo.svg';
import underConstruction from './img/under-construction.jpg'

import BackgroundSlider from './components/BackgroundSlider';
import NavBar from './components/NavBar';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Home } from './pages';
// TODO: move all pages into one import with index.
import { About } from './pages/About';
import { Cultivation } from './pages/Cultivation';
import { Nutrition } from './pages/Nutrition';
import { TreeAvailability } from './pages/TreeAvailability';
import { FurtherInfo } from './pages/FurtherInfo'
import { Products } from './pages/Products';

function App() {
  return (
    <Router>
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

export default App;
