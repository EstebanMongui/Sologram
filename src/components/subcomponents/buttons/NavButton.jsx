import React from 'react'
import { Link } from 'react-router-dom'
import '../../../assets/css/NavButton.css'

const NavButton = ({ iconClass, text, path }) => {
  return (
    <button className='nav-button__wrapper'>
      <Link to={ path }>
        <i className={ iconClass }>{ text }</i>
      </Link>
    </button>
  )
}

export default NavButton