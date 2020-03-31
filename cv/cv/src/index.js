import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider/* , Container */ } from '@material-ui/core';

import theme from './theme';
import App from './App';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    {/* <Container maxWidth="xl"> */}
      <App />
    {/* </Container> */}
  </ThemeProvider>,
  document.getElementById('root')
);