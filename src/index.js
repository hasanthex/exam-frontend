import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import ExamInterface from './components/ExamInterface';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

ReactDOM.render(
    <React.StrictMode>
      <Router>
        <Switch>
          <Route exact path='/' >
            <Login />
          </Route>
          <Route exact path='/exam-interface' >
            <ExamInterface/>
          </Route>
        </Switch>
      </Router>
    </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
