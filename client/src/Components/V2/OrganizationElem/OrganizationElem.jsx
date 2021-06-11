import React from 'react'
import './organizationElem.scss'
import { NavLink } from 'react-router-dom'

const OrganizationElem = ({ orgImage, orgName, orgId, checkAction}) => {
  return (
    <div className="organization-elem">
      <NavLink to={'/kanbanBoard/' + orgId} className="organization-elem__link">
        <img src={ orgImage } alt="logo" className="organization-elem__link--img"/>
        <h1 className="organization-elem__link--header"> { orgName }</h1>
      </NavLink>
    <input type="checkbox"
        className="organization-elem--checkbox"
        value={ orgId }
        onChange={ checkAction }
      />
    </div>
  )
}

export default OrganizationElem