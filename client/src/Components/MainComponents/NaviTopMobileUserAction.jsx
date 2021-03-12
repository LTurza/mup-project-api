import React from 'react'


const NaviTopMobileUserAction = ({btnText ,children}) => {
  const blockAnimation = (event) =>{

      event.classList.toggle('block-hover')
      event.lastChild.classList.toggle('icon-hover')
      event.firstChild.classList.toggle('icon-hover')
  }
  return (
    <div className="navi-top-mobile__user-actions" onMouseEnter={(event) => blockAnimation(event.target)} onMouseLeave={(event) => blockAnimation(event.target)}>
      {children}
      <span>{btnText}</span>
    </div>
  )
}

export default NaviTopMobileUserAction