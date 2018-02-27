import React from 'react';
import { Textfield, Icon, IconButton, Button, Card, CardActions, CardMedia , CardMenu, CardTitle, CardText , Layout, Drawer, Header, Navigation, HeaderRow, Content } from 'react-mdl';
import { Link, hashHistory } from 'react-router'
import {SelectField, Option} from 'react-mdl-extra'
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
        <Layout fixedHeader>
          <Header waterfall style = {{color: '#fff'}}>
              <HeaderRow title="UndocUHelp">
              <Navigation className="sections" style={{paddingRight: '325px'}} >
                      <a href="#">HOME</a>
                      <a href="#">RESOURCES</a>
                      <a href="#">NEWS</a>
                      <a href="#">BLOG</a>
                      <a href="#">ABOUT US</a>
                      <a href="#">ORGANIZATION LOGIN</a>
                  </Navigation>
              <SelectField label={'English'} value={1}>
                <Option value={1}>English</Option>
                <Option value={2}>Español</Option>
                <Option value={3}>Français</Option>
                <Option value={4}>Deutsch</Option>
                <Option value={5}>Português</Option>
              </SelectField>
              </HeaderRow>
              
          </Header>
          <Drawer title="Title">
              <Navigation>
                  <a href="#">Link</a>
                  <a href="#">Link</a>
                  <a href="#">Link</a>
                  <a href="#">Link</a>
              </Navigation>
          </Drawer>

          <Content>
            <div className="page-content">
            <Card shadow={0} style={{width: '1435px', margin: 'auto', paddingTop: '10px'}}>
                <CardTitle style={{color: '#fff', height: '500px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Welcome</CardTitle>
                <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris sagittis pellentesque lacus eleifend lacinia...
                </CardText>
                <CardActions border>
                    <Button colored>Get Started</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                </CardMenu>
            </Card>
            </div>


          </Content>
          
          {this.props.children}     
        
        </Layout>

      </div>  
       
    )
  }
}
export default App;