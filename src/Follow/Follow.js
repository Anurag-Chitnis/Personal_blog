import React from 'react';
import Navbar from '../Navbar/Navbar';


class Follow extends React.Component {
  render() {
    return (
      <div>
        <Navbar appState={this.props.appState}/>
        <section className="follow">
          <div className="follow__wrapper">
            <a href="https://github.com/Anurag-Chitnis" className="follow__links">
              <span className="follow__img">
                <img src="github.svg" height="60rem" alt="Github Logo"/>
              </span>
              <span className="follow__social">Github</span>
            </a>
            <a href="https://www.facebook.com/anurag.chitnis.39" className="follow__links">
              <span className="follow__img">
                <img src="facebook.png" alt="Facebook Logo"/>
              </span>
              <span className="follow__social">Facebook</span>
            </a>
            <a href="https://www.instagram.com/anurag.chitnis.99/" className="follow__links">
              <span className="follow__img">
                <img src="insta.png" alt="Instagram Logo"/>
              </span>
              <span className="follow__social">Instagram</span>
            </a>
          </div>
        </section>
      </div>
    );
  }
}

export default Follow;
