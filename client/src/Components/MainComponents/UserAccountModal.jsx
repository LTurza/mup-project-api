import React from 'react'

import './UserAccountModal.scss'
import UserRegistrationModal from './UserRegistrationModal'

const UserAccountModal = ({activeUserAccountModal, activeAlert}) => {

  return (
    <div className="modal-overlay">
      <div className="modal">
      {activeUserAccountModal.signUp 
      ?
        <UserRegistrationModal activeAlert={activeAlert}/>
      :
      null
      }
      </div>
    </div>
    )
}

export default UserAccountModal