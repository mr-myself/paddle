import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './styles/App.scss'
import reportWebVitals from './reportWebVitals'

import FeedsPage from './containers/pages/FeedsPage'
import AuthenticationPage, {
  AuthType,
} from './containers/pages/AuthenticationPage'
import store from './store'

const configuredStore = store

ReactDOM.render(
  <Provider store={configuredStore}>
    <React.StrictMode>
      <Router>
        <Switch>
          <Route exact path="/" component={FeedsPage} />
          <Route
            exact
            path="/signin"
            render={(props) => (
              <AuthenticationPage authType={AuthType.SIGNIN} {...props} />
            )}
          />
          <Route
            exact
            path="/signup"
            render={(props) => (
              <AuthenticationPage authType={AuthType.SIGNUP} {...props} />
            )}
          />
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
