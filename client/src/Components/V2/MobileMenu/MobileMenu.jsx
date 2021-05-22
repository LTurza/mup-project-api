import React from 'react'
import './mobileMenu.scss'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'


const MobileMenu = () => {
  const dispatch = useDispatch()
  return (
    <div className='mobile-menu'>
      <h1 className='mobile-menu__header'>MENU</h1>
      <ul className="mobile-menu__list">
        <li className="mobile-menu__list-item">
          <NavLink
            to="/"
            className='mobile-menu__list-item--link'
            onClick={ () => dispatch({ type: 'modal/closeMobileMenu' }) }
          >
            Home
          </NavLink>
        </li>
        <li className="mobile-menu__list-item">
          <NavLink
            to="/about"
            className='mobile-menu__list-item--link'
            onClick={ () => dispatch({ type: 'modal/closeMobileMenu' }) }  
          >
            About
          </NavLink>
        </li>
        <li 
          className="mobile-menu__list-item"
          onClick={ () => dispatch({ type: 'modal/openUserSignInModal' }) }
        >
          Sign In
        </li>
        <li 
          className="mobile-menu__list-item"
          onClick={ () => dispatch({ type: 'modal/openUserSignUpModal' }) }
        >
          Sign Up
        </li>
      </ul>
    </div>
  )
}

export default MobileMenu