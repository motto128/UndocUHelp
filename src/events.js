import React from 'react';
import { Card, CardActions, CardText, CardTitle, Button} from 'react-mdl';
import {SelectField, Option, MenuItem} from 'react-mdl-extra';
import data from './data/events.json';



class Events extends React.Component {
    
    /*constructor(){
        let data = JSON.parse(localStorage.getItem('myData'));
        this.state = {
            data: data
        };
      }*/
  
    render() {

    return (
        <div>
            
                <h1 style={{textAlign: 'center',color: 'grey'}}>Events</h1>
                <div id='center'>
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
               
            {
            data.map(row => (
                <div id='card'>
                <Card shadow={0} style={{width: '700px', margin: 'auto'}}>
                <CardTitle expand style={{color: '#fff', height: '176px', backgroundColor: 'grey'}}>{row.Name}</CardTitle>
                <CardText>
                        {row.Descr}
                        <br/><br/>
                        Phone Number: {row.Contact.Phone_Number}
                        <br/><br/>
                        Email: {row.Contact.Email}
                        <br/><br/>
                        Street Address: {row.Address.Street_Address}
                    </CardText>
                    <CardActions border>
                        <Button colored href={row.Link}>Read More</Button>
                    </CardActions>
                </Card>
                </div>
            ))         
            } 
            
        </div>
    )
  }
}

export default Events;