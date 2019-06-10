import React from 'react';
import {Component} from 'react';
import {Link ,Redirect} from 'react-router-dom';
import Navbar from '../Navbar/Navbar';


var firebase = require('firebase');
var swal = require('sweetalert');

class Login extends Component {

  login(e) {
    e.preventDefault();
    const email = this.refs.email.value;
    const password = this.refs.password.value;

    const promise = firebase.auth().signInWithEmailAndPassword(email, password);


    promise.then((res)=>{
      swal("Welcome", "You Successfully LoggedIn", "success");
      this.setState({
        Email: email,
        Password: password,
        isLoggedIn: true
      },function() {
        this.props.booleanFunction(true);
        localStorage.setItem('UserInfo',this.state);
        localStorage.setItem('Profile',res);
        return <Redirect to='/' />
      })
    });

    promise.catch((err)=>{
      swal("OOPs", err.message, "success");
    })
  }

  constructor(props){
    super(props);

    this.state = {
      Email:'',
      Password:'',
      isLoggedIn: false,
    };
    this.login = this.login.bind(this);
  }


  render(){
    if(this.state.isLoggedIn) {
      return <Redirect to='/' />
    }
    return(
      <div>
      <Navbar />
      <section className="form">
        <div className="row">
          <div className="col-1-of-2">
            <div className="form__side">
                <img src="login.svg" alt="OOPs Sorry! " className="form__side--img"/>
            </div>
          </div>
          <div className="col-1-of-2">
            <div className="form__wrapper">
              <div className="form__heading">
                <h2>Login</h2>
              </div>
              <form className="form">
                <input ref='email' type="email" required className="form__emial form__element" placeholder="Enter Email"/>
                <input ref='password' type="password" required className="form__password form__element" placeholder="Enter Password"/>
                <input onClick={this.login} type="submit" className="btn form__element" value="Login"/>
              </form>
              <Link to="/signup" className="form__link">Not a User?</Link>
            </div>
          </div>
        </div>
      </section>
      </div>
    );
  }
}

export default Login;
