import React, { useState } from 'react'

import './taskColumn.scss'

import AddIcon from '@material-ui/icons/Add';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import Task from './Task'

const TaskColumn = ({columnName, taskList, addTaskHandler} ) => {
  const [tasks, setTasks] = useState([...taskList])
  const rerender = () => {
    
  }

  const renderTasks = () => {
    return tasks.map(task => <Task title={task.title} description={task.description} author={task.author} />)
  }
  return (
    <div className="kanban-board__column">
      <h3 className="kanban-board__column-header">{columnName}</h3>
      <AddIcon className="kanban-board__action add" onClick={() => addTaskHandler()}/>
      <MoreVertIcon className="kanban-board__action more"/>
      <span className="kanban-board__task-counter">{tasks.length}</span>
        {renderTasks()}
    </div>
    )
}

export default TaskColumn