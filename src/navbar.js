import React from 'react';
import { Link, hashHistory } from 'react-router'
import { Layout, Navigation, Drawer, Header, Textfield, Button, ListItem, ListItemContent, ListItemAction, Icon, List } from 'react-mdl';
import firebase from 'firebase';
//top level Navbar for the app
class NavBar extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {};
    //this.channelName
  }

  channelName(e) {
    this.setState({name: e.target.value});
  }
  createChannel() {
    var link = "/channel/"+ this.state.name;
    var hash = '#'+ this.state.name;
    var create = <Link to={link} activeClassName="active">{hash}</Link>;
    this.setState({add: this.create});
  }
  logout() {
    firebase.auth().signOut();
  }

  render() {
    //console.log(this.props.param.channelId);
    return (
      <div>
        
          <Navigation>
            <div>
            <ListItem twoLine>
              <ListItemContent avatar="person" subtitle="2 posts">Joe Motto</ListItemContent>
                
            </ListItem>
            </div>
            
            <Link to="/channel/event" activeClassName="active"># ADD NEW EVENT</Link>
            <Link to="/channel/random" activeClassName="active"># ADD NEW RESOURSE</Link>
            <Link to="myEvents" activeClassName="active"># View Your Posts</Link>
            
            
            <div>
            <Button raised accent ripple onClick={()=>this.logout()}>Sign Out </Button>
            </div>
          </Navigation>     
          
      </div>
    );
  }
}
export default NavBar;