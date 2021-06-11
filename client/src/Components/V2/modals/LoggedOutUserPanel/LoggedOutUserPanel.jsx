 import React from 'react'
import { useDispatch } from 'react-redux'
import './LoggedOutUserPanel.scss'

const LoggedOutUserPanel = () => {
  const dispatch = useDispatch()
  return (
    <div className="logged-out-user-panel__overlay">
      <div className="logged-out-user-panel__modal">
        <h1 className="logged-out-user-panel__modal-header">Account Options</h1>
        <ul className="logged-out-user-panel__modal-actions">
          <li
            className="logged-out-user-panel__modal-actions--login"
            onClick={ () => dispatch({ type: 'modal/openUserSignInModal' }) }
            >Sign In</li>
          <li 
            className="logged-out-user-panel__modal-actions--register"
            onClick={ () => dispatch({ type: 'modal/openUserSignUpModal' })  }
            >Sign Up</li>
        </ul>
      </div>
    </div>
  )
}

export default LoggedOutUserPanel