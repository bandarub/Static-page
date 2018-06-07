import React, { Component } from 'react';
import borderImg from './assets/Border-BG.jpg';

class Headings extends React.Component{
    render() {
        return <div className="heading-border">
            <p>{this.props.heading}</p>
            </div>
      } 
    }
export default Headings;