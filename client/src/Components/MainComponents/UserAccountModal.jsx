import React from 'react'
import {useSelector} from "react-redux";
import './userAccountModal.scss'
import SignInPanel from './ComponentsElements/SignInPanel'
import SignUpPanel from './ComponentsElements/SignUpPanel'

const UserAccountModal = () => {
  const modals = useSelector(state => state.modals)
  return (
    <div className="modal-overlay">
      {modals.signIn
        ? <SignInPanel />
        : modals.signUp
          ? <SignUpPanel />
          : null}
    </div>
    )
}

export default UserAccountModal