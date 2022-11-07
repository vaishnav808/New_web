import React, { useState, Fragment } from 'react';
import Driver from '../Icons/Driver';
import "../App.css"
import Enviromental_Data from '../Icons/Enviromental_data';
import Vehicle_system from '../Icons/Vehicle_system';
import HMI from '../Icons/HMI';
import ReactFlow, { ReactFlowProvider,addEdge, Background, Controls, MiniMap } from 'react-flow-renderer';



const initialElements = [
    {
        id: 'A', type: 'group', data: { label: 'HDA' }, position: { x: 0, y: 0 }, style: { width: '7cm', height: '20cm', color: '000000',  border: '1px solid #222138' },
    },
    {
        id: 'B',
        sourcePosition: 'right',
        targetPosition: 'left',
        type: 'default',
        data:  {label:'IngnitionON'} ,
        position: { x: 50, y: 30 },
        parentNode: 'A',
        extent: 'parent',
        
        style: {
            background: '#D6D5E6',
            color: '#333',
            border: '1px solid #222138',
            font:{size:'100%'}
            
           
        },
    },
    {
        id: 'C',
        sourcePosition: 'right',
        targetPosition: 'left',
        data: { label: 'Activate Acc go/stop' },
        position: { x: 50, y: 100 },
        parentNode: 'A',
        extent: 'parent',
        style: {
            background: '#D6D5E6',
            color: '#333',
            border: '1px solid #222138',
           
        },

    },
  
    {
        id: 'D',
        sourcePosition: 'right',
        targetPosition: 'left',
        data: { label: 'set safe speed,distance' },
        position: { x: 50, y: 150 },
        parentNode: 'A',
        extent: 'parent',
        style: {
            background: '#D6D5E6',
            color: '#333',
            border: '1px solid #222138',
           
        },

    },
    
    {
        id: 'E',
        sourcePosition: 'right',
        targetPosition: 'left',
        data: { label: 'Activate HDA' },
        position: { x: 50, y: 200 },
        parentNode: 'A',
        extent: 'parent',
        style: {
            background: '#D6D5E6',
            color: '#333',
            border: '1px solid #222138',
           
        },

    },
    {
        id: 'F',
        sourcePosition: 'right',
        targetPosition: 'left',
        data: { label: 'Detect location of egovehicle' },
        position: { x: 50, y: 270 },
        parentNode: 'A',
        extent: 'parent',
        style: {
            background: '#D6D5E6',
            color: '#333',
            border: '1px solid #222138',
           
        },

    },
    {
        id: 'G',
        sourcePosition: 'right',
        targetPosition: 'left',
        data: { label: 'Provide Cruise Control' },
        position: { x: 50, y: 340 },
        parentNode: 'A',
        extent: 'parent',
        style: {
            background: '#D6D5E6',
            color: '#333',
            border: '1px solid #222138',
           
        },

    },
    {
        id: 'H',
        sourcePosition: 'right',
        targetPosition: 'left',
        data: { label: 'Detect Lane marks' },
        position: { x: 50, y: 410 },
        parentNode: 'A',
        extent: 'parent',
        style: {
            background: '#D6D5E6',
            color: '#333',
            border: '1px solid #222138',
           
        },

    },
    {
        id: 'I',
        sourcePosition: 'right',
        targetPosition: 'left',
        data: { label: 'Performe Lane centering Assist' },
        position: { x: 50, y: 480 },
        parentNode: 'A',
        extent: 'parent',
        style: {
            background: '#D6D5E6',
            color: '#333',
            border: '1px solid #222138',
           
        },

    },
    {
        id: 'J',
        sourcePosition: 'right',
        targetPosition: 'left',
        data: { label: 'Provide warning' },
        position: { x: 50, y: 550 },
        parentNode: 'A',
        extent: 'parent',
        style: {
            background: '#D6D5E6',
            color: '#333',
            border: '1px solid #222138',
           
        },

    },
    {
        id: 'K',
        sourcePosition: 'right',
        targetPosition: 'left',
        data: { label: 'Provide egovehicle status to driver' },
        position: { x: 50, y: 620 },
        parentNode: 'A',
        extent: 'parent',
        style: {
            background: '#D6D5E6',
            color: '#333',
            border: '1px solid #222138',
           
        },

    },
    {
        id: 'L',
        sourcePosition: 'right',
        targetPosition: 'left',
        data: { label: 'HDA deactivated' },
        position: { x: 50, y: 690 },
        parentNode: 'A',
        extent: 'parent',
        style: {
            background: '#D6D5E6',
            color: '#333',
            border: '1px solid #222138',
           
        },

    },
    {
        id: 'W',
        sourcePosition: 'right',
        targetPosition: 'left',
        data: { label: 'Driver' },
        position: { x: -300, y: 250 },
        
    },
    {
        id: 'X',
        sourcePosition: 'right',
        targetPosition: 'left',
        data: { label: 'Enviromental Data' },
        position: { x: -300, y: 500},
        
    },
    {
        id: 'Y',
        sourcePosition: 'right',
        targetPosition: 'left',
        data: { label: 'VehicleSystem' },
        position: { x: 400, y: 250 },
        
    },
    {
        id: 'Z',
        sourcePosition: 'right',
        targetPosition: 'left',
        data: { label: 'HMI' },
        position: { x: 400, y: 500 },
       
    },
    
    
    { id: 'E-Z', type: 'straight',style: { stroke: 'black' }, source: 'E', target: 'Z' },
    { id: 'J-Z', type: 'straight',style: { stroke: 'black' }, source: 'J', target: 'Z' },
    { id: 'K-Z', type: 'straight',style: { stroke: 'black' }, source: 'K', target: 'Z' },
    { id: 'L-Z', type: 'straight',style: { stroke: 'black' }, source: 'L', target: 'Z' },
    { id: 'B-Y', type: 'straight',style: { stroke: 'black' }, source: 'B', target: 'Y' },
    { id: 'C-Y', type: 'straight',style: { stroke: 'black' }, source: 'C', target: 'Y' },
    { id: 'F-Y', type: 'straight',style: { stroke: 'black' }, source: 'F', target: 'Y' },
    { id: 'G-Y', type: 'straight',style: { stroke: 'black' }, source: 'G', target: 'Y' },
    { id: 'H-Y', type: 'straight',style: { stroke: 'black' }, source: 'H', target: 'Y' },
    { id: 'J-Y', type: 'straight',style: { stroke: 'black' }, source: 'J', target: 'Y' },
    { id: 'K-Y', type: 'straight',style: { stroke: 'black' }, source: 'K', target: 'Y' },
    { id: 'L-Y', type: 'straight',style: { stroke: 'black' }, source: 'L', target: 'Y' },
    { id: 'W-D', type: 'straight',style: { stroke: 'black' }, source: 'W', target: 'D' },
    { id: 'W-E', type: 'straight',style: { stroke: 'black' }, source: 'W', target: 'E' },
    { id: 'E-Y', type: 'straight',style: { stroke: 'black' }, source: 'E', target: 'Y' },
    { id: 'W-B', type: 'straight',style: { stroke: 'black' }, source: 'W', target: 'B' },
    { id: 'W-L', type: 'straight',style: { stroke: 'black' }, source: 'W', target: 'L' },
    { id: 'W-J', type: 'straight',style: { stroke: 'black' }, source: 'W', target: 'J' },
    { id: 'W-K', type: 'straight',style: { stroke: 'black' }, source: 'W', target: 'K' },
    { id: 'W-C', type: 'straight',style: { stroke: 'black' }, source: 'W', target: 'C' },
    { id: 'X-F', type: 'straight',style: { stroke: 'black' }, source: 'X', target: 'F' },
    { id: 'X-G', type: 'straight',style: { stroke: 'black' }, source: 'X', target: 'G' },
    { id: 'X-H', type: 'straight',style: { stroke: 'black' }, source: 'X', target: 'H' },
    { id: 'X-J', type: 'straight',style: { stroke: 'black' }, source: 'X', target: 'J' },
    { id: 'X-K', type: 'straight',style: { stroke: 'black' }, source: 'X', target: 'K' },
    { id: 'X-I', type: 'straight',style: { stroke: 'black' }, source: 'X', target: 'I' },
    { id: 'I-Y', type: 'straight',style: { stroke: 'black' }, source: 'I', target: 'Y' },
 //   { id: 'Y-I', type: 'straight',style: { stroke: 'black' }, source: 'Y', target: 'I' },

]
const onLoad = (reactFlowInstance) => {
    reactFlowInstance.fitView();
}



