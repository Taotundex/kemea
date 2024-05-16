import React, { useState } from 'react';
// import { Doughnut } from 'react-chartjs-2';
import './Description.css';
import descImg1 from '../images/Group → Link → 7cfc6a37-460a-4aea-add7-52c3c71151e9.jpeg.png'
import descImg2 from '../images/Group → Link → c9e14430-7cc9-49ae-9cff-9176f3007864.jpg.png'
import descImg3 from '../images/Group → Link → d6cb196f-6cde-4d6e-ab96-862b02c3d059.jpg.png'
import descImg4 from '../images/Group → Link → db5f28f5-c390-426f-af73-bb33ff57c198.jpg.png'
import descImg5 from '../images/Group → Link → 7cfc6a37-460a-4aea-add7-52c3c71151e9.jpeg.png'
import remaxSm from '../images/remax-sm.png';
import { GoHeart, GoHeartFill, GoQuestion } from "react-icons/go";
import { FiDownload } from "react-icons/fi";
import { LiaBedSolid } from "react-icons/lia";
import { Link } from 'react-router-dom';
import { PiHouseLine, PiTelevision, PiWarningCircleLight } from 'react-icons/pi';
import { FaShower } from 'react-icons/fa';
import { GiElevator, GiKitchenTap } from 'react-icons/gi';
import { RiPaintBrushLine } from 'react-icons/ri';
import { MdStorage } from 'react-icons/md';
import { BiCabinet } from 'react-icons/bi';
import { CgSmartHomeBoiler } from "react-icons/cg";
import { IoCallOutline, IoCheckmarkCircleSharp } from 'react-icons/io5';
import MapComponent from '../MAP/MapComponent';
import DonutChart from '../CHART/DoughnutChart';
import ReqestTourModal from '../MODAL/RequestTourModal';


