import React from 'react';
import { Link, hashHistory } from 'react-router'
import { Layout, Navigation, Drawer, Header, Textfield, Button } from 'react-mdl';
import firebase from 'firebase';
//top level Navbar for the app
class NavBar extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {};
    //this.channelName
  }
  
   componentDidMount() {
    //Add a listener and callback for authentication events 
    firebase.auth().onAuthStateChanged(user => {
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

  signOut(){
    /* Sign out the user, and update the state */
    firebase.auth().signOut();
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

  render() {
    //console.log(this.props.param.channelId);
    return (
      <div>
        
          <Navigation>
            <Link to="/channel/event" activeClassName="active">#Add Event</Link>
            <Link to="/channel/random" activeClassName="active">#random</Link>
            {this.state.add}
            <Textfield 
                onChange={this.channelName}
                label="add channel" 
                style={{width: '150px'}} 
            />
            <Button onClick={this.createChannel}>create</Button>
            <Link to="/login" onClick={()=>this.signOut()}>Sign Out</Link>
          </Navigation>     
          
      </div>
    );
  }
}
export default NavBar;