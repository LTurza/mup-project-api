import React from 'react';
import './invalidUserData.scss'
import { ButtonPriamry, ButtonSecondary } from './../../Buttons/Buttons'
import { useDispatch } from 'react-redux'

const InvalidUserData = () => {
  const dispatch = useDispatch()
  return (
    <div className="invalid-user-data__overlay">
      <div className="invalid-user-data__modal">
        <h1 className="invalid-user-data__modal-header">Invalid Email or Password!</h1>
        <div className="invalid-user-data__modal-actions">
          <ButtonSecondary
            btnTitle="SignUp"
            click={ () => dispatch({type: 'modal/openUserSignUpModal'})}
            classCss="btn-smaller"
          />
          <ButtonPriamry
            btnTitle="Close"
            click={ () => dispatch({type: 'modal/closeInvalidUserData'}) }
            classCss="btn-smaller"
          />
        </div>
      </div>
    </div>
  )
}

export default InvalidUserData