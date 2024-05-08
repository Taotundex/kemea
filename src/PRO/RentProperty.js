import React from 'react'
import './Property.css'
import { HiOutlineBuildingOffice2 } from 'react-icons/hi2'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

function RentProperty() {
  return (
    <div className='rent-property'>
        <div className="container py-5">
            <h5><b>Step 1 - </b>Property’s address</h5>
            <form action="" className='py-5'>
                <div className="row">
                    <div className="col col-lg-6 col-md-6 col-12">
                        <div className="input">
                            <label htmlFor="What type of property ?*">What type of property ?*</label>
                            <select name="propertyType" id="propertyType">
                                <option value="apartment" className='d-flex align-items-center gap-2'>
                                    <HiOutlineBuildingOffice2 />Apartment
                                </option>
                            </select>
                        </div>
                    </div>
                    <div className="col col-lg-6 col-md-6 col-12">
                        <div className="input">
                            <label htmlFor="State of the property*">State of the property*</label>
                            <select name="propertyState" id="propertyState">
                                <option value="renovated">
                                    Renovated
                                </option>
                            </select>
                        </div>
                    </div>
                    <div className="col col-lg-6 col-md-6 col-12">
                        <div className="input">
                            <label htmlFor="What city?*">What city?*</label>
                            <input type="text" name="city" id="city" placeholder='Tel Aviv' />
                        </div>
                    </div>
                    <div className="col col-lg-6 col-md-6 col-12">
                        <div className="inputs">
                            <div className="row">
                                <div className="col col-6">
                                    <div className="input">
                                        <label htmlFor="What city?*">What city?*</label>
                                        <input type="text" name="city" id="city" placeholder='Bar Ilan' />
                                    </div>
                                </div>
                                <div className="col col-6">
                                    <div className="input">
                                        <label htmlFor="What Number*">What Number*</label>
                                        <input type="text" name="number" id="number" placeholder='55' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col col-lg-6 col-md-6 col-12">
                        <div className="input">
                            <label htmlFor="How many floors*">How many floors*</label>
                            <div className="inputs d-flex align-items-center gap-3">
                                <input type="text" name="floor" id="floor" placeholder='1' />
                                on
                                <input type="text" name="ouOf" id="ouOf" placeholder='12' />
                            </div>
                            <label htmlFor="ground floor" className='gap-1'>
                                <input type="checkbox" name="groundfloor" id="groundfloor" checked />
                                Ground floor
                            </label>
                        </div>
                    </div>
                    <div className="col col-lg-6 col-md-6 col-12">
                        <div className="input">
                            <label htmlFor="Area*">Area*</label>
                            <select name="area" id="area">
                                <option value="south">
                                    South Est
                                </option>
                            </select>
                        </div>
                    </div>
                </div>
            </form>
            <div className="btns d-flex align-items-center justify-content-between">
                <button className="bg-transparent gap-1 d-flex align-items-center justify-content-center">
                    <IoIosArrowBack />Back
                </button>
                <button className="gap-1 d-flex align-items-center justify-content-center">
                    Next<IoIosArrowForward />
                </button>
            </div>
        </div>
    </div>
  )
}

export default RentProperty