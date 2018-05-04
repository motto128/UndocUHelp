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

                    <h4>How can I access Events?</h4>
                    <p>
                    Events can be accessed by either searching or browsing under the Resources section (under the “Events” tab), where the Events can be filtered down. To access more information about the Resource Organization, the 'More Info' button can be selected to access their profile page; that includes all of the organization's information including Contact, Address, Hours, Events, as well as external links.
                    </p>

                    <h4>How can I sign up as an Organization?</h4>
                    <l>
                        <li>Organizations can sign up to UndocUHelp by clicking on the “Register/Login” section on the top navigation bar.</li>
                        <li>	Click on the “Sign Up” link below the log in form. </li>
                        <li>	Enter all the required fields related to your organization’s information. </li>
                        <li>	Click on the “Next” button below the forms to enter your new profile. By clicking “Next” the account is created and a new screen appears (Profile Page), where more information can be added. </li>
                    </l>
                    <p></p>
                    <p>
                    Developed in Seattle by four Informatics Students from the University of Washington.
                    </p>
                    </CardText>
                </Card>
            </div>

        
            
        </div>
    )
  }
}
export default AboutUs;