import React from 'react';
import { Textfield, Icon, IconButton, Button, Card, CardActions, CardMedia , CardMenu, CardTitle, CardText , Layout, Drawer, Header, Navigation, HeaderRow, Content } from 'react-mdl';
import { Link, hashHistory } from 'react-router'
import {SelectField, Option} from 'react-mdl-extra'
{/* https://github.com/HriBB/react-mdl-extra  */}
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }

  render() {
    
    return (
      <div>
        <Layout fixedHeader>
          <Header waterfall style = {{color: '#fff'}}>
              <HeaderRow title="UndocUHelp">
              <Navigation className="sections" style={{paddingRight: '325px'}} >
                      <a href="#">HOME</a>
                      <a href="#/resources">RESOURCES</a>
                      <a href="#">NEWS</a>
                      <a href="#">BLOG</a>
                      <a href="#/about">ABOUT US</a>
                      <a href="#">ORGANIZATION LOGIN</a>
                  </Navigation>
              <SelectField label={''} value={1}>
                <Option value={1}>English</Option>
                <Option value={2}>Español</Option>
                <Option value={3}>Français</Option>
                <Option value={4}>Deutsch</Option>
                <Option value={5}>Português</Option>
              </SelectField>
              </HeaderRow>
              
          </Header>
          <Drawer title="Title">
              <Navigation>
                  <a href="#">Link</a>
                  <a href="#">Link</a>
                  <a href="#">Link</a>
                  <a href="#">Link</a>
              </Navigation>
          </Drawer>

          <Content>
            <div className="page-content">
            <Card shadow={0} style={{width: '1200px', margin: 'auto', paddingTop: '10px'}}>
                <CardTitle style={{ color: '#fff', height: '250px', background: 'url(http://depts.washington.edu/ecc/lwb/wp-content/uploads/2017/11/cropped-35040525825_ae240e91fc_b-1.jpg) center / cover'}}>Welcome to UndocUHelp</CardTitle>
                <CardText style={{fontWeight: '400'}}>
                <h2>DACA Myth Busters</h2>
                Leadership Without Borders has launched a digital campaign to demystify DACA concerns. The main objective is 
                to create, develop, and share solutions on how we can support undocumented communities in Washington State. 
                By creating best practices, such as myth busting misinformation on DACA&#8211;which has been recreated with 
                permission of the Everett Community College’s Office of Diversity and Equity&#8211;we are able to provide support 
                for undocumented students and give them knowledge they can use in their future.
                <br></br>
                <br></br>
                Many students fear they cannot attend college due to their undocumented status; however, this is a myth along with 
                many others that discourage students desiring higher education. We have launched a digital campaign to bring awareness 
                to our undocumented students and campus community about myths and the DACA Program. Each week, we will bust another myth 
                and offer resources on what to do in each scenarios. The workshops are as followed: Week 1- <span data-term="goog_1050343763">Jan. 8</span>, 
                Week 2- Jan. 15, Week 3- Jan. 22, Week 4 &#8211; Jan. 29, Week 5- <span data-term="goog_1050343764">Feb. 5</span> and Week 6- Feb. 12. All 
                students are encouraged to come and learn more about DACA!
                </CardText>
                <CardActions border>
                    <Button colored>Get Started</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                </CardMenu>
            </Card>
            <div id='card'>
                <Card shadow={0} style={{width: "900", margin: 'auto'}}>
                  <div class="su-custom-gallery-slide"><a href="http://depts.washington.edu/ecc/lwb/daca-undocumented-myth-buster_6-2/" target="_blank"title="DACA Undocumented Myth-Buster_6"><img src="http://depts.washington.edu/ecc/lwb/wp-content/uploads/2017/12/DACA-Undocumented-Myth-Buster_6.png" alt="DACA Undocumented Myth-Buster_6" width="900" height="600" /><span class="su-custom-gallery-title">DACA Undocumented Myth-Buster_6</span></a></div>
                </Card>
              </div>
              <div id='card'>
                <Card shadow={0} style={{width: "900", margin: 'auto'}}>
                  <div class="su-custom-gallery-slide"><a href="http://depts.washington.edu/ecc/lwb/daca-undocumented-myth-buster_2-2/" target="_blank"title="DACA Undocumented Myth-Buster_2"><img src="http://depts.washington.edu/ecc/lwb/wp-content/uploads/2017/12/DACA-Undocumented-Myth-Buster_2-1.png" alt="DACA Undocumented Myth-Buster_2" width="900" height="600" /><span class="su-custom-gallery-title">DACA Undocumented Myth-Buster_2</span></a></div>             
                </Card>
              </div>
              <div id='card'>
                <Card shadow={0} style={{width: "900", margin: 'auto'}}>
                <div class="su-custom-gallery-slide"><a href="http://depts.washington.edu/ecc/lwb/daca-undocumented-myth-buster_5-2/" target="_blank"title="DACA Undocumented Myth-Buster_5"><img src="http://depts.washington.edu/ecc/lwb/wp-content/uploads/2017/12/DACA-Undocumented-Myth-Buster_5.png" alt="DACA Undocumented Myth-Buster_5" width="900" height="600" /><span class="su-custom-gallery-title">DACA Undocumented Myth-Buster_5</span></a></div>                
                </Card>
              </div>
              <div id='card'>
                <Card shadow={0} style={{width: "900", margin: 'auto'}}>
                <div class="su-custom-gallery-slide"><a href="http://depts.washington.edu/ecc/lwb/daca-undocumented-myth-buster_4-2/" target="_blank"title="DACA Undocumented Myth-Buster_4"><img src="http://depts.washington.edu/ecc/lwb/wp-content/uploads/2017/12/DACA-Undocumented-Myth-Buster_4-1.png" alt="DACA Undocumented Myth-Buster_4" width="900" height="600" /><span class="su-custom-gallery-title">DACA Undocumented Myth-Buster_4</span></a></div>                
                </Card>
              </div>
              <div id='card'>
                <Card shadow={0} style={{width: "900", margin: 'auto'}}>
                <div class="su-custom-gallery-slide"><a href="http://depts.washington.edu/ecc/lwb/daca-undocumented-myth-buster_3-2/" target="_blank"title="DACA Undocumented Myth-Buster_3"><img src="http://depts.washington.edu/ecc/lwb/wp-content/uploads/2017/12/DACA-Undocumented-Myth-Buster_3-1.png" alt="DACA Undocumented Myth-Buster_3" width="900" height="600" /><span class="su-custom-gallery-title">DACA Undocumented Myth-Buster_3</span></a></div>              
                </Card>
              </div>

              <div id='card'>
                <Card shadow={0} style={{width: "900", margin: 'auto'}}>
                <div class="su-custom-gallery-slide"><a href="http://depts.washington.edu/ecc/lwb/daca-undocumented-myth-buster_1-2/" target="_blank"title="DACA Undocumented Myth-Buster_1"><img src="http://depts.washington.edu/ecc/lwb/wp-content/uploads/2017/12/DACA-Undocumented-Myth-Buster_1-1.png" alt="DACA Undocumented Myth-Buster_1" width="900" height="600" /><span class="su-custom-gallery-title">DACA Undocumented Myth-Buster_1</span></a></div>              
                </Card>
                </div>
            </div>


          </Content>
          
          {this.props.children}     
        
        </Layout>

      </div>  
       
    )
  }
}
export default App;