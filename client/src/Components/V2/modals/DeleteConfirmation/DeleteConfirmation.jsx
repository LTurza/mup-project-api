import React from 'react'
import './deleteConfirmation.scss'
import { ButtonPriamry, ButtonSecondary } from './../../Buttons/Buttons'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'


const organizationsSelector = state => state.organizations
const userSelector = state => state.user

const DeleteConfirmation = (props) => {
  const dispatch = useDispatch()
  const organizations = useSelector(organizationsSelector)
  const user = useSelector(userSelector)

  const deleteOrganization = async () => {
    await axios.delete('http://localhost:5000/organization/deleteOrganizations', {
      data: {
        organizations: organizations.organizationsToDelete,
        userId: user.id
      }
    })
    props.fetchOrganizationData()
    dispatch({type: 'modal/closeOrganizationDeleteConfirmation'})
  }

  return (
    <div className="delete-confirmation__overlay">
      <div className="delete-confirmation__modal">
        <h1 className="delete-confirmation__modal-header">CONFIRMATION</h1>
        <p className="delete-confirmation__modal-text">Are you sure, you want to delete { props.itemCount } {props.itemCount === 1 ? 'item?' : 'items?'}</p>
        <div className="delete-confirmation__modal-actions">
          <ButtonSecondary
            btnTitle="NO"
            classCss="btn-smaller-toolbar"
            click={ () => dispatch({type: 'modal/closeOrganizationDeleteConfirmation'})}
          />
          <ButtonPriamry
            btnTitle="YES"
            classCss="btn-smaller-toolbar"
            click={ () => deleteOrganization()}
          />
        </div>
      </div>
    </div>
  )
}

export default DeleteConfirmation