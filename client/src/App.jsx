// * libs
import React, { Component } from 'react'
import axios from 'axios'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// * styles
import './styles/App.scss';
// * components
import HomePage from './Components/HomePage'
import Resources from './Components/Resorces'
import NaviTop from './Components/MainComponents/NaviTop'
import UserAccountModal from "./Components/MainComponents/UserAccountModal";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userScreen: {
        screenWidth: window.innerWidth,
        screenHeight: window.innerHeight,
      },
      activeUserAccountModal:{
        signUp: true,
        signIn: false,
      },
      activeAlert: false,
    }
  }

  componentDidMount () {
    axios.get('http://localhost:5000/')
    .then(res => console.log(res))
  }

  modalSignInHandler = () => {
    this.setState({...this.state, activeUserAccountModal: {
      signIn: !this.state.activeUserAccountModal.signIn,
      signUp: false,
    }})
  }
  modalSignUpHandler = () => {
    this.setState({...this.state, activeUserAccountModal: {
      signIn: false,
      signUp: !this.state.activeUserAccountModal.signUp,
    }})
  }

  render() {
    return (
    <Router>
      <NaviTop modalSignInHandler={this.modalSignInHandler} modalSignUpHandler={this.modalSignUpHandler}/>
      {this.state.activeUserAccountModal.signIn ? <UserAccountModal  signIn={true}/> : null}
      {this.state.activeUserAccountModal.signUp ? <UserAccountModal  signUp={true}/> : null}
      <Switch>
        <Router path='/resources'>
          <Resources />
        </Router>
        <Route path='/'>
          <HomePage />
        </Route>
      </Switch>
    </Router>
      )
  }
}

export default App;



