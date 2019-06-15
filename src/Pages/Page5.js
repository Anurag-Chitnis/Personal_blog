import React from 'react';
import Navbar from '../Navbar/Navbar';

function PageFive(props) {
  return(
    <div>
      <Navbar appState={props.appState}/>
      <div className="blog">
        <section className="intro">
          <div className="row">
            <div className="col-1-of-2">
              <div id="pg5s1" className="blog__image"></div>
            </div>
            <div className="col-1-of-2">
              <div className="blog__container">
                <div className="blog__wrapper">
                  <h2 className='blog__heading'>How Js Works</h2>
                  <p className="blog__para">
                      Before understanding how js works lets understand how programming
                      language works, No matter what programming language you’re using you’ll always need some piece of software which can take the source code and make the computer actually do something. This software can be either an interpreter or a compiler. No matter which language you use there always going to be one common step of parsing the content
                      in Tree data structure. So basic concept is that source is translated into 1's and 0's which is done by engine. Google uses
                      V8 engine which is by far the fastest engine in the world.
                      In the next sections we will discuss some concepts like interpreter
                      and compiler for better understanding of the subject.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="intro">
          <div className="row">
            <div className="col-1-of-2">
              <div id="pg5s2" className="blog__image"></div>
            </div>
            <div className="col-1-of-2">
              <div className="blog__container">
                <div className="blog__wrapper">
                  <h2 className='blog__heading'>Interpreter</h2>
                  <p className="blog__para">
                    Look at the example, Interpreter will say something like
                    ok this is a function by seeing function keyword then it expects
                    name of the function after that then it sees the name,and everthing
                    that a function has (syntax wise) then it sees function call and then
                    it says ok i have seen it before let me read once again and then it executes it, the takeaway is <strong>interpreter can be used you run code
                    which is not reapeated several time when the code is repeated several time it interpret it that many times.</strong><br/>
                    Advantages: Fast in beginning <br/>
                    disadvantages: Slow at reapeated blocks <br/>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="intro">
          <div className="row">
            <div className="col-1-of-2">
              <div id="pg5s3" className="blog__image"></div>
            </div>
            <div className="col-1-of-2">
              <div className="blog__container">
                <div className="blog__wrapper">
                  <h2 className='blog__heading'>Compiler</h2>
                  <p className="blog__para">
                    On the other hand compiler goes through entire code then generates
                    machine code, which is far more optimized which can repeated code
                    very efficiently just reapeating the function call with the output value, thus program doesn't have to jump to that particular function
                    which it visited previously.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="intro">
          <div className="row">
            <div className="col-1-of-2">
              <div id='pg5s4' className="blog__image"></div>
            </div>
            <div className="col-1-of-2">
              <div className="blog__container">
                <div className="blog__wrapper">
                  <h2 className='blog__heading'>Thats it</h2>
                  <p className="blog__para">
                    Well yes i have not talked about callstack, eventloop,
                    Web api, Callback queue but soon this will coming with very
                    detailed explaination.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default PageFive;
