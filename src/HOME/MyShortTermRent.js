import React from 'react';
import Heading from '../HEADING/Heading';
import Footer from './Footer';
import ShortTermRent from './ShortTermRent';
import NewProducts from '../PRODUCTS/NewProducts';

function MyShortTermRent() {
  return (
    <div>
        <Heading />
        <ShortTermRent />
        <NewProducts />
        <Footer />
    </div>
  )
}

export default MyShortTermRent