import './styles/App.scss';
import React, { Component } from 'react'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import HomePage from './Components/HomePage'
import Resources from './Components/Resorces'
import NaviTop from './Components/MainComponents/NaviTop'
import NaviTopMaobile from './Components/MainComponents/NaviTopMobile'

import axios from 'axios'
import UserAccountModal from "./Components/MainComponents/UserAccountModal";
import AlertModal from "./Components/MainComponents/Alert";



class App extends Component {
  constructor() {
    super()
    this.state = {
      userScreen: {
        screenWidth: window.innerWidth,
        screenHeight: window.innerHeight,
      },
      activeMobileNavi: false,
      activeUserModal: true,
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

  render() {

    
    return (
    <Router>
      <NaviTop screen={this.state.userScreen} mobileNaviHandler={this.mobileNaviHandler}/>
      {this.state.userScreen.screenWidth < 670 ? <NaviTopMaobile /> : null}
      {
        this.state.activeUserModal
        ?
        <UserAccountModal activeUserAccountModal={this.state.activeUserAccountModal} activeAlert={this.alertHandler}/>
        :
        null
      }
      {this.state.activeAlert
        ?
        <AlertModal
          type='warning'
          title="Incorrect Data"
          message="Please, enter valid data and try again."
        />
        :
        null
      }
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
