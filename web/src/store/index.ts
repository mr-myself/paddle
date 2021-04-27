import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import reducers from '../reducers'

const initialState = {}

let middlewares
if (process.env.NODE_ENV !== 'production') {
  middlewares = applyMiddleware(thunk, logger)
} else {
  middlewares = applyMiddleware(thunk)
}

const store = createStore(reducers, initialState, middlewares)

export default store
