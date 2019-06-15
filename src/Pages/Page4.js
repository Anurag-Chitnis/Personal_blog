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
              <div id="pg4s1" className="blog__image"></div>
            </div>
            <div className="col-1-of-2">
              <div id="pg4cookie" className="blog__container">
                <div className="blog__wrapper">
                  <h2 className='blog__heading'>Cookies</h2>
                  <p className="blog__para">
                    Hello, world i am here with a fresh blog, And we are here discussing Cookies
                    well this are not cookies which you think, these are cookies which store your data,
                    Well when you visit site and register yourself they ask you do you want browser to remember your password,
                    when you click OK, Browser stores this information (kind of remembers you),
                    ,And then you dont have to login again and again, this information is stored in a cookie
                    But Still what is cookie, its simply info stored in your browser in the form of file called cookie.txt
                    so that browser can access it when needed, Now lets see what happens exactly , Can cookies be harmful
                    YES it can be, See cookie is like a wrapper which wraps your email and password which is then send
                    to the server which can be accessed by a hacker, And can thus access your <strong>session </strong>
                     Well how to avoid it , Dont allow to remember your password or clear the cookies time
                    to time,
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="intro">
          <div className="row">
            <div className="col-1-of-2">
              <div id='pg4s3' className="blog__image"></div>
            </div>
            <div className="col-1-of-2">
              <div className="blog__container">
                <div className="blog__wrapper">
                  <h2 className='blog__heading'>Session</h2>
                  <p className="blog__para">
                    Well in the last session we heard a word called session, If your are sleeping
                    then its ok, Well we are anyways going to discuss what a session is,
                    The activity that a user with a unique IP address spends on a Website during a specified period of time, The number of user sessions on a site is used in measuring the amount of traffic a Web site gets.
                    Well But how exactly this session gets triggered What is the flow ,
                    See when we send email and password to the server,server verifies this credentials
                    and looks for these credentials in Database and verifies it , Then server creates
                    a temporary user session and issues cookie with and ID, Now anytime user want
                    to Visit the website he/she doesnt have to give the credentials again they just
                    have to send the cookie and session will start.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="intro">
          <div className="row">
            <div className="col-1-of-2">
              <div id="pg4s2" className="blog__image"></div>
            </div>
            <div className="col-1-of-2">
              <div className="blog__container">
                <div className="blog__wrapper">
                  <h2 className='blog__heading'>LocalStorage</h2>
                  <p className="blog__para">
                    Now we all know what a session and cookie is, Yeah i have left
                    many things about them but see these blogs will give a overview and
                    explain concepts in short for complete overview you have to dig a little bit on youtube, Ok lets get back to topic what is LocalStorage
                    See, its just another Way of stroing data on browser, Well then why not use cookies, Well cookies are very small size(5kB) and the expire too,
                    LocalStorage doesnt expires and remains life long until you clear it
                    and also its size is more than cookie (5MB). My blog uses LocalStorage
                    thus if you have laptop you can play with it.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="intro">
          <div className="row">
            <div className="col-1-of-2">
              <div id='pg4s4' className="blog__image"></div>
            </div>
            <div className="col-1-of-2">
              <div id="pg4oauth" className="blog__container">
                <div className="blog__wrapper">
                  <h2 className='blog__heading'>What is Oauth</h2>
                  <p className="blog__para">
                    In this you will understand most of the things discussed till Now Hope Soo ;),
                    See basically i am talking about SignIn with google or facebook,
                    Lets say you want to open spotify then you clicked SignIn with facebook then you got redirected to facebook which says do you want spotify to access you account you clicked yes and WOO! you got logged in , But What happended exactly, See when you clicked SignIn at that
                    time you asked a access grant to facebook. Then you clicked yes to grant access of your facebook account to spotify app, Now facebook
                    sends code, Which you can use to make a request to have an access token for accessing the protected information, Now facebooks authorization server gives the access token only for the protected information which you asked specifically, Then you send this access token to the resource server, then resource server with the help of
                    access token identifies you and gives you the protected resources,
                    In more technical aspect it gives you a BIG object which is stored in LocalStorage or cookies which can be then again sent to the server to start the session
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
