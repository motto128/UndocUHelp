import React from 'react';
import { Textfield, Icon, IconButton, Button, Card, CardActions, CardMedia , CardMenu, CardTitle, CardText , Layout, Drawer, Header, Navigation, HeaderRow, Content, Grid, Cell,img } from 'react-mdl';


class Home extends React.Component {
  render() {
    return (
        <div>
            <Layout fixedHeader>
            <Content>
            <Card shadow={0} style={styles.cardStyle} >
            {/* style={{width: '1200px', margin: 'auto', paddingTop: '10px'}} */}
                <CardTitle style={{ color: '#fff', height: '250px', background: 'url(http://depts.washington.edu/ecc/lwb/wp-content/uploads/2017/11/cropped-35040525825_ae240e91fc_b-1.jpg) center / cover'}}> Welcome to UndocUHelp! </CardTitle>
                <CardText style={{fontWeight: '400'}}>
                <h3>The safe place for undocumented students to receive help and succeed </h3>
                {/* UndocUHelp is a platform that brings together local organizations that provide advice and guidance to 
                Undocumented Students. We strive to make sure that no one is left behind by building connections that 
                make undocumented students feel right at home. */}
                Getting through college is hard enough – but for undocumented students, the journey is even tougher. UndocUHelp provides undocumented students anonymous access to the resources they need, making it easy to discover organizations, safe spaces, and events where they can connect to community and receive specialized support. Designed as a platform for use by multiple organizations, UndocUHelp collects all the hard-to-find information about getting into college and succeeding as an undocumented student and makes it searchable in a single place.
                </CardText>
                <CardActions border>
                    <a href="#/resources"><Button style={styles.buttonStyle} raised colored ripple>Start</Button></a>
                    <a href="#/about"><Button style={styles.buttonStyle} raised colored ripple>Learn More</Button></a>
                </CardActions>
                
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                </CardMenu>
            </Card>

            <Grid>
              <Cell cols="4">
              <div id='card'>
                  <Card shadow={0} style={styles.cardStyle} >
                  {/* style={{width: '1200px', margin: 'auto', paddingTop: '10px'}} */} 
                      <CardTitle> Problem </CardTitle>
                      <CardText style={{fontWeight: '400'}}>
                      There is only about <strong> 5-10% </strong> of the undocumented immigrant population enrolling in higher education each year. From that small percentage, just <strong> 1-3% </strong> graduate. 
                      These miniscule percentages seem alarming, specially for undocumented students, who face tougher challenges 
                      in today's society. 
                      <p> </p>
                      <strong>
                      How can we help increase both the amount of undocumented immigrants that enter college and graduate successfully?
                      </strong>
                      {/* <Card shadow={0} style={{width: '310px', height: '256px', background: 'url(https://preview.ibb.co/ezxD3n/Asset_2.png) center / cover', margin: 'auto'}}> */}
                      </CardText>
                      
                  </Card>
                </div>
              </Cell>
              <Cell cols="4">
              <div id='card'>
                  <Card shadow={0} style={styles.cardStyle} >
                  {/* style={{width: '1200px', margin: 'auto', paddingTop: '10px'}} */} 
                      <CardTitle> Users & Needs </CardTitle>
                      <CardText style={{fontWeight: '400'}}>
                      Undocumented students face many struggles that affect their hopes of becoming 
                      college students and succeeding in college. Throughout that pursue of higher 
                      education, undocumented students have many <strong> needs </strong> that include: 
                      <h6> Guidance </h6>
                      <l>
                        <li> Legal advice </li>
                        <li> Academic advising & tutoring </li>
                        <li> Scholarships & tuition </li>
                        <li> Career opportunities </li>

                      </l>

                      <h6> Community </h6>
                      <l>
                        <li> Building connections with reliable organizations </li>
                        <li> Meeting new friends </li>
                        <li> Safe spaces </li>
                      </l>
                      </CardText>
                      
                      <CardMenu style={{color: '#fff'}}>
                          <IconButton name="share" />
                      </CardMenu>
                  </Card>
                </div>
              </Cell>
              <Cell cols="4">
              <div id='card'>
                  <Card shadow={0} style={styles.cardStyle} >
                  {/* style={{width: '1200px', margin: 'auto', paddingTop: '10px'}} */} 
                      <CardTitle> Solution </CardTitle>
                      <CardText style={{fontWeight: '400'}}>
                      Addressing the information needs of undocumented students by connecting 
                      them to a platform that encapsulates local organizations that do provide 
                      professional guidance and safe spaces.             
                       
                      <h6> All in one place </h6>
                      <l>
                        <li> Discover organization-generated events </li>
                        <li> Browse organizations in your area </li>
                        <li> Find the right organizations for you </li>

                      </l>

                      <h6> Safe and anonymous </h6>
                      <p>
                      UndocUHelp doesn't demand any user information, it just lets you 
                      filter by location, date, or tags
                      </p>

                      <h6> For organizations </h6>
                      <p>
                      Organizations can sign up, where they can provide contact information and post events
                      </p>

                       </CardText>
                      
                      <CardMenu style={{color: '#fff'}}>
                          <IconButton name="share" />
                      </CardMenu>
                  </Card>
                </div>
              </Cell>
            </Grid>

            
         {/*    <div className="page-content">
            <Card shadow={0} style={styles.cardStyle} >
            {/* style={{width: '1200px', margin: 'auto', paddingTop: '10px'}} */} {/*
                <CardTitle style={{ color: '#fff', height: '250px', background: 'url(http://depts.washington.edu/ecc/lwb/wp-content/uploads/2017/11/cropped-35040525825_ae240e91fc_b-1.jpg) center / cover'}}></CardTitle>
                <CardText style={{fontWeight: '400'}}>
                <h2>The safe place for undocumented students to receive help and succeed </h2>
                {/* UndocUHelp is a platform that brings together local organizations that provide advice and guidance to 
                Undocumented Students. We strive to make sure that no one is left behind by building connections that 
                make undocumented students feel right at home. */} {/*
                Getting through college is hard enough – but for undocumented students, the journey is even tougher. UndocUHelp provides undocumented students anonymous access to the resources they need, making it easy to discover organizations, safe spaces, and events where they can connect to community and receive specialized support. Designed as a platform for use by multiple organizations, UndocUHelp collects all the hard-to-find information about getting into college and succeeding as an undocumented student and makes it searchable in a single place.
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
            <Card shadow={0} style={styles.cardStyle} >
            {/* style={{width: '1200px', margin: 'auto', paddingTop: '10px'}} */} {/*
                <CardText style={{fontWeight: '400'}}>
                <h2>Problem</h2>
                 There is only about 5-10% of the undocumented immigrant population enrolling in higher education each year. From that small percentage, just 1-3% graduate. Undocumented students face many struggles that affect their hopes of becoming college students and succeeding in college; however, today there are numerous organizations that are available to provide help and guidance to these students.  
                </CardText>
                
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                </CardMenu>
            </Card>
            </div>
              
            </div> */}


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
  },cardStyle:{
    width: "95%", 
    margin: "auto", 
    paddingTop: "10px"
},SubcardStyle:{
  width: "90%", 
  margin: "auto"
}

}
export default Home;