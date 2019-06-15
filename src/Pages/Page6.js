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
              <div id="pg6s1" className="blog__image"></div>
            </div>
            <div className="col-1-of-2">
              <div className="blog__container">
                <div className="blog__wrapper">
                  <h2 className='blog__heading'>Email Spaming</h2>
                  <p className="blog__para">
                  Spam is the jargon name of unwanted and unsolicited email. Spam email comes in two main categories: high-volume advertising, which is annoying, and hackers attempting to lure you into divulging your passwords, which is dangerous.Filtering is the popular-but-imperfect defense against spam. Filtering is built-in to many email clients. Filtering uses software that reads your incoming email for keyword combinations and then either deletes or quarantines messages that appear to be spam.  Look for a spam or junk folder in your mailbox to see your quarantined or filtered email.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="intro">
          <div className="row">
            <div className="col-1-of-2">
              <div id="pg6s2" className="blog__image"></div>
            </div>
            <div className="col-1-of-2">
              <div className="blog__container">
                <div className="blog__wrapper">
                  <h2 className='blog__heading'>Firewall</h2>
                  <p className="blog__para">
                  Firewall is a generic term to describe a barrier against destruction. In the case of computing, a firewall consists of software or hardware that protects your computer from hackers and viruses.Computing firewalls range from small antivirus software packages to complex and expensive software and hardware solutions. ​Some firewalls are free. Many computers ship with a firewall you can activate. All the many kinds of computer firewalls offer some kind of safeguard against hackers vandalizing or taking over your computer system.Just like everyone else, beginners to the internet should activate a firewall for personal use to protect their computers from viruses and malware.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="intro">
          <div className="row">
            <div className="col-1-of-2">
              <div id="pg6s3" className="blog__image"></div>
            </div>
            <div className="col-1-of-2">
              <div className="blog__container">
                <div className="blog__wrapper">
                  <h2 className='blog__heading'>Malware</h2>
                  <p className="blog__para">
                  Malware is the broad term to describe any malicious software designed by hackers. Malware includes viruses, trojans, keyloggers, zombie programs and any other software that seeks to do one of four things: <br/>
                  Vandalize your computer in some way <br/>
                  Steal your private information <br/>
                  Take remote control of your computer (zombie your computer) for other ends <br/>Manipulate you into purchasing something Malware programs are the time bombs and wicked minions of dishonest programmers. Protect yourself with a firewall and knowledge of how to prevent these programs from reaching your computer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="intro">
          <div className="row">
            <div className="col-1-of-2">
              <div id="pg6s4" className="blog__image"></div>
            </div>
            <div className="col-1-of-2">
              <div className="blog__container">
                <div className="blog__wrapper">
                  <h2 className='blog__heading'>Trojan</h2>
                  <p className="blog__para">
                  A trojan is a special kind of hacker program that relies on the user to welcome it and activate it. Named after the famous Trojan horse tale, a trojan program masquerades as a legitimate file or software program. Sometimes it is an innocent-looking movie file or an installer that pretends to be actual anti-hacker software. The power of the trojan attack comes from users naively downloading and running the trojan file. Protect yourself by not downloading files that are sent to you in emails or that you see on unfamiliar websites.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="intro">
          <div className="row">
            <div className="col-1-of-2">
              <div id="pg6s5" className="blog__image"></div>
            </div>
            <div className="col-1-of-2">
              <div className="blog__container">
                <div className="blog__wrapper">
                  <h2 className='blog__heading'>Phising</h2>
                  <p className="blog__para">
                    Phishing is the use of convincing-looking emails and web pages to lure you into typing your account numbers and passwords/PINs. Often in the form of fake PayPal warning messages or fake bank login screens, phishing attacks can be convincing to anyone who is not trained to watch for the subtle clues. As a rule, smart users—beginners and long-time users alike—should distrust any email link that says "you should log in and confirm this."
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

export default PageSix;
