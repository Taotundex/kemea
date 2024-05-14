import React from 'react'
import Products from '../../PRODUCTS/Products'
import UserHeading from '../../HEADING/UserHeading'
import HomeContent from '../../HOME/HomeContent'
import Footer from '../../HOME/Footer'

function MyUserHome() {
  return (
    <div>
        <UserHeading />
        <HomeContent />
        <Products />
        <Footer />
    </div>
  )
}

export default MyUserHome