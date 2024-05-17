import React from 'react'
import '../../HOME/HomeContent.css'
import Container from 'react-bootstrap/Container';
import RentFavorites from '../../PRODUCTS/RentFavorites';
import SellFavorites from '../../PRODUCTS/SellFavorites';
import ShortTermFavorites from '../../PRODUCTS/ShortTermFavorites';

function Favorites() {
  return (
    <div className='homepage' style={{marginBottom: '100px'}}>
        <Container>
            <div className="py-4">
                <h2>Favorites</h2>
            </div>
            <div className='py-3 bg-white'>
                <p className='bg-dark text-white rounded-end-5 py-3 px-4' style={{fontSize: '14px', width: 'fit-content'}}>Properties for rent</p>
            </div>
            <div className='btm d-flex align-items-center justify-content-between mb-2'>
                <p><span>1 - 3</span> out of <span>3</span></p>
                <form>
                    <select className='rounded-5'>
                        <option value="Default order">Default order</option>
                        <option value="Date">Date</option>
                        <option value="Ascending Price">Ascending Price</option>
                        <option value="Descending Price">Descending Price</option>
                    </select>
                </form>
            </div>
            <div className="rent-fav">
                <RentFavorites />
            </div>
            <div className='py-3 bg-white'>
                <p className='bg-dark text-white rounded-end-5 py-3 px-4' style={{fontSize: '14px', width: 'fit-content'}}>Properties for sell</p>
            </div>
            <div className='btm d-flex align-items-center justify-content-between mb-2'>
                <p><span>1 - 2</span> out of <span>2</span></p>
                <form>
                    <select className='rounded-5'>
                        <option value="Default order">Default order</option>
                        <option value="Date">Date</option>
                        <option value="Ascending Price">Ascending Price</option>
                        <option value="Descending Price">Descending Price</option>
                    </select>
                </form>
            </div>
            <div className="sell-fav">
                <SellFavorites />
            </div>
            <div className='py-3 bg-white'>
                <p className='bg-dark text-white rounded-end-5 py-3 px-4' style={{fontSize: '14px', width: 'fit-content'}}>Properties for short term rent</p>
            </div>
            <div className='btm d-flex align-items-center justify-content-between mb-2'>
                <p><span>1 - 1</span> out of <span>1</span></p>
                <form>
                    <select className='rounded-5'>
                        <option value="Default order">Default order</option>
                        <option value="Date">Date</option>
                        <option value="Ascending Price">Ascending Price</option>
                        <option value="Descending Price">Descending Price</option>
                    </select>
                </form>
            </div>
            <div className="shortterm-fav">
                <ShortTermFavorites />
            </div>
        </Container>
    </div>
  )
}

export default Favorites