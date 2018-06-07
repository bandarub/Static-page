import React, { Component } from 'react';
import headerImg from './assets/Header-img.png';


const Header = ()=>{
    return <div className="header-container">
                <header className="App-header">
                    <div className="imageHeader">
                        <img src={headerImg} className="App-logo" alt="logo" />
                    </div>
                    <div className="header-content">
                        <span className="header-title"><b>POWERFULLY SIMPLE</b> WITH A <b>SQWEEKY CLEAN </b>DESIGN </span>
                        <p>Find how you can offer quick and powerful solutions to your customers now</p>
                        <button>Learn More</button>
                    </div>
                </header>
                <div className="bubble">
                    <p>create a <b>powerful </b>solution now</p>
                    <button>Get started</button>
                </div>
            </div>    
}

export default Header;