import React from 'react'
import { useDispatch } from 'react-redux'
import { ButtonPriamry } from './Buttons'

const OrganizationToolbar = () => {
  const dispatch = useDispatch()
  return (
    <div className ="organizations__toolbar">
      <h1>My Organizations</h1>
      <div className="actions">
        <ButtonPriamry btnTitle="New Organization" click={ () => dispatch({type: "app/showOrganizationAddModal"})}/>
        <ButtonPriamry btnTitle="Find Organization" click=""/>
      </div>
    </div>
  )
}

export default OrganizationToolbar