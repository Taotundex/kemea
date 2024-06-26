import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import '../REMAX/Remax.css'
import levyHero from '../images/levy-hero.png'
import levyImg from '../images/Levy.png'
import { FaPhoneAlt } from 'react-icons/fa'
import { RiExternalLinkLine } from 'react-icons/ri'
import product1 from '../images/Group → Link → 7cfc6a37-460a-4aea-add7-52c3c71151e9.jpeg.png'
// import image2 from '../images/Group → Link → c9e14430-7cc9-49ae-9cff-9176f3007864.jpg.png'
// import image3 from '../images/Group → Link → d6cb196f-6cde-4d6e-ab96-862b02c3d059.jpg.png'
import photo from '../images/photo.png'
import { IoCallOutline, IoCheckmarkCircleSharp } from 'react-icons/io5';
import { GoHeart, GoHeartFill } from 'react-icons/go';

function NadlanPage() {
    const [isLiked, setIsLiked] = useState(false);
    const handleReactionClick = () => {
        setIsLiked(!isLiked);
    };
    
    const [activeTab, setActiveTab] = useState('buy');
    const handleClick = (tab) => {
        setActiveTab(tab);
    };

    
    const [isContact, setIsContact] = useState(false);
    const handleContactClick = () => {
        setIsContact(!isContact);
    };

    // const [messageSent, setMessageSent] = useState(false);

//   const handleMessageClick = () => {
//     setMessageSent(!messageSent);
//   };
  return (
    <div>        
        <div className="hero">
            <img src={levyHero} width='100%' alt="" />
        </div>
        <div className="container">
            <div className="office px-4 mb-5">
                <div className="row g-3 d-flex align-items-center w-100">
                    <div className="col col-lg-2 col-md-3 col-4">
                        <div className="img">
                            <img src={levyImg} width='100%' alt="" />
                        </div>
                    </div>
                    <div className="col col-lg-3 col-md-5 col-8">
                        <div className="prop">
                            <h3>Guy and Doron Nadlan</h3>
                            <p>3 Projects  <span>· Member since 2023</span></p>
                        </div>
                    </div>
                    <div className="col col-lg-4 col-md-6 col-12">
                        <div className="schedule p-3 rounded-4">
                            <div className="d-flex justify-content-between">
                                <p>Sunday - Monday</p>
                                <p>- 9:30 - 19:00</p>
                            </div>
                            <div className="d-flex justify-content-between">
                                <p>Tuesday - Wednesday</p>
                                <p>- 9:30 - 19:00</p>
                            </div>
                            <div className="d-flex justify-content-between">
                                <p>Thursday - Friday</p>
                                <p>- 9:30 - 19:00</p>
                            </div>
                        </div>
                    </div>
                    <div className="col col-lg-3 col-md-6 col-12">
                        <div className="contact p-3 rounded-4">
                            <Link to='/' className="d-flex align-items-center gap-2 text-decoration-underline">
                                <RiExternalLinkLine className='fs-6 text-decoration-none' />See their website
                            </Link>
                            <Link to='/' className="d-flex align-items-center gap-2 text-decoration-underline">
                                <FaPhoneAlt className='fs-6 text-decoration-none' />Show phone number
                            </Link>
                            <div className='request' onClick={handleContactClick}>
                                {isContact ? 
                                    <button className="success req d-flex align-items-center justify-content-center gap-2">
                                        <IoCheckmarkCircleSharp className='fs-4' />Message sent
                                    </button>
                                 : 
                                    <button>Contact</button>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="for-sale">
                <h2>Guy and Doron Nadlan</h2>
                <div className="details my-5">
                    <div className="row g-5">
                        <div className="col col-lg-3 col-md-3 col-12">
                            <div className="sidebar p-4">
                                <div className="input">
                                    <label className='heading' htmlFor="Kind of property">Kind of property</label>
                                    <select name="property" id="property">
                                        <option value="housesAndApartment">Houses, Apartments</option>
                                    </select>
                                </div>
                                <div className="input">
                                    <label className='heading' htmlFor="Price">Price</label>
                                    <div className="row g-2">
                                        <div className="col col-6">
                                            <select name="priceMin" id="priceMin">
                                                <option>Min.</option>
                                            </select>
                                        </div>
                                        <div className="col col-6">
                                            <select name="priceMax" id="priceMax">
                                                <option>Max.</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="input">
                                    <label className='heading' htmlFor="Surface">Surface</label>
                                    <div className="row g-2">
                                        <div className="col col-6">
                                            <select name="surfaceMin" id="surfaceMin">
                                                <option>Min.</option>
                                            </select>
                                        </div>
                                        <div className="col col-6">
                                            <select name="surfaceMax" id="surfaceMax">
                                                <option>Max.</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="input">
                                    <label className='heading' htmlFor="Housing type">Housing type</label>
                                    <label htmlFor="apartments">
                                        <input type="checkbox" name="apartments" id="apartments" />
                                        Apartments, penthouses and duplex
                                    </label>
                                    <label htmlFor="villa">
                                        <input type="checkbox" name="villa" id="villa" />
                                        Houses and villas
                                    </label>
                                </div>
                                <div className="input">
                                    <label className='heading' htmlFor="Other names">Other names</label>
                                    <label htmlFor="smallapartments">
                                        <input type="checkbox" name="smallapartments" id="smallapartments" />
                                        Small apartments
                                    </label>
                                </div>
                                <div className="input">
                                    <label className='heading' htmlFor="Bedrooms">Bedrooms</label>
                                    <label htmlFor="zeroBedroom">
                                        <input type="checkbox" name="zeroBedroom" id="zeroBedroom" />
                                        0 bedroom studios
                                    </label>
                                    <label htmlFor="oneBedroom">
                                        <input type="checkbox" name="oneBedroom" id="oneBedroom" />
                                        1
                                    </label>
                                    <label htmlFor="twoBedroom">
                                        <input type="checkbox" name="twoBedroom" id="twoBedroom" />
                                        2
                                    </label>
                                    <label htmlFor="threeBedroom">
                                        <input type="checkbox" name="threeBedroom" id="threeBedroom" />
                                        3
                                    </label>
                                    <label htmlFor="fiveBedroom">
                                        <input type="checkbox" name="fiveBedroom" id="fiveBedroom" />
                                        5 chambres ou plus
                                    </label>
                                </div>
                                <div className="input">
                                    <label className='heading' htmlFor="Bathroom">Bathrooms</label>
                                    <label htmlFor="oneBathroom">
                                        <input type="checkbox" name="oneBathroom" id="oneBathroom" />
                                        1
                                    </label>
                                    <label htmlFor="twoBathroom">
                                        <input type="checkbox" name="twoBathroom" id="twoBathroom" />
                                        2
                                    </label>
                                    <label htmlFor="threeBathroom">
                                        <input type="checkbox" name="threeBathroom" id="threeBathroom" />
                                        3 bathrooms or more
                                    </label>
                                </div>
                                <div className="input">
                                    <label className='heading' htmlFor="State">State</label>
                                    <label htmlFor="newProperty">
                                        <input type="checkbox" name="newProperty" id="newProperty" />
                                        New property
                                    </label>
                                    <label htmlFor="inGoodCondition">
                                        <input type="checkbox" name="inGoodCondition" id="inGoodCondition" />
                                        In good condition
                                    </label>
                                    <label htmlFor="toRenovate">
                                        <input type="checkbox" name="toRenovate" id="toRenovate" />
                                        To renovate
                                    </label>
                                </div>
                                <div className="input">
                                    <label className='heading' htmlFor="Features">Features</label>
                                    <label htmlFor="Air_conditioner">
                                        <input type="checkbox" name="Air_conditioner" id="Air_conditioner" />
                                        Air conditioner
                                    </label>
                                    <label htmlFor="Built-in_wardrobes">
                                        <input type="checkbox" name="Built-in_wardrobes" id="Built-in_wardrobes" />
                                        Built-in wardrobes
                                    </label>
                                    <label htmlFor="Elevator">
                                        <input type="checkbox" name="Elevator" id="Elevator" />
                                        Elevator
                                    </label>
                                    <label htmlFor="On_the_street">
                                        <input type="checkbox" name="On_the_street" id="On_the_street" />
                                        On the street
                                    </label>
                                    <label htmlFor="Parking">
                                        <input type="checkbox" name="Parking" id="Parking" />
                                        Parking
                                    </label>
                                    <label htmlFor="Garden">
                                        <input type="checkbox" name="Garden" id="Garden" />
                                        Garden
                                    </label>
                                    <label htmlFor="Swimming_pool">
                                        <input type="checkbox" name="Swimming_pool" id="Swimming_pool" />
                                        Swimming pool
                                    </label>
                                    <label htmlFor="Terrace">
                                        <input type="checkbox" name="Terrace" id="Terrace" />
                                        Terrace
                                    </label>
                                    <label htmlFor="Storeroom">
                                        <input type="checkbox" name="Storeroom" id="Storeroom" />
                                        Storeroom
                                    </label>
                                    <label htmlFor="Accessible_housing">
                                        <input type="checkbox" name="Accessible_housing" id="Accessible_housing" />
                                        Accessible housing
                                    </label>
                                </div>
                                <div className="input">
                                    <label className='heading' htmlFor="Floor">Floor</label>
                                    <label htmlFor="Last_floor">
                                        <input type="checkbox" name="Last_floor" id="Last_floor" />
                                        Last floor
                                    </label>
                                    <label htmlFor="Intermediate_floors">
                                        <input type="checkbox" name="Intermediate_floors" id="Intermediate_floors" />
                                        Intermediate floors
                                    </label>
                                    <label htmlFor="Ground_floor">
                                        <input type="checkbox" name="Ground_floor" id="Ground_floor" />
                                        Ground floor
                                    </label>
                                </div>
                                <div className="input">
                                    <label className='heading' htmlFor="Multimedia">Multimedia</label>
                                    <label htmlFor="With_plan">
                                        <input type="checkbox" name="With_plan" id="With_plan" />
                                        With plan
                                    </label>
                                    <label htmlFor="With_virtual_tour">
                                        <input type="checkbox" name="With_virtual_tour" id="With_virtual_tour" />
                                        With virtual tour
                                    </label>
                                </div>
                                <div className="input">
                                    <label className='heading' htmlFor="Type of ad">Type of ad</label>
                                    <label htmlFor="From_banks">
                                        <input type="checkbox" name="From_banks" id="From_banks" />
                                        From banks
                                    </label>
                                </div>
                                <div className="input">
                                    <label className='heading' htmlFor="Publication date">Publication date</label>
                                    <label htmlFor="Indifferent">
                                        <input type="radio" name="publication" id="Indifferent" />
                                        Indifferent
                                    </label>
                                    <label htmlFor="In_the_last_58_hours">
                                        <input type="radio" name="publication" id="In_the_last_58_hours" />
                                        In the last 58 hours
                                    </label>
                                    <label htmlFor="Last_week">
                                        <input type="radio" name="publication" id="Last_week" />
                                        Last week
                                    </label>
                                    <label htmlFor="The_last_month">
                                        <input type="radio" name="publication" id="The_last_month" />
                                        The last month
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="col col-lg-9 col-md-9 col-12">
                            <div className="apartments">
                                <div className="head d-flex align-items-center justify-content-between">
                                    <div className="lists d-flex align-items-center">
                                        <Link className={activeTab === 'buy' ? 'links active' : 'links'} onClick={() => handleClick('buy')} to="">Buy</Link>
                                        <Link className={activeTab === 'promoters' ? 'links active' : 'links'} onClick={() => handleClick('promoters')} to="">Our Promoters</Link>
                                    </div>
                                    <select name="order" id="order">
                                        <option>Default order</option>
                                    </select>
                                </div>
                                <div className="buy" style={{ display: activeTab === 'buy' ? 'block' : 'none' }}>
                                    <div className="products py-5">
                                        <div className="row g-4">
                                            <div className="col col-lg-4 col-md-6 col-12">
                                                <div className='card'>
                                                    <Link to='/new-project-description' className="img">
                                                        <img src={product1} alt='Product1' width='100%' />
                                                        <div className='reaction' onClick={handleReactionClick}>
                                                            {isLiked ? <GoHeartFill className='heart text-primary' /> : <GoHeart className='heart' />}
                                                        </div>
                                                    </Link>
                                                    <div className='details py-2 px-1'>
                                                        <h4>Olivier - Tel Aviv</h4>
                                                        <h5>Kareden Nadlan</h5>
                                                        <p>Apartments from 2 to 6 rooms</p>
                                                        <h3>From 2 700 000 ₪</h3>
                                                        <button className='d-flex align-items-center justify-content-center gap-2 call rounded-5 bg-white'>
                                                            <IoCallOutline />Show phone number
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col col-lg-4 col-md-6 col-12">
                                                <div className='card'>
                                                    <Link to='/new-project-description' className="img">
                                                        <img src={product1} alt='Product1' width='100%' />
                                                        <div className='reaction' onClick={handleReactionClick}>
                                                            {isLiked ? <GoHeartFill className='heart text-primary' /> : <GoHeart className='heart' />}
                                                        </div>
                                                    </Link>
                                                    <div className='details py-2 px-1'>
                                                        <h4>Olivier - Tel Aviv</h4>
                                                        <h5>Kareden Nadlan</h5>
                                                        <p>Apartments from 2 to 6 rooms</p>
                                                        <h3>From 2 700 000 ₪</h3>
                                                        <button className='d-flex align-items-center justify-content-center gap-2 call rounded-5 bg-white'>
                                                            <IoCallOutline />Show phone number
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col col-lg-4 col-md-6 col-12">
                                                <div className='card'>
                                                    <Link to='/new-project-description' className="img">
                                                        <img src={product1} alt='Product1' width='100%' />
                                                        <div className='reaction-sale d-flex justify-content-between align-items-center' onClick={handleReactionClick}>
                                                            <p>Sale</p>
                                                            {isLiked ? <GoHeartFill className='heart text-primary' /> : <GoHeart className='heart' />}
                                                        </div>
                                                    </Link>
                                                    <div className='details py-2 px-1'>
                                                        <h4>Olivier - Tel Aviv</h4>
                                                        <h5>Kareden Nadlan</h5>
                                                        <p>Apartments from 2 to 6 rooms</p>
                                                        <h3>From 2 700 000 ₪</h3>
                                                        <button className='d-flex align-items-center justify-content-center gap-2 call rounded-5 bg-white'>
                                                            <IoCallOutline />Show phone number
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="promoters" style={{ display: activeTab === 'promoters' ? 'block' : 'none' }}>
                                    <div className="row my-5">
                                        <div className="col col-lg-4 col-md-6 col-12">
                                            <div className="agent d-flex align-items-center gap-2 p-3 rounded-4">
                                                <img src={photo} width='100%' alt="" />
                                                <div className="cont">
                                                    <h4>Laure Levy</h4>
                                                    <button className='d-flex align-items-center justify-content-center gap-2 bg-white mt-1'>
                                                        <IoCallOutline />Show phone number
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col col-lg-4 col-md-6 col-12">
                                            <div className="agent d-flex align-items-center gap-2 p-3 rounded-4">
                                                <img src={photo} width='100%' alt="" />
                                                <div className="cont">
                                                    <h4>Laure Levy</h4>
                                                    <button className='d-flex align-items-center justify-content-center gap-2 bg-white mt-1'>
                                                        <IoCallOutline />Show phone number
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col col-lg-4 col-md-6 col-12">
                                            <div className="agent d-flex align-items-center gap-2 p-3 rounded-4">
                                                <img src={photo} width='100%' alt="" />
                                                <div className="cont">
                                                    <h4>Laure Levy</h4>
                                                    <button className='d-flex align-items-center justify-content-center gap-2 bg-white mt-1'>
                                                        <IoCallOutline />Show phone number
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col col-lg-4 col-md-6 col-12">
                                            <div className="agent d-flex align-items-center gap-2 p-3 rounded-4">
                                                <img src={photo} width='100%' alt="" />
                                                <div className="cont">
                                                    <h4>Laure Levy</h4>
                                                    <button className='d-flex align-items-center justify-content-center gap-2 bg-white mt-1'>
                                                        <IoCallOutline />Show phone number
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col col-lg-4 col-md-6 col-12">
                                            <div className="agent d-flex align-items-center gap-2 p-3 rounded-4">
                                                <img src={photo} width='100%' alt="" />
                                                <div className="cont">
                                                    <h4>Laure Levy</h4>
                                                    <button className='d-flex align-items-center justify-content-center gap-2 bg-white mt-1'>
                                                        <IoCallOutline />Show phone number
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col col-lg-4 col-md-6 col-12">
                                            <div className="agent d-flex align-items-center gap-2 p-3 rounded-4">
                                                <img src={photo} width='100%' alt="" />
                                                <div className="cont">
                                                    <h4>Laure Levy</h4>
                                                    <button className='d-flex align-items-center justify-content-center gap-2 bg-white mt-1'>
                                                        <IoCallOutline />Show phone number
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NadlanPage