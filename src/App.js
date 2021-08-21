import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { routes } from './routes';
import Header from './components/common/Header';

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <>
          <Switch>
            {
              routes.map((route) => {
                return <Route path={route.path} exact={route.exact}>
                  {route.component}
                </Route>
              })
            }
          </Switch>
        </>
      </Router>
    </div>
  );
}

export default App;
