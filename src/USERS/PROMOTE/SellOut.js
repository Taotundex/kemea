import React, { useRef, useState } from 'react';
import './Promote.css';
import { IoIosArrowBack, IoIosArrowForward, IoMdAlarm } from 'react-icons/io';
import SelloutImg from '../../images/sell-out-img.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import ReactCountryFlag from 'react-country-flag';

function SellOut() {
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
        <div className='promote py-5'>
            <div className="container">
                <Swiper ref={swiperRef} pagination={{ type: 'progressbar' }} className="mySwiper">
                    <SwiperSlide>
                        <div className="row align-items-center g-5">
                            <div className="col col-lg-7 col-md-6 col-12">
                                <div className="text">
                                    <h1>Are you owners and want to sell your home?</h1>
                                    <p>Answer a form with some quick questions and we will get back to you in a brief delay</p>
                                    <button onClick={handleNext} className='mb-3 d-flex align-items-center justify-content-center'>
                                        Get Started <IoIosArrowForward className='ms-2' />
                                    </button><br />
                                    <small><IoMdAlarm /> takes lass than a minute</small>
                                </div>
                            </div>
                            <div className="col col-lg-5 col-md-6 col-12">
                                <div className="img">
                                    <img src={SelloutImg} width='100%' alt="" />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="row align-items-center g-5">
                            <div className="col col-lg-7 col-md-6 col-12">
                                <div className="text">
                                    <form action="">
                                        <div className="row gx-lg-5 gx-md-4 gx-3">
                                            <div className="col col-6">
                                                <div className="input">
                                                    <label htmlFor="Where is it located ?*">Where is it located ?*</label>
                                                    <input type="text" name="location" id="location" placeholder='Tel aviv' />
                                                </div>
                                            </div>
                                            <div className="col col-6">
                                                <div className="input">
                                                    <label htmlFor="What type of property is it?*">What type of property is it?*</label>
                                                    <input type="text" name="type" id="type" placeholder='Tel aviv' />
                                                </div>
                                            </div>
                                            <div className="col col-6">
                                                <div className="input number">
                                                    <label htmlFor="Surface*">Surface*</label>
                                                    <div className="d-flex">
                                                        <input type="number" name="surface" id="surface" placeholder='000000' />
                                                        <p>m<sup>2</sup></p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col col-6">
                                                <div className="input">
                                                    <label htmlFor="How many rooms?*">How many rooms?*</label>
                                                    <select name="rooms" id="rooms">
                                                        <option value="0">0</option>
                                                        <option value="1">1</option>
                                                        <option value="2">2</option>
                                                        <option value="3">3</option>
                                                        <option value="4">4</option>
                                                        <option value="5">5</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col col-12">
                                                <div className="input number">
                                                    <label htmlFor="What is the desired net selling price?*">What is the desired net selling price?*</label>
                                                    <div className="d-flex">
                                                        <input type="number" name="price" id="price" placeholder='0' />
                                                        <p className='bg-transparent'>₪</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                    <div className="d-flex justify-content-between align-items-center w-100 mt-4">
                                        <button className='navigate bg-transparent text-dark  d-flex align-items-center justify-content-center' onClick={handlePrev}><IoIosArrowBack className='me-2' /> Back</button>
                                        <button className='navigate bg-dark text-light  d-flex align-items-center justify-content-center' onClick={handleNext}>Next <IoIosArrowForward className='ms-2' /></button>
                                    </div>
                                </div>
                            </div>
                            <div className="col col-lg-5 col-md-6 col-12">
                                <div className="img">
                                    <img src={SelloutImg} width='100%' alt="" />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="row align-items-center g-5">
                            <div className="col col-lg-7 col-md-6 col-12">
                                <div className="text">
                                    <form action="">
                                        <div className="row gx-lg-5 gx-md-4 gx-3">
                                            <div className="col col-6">
                                                <div className="input">
                                                    <label htmlFor="What is your name ?*">What is your name ?*</label>
                                                    <input type="text" name="name" id="name" placeholder='John' />
                                                </div>
                                            </div>
                                            <div className="col col-6">
                                                <div className="input">
                                                    <label htmlFor="And your last name?*">And your last name?*</label>
                                                    <input type="text" name="lastname" id="lastname" placeholder='Doe' />
                                                </div>
                                            </div>
                                            <div className="col col-12">
                                                <div className="input number">
                                                    <label htmlFor="What is your e-mail?*">What is your e-mail?*</label>
                                                    <div className="d-flex">
                                                        <input type="email" name="email" id="email" placeholder='johndoe@gmail.com' />
                                                        <p className='bg-transparent'>₪</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col col-12">
                                                <div className="input">
                                                    <label htmlFor="What is your phone number?*">What is your phone number?*</label>
                                                    <div className="d-flex align-items-center">
                                                        <div className="d-flex align-items-center myflag ">
                                                            <div className="flag">
                                                                {countryCode && (
                                                                    <div>
                                                                        <ReactCountryFlag countryCode={countryCode} size="50px" />
                                                                    </div>
                                                                )}
                                                            </div>
                                                            <select onChange={handleCountryChange} className='border-0'>
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
                                        </div>
                                    </form>
                                    <div className="d-flex justify-content-between align-items-center w-100 mt-4">
                                        <button className='navigate bg-transparent text-dark  d-flex align-items-center justify-content-center' onClick={handlePrev}><IoIosArrowBack className='me-2' /> Back</button>
                                        <button className='navigate bg-primary text-light  d-flex align-items-center justify-content-center' onClick={handleNext}>Send <IoIosArrowForward className='ms-2' /></button>
                                    </div>
                                </div>
                            </div>
                            <div className="col col-lg-5 col-md-6 col-12">
                                <div className="img">
                                    <img src={SelloutImg} width='100%' alt="" />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div>
                    
                </div>
            </div>
        </div>
    );
}

export default SellOut;
