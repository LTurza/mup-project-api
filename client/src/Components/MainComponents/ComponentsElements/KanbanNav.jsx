import React from 'react'
import './kanbanNav.scss'

import { ButtonPriamry } from './Buttons'

const KanbanNav = ({showAddTaskModal}) => {
  return(
    <div className="kanban-nav">
      <img className="kanban-nav__logo" src="https://cdn.dribbble.com/users/1070235/screenshots/5325568/lightning_sewer_4x.png" alt="team-logo"/>
      <h1>Team name</h1>
      <ButtonPriamry btnTitle="Add column" classCss="kanban-nav--action-add-column"/>
      <ButtonPriamry btnTitle="Add task" classCss="kanban-nav--action-add-task" click={() => showAddTaskModal()}/>
    </div>
  )
}

export default KanbanNav