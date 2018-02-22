import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import AboutUs from './aboutUs';
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

//nice style bro
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';

import './index.css';

//render the Application view
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      {/*<IndexRoute component={Navbar}/>*/}
      <Route path="/about" component={AboutUs} />  
    </Route>
  </Router>
  
  , document.getElementById('root')
);