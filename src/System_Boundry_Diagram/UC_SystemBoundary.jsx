import React, { useState, Fragment } from 'react';
import "../App.css"
import ReactFlow, {ReactFlowProvider, addEdge, Background, Controls, MiniMap } from 'react-flow-renderer';



const initialElements = [
    /*Node*/
    {id: '1-a', type: 'default', data:{label: ''}, position: {x:0,y:-50} ,style:{border:'0px solid black',width:60,height:40,font:{size:'100%'}}},
    {id: '1-b', type: 'default', data:{label: ''}, position: {x:60,y:-50} ,style:{border:'0px solid black',width:60,height:40,font:{size:'100%'}}},
    {id: '1', type: 'default', data:{label: 'Driver'}, position: {x:0,y:-50} ,style:{border:'1px solid black',width:120,height:40,font:{size:'100%'}}},
   
    {id: '2-a', type: 'default', data:{label: ''}, position: {x:0,y:50},style:{border:'0px solid black',width:60,height:40,font:{size:'100%'}} },
    {id: '2-b', type: 'default', data:{label: ''}, position: {x:60,y:50},style:{border:'0px solid black',width:60,height:40,font:{size:'100%'}} },
    {id: '2', type: 'default', data:{label: 'HMI'}, position: {x:0,y:50},style:{border:'1px solid black',width:120,height:40,font:{size:'100%'}} },
   
   
    {id: '3-a',sourcePosition: 'right', targetPosition: 'left', type: 'default', data:{label: ''}, position: {x:0,y:150},style:{border:'0px solid black',width:120,height:40,font:{size:'100%'}} },
    {id: '3-b',sourcePosition: 'right', targetPosition: 'left', type: 'default', data:{label: ''}, position: {x:0,y:190},style:{border:'0px solid black',width:120,height:40,font:{size:'100%'}} },
    {id: '3-f',sourcePosition: 'right', targetPosition: 'left', type: 'default', data:{label: ''}, position: {x:0,y:220},style:{border:'0px solid black',width:120,height:40,font:{size:'100%'}} },
    {id: '3-c',sourcePosition: 'right', targetPosition: 'left', type: 'default', data:{label: ''}, position: {x:0,y:260},style:{border:'0px solid black',width:120,height:40,font:{size:'100%'}} },
    {id: '3-d', type: 'default', data:{label: ''}, position: {x:0,y:150},style:{border:'0px solid black',width:60,height:40,font:{size:'100%'}} },
    {id: '3-e', type: 'default', data:{label: ''}, position: {x:60,y:150},style:{border:'0px solid black',width:60,height:40,font:{size:'100%'}} },
    {id: '3', type: 'default', data:{label: 'Urban Chauffeur(UC) Controller'}, position: {x:0,y:150},style:{border:'1px solid black',width:120,height:150,font:{size:'150%'}} },
   
   
   
    {id: '4-a',sourcePosition: 'right', type: 'default', data:{label: 'Camera'}, position: {x:-240,y:150},style:{border:'1px solid black',width:100,height:30,font:{size:'100%'}} },
    {id: '4-b',sourcePosition: 'right', type: 'default', data:{label: 'Radar Sensors'}, position: {x:-240,y:190},style:{border:'1px solid black',width:100,height:30,font:{size:'100%'}} },
    {id: '4-d',sourcePosition: 'right', type: 'default', data:{label: 'Ultrasonic_sensore'}, position: {x:-240,y:230},style:{border:'1px solid black',width:100,height:45,font:{size:'100%'}} },
    {id: '4-c',sourcePosition: 'right', type: 'default', data:{label: 'In-vehicle sensors'}, position: {x:-250,y:300},style:{border:'1px solid black',width:120,height:50,font:{size:'100%'}} },
    {id: '4-e', type: 'default', data:{label: 'Enviromental Data'}, position: {x:-260,y:120},style:{border:'1px solid black',width:140,height:165,font:{size:'100%'},background: 'none'},},
    {id: '4', type: 'default', data:{label: ''}, position: {x:-280,y:95},style:{border:'1px solid black',width:180,height:270,font:{size:'100%'},background: 'none'},},
    {id: '6',type: 'default', data:{label: 'INPUT'}, position: {x:-240,y:50},style:{width:100,height:30,font:{size:'100%'}} },
    
    {id: '5-a',targetPosition: 'left', type: 'default', data:{label: 'Braking'}, position: {x:230,y:150},style:{border:'1px solid black',width:100,height:30,font:{size:'100%'}} },
    {id: '5-b',targetPosition: 'left', type: 'default', data:{label: 'Steering'}, position: {x:230,y:190},style:{border:'1px solid black',width:100,height:30,font:{size:'100%'}} },
    {id: '5-c',targetPosition: 'left', type: 'default', data:{label: 'Accelerate'}, position: {x:230,y:230},style:{border:'1px solid black',width:100,height:30,font:{size:'100%'}} },
    {id: '5', type: 'default', data:{label: ''}, position: {x:220,y:135},style:{border:'1px solid black',width:120,height:150,font:{size:'100%'},background: 'none'},},
    
    {id: '5-d', type: 'default', data:{label: 'Vehicle_System'}, position: {x:230,y:90},style:{border:'1px solid black',width:100,height:30,font:{size:'100%'},},},
    



    /*links*/
    { id: 'link-1', type: 'straight',style: { stroke: 'red' },label:'HMI Inputs', source: '2-a', target: '1-a', animated:true},
    { id: 'link-2', type: 'straight',style: { stroke: 'red' },label:'Warning', source: '3-d', target: '2-a', animated:true},
    { id: 'link-3', type: 'straight',style: { stroke: 'green' },label:'Driver Inputs', source: '1-b', target: '2-b', animated:true},
    { id: 'link-4', type: 'straight',style: { stroke: 'green' },label:' UC', source: '2-b', target: '3-e', animated:true},
    { id: 'link-5', type: 'straight',style: { stroke: 'blue' },label:'Camera data', source: '4-a', target: '3-a', animated:true},
    { id: 'link-10', type: 'straight',style: { stroke: 'blue' },label:'Ultrasnic sensore', source: '4-d', target: '3-f', animated:true},
    { id: 'link-6', type: 'straight',style: { stroke: 'blue' },label:'Radar data', source: '4-b', target: '3-b', animated:true},
    { id: 'link-7', type: 'straight',style: { stroke: 'blue' },label:'Egovehicle data', source: '4-c', target: '3-c', animated:true},
    { id: 'link-8', type: 'straight',style: { stroke: 'blue' },label:'Brake Request', source: '3-a', target: '5-a', animated:true},
    { id: 'link-9', type: 'straight',style: { stroke: 'blue' },label:'Steer Request', source: '3-b', target: '5-b', animated:true},
    { id: 'link-11', type: 'straight',style: { stroke: 'blue' },label:'Accelerete Request', source: '3-f', target: '5-c', animated:true},
    { id: 'link-12', type: 'straight',style: { stroke: 'blue' },label:'Ultrasnic sensore', source: '4', targetPosition:'Bottom', animated:true},








]
const onLoad = (reactFlowInstance) => {
    reactFlowInstance.fitView();
}

function UC_SystemBoundary(){

    const [AES_SB_elements, setElements] = useState(initialElements);
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
                  className='kk'
                    elements={AES_SB_elements}
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
     
                   
                </div>
                <h4>Urban Chauffeur</h4>
           
        </div>
    )
}

export default UC_SystemBoundary;