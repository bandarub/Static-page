import React, { Component } from 'react';
const style = {
    color:'white',
}
const Footer = ()=>{
    return <div className="footer">
                <div className="col1">
                    <h4>ABOUT US</h4>
                    <p>Nisi quis eleifend quam adipiscing vitae proin sagittis nisl. Ut venenatis tellus in metus vulputate eu.</p>
                    <span>123 Street Name</span><br/>
                    <span>Road Name</span><br/>
                    <span>London</span><br/>
                    <span>+44 234567 123445</span><br/>                       
                    
                </div>
                <div className="col2">
                    <h4>LATEST TWEETS</h4>
                    <p><b style={style}>Nisi quis </b>eleifend quam adipiscing vitae proin sagittis nisl. Ut venenatis <b style={style}>tellus</b> in metus vulputate eu.</p>
                    <p><b style={style}>Nisi quis </b>eleifend quam adipiscing vitae proin sagittis nisl. Ut venenatis <b style={style}>tellus </b>in metus vulputate eu.</p>
                </div>
                <div className="col3">
                    <h4>LATEST POSTS</h4>
                    <p>Vulputate eu scelerisque felis imperdiet proin fermentum leo vel</p>
                    <p className="bluecolor">Vulputate eu scelerisque felis </p>
                    <p>Vulputate eu scelerisque felis imperdiet proin fermentum leo vel</p>
                    <p>Vulputate eu scelerisque felis imperdiet proin fermentum leo vel</p>
                </div>
                <div className="col4-container">
                    <h4>FLICKER</h4>
                    <div className="col4">
                        <div className="square"></div>
                        <div className="square"></div>
                        <div className="square"></div>
                        <div className="square"></div>
                        <div className="square"></div>
                        <div className="square"></div>
                        <div className="square"></div>
                        <div className="square"></div>
                    </div>
                </div>
    </div>
}
export default Footer;