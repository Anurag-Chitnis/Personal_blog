import React from 'react';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Card from '../Card/Card';
import Footer from '../Header/Footer';

class Home extends React.Component {
  render(){
    return(
      <div>
        <Navbar appState={this.props.appState} booleanFunction={this.props.booleanFunction}/>
        <Header />
        <Card />
        <Footer />
      </div>
    );
  }
}

export default Home;
