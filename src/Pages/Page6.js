import React from 'react';
import Navbar from '../Navbar/Navbar';

function PageSix(props) {
  return(
    <div>
      <Navbar appState={props.appState}/>
      <div className="blog">
        <section className="intro">
          <div className="row">
            <div className="col-1-of-2">
              <div className="blog__image"></div>
            </div>
            <div className="col-1-of-2">
              <div className="blog__container">
                <div className="blog__wrapper">
                  <h2 className='blog__heading'>What Is Call Stack</h2>
                  <p className="blog__para">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum et veritatis deleniti fugiat modi. Fugiat sed vel quo nihil nobis. Ab vel odit tenetur ipsa modi dolorum aliquid sequi optio?</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="intro">
          <div className="row">
            <div className="col-1-of-2">
              <div className="blog__image"></div>
            </div>
            <div className="col-1-of-2">
              <div className="blog__container">
                <div className="blog__wrapper">
                  <h2 className='blog__heading'>We</h2>
                  <p className="blog__para">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum et veritatis deleniti fugiat modi. Fugiat sed vel quo nihil nobis. Ab vel odit tenetur ipsa modi dolorum aliquid sequi optio?</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="intro">
          <div className="row">
            <div className="col-1-of-2">
              <div className="blog__image"></div>
            </div>
            <div className="col-1-of-2">
              <div className="blog__container">
                <div className="blog__wrapper">
                  <h2 className='blog__heading'>DNS server</h2>
                  <p className="blog__para">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum et veritatis deleniti fugiat modi. Fugiat sed vel quo nihil nobis. Ab vel odit tenetur ipsa modi dolorum aliquid sequi optio?</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="intro">
          <div className="row">
            <div className="col-1-of-2">
              <div className="blog__image"></div>
            </div>
            <div className="col-1-of-2">
              <div className="blog__container">
                <div className="blog__wrapper">
                  <h2 className='blog__heading'>How Packets Are Transfered</h2>
                  <p className="blog__para">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum et veritatis deleniti fugiat modi. Fugiat sed vel quo nihil nobis. Ab vel odit tenetur ipsa modi dolorum aliquid sequi optio?</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="intro">
          <div className="row">
            <div className="col-1-of-2">
              <div className="blog__image"></div>
            </div>
            <div className="col-1-of-2">
              <div className="blog__container">
                <div className="blog__wrapper">
                  <h2 className='blog__heading'>Page Rank Algorithm</h2>
                  <p className="blog__para">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum et veritatis deleniti fugiat modi. Fugiat sed vel quo nihil nobis. Ab vel odit tenetur ipsa modi dolorum aliquid sequi optio?</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default PageSix;
