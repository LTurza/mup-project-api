import React from 'react'
import './formFields.scss'

const FormTextField = ({ fieldName, label, dataHandler, classCss }) => {
  return (
    <div className={ 'form-input-text ' + classCss }>
      <input
        className="form-input-text__field"
        type="text"
        name={ fieldName }
        onChange={ (event) => dataHandler(event.target.value, fieldName) }
        required
      />
      <label className="form-input-text__label" htmlFor={ fieldName }>
        <span className="form-input-text__label--name">{ label }</span>
      </label>
    </div>
  )
}

const FormPasswordField = ({ fieldName, label, dataHandler, classCss }) => {
  return(
    <div className={ "form-input-password " + classCss }>
      <input
        className="form-input-password__field"
        type="password"
        name={ fieldName }
        onChange={(event) => dataHandler(event.target.value, fieldName) }
        required
      />
      <label className="form-input-password__label" htmlFor={ fieldName }>
        <span className="form-input-password__label--name">{ label }</span>
      </label>
    </div>
  )
}

const FormTextArea = ({ fieldName, label, dataHandler, classCss }) => {
  return(
    <div className={ "form-input-textarea " + classCss }>
      <label className="form-input-textarea__label" htmlFor={ fieldName }>
        <span className="form-input-textarea__label--name">{ label }</span>
      </label>
      <textarea
        className="form-input-textarea__field"
        name={ fieldName }
        onChange={ (event) => dataHandler(event.target.value) }
        required
      ></textarea>
    </div>
  )
}

export { FormTextField, FormPasswordField, FormTextArea }