import React from 'react';
import { Link } from "react-router-dom";

var firebase = require('firebase');
var swal = require('sweetalert');

class Navbar extends React.Component {
  _isMounted = false;
  logout(){
    firebase.auth().signOut().then(()=>{
      swal('Thank You','See  You Soon','success');
      localStorage.clear();
      this.setState({logoutClick: true},function() {
        this.props.booleanFunction(true);
      })
    });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  componentDidMount() {
    this._isMounted = true;
  }

  constructor(props){
    super(props);

    this.state = {
      logoutClick: false,
    };
    this.logout = this.logout.bind(this);
  }

  render(){
    var Navlink1;
    var Navlink2;
    if(this.props.appState) {
      Navlink1 = <li className="navigation__item"><Link to="/login" onClick={this.logout} className="navigation__link">Logout</Link></li>;
    }else {
      Navlink1 = <li className="navigation__item"><Link to="/login" className="navigation__link">Login</Link></li>
      Navlink2 = <li className="navigation__item"><Link to="/signup" className="navigation__link">SignUp</Link></li>
    }
    return(
      <div className="navigation">
          <input type="checkbox" id="navigation__toggle" className="navigation__checkbox"/>
          <label htmlFor="navigation__toggle" className="navigation__label">
            <span className="navigation__span"></span>
          </label>
          <div className="navigation__background"></div>
          <nav className="navigation__navbar">
            <ul className="navigation__list">
              <li className="navigation__item"><Link to="/" className="navigation__link">Home</Link></li>
              {Navlink1}
              {Navlink2}
              <li className="navigation__item"><Link to="/follow" className="navigation__link">Follow Me</Link></li>
              <li className="navigation__item"><Link to="/creator" className="navigation__link">About Me</Link></li>
            </ul>
          </nav>
      </div>
    );
  }
}

export default Navbar;
