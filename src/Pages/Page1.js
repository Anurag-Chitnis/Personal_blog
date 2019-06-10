import React from 'react';
import Navbar from '../Navbar/Navbar';

class PageOne extends React.Component {
  render(){
    return(
      <div>
        <Navbar appState={this.props.appState}/>
        <div className="blog">
          <section className="intro">
            <div className="row">
              <div className="col-1-of-2">
                <div className="blog__image"></div>
              </div>
              <div className="col-1-of-2">
                <div className="blog__container">
                  <div className="blog__wrapper">
                    <h2 className='blog__heading'>How Internet Works</h2>
                    <p className="blog__para">Well we all use internet on our daily basis how exactly it works lets dive into it.We will learing What is web spider, HTTP request,how packets are routed and much more</p>
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
                    <h2 className='blog__heading'>Web Spider</h2>
                    <p className="blog__para">Now its not literaly a spider its a program
                      whose functions are similiar to spider. See when you search something on google. googles search engine is not going to find what you need in run time. Search Engines constantly run a program called as web spider which crosses through the web pages to collect information. Each time it finds a hyperlink it follows it until it has visited every website on entire internet and records information which might be needed for search later by adding it to special data base called search index. Every search engine uses its own algorithm to display results of requested search
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
                    <h2 className='blog__heading'>HTTP Request </h2>
                    <p className="blog__para">If you have heard of AJAX or Promises or  have programmed in js you already know what is Request.
                      when we type something in search engine we send a get-request to server by using a protocol called as HTTP(Hypertext transfer protocol) Lets understand this through example when we type www.wikipedia.com  we send a get -request to wikipedia server and wikipedia server understands that you want all the HTML code for wikipedia page.Now, every time you don't send a get-request sometimes you send your personal information that is a post request and this time server attaches a cookie ID while sending the content which is saved by our computer. SO, Next time when you  send a post request this cookie ID gets attach to your request and this time server identifies you.for example ,when we fill our information in login page of facebook we make a post request facebook server identifies by the cookie ID attached with the post request
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
                    <h2 className='blog__heading'>IP address</h2>
                    <p className="blog__para">Like Your Home has a address similarly
                      website do have an ip address. This Ip address are used to locate the website by computer since you know computers understands only numbers. Currently We use IPV4 which can give us 4billion unique addresses but its not enough thus we are now trying for IPV6 i will again come to this points dont worry
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
                    <h2 className='blog__heading'>DNS server</h2>
                    <p className="blog__para">Now as we discussed each website has its own IP address but your computer doesn't always know the address thus it will ask to DNS server then DNS server will respond to you by serving your computer with Desired IP address. Each Domain has its own DNS server. <br/> Example <strong>.com</strong> Will have its own DNS, <strong>.in</strong> will have its own DNS..</p>
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
                    <h2 className='blog__heading'>Packets</h2>
                    <p className="blog__para">The information we search through search engine is broken down into packets and is routed (transported) through routers which acts as a traffic manager.if one route is conjested routers make another path for the information to travel.
                    And inside those packets are bunch of 1's and 0's which travel by routers on copper wires or fiber optic cables.
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
                    <h2 className='blog__heading'>TCP IP</h2>
                    <p className="blog__para">After you have send packets through wires in the form of BITS to server the server understands your request and send required packets to your IP address BUT, who ensures the packets are received Here comes your TCP (Transmission control protocol) TCP ensures that the required packets are received and if not, missing packets request is resend to server and rechecked again if the missing packets are received then results of your request is displayed.lets take a example if you want to play a song online. then you request goes to server .server sends you the required packets and if the packets are received as per required then TCP signs up and display the result
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
                    <h2 className='blog__heading'>Page Rank Algorithm</h2>
                    <p className="blog__para">Internet is a collection of web pages which are connected with hyperlinks,while your results are displayed on your computer it gets a rank. Which means the first result which pops on your search engine (why it is First) Each search engine uses its own algorithm to rank page . google invented its most famous algorithm to rank pages which is called pagerank algorithm. The idea is if lots of web pages think a particular web page is intresting then its probably the page you are looking for.
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
}

export default PageOne;
