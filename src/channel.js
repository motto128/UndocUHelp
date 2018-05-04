import React from 'react';
import { Link, hashHistory } from 'react-router';
import firebase from 'firebase';

class Channel extends React.Component {
  render() {
    return (
      
      <div className='welcome'id='center'>    
        <h1>Welcome to UndocUHelp Portal</h1>
        <div>
          <p>
            Be sure to the checkout the menu bar on the top left 
            hand corner of the screen to switch throught differnt 
            fields of area you would like to post your information information
            You also have to option to post a 
            a new event and updates for anyone to see and check out!
          </p>
        </div>
      </div>
    
    );
  }
}

export default Channel;