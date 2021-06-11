import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './newOrganization.scss'
import { FormTextField } from './../../FormFields/FormFields'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CloseIcon from '@material-ui/icons/Close';
import { useDispatch, useSelector } from 'react-redux'
import { ButtonPriamry } from './../../Buttons/Buttons' 

const userSelector = state => state.user

const NewOrganization = ({ fetchOrganizationData }) => {
  const [newOrganization, setNewOrganization] = useState({
    email: '',
    organizationName: '',
    organizationLogoUrl: '',
    members: [],
  })
  const dispatch = useDispatch()
  const user = useSelector(userSelector)
  const setData = (data, name) => {
    setNewOrganization({...newOrganization, [name]: data})
  }
  const addUser = async() => {
    const userId = await axios.get('http://localhost:5000/user/fetchUserId', {params: {email: newOrganization.email}})
    const newMember = userId.data
    if(!newOrganization.members.includes(newMember)) {
      newOrganization.members.push({
        userId: userId.data,
        userEmail: newOrganization.email,
      })
      newOrganization.email = ''
    }
  }

  const renderMembers = newOrganization.members.map(elem => {
    return (
      <div className="new-organization__modal-member-box" key={elem.userId}>
        <p>{elem.userEmail}</p>
        <CloseIcon />
      </div>
    )
  })
  const addOrganization = async () => {
    newOrganization.members.push({userId: user.id, userEmali: user.email})
    const response = await axios.post('http://localhost:5000/organization/newOrganization', {
      organizationName: newOrganization.organizationName,
      adminId:user.id,
      members: newOrganization.members.map(elem => elem.userId),
      organizationLogo: newOrganization.organizationLogoUrl,
      token: user.token
    })
    if (response.status === 201) {
      dispatch({type: 'modal/closeNewOrganization'})
      fetchOrganizationData()
    }
  }

  useEffect(() => {
  },[newOrganization.email])
  return (
    <div className="new-organization__overlay">
      <div className="new-organization__modal">
        <CloseIcon
          className="new-organization__modal-close"
          onClick={() => dispatch({type: 'modal/closeNewOrganization'})}/>
        <h1 className="new-organization__modal-header">New Organization</h1>
        <FormTextField 
          fieldName="organization-name"
          label="Organization name" 
          dataHandler={(event) => setData(event, 'organizationName')}
          value={newOrganization.organizationName}
        />
        <FormTextField
          fieldName="organization-logo"
          label="Organization logo URL" 
          dataHandler={(event) => setData(event, 'organizationLogoUrl')}
          value={newOrganization.organizationLogoUrl}
          />
        <div className="new-organization__modal-members">
          <FormTextField
            fieldName="organization-name"
            label="Add embers"
            dataHandler={(event) => setData(event, 'email')}
            value={newOrganization.email}
           />
          <AddCircleIcon
            className="new-organization__modal-members-icon"
            onClick={ () => addUser()}
          />
        </div>
        <div className="new-organization__modal-members-included">
          {renderMembers}
        </div>
        <ButtonPriamry btnTitle="Add" click={addOrganization}/>
      </div>
    </div>
  )
}

export default NewOrganization