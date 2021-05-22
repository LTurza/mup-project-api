import { combineReducers } from 'redux'

import modalReducer from './features/modalSlice'
import userReducer from './features/userSlice'

const rootReducer = combineReducers({
  modal: modalReducer,
  user: userReducer
})

export default rootReducer