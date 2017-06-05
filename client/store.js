import thunk from 'redux-thunk'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { createStore, compose, applyMiddleware } from 'redux'

import reducer from './reducers/index'

const defaultState = { posts: [], comments: [] }

const enhancers = compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)

const store = createStore(reducer, defaultState, enhancers)

export const history = syncHistoryWithStore(browserHistory, store)

if (module.hot) {
  module.hot.accept('./reducers/', () =>
    store.replaceReducer(require('./reducers/index').default))
}

export default store
