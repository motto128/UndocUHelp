import React  from 'react';
import Time from 'react-time';
import './index.css';
import { Link, hashHistory } from 'react-router';
import { Textfield, Button, List, ListItem, ListItemContent, ListItemAction, Dialog, DialogContent, DialogTitle, DialogActions, Icon} from 'react-mdl';
import firebase from 'firebase';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import noUserPic from './img/no-user-pic.png';

class ChannelBox extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
                eventName:'',
                eventDate: moment(),
                eventLoc:'',
                eventLink:'',
                eventDescr:''
                
            
        };
        this.handleEName = this.handleEName.bind(this);
    	this.handleEDate = this.handleEDate.bind(this);
        this.handleELoc = this.handleELoc.bind(this);
    	this.handleELink = this.handleELink.bind(this);
        this.handleEDescr = this.handleEDescr.bind(this);
    }
    //when the text in the form changes
    handleEName(e) {
        this.setState({eventName: e.target.value});
    }
    handleEDate(e) {
        this.setState({eventDate: e});
    }
    handleELoc(e) {
        this.setState({eventLoc: e.target.value});
    }
    handleELink(e) {
        this.setState({eventLink: e.target.value});
    }
    handleEDescr(e) {
        this.setState({eventDescr: e.target.value});
    }
    
    //post a new message to the database
    submitPost(e) {
        e.preventDefault(); //don't submit
        /* Add a new Channel to the database */
        var channelName = this.props.params.channelId;
        console.log(this.props.params.channelId);
        var d = this.state.eventDate.toString();
        var postRef = firebase.database().ref('channel/'+channelName); //the channel in the JOITC
        var newPost = {
            eName: this.state.eventName,
            eDate: d,
            eLoc: this.state.eventLoc,
            eLink: this.state.eventLink,
            eDescr: this.state.eventDescr,
            userId: firebase.auth().currentUser.uid, //to look up channel info
            time: firebase.database.ServerValue.TIMESTAMP //MAGIC
        };
        postRef.push(newPost); //upload
        
        this.setState({
            eventName:'',
            eventDate: moment(),
            eventLoc:'',
            eventLink:'',
            eventDescr:''
            
         }); //empty out post (controlled input)
    }

    /*editPost(event) {
        //console.log(event.target.value);
    }*/

    render() {

        var currentUser = firebase.auth().currentUser;
        var channelName = this.props.params.channelId;
        var chanName = <ChannelList channelName={channelName} />
        //console.log(channelName);
  
        return(
            
                <div className='channelBox' id = 'center' >
                    <h1 id = 'center'>Post New Event</h1>
                    
                    <div >
                    
                        <List id = 'center'>
                            <p>Choose date and time of event:</p>
                            <ListItem>
                            
                            <DatePicker 
                            inline selected={this.state.eventDate} 
                            onChange={(e) => this.handleEDate(e)}
                            showTimeSelect
                            
                            />
                            </ListItem>
                            
                           
                            <ListItem>

                            <Textfield 
                            onChange={(e) => this.handleEName(e)}
                            value = {this.state.eventName} 
                            label="Name of Event"
                            floatingLabel 
                            style={{width: '400px'}} 
                            />
                            </ListItem>
                        
                        
                            <ListItem>
                            <Textfield
                                onChange={(e) => this.handleELoc(e)}
                                value={this.state.eventLoc}
                                label="Location of Event"
                                floatingLabel
                                style={{width: '400px'}}
                            />
                            </ListItem>

                            <ListItem>
                            <Textfield
                                onChange={(e) => this.handleELink(e)}
                                value={this.state.eventLink}
                                label="Link of Event"
                                floatingLabel
                                style={{width: '400px'}}
                            />
                            </ListItem>

                            <ListItem>
                            <Textfield
                                onChange={(e) => this.handleEDescr(e)}
                                value={this.state.eventDescr}
                                label="Description of Event"
                                floatingLabel
                                rows={3}
                                style={{width: '400px'}}
                            />
                            </ListItem>
                            
                            <ListItem>
                            <Button raised colored onClick={(e) => this.submitPost(e)}>Post</Button>
                            </ListItem>
                        </List>
                        
                        
                            
                            <ListItem>
                             {/*<ListItemContent>
                            <DatePicker
                                inline
                                selected={this.state.eventTime}
                                onChange={(e) => this.handleETime(e)}
                                showTimeSelect
                                showTimeSelectOnly
                                
                                
                                timeCaption="Start"                             
                            />
                            </ListItemContent>
                           <ListItemContent>
                            <DatePicker
                                inline
                                selected={this.state.eventTime}
                                onChange={(e) => this.handleETime(e)}
                                showTimeSelect
                                showTimeSelectOnly
                                
                                dateFormat="LT"
                                timeCaption="End"                             
                            />
                            </ListItemContent>*/}
                            </ListItem>
                        
                        
                    </div>
                    {chanName} 
                </div>
            
        );
    }
}

class ChannelList extends React.Component {

    constructor(props){
        super(props);
        this.state = {postList:[]};
    }
    
