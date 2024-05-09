import React, { useRef, useState } from 'react'
import './Property.css'
import disable from '../images/disable.svg'
import elevator from '../images/elevator.svg'
import renovated from '../images/renovated.svg'
import airconditioner from '../images/airconditioner.svg'
import furniture from '../images/furniture.svg'
import mamad from '../images/mamad.svg'
import bars from '../images/bars.svg'
import unit from '../images/unit.svg'
import mazgan from '../images/mazgan.svg'
import heater from '../images/heater.svg'
import kitchen from '../images/kitchen.svg'
import storage from '../images/storage.svg'
import trash from '../images/trash.svg'
import add from '../images/add.svg'
import { HiOutlineBuildingOffice2 } from 'react-icons/hi2'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';
import ReactCountryFlag from 'react-country-flag'
// import '../ACCOUNT/Account.css'

function SellProperty() {
    const [countryCode, setCountryCode] = useState('');

  const handleCountryChange = (event) => {
    setCountryCode(event.target.value);
  };

    const swiperRef = useRef(null);

    const handleNext = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
        }
    };

    const handlePrev = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev();
        }
    };
  return (
    <div className='rent-property'>
        <div className="container py-5">
            <Swiper ref={swiperRef} pagination={{ type: 'progressbar' }} className="mySwiper">
                <SwiperSlide>
                    <h5><b>Step 1 - </b>Property’s address</h5>
                    <form action="" className='py-5'>
                        <div className="row gx-5">
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
                    <div className="btns d-flex align-items-center justify-content-between w-100 mt-4">
                        <Link to='/pro-publish' className='text-decoration-none'>
                            <button className="bg-transparent gap-1 d-flex align-items-center justify-content-center px-4">
                                <IoIosArrowBack />Back
                            </button>
                        </Link>
                        <button style={{padding: '0 75px'}} className="gap-1 d-flex align-items-center justify-content-center" onClick={handleNext}>
                            Next<IoIosArrowForward />
                        </button>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <h5><b>Step 2 - </b>About the property</h5>
                    <form action="" className='py-5'>
                        <div className="row gx-5">
                            <div className="col col-lg-5 col-md-6 col-12">
                                <div className="input">
                                    <label htmlFor="Number of rooms*">Number of rooms*</label>
                                    <select name="roomsNumber" id="roomsNumber">
                                        <option value="0">
                                            0
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <div className="col col-lg-7 col-md-6 col-12">
                                <div className="inputs">
                                    <div className="row g-5">
                                        <div className="col col-6">
                                            <div className="input">
                                                <label htmlFor="Number of balcony*">Number of balcony*</label>
                                                <div className="d-flex align-items-center balc-btn">
                                                    <button className='rounded-start-3'>None</button>
                                                    <button className='active'>1</button>
                                                    <button>2</button>
                                                    <button className='rounded-end-3'>3+</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col col-6">
                                            <div className="input">
                                                <label htmlFor="Ground/covered car park*">Ground/covered car park*</label>
                                                <div className="d-flex align-items-center balc-btn">
                                                    <button className='rounded-start-3'>None</button>
                                                    <button className='active'>1</button>
                                                    <button>2</button>
                                                    <button className='rounded-end-3'>3+</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col col-lg-5 col-md-6 col-12">
                                <div className="input">
                                    <label htmlFor="Description of the property*">Description of the property*</label>
                                    <p className="d-flex align-itemms-center justify-content-between">
                                        <small style={{fontSize: '14px', color: '#1D234EB2'}}>Did you know: an ad without a description hardly gets any calls</small>
                                        0/400
                                    </p>
                                    <textarea name="description" id="description" placeholder='Here you can describe your property'></textarea>
                                </div>
                            </div>
                            <div className="col col-lg-7 col-md-6 col-12">
                                <div className="input">
                                    <label htmlFor="More about the property*">More about the property*</label>
                                    <div className="row g-4">
                                        <div className="col col-lg-4 col-md-6 col-12">
                                            <div className="bt">
                                                <button className="d-flex gap-3 align-items-center px-4">
                                                    <img src={disable} alt="" />
                                                    Access for disabled
                                                </button>
                                            </div>
                                        </div>
                                        <div className="col col-lg-4 col-md-6 col-12">
                                            <div className="bt">
                                                <button className="d-flex gap-3 align-items-center px-4">
                                                    <img src={elevator} alt="" />
                                                    Elevators
                                                </button>
                                            </div>
                                        </div>
                                        <div className="col col-lg-4 col-md-6 col-12">
                                            <div className="bt">
                                                <button className="d-flex gap-3 align-items-center px-4">
                                                    <img src={renovated} alt="" />
                                                    Renovated
                                                </button>
                                            </div>
                                        </div>
                                        <div className="col col-lg-4 col-md-6 col-12">
                                            <div className="bt">
                                                <button className="d-flex gap-3 align-items-center px-4">
                                                    <img src={airconditioner} alt="" />
                                                    Air conditioner
                                                </button>
                                            </div>
                                        </div>
                                        <div className="col col-lg-4 col-md-6 col-12">
                                            <div className="bt">
                                                <button className="d-flex gap-3 align-items-center px-4">
                                                    <img src={furniture} alt="" />
                                                    Furnitures included
                                                </button>
                                            </div>
                                        </div>
                                        <div className="col col-lg-4 col-md-6 col-12">
                                            <div className="bt">
                                                <button className="d-flex gap-3 align-items-center px-4">
                                                    <img src={mamad} alt="" />
                                                    Mamad
                                                </button>
                                            </div>
                                        </div>
                                        <div className="col col-lg-4 col-md-6 col-12">
                                            <div className="bt">
                                                <button className="d-flex gap-3 align-items-center px-4">
                                                    <img src={bars} alt="" />
                                                    Bars
                                                </button>
                                            </div>
                                        </div>
                                        <div className="col col-lg-4 col-md-6 col-12">
                                            <div className="bt">
                                                <button className="d-flex gap-3 align-items-center px-4">
                                                    <img src={unit} alt="" />
                                                    Unit
                                                </button>
                                            </div>
                                        </div>
                                        <div className="col col-lg-4 col-md-6 col-12">
                                            <div className="bt">
                                                <button className="d-flex gap-3 align-items-center px-4">
                                                    <img src={mazgan} alt="" />
                                                    Personal Mazgan
                                                </button>
                                            </div>
                                        </div>
                                        <div className="col col-lg-4 col-md-6 col-12">
                                            <div className="bt">
                                                <button className="d-flex gap-3 align-items-center px-4">
                                                    <img src={heater} alt="" />
                                                    Water heater
                                                </button>
                                            </div>
                                        </div>
                                        <div className="col col-lg-4 col-md-6 col-12">
                                            <div className="bt">
                                                <button className="d-flex gap-3 align-items-center px-4">
                                                    <img src={kitchen} alt="" />
                                                    Kosher kitchen
                                                </button>
                                            </div>
                                        </div>
                                        <div className="col col-lg-4 col-md-6 col-12">
                                            <div className="bt">
                                                <button className="d-flex gap-3 align-items-center px-4">
                                                    <img src={storage} alt="" />
                                                    Storage
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div className="btns d-flex align-items-center justify-content-between w-100 mt-4">
                        {/* <Link to='/pro-publish' className='text-decoration-none'> */}
                            <button className="bg-transparent gap-1 d-flex align-items-center justify-content-center px-4" onClick={handlePrev}>
                                <IoIosArrowBack />Back
                            </button>
                        {/* </Link> */}
                        <button style={{padding: '0 75px'}} className="gap-1 d-flex align-items-center justify-content-center" onClick={handleNext}>
                            Next<IoIosArrowForward />
                        </button>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <h5><b>Step 3 - </b>Payments, dates and more</h5>
                    <form action="" className='py-5'>
                        <div className="row gx-5">
                            <div className="col col-lg-6 col-md-6 col-12">
                                <div className="inputs">
                                    <div className="row g-5">
                                        <div className="col col-6">
                                            <div className="input">
                                                <label htmlFor="Surface build*">Surface build*</label>
                                                <div className="d-flex together">
                                                    <input type="text" name="surfacebuild" id="surfacebuild" placeholder='000' />
                                                    <p>m<sup>2</sup></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col col-6">
                                            <div className="input">
                                                <label htmlFor="Garden surface">Garden surface</label>
                                                <div className="d-flex together">
                                                    <input type="text" name="surfacebuild" id="surfacebuild" placeholder='000' />
                                                    <p>m<sup>2</sup></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col col-lg-6 col-md-6 col-12">
                                {/* <div className="inputs"> */}
                                    <div className="input">
                                        <label htmlFor="Total Surface*">Total Surface*</label>
                                        <div className="d-flex together">
                                            <input type="text" name="surfacebuild" id="surfacebuild" placeholder='000' />
                                            <p>m<sup>2</sup></p>
                                        </div>
                                    </div>
                                {/* </div> */}
                            </div>
                            <div className="col col-lg-6 col-md-6 col-12">
                                <div className="input">
                                    <label htmlFor="Number of payments*">Number of payments*</label>
                                    <select name="payments" id="payments">
                                        <option value="0">0</option>
                                        <option value="1">1</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col col-lg-6 col-md-6 col-12">
                                <div className="input">
                                    <label htmlFor="Price*">Price*</label>
                                    <div className="d-flex together">
                                        <input type="text" name="price" id="price" placeholder='000' />
                                        <p>NIS</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col col-lg-6 col-md-6 col-12">
                                <div className="inputs">
                                    <div className="row g-5">
                                        <div className="col col-6">
                                            <div className="input">
                                                <label htmlFor="Arnona for 2 months">Arnona for 2 months</label>
                                                <div className="d-flex together">
                                                    <input type="text" name="arnona" id="arnona" placeholder='000' />
                                                    <p>NIS</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col col-6">
                                            <div className="input">
                                                <label htmlFor="House Vaad">House Vaad</label>
                                                <div className="d-flex together">
                                                    <input type="text" name="vaad" id="vaad" placeholder='000' />
                                                    <p>NIS</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col col-lg-6 col-md-6 col-12">
                                <div className="input">
                                    <label htmlFor="Entry date*">Entry date*</label>
                                    <input type="date" name="entrydate" id="entrydate" />
                                    <div className="d-flex align-items-center gap-5">
                                        <label className='d-flex gap-1 date-label' htmlFor="immediately">
                                            <input checked type="checkbox" name="immediately" id="immediately" />
                                            Immediately
                                        </label>
                                        <label className='d-flex gap-1 date-label' htmlFor="Flexible">
                                            <input checked type="checkbox" name="Flexible" id="Flexible" />
                                            Flexible
                                        </label>
                                        <label className='d-flex gap-1 date-label' htmlFor="Long term">
                                            <input checked type="checkbox" name="Long-term" id="Long-term" />
                                            Long term
                                        </label>
                                    </div>
                                </div>
                            </div>                            
                        </div>
                    </form>
                    <div className="btns d-flex align-items-center justify-content-between w-100 mt-4">
                        {/* <Link to='/pro-publish' className='text-decoration-none'> */}
                            <button className="bg-transparent gap-1 d-flex align-items-center justify-content-center px-4" onClick={handlePrev}>
                                <IoIosArrowBack />Back
                            </button>
                        {/* </Link> */}
                        <button style={{padding: '0 75px'}} className="gap-1 d-flex align-items-center justify-content-center" onClick={handleNext}>
                            Next<IoIosArrowForward />
                        </button>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <h5><b>Step 4 - </b>Photos and videos</h5>
                    <p className="mt-5 p-tag">You have nothing to worry about, in the gallery the image will appear in its original size*   0/10</p>
                    <form action="">
                        <div className="file my-4">
                            <input type="file" name="file-upload" id="file-upload" />
                            <div className="file-top">
                                <img src={trash}  className='trash' alt="" />
                                <div className="inner">
                                    <img src={add} alt="" />
                                    <small>Drag here images and videos</small>
                                </div>
                            </div>
                        </div>
                        <p className='p-tag mt-3'>If you have a link for the Matterport 3D view, you can attach it to showcase the 3D view in the property gallery</p>
                        <input type="text" name="link" id="link" value='https://' />
                    </form>
                    <div className="btns d-flex align-items-center justify-content-between w-100" style={{marginTop: '75px'}}>
                        {/* <Link to='/pro-publish' className='text-decoration-none'> */}
                            <button className="bg-transparent gap-1 d-flex align-items-center justify-content-center px-4" onClick={handlePrev}>
                                <IoIosArrowBack />Back
                            </button>
                        {/* </Link> */}
                        <button style={{padding: '0 75px'}} className="gap-1 d-flex align-items-center justify-content-center" onClick={handleNext}>
                            Next<IoIosArrowForward />
                        </button>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <h5><b>Step 5 - </b>Contact Information</h5>
                    <form action="">
                        <div className="row gx-5">
                            <div className="col col-lg-6 col-md-6 col-12">
                                <div className="input">
                                    <label htmlFor="Your name?*">Your name?*</label>
                                    <input type="text" name="name" id="name" placeholder='David' style={{borderRadius: '15px !important'}} />
                                    <div className="pt-4 d-flex align-items-center gap-2">
                                        <img src={add} width='20px' height='20px' alt="" />Add another contact
                                    </div>
                                </div>
                            </div>
                            <div className="col col-lg-6 col-md-6 col-12">
                                <div className="input">
                                    <label htmlFor="At what number can those interested reach you?*">At what number can those interested reach you?*</label>
                                    <div className="d-flex align-items-center together">
                                        <div className="d-flex align-items-center myflag">
                                            <div className="flag">
                                                {countryCode && (
                                                    <div>
                                                    <ReactCountryFlag countryCode={countryCode} size="50px" />
                                                    </div>
                                                )}
                                            </div>
                                            <select onChange={handleCountryChange}>
                                                <option > ----- </option>
                                                <option value="US">+1</option>
                                                <option value="CA">+1</option>
                                                <option value="GB">+44</option>
                                            </select>
                                        </div>
                                        <input type="tel" name="number" id="number" />
                                    </div>
                                </div>
                            </div>
                            <div className="col col-lg-6 col-md-6 col-12">
                                <div className="input">
                                    <label htmlFor="confirm">
                                        <input type="checkbox" name="confirm" id="confirm" checked />
                                        I confirm the receipt of advertising mail related to the ad I published on the Kemea website
                                    </label>
                                </div>
                            </div>
                            <div className="col col-lg-6 col-md-6 col-12">
                                <div className="input">
                                    <label htmlFor="terms">
                                        <input type="checkbox" name="terms" id="terms" checked />
                                        I have read and agreed the <Link className='text-decoration-none' to='/terms-and-conditions'> Terms & Conditions</Link>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="input">
                            <label htmlFor="update">
                                <input type="checkbox" name="update" id="update" />
                                I would love to receive updates, publications, suggestions or tips regarding the Kemea bulletin board
                            </label>
                        </div>
                    </form>
                    <div className="btns d-flex align-items-center justify-content-between w-100" style={{marginTop: '175px'}}>
                        {/* <Link to='/pro-publish' className='text-decoration-none'> */}
                            <button className="bg-transparent gap-1 d-flex align-items-center justify-content-center px-4" onClick={handlePrev}>
                                <IoIosArrowBack />Back
                            </button>
                        {/* </Link> */}
                        <button style={{padding: '0 75px'}} className="gap-1 d-flex align-items-center border-0 justify-content-center bg-primary">
                            Send<IoIosArrowForward />
                        </button>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    </div>
  )
}

export default SellProperty