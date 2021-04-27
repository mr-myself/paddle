import { combineReducers } from 'redux'

import feed from './feedReducers'

const reducers = combineReducers({
  feed,
})

export default reducers
