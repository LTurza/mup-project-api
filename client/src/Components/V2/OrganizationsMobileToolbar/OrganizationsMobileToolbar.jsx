import React from 'react'
import './organizationsMobileToolbar.scss'
import { ButtonPriamry, ButtonSecondary } from './../Buttons/Buttons'
import { useDispatch} from 'react-redux'


const OrganizationsMobileToolbar = ({ img, header }) => {
  const dispatch = useDispatch()

  return (
    <div className="organizations-toolbar__container">
      <img className="organizations-toolbar__container-img" src={ img } alt="img"/>
      <div className="organizations-toolbar__container-content">
        <h1 className="organizations-toolbar__container-header"> { header } </h1>
        <div className="organizations-toolbar__container-actions">
          <ButtonPriamry 
            btnTitle="New Organization"
            classCss="btn-smaller-toolbar"
            click={ () => dispatch({type: 'modal/openNewOrganization'}) }
          />
          <ButtonSecondary
            btnTitle="Delete"
            classCss="btn-smaller-toolbar"
            click={() =>  dispatch({type: 'modal/openOrganizationDeleteConfirmation'})}
          />
        </div>
      </div>
    </div>
  )
}

export default OrganizationsMobileToolbar