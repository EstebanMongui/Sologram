import React from 'react'
import NavButton from './subcomponents/buttons/NavButton'
import '../assets/css/Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar__wrapper bt b--black-30'>
        <NavButton iconClass={'icon-home'} path='/'/>
        <NavButton text={'+'} path='/new-post'/>
    </div>
  )
}

export default Navbar