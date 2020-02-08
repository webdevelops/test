import React from 'react';
import './App.css';

import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'

function App() {
  return (
    <div className="App">
      <CssBaseline>
        <Button variant="contained" color="primary">Hello world</Button>
      </CssBaseline>
    </div>
  );
}

export default App;
