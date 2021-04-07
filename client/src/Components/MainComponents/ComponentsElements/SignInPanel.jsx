import React, { useState } from 'react'
import axios from 'axios'

import './signInPanel.scss'

import { ModalEmailField, ModalPasswordField } from './ModalFields'
import { ButtonPriamry, ButtonSecondary } from './Buttons'
import CloseIcon from '@material-ui/icons/Close';

const UserSignIn = ({userModalHandler}) => {
  const [userEmail, setUserEmail] = useState('')
  const [userPassword, setUserPassword] = useState('')
  const [userAuthorization, setUserAuthorization] = useState(false)

  const sendPostUserLoginData = async () => {
    const userData = {
      email: userEmail,
      password: userPassword
    }
    const response = await axios.post('http://localhost:5000/login', userData)
    await setUserAuthorization(response.data.authorization)
  }
    return (
      <div>
        <div className="login-panel">
          <CloseIcon className="close-panel" onClick={() => userModalHandler('signIn','signUp')}/>
          <h2 className="login-panel__header">Sign In</h2>
          <ModalEmailField  classCss="login-panel__email" label="Email" fieldName="email" dataHandler={setUserEmail}/>
          <ModalPasswordField  classCss="login-panel__password" label="Password" fieldName="password" dataHandler={setUserPassword}/>
          <div className="login-panel__actions">
            <ButtonPriamry  btnTitle="Log In" click={() => sendPostUserLoginData()}/>
            <ButtonSecondary  btnTitle="Sign Up" click={() => userModalHandler('signUp', 'signIn')}/>
        </div>
        </div>
      </div>
    )
}

export default UserSignIn