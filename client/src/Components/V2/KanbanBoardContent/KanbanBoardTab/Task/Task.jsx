import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import axios from 'axios';

const taskSelector = state => state.tasks
const userSelector = state => state.user
const organizationsSelector = state => state.organizations


const Task = ({ title, type, userAssigned, id, description , fetchOrganizationData }) => {
  const tasks = useSelector(taskSelector)
  const user = useSelector(userSelector)
  const organizations = useSelector(organizationsSelector)
  const dispatch = useDispatch()

  const assignUser = () => {
    dispatch({type: 'tasks/assignUser', payload:{
      id,
      userId: user.id,
    }})
    console.log(tasks);
  }

  const nextTab = async () => {
    dispatch({type: 'tasks/pushToNextTab', payload: id})
    let status = ''
    tasks.tasks.filter(task => task._id === id ? status = task.status: null)
    await axios.put('http://localhost:5000/task/updateStatus', {
      taskId: id,
      status,
      organizationId: organizations.selectedOrganization._id,
    })
  }

  const showMore = () => {
    dispatch({type: 'tasks/setSelectedTask', payload: {
      title,
      description
    }})
    dispatch({type: 'modal/openTaskDescription'})
  }

  return (
    <div className="task">
       <div className="task__data">
       <div className="task__data-userAccount"></div>
       <p className="task__data-title">{title}</p>
       </div>
       <div className="task__actions">
        <div className="task__actions-icon">
          <MoreVertIcon  onClick={() => showMore()}/>
        </div>
        { !userAssigned && type === 'todo' ? 
          <div className="task__actions-icon" onClick={() => assignUser() }>
           <AssignmentIndIcon /> 
          </div>
         : null}
        {type !== 'done' ?
          <div className="task__actions-icon">
            <NavigateNextIcon onClick={() => nextTab()}/>
          </div>
        : null}
       </div>
     </div>
  )
}

export default Task