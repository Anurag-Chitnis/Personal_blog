import React from 'react';
import Navbar from '../Navbar/Navbar';
import {Component} from 'react';
import { Link , Redirect} from "react-router-dom";

var firebase = require('firebase');
var uuid = require('uuid');
var swal = require('sweetalert');

class SignUp extends Component {

  SignUp(e){
    e.preventDefault();
    const email = this.refs.email.value;
    const password = this.refs.password.value;

    const promise = firebase.auth().createUserWithEmailAndPassword(email,password);

    promise.then((res) => {
      firebase.database().ref('users/' + this.state.uid).set({
        Email: email,
        Password: password,
      });
      this.setState({
        email: email,
        password: password,
        isSignedIn: true,
      },function() {
        swal("Welcome", "You Successfully SignedUp", "success");
        this.props.booleanFunction(true);
        localStorage.setItem('UserInfo',this.state);
        localStorage.setItem('Profile',res);
      })
    });

    promise.catch((err) => {
        swal('OOPs',err.message,'error');
    });
  }


  constructor(props){
    super(props);

    this.state = {
        uid: uuid.v1(),
        isSignedIn: false,
        email: '',
        password: ''
    };
    this.SignUp = this.SignUp.bind(this);
  }

  render(){
    if(this.state.isSignedIn) {
      return <Redirect to='/' />
    }
    return(
      <div>
        <Navbar />
        <section className="form">
          <div className="row">
            <div className="col-1-of-2">
              <div className="form__side">
                  <img src="signup.svg" alt="OOps Sorry! " className="form__side--img"/>
              </div>
            </div>
            <div className="col-1-of-2">
              <div className="form__wrapper">
                <div className="form__heading">
                  <h2>Sign UP</h2>
                </div>
                <form className="form">
                  <input ref="email" type="email" required className="form__emial form__element" placeholder="Enter Email"/>
                  <input ref="password" type="password" required className="form__password form__element" placeholder="Enter Password"/>
                  <input onClick={this.SignUp} type="submit" className="btn form__element" value="SignUp"/>
                </form>
                <Link to="/login" className="form__link">Already SignedUp?</Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default SignUp;
