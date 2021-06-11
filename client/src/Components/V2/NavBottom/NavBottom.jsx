 import React from 'react'
import './navBottom.scss'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import NavBottomBtn from './NavBottomBtns/NavBottomBtns'
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import AccountBoxIcon from '@material-ui/icons/AccountBox';



const NavBottom = () => {
  const dispatch = useDispatch()
  const homeBtnAction = () => {
    dispatch({ type: 'modal/closeAllModals' })
  }
  return(
    <div className="nav-bottom">
      <NavBottomBtn 
        icon={ <MenuIcon className="nav-bottom__icon" /> }
        action={ () => dispatch ({ type: 'modal/toggleMobileMenu' }) }
      />
          <NavBottomBtn
              icon={ 
                <NavLink
                  to="/"
                  onClick={ () => dispatch({ type: 'modal/closeMobileMenu' }) }
                  className="nav-bottom__link"
                >
                  <HomeIcon className="nav-bottom__icon" />
                </NavLink>
              } 
              action={ () => homeBtnAction() }  
            />
      <NavBottomBtn
        icon={ <AccountBoxIcon className="nav-bottom__icon" /> }
        action={ () => dispatch ({ type: 'modal/mobileLogOutUserPanel' }) }
      />
    </div>
  )
}

export default NavBottom