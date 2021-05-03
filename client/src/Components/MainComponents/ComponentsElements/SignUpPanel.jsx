import React, {useState} from 'react'
import {useDispatch} from "react-redux";
import axios from 'axios'
import './signUpPanel.scss'
import { ModalTextField, ModalPasswordField } from './ModalFields'
import { ButtonPriamry, ButtonSecondary } from './Buttons'
import CloseIcon from '@material-ui/icons/Close';

const UserSignUp = () => {
  const [state, setState] = useState({})
  const dispatch = useDispatch()

  const updateState = (event, fieldName) => {
    setState({...state, [fieldName]: event})
    console.log(state)
  }

  const isPasswordIdentical = () => state.password === state.repeatPassword

  const submitData = async () => {
    const isPasswordValid = isPasswordIdentical()
    if (isPasswordValid) {
      try {
        await axios.post('http://localhost:5000/user/signUp', {
          firstName: state.firstName,
          lastName: state.lastName,
          email: state.email,
          password: state.password,
        })
      } catch (error) {
        console.error(error)
      }
    } else {
      console.error('Incorrect Password')
    }
  }

  return(
    <div className="registration-panel">
      <CloseIcon
        className="close-panel"
        onClick={() => dispatch({type: 'app/hideUserSignUpModal'})}
      />
      <h2 className="registration-panel__header">Sign Up</h2>
      <ModalTextField label="First Name" fieldName='firstName' dataHandler={(event, fieldName) => updateState(event, fieldName)}/>
      <ModalTextField label="Last Name" fieldName='lastName' dataHandler={(event, fieldName) => updateState(event, fieldName)}/>
      <ModalTextField label="Email" fieldName='email' dataHandler={(event, fieldName) => updateState(event, fieldName)}/>
      <ModalPasswordField label="Password" fieldName='password' dataHandler={(event, fieldName) => updateState(event, fieldName)}/>
      <ModalPasswordField label="Repeat password" fieldName='repeatPassword' dataHandler={(event, fieldName) => updateState(event, fieldName)}/>
      <div className="registration-panel__actions">
        <ButtonPriamry btnType='submit' btnTitle='Register' click={() => submitData()}/>
        <ButtonSecondary btnType='reset' btnTitle='Sign In' />
      </div>
    </div>
  )
}

export default UserSignUp