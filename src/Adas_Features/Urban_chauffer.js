import React from "react";
import "../App.css"
import UC from "../Use_Case_Digrams/UC_Usecase";
import UC_SystemBoundary from "../System_Boundry_Diagram/UC_SystemBoundary";
import UC_State_Machine from "../State_Machine__Diagrams/UC_StateMachine";
import UC_Flow from "../Functional_Flow_Diagrams/UC_FunctionalFlow";
import "./Urban_chauffer.css"
import { BrowserRouter as Router, Route } from "react-router-dom";




const Urban_chauffer = () => {

    return (


        <div id="body_AES">
            <nav aria-label="breadcrumb" id="breadcr">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item "><a class="text-white" href="/">Home</a></li>
                    <li class="breadcrumb-item "><a class="text-white" href="/all_features">ADAS Features</a></li>
                    <li  id="currentpage" class="breadcrumb-item ">URBAN CHAUFFEUR</li>
                </ol>
            </nav>
            <div id="title"><p class="text-start"><h2>URBAN_CHAUFFEUR</h2></p></div>
            <div id="sub-title"><p class="text-start"><h4><u>1.Working-</u></h4></p></div>
            <div id="info"><p class="text-start">
                •  Urban chauffeur is level 3 ADAS feature which takes lateral and longitudinal control of ego-vehicle in Urban roads.<br></br>
                •  The feature works when ego vehicle speed was less than particular value (70 km/hr).<br></br>
                •  The features perform ACC with stop and go, Lane keep assist (LKA), Intersection Assist (IA), Active Lane change assist (ALCA), <br></br>  
                   Turn Assist (TA), Overtaking Assist (OA), Automatic emergency braking (AEB).<br></br>
                •  It provides warning on collision detection.<br></br>
                •  Driver need to monitor the surrounding and be ready to take control in critical condition.<br></br>
                •  The feature deactivates when driver disable.<br></br>
                •  When driver not responding to critical condition, it perform AEB and finally deactivates.
            </p></div>
            <div id="sub-title"><p class="text-start"><h4><u>2.Usecase Diagram-</u></h4></p></div>
            <div id='usecase'>
                <Router>
                    <Route >
                        <UC />
                    </Route>
                </Router>
            </div><br></br>
            <div id="info"><p class="text-start">
                <div id="small_title">•Driver:</div>
                •	Driver monitor all the environmental conditions and maintain safe speed and distance.<br></br>
                •	When there is a detection of collision, then AES enables automatically.<br></br>

                <div id="small_title">•HMI:</div>
                •	On detection of collision the AES alerts the driver through HMI to take control.<br></br>

                <div id="small_title">•Environmental Data:</div>
                •	These data are used to detect the occurrence of collision and perform steering or braking action.<br></br>
                •	It is required for detection of speed of vehicle and distance between vehicle and object.<br></br>

                <div id="small_title">•Vehicle system:</div>
                •	It is required for detecting vehicle speed, distance between vehicle and object.<br></br>
                •	It is required when AES taking steering or braking control.<br></br>

            </p></div>
            <div id="sub-title"><p class="text-start"><h4><u>3.System Boundry Diagram-</u></h4></p></div>
            <div id='usecase'>
                <Router>
                    <Route >
                        <UC_SystemBoundary />
                    </Route>
                </Router>
            </div><br></br>
            <div class="container">
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th><div id="small_title">SENSOR</div></th>
                            <th><div id="small_title">INPUT</div></th>
                            <th><div id="small_title">OUTPUT</div></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td id="info-table">Ultrasonic sensor</td>
                            <td id="info-table">Ultrasonic sound waves</td>
                            <td id="info-table">Detect presence of objects, Distance from vehicle to object.</td>
                        </tr>
                        <tr>
                            <td id="info-table">Radar</td>
                            <td id="info-table">Electromagnetic waves</td>
                            <td id="info-table">Detect presence of objects, Distance from vehicle to object.</td>
                        </tr>
                        <tr>
                            <td id="info-table">Wheel speed sensor </td>
                            <td id="info-table">Electromagnetic field</td>
                            <td id="info-table">Wheel speed</td>
                        </tr>
                        <tr>
                            <td id="info-table">Torque sensor</td>
                            <td id="info-table">Mechanical force</td>
                            <td id="info-table">Torque applied</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div id="info"><p class="text-start">
                <div id="small_title">•Ultrasonic Sensor:</div>
                These sensors play a key role in detecting objects with the help of high-frequency sound waves. These sensors produce sound pulses that reflect off of near objects.
                <br></br>
                <br></br>
                <div id="small_title">•Wheel Speed Sensor:</div>
                It is used to detect rotational speed of each wheel.
                <br></br>
                <br></br>
                <div id="small_title">•Radar:</div>
                Radio Detection and Ranging System. It is basically an electromagnetic system used to detect the location and distance of an object .
                <br></br>
                <br></br>

            </p></div>
            <div id="sub-title"><p class="text-start"><h4><u>4.State Machine Diagram-</u></h4></p></div>
            <div id='usecase'>
                <Router>
                    <Route >
                    <UC_State_Machine />
                    </Route>
                </Router>
            </div><br></br>
            <div id="info"><p class="text-start">
                <div id="small_title">•INIT:</div>
                •	When Ignition was ON, the AES comes to INIT State.                <br></br>
                <br></br>
                <div id="small_title">•STANDBY:</div>
                •	After ignition, the feature goes to STANDBY State.
                •	Once collision detected, AES provide warning to driver to take over.
                •	When driver not takeover after warning, it goes to ACTIVE State from STANDBY State.
                •	When driver takeover after warning, AES remains in STANDBY State.
                <br></br>
                <br></br>
                <div id="small_title">•ACTIVE:</div>
                When driver not takeover after warning, it goes to ACTIVE State from STANDBY State.
                •	When AES can’t takeover during critical condition, it goes to FAIL state.
                <br></br>
                <br></br>
                <div id="small_title">•FAIL:</div>
                •	When AES takeover on critical condition, it goes to ACTIVE state.
                <br></br>
                <br></br>

            </p></div>
            <div id="sub-title"><p class="text-start"><h4><u>5.Fuctional Flow Diagram-</u></h4></p></div>
            <div id='usecase'>
                <Router>
                    <Route >
                        <UC_Flow />
                    </Route>
                </Router>
            </div><br></br>
        </div>

    );
}


export default Urban_chauffer;