import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/styles/Header.css'

const Header = () => {
  return (
    <div className='header__wrapper'>
      <Link to='/'>
        <h1 className='header__logo'>Sologram</h1>
      </Link>
    </div>
  )
}

export default Header