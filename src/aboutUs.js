import React from 'react';
import { Card, CardActions, CardText, CardTitle, Button} from 'react-mdl';

class AboutUs extends React.Component {
  render() {
    return (
        <div>
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