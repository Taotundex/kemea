import React from 'react'
import UserHeading from '../../HEADING/UserHeading'
import Products from '../../PRODUCTS/Products'
import Footer from '../../HOME/Footer'
import UserRentHome from './UserRentHome'

function MyUserRentHome() {
  return (
    <div>
        <UserHeading />
        <UserRentHome />
        <Products />
        <Footer />      
    </div>
  )
}

export default MyUserRentHome