import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Model from './components/Model';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';
import FooterDown from './components/FooterDown';

const App = () => {
  return (
    < main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <Model /> 
      <Features/>
      <HowItWorks />
      <Footer />
      <FooterDown />
      </main>
      )
}

export default App  