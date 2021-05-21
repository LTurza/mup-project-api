import React from 'react'
import './unauthorized.scss'
import Footer from './../Components/MainComponents/Footer'
import { useDispatch } from 'react-redux'

const Unauthorized = () => {
  const dispatch = useDispatch()
  return(
    <>
      <div className="unauthorized">
        <h1 className="unauthorized__header">Unathorized Access!</h1>
        <p className="unauthorized__content">
          Please 
          <span 
          className="unauthorized__content-link" 
          onClick={() => dispatch({type: 'app/showUserSignInModal'})}>
             Sign In
          </span>
          to Continue
        </p>
      </div>
      <Footer />
    </>
  )
}

export default Unauthorized