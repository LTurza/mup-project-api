import React from 'react'
import './organizationsMobileToolbar.scss'
import { ButtonPriamry, ButtonSecondary } from './../Buttons/Buttons'
 
const OrganizationsMobileToolbar = ({ img, header }) => {
  return (
    <div className="organizations__container">
      <img className="organizations__container-img" src={ img } alt="img"/>
      <div className="organizations__container-content">
        <h1 className="organizations__container-header"> { header } </h1>
        <div className="organizations__container-actions">
          <ButtonPriamry btnTitle="New Organization" classCss="btn-smaller-toolbar" />
          <ButtonSecondary btnTitle="Delete" classCss="btn-smaller-toolbar" />
        </div>
      </div>
    </div>
  )
}

export default OrganizationsMobileToolbar