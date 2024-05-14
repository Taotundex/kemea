import React from 'react'
import Study from './Study'
import StudyProducts from '../../PRODUCTS/StudyProducts'
import UserHeading from '../../HEADING/UserHeading'
import Footer from '../../HOME/Footer'

function MyStudy() {
  return (
    <div>
        <UserHeading />
        <Study />
        <StudyProducts />
        <Footer />
    </div>
  )
}

export default MyStudy