const ADS = () => {

    const [elements, setElements] = useState(initialElements);
    const [name, setName] = useState("")

    const addNode = () => {
        setElements(e => e.concat({
            id: (e.length + 1).toString(),
            data: { label: `${name}` },
            position: { x: 10, y: 10 }
        }));
    };

    const onConnect = (params) => setElements(e => addEdge(params, e));

    return (
        <div id="img">
            <ReactFlowProvider>
                <ReactFlow
                    className='ll'
                    elements={elements}
                    onLoad={onLoad}
                    style={{ width: '100%', height: '90vh' }}
                    onConnect={onConnect}
                    connectionLineStyle={{ stroke: "#FFCC00", strokeWidth: 5 }}
                    connectionLineType="bezier"
                    snapToGrid={true}
                    snapGrid={[16, 16]}
                >
                    <Background
                        color="#0000"
                        gap={16}
                    />

                    <Controls />
                </ReactFlow>
                </ReactFlowProvider>
                <div >
                    <br/>
                    <form class="row g-3">
  <div class="col-auto">
    <input type="text"  onChange={e => setName(e.target.value)} class="form-control" placeholder="Node Name"></input>
  </div>
  <div class="col-auto">
    <button type="button" class="btn btn-primary mb-3"  onClick={addNode}>Add Node</button>
  </div>
</form>
                   
                </div>
                <h5>Automatic Emergency Steering</h5>
           
        </div>
    )
}

export  default ADS ;