import React, { Component } from 'react';

class IconsCard extends React.Component {
    render() {
      return <div className="card-content">
          <i className={this.props.icon}/>
          <div className="card-text">
            <span className="card-text1"><b>{this.props.boldtext}</b></span><span className="card-text2">{this.props.normaltext}</span>
          </div>
          <p>{this.props.text}</p>
          <button className="card-button">{this.props.buttontext}</button>
        </div>;
    }
}
export default IconsCard;
