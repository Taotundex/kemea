import React from 'react'
import UserHeading from '../../HEADING/UserHeading'
import Footer from '../../HOME/Footer'
import ExceptionalProperties from './ExceptionalProperties'
import ExceptionalPropertiesProducts from '../../PRODUCTS/ExceptionalPropertiesProducts'

function MyExceptionalProperties() {
  return (
    <div>
        <UserHeading />
        <ExceptionalProperties />
        <ExceptionalPropertiesProducts />
        <Footer />
    </div>
  )
}

export default MyExceptionalProperties