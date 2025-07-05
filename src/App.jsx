import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Property from './Pages/Property/Property'
import './App.css'

function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Property" element={<Property />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
