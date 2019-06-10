import React from 'react';
import {Link} from 'react-router-dom';

class Card extends React.Component {
  render(){
    return(
      <section className="card">
        <div className="row">
          <div className="col-1-of-3">
            <Link to='page1'>
              <div className="card__body">
                <div className="card__image">
                  <div className="card__image--1"></div>
                </div>
                  <div className="card__content">
                  <div className="card__heading">
                    <h2 className="heading__primary">How Internet Works</h2>
                  </div>
                  <div className="card__para">
                    <p>A distibuted system who is in no ones control still everyone controls it</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-1-of-3">
            <Link to='page2'>
              <div className="card__body">
                <div className="card__image">
                    <div className="card__image--2"></div>
                </div>
                  <div className="card__content">
                  <div className="card__heading">
                    <h2 className="heading__primary">Virtual Memory:Paging</h2>
                  </div>
                  <div className="card__para">
                    <p>In this you will know how memory managment is done using paging</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-1-of-3">
            <Link to='page3'>
              <div className="card__body">
                <div className="card__image">
                  <div className="card__image--3"></div>
                </div>
                  <div className="card__content">
                  <div className="card__heading">
                    <h2 className="heading__primary">Memory Hierachy</h2>
                  </div>
                  <div className="card__para">
                    <p>All About Memory like SRAM DRAM ROM and what are there uses</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col-1-of-3">
            <Link to='page4'>
              <div className="card__body">
                <div className="card__image">
                  <div className="card__image--4"></div>
                </div>
                  <div className="card__content">
                  <div className="card__heading">
                    <h2 className="heading__primary">Tips For HTML Centering</h2>
                  </div>
                  <div className="card__para">
                    <p>Best 5 methods to center any content with css</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-1-of-3">
            <Link to='page5'>
              <div className="card__body">
                <div className="card__image">
                  <div className="card__image--5"></div>
                </div>
                  <div className="card__content">
                  <div className="card__heading">
                    <h2 className="heading__primary">How Js Code Runs</h2>
                  </div>
                  <div className="card__para">
                    <p>In this we will talk about heap , callstack , Eventloop , And Web Api</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-1-of-3">
            <Link to='page6'>
              <div className="card__body">
                <div className="card__image">
                  <div className="card__image--6"></div>
                </div>
                  <div className="card__content">
                  <div className="card__heading">
                    <h2 className="heading__primary">This Keyword</h2>
                  </div>
                  <div className="card__para">
                    <p>We Will understand how this keyword behaves in various scopes</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    );
  }
}

export default Card;
