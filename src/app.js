import React from 'react';
import './index.css';
import { Link, hashHistory } from 'react-router'
import { Textfield, Icon, IconButton, Button, Card, CardActions, CardMedia , CardMenu, CardTitle, CardText , Layout, Drawer, Header, Navigation, HeaderRow, Content } from 'react-mdl';
import {SelectField, Option} from 'react-mdl-extra'
import Navbar from './navbar'
import firebase from 'firebase';
import Login from './login';
import Join from './join';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      userId: null
    };
  }
  componentWillMount() {
    this.authListener = this.authListener.bind(this);
    this.authListener();
  }
  authListener() {
    //Add a listener and callback for authentication events 
    this.fireBaseListener = firebase.auth().onAuthStateChanged(user => {
      if(user) {
        console.log('Auth state changed: logged in as', user.email);
        this.setState({userId:user.uid});
        hashHistory.push('/channels');
      }
      else{
        console.log('Auth state changed: logged out');
        this.setState({userId: null});
        hashHistory.push('/login'); //null out the saved state
      }
    })
  }

  componentWillUnmount() {
    this.fireBaseListener && this.fireBaseListener();
    this.authListener = null;
 }


  render() {
    return (
      <div>
        <Layout fixedHeader fixedDrawer>
          <Header waterfall style = {{color: '#fff'}}>
            <HeaderRow title="UndocUHelp" className="Header">
              
              <Navigation className="sections" style={{paddingRight: '325px'}} >
                      <a href="#/home">HOME</a>
                      <a href="#/resources">RESOURCES</a>
                      <a href="#/about">ABOUT US</a>
                      {!this.state.userId &&
                      <a href="#/login">REGISTER / LOGIN</a>
                      }

              </Navigation>
              <SelectField label={''} value={1} >
                <Option value={1}>English</Option>
                <Option value={2}>Español</Option>
                <Option value={3}>Français</Option>
                <Option value={4}>Deutsch</Option>
                <Option value={5}>Português</Option>
              </SelectField>
            </HeaderRow>
             
              
          </Header>
          
          
         {this.state.userId &&
          <Drawer title="Admin Settings" style={{width: '300px'}}>
            <Navbar/>
          </Drawer>
         }

          {this.props.children}     
        
        </Layout>

      </div>  
       
    )
  }
}

const styles = {
  navStyle:{
      backgroundColor: "#2196F3"
  }
}
export default App;