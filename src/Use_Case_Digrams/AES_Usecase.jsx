import React, { useState, Fragment } from 'react';
import Driver from '../Icons/Driver';
import "../App.css"
import Enviromental_Data from '../Icons/Enviromental_data';
import Vehicle_system from '../Icons/Vehicle_system';
import HMI from '../Icons/HMI';
import ReactFlow, { ReactFlowProvider,addEdge, Background, Controls, MiniMap } from 'react-flow-renderer';



const initialElements_usecase = [
    {
        id: 'A', type: 'group', data: { label: 'AES' }, position: { x: 0, y: 0 }, style: { width: '7cm', height: '20cm', color: '000000',  border: '1px solid #222138' },
    },
    {
        id: 'B',
        sourcePosition: 'right',
        targetPosition: 'left',
        type: 'default',
        data:  {label:'IngnitionON' } ,
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
        data: { label: 'Detect Collision' },
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
        id: 'C-1',
        data: { label: 'Detect Collision' },
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
       
        data: { label: 'Potential Collision' },
        position: { x: 10, y: 200},
        parentNode: 'A',
        extent: 'parent',
        style: {
            background: '#D6D5E6',
            color: '#333',
            border: '1px solid #222138',
            width:80
           
        },

    },
    {
        id: 'E',
        
        data: { label: 'Imminent collision' },
        position: { x: 155, y: 200 },
        parentNode: 'A',
        extent: 'parent',
        style: {
            background: '#D6D5E6',
            color: '#333',
            border: '1px solid #222138',
            width:80
           
        },

    },
    {
        id: 'F',
        sourcePosition: 'right',
        targetPosition: 'left',
        data: { label: 'AES Activates' },
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
        data: { label: 'Provide Braking Assist' },
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
        data: { label: 'Detect Obstacle Free Path' },
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
        data: { label: 'Display Steering direction to driver' },
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
        data: { label: 'Provide Steering Assist' },
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
        data: { label: 'Provide Warning on collision detection' },
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
        data: { label: 'AES deactivated on driver disables' },
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
        data: { label: <Driver/> },
        position: { x: -300, y: 250 },
        
    },
    {
        id: 'X',
        sourcePosition: 'right',
        targetPosition: 'left',
        data: { label: <Enviromental_Data/> },
        position: { x: -300, y: 500},
        
    },
    {
        id: 'Y',
        sourcePosition: 'right',
        targetPosition: 'left',
        data: { label: <Vehicle_system/> },
        position: { x: 400, y: 250 },
        
    },
    {
        id: 'Z',
        sourcePosition: 'right',
        targetPosition: 'left',
        data: { label: <HMI/> },
        position: { x: 400, y: 500 },
       
    },
    
    { id: 'C-1-D', type: 'straight',style: { stroke: 'black' },label:'extend', source: 'C-1', target: 'D' },
    { id: 'C-1-E', type: 'straight',style: { stroke: 'black' },label:'extend', source: 'C-1', target: 'E' },
    { id: 'C-E', type: 'straight',style: { stroke: 'black' }, source: 'C', target: 'Z' },
    { id: 'I-Z', type: 'straight',style: { stroke: 'black' }, source: 'I', target: 'Z' },
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
    { id: 'W-B', type: 'straight',style: { stroke: 'black' }, source: 'W', target: 'B' },
    { id: 'W-I', type: 'straight',style: { stroke: 'black' }, source: 'W', target: 'I' },
    { id: 'W-J', type: 'straight',style: { stroke: 'black' }, source: 'W', target: 'J' },
    { id: 'W-K', type: 'straight',style: { stroke: 'black' }, source: 'W', target: 'K' },
    { id: 'X-C', type: 'straight',style: { stroke: 'black' }, source: 'X', target: 'C' },
    { id: 'X-F', type: 'straight',style: { stroke: 'black' }, source: 'X', target: 'F' },
    { id: 'X-G', type: 'straight',style: { stroke: 'black' }, source: 'X', target: 'G' },
    { id: 'X-H', type: 'straight',style: { stroke: 'black' }, source: 'X', target: 'H' },
    { id: 'X-J', type: 'straight',style: { stroke: 'black' }, source: 'X', target: 'J' },
    { id: 'X-K', type: 'straight',style: { stroke: 'black' }, source: 'X', target: 'K' },
]
const onLoad = (reactFlowInstance) => {
    reactFlowInstance.fitView();
}

const AES = () => {

    const [elements, setElements] = useState(initialElements_usecase);
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

export  default AES ;