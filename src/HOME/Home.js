import React from 'react';
import Heading from '../HEADING/Heading';
import HomeContent from './HomeContent';
import Footer from './Footer';
import Products from '../PRODUCTS/Products';

function Home() {
  return (
    <div>
        <Heading />
        <HomeContent />
        <Products />
        <Footer />
    </div>
  )
}

export default Home