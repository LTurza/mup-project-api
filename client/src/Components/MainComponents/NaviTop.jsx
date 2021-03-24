import React from 'react'

import './../../styles/NavTop.scss'
import logo from './../../assets/logo.png'
import NaviTopEl from './ComponentsElements/NaviTopEl'
import MenageAccountButton from "./ComponentsElements/MenageAccountButton";

const NaviTop = ({userModalHandler}) => {
  return (
    <header className="nav-top">
          <img src={logo} alt="" className="nav-top__logo"/>
          <ul className="nav-top__navigation">
            <NaviTopEl linkUrl="/" linkText="Home"/>
            <NaviTopEl linkUrl="/about" linkText="About"/>
            <NaviTopEl linkUrl="/resources" linkText="Resources"/>
          </ul>
          <MenageAccountButton userModalHandler={userModalHandler}/>
    </header>
    )
}

export default NaviTop