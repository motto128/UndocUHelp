import React from 'react';
import './index.css';
import { Link, hashHistory } from 'react-router'
import { Textfield, Icon, IconButton, Button, Card, CardActions, CardMedia , CardMenu, CardTitle, CardText , Layout, Drawer, Header, Navigation, HeaderRow, Content } from 'react-mdl';
import {SelectField, Option} from 'react-mdl-extra'
import Navbar from './navbar';

{/* https://github.com/HriBB/react-mdl-extra  */}
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }

  render() {
    
    return (
      <div>
        <Layout fixedHeader fixedDrawer>
          <Header waterfall style = {{color: '#fff'}}>
              <HeaderRow title="UndocUHelp" className="Header">
              <Navigation className="sections" style={{paddingRight: '325px'}}>
                      <a  href="#/home">HOME</a>
                      <a  href="#/resources">RESOURCES</a>
                      <a  href="#/about">ABOUT US</a>
                      <a  href="#/login">ORGANIZATION LOGIN</a>
              </Navigation>
              <SelectField label={''} value={1}>
                <Option value={1}>English</Option>
                <Option value={2}>Español</Option>
                <Option value={3}>Français</Option>
                <Option value={4}>Deutsch</Option>
                <Option value={5}>Português</Option>
              </SelectField>
              </HeaderRow>
              
          </Header>
          <Drawer title="Channel">
            <Navbar />
          </Drawer>  
          
          
          {this.props.children}     
        
        </Layout>

      </div>  
       
    )
  }
}

const styles = {
  navStyle:{
      color: "white"
  }
}
export default App;