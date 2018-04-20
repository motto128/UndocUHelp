/** 

import React from 'react';
import { Link, hashHistory } from 'react-router';
import { Textfield, Button, List, ListItem } from 'react-mdl';
import firebase from 'firebase';
import md5 from 'js-md5';

/**
 * A form for signing up and logging into a website.
 * Specifies email, password, user handle, and avatar picture url.
 * Expects `signUpCallback` and `signInCallback` props
 */

 /*
class Join extends React.Component {
 
    constructor(props){
        super(props);

        this.state = {
            'orgName': {input :undefined, err:''},
            'streetAdd': {input :undefined, err:''},
            'city': {input :undefined, err:''},
            'state': {input :undefined, err:''},
            'zip': {input :undefined, err:''},
            'link': {input :undefined, err:''},
            'email': {input :undefined, err:''},
            'contName': {input :undefined, err:''},
            'phoneNum': {input :undefined, err:''}


        };

        this.handleOrgNameChange = this.handleOrgNameChange.bind(this);
    	this.handleStreetAddChange = this.handleStreetAddChange.bind(this);
        this.handleCityChange = this.handleCityChange.bind(this);
        this.handleStateChange = this.handleStateChange.bind(this);
        this.handleZipChange = this.handleZipChange.bind(this);
    	this.handleLinkChange = this.handleLinkChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleContNameChange = this.handleContNameChange.bind(this);
        this.handlePhoneNumChange = this.handlePhoneNumChange.bind(this);
    }

    handleOrgNameChange(e) {
        this.setState({orgName:{input: e.target.value}});
    }
    handleStreetAddChange(e) {
        this.setState({streetAdd:{input: e.target.value}});
    }
    handleCityChange(e) {
        this.setState({city:{input: e.target.value}});
    }
    handleStateChange(e) {
        this.setState({state:{input: e.target.value}});
    }
    handleZipChange(e) {
        this.setState({zip:{input: e.target.value}});
    }
    handleLinkChange(e) {
        this.setState({link:{input: e.target.value}});
    }
    handleEmailChange(e) {
        this.setState({email:{input: e.target.value}});
    }
    handleContNameChange(e) {
        this.setState({contName:{input: e.target.value}});
    }
    handlePhoneNumChange(e) {
        this.setState({phoneNum:{input: e.target.value}});
    }

    //function to check valid input is so creates an account
    signUp(e) {
	    e.preventDefault();
	    var orgName = this.state.orgName.input;
        var streetAdd = this.state.streetAdd.input;
	    var city = this.state.city.input;
        var state = this.state.state.input; //maybe use another name for 'state'
        var zip = this.state.zip.input;
        var link = this.state.link.input;
        var email = this.state.email.input;
        var contName = this.state.contName.input;
        var phoneNum = this.state.phoneNum.input;

        var check = true;
        var valid = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
        /*confirm that it is email address, display name not be blank
        password is at least 6 characters and both password input matches
        before creating new user on firebase*/

        /* 
        if(name === '') {
            this.setState({
                orgName:{err:'input valid email'}
            });
            check = false; //checks for error
        }
        if(name === '') {
            this.setState({
                streetAdd:{err:'name is required'}
            });
            check = false;
        }
        if(name === '') {
            this.setState({
                city:{err:'input valid email'}
            });
            check = false; //checks for error
        }
        if(name === '') {
            this.setState({
                state:{err:'name is required'}
            });
            check = false;
        }
        if(name === '') {
            this.setState({
                zip:{err:'input valid email'}
            });
            check = false; //checks for error
        }
        if(name === '') {
            this.setState({
                link:{err:'name is required'}
            });
            check = false;
        }
        if(name === '') {
            this.setState({
                email:{err:'input valid email'}
            });
            check = false; //checks for error
        }
        if(name === '') {
            this.setState({
                contName:{err:'name is required'}
            });
            check = false;
        }
        if(name === '') {
            this.setState({
                phoneNum:{err:'name is required'}
            });
            check = false;
        }
        
        console.log(check);
        //makes sure there is no error before creating new account
        if(check) {
            console.log(check);

        console.log(orgName);
        console.log(streetAdd);
        console.log(city);
        console.log(state);
        console.log(zip);
        console.log(link);
        console.log(email);
        console.log(contName);
        console.log(phoneNum);

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
            <div className='signup' id='center'>
                <h1>Sign Up</h1>
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
                <Link to="/login"><Button raised colored ripple onClick={(e) => {this.signUp(e)}}>NEXT</Button></Link>
                </ListItem>
                
                <ListItem>
                <p>Already have an account? <Link to="/login">Sign IN</Link></p>
                </ListItem>
                
                </List>
            </div>
        );
    }
}

export default Join;
*/