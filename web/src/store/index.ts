import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import reducer from '../reducers'

const initialState = {}

const reducers = combineReducers({ reducer })

let middlewares
if (process.env.NODE_ENV !== 'production') {
  middlewares = applyMiddleware(thunk, logger)
} else {
  middlewares = applyMiddleware(thunk)
}

const store = createStore(reducers, initialState, middlewares)

export default store