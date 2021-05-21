import React, { useState } from 'react'
import {useDispatch} from 'react-redux'

import './menageAccountButton.scss'

import AccountCircleIcon from "@material-ui/icons/AccountCircle"
import { ButtonDark } from './Buttons'

const MenageAccountButton = () => {

  const [active] = useState(true)
  const dispatch = useDispatch()

  const accountButtonExtendHandler = (event) => {
    const button = event.target
    let height = 100

    button.style.height = `${height}px`
  }

  const accountButtonShortenHandler =  (event) => {
    const button = event.target
    let height = 30
    button.style.height = `${height}px`
  }

  return (
    <div
      className="account-section"
      onMouseEnter={event => accountButtonExtendHandler(event)}
      onMouseLeave={event => accountButtonShortenHandler(event)}
    >
      <div className="account-section__header">
        <AccountCircleIcon className="account-section__header-icon"/>
        <span className="account-section__header-text">Manage Account</span>
      </div>
      {active ?
        <ButtonDark
          btnId="sign-in-button"
          btnTitle="Sing In"
          click={() => dispatch({type: 'app/showUserSignInModal'})}
        />
        : null}
      {active ?
        <ButtonDark
          btnid="sign-up-button"
          btnTitle="Sing Up"
          click={() => dispatch({type: 'app/showUserSignUpModal'})}
        />
        : null}
    </div>
  )
}

export default MenageAccountButton