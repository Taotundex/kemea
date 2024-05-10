import React, { useRef, useEffect } from 'react'
import './HomeContent.css'
import Container from 'react-bootstrap/Container';
import { IoFilterOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { Link } from 'react-router-dom';
import $ from 'jquery'; // Import jQuery (ensure it's installed)
// import 'select2/dist/css/select2.min.css'; // Import Select2 CSS

function HomeContent() {
    // const [isSelect, setIsSelect] = useState(false);
    // const handleSelectClick = () => {
    //     setIsSelect(!isSelect);
    // };
    const selectRef = useRef(null);

  useEffect(() => {
    // Initialize Select2
    $(selectRef.current).select2();

    // Ensure to destroy Select2 on component unmount to avoid memory leaks
    return () => {
      $(selectRef.current).select2('destroy');
    };
  }, []); // Run only once on component mount
  return (
    <div className='homepage'>
        <Container>
            <div className="py-4">
                <h2>Find the right property, right away</h2>
                <p>Kemea supports your property research in Israel at every stage</p>
            </div>
            <div className='d-flex gap-5 lists sticky-top py-3 bg-white'>
                <div className='firstList'>
                    <div className='d-flex gap-3 listing'>
                        <form className='d-flex align-items-center border-1 border-black rounded-5 form' >
                            <IoSearchOutline className="custom-icon" />
                            <input type='text' name='search' id='search' placeholder='In what city?' />
                        </form>
                        <div className='d-flex buy'>
                            <Link to='/home' className='text-decoration-none'><button className='rounded-start-5 bg-dark text-white'>Buy</button></Link>
                            <Link to='/rent-home' className='text-decoration-none'><button className='rounded-end-5'>Rent</button></Link>
                        </div>
                        {/* <div className="select">
                            <div className="options">
                                <div className="d-flex align-items-center justify-content-between hometype" onClick={handleSelectClick}>
                                    Home Type
                                    <IoIosArrowDown />
                                </div>
                                {
                                    isSelect ? 
                                <div className="selection">
                                    <label className='d-flex gap-2' htmlFor="apartment">
                                        <input type="checkbox" name="apartment" id="apartment" />
                                        Apartment
                                    </label>
                                    <label className='d-flex gap-2' htmlFor="Penthouse">
                                        <input type="checkbox" name="Penthouse" id="Penthouse" />
                                        Penthouse
                                    </label>
                                    <label className='d-flex gap-2' htmlFor="Private house">
                                        <input type="checkbox" name="private-house" id="private-house" />
                                        Private house
                                    </label>
                                </div>
                                : 
                                ''
                            }
                            </div>
                        </div> */}
                        <form className='select'>
                            <select ref={selectRef} className='select' style={{width: '150px', height: '100%'}}>
                                <option value="apartment">
                                    <label htmlFor="apartment" className='d-flex'>
                                        <input type="checkbox" id="apartment1" name="apartment1" value="apartment1" />
                                        Apartment 1
                                    </label>
                                </option>
                                <option value="apartment">
                                    <label htmlFor="apartment" className='d-flex'>
                                        <input type="checkbox" id="apartment1" name="apartment1" value="apartment1" />
                                        Apartment 1
                                    </label>
                                </option>
                                <option value="apartment">
                                    <label htmlFor="apartment" className='d-flex'>
                                        <input type="checkbox" id="apartment1" name="apartment1" value="apartment1" />
                                        Apartment 1
                                    </label>
                                </option>
                            </select>
                            {/* <select className='select'>
                                <option value='select'>
                                    <label htmlFor="apartment1" className='d-flex'>
                                        <input type="checkbox" id="apartment1" name="apartment1" value="apartment1" />
                                        Apartment 1
                                    </label>
                                </option>
                            </select> */}
                        </form>
                        <div className='select'>
                        <select ref={selectRef} id='select' style={{width: '150px', height: '100%'}}>
                                <option value='select'>Price Range</option>
                            </select>
                        </div>
                        <div className='d-flex align-items-center justify-content-center gap-2 myfilter rounded-5'>
                            <IoFilterOutline className="custom-icon" />All filter
                        </div>
                        <div className='searchBtn'>
                            <button className='btn btn-primary rounded-5 d-flex align-items-center justify-content-center gap-2' variant="btn">
                                <IoSearchOutline className="custom-icon" />
                                Search
                            </button>
                        </div>
                    </div>
                </div>
                <div className='secondList'>
                    <div className='d-flex gap-3'>
                        <button className="btn text-white bg-dark border-dark rounded-5 d-flex d-flex align-items-center justify-content-center gap-2">
                            <IoMdNotificationsOutline className="custom-icon" />Add an alert
                        </button>
                        <div className="d-flex align-items-center justify-content-center gap-2">
                            <Link to='' className='text-dark text-decoration-none'>
                                List
                            </Link>
                            <div className="vr"></div>
                            <Link to='' className='text-dark text-decoration-none'>
                                Map
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='btm d-flex align-items-center justify-content-between py-3'>
                <p><span>1 - 8</span> out of <span>2000</span></p>
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

export default HomeContent