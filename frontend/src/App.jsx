import { useState } from 'react'
import Dashboard from './pages/Dashboard'
import AdoptPet from './pages/AdoptPet'
import PlacePet from './pages/PlacePet'
import Donation from './pages/Donation'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/adopt-a-pet" element={<AdoptPet />} />
        <Route path="/place-a-pet" element={<PlacePet />} />
        <Route path="/donations" element={<Donation />} />
      </Routes>
    </Router>
  )
}

export default App
