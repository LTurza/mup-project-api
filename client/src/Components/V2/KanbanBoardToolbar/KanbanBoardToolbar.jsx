import React from 'react';
import bgImage from './../../../assets/bg1.jpg'
import './kanbanBoardToolbar.scss'
import { ButtonPriamry } from './../Buttons/Buttons'
import { useDispatch, useSelector } from 'react-redux'

const modalSelector = state => state.modal
const organizationsSelector = state => state.organizations

const KanbanBoardToolbar = () => {
  const dispatch = useDispatch()
  const modal = useSelector(modalSelector)
  const organizations = useSelector(organizationsSelector)

  const openNewTaskModal = () => {
    dispatch({type: 'modal/openNewTask'})
  }
  return (
    <div className="kanban-board-toolbar">
      <img src={bgImage} alt="logo" className="kanban-board-toolbar__image"/>
      <div className="kanban-board-toolbar__actions">
        <h1 className="kanban-board-toolbar__header">{organizations.selectedOrganization.name}</h1>
        <ButtonPriamry
          btnTitle="Add new task"
          classCss="btn-smaller"
          click={() => openNewTaskModal()}
        />
      </div>
    </div>
  )
}

export default KanbanBoardToolbar