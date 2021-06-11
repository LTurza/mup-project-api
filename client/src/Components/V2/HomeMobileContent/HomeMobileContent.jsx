import React from 'react'
import { ButtonPriamry } from './../Buttons/Buttons'

const HomeMobileContent = ({ content, header ,img, btnTitle, btnAction }) => {
  return (
    <div className="home-page__container">
     <img className="home-page__container-img" src={ img } alt="img"/>
      <div className="home-page__container-content">
        <h1 className="home-page__container-header"> { header } </h1>
        <p className="home-page__container-text"> { content } </p>
        { btnTitle ?  <ButtonPriamry btnTitle={ btnTitle }  click={ btnAction || null }/> : null }
      </div>
    </div>
  )
}

export default HomeMobileContent
