import React from 'react';
import { Textfield, Icon, IconButton, Button, Card, CardActions, CardMedia , CardMenu, CardTitle, CardText , Layout, Drawer, Header, Navigation, HeaderRow, Content } from 'react-mdl';


class Home extends React.Component {
  render() {
    return (
        <div>
            <Layout fixedHeader>
            <Content>
            <div className="page-content">
            <Card shadow={0} style={{width: '1200px', margin: 'auto', paddingTop: '10px'}} >
            {/* style={{width: '1200px', margin: 'auto', paddingTop: '10px'}} */}
                <CardTitle style={{ color: '#fff', height: '250px', background: 'url(http://depts.washington.edu/ecc/lwb/wp-content/uploads/2017/11/cropped-35040525825_ae240e91fc_b-1.jpg) center / cover'}}></CardTitle>
                <CardText style={{fontWeight: '400'}}>
                <h2>Welcome to UndocUHelp!</h2>
                UndocUHelp is a platform that brings together local organizations that provide advice and guidance to 
                Undocumented Students. We strive to make sure that no one is left behind by building connections that 
                make undocumented students feel right at home. 
                </CardText>
                <CardActions border>
                    <a href="#/resources"><Button style={styles.buttonStyle} raised colored ripple>Start</Button></a>
                    <a href="#/about"><Button style={styles.buttonStyle} raised colored ripple>Learn More</Button></a>
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
          </Layout>
            
        </div>
    )
  }
}

const styles = {
  buttonStyle:{
      backgroundColor: "#2196F3",
      marginRight: "15px",
      marginLeft: "30px"
  }
}
export default Home;