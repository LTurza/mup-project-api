import React, { useState } from 'react'
import './newTask.scss'
import { useDispatch } from 'react-redux'
import { FormTextField } from './../../FormFields/FormFields'
import { ButtonPriamry } from './../../Buttons/Buttons'
import CloseIcon from '@material-ui/icons/Close'

const NewTask = ({click}) => {
  const dispatch = useDispatch()
  const [task, setTask] = useState({
    title: '',
    description: ''
  })
  const setData = (data, name) => {
    setTask({...task, [name]:data})
  }
  
  const close = () => {
    dispatch({type: 'modal/closeNewTask'})
  }

  return (
    <div className="new-task">
      <div className="new-task__modal">
        <CloseIcon  onClick={() => close()} fontSize="large" className="new-task__modal-close"/>
        <h1 className="new-task__modal-header">New Task</h1>
        <div className="new-task__modal-form">
          <FormTextField
            label="Task Title"
            fieldName="task-title"
            dataHandler={(event) => setData(event, 'title')}
            value={task.title}
          />
          <FormTextField
            label="Task Description"
            fieldName="task-description"
            dataHandler={(event) => setData(event, 'description')}
            value={task.description}
          />
        </div>
        <div className="new-task__actions">
          <ButtonPriamry
            btnTitle="Add"
            classCss="btn-smaller"
            click={ () => click(task) }
          />
        </div>
      </div>
    </div>
  )
}

export default NewTask