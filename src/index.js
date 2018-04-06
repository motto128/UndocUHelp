import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import AboutUs from './aboutUs';
import Resources from './resources';
import firebase from 'firebase';
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

//nice style bro
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';

import './index.css';
import Events from './events';
import Login from './login';
import Join from './join';
import Home from './home';
import Channel from './channel';
import ChannelBox from './channelbox';

var config = {
  apiKey: "AIzaSyBNe5t47u1vpZR_iXqpY8IHO6ZMYhoviUY",
  authDomain: "chat-react-2016.firebaseapp.com",
  databaseURL: "https://chat-react-2016.firebaseio.com",
  storageBucket: "chat-react-2016.appspot.com",
  messagingSenderId: "258421175670"
};
firebase.initializeApp(config);

//render the Application view
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      {/*<IndexRoute component={Navbar}/>*/}
      
      <Route path="/home" component={Home} />
      <Route path="/join" component={Join} />
      <Route path="/login" component={Login} />
      <Route path="/channels" component={Channel} />
      <Route path="/channel/:channelId" component={ChannelBox} />  
      <Route path="/about" component={AboutUs} />
      <Route path="/resources" component={Resources} />
      <Route path="/events" component={Events} />
           
    </Route>
  </Router>
  
  , document.getElementById('root')
);