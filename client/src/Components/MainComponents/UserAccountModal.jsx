import React from 'react'

import './UserAccountModal.scss'

import UserSignIn from './ComponentsElements/UserSignIn'
import UserSignUp from './ComponentsElements/UserSignUp'

const UserAccountModal = ({signIn, signUp}) => {


  return (
    <div className="modal-overlay">
      {signIn ? <UserSignIn /> : null}
      {signUp ? <UserSignUp /> : null}
    </div>
    )
}

export default UserAccountModal