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
              routes.map((route, index) => {
                return <Route path={route.path} exact={route.exact} key={index}>
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
