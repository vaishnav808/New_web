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
    {id: '3-f',sourcePosition: 'right', targetPosition: 'left', type: 'default', data:{label: ''}, position: {x:0,y:230},style:{border:'0px solid black',width:120,height:40,font:{size:'100%'}} },
    {id: '3-g',sourcePosition: 'right', targetPosition: 'left', type: 'default', data:{label: ''}, position: {x:0,y:270},style:{border:'0px solid black',width:120,height:40,font:{size:'100%'}} },
   
   
    {id: '3-c',sourcePosition: 'right', targetPosition: 'left', type: 'default', data:{label: ''}, position: {x:0,y:370},style:{border:'0px solid black',width:120,height:40,font:{size:'100%'}} },
    {id: '3-d', type: 'default', data:{label: ''}, position: {x:0,y:150},style:{border:'0px solid black',width:60,height:40,font:{size:'100%'}} },
    {id: '3-e', type: 'default', data:{label: ''}, position: {x:60,y:150},style:{border:'0px solid black',width:60,height:40,font:{size:'100%'}} },
   
    {id: '3', type: 'default', data:{label: 'Highway Driving Assist(ADS)'}, position: {x:0,y:150},style:{border:'1px solid black',width:120,height:260,font:{size:'100%'}} },
   
    {id: '4-a',sourcePosition: 'right', type: 'default', data:{label: 'Camera'}, position: {x:-240,y:150},style:{border:'1px solid black',width:100,height:30,font:{size:'100%'}} },
    {id: '4-b',sourcePosition: 'right', type: 'default', data:{label: 'Radar Sensors'}, position: {x:-240,y:190},style:{border:'1px solid black',width:100,height:30,font:{size:'100%'}} },
    {id: '4-f',sourcePosition: 'right', type: 'default', data:{label: 'GPS'}, position: {x:-240,y:230},style:{border:'1px solid black',width:100,height:30,font:{size:'100%'}} },
    {id: '4-g',sourcePosition: 'right', type: 'default', data:{label: 'Navigation Map'}, position: {x:-240,y:270},style:{border:'1px solid black',width:100,height:30,font:{size:'100%'}} },
   
   
    {id: '4-c',sourcePosition: 'right', type: 'default', data:{label: 'In-vehicle sensors'}, position: {x:-250,y:370},style:{border:'1px solid black',width:120,height:40,font:{size:'100%'}} },
    {id: '4-e', type: 'default', data:{label: 'Enviromental Data'}, position: {x:-260,y:110},style:{border:'1px solid black',width:140,height:220,font:{size:'100%'},background: 'none'},},
    {id: '4', type: 'default', data:{label: ''}, position: {x:-280,y:95},style:{border:'1px solid black',width:180,height:320,font:{size:'100%'},background: 'none'},},
    
    {id: '5-a',targetPosition: 'left', type: 'default', data:{label: 'Braking'}, position: {x:230,y:150},style:{border:'1px solid black',width:100,height:30,font:{size:'100%'}} },
    {id: '5-b',targetPosition: 'left', type: 'default', data:{label: 'Steering'}, position: {x:230,y:190},style:{border:'1px solid black',width:100,height:30,font:{size:'100%'}} },
    {id: '5-c',targetPosition: 'left', type: 'default', data:{label: 'Accelerate'}, position: {x:230,y:230},style:{border:'1px solid black',width:100,height:30,font:{size:'100%'}} },
   
    {id: '5', type: 'default', data:{label: ''}, position: {x:220,y:135},style:{border:'1px solid black',width:120,height:140,font:{size:'100%'},background: 'none'},},
    



    /*links*/
    { id: 'link-1', type: 'straight',style: { stroke: 'red' },label:'HMI Inputs', source: '2-a', target: '1-a', animated:true},
    { id: 'link-2', type: 'straight',style: { stroke: 'red' },label:'HMI Inputs', source: '3-d', target: '2-a', animated:true},
    { id: 'link-3', type: 'straight',style: { stroke: 'green' },label:'Warning', source: '1-b', target: '2-b', animated:true},
    { id: 'link-4', type: 'straight',style: { stroke: 'green' },label:'Disable ADS', source: '2-b', target: '3-e', animated:true},
    { id: 'link-5', type: 'straight',style: { stroke: 'blue' },label:'Camera data', source: '4-a', target: '3-a', animated:true},
    { id: 'link-6', type: 'straight',style: { stroke: 'blue' },label:'Radar data', source: '4-b', target: '3-b', animated:true},
    { id: 'link-10', type: 'straight',style: { stroke: 'blue' },label:'GPS Data', source: '4-f', target: '3-f', animated:true},
    { id: 'link-11', type: 'straight',style: { stroke: 'blue' },label:'Map data', source: '4-g', target: '3-g', animated:true},
    { id: 'link-7', type: 'straight',style: { stroke: 'blue' },label:'Egovehicle data', source: '4-c', target: '3-c', animated:true},
    { id: 'link-8', type: 'straight',style: { stroke: 'blue' },label:'Brake Request', source: '3-a', target: '5-a', animated:true},
    { id: 'link-9', type: 'straight',style: { stroke: 'blue' },label:'Steer Request', source: '3-b', target: '5-b', animated:true},
    { id: 'link-12', type: 'straight',style: { stroke: 'blue' },label:'Acc Request', source: '3-f', target: '5-c', animated:true},








]
const onLoad = (reactFlowInstance) => {
    reactFlowInstance.fitView();
}



function ADS_System_Boundary(){

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
                <h4>Automatic Emergency Steering</h4>
           
        </div>
    )
}

export default ADS_System_Boundary;