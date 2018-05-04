import React from 'react';
import './index.css';
import { Link, hashHistory } from 'react-router';
import { Textfield, Button, List, ListItem } from 'react-mdl';
import { Icon, IconButton, Card, CardActions, CardMedia , CardMenu, CardTitle, CardText , Layout, Drawer, Header, Navigation, HeaderRow, Content } from 'react-mdl';
import firebase from 'firebase';
import md5 from 'js-md5';

/**
 * A form for signing up and logging into a website.
 * Specifies email, password, user handle, and avatar picture url.
 * Expects `signUpCallback` and `signInCallback` props
 */

class Join extends React.Component {
 
    constructor(props){
        super(props);

        this.state = {
            'email': {input :undefined, err:''},
            'name': {input :undefined, err:''},
            'password': {input :undefined, err:''},
            'repassword': {input :undefined, err:''}
        };

        this.handleEmailChange = this.handleEmailChange.bind(this);
    	this.handleNameChange = this.handleNameChange.bind(this);
        this.handlePassChange = this.handlePassChange.bind(this);
        this.handleRepassChange = this.handleRepassChange.bind(this);
    	
    
    }

    handleEmailChange(e) {
        this.setState({email:{input: e.target.value}});
    }
    handleNameChange(e) {
        this.setState({name:{input: e.target.value}});
    }
    handlePassChange(e) {
        this.setState({password:{input: e.target.value}});
    }
    handleRepassChange(e) {
        this.setState({repassword:{input: e.target.value}});
    }

    //function to check valid input is so creates an account
    signUp(e) {
	    e.preventDefault();
	    var email = this.state.email.input;
        var name = this.state.name.input;
	    var password = this.state.password.input;
        var repassword = this.state.repassword.input;
        
        var check = true;
        var valid = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
        /*confirm that it is email address, display name not be blank
        password is at least 6 characters and both password input matches
        before creating new user on firebase*/
        if(!valid) {
            this.setState({
                email:{err:'input valid email'}
            });
            check = false; //checks for error
        }
        if(name === '') {
            this.setState({
                name:{err:'name is required'}
            });
            check = false;
        }
        if(repassword !== password) {
            this.setState({
                repassword: {err:'password does not match'}
            });
            check = false;       
        }
        if(password.length < 6) {
            this.setState({
                password: {err:'password needs to be at least 6 characters'}
            });
            check = false;
        }
        console.log(check);
        //makes sure there is no error before creating new account
        if(check) {
            console.log(check);

        console.log(email);
        console.log(password);
        console.log(name);
        console.log(repassword);
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(function(firebaseUser) {
                //console.log(user);
                //include information (for app-level content)
                var profilePromise = firebaseUser.updateProfile({
                    displayName: name,
                    photoURL: 'https://www.gravatar.com/avatar/' + md5(email)
                }); //return promise for chaining
                
                //create new entry in the Cloud DB (for others to reference)
                var userRef = firebase.database().ref('users/'+firebaseUser.uid); 
                
                var userData = {
                    name: name,
                    avatar:'https://www.gravatar.com/avatar/' + md5(email)
                }
                console.log(userData);
                var userPromise = userRef.set(userData); //update entry in JOITC, return promise for chaining
                console.log(userPromise);
                return Promise.all(profilePromise, userPromise); //do both at once!
            })
            .then(() => hashHistory.push('/channels')) 
            .catch((err) => console.log(err));
        }
    }
    //code:"auth/email-already-in-use"
    //message:"The email address is already in use by another account."

    render() {
        return (
            <div id='card'>
            <Card shadow={0} style={styles.cardStyle}>
            <div className='signup' id='center'>
                <h2 className="signInText">Sign Up</h2>
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
                    onChange={this.handleNameChange}
                    error={this.state.name.err}
                    label="name"
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
                <Textfield
                    onChange={this.handleRepassChange}
                    error={this.state.repassword.err}         
                    label="re-enter password"
                    type="password"
                    floatingLabel
                    style={{width: '400px'}}
                />
                </ListItem>
                
                <ListItem>
                <Button style={styles.buttonStyle} raised colored ripple onClick={(e) => {this.signUp(e)}}>NEXT</Button>
                </ListItem>

                <ListItem>
                <p>Already have an account? <Link to="/login">Sign IN</Link></p>
                </ListItem>
                
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

export default Join;