import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import { useRoutes } from './routes';
import { Header } from './Header/Header';


function App() {
  const isAuthenticated = true;
  const routes = useRoutes(isAuthenticated);

  return (
    <Router>
      <div className="main-content">
        <Header />
        {routes}
      </div>
    </Router>
  );
}

export default App;
