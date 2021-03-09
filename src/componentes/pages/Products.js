import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import Footer from '../Footer';
import Contenido from '../Contenido';

export default function Products() {
  return (
    <>
      <h1 className='products'>PRODUCTOS</h1>;
      <Cards />
      <Contenido />
      <Footer />
    </>
  );
  
}
