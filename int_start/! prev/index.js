import 'main.sass'

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'

import createRootReducer from 'reducers'
import TopLine from 'containers/TopLine'
import Routes from 'containers/Routes'

const applyMiddles = [thunk]
const store = createStore(
  createRootReducer,
  composeWithDevTools(applyMiddleware(...applyMiddles))
)

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <TopLine />
      <Routes />
    </HashRouter>
  </Provider>,
  document.getElementById('root')
)




// N = 2 -------------- ConnectRouter & history ----------------


// import React from 'react'
// import ReactDOM from 'react-dom'
// import { createStore, applyMiddleware } from 'redux'
// import { createBrowserHistory } from 'history'
// import thunk from 'redux-thunk'
// import { routerMiddleware, ConnectedRouter } from 'connected-react-router'
// import { Provider } from 'react-redux'
// import { composeWithDevTools } from 'redux-devtools-extension'

// import createRootReducer from 'reducers'
// import routes from 'routes'

// const history = createBrowserHistory()
// const middlewares = [thunk, routerMiddleware(history)]
// const store = createStore(
//   createRootReducer(history),
//   composeWithDevTools(applyMiddleware(...middlewares))
// )

// ReactDOM.render(
//   <Provider store={store}>
//     <ConnectedRouter history={history}>
//       {routes}
//     </ConnectedRouter>
//   </Provider >,
//   document.getElementById('root')
// )








// N = 3 -------------- Without ConnectRouter & history --------------

// import React from 'react'
// import ReactDOM from 'react-dom'
// import { createStore, applyMiddleware } from 'redux'
// import thunk from 'redux-thunk'
// import { composeWithDevTools } from 'redux-devtools-extension'
// import { Provider } from 'react-redux'
// import { BrowserRouter } from 'react-router-dom'

// import createRootReducer from 'reducers'
// import routes from 'routes'

// const middlewares = [thunk]
// const store = createStore(
//   createRootReducer,
//   composeWithDevTools(applyMiddleware(...middlewares))
// )

// ReactDOM.render(
//   <Provider store={store}>
//     <BrowserRouter>
//       {routes}
//     </BrowserRouter>
//   </Provider>,
//   document.getElementById('root')
// )


// N = 4 -------------- Without ConnectRouter --------------

// import React from 'react'
// import ReactDOM from 'react-dom'
// import { createStore, applyMiddleware } from 'redux'
// import thunk from 'redux-thunk'
// import { composeWithDevTools } from 'redux-devtools-extension'
// import { Provider } from 'react-redux'
// import { Router } from 'react-router-dom'
// import { createBrowserHistory } from 'history'
// import { routerMiddleware } from 'connected-react-router'

// import createRootReducer from 'reducers'
// import routes from 'routes'

// const history = createBrowserHistory()
// const middlewares = [thunk, routerMiddleware(history)]
// const store = createStore(
//   createRootReducer(history),
//   composeWithDevTools(applyMiddleware(...middlewares))
// )

// ReactDOM.render(
//   <Provider store={store}>
//     <Router history={history}>
//       {routes}
//     </Router>
//   </Provider>,
//   document.getElementById('root')
// )