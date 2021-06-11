const initialState = {
  tasks: [],
  todoCounter: 0,
  inProgressCounter: 0,
  doneCounter: 0,
  selectedTask: {}
}

const taskReducer = (state = initialState, actions) => {
  switch(actions.type) {
    case 'tasks/assignUser': {
      return {
        ...state,
        tasks: state.tasks.filter(task => task._id === actions.payload.id ? task.userAssigned = actions.payload.userId : task)
      }
    }

    case 'tasks/pushToNextTab': {
      return {
        ...state,
        tasks: state.tasks.filter(task => {
          if (task._id === actions.payload) {
            if (task.status === 'todo') {
              task.status = 'inProgress'
            } else {
              task.status = 'done'
            }
          }
          return task
        })
      }
    }

    case 'tasks/updateCounters': {
      return {
        ...state,
        todoCounter: actions.payload.todoCounter,
        inProgressCounter: actions.payload.inProgressCounter,
        doneCounter: actions.payload.doneCounter,
      }
    }

    case 'tasks/fetchTasks': {
      return {
        ...state,
        tasks: [...actions.payload],
      }
    }

    case 'tasks/setSelectedTask': {
      return {
        ...state,
        selectedTask: actions.payload
      }
    }

    default:
      return state
  }
}

export default taskReducer