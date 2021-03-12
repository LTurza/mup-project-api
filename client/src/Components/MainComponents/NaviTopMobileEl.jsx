import React from 'react'


import './NaviTop.scss'


const NaviTopMobileEl = ({linkUrl, linkText, children}) => {
    const blockAnimation = (event) =>{
      if( event.nextSibling === null){
        return;
      }
        event.classList.toggle('block-hover')
        event.nextSibling.classList.toggle('icon-hover')
        event.firstChild.classList.toggle('icon-hover')
    }

  return (
    <a className="nav-top-mobile__link" href={linkUrl} >
      <div className="nav-top-mobile__link-block" onMouseEnter={(event) => blockAnimation(event.target)} onMouseLeave={(event) => blockAnimation(event.target)}>
        {children}
      </div>
      <p className="nav-top-mobile__link-description">{linkText}</p>
    </a>
  )
}

export default NaviTopMobileEl