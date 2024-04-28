import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Products.css'
import Container from 'react-bootstrap/Container';
import { GoHeart, GoHeartFill } from "react-icons/go";
import { IoCallOutline } from "react-icons/io5";
// import Card from 'react-bootstrap/Card';
import product1 from '../images/Group → Link → 7cfc6a37-460a-4aea-add7-52c3c71151e9.jpeg.png';


function Products() {
    const [isLiked, setIsLiked] = useState(false);
    const handleReactionClick = () => {
        setIsLiked(!isLiked);
    };
  return (
    <div className='products'>
        <Container>
            <div className="row g-4">
                <div className="col-lg-3 col-md-4 col-6">
                    <div className='card'>
                        <Link to='/' className="img">
                            <img src={product1} alt='Product1' width='100%' />
                            <div className='reaction' onClick={handleReactionClick}>
                                {isLiked ? <GoHeartFill className='heart text-primary' /> : <GoHeart className='heart' />}
                            </div>
                        </Link>
                        <div className='details py-2 px-1'>
                            <h4>Cottage - Eliezer Yaffe St.</h4>
                            <h5>Ra’anana, Israël</h5>
                            <p>150 m² - 3 rooms - 1 parking </p>
                            <h3>22 700 000 ₪ </h3>
                            <button className='d-flex align-items-center justify-content-center gap-2 call rounded-5 bg-white'>
                                <IoCallOutline />Show phone number
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-6">
                    <div className='card'>
                        <Link to='/' className="img">
                            <img src={product1} alt='Product1' width='100%' />
                            <div className='reaction' onClick={handleReactionClick}>
                                {isLiked ? <GoHeartFill className='heart text-primary' /> : <GoHeart className='heart' />}
                            </div>
                        </Link>
                        <div className='details py-2 px-1'>
                            <h4>Cottage - Eliezer Yaffe St.</h4>
                            <h5>Ra’anana, Israël</h5>
                            <p>150 m² - 3 rooms - 1 parking </p>
                            <h3>22 700 000 ₪ </h3>
                            <button className='d-flex align-items-center justify-content-center gap-2 call rounded-5 bg-white'>
                                <IoCallOutline />Show phone number
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-6">
                    <div className='card'>
                        <Link to='/' className="img">
                            <img src={product1} alt='Product1' width='100%' />
                            <div className='reaction' onClick={handleReactionClick}>
                                {isLiked ? <GoHeartFill className='heart text-primary' /> : <GoHeart className='heart' />}
                            </div>
                        </Link>
                        <div className='details py-2 px-1'>
                            <h4>Cottage - Eliezer Yaffe St.</h4>
                            <h5>Ra’anana, Israël</h5>
                            <p>150 m² - 3 rooms - 1 parking </p>
                            <h3>22 700 000 ₪ </h3>
                            <button className='d-flex align-items-center justify-content-center gap-2 call rounded-5 bg-white'>
                                <IoCallOutline />Show phone number
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-6">
                    <div className='card'>
                        <Link to='/' className="img">
                            <img src={product1} alt='Product1' width='100%' />
                            <div className='reaction' onClick={handleReactionClick}>
                                {isLiked ? <GoHeartFill className='heart text-primary' /> : <GoHeart className='heart' />}
                            </div>
                        </Link>
                        <div className='details py-2 px-1'>
                            <h4>Cottage - Eliezer Yaffe St.</h4>
                            <h5>Ra’anana, Israël</h5>
                            <p>150 m² - 3 rooms - 1 parking </p>
                            <h3>22 700 000 ₪ </h3>
                            <button className='d-flex align-items-center justify-content-center gap-2 call rounded-5 bg-white'>
                                <IoCallOutline />Show phone number
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-6">
                    <div className='card'>
                        <Link to='/' className="img">
                            <img src={product1} alt='Product1' width='100%' />
                            <div className='reaction' onClick={handleReactionClick}>
                                {isLiked ? <GoHeartFill className='heart text-primary' /> : <GoHeart className='heart' />}
                            </div>
                        </Link>
                        <div className='details py-2 px-1'>
                            <h4>Cottage - Eliezer Yaffe St.</h4>
                            <h5>Ra’anana, Israël</h5>
                            <p>150 m² - 3 rooms - 1 parking </p>
                            <h3>22 700 000 ₪ </h3>
                            <button className='d-flex align-items-center justify-content-center gap-2 call rounded-5 bg-white'>
                                <IoCallOutline />Show phone number
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-6">
                    <div className='card'>
                        <Link to='/' className="img">
                            <img src={product1} alt='Product1' width='100%' />
                            <div className='reaction' onClick={handleReactionClick}>
                                {isLiked ? <GoHeartFill className='heart text-primary' /> : <GoHeart className='heart' />}
                            </div>
                        </Link>
                        <div className='details py-2 px-1'>
                            <h4>Cottage - Eliezer Yaffe St.</h4>
                            <h5>Ra’anana, Israël</h5>
                            <p>150 m² - 3 rooms - 1 parking </p>
                            <h3>22 700 000 ₪ </h3>
                            <button className='d-flex align-items-center justify-content-center gap-2 call rounded-5 bg-white'>
                                <IoCallOutline />Show phone number
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-6">
                    <div className='card'>
                        <Link to='/' className="img">
                            <img src={product1} alt='Product1' width='100%' />
                            <div className='reaction' onClick={handleReactionClick}>
                                {isLiked ? <GoHeartFill className='heart text-primary' /> : <GoHeart className='heart' />}
                            </div>
                        </Link>
                        <div className='details py-2 px-1'>
                            <h4>Cottage - Eliezer Yaffe St.</h4>
                            <h5>Ra’anana, Israël</h5>
                            <p>150 m² - 3 rooms - 1 parking </p>
                            <h3>22 700 000 ₪ </h3>
                            <button className='d-flex align-items-center justify-content-center gap-2 call rounded-5 bg-white'>
                                <IoCallOutline />Show phone number
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-6">
                    <div className='card'>
                        <Link to='/' className="img">
                            <img src={product1} alt='Product1' width='100%' />
                            <div className='reaction' onClick={handleReactionClick}>
                                {isLiked ? <GoHeartFill className='heart text-primary' /> : <GoHeart className='heart' />}
                            </div>
                        </Link>
                        <div className='details py-2 px-1'>
                            <h4>Cottage - Eliezer Yaffe St.</h4>
                            <h5>Ra’anana, Israël</h5>
                            <p>150 m² - 3 rooms - 1 parking </p>
                            <h3>22 700 000 ₪ </h3>
                            <button className='d-flex align-items-center justify-content-center gap-2 call rounded-5 bg-white'>
                                <IoCallOutline />Show phone number
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-6">
                    <div className='card'>
                        <Link to='/' className="img">
                            <img src={product1} alt='Product1' width='100%' />
                            <div className='reaction' onClick={handleReactionClick}>
                                {isLiked ? <GoHeartFill className='heart text-primary' /> : <GoHeart className='heart' />}
                            </div>
                        </Link>
                        <div className='details py-2 px-1'>
                            <h4>Cottage - Eliezer Yaffe St.</h4>
                            <h5>Ra’anana, Israël</h5>
                            <p>150 m² - 3 rooms - 1 parking </p>
                            <h3>22 700 000 ₪ </h3>
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

export default Products