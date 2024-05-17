import React, { useState } from 'react'
import '../../HOME/HomeContent.css'
import Container from 'react-bootstrap/Container';


function Study() {
    const [isGot, setIsGot] = useState(false);
    const handleReactionClick = () => {
        setIsGot(!false);
    };
  return (
    <div className='homepage'>
        {isGot ? '' : 
        <div className="py-3 dis" style={{background: '#E9E9E980'}}>
            <div className="d-flex justify-content-between align-items-center container got">
                <p style={{color: '#191C1F', fontSize: '16px', fontWeight: '400', marginTop: '10px'}}>Make your selection by selecting or putting in favorite the properties offered.</p>
                <button onClick={handleReactionClick} className='bg-primary text-light py-2 px-4 rounded-5 border-0'>Got it</button>
            </div>
        </div>
        }
        <Container>
            <div className="py-4">
                <h2>To Study</h2>
            </div>
            <div className='d-flex gap-5 lists sticky-top py-3 bg-white'>
                <p className='bg-dark text-white rounded-end-5 py-3 px-4' style={{fontSize: '14px'}}>Properties for sell</p>
            </div>
            <div className='btm d-flex align-items-center justify-content-between pb-3'>
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
        </Container>
    </div>
  )
}

export default Study