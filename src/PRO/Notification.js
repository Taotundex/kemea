import React from 'react'
import'./Notification.css'
import { BiSearch } from 'react-icons/bi'
import tick from '../images/tick.svg'
import { Link } from 'react-router-dom'

function Notification() {
  return (
    <div className='notification' style={{overflowX: 'hidden',marginTop: '70px'}}>
        <div className="container my-5">
            <h3>Toutes les notifications</h3>
            <form action="">
                <div className="together d-flex align-items-center px-2">
                    <BiSearch />
                    <input type="text" name="search" id="search" placeholder='Rechercher dans les notifications' />
                </div>
            </form>
            <div className="text-center my-5">
                <img src={tick} alt="" className='mb-4' />
                <h5>Aucune nouvelle notification</h5>
                <p>Nous vous souhaitons Bea’tslaha dans vos projets </p>
                <Link to='/pro-home' className='text-decoration-none'><button>Retourner à la page d’accueil</button></Link>
            </div>
        </div>
    </div>
  )
}

export default Notification