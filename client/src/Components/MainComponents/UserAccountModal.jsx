import React from 'react'

import './UserAccountModal.scss'


import UserSignIn from './ComponentsElements/UserSignIn'
import UserSignUp from './ComponentsElements/UserSignUp'

const UserAccountModal = ({activeModal, userModalHandler}) => {
  return (
    <div className="modal-overlay">
      {activeModal.signIn ? <UserSignIn userModalHandler={userModalHandler}/> : activeModal.signUp ? <UserSignUp /> : null}
    </div>
    )
}

export default UserAccountModal