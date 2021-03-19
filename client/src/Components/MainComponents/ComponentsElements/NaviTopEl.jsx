import React from 'react'
import { Link } from 'react-router-dom'

import './../../../styles/NaviTopEl.scss'

const NaviTopEl = ({linkUrl, linkText}) => {
    return(
        <li className="nav-top-element">
          <Link to={linkUrl} className='nav-top-element--link'>{linkText}</Link>
        </li>
    )
}

export default NaviTopEl