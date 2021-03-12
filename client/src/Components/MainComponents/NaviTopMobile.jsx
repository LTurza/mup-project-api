import React from 'react'

import HomeIcon from '@material-ui/icons/Home'
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import InfoIcon from '@material-ui/icons/Info';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import VpnKeyIcon from '@material-ui/icons/VpnKey';

import NaviTopMobileEl from  './NaviTopMobileEl'
import NaviTopMobileUserAction from './NaviTopMobileUserAction'


import './NaviTop.scss'
const NaviTopMaobile = () => {
  return(
    <div className="nav-top-mobile">
      <div className="nav-top-mobile__links">
        <NaviTopMobileEl linkUrl="/" linkText="Home">
          <HomeIcon className="nav-top-mobile__block-icon"/>
        </NaviTopMobileEl>
        <NaviTopMobileEl linkUrl="/" linkText="Resources">
          <AccountTreeIcon className="nav-top-mobile__block-icon"/>
        </NaviTopMobileEl>
        <NaviTopMobileEl linkUrl="/" linkText="About">
          <InfoIcon className="nav-top-mobile__block-icon"/>
        </NaviTopMobileEl>
      </div>

      <NaviTopMobileUserAction btnText='Sign up for free'>
        <AddCircleIcon className="navi-top-mobile__user-icons" />
      </NaviTopMobileUserAction>
      <NaviTopMobileUserAction btnText='Sign in '>
        <VpnKeyIcon className="navi-top-mobile__user-icons" />
      </NaviTopMobileUserAction>

    </div>
  )
}

export default NaviTopMaobile