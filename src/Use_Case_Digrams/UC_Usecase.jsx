import React, { useState, Fragment } from 'react';
import Driver from '../Icons/Driver';
import "../App.css"
import Enviromental_Data from '../Icons/Enviromental_data';
import Vehicle_system from '../Icons/Vehicle_system';
import HMI from '../Icons/HMI';
import ReactFlow, { ReactFlowProvider,addEdge, Background, Controls, MiniMap } from 'react-flow-renderer';



const initialElements_usecase = [
    {
        id: 'A', type: 'group', data: { label: '.' }, position: { x: 0, y: 0 }, style: { width: '7cm', height: '27cm', color: '000000',  border: '1px solid #222138' },
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
        data: { label: 'Activate urban chauffer' },
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
        data: { label: 'Activate urban chauffer' },
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
        id: 'F',
        sourcePosition: 'right',
        targetPosition: 'left',
        data: { label: 'Set safe Speed and Distance' },
        position: { x: 50, y: 155 },
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
        data: { label: 'Performe Acc with Stop and go' },
        position: { x: 50, y: 230 },
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
        data: { label: 'Detect On comming traffic' },
        position: { x: 50, y: 310 },
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
        data: { label: 'Peform Intersection Assist(IA)' },
        position: { x: 50, y: 380 },
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
        data: { label: 'Perform Overtaking Assist(OA)' },
        position: { x: 50, y: 450 },
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
        data: { label: 'Peform Active Lane Change Assist' },
        position: { x: 50, y: 520 },
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
        data: { label: 'Perform Autometic Breaking System' },
        position: { x: 50, y: 590 },
        parentNode: 'A',
        extent: 'parent',
        style: {
            background: '#D6D5E6',
            color: '#333',
            border: '1px solid #222138',
           
        },

    },
    {
        id: 'M',
        sourcePosition: 'right',
        targetPosition: 'left',
        data: { label: 'Provide Warning on Collision Detection' },
        position: { x: 50, y: 660 },
        parentNode: 'A',
        extent: 'parent',
        style: {
            background: '#D6D5E6',
            color: '#333',
            border: '1px solid #222138',
           
        },

    },
    {
        id: 'N',
        sourcePosition: 'right',
        targetPosition: 'left',
        data: { label: 'Provide Warning On Critical Condition' },
        position: { x: 50, y: 730 },
        parentNode: 'A',
        extent: 'parent',
        style: {
            background: '#D6D5E6',
            color: '#333',
            border: '1px solid #222138',
           
        },

    },
    {
        id: 'O',
        sourcePosition: 'right',
        targetPosition: 'left',
        data: { label: 'Provide Ego Vehicle Status To Driver' },
        position: { x: 50, y: 800 },
        parentNode: 'A',
        extent: 'parent',
        style: {
            background: '#D6D5E6',
            color: '#333',
            border: '1px solid #222138',
           
        },

    },
    {
        id: 'P',
        sourcePosition: 'right',
        targetPosition: 'left',
        data: { label: 'Perform MRM' },
        position: { x: 50, y: 870 },
        parentNode: 'A',
        extent: 'parent',
        style: {
            background: '#D6D5E6',
            color: '#333',
            border: '1px solid #222138',
            font:'20px',
           
        },

    },
    {
        id: 'Q',
        sourcePosition: 'right',
        targetPosition: 'left',
        data: { label: 'Detective urban chauffer' },
        position: { x: 50, y: 940 },
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
        position: { x: -400, y: 400 },
        
    },
    {
        id: 'X',
        sourcePosition: 'right',
        targetPosition: 'left',
        data: { label: <Enviromental_Data/> },
        position: { x: -400, y: 700},
        
    },
    {
        id: 'Y',
        sourcePosition: 'right',
        targetPosition: 'left',
        data: { label: <Vehicle_system/> },
        position: { x: 500, y: 400 },
        
    },
    {
        id: 'Z',
        sourcePosition: 'right',
        targetPosition: 'left',
        data: { label: <HMI/> },
        position: { x: 500, y: 700 },
       
    },
    
    
    { id: 'W-B', type: 'straight',style: { stroke: 'black' }, source: 'W', target: 'B' },
    { id: 'W-C', type: 'straight',style: { stroke: 'black' }, source: 'W', target: 'C' },
    { id: 'W-F', type: 'straight',style: { stroke: 'black' }, source: 'W', target: 'F' },
    { id: 'W-M', type: 'straight',style: { stroke: 'black' }, source: 'W', target: 'M' },
    { id: 'W-N', type: 'straight',style: { stroke: 'black' }, source: 'W', target: 'N' },
    { id: 'W-O', type: 'straight',style: { stroke: 'black' }, source: 'W', target: 'O' },
    { id: 'W-Q', type: 'straight',style: { stroke: 'black' }, source: 'W', target: 'Q' },
    { id: 'B-Y', type: 'straight',style: { stroke: 'black' }, source: 'B', target: 'Y' },
    { id: 'C-Y', type: 'straight',style: { stroke: 'black' }, source: 'C', target: 'Y' },
    { id: 'F-Y', type: 'straight',style: { stroke: 'black' }, source: 'F', target: 'Y' },
    { id: 'G-Y', type: 'straight',style: { stroke: 'black' }, source: 'G', target: 'Y' },
    { id: 'H-Y', type: 'straight',style: { stroke: 'black' }, source: 'H', target: 'Y' },
    { id: 'I-Y', type: 'straight',style: { stroke: 'black' }, source: 'I', target: 'Y' },
    { id: 'J-Y', type: 'straight',style: { stroke: 'black' }, source: 'J', target: 'Y' },
    { id: 'K-Y', type: 'straight',style: { stroke: 'black' }, source: 'K', target: 'Y' },
    { id: 'L-Y', type: 'straight',style: { stroke: 'black' }, source: 'L', target: 'Y' },
    { id: 'M-Y', type: 'straight',style: { stroke: 'black' }, source: 'M', target: 'Y' },
    { id: 'N-Y', type: 'straight',style: { stroke: 'black' }, source: 'N', target: 'Y' },
    { id: 'P-Y', type: 'straight',style: { stroke: 'black' }, source: 'P', target: 'Y' },
    { id: 'Q-Y', type: 'straight',style: { stroke: 'black' }, source: 'Q', target: 'Y' },
    { id: 'M-Z', type: 'straight',style: { stroke: 'black' }, source: 'M', target: 'Z' },
    { id: 'N-Z', type: 'straight',style: { stroke: 'black' }, source: 'N', target: 'Z' },
    { id: 'O-Z', type: 'straight',style: { stroke: 'black' }, source: 'O', target: 'Z' },
    { id: 'Q-Z', type: 'straight',style: { stroke: 'black' }, source: 'Q', target: 'Z' },
    { id: 'X-G', type: 'straight',style: { stroke: 'black' }, source: 'X', target: 'G' },
    { id: 'X-H', type: 'straight',style: { stroke: 'black' }, source: 'X', target: 'H' },
    { id: 'X-I', type: 'straight',style: { stroke: 'black' }, source: 'X', target: 'I' },
    { id: 'X-J', type: 'straight',style: { stroke: 'black' }, source: 'X', target: 'J' },
    { id: 'X-K', type: 'straight',style: { stroke: 'black' }, source: 'X', target: 'K' },
    { id: 'X-L', type: 'straight',style: { stroke: 'black' }, source: 'X', target: 'L' },
    { id: 'X-M', type: 'straight',style: { stroke: 'black' }, source: 'X', target: 'M' },
    { id: 'X-N', type: 'straight',style: { stroke: 'black' }, source: 'X', target: 'N' },
    { id: 'X-P', type: 'straight',style: { stroke: 'black' }, source: 'X', target: 'P' },
]
const onLoad = (reactFlowInstance) => {
    reactFlowInstance.fitView();
}

const UC = () => {

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
                <h5>Urban Chauffeur</h5>
           
        </div>
    )
}

export  default UC ;