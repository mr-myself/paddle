import React from 'react'
import ReactDOM from 'react-dom'
import FeedsPage from 'src/containers/pages/FeedsPage'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import reportWebVitals from './reportWebVitals'
import 'src/styles/App.scss'
import store from './store'

const configuredStore = store

ReactDOM.render(
  <Provider store={configuredStore}>
    <React.StrictMode>
      <Router>
        <Switch>
          <Route exact path="/" component={FeedsPage} />
        </Switch>
      </Router>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
