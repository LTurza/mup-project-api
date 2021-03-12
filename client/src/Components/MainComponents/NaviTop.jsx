import React from 'react'

import './NaviTop.scss'
import logo from './../../assets/logo.png'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';

import NaviTopEl from './NaviTopEl'

const NaviTop = ({screen, mobileNaviHandler, accountManagmrntHandler}) => {
  return (
    <header className="nav-top">
      {/* <img className="nav-top__logo" src="" alt="logo" /> */}
      {
        screen.screenWidth > 670
        ?
        <nav className="nav-top__navigation">
        <ul className="nav-top__navigation-list">
          <NaviTopEl linkUrl = '/' linkText = 'Home'/>
          <NaviTopEl linkUrl = '/resources' linkText = 'Project resources'/>
          <NaviTopEl linkUrl = '/about' linkText = 'About'/>
        </ul>
        <ul className="nav-top__navigation-list">
          <li className="nav-top__navigation-list-element" >
            <button className="nav-top__navigation-list-element-button">
              <AccountCircleIcon className="nav-top__navigation-button-account"/>
              <span className="nav-top__navigation-button-text">Manage Account</span>
            </button>
          </li>
        </ul>
      </nav>
      :
      <nav className="nav-top__mobile-navigation" onClick= {() => mobileNaviHandler()}>
        <MenuIcon className="nav-top__mobile-navigation-menu"/>
      </nav>
      }
    </header>
    )
}

export default NaviTop