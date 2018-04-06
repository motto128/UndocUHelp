import React from 'react';
//import Time from 'react-time';
import { Link, hashHistory } from 'react-router';
import { Textfield, Button, List, ListItem, ListItemContent, ListItemAction, Dialog, DialogContent, DialogTitle, DialogActions} from 'react-mdl';
import firebase from 'firebase';

class ChannelBox extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            post:'',
        };
    }
    //when the text in the form changes
    updatePost(event) {
        this.setState({post: event.target.value});
    }
    
    //post a new message to the database
    submitPost(event) {
        event.preventDefault(); //don't submit
        /* Add a new Channel to the database */
        var channelName = this.props.params.channelId;
        //this.setState({name: channelName});
        var postRef = firebase.database().ref('channel/'+channelName); //the channel in the JOITC
        var newPost = {
            text: this.state.post,
            userId: firebase.auth().currentUser.uid, //to look up channel info
            time: firebase.database.ServerValue.TIMESTAMP //MAGIC
        };
        postRef.push(newPost); //upload
        
        this.setState({post:''}); //empty out post (controlled input)
    }

    editPost(event) {
        //console.log(event.target.value);
    }

    render() {

        var currentUser = firebase.auth().currentUser;
        var channelName = this.props.params.channelId;
        var chanName = <ChannelList channelName={channelName} />
        //console.log(channelName);
  
        return(
            <div className='channelBox'>
                <h1>{this.props.params.channelId}</h1>
                <div className='channelPost'>
                    <Textfield 
                        onChange={(e) => this.updatePost(e)}
                        value = {this.state.post} 
                        label="post a message..." 
                        style={{width: '400px'}} 
                    />
                    <Button primary onClick={(e) => this.submitPost(e)}>Post</Button>
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
        
        // Add a listener for changes to the chirps object, and save in the state 

        var postRef = firebase.database().ref('channel/'+name);
        postRef.on('value', (snapshot) => {
            var postArray = []; //could also do this processing in render
            snapshot.forEach(function(child){
                var message = child.val();
                message.key = child.key; //save the unique id for later
                postArray.push(message); //make into an array
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
            console.log(this.state.users[message.userId]);
            return <PostItem message={message} user={this.state.users[message.userId]} key={message.key} chan={chan}/>
        })
        return (<List style={{width: '650px'}}>{postItems}</List>);
    }
}

//A single post
class PostItem extends React.Component {
    
    constructor(props) {
		super(props)
        this.state ={'edit': true};

        this.showEdit = this.showEdit.bind(this);
		this.deleteNote = this.deleteNote.bind(this);
        this.handleOpenDialog = this.handleOpenDialog.bind(this);
        this.handleCloseDialog = this.handleCloseDialog.bind(this);
        this.handleOpenEdit = this.handleOpenEdit.bind(this);
        this.handleCloseEdit = this.handleCloseEdit.bind(this);
        this.editPost = this.editPost.bind(this);
        this.handleCloseEdit = this.handleCloseEdit.bind(this);
	}
    // if the user click only on their own post will enable buttons to edit
    showEdit() {
        console.log("you clicked", this.props.message.text);
        var currentUser = firebase.auth().currentUser.uid; 
        if (currentUser === this.props.message.userId) {
            this.setState({edit: false});
        }
        //console.log(this.state.edit);
    }
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
     editPost() {
        var userRef = firebase.database().ref('channel/' + this.props.chan+"/"+this.props.message.key);
        userRef.child('text').set(this.state.post);
    }
    //changes the text in post 
    updatePost(e) {
        this.setState({post: event.target.value});
    }

    render() {
        return (
            <div>
                <ListItem threeLine onClick={this.showEdit}>
                    
                    <ListItemContent avatar={this.props.user.avatar} subtitle={this.props.message.text}>
                        {this.props.user.name} <Time value={this.props.message.time} relative/>
                    </ListItemContent>
                    
                    <ListItemAction>
                        <Button disabled={this.state.edit} onClick={this.handleOpenEdit}>edit</Button>  
                        <Dialog open={this.state.openEdit}>
                            <DialogTitle>Edit post</DialogTitle>
                            <DialogContent>
                                <Textfield 
                                    onChange={(e) => this.updatePost(e)}
                                    //value = {this.props.message.text} 
                                    label={this.props.message.text}  
                                    style={{width: '400px'}} 
                                />
                            </DialogContent>
                            <DialogActions>
                                <Button type='button'onClick={this.editPost}>Agree</Button>
                                <Button type='button' onClick={this.handleCloseEdit}>Disagree</Button>
                            </DialogActions>
                        </Dialog>         
                    </ListItemAction>

                    <ListItemAction>
                        <Button disabled={this.state.edit} onClick={this.handleOpenDialog}>delete</Button>
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