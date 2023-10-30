import React from 'react'
import amazon from '../amazon_logo.png'
import search from '../search.png'
import '../css/Header.css'

function Header() {
  return (
    <nav className="header__navbar">
        <img src={amazon} className="header__logo" alt="logo"></img>
        <div className='header__info'>
            <span className='header__info__1'>Deliver to Selvaraj</span>
            <span className='header__info__2'>Erode 638052</span>
        </div>
        <div className="header__search">
            <input type='text' className='header__searchbar'></input>
            <img src={search} className='header__searchbutton'></img>
        </div>
        <div className="header__rightnav">
            <div className='header__info'>
                <span className='header__info__1'>Hello, Vijayvignesh</span>
                <span className='header__info__2'>Accounts & Lists</span>
            </div>
        </div>
    </nav>
  )
}

export default Header