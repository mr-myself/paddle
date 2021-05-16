import { combineReducers } from 'redux'

import feed from './feedReducers'
import source from './sourceReducers'
import signIn from './signInReducers'

const reducers = combineReducers({
  feed,
  source,
  signIn,
})

export default reducers
