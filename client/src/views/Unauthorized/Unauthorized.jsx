import React from 'react'
import './unauthorized.scss'
import { useDispatch } from 'react-redux'

const Unauthorized = () => {
  const dispatch = useDispatch()
  return(
      <div className="unauthorized">
        <h1 className="unauthorized__header">Unathorized Access!</h1>
        <p className="unauthorized__content">
          Please 
          <span 
          className="unauthorized__content-link" 
          onClick={ () => dispatch({ type: 'modal/openUserSignInModal' }) }>
             Sign In
          </span>
          to Continue
        </p>
      </div>
  )
}

export default Unauthorized