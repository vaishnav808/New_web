import React, { Component } from 'react';
import {AiFillCar } from "@react-icons/all-files/ai/AiFillCar"
import './Icon.css'

class Vehicle_system extends Component {
  render() {

    return(<div>
       <div id='icon'>
        <AiFillCar/></div>
      <div id='title'>Vehicle System</div>
    </div> );
  }
}

export default Vehicle_system;