 import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios'

import './signInPanel.scss'

import { FormTextField, FormPasswordField } from './../../FormFields/FormFields'
import { ButtonPriamry, ButtonSecondary } from './../../Buttons/Buttons'
import CloseIcon from '@material-ui/icons/Close';

const userSelector = state => state.user

const UserSignIn = () => {
  const [ userEmail, setUserEmail ] = useState('')
  const [ userPassword, setUserPassword ] = useState('')
  const user = useSelector(userSelector)
  const dispatch = useDispatch()

  const sendPostUserLoginData = async () => {
    const userData = {
      email: userEmail,
      password: userPassword
    }
    let response = {}
    try {
      response = await axios.post('http://localhost:5000/auth/login', userData)
    } catch (error) {
      console.log('incorrect data')
      console.log(response)
      dispatch({ type: 'modal/openInvalidUserData' })
    }
    if (response.status === 200){
      sessionStorage.setItem('auth-token', JSON.stringify(response.data))
      dispatch({ type: 'user/login', payload: { ...response.data } })
      dispatch({ type: 'modal/closeUserSignInModal' })
    }
  }

    return (
      <div className="login-panel__overlay">
        <div className="login-panel__modal">
          <CloseIcon
            className="close-panel"
            onClick={() => dispatch({ type: 'modal/closeUserSignInModal' })}
          />
          <h2 className="login-panel__modal-header">Sign In</h2>
         <div className="login-panel__modal-form">
          <FormTextField
              classCss="login-panel__email"
              label="Email" fieldName="email"
              dataHandler={ setUserEmail }
            />
            <FormPasswordField
              classCss="login-panel__password"
              label="Password" fieldName="password"
              dataHandler={ setUserPassword }
            />
         </div>
          <div className="login-panel__modal-actions">
            <ButtonSecondary
              btnTitle="Sign Up"
              click={ () => dispatch({ type: 'modal/openUserSignUpModal' }) }
              classCss="btn-smaller"
            />
            <ButtonPriamry
              btnTitle="Log In"
              click={ () => sendPostUserLoginData() }
              classCss="btn-smaller"
            />
          </div>
        </div>
      </div>
    )
}

export default UserSignIn