import React from 'react'
import UserHeading from '../../HEADING/UserHeading'
import Footer from '../../HOME/Footer'
import UserRentExceptionalProperties from './UserRentExceptionalProperties'
import ExceptionalPropertiesProducts from '../../PRODUCTS/ExceptionalPropertiesProducts'

function MyUserRentExceptionalProperties() {
  return (
    <div>
        <UserHeading />
        <UserRentExceptionalProperties />
        <ExceptionalPropertiesProducts />
        <Footer />
    </div>
  )
}

export default MyUserRentExceptionalProperties