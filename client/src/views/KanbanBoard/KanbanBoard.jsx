import React, { useEffect } from 'react'
import axios from 'axios'
import { CSSTransition } from 'react-transition-group';
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router';
import './kanbanBoard.scss'
import KanbanBoardToolbar from './../../Components/V2/KanbanBoardToolbar/KanbanBoardToolbar'
import KanbanBoardContent from './../../Components/V2/KanbanBoardContent/KanbanBoardContent'
import NewTask from './../../Components/V2/modals/NewTask/NewTask'
import TaskDescription from '../../Components/V2/KanbanBoardContent/KanbanBoardTab/Task/TaskDescription/TaskDescription';

const modalSelector = state => state.modal
const organizationSelector = state => state.organizations
const tasksSelector = state => state.tasks

const KanbanBoard = () => {
  const params = useParams()
  const modal = useSelector(modalSelector)
  const organizations = useSelector(organizationSelector)
  const tasks = useSelector(tasksSelector)
  const dispatch = useDispatch()

  const addTask = async (data) => {
    const taskData = {...data, organizationId: organizations.selectedOrganization._id}
    await axios.post('http://localhost:5000/task/newTask', taskData)
    dispatch({type: 'modal/closeNewTask'})
    const response = await axios.get(`http://localhost:5000/organization/organizationData`, {params: {organizationId: params.id}})
    dispatch({type: 'tasks/fetchTasks', payload: response.data.tasks})
    console.log(response.data.tasks);

  }
  const fetchOrganizationData = async () => {
    const response = await axios.get(`http://localhost:5000/organization/organizationData`, {params: {organizationId: params.id}})
    dispatch({type: 'organizations/addSelectedorganization', payload: response.data})
    dispatch({type: 'tasks/fetchTasks', payload: response.data.tasks})
    console.log(response.data.tasks);
  }

  useEffect(() => {
    fetchOrganizationData()
  }, [])
  
  return (
    <div className="kanban-board">
      <CSSTransition
        in={ modal.newTask }
        timeout={ 300 }
        classNames="modal"
        unmountOnExit
      >
        <NewTask click={ addTask }/>
      </CSSTransition>

      <CSSTransition
        in={ modal.taskDescription }
        timeout={ 300 }
        classNames="modal"
        unmountOnExit
      >
        <TaskDescription click={ addTask }/>
      </CSSTransition>
      <KanbanBoardToolbar  />
      <KanbanBoardContent fetchOrganizationData = {() => fetchOrganizationData()}/>
    </div>
  )
}

export default KanbanBoard