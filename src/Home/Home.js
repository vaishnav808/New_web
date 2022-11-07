import React from "react";
import "../App.css"
import "./Home.css"

const Home = () => {
  return (
    <div class="container-fluid" id="homec">
      <div id="title"><p class="text-start"><h2>What is ADAS ?</h2></p></div>
      <div id="sub-title"><p class="text-start"><h4><u>Defination:</u></h4></p></div>
      <div id="info"><p class="text-start">
        Almost all vehicle accidents are caused by human error, which can be avoided with Advanced Driver Assistance Systems (ADAS). The role of ADAS is to prevent deaths and injuries by reducing the number of car accidents and the serious impact of those that cannot be avoided.
      </p></div>

      <div id="sub-title"><p class="text-start"><h4><u>Essential safety-critical ADAS applications include:</u></h4></p></div>
      <div id="info"><p class="text-start">
        • Pedestrian detection/avoidance<br></br>
        •Lane departure warning/correction<br></br>
        •Traffic sign recognition<br></br>
        •Automatic emergency braking<br></br>
        •Blind spot detection<br></br>
        These lifesaving systems are key to the success of ADAS applications. They incorporate the latest interface standards and run multiple vision-based algorithms to support real-time multimedia, vision coprocessing, and sensor fusion subsystems.

        The moderinization of ADAS applications is the first steps toward realizing autonomous vehicles.</p></div>


      <br></br>
      <div id="title"><p class="text-start"><h2>How does ADAS work?</h2></p></div>
      <div id='usecase'>
        <img src="./img/adas_working.webp" class="d-block w-100" alt="..."></img>
      </div><br></br>
      <div id="info"><p class="text-start">
        Automobiles are the foundation of the next generation of mobile-connected devices, with rapid advances being made in autonomous vehicles. Autonomous application solutions are partitioned into various chips, called systems on a chip (SoCs). These chips connect sensors to actuators through interfaces and high-performance electronic controller units (ECUs).

        Self-driving cars use a variety of these applications and technologies to gain 360-degree vision, both near (in the vehicle’s immediate vicinity) and far. That means hardware designs are using more advanced process nodes to meet ever-higher performance targets while simultaneously reducing demands on power and footprint.
      </p></div>
      <div id="title"><p class="text-start"><h2>What are the Different ADAS Levels?</h2></p></div>
      <div id='usecase'>
        <img src="./img/adas_levels.jpg" class="d-block w-100" alt="..."></img>
      </div><br></br>
      <div id="info"><p class="text-start">
        A global association of automotive engineers and allied technological professionals has developed a classification system that determines the level of automation a vehicle may provide. The levels are numbered from 0 to 5. The level progresses from automobiles with no automated driving systems to vehicles with fully automated driving systems.

        The 5 ADAS levels of automation are explained below:</p></div>
      <div id="sub-title"><p class="text-start"><h4><u>ADAS Level 0 – No Automation:</u></h4></p></div>
      <div id="info"><p class="text-start">
        The driver is entirely responsible for managing the vehicle, including steering, braking, accelerating, and slowing down. Even automated emergency braking, which delivers severe braking in the case of a collision, is categorized as Level 0 since it does not act continuously.
        <br></br>
        <strong>Example:</strong> Backup cameras, blind spot warnings, and collision warnings are examples of safety systems that can be found in Level 0 automobiles. </p></div>

      <div id="sub-title"><p class="text-start"><h4><u>ADAS Level 1 – Driver Assistance:</u></h4></p></div>
      <div id="info"><p class="text-start">
        At this tier, the automated systems begin to take control of the vehicle in specified situations, but not completely. Drivers can remove their feet off the pedals depending on the functionality. <br></br>
        <strong>Example:</strong>  Adaptive cruise control, which governs acceleration and braking in highway driving, is an example of Level 1 automation.</p></div>
      <div id="sub-title"><p class="text-start"><h4><u>ADAS Level 2 – Semi-Automated:</u></h4></p></div>
      <div id="info"><p class="text-start">
        Several assistance systems are frequently coupled here so that the vehicle may conduct individual driving movements, such as parking or navigating stop-and-go traffic, independently. During these maneuvers, the driver can relinquish control of the vehicle but must stay aware and ready to assist at any time if something does not work as expected.<br></br>
        <strong>Example:</strong>  Lane departure warning or distance warning.</p></div>

      <div id="sub-title"><p class="text-start"><h4><u>ADAS Level 3 – Conditional Automation:</u></h4></p></div>
      <div id="info"><p class="text-start">
        Drivers at Level 3 can detach from the process of driving, but only in certain circumstances. Specific vehicle speeds, road types, and weather circumstances may be restricted. However, because drivers can divert their attention to another work, such as reading a phone or newspaper, this is widely seen as the first step toward autonomous driving. Nonetheless, when the system asks it, the driver is supposed to take control.<br></br>
        <strong>Example:</strong> The driver can sit back and relax as the system handles everything — acceleration, steering, and braking — thanks to features like traffic jam pilot. When the vehicle passes through a traffic jam and the vehicle speed increases, the vehicle sends an alarm to the driver to restore control.</p></div>

      <div id="sub-title"><p class="text-start"><h4><u>ADAS Level 4 – High Automation:</u></h4></p></div>
      <div id="info"><p class="text-start">
        At this level, the autonomous driving system of the vehicle is completely ideal for monitoring the driving environment and performing all driving functions. If there is an environmental circumstance that demands human control, such as thick snow, the vehicle may warn the driver that it is approaching its operational limits. If the driver does not answer, the vehicle will be automatically locked.<br></br>
        <strong>Example:</strong> Fully automated driving. </p></div>

      <div id="sub-title"><p class="text-start"><h4><u>ADAS Level 5 – Full Automation:</u></h4></p></div>
      <div id="info"><p class="text-start">
        We have arrived at completely autonomous driving with Level 5: Unlike earlier stages of autonomous driving, no driving competence or license is necessary to operate the vehicle.

        This is why prototypes of fully autonomous vehicles lack a steering wheel and pedals, as they can drive completely autonomously and require no human input. The user only needs to specify the pick-up and destination locations.

        <br></br>
        <strong>Example:</strong> The driver is reduced to the role of a mere passenger.</p></div>


    </div>

  );
}


export default Home;