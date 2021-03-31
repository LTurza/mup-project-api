import React from 'react'

import './userAccountModal.scss'


import SignInPanel from './ComponentsElements/SignInPanel'
import SignUpPanel from './ComponentsElements/SignUpPanel'

const UserAccountModal = ({activeModal, userModalHandler}) => {
  return (
    <div className="modal-overlay">
      {activeModal.signIn ? <SignInPanel userModalHandler={userModalHandler}/> : activeModal.signUp ? <SignUpPanel /> : null}
    </div>
    )
}

export default UserAccountModal