import React from 'react';
import Navbar from '../Navbar/Navbar';

function PageThree(props) {
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
                  <h2 className='blog__heading'>Types of memory</h2>
                  <p className="blog__para">
                    So let me first clear i am going from very basics so every person can understand.
                    Basically our computer is divided in several memory types in which first i would like
                    to talk about primary memory which consits of RAM and ROM .RAM is volatile memory whatever is on RAM
                    will go away when power is OFF opposite to that is ROM. But <strong> What is the Function of ROM. It Consits of program called BIOS (operating system program) so when power is ON computer goes to vector address from where BIOS program is triggered. </strong>
                    And What is Function of RAM , All programs run on RAM
                  </p>
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
                  <h2 className='blog__heading'>Types of RAM</h2>
                  <p className="blog__para">
                    Now There Are Two type of RAM one is SRAM and another is DRAM <br/>
                    SRAM is fast but very expensive, And DRAM is Slow but cheap
                    SRAM uses flip-flops thus it is fase DRAM uses Capacitors thus it is slow <br/>
                    So the RAM which have seen that green color strip which we use is DRAM
                  </p>
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
                  <h2 className='blog__heading'>Little bit about paging</h2>
                  <p className="blog__para">
                    Now everything is proccessed in proccessor, if proccessor wants something it will first ask RAM (FOR NOW) if it is not present in RAM
                    it will ask hard disk. Now suppose you want to play a movie that is of 4k quality and lets say its of size 10GB now how can a movie be played on 8GB RAM as i told early everything runs on RAM.
                    Now a entire 10GB movie is not loaded in RAM small parts of it are loaded in RAM this small parts are called pages this pages come from virtual memory which is diffrent topic i have disccussed in a blog
                  </p>
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
                  <h2 className='blog__heading'>Cache memory</h2>
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

export default PageThree;
