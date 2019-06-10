import React from 'react';

class Footer extends React.Component {
  render(){
    return(
      <footer className="footer">
        <div className="footer__box">
          <img src="logo.png" alt="" className="footer__logo"/>
        </div>
        <div className="footer__content">
          <p>This Blog Contents And Components Are Not For Commercial Use <br/>
              &copy; Copyright 2019
          </p>
        </div>
      </footer>
    );
  }
}

export default Footer;
