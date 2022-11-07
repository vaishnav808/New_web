import React from "react";
import "../App.css"
import "./Adas_Archi.css"
import { BrowserRouter as Router, Route } from "react-router-dom";




const Adas_Archi = () => {
    return (
        <div>
            <nav aria-label="breadcrumb" id="breadcr">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item "><a class="text-white" href="/">Home</a></li>
                    <li  id="currentpage" class="breadcrumb-item ">Adas architecture </li>
                </ol>
            </nav>
        <div class="container-fluid " id="bodyac" >
            <div id="title"><p class="text-start"><h2>ADAS AECHITECTURE</h2></p></div>
            <div id="info"><p class="text-start">
                <h6>      </h6>There are a number of sensors which are increasingly being used. These are namely cameras, medium and long-range radar, ultrasonic, and LIDAR.. Data generated from these sensors go through fusion process to authenticate the data so as to enable the computer software perform the necessary tasks to activate the driver assistance system to take correct decisions. These decisions are related to parking assistance, automatic emergency breaking, pedestrian detection, surrounding view, and even drowsiness of the driver. The functional components such as various types of sensors collecting data from immediate surrounding environment are related to ADAS architecture that helps to perform necessary tasks as shown in the figure. The forward collision-avoidance ECU module is located in the windshield, supported with the blind spot ultrasonic sensors and related ADAS processor may be located in the side mirrors or other location areas.
            </p></div>
            <div id='usecase'>
                <img src="./img/adas.jpg" class="d-block w-100" alt="..."></img>
            </div><br></br>
            <div id="info"><p class="text-start">
                The architecture  of the electronic control units (ECUs) is responsible for executing advanced driver assistance systems (ADAS) in vehicles which is changing for its response during the process of driving. Automotive system architect integrates multiple applications into ADAS ECUs that serve multiple functions of ITS architecture as shown in the Figure show Architecture for other functions related to Forward Collision and Parking Assistance respectively.
            </p></div>
            <div id='usecase'>
                <img src="./img/ADASsystem.png" class="d-block w-100" alt="..."></img>
            </div><br></br>
            <div id="info"><p class="text-start">
                Hardware architecture of ADAS and autonomous driving, includes automotive Ethernet, TSN, Ethernet switch and gateway, and domain controller while Software architecture of ADAS and autonomous driving, including AUTOSAR Classic and Adaptive, ROS 2.0 and QNX.            </p></div>
        </div>
        </div>

    );
};

export default Adas_Archi;