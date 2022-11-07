import React, { Component } from 'react';
import { IoIosBody } from "@react-icons/all-files/io/IoIosBody"
import './Icon.css'

class Driver extends Component {
  render() {

    return(<div>
       <div id='icon'>
        <IoIosBody/></div>
      <div id='title'>Driver</div>
    </div> );
  }
}

export default Driver;