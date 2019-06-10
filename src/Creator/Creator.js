import React from 'react';
import Navbar from '../Navbar/Navbar';
import {Link} from 'react-router-dom'


class Creator extends React.Component {
    render() {
      return(
        <div>
            <Navbar appState={this.props.appState}/>
            <div className="creator">
              <div className="row">
                <div className="col-1-of-2">
                  <div className="creator__image"></div>
                </div>
                <div className="col-1-of-2">
                  <div className="creator__content">
                    <h2 className='creator__heading'>About Me</h2>
                    <p className='creator__para'>I am a Front-End developer,studying Computer Science.
                      I Started this blog to create high quality content for the users so that they understand how things work behind the scenes.
                    </p>
                    <Link to='/' className="btn">Back To Home</Link>
                  </div>
                </div>
              </div>
            </div>
        </div>
      );
    }
}

export default Creator;
