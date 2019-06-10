import React from 'react';
import Navbar from '../Navbar/Navbar';

function PageFour(props) {
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
                  <h2 className='blog__heading'>1: Use Flexbox</h2>
                  <p className="blog__para">The Best Way and to centralize something is to use Flexbox
                    Use These lines <br/><br/>
                  <strong>
                    display: flex;<br/>
                    justify-content: center;<br/>
                    align-items: center;<br/><br/>
                  </strong>
                    Use Flex On the Parent of what you want to centralize <br/>
                  Example: You Want To Center or flex ul (unordered list) , then give above properties to parent of ul
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
                  <h2 className='blog__heading'>2: Use Absolute Position</h2>
                  <p className="blog__para">
                    When You use position absolute it takes that element and completely takes out of normal flow
                    of html , Thus be cautious while using position absolute (If You Are A Begginer)
                    Use These line to center your Element: <br/>
                    <strong>
                      position: absolute;<br/>
                      top: 50%;<br/>
                      left: 50%;<br/>
                      transform: translate(-50%,-50%);<br/>
                    </strong>
                    Now The Logic is position absolute takes away the normal flow, Then
                    top 50% means from the reference point you specified from there push it to 50% or by default the top left corner of window
                    same for the left 50%. Type This code you will see element is not exactly at center because
                    the point of element ex: h1 tag from which we specify top and left is from top left corner
                    to centralize things we need center of element that is done by transform property
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
                  <h2 className='blog__heading'>3: Use Margin Auto</h2>
                  <p className="blog__para">
                    If the element is block level element then just type: <br/>
                    <strong>
                      margin: 0 auto;<br/>
                    </strong>
                    But If the Width: 100%; then it will not work since you are taking
                    entire width of window what are you centering ,
                    So control of width is very important
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
                  <h2 className='blog__heading'>4: Use Text Align</h2>
                  <p className="blog__para">
                    Yes Use text-align. See The element You Want To center add <br/>
                    <strong>
                      text-align: center;<br/>
                    </strong>
                    To its parent Element then add <br/>
                    <strong>
                      display: inline-block; <br/>
                    </strong>
                    To the element You Want to center
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
                  <h2 className='blog__heading'>5: Use Tables</h2>
                  <p className="blog__para">
                    Personally, using CSS Table is my least fav for applying vertical alignment. It works in old browsers like Internet Explorer 8. This method is done by setting the container element display to table, while the child element is to be displayed as table-cell then use the vertical-align property to center text vertically.
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

export default PageFour;
