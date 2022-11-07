import React, { useState, Fragment } from 'react';
import "../App.css"
import ReactFlow, {ReactFlowProvider, addEdge, Background, Controls, MiniMap } from 'react-flow-renderer';



const initialElements = [
    /*Node*/
    {id: '1',sourcePosition:'right', type: 'default', data:{label: ''}, position: {x:-150,y:-45} ,style:{background:'black', border:'0px solid black',borderRadius:'100%',width:30,height:30,font:{size:'100%'}}},
    {id: '2-a', targetPosition:'left',type: 'default', data:{label: ''}, position: {x:0,y:-60} ,style:{border:'0px solid black',width:60,height:60,borderRadius:'00%',font:{size:'100%'}}},
    {id: '2-b',sourcePosition:'right', type: 'default', data:{label: ''}, position: {x:60,y:-60} ,style:{border:'0px solid black',width:60,height:30,borderRadius:'00%',font:{size:'100%'}}},
    {id: '2-c', sourcePosition:'right',type: 'default', data:{label: ''}, position: {x:60,y:-30} ,style:{border:'0px solid black',width:60,height:30,borderRadius:'00%',font:{size:'100%'}}},
    {id: '2', type: 'default', data:{label: 'INIT'}, position: {x:0,y:-60} ,style:{background:'#00F0FF',border:'1px solid black',width:120,height:60,borderRadius:'00%',font:{size:'100%'}}},
    
    {id: '3-a', targetPosition:'left',type: 'default', data:{label: ''}, position: {x:300,y:-60} ,style:{border:'0px solid black',width:60,height:30,borderRadius:'00%',font:{size:'100%'}}},
    {id: '3-b',targetPosition:'left', type: 'default', data:{label: ''}, position: {x:300,y:-30} ,style:{border:'0px solid black',width:60,height:30,borderRadius:'00%',font:{size:'100%'}}},
    {id: '3-c',type: 'default', data:{label: ''}, position: {x:360,y:-60} ,style:{border:'0px solid black',width:60,height:60,borderRadius:'00%',font:{size:'100%'}}},
    {id: '3', type: 'default', data:{label: 'OFF'}, position: {x:300,y:-60} ,style:{background:'#00F0FF',border:'1px solid black',width:120,height:60,borderRadius:'00%',font:{size:'100%'}}},
    
    {id: '4-a', targetPosition:'left',type: 'default', data:{label: ''}, position: {x:300,y:180} ,style:{border:'0px solid black',width:60,height:30,borderRadius:'00%',font:{size:'100%'}}},
    {id: '4-b',sourcePosition:'left', type: 'default', data:{label: ''}, position: {x:300,y:210} ,style:{border:'0px solid black',width:60,height:30,borderRadius:'00%',font:{size:'100%'}}},
    {id: '4-c',targetPosition:'top',type: 'default', data:{label: ''}, position: {x:360,y:180} ,style:{border:'0px solid black',width:60,height:20,borderRadius:'00%',font:{size:'100%'}}},
    {id: '4', type: 'default', data:{label: 'ACTIVE'}, position: {x:300,y:180} ,style:{background:'#00F0FF',border:'1px solid black',width:120,height:60,borderRadius:'00%',font:{size:'100%'}}},
    
    {id: '4-a', targetPosition:'left',type: 'default', data:{label: ''}, position: {x:300,y:180} ,style:{border:'0px solid black',width:60,height:30,borderRadius:'00%',font:{size:'100%'}}},
    {id: '4-b',sourcePosition:'left', type: 'default', data:{label: ''}, position: {x:300,y:210} ,style:{border:'0px solid black',width:60,height:30,borderRadius:'00%',font:{size:'100%'}}},
    {id: '4-c',targetPosition:'top',type: 'default', data:{label: ''}, position: {x:360,y:180} ,style:{border:'0px solid black',width:60,height:20,borderRadius:'00%',font:{size:'100%'}}},
    {id: '4', type: 'default', data:{label: 'ACTIVE'}, position: {x:300,y:180} ,style:{background:'#00F0FF',border:'1px solid black',width:120,height:60,borderRadius:'00%',font:{size:'100%'}}},
    
    {id: '5-e', targetPosition:'right',type: 'default', data:{label: ''}, position: {x:0,y:160} ,style:{border:'0px solid black',width:120,height:20,borderRadius:'00%',font:{size:'100%'}}},
    {id: '5-a', sourcePosition:'right',type: 'default', data:{label: ''}, position: {x:60,y:180} ,style:{border:'0px solid black',width:60,height:30,borderRadius:'00%',font:{size:'100%'}}},
    {id: '5-b',targetPosition:'right', type: 'default', data:{label: ''}, position: {x:60,y:210} ,style:{border:'0px solid black',width:60,height:30,borderRadius:'00%',font:{size:'100%'}}},
    {id: '5-c',targetPosition:'top',type: 'default', data:{label: ''}, position: {x:0,y:180} ,style:{border:'0px solid black',width:60,height:20,borderRadius:'00%',font:{size:'100%'}}},
    {id: '5', type: 'default', data:{label: 'STANDBY'}, position: {x:0,y:160} ,style:{background:'#00F0FF',border:'1px solid black',width:120,height:80,borderRadius:'00%',font:{size:'100%'}}},
    



    /*links*/
    { id: 'link-1', type: 'straight',style: { stroke: 'green' },label:'IgnitionON', source: '1', target: '2-a', animated:true},
    { id: 'link-2', type: 'straight',style: { stroke: 'red' },label:'Initialization not successful', source: '2-b', target: '3-a', animated:true},
    { id: 'link-3', type: 'straight',style: { stroke: '#666666' },label:'Driver Disables', source: '2-c', target: '3-b', animated:true},
    { id: 'link-4', type: 'straight',style: { stroke: '#FF6100' },label:'Error Detected', source: '4', target: '3', animated:true},
    { id: 'link-5', type: 'straight',style: { stroke: '#666666' },label:'Driver Disables', source: '4-c', target: '3-c', animated:true},
    { id: 'link-6', type: 'straight',style: { stroke: 'green' },label:'Error Resolved', source: '3-b', target: '5-e', animated:true},
    { id: 'link-7', type: 'straight',style: { stroke: '#FF6100' },label:'Collision Detected', source: '5-a', target: '4-a', animated:true},
    { id: 'link-8', type: 'straight',style: { stroke: 'green' },label:'Driver Takeover after warning', source: '4-b', target: '5-b', animated:true},
    { id: 'link-9', type: 'straight',style: { stroke: 'green' },label:'Intializtion successful', source: '2', target: '5', animated:true},









]
const onLoad = (reactFlowInstance) => {
    reactFlowInstance.fitView();
}

function AES_State_Machine(){

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

export default AES_State_Machine;