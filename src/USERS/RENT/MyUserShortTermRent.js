import React from 'react'
import UserHeading from '../../HEADING/UserHeading'
import ShortTermRent from '../../HOME/ShortTermRent'
import ShortTermProducts from '../../PRODUCTS/ShortTermProducts';

function MyUserShortTermRent() {
  return (
    <div>
        <UserHeading />
        <ShortTermRent />
        <ShortTermProducts />
    </div>
  )
}

export default MyUserShortTermRent