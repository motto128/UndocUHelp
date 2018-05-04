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
import "firebase/firestore";

import './index.css';
import Events from './events';
import Login from './login';
import Join from './join';
import Home from './home';
import Channel from './channel';
import ChannelBox from './channelbox';
import Navbar from './navbar';
<<<<<<< HEAD
import MyEvents from './myEvents';

=======

import JoinDetail from './joinDetail';
>>>>>>> 2e303db53ce7d59aba5ed38f7b17467321912946


var config = {
  apiKey: "AIzaSyDo0xOtriHqNs764nkD8H7IpyI5unVk6bQ",
  authDomain: "undocuhelp-5cf9f.firebaseapp.com",
  databaseURL: "https://undocuhelp-5cf9f.firebaseio.com",
  projectId: "undocuhelp-5cf9f",
  storageBucket: "undocuhelp-5cf9f.appspot.com",
  messagingSenderId: "160599012781"
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
      <Route path="/about" component={AboutUs} />
      <Route path="/resources" component={Resources} />
      <Route path="/events" component={Events} />
      <Route path="/channels" component={Channel} />
<<<<<<< HEAD
      <Route path="/channel/:channelId" component={ChannelBox} />
      <Route path="myEvents" component={MyEvents} />  

=======
      <Route path="/channel/:channelId" component={ChannelBox} />  
      <Route path="/join-step2" component={JoinDetail} />
>>>>>>> 2e303db53ce7d59aba5ed38f7b17467321912946
           
    </Route>
  </Router>
  
  , document.getElementById('root')
);
