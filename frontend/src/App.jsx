import { useState } from 'react';
import Dashboard from './pages/Dashboard';
import AdoptPet from './pages/AdoptPet';
import PlacePet from './pages/PlacePet';
import Donation from './pages/Donation';
import Shop from './pages/Shop';
import Services from './pages/Services';
import AboutUs from './pages/AboutUs';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/adopt-a-pet" element={<AdoptPet />} />
        <Route path="/place-a-pet" element={<PlacePet />} />
        <Route path="/donations" element={<Donation />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </Router>
  )
}

export default App
