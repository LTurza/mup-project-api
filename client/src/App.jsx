// * libs
import React, { Component } from 'react'
// import axios from 'axios'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// * styles
import './styles/App.scss';
// * components
import HomePage from './views/HomePage'
import Resources from './Components/Resorces'
import KanbanBoard from './views/KanbanBoard'
import NaviTop from './Components/MainComponents/NaviTop'
import UserAccountModal from "./Components/MainComponents/UserAccountModal";
import AlertModal from './Components/MainComponents/ComponentsElements/Alert'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userScreen: {
        screenWidth: window.innerWidth,
        screenHeight: window.innerHeight,
      },
      activeUserAccountModal:{
        signUp: false,
        signIn: false,
      },
      activeAlert: true
    }
  }

  userModalHandler = (modalToHandle, modalToClose, closeAllModals) => {
    this.setState({...this.state, activeUserAccountModal: {
      [modalToHandle]: closeAllModals ? false : !this.state.activeUserAccountModal[modalToHandle],
      [modalToClose]: false,
    }})
  }

  closeModalHandler = () => {
    this.setState({...this.state, activeAlert: false})
  }

  showAlertHandler = (type, message, title) => {
    return <AlertModal type={type} message={message} title={title}  closeAlert={this.closeModalHandler}/>
  }

  render() {
    return (
    <div className="App">
      <Router>
      <NaviTop userModalHandler={this.userModalHandler} />
      {this.state.activeAlert ? this.showAlertHandler('info', 'asdasdas', 'title') : null}
      {this.state.activeUserAccountModal.signIn || this.state.activeUserAccountModal.signUp 
        ?
          <UserAccountModal activeModal={this.state.activeUserAccountModal} userModalHandler={this.userModalHandler}/>
        :
          null
      }
      <Switch>
      <Route path='/kanbanBoard'>
         <KanbanBoard />
        </Route>
        <Router path='/resources'>
          <Resources />
        </Router>
        <Route path='/'>
          <HomePage />
        </Route>
        
      </Switch>
    </Router>
    </div>
      )
  }
}

export default App;



