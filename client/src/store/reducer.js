import { combineReducers } from 'redux'

import appReducer from './features/appSlice'

const rootReducer = combineReducers({
  modals: appReducer
})

export default rootReducer