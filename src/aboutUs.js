import React from 'react';
import { Card, CardActions, CardText, CardTitle, Button} from 'react-mdl';

class AboutUs extends React.Component {
  render() {
    return (
        <div>
            <div id='card'>
                <Card shadow={0} style={{width: '1200px', margin: 'auto', paddingTop: 'auto'}}>
                    <CardText style={{fontWeight: '400'}}>
                    <h2>About Us</h2>
                    <p>UndocUHelp is a web app that brings together resource organizations that are dedicated
                    in providing Undocumented Students with advice and guidance through their college lives. This 
                    platform allows for resource organizations to sign up themselves and add all of their 
                    information including: contact information, events, location, hours, and links that students
                    can browse at and contact. We believe that building connections between local organizations
                    and students helps acheive our goal of providing students with all the necessary tools they 
                    need to succeed in college, while building relationships with their community. 
                    </p>

                    <h3>FAQ</h3>
                    <h4>How can I access Organizations?</h4>
                    <p>
                    Resource Organizations can be accessed by either searching or browsing under the Resources section,
                    where the Organizations can be filtered down. To access more information about the Resource Organization,
                    the 'More Info' button can be selected to access their profile page; that includes all of the organization's
                    information including Contact, Address, Hours, Events, as well as external links.
                    </p>


                    <p>
                    Developed in Seattle by four Informatics Students from the University of Washington.
                    </p>
                    </CardText>
                </Card>
            </div>

            <div id='card'>
                <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
                    <CardTitle expand style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>
                    Joe Motto</CardTitle>
                    <CardText>
                        Deveoper and best Dominos customer. <br/><br/>
                        Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit.
                        Aenan convallis.
                    </CardText>
                    <CardActions border>
                        <Button colored>View Updates</Button>
                    </CardActions>
                </Card>
            </div>
        
            <div id='card'>
                <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>
                    Jorge Torrez</CardTitle>
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