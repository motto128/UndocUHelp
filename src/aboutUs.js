import React from 'react';
import { Card, CardActions, CardText, CardTitle, Button} from 'react-mdl';

class AboutUs extends React.Component {
  render() {
    return (
        <div>
            <div id='card'>
                <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
                    <CardTitle expand style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>
                    Pia Eckel</CardTitle>
                    <CardText>
                    Leadership Without Borders (LWB) was created with Undocumented Students in mind and with the mission to serve as a launch pad for students’ leadership, a space for community building, and a connection point for awareness as well as to resources and services for undocumented students.
                    The program offers leadership development resources, meeting space, artwork, a textbook lending library, and an atmosphere designed to provide both aspiration and inspirational aspects for multi-ethnic, multi-identity, and multi-national communities.
                    We invite you to learn more about the history, services, and stories that embody Leadership Without Borders.
                    </CardText>
                    <CardActions border>
                        <Button colored>View Updates</Button>
                    </CardActions>
                </Card>
            </div>
        
            <div id='card'>
                <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>
                    Marie Silbermann</CardTitle>
                    <CardText>
                        Deveoper and best Dominos customer.<br/><br/>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris sagittis pellentesque lacus eleifend lacinia...
                    </CardText>
                    <CardActions border>
                        <Button colored>Get Started</Button>
                    </CardActions>
                </Card>
            </div>
        </div>
    )
  }
}
export default AboutUs;