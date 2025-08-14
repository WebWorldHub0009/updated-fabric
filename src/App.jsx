import React from 'react'
import Home from './pages/Home'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import FloatingButtons from './components/FlotingButtons'
import About from './pages/About'
import ContactPage from './pages/Contact'
import Documentation from './pages/Documentation'
import Catalouge from './pages/Catalouge'
import AcousticFabric from './pages/AcousticFabric'
import CinemaFabric from './pages/CinemaFabric'
import GlazeCottonFabric from './pages/GlazeCottonFabric'
import ModularKitchenFabric from './pages/ModularKitchenFabric'
import HomeTheater from './pages/HomeTheater'
import CinemaUpholstery from './pages/CinemaUpholstery'

const App = () => {
  return (
    <BrowserRouter>
    <ScrollToTop/>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<ContactPage />} />
       <Route path="/certificates" element={<Documentation />} />
          <Route path="/catalogue" element={<Catalouge />} />
      <Route path="/services/fabric-for-acoustic" element={<AcousticFabric />} />
      <Route path="/services/fabric-for-cinema" element={<CinemaFabric />} />
      <Route path="/services/glaze-cotton-fabric-for-stage-furnishing" element={<GlazeCottonFabric />} />
      <Route path="/services/fabric-for-modular-kitchen" element={<ModularKitchenFabric />} />
      <Route path="/services/fabric-for-home-theater" element={<HomeTheater />} />
       <Route path="/services/cinema-chair-upholstery" element={<CinemaUpholstery />} />


    </Routes>
    <FloatingButtons/>
    <Footer/>
    </BrowserRouter>
  )
}

export default App