function Description() {
    const [modalShow, setModalShow] = useState(false);

    const [isRequested, setIsRequested] = useState(false);
    const handleRequestedClick = () => {
        setModalShow(true);
        setIsRequested(true);
    }
    const handleClose = () => setModalShow(false);

    const [isLiked, setIsLiked] = useState(false);
    const handleReactionClick = () => {
        setIsLiked(!isLiked);
    };
    // const [isRequested, setIsRequested] = useState(false);
    // const handleRequestedClick = () => {
    //     setIsRequested(!isRequested);
    // };
    const [value, setValue] = useState(0);
    const handleChange = (event) => {
        setValue(event.target.value);
    };
    const [activeTab, setActiveTab] = useState('description');
    const handleClick = (tab) => {
        setActiveTab(tab);
    };
  return (
    <div className='description' style={{overflowX: 'hidden'}}>
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
            <div className="prod-images pb-5">
                <div className="d-flex gap-3 prod-gap">
                    <div className="main-img">
                        <img src={descImg1} width='100%' alt="" />
                    </div>
                    <div className="other-img d-flex gap-3">
                        <div className="one d-flex flex-column">
                            <div className="img">
                                <img src={descImg2} width='100%' alt="" />
                            </div>
                            <div className="img">
                                <img src={descImg3} width='100%' alt="" />
                            </div>
                        </div>
                        <div className="one d-flex flex-column">
                            <div className="img">
                                <img src={descImg4} width='100%' alt="" />
                            </div>
                            <div className="img">
                                <img src={descImg5} width='100%' alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row g-5">
                <div className="col col-lg-8 col-md-6 col-12">
                    <div className="desc">
                        <div className="desc-head">
                            <div className="d-flex top text-center">
                                {/* <Link className='link active'>Description</Link>
                                <Link className='link'>Finance</Link> */}
                                <Link className={activeTab === 'description' ? 'link active' : 'link'} onClick={() => handleClick('description')} >Description</Link>
                                <Link className={activeTab === 'finance' ? 'link active' : 'link'} onClick={() => handleClick('finance')} >Finance</Link>
                            </div>
                        </div>
                        <div className="financing mt-5" style={{ display: activeTab === 'finance' ? 'block' : 'none' }}>
                            <div className="up p-5 shadow rounded-5 mb-5">
                                <h3>Combien me coûtera ce bien chaque mois ?</h3>
                                <div className="sm-line mb-4"></div>
                                <form action="" className='py-4'>
                                    <div className="row g-lg-4 g-md-3 g-0">
                                        <div className="col col-lg-6 col-md-6 col-12">
                                            <div className="input">
                                                <label htmlFor="Prix du bien">Prix du bien</label>
                                                <input type="text" name="prix" id="prix" placeholder='585 000' />
                                            </div>
                                        </div>
                                        <div className="col col-lg-6 col-md-6 col-12">
                                            <div className="input">
                                                <label htmlFor="Frais de notaire (8% ancien)">Frais de notaire (8% ancien)</label>
                                                <input type="text" name="frais" id="frais" placeholder='42 021' />
                                            </div>
                                        </div>
                                        <div className="col col-lg-6 col-md-6 col-12">
                                            <div className="input">
                                                <label htmlFor="Apport (30% recommandé)">Apport (30% recommandé)</label>
                                                <input type="text" name="apport" id="apport" placeholder='175 500' />
                                            </div>
                                        </div>
                                        <div className="col col-lg-6 col-md-6 col-12">
                                            <div className="input">
                                                <label htmlFor="Durée du prêt - Taux du crédit">Durée du prêt - Taux du crédit {value}%</label>
                                                <input type="range" name="duree" id="duree" min="0" max="100" value={value} onChange={handleChange} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="donut-chart my-4 d-flex justify-content-center align-items-center gap-5">
                                        <DonutChart />
                                        <div className="legend">
                                            <div className="one d-flex align-items-center gap-2 py-2">
                                                <div className="round" style={{width: '18px', height: '18px', borderRadius: '50%', background: '#0066ff'}}></div>
                                                Montant emprunte
                                                <GoQuestion />
                                            </div>
                                            <div className="one d-flex align-items-center gap-2 py-2">
                                                <div className="round" style={{width: '18px', height: '18px', borderRadius: '50%', background: '#80bfff'}}></div>
                                                Montant emprunte
                                                <GoQuestion />
                                            </div>
                                        </div>
                                    </div>
                                    <ol>
                                        <li className='text-decoration-underline'>Simulation non contractuelle</li>
                                        <li className='text-decoration-underline'>Sous réserve d’acceptation de votre dossier de prêt immobilier par votre Caisse régionale de Crédit Agricole, prêteur.</li>
                                    </ol>
                                </form>
                            </div>
                            <div className="up p-5 shadow rounded-5 mb-5">
                                <h3>Financement</h3>
                                <div className="sm-line mb-4"></div>
                                <div className="d-flex align-items-center gap-2 mb-4">
                                    <div class="toggle-container">
                                        <input type="checkbox" id="toggle" class="toggle-input" />
                                        <label for="toggle" class="toggle-label"></label>
                                    </div>
                                    Achat 100% cash
                                </div>
                                <div className="show">
                                    <div className="ranging">
                                        <label className='d-flex justify-content-between align-items-center' htmlFor="aport">
                                            <p>Aport <PiWarningCircleLight /> </p>
                                            <p>114 542 €</p>
                                        </label>
                                        <input type="range" name="aport" id="aport" />
                                    </div>
                                    <div className="ranging">
                                        <label className='d-flex justify-content-between align-items-center' htmlFor="Durée d'emprunt">
                                            <p>Durée d'emprunt</p>
                                            <p>20 ans</p>
                                        </label>
                                        <input type="range" name="duree" id="duree" />
                                    </div>
                                    <div className="ranging">
                                        <label className='d-flex justify-content-between align-items-center' htmlFor="Taux d'emprunt TAEG">
                                            <p>Taux d'emprunt TAEG</p>
                                            <p>4,50 %</p>
                                        </label>
                                        <input type="range" name="taux" id="taux" />
                                    </div>
                                    <div className="ranging">
                                        <label className='d-flex justify-content-between align-items-center' htmlFor="Mensualité d'emprunt">
                                            <p>Mensualité d'emprunt</p>
                                            <p>4 106 €</p>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="up pb-5">
                                <h3>Projection de l’enrichissement</h3>
                                <div className="sm-line mb-4"></div>
                                <div className="row g-3">
                                    <div className="col col-lg-4 col-md-6 col-12">
                                        <div className="price p-3 rounded-4">
                                            <div className="d-flex align-items-start justify-content-between">
                                                <h4>408 317 €</h4>
                                                <PiWarningCircleLight className='fs-5' />
                                            </div>
                                            <p>Trésorerie disponible l'année de revente</p>
                                        </div>
                                    </div>
                                    <div className="col col-lg-4 col-md-6 col-12">
                                        <div className="price p-3 rounded-4">
                                            <div className="d-flex align-items-start justify-content-between">
                                                <h4>707 844 €</h4>
                                                <PiWarningCircleLight className='fs-5' />
                                            </div>
                                            <p>Enrichissement net à 10 ans</p>
                                        </div>
                                    </div>
                                    <div className="col col-lg-4 col-md-6 col-12">
                                        <div className="price p-3 rounded-4">
                                            <div className="d-flex align-items-start justify-content-between">
                                                <h4>x 7.2</h4>
                                                <PiWarningCircleLight className='fs-5' />
                                            </div>
                                            <p>Coefficient d'enrichissement</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        
                        <div className="details" style={{ display: activeTab === 'description' ? 'block' : 'none' }}>
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
                        </div>
                    </div>
                </div>
                <div className="col col-lg-4 col-md-6 col-12">
                    <div className="more-info">
                        <div className="shadow-lg px-4 py-4 rounded-5 mb-3">
                            <div className='request' onClick={handleRequestedClick} >
                                {isRequested ?
                                    <button className="success req d-flex align-items-center justify-content-center gap-2">
                                        <IoCheckmarkCircleSharp className='fs-4' />Tour requested
                                    </button>
                                 :
                                    <button className="req d-flex flex-column align-items-center justify-content-center">
                                        <p>Request a tour</p>
                                        <small>As early as today 11:00 am</small>
                                    </button>
                                }
                            </div>
                            <button className='d-flex align-items-center justify-content-center gap-2 call bg-white mt-3'>
                                <IoCallOutline />Show phone number
                            </button>
                        </div>
                        <div className="shadow-lg px-4 py-4 rounded-5 mb-3">
                            <Link to='/remax' className="img d-flex align-items-center gap-2 text-decoration-none text-dark">
                                <img src={remaxSm} width='100%' alt="" />
                                <p>RE/MAX Agency</p>
                            </Link>
                            <form action="">
                                <textarea name="text" id="msg" className='msg' value='Good morning, I would like more information about this property. Please contact me for this.Cordially'></textarea>
                                <input type="text" name="name" id='name' placeholder="Name *" />
                                <input type="email" name="email" id='email' placeholder="E-mail *" />
                                <input type="text" name="number" id='number' placeholder="Phone number" />
                                <button type='submit'>Send</button>
                                <p>To the office website</p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mymapp py-5">
                <h3>Where is this property located</h3>
                <div className="my-4">
                    <MapComponent />
                    {/* <div id="map" style={{ height: '500px', width: '100%' }} /> */}
                </div>
                <div className="last-text">
                    <p>Any real estate investment involves risk. <br />Our calculations and forecasts are not indicative of future performance.</p>
                </div>
            </div>
            <footer>
                <div className="footer py-4">
                    published the 25.06.2022
                </div>
            </footer>
        </div>
        <ReqestTourModal show={modalShow} handleClose={handleClose} />
    </div>
  )
}

export default Description