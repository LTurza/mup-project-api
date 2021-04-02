import React, { useState } from 'react'

import './modalTasks.scss'
import { ModalTextField, ModalTextArea } from './ModalFields'
import { ButtonPriamry, ButtonSecondary } from './Buttons'

const ModalAddTask = ({newTaskHandler}) => {
  const [title, setTitle] = useState('asd')
  const [description, setDescription] = useState('')
  return (
    <div className="modal--overlay">
      <div className="modal-form">
        <h1>Add Task</h1>
      <ModalTextField
      fieldName="title"
      label="Title"
      // dataHandler={setTitle}
      />
      <ModalTextArea 
        fieldName="description"
        label="Description"
        dataHandler={setDescription}
      />
      <div>
        <ButtonPriamry btnTitle="Add new" click={() => newTaskHandler({title, description})}/>
        <ButtonSecondary btnTitle="Clear" />
      </div>
      </div>
    </div>
  )
}

export default ModalAddTask