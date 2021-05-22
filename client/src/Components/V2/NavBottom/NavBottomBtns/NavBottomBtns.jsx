 import React from 'react'
import './NavBottomBtns.scss'

const NavBottomBtns = ({ icon, action} ) => {
  return (
    <button 
    className="nav-bottom__btn"
    onClick={ action }
    >
      { icon }
      </button>
  )
}

export default NavBottomBtns