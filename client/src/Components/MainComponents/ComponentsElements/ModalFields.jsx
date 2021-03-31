import React from 'react'

import './modalFields.scss'

const ModalTextField = ({fieldValue, fieldName, label, dataHandler, classCss}) => {
  return (
    <div className={'modal-input-text ' + classCss}>
      <input
        className="modal-input-text__field"
        type="text"
        name={fieldName}
        onChange={(event) => dataHandler(event, fieldName)}
        required
      />
      <label className="modal-input-text__label" htmlFor={fieldName}>
        <span className="modal-input-text__label--name">{label}</span>
      </label>
    </div>
  )
}

const ModalEmailField = ({fieldValue, fieldName, label, dataHandler, classCss}) => {
  return(
    <div className={"modal-input-email " + classCss}>
      <input
        className="modal-input-email__field"
        type="email"
        name={fieldName}
        onChange={event => dataHandler(event.target.value)}
        required
      />
      <label className="modal-input-email__label" htmlFor={fieldName}>
        <span className="modal-input-email__label--name">{label}</span>
      </label>
    </div>
  )
}

const ModalPasswordField = ({fieldValue, fieldName, label, dataHandler, classCss}) => {
  return(
    <div className={"modal-input-password " + classCss}>
      <input
        className="modal-input-password__field"
        type="password"
        name={fieldName}
        onChange={(event) => dataHandler(event.target.value)}
        required
      />
      <label className="modal-input-password__label" htmlFor={fieldName}>
        <span className="modal-input-password__label--name">{label}</span>
      </label>
    </div>
  )
}

const ModalTextArea = ({fieldValue, fieldName, label, dataHandler, classCss}) => {
  return(
    <div className={"modal-input-textarea " + classCss}>
      <label className="modal-input-textarea__label" htmlFor={fieldName}>
        <span className="modal-input-textarea__label--name">{label}</span>
      </label>
      <textarea
        className="modal-input-textarea__field"
        name={fieldName}
        onChange={(event) => dataHandler(event.target.value)}
        required
      ></textarea>
    </div>
  )
  
}

export {ModalTextField, ModalEmailField, ModalPasswordField, ModalTextArea}