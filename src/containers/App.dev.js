import React, { Component } from 'react'
import { Router } from 'react-router'
import { Provider } from 'react-redux'
import routes from '../routes'
import DevTools from './DevTools'

// If you use React Router, make this component
// render <Router> with your routes. Currently,
// only synchronous routes are hot reloaded, and
// you will see a warning from <Router> on every reload.
// You can ignore this warning. For details, see:
// https://github.com/reactjs/react-router/issues/2182

export default class App extends Component {
  render () {
    const { store, history } = this.props
    return (
      <Provider store={store}>
        <div style={{height: '100%'}}>
          <Router history={history} routes={routes} />
          <DevTools />
        </div>
      </Provider>
    )
  }
}
