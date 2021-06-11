import { combineReducers } from 'redux'

import modalReducer from './features/modalSlice'
import userReducer from './features/userSlice'
import organizationsReducer from './features/organizationSlice'
import paginationReducer from './features/paginationSlice'
import taskReducer from './features/taskSlice'

const rootReducer = combineReducers({
  modal: modalReducer,
  user: userReducer,
  organizations: organizationsReducer,
  pagination: paginationReducer,
  tasks: taskReducer
})

export default rootReducer