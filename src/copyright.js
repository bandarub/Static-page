import React, { Component } from 'react';
import uparrow from './assets/up-arrow.png';

const Copyright = ()=>{
    return <div className="copyright-container">
                <p>COPYRIGHT©2003-2012VINSENT.INC. ALL RIGHTS RESERVED</p>
                <div className="copyright-icons">
                    <div className="media">
                        <i className='icon' className="fa fa-twitter-square"></i>
                        <p className="mediaText">Facebook</p>
                    </div>
                    <div className="media">
                        <i className='icon' className="fa fa-facebook-square"></i>
                        <p className="mediaText">Twitter</p>
                    </div>
                    <div className="media">
                        <i className='icon' className="fa fa-vimeo-square"></i>
                        <p className="mediaText">Vimeo</p>
                    </div >
                    <div className="media">
                        <i className='icon' className="fa fa-facebook-square"></i>
                        <p className="mediaText">Facebook</p>
                    </div>
                    <div className="media">
                        <i className='icon' className="fa fa-google-plus-square"></i>
                        <p className="mediaText">Google Plus</p>
                    </div>
                    <div className="media">
                        <i className='icon' className="fa fa-pinterest-square"></i>
                        <p className="mediaText">Pintrest</p>
                    </div>          
                   
                </div>
                <img  className="uparrow" src={uparrow}/>  
            </div>
}
export default Copyright;