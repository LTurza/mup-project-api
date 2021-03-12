import React, { Component } from 'react'
import { ModalTextField, ModalEmailField, ModalPasswordField }from './ModalFields'
import AlertModal from './Alert'
import axios from 'axios'

class UserRegistration extends Component {
  constructor (props){
    super(props)
    this.state = {
      userData: {
        title:'',
        firstName: 'Adam',
        secondName: 'Kowalski',
        gender:'male',
        email: 'adam.kowalski@gmail.com',
        password: 'qwe123!@#',
        passwordRepeat: 'qwe123!@#',
        dateOfBirth: '',
      },
      activeAlert: props.activeAlert
    }
  }

  userDataHandler = (event,name) => {
    this.setState({...this.state, userData:{
      ...this.state.userData,
      [name]:event.target.value
    }})
    console.log(`event: ${event.target.value}`)
    console.log(`name: ${name}`)
    console.log(`state email: ${this.state.userData.email}`)
  }

  registerUserHandler = () => {
    const userData = this.state.userData
    if(userData.password === userData.passwordRepeat){
      axios.post('http://localhost:5000/user/signUp ', this.state)
      .then(res => console.log(res))
      .catch(err => console.log(err))
    } else {
    this.state.activeAlert()
    }

  }
  passwordHandler = (event) => {

  }

  render() {
    return (
      <div className="registration-modal">
        <h1 className="text-light">Sign Up</h1>
        <br/>
        <div className='header-line'></div>
        <div className="modal-fields">
          <ModalTextField
            fieldValue={this.state.userData.firstName}
            fieldName="firstName"
            placeholder="e.g. Adam"
            label="First name"
            userDataHandler={this.userDataHandler}
          />
          <ModalTextField
            fieldValue={this.state.userData.secondName}
            fieldName="secondName"
            placeholder="e.g. Kowalski"
            label="Second name"
            userDataHandler={this.userDataHandler}
          />
          <ModalEmailField
            fieldValue={this.state.userData.email}
            fieldName="email"
            placeholder="e.g. adam.kowslski@gmail.com"
            label="E-mail address"
            userDataHandler={this.userDataHandler}
          />
          <ModalPasswordField
            fieldValue={this.state.userData.password}
            fieldName="password"
            label="Password"
            userDataHandler={this.userDataHandler}
          />
          <ModalPasswordField
            fieldValue={this.state.userData.passwordRepeat}
            fieldName="passwordRepeat"
            label="Password"
            userDataHandler={this.userDataHandler}
          />
        </div>
        <div>
          <button className="createAccount" onClick={this.registerUserHandler}>Create Account</button>
        </div>
      </div>
    )
  }
  
}

export default UserRegistration