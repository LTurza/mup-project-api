import React from 'react'
import { useSelector } from 'react-redux'
import './navTop.scss'
import logo from './../../assets/logo.png'
import NaviTopEl from './ComponentsElements/NaviTopEl'
import MenageAccountButton from "./ComponentsElements/MenageAccountButton";

const userDataStore = state => state.user

const NaviTop = () => {
  const storedUserData = useSelector(userDataStore)
  return (
    <header className="nav-top">
          <img src={logo} alt="" className="nav-top__logo"/>
          <ul className="nav-top__navigation">
            <NaviTopEl linkUrl="/" linkText="Home"/>
            <NaviTopEl linkUrl="/about" linkText="About"/>
            {storedUserData.token ? <NaviTopEl linkUrl="/organizations" linkText="Organizations"/> : null}
          </ul>
          <MenageAccountButton />
    </header>
    )
}

export default NaviTop