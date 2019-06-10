import React from 'react';
import { BrowserRouter as Router, Route , Redirect} from "react-router-dom";
import './main.css';
import Home from './Home/Home';
// import Navbar from './Navbar/Navbar';
import SignUp from './SignUp/SignUp';
import Login from './Login/Login';
import Follow from './Follow/Follow';
import Creator from './Creator/Creator';
import PageOne from './Pages/Page1';
import PageTwo from './Pages/Page2';
import PageThree from './Pages/Page3';
import PageFour from './Pages/Page4';
import PageFive from './Pages/Page5';
import PageSix from './Pages/Page6';

var firebase = require('firebase');
// var uuid = require('uuid');

// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBe5UmVJO4VnGBP99XmcqF-eHKpmSHu5hs",
    authDomain: "personal-blog-f7811.firebaseapp.com",
    databaseURL: "https://personal-blog-f7811.firebaseio.com",
    projectId: "personal-blog-f7811",
    storageBucket: "",
    messagingSenderId: "814470201163",
    appId: "1:814470201163:web:95944bb149d4b27f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

class App extends React.Component {

  componentWillMount() {
      if(localStorage.getItem('UserInfo')) {
        this.setState({isLoggedIn: true});
      }
  }


  booleanFunction(bool) {
    this.setState({isLoggedIn: bool})
  }

  constructor(props){
    super(props);

    this.state = {
      isLoggedIn: false,
    };
    this.booleanFunction = this.booleanFunction.bind(this);
  }

  render(){
    console.log(this.state);
    return(
      <Router>
        <div className="App">
          <Route path="/" exact render={()=>(<Home appState={this.state.isLoggedIn} booleanFunction={this.booleanFunction}/>)}></Route>
          <Route path='/signup' render={()=>(<SignUp booleanFunction={this.booleanFunction}/>)}></Route>
          <Route path='/login' render={()=>(<Login booleanFunction={this.booleanFunction}/>)}></Route>
          <Route path='/follow' render={()=>(<Follow appState={this.state.isLoggedIn}/>)}></Route>
          <Route path="/creator" render={()=>(<Creator appState={this.state.isLoggedIn}/>)}></Route>
          <Route path='/page1' render={()=>(
            this.state.isLoggedIn ? (<PageOne appState={this.state.isLoggedIn}/>) : (<Redirect to='/login' />)
          )}></Route>
          <Route path='/page2' render={()=>(
            this.state.isLoggedIn ? (<PageTwo appState={this.state.isLoggedIn}/>) : (<Redirect to='/login' />)
          )}></Route>
          <Route path='/page3' render={()=>(
            this.state.isLoggedIn ? (<PageThree appState={this.state.isLoggedIn}/>) : (<Redirect to='/login' />)
          )}></Route>
          <Route path='/page4' render={()=>(
            this.state.isLoggedIn ? (<PageFour appState={this.state.isLoggedIn}/>) : (<Redirect to='/login' />)
          )}></Route>
          <Route path='/page5' render={()=>(
            this.state.isLoggedIn ? (<PageFive appState={this.state.isLoggedIn}/>) : (<Redirect to='/login' />)
          )}></Route>
          <Route path='/page6' render={()=>(
            this.state.isLoggedIn ? (<PageSix appState={this.state.isLoggedIn}/>) : (<Redirect to='/login' />)
          )}></Route>
        </div>
      </Router>
    );
  }
}

export default App;
