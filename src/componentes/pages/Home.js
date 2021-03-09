import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Contenido from  '../Contenido';
import Cards from '../Cards';
import Footer from '../Footer';

function Home() {
  return (
    <>
      <HeroSection />

      <Contenido />
      <Cards />

      <Footer />
    </>
  );
}

export default Home;
