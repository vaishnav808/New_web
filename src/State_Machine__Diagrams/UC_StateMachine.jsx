import React, { useState, Fragment } from 'react';
import "../App.css"
import ReactFlow, {ReactFlowProvider, addEdge, Background, Controls, MiniMap } from 'react-flow-renderer';



const initialElements = [
    /*Node*/
    {id: '1',sourcePosition:'right', type: 'default', data:{label: ''}, position: {x:-150,y:-45} ,style:{background:'black', border:'0px solid black',borderRadius:'100%',width:30,height:30,font:{size:'100%'}}},
    
   
    {id: '2-a', sourcePosition:'right',targetPosition:'left',type: 'default', data:{label: ''}, position: {x:0,y:-60} ,style:{border:'0px solid black',width:120,height:60,borderRadius:'00%',font:{size:'100%'}}},
    {id: '2-b', sourcePosition:'top',type: 'default', data:{label: 'a'}, position: {x:0,y:-60} ,style:{border:'0px solid black',width:120,height:60,borderRadius:'00%',font:{size:'100%'}}},
    {id: '2',sourcePosition:'right',targetPosition:'left', type: 'default', data:{label: 'INIT'}, position: {x:0,y:-60} ,style:{background:'#00F0FF',border:'1px solid black',width:120,height:60,borderRadius:'00%',font:{size:'100%'}}},


    {id: '3-a', sourcePosition:'right',type: 'default', data:{label: 's'}, position: {x:272,y:-58} ,style:{border:'0px solid black',width:120,height:30,borderRadius:'00%',font:{size:'100%'}}},
    {id: '3-b',targetPosition:'right',type: 'default', data:{label: 'p'}, position: {x:272,y:-28} ,style:{border:'0px solid black',width:120,height:30,borderRadius:'00%',font:{size:'100%'}}},
    {id: '3',sourcePosition:'right',targetPosition:'left', type: 'default', data:{label: 'ON'}, position: {x:272,y:-58} ,style:{background:'#00F0FF',border:'1px solid black',width:120,height:60,borderRadius:'00%',font:{size:'100%'}}},
    

    {id: '4-a', targetPosition:'left',type: 'default', data:{label: 's'}, position: {x:688,y:-58} ,style:{border:'0px solid black',width:120,height:30,borderRadius:'00%',font:{size:'100%'}}},
    {id: '4-b', sourcePosition:'left',targetPosition:'bottom',type: 'default', data:{label: 'p'}, position: {x:688,y:-28} ,style:{border:'0px solid black',width:120,height:30,borderRadius:'00%',font:{size:'100%'}}},
    {id: '4-c',targetPosition:'top',sourcePosition:'bottom', type: 'default', data:{label: 'OFF'}, position: {x:688,y:-58} ,style:{border:'1px solid black',width:120,height:60,borderRadius:'00%',font:{size:'100%'}}},
    {id: '4',sourcePosition:'right',targetPosition:'left', type: 'default', data:{label: 'OFF'}, position: {x:688,y:-58} ,style:{background:'#00F0FF',border:'1px solid black',width:120,height:60,borderRadius:'00%',font:{size:'100%'}}},




    {id: '5-a', targetPosition:'top',type: 'default', data:{label: 's'}, position: {x:688,y:230} ,style:{border:'0px solid black',width:120,height:30,borderRadius:'00%',font:{size:'100%'}}},
    {id: '5-b', sourcePosition:'left',type: 'default', data:{label: 'p'}, position: {x:688,y:260} ,style:{border:'0px solid black',width:120,height:30,borderRadius:'00%',font:{size:'100%'}}},
    {id: '5',sourcePosition:'right',targetPosition:'left', type: 'default', data:{label: 'STANDBY'}, position: {x:688,y:230} ,style:{background:'#00F0FF',border:'1px solid black',width:120,height:60,borderRadius:'00%',font:{size:'100%'}}},


    {id: '6-a',sourcePosition:'right',type: 'default', data:{label: 'nn'}, position: {x:272,y:230} ,style:{border:'0px solid black',width:120,height:30,borderRadius:'00%',font:{size:'100%'}}},
    {id: '6-b', sourcePosition:'left',targetPosition:'right',type: 'default', data:{label: 'p'}, position: {x:272,y:260} ,style:{border:'0px solid black',width:120,height:30,borderRadius:'00%',font:{size:'100%'}}},
    {id: '6',sourcePosition:'right',targetPosition:'left', type: 'default', data:{label: 'ACTIVE'}, position: {x:272,y:230} ,style:{background:'#00F0FF',border:'1px solid black',width:120,height:60,borderRadius:'00%',font:{size:'100%'}}},

    
    /*links*/
    { id: 'link-1', type: 'straight',style: { stroke: 'green' },label:'IgnitionON', source: '1', target: '2-a', animated:true},
    { id: 'link-2', type: 'straight',style: { stroke: 'red' },label:'Initialization not successful', source: '2', target: '3', animated:true},
    { id: 'link-3', type: 'straight',style: { stroke: '#666666' },label:'Driver Disables', source: '3-a', target: '4-a', animated:true},
    { id: 'link-4', type: 'straight',style: { stroke: '#666666' },label:'Pre condition not satisfied', source: '3', target: '4', animated:true},
    { id: 'link-4', type: 'straight',style: { stroke: '#666666' },label:'Pre condition  satisfied', source: '4-b', target: '3-b', animated:true},
    { id: 'link-4', type: 'step',style: { stroke: '#666666' },label:'Initialization not successful', source: '2-b', target: '4-c', animated:true},
    { id: 'link-5', type: 'step',style: { stroke: '#666666' },label:'Driver Takes Control In Critical Condition', source: '6', target: '5', animated:true},
    { id: 'link-6', type: 'step',style: { stroke: '#666666' },label:'Driver Takes out off Control', source: '5-b', target: '6-b', animated:true},
    { id: 'link-7', type: 'step',style: { stroke: '#666666' },label:'Fault Resolve', source: '4-c', target: '5-a', animated:true},
    { id: 'link-8', type: 'straight',style: { stroke: '#666666' },label:'System Fault/Driver Disable ', source: '6-a', target: '4-b', animated:true},
    { id: 'link-9', type: 'straight',style: { stroke: '#666666' },label:'Pre Condition Satisfied  ', source: '3-b', target: '6-a', animated:true},



]
const onLoad = (reactFlowInstance) => {
    reactFlowInstance.fitView();
}

function UC_State_Machine(){

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

export default UC_State_Machine;