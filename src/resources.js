import React from 'react';
import { Card, CardActions, CardText, CardTitle, Button} from 'react-mdl';
import {SelectField, Option, MenuItem} from 'react-mdl-extra'
import {Component} from 'react';

class Resources extends React.Component {
  render() {
    return (
        <div>
            <div>
            <h1 style={{textAlign: 'center',color: 'grey'}}>Local Resources</h1>
           
            
            </div>
            
                
            
            <div id='card'>
                <Card shadow={0} style={{width: '700px', margin: 'auto'}}>
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
                        <Button colored href="http://depts.washington.edu/ecc/lwb/">View Page</Button>
                    </CardActions>
                </Card>
            </div>
        
            <div id='card'>
                <Card shadow={0} style={{width: '700px', margin: 'auto'}}>
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
                        <Button colored href="https://docs.google.com/forms/d/e/1FAIpQLSeskYQB_NUA_buV8RfxjNK-fioKIoppfP31GKd32K05wBzJmA/viewform?c=0&w=1">Event Link</Button>
                    </CardActions>
                </Card>
            </div>
        </div>
    )
  }
}


export default Resources;