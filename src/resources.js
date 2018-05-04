import React from 'react';
import './index.css';
import { Card, CardActions, CardText, CardTitle, Button} from 'react-mdl';
import {SelectField, Option, MenuItem} from 'react-mdl-extra';
import firebase from 'firebase';
import "firebase/firestore";

// var citiesRef = db.collection("Organization"); 

class Resources extends React.Component {
    
    constructor(props){
        super(props);

        this.state = {
            items: []
        };
    
    }
    componentDidMount() {
        const itemsRef = firebase.database().ref('channel/event');
        itemsRef.on('value', (snapshot) => {
          let items = snapshot.val();
          let newState = [];
          for (let item in items) {
            newState.push({
              id: item,
              title: items[item].eName,
              descr: items[item].eDescr,
              loc: items[item].eLoc,
              date: items[item].eDate
            
            });
          }
          this.setState({
            items: newState
          });
        });
      }

  render() {
    return (


        <div className='center'>
            <h2 style={{textAlign: 'center',color: '#4A4A4A'}}>Local Resources</h2>
            <div style={styles.filterStyle}>

                <SelectField label={''} value={1}>
                    <Option value={1}>Washington</Option>
                    <Option value={1}>Oregon</Option>
                    <Option value={1}>California</Option>
                
                </SelectField>
               
                    
                <SelectField label={''} value={1}>
                    <Option value={1}>Seattle</Option>
                    <Option value={1}>Tacoma</Option>
                    <Option value={1}>Bellevue</Option>
            
                </SelectField>
            
            </div>
            {this.state.items.map((item) => { return (
                                  
                <div id='card'>

                    <Card shadow={0} style={styles.cardStyle}>
                        <CardTitle expand style={{color: '#fff',height: '176px', background: 'url(http://depts.washington.edu/ecc/lwb/wp-content/uploads/2017/12/34876206422_8ec16fdde4_h.jpg) center / cover #46B6AC'}}>

                        {item.title}</CardTitle>
                        <CardText>
                            {item.descr}
                            <br/><br/>
                            Phone Number: (206)685-6301
                            <br/><br/>
                            Email: test@uw.edu
                            <br/><br/>
                            {item.loc}
                            <br/><br/>
                            Date: {item.date}
                        </CardText>
                        <CardActions border>
                            <Button style={styles.buttonStyle} raised colored ripple href="http://depts.washington.edu/ecc/lwb/">View Page</Button>
                        </CardActions>
                    </Card>
                </div>
            )})}
                
            
            <div id='card'>
                <Card shadow={0} style={styles.cardStyle}>
                    <CardTitle expand style={{color: '#fff', height: '176px', background: 'url(http://depts.washington.edu/ecc/lwb/wp-content/uploads/2017/12/34876206422_8ec16fdde4_h.jpg) center / cover #46B6AC'}}>
                    Leadership Without Borders</CardTitle>
                    <CardText>
                        Leadership Without Borders (LWB) was created with Undocumented Students in mind and with the mission to serve as a launch pad for students’ leadership, a space for community building, and a connection point for awareness as well as to resources and services for undocumented students.
                        The program offers leadership development resources, meeting space, artwork, a textbook lending library, and an atmosphere designed to provide both aspiration and inspirational aspects for multi-ethnic, multi-identity, and multi-national communities.
                        We invite you to learn more about the history, services, and stories that embody Leadership Without Borders.
                        <br/><br/>
                        Phone Number: (206)685-6301
                        <br/><br/>
                        Email: undocu@uw.edu
                        <br/><br/>
                        Street Address: 3931 Brooklyn Avenue NE Box 355650 Seattle, Washington 98105
                    </CardText>
                    <CardActions border>
                        <Button style={styles.buttonStyle} raised colored ripple href="http://depts.washington.edu/ecc/lwb/">View Page</Button>
                    </CardActions>
                </Card>
            </div>
        
            <div id='card'>
                <Card shadow={0} style={styles.cardStyle}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://depts.washington.edu/ecc/lwb/wp-content/uploads/2018/02/022.png) center / cover'}}>
                    Spring Quarter 2018 Undocu Ally Training</CardTitle>
                    <CardText>
                        The Leadership Without Borders Center (LWB), founded on 2014 by staff at Kelly Ethnic Cultural Center, 
                        is dedicated to work with our campus and at large community to build a comprehensive pathway for undocumented 
                        students’ access and success at our university and beyond. As part of this work, LWB established the Undocu Ally 
                        Training & Education program to provide staff and faculty at the UW-Seattle campus with resources, information, and 
                        guidance on how to be an ally to undocumented students.
                        <br/><br/>
                        Event Date: 04/13/18
                        <br/><br/>
                        Event Time: 9:30 am - 3:30 pm
                        <br/><br/>
                        Event Location: Samuel E. Kelly Ethnic Cultural Center - Unity Suite
                    </CardText>
                    <CardActions border>
                        <Button style={styles.buttonStyle} raised colored ripple href="https://docs.google.com/forms/d/e/1FAIpQLSeskYQB_NUA_buV8RfxjNK-fioKIoppfP31GKd32K05wBzJmA/viewform?c=0&w=1">Event Link</Button>
                    </CardActions>
                </Card>
            </div>
            <div id='card'>
                <Card shadow={0} style={styles.cardStyle}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.washington.edu/omad/files/2017/09/OMAD-purple-only-banner.png) center / cover'}}>
                    UW, TheDream.US announce new scholarship partnership to benefit undocumented students</CardTitle>
                    <CardText>
                    The University of Washington and TheDream.US announced a new partnership this week that will provide scholarships 
                    to qualified undocumented students who graduate from two-year colleges and transfer to UW Seattle.TheDream.US is the 
                    nation’s largest college access and success program for DREAMers – undocumented immigrants who came to this country 
                    as children. The organization currently has more than 3,000 scholars who are enrolled in or have graduated from over 
                    75 partner colleges in 15 states.
                        <br/><br/>
                        The application period for 2018-19 closes on March 1, 2018
                        
                    </CardText>
                    <CardActions border>
                        <Button style={styles.buttonStyle} raised colored ripple href="http://www.washington.edu/omad/2018/01/19/uw-thedream-us-announce-new-scholarship-partnership-to-benefit-undocumented-students/">Read More</Button>
                        <Button style={styles.buttonStyle} raised colored ripple href="http://www.thedream.us/scholarships/">Apply Here</Button>

                    </CardActions>
                </Card>
            </div>
            <div id='card'>
                <Card shadow={0} style={styles.cardStyle}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://depts.washington.edu/ecc/lwb/wp-content/uploads/2016/07/lwb.png) center / cover'}}>
                    UW to Participate in National First-Generation College Celebration on November 8</CardTitle>
                    <CardText>
                    On November 8, the University of Washington joins the Council for Opportunity in Education, 
                    NASPA’s Center for First-Generation Student Success, the American Association of Colleges & 
                    Universities and higher education institutions across the country in recognizing the National 
                    First-Generation College Celebration.
                    <br/><br/>
                    This first-annual celebration falls on the 52nd anniversary of the signing of the Higher Education
                     Act (HEA) of 1965. Among the many resources and initiatives connected to the legacy of HEA is the 
                     recognition of the experience of those who are the first in their families to attend college.
                        <br/><br/>
                        #celebratefirstgen
                    </CardText>
                    <CardActions border>
                        <Button style={styles.buttonStyle} raised colored ripple href="http://www.washington.edu/omad/2017/11/05/first-generation-college-celebration/">Read More</Button>
                    </CardActions>
                </Card>
            </div>
        </div>
    )
  }
}

const styles = {
    buttonStyle:{
        backgroundColor: "#2196F3",
        marginRight: "15px",
        marginLeft: "30px"
    },cardStyle:{
        width: "90%", 
        margin: "auto", 
        
    },filterStyle:{
        margin: "auto",
        width: "90%"
    }
  }

export default Resources;