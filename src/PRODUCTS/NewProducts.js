import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Products.css'
import Container from 'react-bootstrap/Container';
import { GoHeart, GoHeartFill } from "react-icons/go";
import { IoCallOutline } from "react-icons/io5";
import product1 from '../images/Group → Link → 7cfc6a37-460a-4aea-add7-52c3c71151e9.jpeg.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';


function NewProducts() {
    const [isLiked, setIsLiked] = useState(false);
    const handleReactionClick = () => {
        setIsLiked(!isLiked);
    };
  return (
    <div className='products'>
        <Container>
            <div className="row g-lg-4 g-md-3 g-2">
                <div className="col-lg-3 col-md-4 col-6">
                    <div className='card'>
                        <div className="img">
                            <Link to='/new-project-description'>
                                <Swiper spaceBetween={0} pagination={{ clickable: true, }} modules={[Pagination]} className="mySwiper" >
                                    <SwiperSlide><img src={product1} alt='Product1' width='100%' /></SwiperSlide>
                                    <SwiperSlide><img src={product1} alt='Product1' width='100%' /></SwiperSlide>
                                    <SwiperSlide><img src={product1} alt='Product1' width='100%' /></SwiperSlide>
                                    <SwiperSlide><img src={product1} alt='Product1' width='100%' /></SwiperSlide>
                                </Swiper>
                            </Link>
                            <div className="reaction-sale d-flex justify-content-end align-items-center">
                                <div className='react-icon' onClick={handleReactionClick}>
                                    {isLiked ? <GoHeartFill className='heart text-primary' /> : <GoHeart className='heart' />}
                                </div>
                            </div>
                        </div>
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
                <div className="col-lg-3 col-md-4 col-6">
                    <div className='card'>
                        <div className="img">
                            <Link to='/new-project-description'>
                                <Swiper spaceBetween={0} pagination={{ clickable: true, }} modules={[Pagination]} className="mySwiper" >
                                    <SwiperSlide><img src={product1} alt='Product1' width='100%' /></SwiperSlide>
                                    <SwiperSlide><img src={product1} alt='Product1' width='100%' /></SwiperSlide>
                                    <SwiperSlide><img src={product1} alt='Product1' width='100%' /></SwiperSlide>
                                    <SwiperSlide><img src={product1} alt='Product1' width='100%' /></SwiperSlide>
                                </Swiper>
                            </Link>
                            <div className="reaction-sale d-flex justify-content-between align-items-center">
                                <p>Sale</p>
                                <div className='react-icon' onClick={handleReactionClick}>
                                    {isLiked ? <GoHeartFill className='heart text-primary' /> : <GoHeart className='heart' />}
                                </div>
                            </div>
                        </div>
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
                <div className="col-lg-3 col-md-4 col-6">
                    <div className='card'>
                        <div className="img">
                            <Link to='/new-project-description'>
                                <Swiper spaceBetween={0} pagination={{ clickable: true, }} modules={[Pagination]} className="mySwiper" >
                                    <SwiperSlide><img src={product1} alt='Product1' width='100%' /></SwiperSlide>
                                    <SwiperSlide><img src={product1} alt='Product1' width='100%' /></SwiperSlide>
                                    <SwiperSlide><img src={product1} alt='Product1' width='100%' /></SwiperSlide>
                                    <SwiperSlide><img src={product1} alt='Product1' width='100%' /></SwiperSlide>
                                </Swiper>
                            </Link>
                            <div className="reaction-sale d-flex justify-content-end align-items-center">
                                <div className='react-icon' onClick={handleReactionClick}>
                                    {isLiked ? <GoHeartFill className='heart text-primary' /> : <GoHeart className='heart' />}
                                </div>
                            </div>
                        </div>
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
                <div className="col-lg-3 col-md-4 col-6">
                    <div className='card'>
                        <div className="img">
                            <Link to='/new-project-description'>
                                <Swiper spaceBetween={0} pagination={{ clickable: true, }} modules={[Pagination]} className="mySwiper" >
                                    <SwiperSlide><img src={product1} alt='Product1' width='100%' /></SwiperSlide>
                                    <SwiperSlide><img src={product1} alt='Product1' width='100%' /></SwiperSlide>
                                    <SwiperSlide><img src={product1} alt='Product1' width='100%' /></SwiperSlide>
                                    <SwiperSlide><img src={product1} alt='Product1' width='100%' /></SwiperSlide>
                                </Swiper>
                            </Link>
                            <div className="reaction-sale d-flex justify-content-end align-items-center">
                                <div className='react-icon' onClick={handleReactionClick}>
                                    {isLiked ? <GoHeartFill className='heart text-primary' /> : <GoHeart className='heart' />}
                                </div>
                            </div>
                        </div>
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
                <div className="col-lg-3 col-md-4 col-6">
                    <div className='card'>
                        <div className="img">
                            <Link to='/new-project-description'>
                                <Swiper spaceBetween={0} pagination={{ clickable: true, }} modules={[Pagination]} className="mySwiper" >
                                    <SwiperSlide><img src={product1} alt='Product1' width='100%' /></SwiperSlide>
                                    <SwiperSlide><img src={product1} alt='Product1' width='100%' /></SwiperSlide>
                                    <SwiperSlide><img src={product1} alt='Product1' width='100%' /></SwiperSlide>
                                    <SwiperSlide><img src={product1} alt='Product1' width='100%' /></SwiperSlide>
                                </Swiper>
                            </Link>
                            <div className="reaction-sale d-flex justify-content-end align-items-center">
                                <div className='react-icon' onClick={handleReactionClick}>
                                    {isLiked ? <GoHeartFill className='heart text-primary' /> : <GoHeart className='heart' />}
                                </div>
                            </div>
                        </div>
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
                <div className="col-lg-3 col-md-4 col-6">
                    <div className='card'>
                        <div className="img">
                            <Link to='/new-project-description'>
                                <Swiper spaceBetween={0} pagination={{ clickable: true, }} modules={[Pagination]} className="mySwiper" >
                                    <SwiperSlide><img src={product1} alt='Product1' width='100%' /></SwiperSlide>
                                    <SwiperSlide><img src={product1} alt='Product1' width='100%' /></SwiperSlide>
                                    <SwiperSlide><img src={product1} alt='Product1' width='100%' /></SwiperSlide>
                                    <SwiperSlide><img src={product1} alt='Product1' width='100%' /></SwiperSlide>
                                </Swiper>
                            </Link>
                            <div className="reaction-sale d-flex justify-content-end align-items-center">
                                <div className='react-icon' onClick={handleReactionClick}>
                                    {isLiked ? <GoHeartFill className='heart text-primary' /> : <GoHeart className='heart' />}
                                </div>
                            </div>
                        </div>
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
                <div className="col-lg-3 col-md-4 col-6">
                    <div className='card'>
                        <div className="img">
                            <Link to='/new-project-description'>
                                <Swiper spaceBetween={0} pagination={{ clickable: true, }} modules={[Pagination]} className="mySwiper" >
                                    <SwiperSlide><img src={product1} alt='Product1' width='100%' /></SwiperSlide>
                                    <SwiperSlide><img src={product1} alt='Product1' width='100%' /></SwiperSlide>
                                    <SwiperSlide><img src={product1} alt='Product1' width='100%' /></SwiperSlide>
                                    <SwiperSlide><img src={product1} alt='Product1' width='100%' /></SwiperSlide>
                                </Swiper>
                            </Link>
                            <div className="reaction-sale d-flex justify-content-end align-items-center">
                                <div className='react-icon' onClick={handleReactionClick}>
                                    {isLiked ? <GoHeartFill className='heart text-primary' /> : <GoHeart className='heart' />}
                                </div>
                            </div>
                        </div>
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
                <div className="col-lg-3 col-md-4 col-6">
                    <div className='card'>
                        <div className="img">
                            <Link to='/new-project-description'>
                                <Swiper spaceBetween={0} pagination={{ clickable: true, }} modules={[Pagination]} className="mySwiper" >
                                    <SwiperSlide><img src={product1} alt='Product1' width='100%' /></SwiperSlide>
                                    <SwiperSlide><img src={product1} alt='Product1' width='100%' /></SwiperSlide>
                                    <SwiperSlide><img src={product1} alt='Product1' width='100%' /></SwiperSlide>
                                    <SwiperSlide><img src={product1} alt='Product1' width='100%' /></SwiperSlide>
                                </Swiper>
                            </Link>
                            <div className="reaction-sale d-flex justify-content-end align-items-center">
                                <div className='react-icon' onClick={handleReactionClick}>
                                    {isLiked ? <GoHeartFill className='heart text-primary' /> : <GoHeart className='heart' />}
                                </div>
                            </div>
                        </div>
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
        </Container>
    </div>
  )
}

export default NewProducts