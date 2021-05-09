import React from 'react'
import './organizations.scss'
import { ButtonPriamry } from './../Components/MainComponents/ComponentsElements/Buttons'

const Organizations = () => {
  return (
    <div className="organizations">
      <div className ="organizations__toolbar">
          <h1>My Organizations</h1>
          <div className="actions">
            <ButtonPriamry btnTitle="New Organization" click=""/>
            <ButtonPriamry btnTitle="Find Organization" click=""/>
          </div>
      </div>
    </div>
  )
}

export default Organizations