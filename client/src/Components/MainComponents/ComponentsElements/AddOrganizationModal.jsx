import React, { useState } from 'react';
import { ModalTextField } from './ModalFields'
import './addOrganizationModal.scss'

const AddOrganizationModal = () => {
  const [organiazationData, setOrganizationData] = useState({})

  const setData = (event, label) => {
    setOrganizationData({...organiazationData, [label]: event})
    console.log(organiazationData);
  }
  return (
    <div className="overlay">
      <div className="add-organization-modal">
        <h1>Add new organization</h1>
        <ModalTextField fieldName="organizaton-name" label="Organizaton name" dataHandler={(event) => setData(event, "organizationName")} />
        <ModalTextField fieldName="add-users"  label="Add Users" dataHandler={(event) => setData(event, "users")} />
      </div>
    </div>
  )
}

export default AddOrganizationModal