    componentDidMount() {
        var usersRef = firebase.database().ref('users');
        usersRef.on('value', (snapshot) => {
            this.setState({users:snapshot.val()});
        });
        
        var name = this.props.channelName;
        var currentUser = firebase.auth().currentUser.uid;
        // Add a listener for changes to the chirps object, and save in the state 

        var postRef = firebase.database().ref('channel/event');
        postRef.on('value', (snapshot) => {
            var postArray = []; //could also do this processing in render
            snapshot.forEach(function(child){
                if (currentUser == child.val().userId) {
                    var message = child.val();
                    message.key = child.key; //save the unique id for later
                    postArray.push(message); //make into an array
                }
            });
            
            postArray.sort((a,b) => b.time - a.time); //reverse order
            this.setState({postList:postArray});
        });
    }

    //When component will be removed
    componentWillUnmount() {
        //unregister listeners
        firebase.database().ref('users').off();
        firebase.database().ref('channel/'+this.props.channelName).off();
    }

    render() {

        if(!this.state.users){
            return null;
        }

        // Create a list of <PostItem /> objects 
        console.log(this.state.postList);
        var chan = this.props.channelName;
        var postItems = this.state.postList.map((message) => {
            
            return <PostItem message={message} user={this.state.users[message.userId]} key={message.key} chan={chan}/>
        })
        return (<List style={{width: '700px'}}>{postItems}</List>);
    }
}
/*
class Item extends React.Component {
    render() {
        var avatar = (this.props.user.avatar !== '' ? this.props.user.avatar : noUserPic);
        return (
        <div>
            <ListItem threeLine>
                <ListItemContent avatar={avatar} subtitle={this.props.message.eDescr}>
                    {this.props.message.eName}
                    
                
                </ListItemContent>
                <ListItemAction>
                    <Button raised accent ripple>edit</Button>
                </ListItemAction>
            </ListItem>
              
        </div>
              
        );
      }
    
}*/

//A single post
class PostItem extends React.Component {
    
    constructor(props) {
		super(props)
        this.state ={'edit': true};

        //this.showEdit = this.showEdit.bind(this);
		this.deleteNote = this.deleteNote.bind(this);
        this.handleOpenDialog = this.handleOpenDialog.bind(this);
        this.handleCloseDialog = this.handleCloseDialog.bind(this);
        this.handleOpenEdit = this.handleOpenEdit.bind(this);
        this.handleCloseEdit = this.handleCloseEdit.bind(this);
        this.editPost = this.editPost.bind(this);
        this.handleCloseEdit = this.handleCloseEdit.bind(this);
        //this.updatePost = this.updatePost.bind(this);
	}
    // if the user click only on their own post will enable buttons to edit
    /*showEdit() {
        
        var currentUser = firebase.auth().currentUser.uid; 
        console.log(currentUser);
        if (currentUser === this.props.message.userId) {
            this.setState({edit: false});
        }
        console.log(this.state.edit);
    }*/
    handleOpenDialog() {
        this.setState({
            openDialog: true
        });
    }

    handleCloseDialog() {
        this.setState({
            openDialog: false
        });
    }
     handleOpenEdit() {
        this.setState({
            openEdit: true
        });
    }

    handleCloseEdit() {
        this.setState({
            openEdit: false
        });
    }
    
    //deletes the specificly chosen post from the database log
    deleteNote(){
		firebase.database().ref('channel/' + this.props.chan+"/"+this.props.message.key).remove();
	}
    // reuploads the new edited text
     editPost(e) {
        e.preventDefault();
        var userRef = firebase.database().ref('channel/' + this.props.chan+"/"+this.props.message.key);
        userRef.child('eName').set(this.state.post);
        //this.setState({post: ''})
    }
    //changes the text in post 
    updatePost(e) {
        this.setState({post: e.target.value});
    }

    render() {
        return (
            <div>
                <ListItem threeLine>
                    
                    <ListItemContent avatar={this.props.user.avatar} subtitle={this.props.message.eDescr}>
                        {this.props.message.eName}
                    </ListItemContent>
                    
                    <ListItemAction>
                        <Button onClick={this.handleOpenEdit}>edit</Button>  
                        <Dialog open={this.state.openEdit}>
                            <DialogTitle>Edit post</DialogTitle>
                            <DialogContent>
                                <Textfield 
                                    onChange={this.updatePost}
                                    value = {this.props.message.eName} 
                                    label={this.props.message.eName}  
                                    style={{width: '400px'}} 
                                />
                            </DialogContent>
                            <DialogActions>
                                <Button type='button'onClick={(e) => this.editPost(e)}>Update</Button>
                                <Button type='button' onClick={this.handleCloseEdit}>Canel</Button>
                            </DialogActions>
                        </Dialog>         
                    </ListItemAction>

                    <ListItemAction>
                        <Button onClick={this.handleOpenDialog}>delete</Button>
                        <Dialog open={this.state.openDialog}>
                            <DialogTitle>Are you sure you want to delete this post?</DialogTitle>
                            <DialogContent>
                                <p>Confirming will detete this post perminatly.</p>
                            </DialogContent>
                            <DialogActions>
                                <Button type='button'onClick={this.deleteNote}>Agree</Button>
                                <Button type='button' onClick={this.handleCloseDialog}>Disagree</Button>
                            </DialogActions>
                        </Dialog>
                    </ListItemAction>
                    
                </ListItem>
            </div>
        );
    }
}

export default ChannelBox;