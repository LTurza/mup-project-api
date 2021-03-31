import React from 'react'
import './task.scss'

import AssignmentLateIcon from '@material-ui/icons/AssignmentLate';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';

const Task = ({title, description, author}) => {
  return(
    <section className="task">
      <h1>{title}</h1>
      <p className="task-description">{description}</p>
      <div className="task-details">
        <span className="task-author">Created by: {author}</span>
        <div className="task--actions">
        <AssignmentLateIcon className=""/>
        <DoubleArrowIcon />
      </div>
      </div>
    </section>
  )
}
export default Task 