import React from 'react'

import './modalTasks.scss'
import { ModalTextField, ModalTextArea } from './ModalFields'
import { ButtonPriamry, ButtonSecondary } from './Buttons'

const ModalAddTask = ({dataHandler}) => {
  return (
    <div className="modal--overlay">
      <div className="modal-form">
        <h1>Add Task</h1>
      <ModalTextField
      fieldName="title"
      label="Title"
      dataHandler={dataHandler}
      />
      <ModalTextArea 
        fieldName="description"
        label="Description"
      />
      <div>
        <ButtonPriamry btnTitle="Add new" />
        <ButtonSecondary btnTitle="Clear" />
      </div>
      </div>
    </div>
  )
}

export default ModalAddTask