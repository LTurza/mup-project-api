import React from 'react'
import { Link } from 'react-router-dom'
import './NaviTop.scss'
const NaviTopEl = ({linkUrl, linkText}) => {
    return(
        <li className="nav-top__navigation-list-element">
          <Link to={linkUrl}>{linkText}</Link>
        </li>
    )
}

export default NaviTopEl