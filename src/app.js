import React from 'react';
import { Icon, IconButton, Button, Card, CardActions, CardMedia , CardMenu, CardTitle, CardText , Layout, Drawer, Header, Navigation, HeaderRow, Content } from 'react-mdl';
import { Link, hashHistory } from 'react-router'

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
          <Header title="UndocUHelp">
            <Navigation>
                <a href="">USA
                </a>
                <a href="">Russia</a>
                <a href="">Germany</a>
                <a href="">Sweden</a>
            </Navigation> 
          </Header>
          <Drawer title="Menu">
            <Navigation>
                <a href="">friends</a>
                <a href="">bingus</a>
                <a href="">bungus</a>
                <Link to="/about" activeClassName="active">About Us</Link>
            </Navigation>
          </Drawer> 
          <Content>
            <div className="page-content">
            <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Welcome</CardTitle>
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