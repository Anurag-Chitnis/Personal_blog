import React from 'react';
import Navbar from '../Navbar/Navbar';

class PageTwo extends React.Component {
  render(){
    return(
      <div>
        <Navbar appState={this.props.appState}/>
        <div className="blog">
          <section className="intro">
            <div className="row">
              <div className="col-1-of-2">
                <div id="pg2s1" className="blog__content">
                    <h2 className="blog__heading--sub">Index</h2>
                    <ul className='blog__list'>
                      <li className="blog__item">Virtual Memory</li>
                      <li className="blog__item">Page And Page Frames</li>
                      <li className="blog__item">Hit And Page Fault</li>
                      <li className="blog__item">Page Replacement</li>
                      <li className="blog__item">Dirty Page</li>
                    </ul>
                </div>
              </div>
              <div className="col-1-of-2">
                <div className="blog__container">
                  <div className="blog__wrapper">
                    <h2 className='blog__heading'>Virtual memory</h2>
                    <p className="blog__para">
                      Instead of jumping to defination lets get started with tiny steps
                      See As We Talked in memory hierarchy blog page about paging basics if you have not read it please read it first
                      So we discussed if You Want to watch a movie entire 2Gb or 4Gb movie is not loaded directly in RAM small parts of
                      it are loaded this small parts are called pages. Now Virtual Memory Consits this pages
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="intro">
            <div className="row">
              <div className="col-1-of-2">
                <div className="blog__content">
                  <h2 className="blog__heading--sub">Points From virtual Memory</h2>
                  <ul className='blog__list'>
                    <li className="blog__item">64TB Storage</li>
                    <li className="blog__item">Consists of pages</li>
                    <li className="blog__item">Pages load in RAM</li>
                  </ul>
                </div>
              </div>
              <div className="col-1-of-2">
                <div className="blog__container">
                  <div className="blog__wrapper">
                    <h2 className='blog__heading'>Page And Page frame</h2>
                    <p className="blog__para">
                      Now We Know What is Page. Page is small part of movie which is loaded in RAM.
                      Now RAM is also divided in something called page frame. Now pages are loaded in page
                      frames. Each page is of size 4KB. Now each page block consist of 4096 locations
                      Now Just Wait For A second i will come to this point in the very next section
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="intro">
            <div className="row">
              <div className="col-1-of-2">
                <div className="blog__content">
                  <h2 className="blog__heading--sub">Points From Page Frame</h2>
                  <ul className='blog__list'>
                    <li className="blog__item">Page is divided in page frame</li>
                    <li className="blog__item">Page load in page frame</li>
                    <li className="blog__item">Size of page is 4KB</li>
                    <li className="blog__item">4096 locations in page</li>
                  </ul>
                </div>
              </div>
              <div className="col-1-of-2">
                <div className="blog__container">
                  <div className="blog__wrapper">
                    <h2 className='blog__heading'>Hit And Page Fault</h2>
                    <p className="blog__para">
                      Now Whenever what is ask is available in RAM then it is called HIT.
                      But if its not available in RAM then it called page fault or miss.
                      Now Averagely Computer have 95%-98% hit ratio that out of 100 times 98 times
                      what we ask is available in RAM. Now You Will ask how it is possible, See
                      when page fault occurs means what we ask is not present in ram so we jump todo
                      virtual memory to get that page. Now we are asking a location in page as i said
                      there are 4096 locations in a single page. Not just the required location is taken
                      entire block of 4096 location is taken. Thus next time it will available in RAM.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="intro">
            <div className="row">
              <div className="col-1-of-2">
                <div className="blog__content">
                  <h2 className="blog__heading--sub">Points From Hit/Miss</h2>
                  <ul className='blog__list'>
                    <li className="blog__item">Available in RAM (Hit)</li>
                    <li className="blog__item">Not Available in RAM (Miss)</li>
                    <li className="blog__item">95% Hit Ratio</li>
                  </ul>
                </div>
              </div>
              <div className="col-1-of-2">
                <div className="blog__container">
                  <div className="blog__wrapper">
                    <h2 className='blog__heading'>Page Replacement</h2>
                    <p className="blog__para">
                      Page Replacement policies or page replacement is very big topic
                      but i will be covering in short. Lets say you have opened 10 apps
                      in which there is a word file which you have not opened from long time.
                      And You are Trying to open another 5 apps. Since, there are limited pages
                      in RAM there page replacement policies which says the page which you have'nt opened from
                      long time it will be replaced with new page.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="intro">
            <div className="row">
              <div className="col-1-of-2">
                <div className="blog__content">
                  <h2 className="blog__heading--sub">Points From Page Replacement</h2>
                  <ul className='blog__list'>
                    <li className="blog__item">First In First Out policy</li>
                    <li className="blog__item">Least Use Replacement</li>
                  </ul>
                </div>
              </div>
              <div className="col-1-of-2">
                <div className="blog__container">
                  <div className="blog__wrapper">
                    <h2 className='blog__heading'>Dirty Page/Dirty Bit</h2>
                    <p className="blog__para">
                      Now as we saw the new page is replaced by the page which is not in use
                      for long time. But  What if that old page was modified and not saved so in that
                      case the old information will be lost. So there is dirty bit count in RAM. So if the
                      page is modified dirty page count will be 1 so a tempory file will be made,so that your information
                      is not lost then you reopen it again and press save button dirty bit will be 0 and temp file will be deleted
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

export default PageTwo;
