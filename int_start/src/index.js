import 'topLine/top-line.sass'
import 'internetShop/internet-shop.sass'
import 'taskList/task-list.sass'

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import createRootReducer from 'reducers'
import routes from 'routes'

// --------- without & with Material-Ui
// import TopLine from 'topLine/containers/TopLine'
import TopLine from 'topLine/containers/TopLineMui'

const middlewares = [thunk]
const store = createStore(
  createRootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <TopLine />
      {routes}
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)