import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Property from './Pages/Property/Property'
import PropertyDetails from './Pages/PropertyDetails/PropertyDetails'
import Contact from './Pages/Contact/Contact'
import Blogs from './Pages/Blogs/Blogs';
import './App.css'

function App() {

  return (
    <Router>
      <ScrollToTop /> 
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Property" element={<Property />} />
        <Route path="/PropertyDetails" element={<PropertyDetails />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Blogs" element={<Blogs />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
