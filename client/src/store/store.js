import { createStore } from 'redux'
import rootReducer from './reducer'

const store = createStore(rootReducer)
store.subscribe(render)
export default store