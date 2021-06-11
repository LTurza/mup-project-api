import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './kanbanBoardContent.scss'
import KanbanBoardTab from './KanbanBoardTab/KanbanBoardTab'

const taskSelector = state => state.tasks

const KanbanBoardContent = ({ fetchOrganizationData }) => {
  const tasks = useSelector(taskSelector)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch({type: 'tasks/updateCounters', payload: {
      todoCounter: tasks.tasks.filter(task => task.status === 'todo').length,
      inProgressCounter: tasks.tasks.filter(task => task.status === 'inProgress').length,
      doneCounter: tasks.tasks.filter(task => task.status === 'done').length,
    }})
  },[tasks.tasks, dispatch])
  return (
    <div className="kanban-board-content">
      <KanbanBoardTab header="To do" type='todo' key='todo' fetchOrganizationData = {() => fetchOrganizationData()}/>
      <KanbanBoardTab header="In Progress" type='inProgress' key='inProgress' fetchOrganizationData = {() => fetchOrganizationData()}/>
      <KanbanBoardTab header="Done" type="done" key='done' fetchOrganizationData = {() => fetchOrganizationData()}/>
    </div>
  )
}

export default KanbanBoardContent