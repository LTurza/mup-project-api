import React from 'react'
import './Alert.scss'

const AlertModal = ({type, title, message}) => {
  return (
    <div className="alert-modal">
      {type === 'warning' ?
        <div>
          <h1>ERROR: {title}</h1>
          <p>{message}</p>
        </div>
        :
        null
      }
    </div>
  )
}
export default AlertModal