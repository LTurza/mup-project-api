import React from 'react'
import './mobileMenu.scss'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import HomeIcon from '@material-ui/icons/Home';
import BuildIcon from '@material-ui/icons/Build';
import InfoIcon from '@material-ui/icons/Info';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import GroupIcon from '@material-ui/icons/Group';

const userSelector = state => state.user

const MobileMenu = () => {
  const dispatch = useDispatch()
  const user = useSelector(userSelector)
  const logout = () => {
    dispatch({type: 'modal/closeMobileMenu'})
    sessionStorage.clear()
    dispatch({type: 'user/logout'})
  }
  return (
    <div className='mobile-menu'>
      <h1 className='mobile-menu__header'>MENU</h1>
      {user.token ? 
        <ul className="mobile-menu-logged-in__list">
        <li className="mobile-menu-logged-in__list-item">
          <NavLink
            to="/"
            className='mobile-menu__list-item--link'
            onClick={ () => dispatch({ type: 'modal/closeMobileMenu' }) }
          >
            <div className="mobile-menu-logged-in__list-item__box">
              <HomeIcon className="mobile-menu-logged-in__list-item__box-icon" />
            </div>
            <p>Home</p>
          </NavLink>
        </li>
        <li className="mobile-menu-logged-in__list-item">
            <NavLink
            to="/about"
            className='mobile-menu__list-item--link'
            onClick={ () => dispatch({ type: 'modal/closeMobileMenu' }) }
          >
            <div className="mobile-menu-logged-in__list-item__box">
              <InfoIcon className="mobile-menu-logged-in__list-item__box-icon" />
            </div>
            <p>About</p>
          </NavLink>
        </li>
        <li className="mobile-menu-logged-in__list-item">
          <NavLink
            to="/resources"
            className='mobile-menu__list-item--link'
            onClick={ () => logout() }
          >
            <div className="mobile-menu-logged-in__list-item__box">
              <BuildIcon className="mobile-menu-logged-in__list-item__box-icon" />
            </div>
            <p>Resources</p>
          </NavLink>
        </li>
        <li className="mobile-menu-logged-in__list-item">
            <NavLink
            to="/organizations"
            className='mobile-menu__list-item--link'
            onClick={ () => dispatch({ type: 'modal/closeMobileMenu' }) }
          >
            <div className="mobile-menu-logged-in__list-item__box">
              <GroupIcon className="mobile-menu-logged-in__list-item__box-icon" />
            </div>
            <p>Organizations</p>
          </NavLink>
        </li>
        <li className="mobile-menu-logged-in__list-item">
          <NavLink
            to="/account"
            className='mobile-menu__list-item--link'
            onClick={ () => dispatch({ type: 'modal/closeMobileMenu' }) }
          >
            <div className="mobile-menu-logged-in__list-item__box">
              <AccountBoxIcon className="mobile-menu-logged-in__list-item__box-icon" />
            </div>
            <p>My Account</p>
          </NavLink>
        </li>
        <li className="mobile-menu-logged-in__list-item">
          <NavLink
            to="/"
            className='mobile-menu__list-item--link'
            onClick={ () => logout() }
          >
            <div className="mobile-menu-logged-in__list-item__box">
              <ExitToAppIcon className="mobile-menu-logged-in__list-item__box-icon" />
            </div>
            <p>Logout</p>
          </NavLink>
        </li>
        </ul>
       :
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
    }
    </div>
  )
}

export default MobileMenu