import React from 'react'
import './../../../styles/Alert.scss'
import CloseIcon from '@material-ui/icons/Close';

const AlertModal = ({type, title, message, closeAlert}) => {
  
  return (
    <div className={"alert-modal " + type}>
      <h2>{type.toUpperCase()}: {title}:</h2>
      <p>{message}</p>
      <CloseIcon  className="alert-modal--close" onClick={() => closeAlert()}/>
    </div>
  )
}
export default AlertModal