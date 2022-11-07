import React from "react";
import "../App.css"
import ADS from "../Use_Case_Digrams/ADS_UseCase";
import ADS_System_Boundary from "../System_Boundry_Diagram/ADS_SystemBoundary";
import ADS_State_Machine from "../State_Machine__Diagrams/ADS_StateMachine";
import ADS_Flow from "../Functional_Flow_Diagrams/ADS_FunctionalFlow";
import "./Highway_Driving_Assist.css"
import { BrowserRouter as Router, Route } from "react-router-dom";




const Lane_Centering_Assist= () => {

    return (


        <div id="body_AES">
            <nav aria-label="breadcrumb" id="breadcr">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item "><a class="text-white" href="/">Home</a></li>
                    <li class="breadcrumb-item "><a class="text-white" href="/all_features">ADAS Features</a></li>
                    <li  id="currentpage" class="breadcrumb-item ">Lane Centering Assist</li>
                </ol>
            </nav>
            <div class="container-fluid" >
        <h1>Cooming Soon.....</h1>
        </div>
      
        </div>

    );
}


export default Lane_Centering_Assist;