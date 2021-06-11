import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './styles/App.scss';
import { CSSTransition } from 'react-transition-group';
import HomePage from './views/HomePage/HomePage'
import AboutPage from './views/AboutPage/AboutPage'
import Organizations from './views/Organizations/Organizations'
import NaviTop from './Components/V2/NavTop/NaviTop'
import NavBottom from './Components/V2/NavBottom/NavBottom'
import Unathorized from './views/Unauthorized/Unauthorized'
import { useSelector, useDispatch } from "react-redux";
import MobileMenu from './Components/V2/MobileMenu/MobileMenu'
import LoggedOutUserPanel from './Components/V2/modals/LoggedOutUserPanel/LoggedOutUserPanel'
import LoginPanel from './Components/V2/modals/SignIn/SignInPanel'
import RegistrationPanel from './Components/V2/modals/SignUp/SignUpPanel'
import InvalidUserData from './Components/V2/modals/InvalidUserData/InvalidUserData'
import KanbanBoard from './views/KanbanBoard/KanbanBoard';

const selectModals = state => state.modal
const userDataStore = state => state.user

const App = () => {
  const modal = useSelector(selectModals)
  const user = useSelector(userDataStore)
  const dispatch = useDispatch()

  useEffect(() => {
    const authToken = JSON.parse(sessionStorage.getItem('auth-token'))
    dispatch({
      type: 'user/login',
      payload: { ...authToken},
    })
  }, [dispatch])
  // const {id} = useParams()
  
  return(
    <div className="App">
      <Router>
        <NaviTop />
        <CSSTransition
          in={ modal.mobileMenu }
          timeout={ 300 }
          classNames="slide-left"
          unmountOnExit
        >
          <MobileMenu />
        </CSSTransition>
        <CSSTransition
          in={ modal.logOutUserPanel }
          timeout={ 300 }
          classNames="modal"
          unmountOnExit
        >
          <LoggedOutUserPanel />
        </CSSTransition>
        <CSSTransition
          in={ modal.signIn }
          timeout={ 300 }
          classNames="modal"
          unmountOnExit
        >
          <LoginPanel />
        </CSSTransition>
        <CSSTransition
          in={ modal.signUp }
          timeout={ 300 }
          classNames="modal"
          unmountOnExit
        >
          <RegistrationPanel />
        </CSSTransition>
        <CSSTransition
          in={ modal.invalidUserData }
          timeout={ 300 }
          classNames="modal"
          unmountOnExit
        >
          <InvalidUserData />
        </CSSTransition>
        <Switch>
            <Route path='/kanbanBoard/:id'>
            <KanbanBoard />
             </Route>
            <Route exact path='/'>
              <HomePage />
            </Route>
            <Router exact path='/organizations'>
              { user.token ? <Organizations /> : <Unathorized /> }
            </Router>
            <Router exact path='/about'>
              <AboutPage />
            </Router>
          </Switch>
          <NavBottom />
      </Router>
    </div>
  )
}

export default App;
