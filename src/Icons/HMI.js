import React, { Component } from 'react';
import {RiCodeBoxFill } from "@react-icons/all-files/ri/RiCodeBoxFill"
import './Icon.css'

class HMI extends Component {
  render() {

    return(<div>
       <div id='icon'>
        <RiCodeBoxFill/></div>
      <div id='title'>Vehicle System</div>
    </div> );
  }
}

export default HMI;