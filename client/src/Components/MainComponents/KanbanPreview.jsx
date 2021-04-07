import React from 'react'

import './kanbanPreview.scss'

const KanbanReview = ({title, description, status, userAssigned, priority}) => {
  return(
    <section className="kanban-preview">
      <h1>Preview {title}</h1>
    </section>
  )
}

export default KanbanReview