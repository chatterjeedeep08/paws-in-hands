import { useState } from 'react'
import Dashboard from './pages/Dashboard'
import AdoptPet from './pages/AdoptPet'
import PlacePet from './pages/PlacePet'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Dashboard />} />
        <Route path="/adopt-a-pet" element={<AdoptPet />} />
        <Route path="/place-a-pet" element={<PlacePet />} />
      </Routes>
    </Router>
  )
}

export default App
