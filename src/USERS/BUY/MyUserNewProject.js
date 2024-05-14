import React from 'react'
import UserHeading from '../../HEADING/UserHeading'
import Footer from '../../HOME/Footer'
import NewProject from '../../HOME/NewProject'
import NewProducts from '../../PRODUCTS/NewProducts'

function MyUserNewProject() {
  return (
    <div>
        <UserHeading />
        <NewProject />
        <NewProducts />
        <Footer />
    </div>
  )
}

export default MyUserNewProject