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
import { ThemeProvider } from '@material-ui/core'

import createRootReducer from 'reducers'
import routes from 'routes'

// --------- without & with Material-Ui
// import TopLine from 'topLine/containers/TopLine'
// import TopLine from 'Mui/TopLineMui'
// import TopLine from 'Mui/Top-2'
import TopLine from 'Mui/Top-3'
import { theme } from 'Mui/Top-3/theme'

const middlewares = [thunk]
const store = createStore(
  createRootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
)

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <BrowserRouter>
        <div className="app">
          <TopLine />
          {routes}
        </div>
      </BrowserRouter>
    </Provider>
  </ThemeProvider>,
  document.getElementById('root')
)