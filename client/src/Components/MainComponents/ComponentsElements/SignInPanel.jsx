import React, { useState } from 'react'
import {useDispatch} from "react-redux";
import axios from 'axios'
import jwt from 'jsonwebtoken'

import './signInPanel.scss'

import { ModalTextField, ModalPasswordField } from './ModalFields'
import { ButtonPriamry, ButtonSecondary } from './Buttons'
import CloseIcon from '@material-ui/icons/Close';

const UserSignIn = () => {
  const [userEmail, setUserEmail] = useState('')
  const [userPassword, setUserPassword] = useState('')
  const [userAuthorization, setUserAuthorization] = useState(false)

  const dispatch = useDispatch()

  const sendPostUserLoginData = async () => {
    const userData = {
      email: userEmail,
      password: userPassword
    }
    const response = await axios.post('http://localhost:5000/login', userData)
    console.log(jwt.decode(response.data))

  }

    return (
      <div>
        <div className="login-panel">
          <CloseIcon
            className="close-panel"
            onClick={() => dispatch({type: 'app/hideUserSignInModal'})}
          />
          <h2 className="login-panel__header">Sign In</h2>
          <ModalTextField
            classCss="login-panel__email"
            label="Email" fieldName="email"
            dataHandler={setUserEmail}
          />
          <ModalPasswordField
            classCss="login-panel__password"
            label="Password" fieldName="password"
            dataHandler={setUserPassword}
          />
          <div className="login-panel__actions">
            <ButtonPriamry
              btnTitle="Log In"
              click={() => sendPostUserLoginData()}/>
            <ButtonSecondary
              btnTitle="Sign Up"
              click={() => dispatch({type: 'app/showUserSignUpModal'})}/>
          </div>
        </div>
      </div>
    )
}

export default UserSignIn