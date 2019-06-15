import React from 'react';

class Header extends React.Component {
  render(){
    return(
      <header className="header">
        <div className="header__wrapper">
          <video src="1.mp4" loop={true} autoPlay={true}className="header__video"></video>
        </div>
        <div className="header__overlay"></div>
        <div className="header__content">
          <h1>Hello,World</h1>
        </div>
      </header>
    );
  }
}

export default Header;
