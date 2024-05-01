import React from 'react';
import Heading from '../HEADING/Heading';
import Footer from './Footer';
import NewProject from './NewProject';
import NewProducts from '../PRODUCTS/NewProducts';

function MyNewProject() {
  return (
    <div>
        <Heading />
        <NewProject />
        <NewProducts />
        <Footer />
    </div>
  )
}

export default MyNewProject