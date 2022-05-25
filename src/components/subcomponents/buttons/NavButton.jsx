import React from 'react'
import { NavLink } from 'react-router-dom'
import '../../../assets/css/NavButton.css'

const NavButton = ({ iconClass, text, path }) => {

  return (
    <button className='nav-button__wrapper'>
      <NavLink
        activeClassName="active"
        to={ path }
      >
        {
          !!text
          ?
          <div className={ `icon nav-button__text` }>{ text }</div>
          :
          <i className={ `${iconClass} icon` }></i>
        }
      </NavLink>
    </button>
  )
}

export default NavButton