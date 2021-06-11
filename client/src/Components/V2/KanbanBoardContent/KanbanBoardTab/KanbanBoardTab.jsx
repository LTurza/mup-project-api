import React from 'react';
import './kanbanBoardTab.scss'
import { useSelector } from 'react-redux'
import Task from './Task/Task'

const taskSelector = state => state.tasks

const KanbanBoardTab = ({header, type, fetchOrganizationData}) => {
  const taskList = useSelector(taskSelector)

  const renderTasks = taskList.tasks.filter(task => task.status === type).map(task => {
    return (
      <Task
        title={task.title}
        userAssigned={task.userAssigned}
        type={type}
        id={task._id}
        key={task._id}
        description = {task.description}
        fetchOrganizationData = {() => fetchOrganizationData()}
      />
    )
  })

  return (
    <div className="kanban-board-tab">
     <div className="kanban-board-tab__top">
      <div className="kanban-board-tab__top-counter">{type === 'todo' ? taskList.todoCounter : type === 'inProgress' ? taskList.inProgressCounter : taskList.doneCounter}</div>
      <h1 className="kanban-board-tab__top-hedaer">{header}</h1>
     </div>
     <div className="kanban-board-tab__task-list">
       {renderTasks}
     </div>
    </div>
  )
}

export default KanbanBoardTab