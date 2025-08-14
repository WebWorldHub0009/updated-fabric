import React from 'react'
import Navbar from "../components/Navbar"
import HeroSection from '../components/Hero'
import AboutSection from '../components/About'
import StatsSection from '../components/StatsCounter'
import AmbulanceServices from '../components/ServiceSetion'
import WhyChooseUs from '../components/WhyChooseUs'
import ProductSlider from '../components/MostWantedProduct'
import HowItWorks from '../components/HowItWork'
import WhoWeAre from '../components/WhoWeAre'

const Home = () => {
  return (
    <>
   <HeroSection/>
   <AboutSection/>
  <StatsSection/>
  <AmbulanceServices/>
  <WhyChooseUs/>
  <ProductSlider/>
  <HowItWorks/>
  <WhoWeAre/>
    </>
  )
}

export default Home