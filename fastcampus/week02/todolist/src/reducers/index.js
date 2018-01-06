
import todo from './todo'

import { combineReducers } from 'redux'

const reducers = combineReducers({
  todoData: todo,
})

export default reducers
