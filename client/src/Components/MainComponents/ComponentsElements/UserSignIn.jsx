import React, { useState, useEffect } from 'react'
import axios from 'axios'

import './../../../styles/SignInPanel.scss'

import { ModalEmailField, ModalPasswordField } from './ModalFields'
import { ButtonPriamry, ButtonSecondary } from './Buttons'

const UserSignIn = () => {
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
      <div className="login-panel">
        <h2 className="login-panel__header">Sign In</h2>
        <ModalEmailField  classCss="login-panel__email" label="Email" fieldName="email" userDataHandler={setUserEmail}/>
        <ModalPasswordField  classCss="login-panel__password" label="Password" fieldName="password" userDataHandler={setUserPassword}/>
       <div className="login-panel__actions">
       <ButtonPriamry  btnTitle="Log In" click={() => sendPostUserLoginData()}/>
       {/* <ButtonSecondary  btnTitle="Sign Up" click={() => }/> */}
       </div>

      </div>
    )
}

export default UserSignIn