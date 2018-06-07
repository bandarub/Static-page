import React, { Component } from 'react';
import Header from './Header.js';
import IconsCard from './iconscard.js';
import Recent from './Recent.js';
import Testimony from './testimonals.js';
import Development from './development.js';
import Footer from './footer.js';
import Copyright from './copyright.js';
import Headings from './heading.js';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <div className="icons-Card"> 
          <IconsCard  icon="fa fa-desktop" boldtext="SUPERBLY" normaltext=" RESPONSIVE" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet consectetur adipiscing elit duis tristique. Vestibulum lectus mauris ultrices eros in cursus." buttontext='Read More'/>
          <IconsCard  icon="fa fa-desktop" boldtext="SQEEKY" normaltext=" CLEAN" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet consectetur adipiscing elit duis tristique. Vestibulum lectus mauris ultrices eros in cursus." buttontext='Read More'/>
          <IconsCard  icon="fa fa-laptop" boldtext="MULTI" normaltext=" PURPOSE" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet consectetur adipiscing elit duis tristique. Vestibulum lectus mauris ultrices eros in cursus." buttontext='Read More'/>
          <IconsCard  icon="fa fa-refresh" boldtext="HIGHLY" normaltext=" FLEXIBLE" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet consectetur adipiscing elit duis tristique. Vestibulum lectus mauris ultrices eros in cursus." buttontext='Read More'/>
        </div>
        <div className="recent">
          <Headings heading="RECENT WORK"/>
          <div className="recent-container" >
            <Recent/>
            <Recent/>
            <Recent/>            
          </div>
        </div>
        <div className="testimomy-development">
          <div className="testimonal-container">
            <Headings heading="TESTIMONIES"/>
            <div className="testimonies">
              <Testimony/>
              <Testimony/>
              <Testimony/>
              <Testimony/>
            </div>
          </div>
          <div className="development-container">
            <Headings heading="DEVELOPMENT"/>
              <Development/>
          </div>
        </div>
        <div className="bubble">
          <p>Get in touch with us <b>now</b></p>
          <button>CONTACT US</button>
        </div>
        <div className="footer-container">
          <Footer/>
          <Copyright/>
        </div>
      </div>
    );
  }
}

export default App;
