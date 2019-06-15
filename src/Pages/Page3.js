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
              <div id="pg3s1" className="blog__image"></div>
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
              <div id='pg3s2' className="blog__image"></div>
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
              <div id='pg3s3' className="blog__image"></div>
            </div>
            <div className="col-1-of-2">
              <div className="blog__container">
                <div className="blog__wrapper">
                  <h2 className='blog__heading'>Little bit about paging</h2>
                  <p className="blog__para">
                    Now everything is proccessed in proccessor, if proccessor wants something it will first ask RAM (FOR NOW) if it is not present in RAM
                    it will ask Virtual memory. Now suppose you want to play a movie that is of 4k quality and lets say its of size 10GB now how can a movie be played on 8GB RAM as i told early everything runs on RAM.
                    Now a entire 10GB movie is not loaded in RAM small parts of it are loaded in RAM this small parts are called pages this pages come from virtual memory.So in Short pages load from virtula memory to RAM in page frames. Ok lets move forward
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="intro">
          <div className="row">
            <div className="col-1-of-2">
              <div id='pg3s4' className="blog__image"></div>
            </div>
            <div className="col-1-of-2">
              <div id="pg3cache" className="blog__container">
                <div className="blog__wrapper">
                  <h2 className='blog__heading'>Cache memory</h2>
                  <p className="blog__para">
                    Now to understand cache lets understand one analogy. lets say i gave you one book are you going to read entire book or one page, At this very moment are you still going to read entire page or a word at a time. Thats the memory<br/>
                    Virtual memory is the book. RAM hold one page and litterally page of paging topic, And the page location which you are going to use right
                    now are words in the page. <br/>
                    That was a AHHA! moment for me when i knew it.Now there are L1,L2,L3
                    cache in memory....Why?....80386 came up with the idea of caching But
                    they realized that we are not able to access the full potential of the
                    processor and that was beacause of BUS, computer BUS which is responsible for transferring data , Now the problem was BUS operate at speed of 833MHz and processor operates at 1.6GHz and that was the gap so the Bus on which data travels is basically very slow and cant cope up the speed. Thus they came up with pentium processor with a solution of putting cache inside processor which is known as L1 and L2 cache.
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

export default PageThree;
