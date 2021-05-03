import React from 'react'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './styles/App.scss';
import HomePage from './views/HomePage'
import Resources from './Components/Resorces'
import NaviTop from './Components/MainComponents/NaviTop'
import UserAccountModal from "./Components/MainComponents/UserAccountModal";
import { useSelector, useDispatch } from "react-redux";


const selectModals = state => state.modals

const App = () => {
  const modals = useSelector(selectModals)
  const dispatch = useDispatch()
  const showModal = () => {
    dispatch({type: 'app/showAlert'})
  }
  return(
    <div>
      <Router>
        <NaviTop />
        {modals.signIn || modals.signUp ? <UserAccountModal /> : null}

        <Switch>
            {/*<Route path='/kanbanBoard'>*/}
            {/*     <KanbanBoard />*/}
            {/*  </Route>*/}
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

export default App;



