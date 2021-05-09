import React from 'react'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './styles/App.scss';
import HomePage from './views/HomePage'
import Organizations from './views/Organizations'
import NaviTop from './Components/MainComponents/NaviTop'
import UserAccountModal from "./Components/MainComponents/UserAccountModal";
import Unathorized from './views/Unathorized'
import { useSelector} from "react-redux";

const selectModals = state => state.modals
const userDataStore = state => state.user

const App = () => {
  const modals = useSelector(selectModals)
  const user = useSelector(userDataStore)
  return(
    <div>
      <Router>
        <NaviTop />
        {modals.signIn || modals.signUp ? <UserAccountModal /> : null}

        <Switch>
            {/*<Route path='/kanbanBoard'>*/}
            {/*     <KanbanBoard />*/}
            {/*  </Route>*/}
            <Route exact path='/'>
              <HomePage />
            </Route>
            <Router exact path='/organizations'>
              {user.token ? <Organizations /> : <Unathorized />}
            </Router>
          </Switch>
      </Router>
    </div>
  )

}

export default App;



