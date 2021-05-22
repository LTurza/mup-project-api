 import React, { useState } from 'react'
import {useDispatch} from "react-redux";
import axios from 'axios'
import './signUpPanel.scss'
import { FormTextField, FormPasswordField } from './../../FormFields/FormFields'
import { ButtonPriamry, ButtonSecondary } from './../../Buttons/Buttons'
import CloseIcon from '@material-ui/icons/Close';

const UserSignUp = () => {
  const [ state, setState ] = useState({})
  const dispatch = useDispatch()

  const updateState = (event, fieldName) => {
    setState({ ...state, [fieldName]: event })
    console.log(state)
  }

  const isPasswordIdentical = () => state.password === state.repeatPassword

  const submitData = async () => {
    const isPasswordValid = isPasswordIdentical()
    if (isPasswordValid) {
      try {
        await axios.post('http://localhost:5000/user/signUp', {
          firstName: state.firstName,
          lastName: state.lastName,
          email: state.email,
          password: state.password,
        })
      } catch (error) {
        console.error(error)
      }
    } else {
      console.error('Incorrect Password')
    }
  }

  return(
   <div className="registration-panel__overlay">
      <div className="registration-panel__modal">
      <CloseIcon
        className="close-panel"
        onClick={ () => dispatch({ type: 'modal/closeUserSignUpModal' }) }
      />
      <h2 className="registration-panel__modal-header">Sign Up</h2>
      <div className="registration-panel__modal-form">
        <FormTextField 
          label="First Name"
          fieldName='firstName'
          dataHandler={ (event, fieldName) => updateState(event, fieldName) }
        />
        <FormTextField
          label="Last Name"
          fieldName='lastName'
          dataHandler={ (event, fieldName) => updateState(event, fieldName) }
        />
        <FormTextField
          label="Email"
          fieldName='email'
          dataHandler={ (event, fieldName) => updateState(event, fieldName) }
        />
        <FormPasswordField
          label="Password"
          fieldName='password'
          dataHandler={ (event, fieldName) => updateState(event, fieldName) }
        />
        <FormPasswordField
          label="Repeat password"
          fieldName='repeatPassword'
          dataHandler={ (event, fieldName) => updateState(event, fieldName) }
        />
      </div>
      <div className="registration-panel__modal-actions">
        <ButtonSecondary
          btnTitle='Sign In'
          classCss="btn-smaller"
          click={ () => dispatch({ type: 'modal/openUserSignInModal' }) }
        />
        <ButtonPriamry
          btnType='submit'
          btnTitle='Register'
          click={ () => submitData() }
          classCss="btn-smaller"  
        />
      </div>
    </div>
   </div>
  )
}

export default UserSignUp