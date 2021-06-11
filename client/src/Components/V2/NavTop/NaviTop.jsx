 import React from 'react'
import './navTop.scss'
import logo from './../../../assets/logo.png'


const NaviTop = () => {
  return (
    <header className="nav-top">
          <img src={ logo } alt="" className="nav-top__logo"/>
    </header>
    )
}

export default NaviTop