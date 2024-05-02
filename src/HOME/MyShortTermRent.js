import React from 'react';
import Heading from '../HEADING/Heading';
import Footer from './Footer';
import ShortTermRent from './ShortTermRent';
import ShortTermProducts from '../PRODUCTS/ShortTermProducts';

function MyShortTermRent() {
  return (
    <div>
        <Heading />
        <ShortTermRent />
        <ShortTermProducts />
        <Footer />
    </div>
  )
}

export default MyShortTermRent