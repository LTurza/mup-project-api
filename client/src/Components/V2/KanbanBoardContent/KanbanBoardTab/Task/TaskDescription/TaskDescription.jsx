import React from 'react'
import { useDispatch } from 'react-redux'
import './taskDescription.scss'
import { ButtonSecondary } from './../../../../Buttons/Buttons'
import { useSelector } from 'react-redux'

const taskSelector = state => state.tasks

const TaskDescription = () => {
  const tasks = useSelector(taskSelector)
  const dispatch = useDispatch()

  const close = () => {
    dispatch({type: 'modal/closeTaskDescription'})
  }
  return (
    <div className="task-description">
      <div className="task-description__modal">
        <h1 className="task-description__modal-header">{tasks.selectedTask.title}</h1>
        <p className="task-description__modal-text">{tasks.selectedTask.description}</p>
        <ButtonSecondary
          click={() => close()}
          btnTitle="Close"
          classCss="btn-smaller"
        />
      </div>
    </div>
  )
}

export default TaskDescription