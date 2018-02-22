import React from 'react';
import { Layout, Drawer, Header, Navigation } from 'react-mdl';
import { Link, hashHistory } from 'react-router'

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
          <Header title="Sheeple">
            <Navigation>
                <a href="">USA
                </a>
                <a href="">Russia</a>
                <a href="">Germany</a>
                <a href="">Sweden</a>
            </Navigation> 
          </Header>
          <Drawer title="Menu">
            <Navigation>
                <a href="">friends</a>
                <a href="">bingus</a>
                <a href="">bungus</a>
                <Link to="/about" activeClassName="active">About Us</Link>
            </Navigation>
          </Drawer> 

          

          {this.props.children}     
        
        </Layout>

      </div>   
    )
  }
}
export default App;