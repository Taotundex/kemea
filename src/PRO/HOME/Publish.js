import React from 'react'
import './Publish.css'
import { PiHouseLine } from 'react-icons/pi'
import { Link } from 'react-router-dom'
import { HiOutlineBuildingOffice2 } from 'react-icons/hi2'
import { IoIosArrowBack } from 'react-icons/io'

function Publish() {
  return (
    <div className='publish'>
        <div className="container">
            <div className="details text-center m-auto">
                <h1>It’s easy to publish an ad <br />on Kemea</h1>
                <p>Fill a form with some quick questions, <br />we will check it and then publish it !</p>
                <div className="d-flex align-items-center justify-content-center gap-5">
                    <Link to='/sell-property' className="property d-flex flex-column gap-2">
                        <PiHouseLine className='fs-4 m-auto' />
                        I want to sell a property 
                    </Link>
                    <Link to='/rent-property' className="property d-flex flex-column gap-2">
                        <HiOutlineBuildingOffice2 className='fs-4 m-auto' />
                        I want to rent a property 
                    </Link>
                </div>
            </div>
            <Link to='/pro/home' className="back d-flex align-items-center gap-1 text-dark">
                <IoIosArrowBack />Back
            </Link>
        </div>
    </div>
  )
}

export default Publish