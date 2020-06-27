import React from 'react';
import { Navbar } from './components/Navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { TodosPages } from './pages/TodosPage';
import { AboutPage } from './pages/AboutPage';

function App() {

  return <>
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Switch>
          <Route path="/" component={TodosPages} exact />
          <Route path="/about" component={AboutPage} />
        </Switch>
      </div>
    </BrowserRouter>
  </>
}

export default App;
