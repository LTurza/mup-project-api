import React from 'react'

import './../../../styles/ModalFields.scss'

const ModalTextField = ({fieldValue, fieldName, label, userDataHandler, classCss}) => {
  return (
    <div className={'modal-input-text ' + classCss}>
      <input
        className="modal-input-text__field"
        type="text"
        name={fieldName}
        onChange={(event) =>userDataHandler(event, fieldName)}
        required
      />
      <label className="modal-input-text__label" htmlFor={fieldName}>
        <span className="modal-input-text__label--name">{label}</span>
      </label>
    </div>
  )
}

const ModalEmailField = ({fieldValue, fieldName, placeholder, label, userDataHandler, classCss}) => {
  // const emailValidator = (event) => {
  //   const isEmail = event.target.value
  //   if( isEmail.includes('@') && isEmail.includes('.')) {
  //     event.target.classList.remove('invalid-input')
  //
  //   }
  //   else{
  //     event.target.classList.add('invalid-input')
  //     throw 'Incorrect Email address'
  //   }
  // }

  return(
    <div className={"modal-input-email " + classCss}>
      <input
        className="modal-input-email__field"
        type="email"
        name={fieldName}
        onChange={event => userDataHandler(event.target.value)}
        required
      />
      <label className="modal-input-email__label" htmlFor={fieldName}>
        <span className="modal-input-email__label--name">{label}</span>
      </label>
    </div>
  )
}

const ModalPasswordField = ({fieldValue, fieldName, label, userDataHandler, classCss}) => {
  return(
    <div className={"modal-input-password " + classCss}>
      <input
        className="modal-input-password__field"
        type="password"
        name={fieldName}
        onChange={(event) => userDataHandler(event.target.value)}
        required
      />
      <label className="modal-input-password__label" htmlFor={fieldName}>
        <span className="modal-input-password__label--name">{label}</span>
      </label>
    </div>
  )
}

export {ModalTextField, ModalEmailField, ModalPasswordField}