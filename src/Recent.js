import React, { Component } from 'react';
import email from './assets/img-placeholder.png'

const Recent = ()=>{
    return<div className="recent-card" >
        <img src={email}/>
        <div className="recent-card-text">
            <h4>Blog Title</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
    </div>
}

export default Recent ;