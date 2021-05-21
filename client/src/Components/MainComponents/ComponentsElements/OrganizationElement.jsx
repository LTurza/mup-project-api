import React, { useState } from 'react'
import './organizationElement.scss'
import logo from './../../../assets/org-logo.jpeg'
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import PeopleIcon from '@material-ui/icons/People';
import AppsIcon from '@material-ui/icons/Apps';

const OrganizationEmelent = () => {
  const [showUsers, setShowUsers] = useState(false)
  return (
  <li className="organizations-elem">
    <div className="organizations-elem__info">
      <img src={logo} alt="org-logo" className="organizations-elem__info-logo" />
      <h1 className="organizations-elem__info-header">Organization Name</h1>
    </div>
    <div className="organizations-elem__actions" >
      <PersonAddIcon className="organizations-elem__actions-add-member"/>
      <PeopleIcon className="organizations-elem__actions-show-members" onClick={() => setShowUsers(true)} />
      <AppsIcon className="organizations-elem__actions-show-teams" />
    </div>
    {showUsers ?
    <div className="organizations-elem__users">
      <h2></h2>
    </div>
    : null}
  </li>
  )
}

export default OrganizationEmelent