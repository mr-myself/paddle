import { combineReducers } from 'redux'

import feed from './feedReducers'
import source from './sourceReducers'

const reducers = combineReducers({
  feed,
  source,
})

export default reducers
