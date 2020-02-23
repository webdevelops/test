import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { HashRouter } from 'react-router-dom'

// import createRootReducer from 'store/reducers';
// import TopLine from 'containers/TopLine';
// import theme from 'theme';
// import routes from './routes';

// import createRootReducer from './V2/store/reducers';
// import theme from './V2/theme';
// import TopLine from './V2/containers/TopLine';
// import routes from './routes';

import createRootReducer from './V3/store/reducers';
import theme from './V3/theme';
import TopLine from './V3/containers/TopLine';
import routes from './routes';


const middlewares = [thunk];
const store = createStore(
  createRootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <TopLine />
        {routes}
      </ThemeProvider>
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);