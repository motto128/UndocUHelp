import React from 'react';
import './index.css';
import { Link, hashHistory } from 'react-router'
import { Textfield, Button, List, ListItem } from 'react-mdl';
import firebase from 'firebase';
import { Icon, IconButton, Card, CardActions, CardMedia , CardMenu, CardTitle, CardText , Layout, Drawer, Header, Navigation, HeaderRow, Content } from 'react-mdl'
import MediaQuery from 'react-responsive';


class Login extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            'email': {input :undefined, err:''},
            'password': {input :undefined, err:''}
            
        };

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePassChange = this.handlePassChange.bind(this);
    
    }

    handleEmailChange(e) {
        this.setState({email:{input: e.target.value}});
    }
    handlePassChange(e) {
        this.setState({password:{input: e.target.value}});
    }

    signIn(e) {
        e.preventDefault();
	    var email = this.state.email.input;
	    var password = this.state.password.input;

        var check = true;
        var valid = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);

        if(!valid){
			this.setState({
                email:{err:'input valid email'}
            })
            check = false; //checks for error
		}
        if(password.length < 6) {
			this.setState({
                password: {err:'password needs to be at least 6 characters'}
            })
            check = false;
		}

        if(check) {
            firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => hashHistory.push('/channels'))
            .catch((err) => console.log(err));        
        }     
    }

  render() {  
    return (

        <div id='card'>
        <Card shadow={0} style={styles.cardStyle}>
        <div className='signin' id='center'>
            <h2 className="signInText">Sign In</h2>
            <List>
            <ListItem>
            <Textfield
                onChange={this.handleEmailChange}
                error={this.state.email.err}
                label="email address"
                floatingLabel
                style={{width: '400px'}}
            />
            </ListItem>
           
            <ListItem>
            <Textfield
                onChange={this.handlePassChange}
                error={this.state.password.err}
                label="password"
                type="password"
                floatingLabel
                style={{width: '400px'}}
            />
            </ListItem>
            
            <ListItem>
            <Button raised colored ripple onClick={(e) => this.signIn(e)}>
                SIGN IN
            </Button>
            </ListItem>
            
            <p>Dont have an account yet? <Link to="/join">SIGN UP</Link></p>
            
            </List>
        </div>
       
        </Card>
        </div>
        
        
    );
  }
}

const styles = {
    buttonStyle:{
        backgroundColor: "#2196F3"
    },
    cardStyle:{
        width: "90%", 
        margin: 'auto'
        
    }
}

export default Login;