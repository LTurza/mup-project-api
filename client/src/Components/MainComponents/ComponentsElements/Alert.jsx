import React from 'react'
import './../../../styles/Alert.scss'

const AlertModalInfo = ({type, title, message}) => {
  return (
    <div className="alert-modal info">
          <h2>INFO: {title}</h2>
          <p>{message}</p>
    </div>
  )
}
const AlertModalWarnning = ({type, title, message}) => {
  return (
    <div className="alert-modal warnning">
          <h2>ERROR: {title}</h2>
          <p>{message}</p>
    </div>
  )
}
const AlertModalSuccess = ({type, title, message}) => {
  return (
    <div className="alert-modal success">
          <h2>SUCCESS: {title}</h2>
          <p>{message}</p>
    </div>
  )
}
export {AlertModalInfo, AlertModalWarnning, AlertModalSuccess}