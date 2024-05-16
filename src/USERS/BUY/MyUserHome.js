import React from 'react'
import Products from '../../PRODUCTS/Products'
import UserHeading from '../../HEADING/UserHeading'
import Footer from '../../HOME/Footer'
import UserHomeContent from './UserHomeContent'

function MyUserHome() {
  return (
    <div>
        <UserHeading />
        <UserHomeContent />
        <Products />
        <Footer />
    </div>
  )
}

export default MyUserHome