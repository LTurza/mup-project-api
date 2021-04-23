import React from 'react'

import './navTop.scss'
import logo from './../../assets/logo.png'
import NaviTopEl from './ComponentsElements/NaviTopEl'
import MenageAccountButton from "./ComponentsElements/MenageAccountButton";

const NaviTop = () => {
  return (
    <header className="nav-top">
          <img src={logo} alt="" className="nav-top__logo"/>
          <ul className="nav-top__navigation">
            <NaviTopEl linkUrl="/" linkText="Home"/>
            <NaviTopEl linkUrl="/about" linkText="About"/>
            <NaviTopEl linkUrl="/resources" linkText="Resources"/>
          </ul>
          <MenageAccountButton />
    </header>
    )
}

export default NaviTop