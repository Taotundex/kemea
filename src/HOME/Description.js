import React, { useState } from 'react'
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leafle';
import './Description.css'
import { GoHeart, GoHeartFill } from "react-icons/go";
import { FiDownload } from "react-icons/fi";
import { LiaBedSolid } from "react-icons/lia";
// import descImg1 from '../images/div._13sj9hk.png'
// import descImg2 from '../images/div._13sj9hk (1).png'
// import descImg3 from '../images/div._13sj9hk (2).png'
// import descImg4 from '../images/div._13sj9hk (3).png'
// import descImg5 from '../images/div._13sj9hk (4).png'
import { Link } from 'react-router-dom'
import { PiHouseLine, PiTelevision } from 'react-icons/pi';
import { FaShower } from 'react-icons/fa';
import { GiElevator, GiKitchenTap } from 'react-icons/gi';
import { RiPaintBrushLine } from 'react-icons/ri';
import { MdStorage } from 'react-icons/md';
import { BiCabinet } from 'react-icons/bi';
import { CgSmartHomeBoiler } from "react-icons/cg";

function Description() {
    const [isLiked, setIsLiked] = useState(false);
    const handleReactionClick = () => {
        setIsLiked(!isLiked);
    };
  return (
    <div className='description'>
        <div className="container">
            <div className="head py-3">
                <h2>Cottage - Eliezer Yaffe St.</h2>
                <div className="d-flex justify-content-between align-items-center">
                    <h6 className='text-decoration-underline'>· Eliezer Yaffe St., Ra’anana District, Israel </h6>
                    <div className="d-flex align-items-center gap-3">
                        <p className='d-flex align-items-center gap-1'>
                            <div className='reaction' onClick={handleReactionClick}>
                                {isLiked ? <GoHeartFill className='heart fs-5 text-primary' /> : <GoHeart className='heart fs-5' />}
                            </div>
                            Save
                        </p>
                        <p className='d-flex align-items-center gap-1'>
                            <FiDownload className='fs-5' />
                            Share
                        </p>
                    </div>
                </div>
            </div>
            {/* <div className="prod-images">
                <div className="d-flex gap-3">
                    <div className="main-img">
                        <img src={descImg1} width='100%' alt="" />
                    </div>
                    <div className="other-img d-flex gap-3">
                        <div className="one d-flex flex-column gap-3">
                            <div className="img">
                                <img src={descImg2} width='100%' alt="" />
                            </div>
                            <div className="img">
                                <img src={descImg3} width='100%' alt="" />
                            </div>
                        </div>
                        <div className="one d-flex flex-column gap-3">
                            <div className="img">
                                <img src={descImg4} width='100%' alt="" />
                            </div>
                            <div className="img">
                                <img src={descImg5} width='100%' alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            <div className="row">
                <div className="col col-lg-8 col-md-6 col-12">
                    <div className="desc">
                        <div className="desc-head">
                            <div className="d-flex top text-center">
                                <Link className='link active'>Description</Link>
                                <Link className='link'>Finance</Link>
                            </div>
                        </div>
                        <div className="details">
                            <div className="up py-5">
                                <h1>22 700 000 ₪ </h1>
                                <small>Eliezer Yaffe Street, Ra’anana District, Israel</small>
                                <div className="mt-3 d-flex gap-3 btns">
                                    <button className='d-flex align-items-center justify-content-center gap-2'>
                                        <PiHouseLine className='fs-5' />
                                        530 m<sup>2</sup>
                                    </button>
                                    <button className='d-flex align-items-center justify-content-center gap-2'>
                                        <LiaBedSolid className='fs-5' />
                                        7 Rooms
                                    </button>
                                    <button className='d-flex align-items-center justify-content-center gap-2'>
                                        <FaShower className='fs-5' />
                                        4 Baths
                                    </button>
                                </div>
                            </div>
                            <div className="middle py-5">
                                <h3>Description</h3>
                                <p>Apartment currently in T2 configuration to be renovated in T3 furnished, located on the 5th and last floor of a building in Marseille of 8 units in good condition.</p>
                                <p>The apartment is composed of an entrance, a living room, a kitchen, a bedroom, a shower room, a toilet and  a balcony.</p>
                                <p>Ideally located in the St Victor district next to the Old Port, the Abbey, the Fort St Nicolas and close to all amenities.</p>
                                <p>The monthly rent of this apartment is 1 100 € including charges.</p>
                                <p>Possibility LCD; 140 € in average the night on Airbnb.</p>
                            </div>
                            <div className="middle py-5">
                                <h3>About this property</h3>
                                <div className="aboutprop pt-3">
                                    <p>Type of property <b className='ms-2'>Cottage</b></p>
                                    <p>Number of floors <b className='ms-2'>5</b></p>
                                    <p>Total surface <b className='ms-2'>530m<sup>2</sup></b></p>
                                    <p>Property condition <b className='ms-2'>Renovated</b></p>
                                    <p>Number of rooms <b className='ms-2'>5</b></p>
                                    <p>Entry date <b className='ms-2'>01/12/23</b></p>
                                    <p>City <b className='ms-2'>Ra’anana</b></p>
                                    <p>Number of balcony <b className='ms-2'>1</b></p>
                                    <p>Entry condition <b className='ms-2'>Flexible</b></p>
                                    <p>Address <b className='ms-2'>23 Eliezer Yaffe Street</b></p>
                                    <p>Ground/covered car park <b className='ms-2'>2</b></p>
                                    <p>Price <b className='ms-2'>22 700 000 ₪</b></p>
                                    <p>Area <b className='ms-2'>South</b></p>
                                    <p>Surface build <b className='ms-2'>330m<sup>2</sup></b></p>
                                </div>
                            </div>
                            <div className="middle py-5">
                                <h3>What this house offers</h3>
                                <div className="aboutprop pt-3 icons">
                                    <button className='d-flex align-items-center px-4 gap-2'>
                                        <GiElevator />
                                        Elevators
                                    </button>
                                    <button className='d-flex align-items-center px-4 gap-2'>
                                        <RiPaintBrushLine />
                                        Renovated
                                    </button>
                                    <button className='d-flex align-items-center px-4 gap-2'>
                                        <MdStorage />
                                        Storage
                                    </button>
                                    <button className='d-flex align-items-center px-4 gap-2'>
                                        <BiCabinet />
                                        Furnitures included
                                    </button>
                                    <button className='d-flex align-items-center px-4 gap-2'>
                                        <GiKitchenTap />
                                        Kosher kitchen
                                    </button>
                                    <button className='d-flex align-items-center px-4 gap-2'>
                                        <CgSmartHomeBoiler />
                                        Water heater
                                    </button>
                                    <button className='d-flex align-items-center px-4 gap-2'>
                                        <PiTelevision />
                                        Personal Magzan
                                    </button>
                                </div>
                            </div>
                            <div className="middle py-5">
                                <h3>Where is this property located</h3>
                                <div className="py-4">
                                    {/* <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '400px', width: '100%' }}>
                                        <TileLayer
                                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                        />
                                        <Marker position={[51.505, -0.09]}>
                                            <Popup>
                                            A pretty CSS3 popup. <br /> Easily customizable.
                                            </Popup>
                                        </Marker>
                                    </MapContainer> */}
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

export default Description