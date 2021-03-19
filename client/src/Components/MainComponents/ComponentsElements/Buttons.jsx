import React from 'react'
import './../../../styles/Buttons.scss'

const ButtonPriamry = ({btnType, btnId, btnTitle, click, classCss}) => {
  return (
    <button 
      className={"btn primary " + classCss}
      type={btnType}
      id={btnId}
      onClick= {click}>
        {btnTitle}
    </button>
    )
}

const ButtonSecondary = ({btnType, btnId, btnTitle, click, classCss}) => {
  return (
    <button 
      className={"btn secondary " + classCss}
      type={btnType}
      id={btnId}
      onClick= {click}>
        {btnTitle}
    </button>
    )
}
const ButtonDark = ({btnType, btnId, btnTitle, click, classCss}) => {
  return (
    <button 
      className={"btn dark " + classCss}
      type={btnType}
      id={btnId}
      onClick= {click}>
        {btnTitle}
    </button>
    )
}

export {ButtonPriamry, ButtonSecondary, ButtonDark}