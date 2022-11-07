import React, { useState, Fragment } from 'react';
import "../App.css"
import ReactFlow, { ReactFlowProvider, addEdge, Background, Controls, MiniMap } from 'react-flow-renderer';



const initialElements = [
    /*Node*/
    { id: '1 ', targetPosition: 'left', type: 'text', data: { label: 'INPUT' }, position: { x: -200, y: -150 }, style: { border: '1px solid black', background: 'none', width: 111, height: 40, font: { size: '100%' } } },
    { id: '2', targetPosition: 'left', type: 'text', data: { label: 'OUTPUT' }, position: { x: 188, y: -150 }, style: { border: '1px solid black', background: 'none', width: 111, height: 40, font: { size: '100%' } } },
    { id: '3', targetPosition: 'left', type: 'text', data: { label: 'UC' }, position: { x: -200, y: -150 }, style: { border: '2px solid black', background: 'none', width: 500, height: 40, font: { size: '100%' } } },
    { id: '4', targetPosition: 'left', type: 'text', data: { label: '' }, position: { x: -200, y: -150 }, style: { border: '2px solid black', background: 'none', width: 500, height: 1300, font: { size: '100%' } } },
    { id: '5', type: 'text', data: { label: '' }, position: { x: -90, y: -150 }, style: { border: '2px solid black', background: 'none', width: 280, height: 1300, font: { size: '100%' } } },

    { id: '6', sourcePosition: 'right', type: 'default', data: { label: 'Driver' }, position: { x: -185, y: -100 }, style: { border: '1px solid black', background: 'none', width: 80, height: 40, font: { size: '100%' } } },
    { id: '7', sourcePosition: 'right', type: 'default', data: { label: 'Enviromental data and Invehicle sensors data' }, position: { x: -185, y: -5 }, style: { border: '0px solid black', background: 'none', width: 80, height: 40, font: { size: '5%' } } },
    { id: '7-a', sourcePosition: 'left', type: 'default', data: { label: '' }, position: { x: -185, y: -5 }, style: { border: '1px solid black', background: 'none', width: 80, height: 100, font: { size: '100%' } } },

    { id: '8', targetPosition: 'left', type: 'default', data: { label: 'IgnitionON' }, position: { x: 8, y: -100 }, style: { border: '1px solid black', background: 'none', width: 80, height: 40, font: { size: '5%' } } },
    { id: '9', targetPosition: 'left', type: 'default', data: { label: 'Detect Lane Mark' }, position: { x: 8, y: -10 }, style: { border: '1px solid black', background: 'none', width: 80, height: 50, font: { size: '5%' } } },
    { id: '9-a', type: 'default', data: { label: '' }, position: { x: 8, y: -10 }, style: { border: '1px solid black', background: 'none', width: 80, height: 50, font: { size: '5%' } } },

    { id: '10',  type: 'default', data: { label: 'Set SafeSpeed And Distance' }, position: { x: -13, y: 70 }, style: { border: '1px solid black', background: 'none', width: 120, height: 50, font: { size: '5%' } } },

    { id: '11',  type: 'default', data: { label: 'Detect Oncomming Traffic And Surrounding Obstacles' }, position: { x: -38, y: 150 }, style: { border: '1px solid black', background: 'none', width: 170, height: 70, font: { size: '5%' } } },

    
    { id: '12-a', sourcePosition: 'left', type: 'default', data: { label: '' }, position: { x: -13, y: 240 }, style: { width: 120, height: 10, font: { size: '5%' } } },
    { id: '12-b', sourcePosition: 'left', type: 'default', data: { label: '' }, position: { x: -13, y: 240 }, style: { border: '1px solid black', background: 'none',width: 120, height: 50, font: { size: '5%' } } },
    { id: '12-c', targetPosition: 'left', type: 'default', data: { label: '' }, position: { x: -13, y: 240 }, style: { border: '1px solid black',  width: 120, height: 50, font: { size: '5%' } } },

    { id: '12',  type: 'default', data: { label: 'Perform UC Assist' }, position: { x: -13, y: 240 }, style: { border: '1px solid black',  width: 120, height: 50, font: { size: '5%' } } },
    


    { id: '13',  type: 'default', data: { label: 'Perform Acc With S&G,LKA ,IA,TA,ALCA' }, position: { x: -40, y: 320 }, style: { border: '1px solid black', background: 'none', width: 170, height: 70, font: { size: '5%' } } },
    { id: '16', sourcePosition: 'right',type: 'default', data: { label: '' }, position: { x: -40, y: 320 }, style: { border: '1px solid black', background: 'none', width: 170, height: 70, font: { size: '5%' } } },
    { id: '15',targetPosition: 'left',  type: 'default', data: { label: 'Sterring,Break' }, position: { x: 200, y: 330}, style: { border: '1px solid black',  width: 90, height: 50, font: { size: '5%' } } },



    { id: '14', type: 'default', data: { label: 'Driver Override' }, position: { x: -6, y: 450 }, style: { border: '0px solid black', background: 'none', width: 100, height: 70, font: { size: '5%' } } },
    { id: '14-c', sourcePosition: 'left',sourcePosition: 'right', type: 'default', data: { label: '' }, position: { x: -6, y: 450 }, style: {  rotate: '180deg',border: '0px solid black', background: 'none', width: 100, height: 70, font: { size: '5%' } } },
    { id: '14-a', sourcePosition: 'right', type: 'default', data: { label: '' }, position: { x: -6, y:450 }, style: { border: '0px solid black', background: 'none', width: 100, height: 50, font: { size: '5%' } } },
    { id: '14-b', type: 'group', data: { label: '' }, position: { x:332, y: 266 }, style: { rotate: '45deg', border: '1px solid black', background: 'none', width: 80, height: 80, font: { size: '5%' } } },
    { id: '17',targetPosition: 'left',  type: 'default', data: { label: 'UC DeActivates' }, position: { x: 200, y: 450}, style: { border: '1px solid black',  width: 90, height: 50, font: { size: '5%' } } },

    { id: '18',  type: 'default', data: { label: 'Driver Takeover in Critical Condition' }, position: { x: -40, y: 560 }, style: { border: '1px solid black', background: 'none', width: 170, height: 70, font: { size: '5%' } } },
    { id: '18-a',sourcePosition: 'right',  type: 'default', data: { label: '' }, position: { x: -40, y: 560 }, style: { border: '1px solid black', background: 'none', width: 170, height: 70, font: { size: '5%' } } },
    { id: '18-c',sourcePosition: 'bottom',  type: 'default', data: { label: '' }, position: { x: -40, y: 560 }, style: { border: '1px solid black', background: 'none', width: 170, height: 70, font: { size: '5%' } } },
    { id: '18-b',targetPosition: 'left',  type: 'default', data: { label: 'UC DeActivates' }, position: { x: 200, y: 568}, style: { border: '1px solid black',  width: 90, height: 50, font: { size: '5%' } } },
    
    
    { id: '19-b', type: 'default', data: { label: 'p' }, position: { x: 260, y: 664}, style: { border: '1px solid black',  width: 30, height: 50, font: { size: '5%' } } },
    { id: '19-a',sourcePosition: 'bottom', type: 'default', data: { label: 's' }, position: { x: 200, y: 664}, style: { border: '1px solid black',  width: 30, height: 50, font: { size: '5%' } } },
    { id: '18-d', type: 'default', data: { label: 'Provide Warning' }, position: { x: 200, y: 664}, style: { border: '1px solid black',  width: 90, height: 50, font: { size: '5%' } } },
 

    { id: '19-c', targetPosition: 'top', type: 'default', data: { label: '' }, position: { x: -24, y: 784 }, style: { border: '1px solid black', background: 'none', width: 170, height: 70, font: { size: '5%' } } },
    { id: '19-d', sourcePosition: 'right', type: 'default', data: { label: '' }, position: { x: -24, y: 784 }, style: { border: '1px solid black', background: 'none', width: 170, height: 70, font: { size: '5%' } } },
    {id: '19-e', sourcePosition: 'left', type: 'default', data: { label: '' }, position: { x: -24, y: 784 }, style: { border: '1px solid black', background: 'none', width: 170, height: 70, font: { size: '5%' } } },
    { id: '19',  type: 'default', data: { label: 'Collision Detected' }, position: { x: -24, y: 784 }, style: { border: '1px solid black', background: 'none', width: 170, height: 70, font: { size: '5%' } } },
    
    
    { id: '20-a', sourcePosition: 'right',  type: 'default', data: { label: '' }, position: { x: -24, y: 960 }, style: { border: '1px solid black', background: 'none', width: 170, height: 70, font: { size: '5%' } } },
    { id: '20-b',  sourcePosition: 'bottom', type: 'default', data: { label: '' }, position: { x: -24, y: 960 }, style: { border: '1px solid black', background: 'none', width: 170, height: 70, font: { size: '5%' } } },
    { id: '20',  type: 'default', data: { label: 'Driver Takeover After Warning' }, position: { x: -24, y: 960 }, style: { border: '1px solid black', background: 'none', width: 170, height: 70, font: { size: '5%' } } },
    { id: '20-c',targetPosition: 'left', type: 'default', data: { label: 'UC Deactivate ' }, position: { x: 200, y: 968}, style: { border: '1px solid black',  width: 90, height: 50, font: { size: '5%' } } },
    { id: '20-d',targetPosition: 'left', type: 'default', data: { label: 'Perform MRM and Deactivate' }, position: { x: 200, y: 1064}, style: { border: '1px solid black',  width: 90, height: 70, font: { size: '5%' } } },
 

    /*links*/
    { id: 'link-1', type: 'straight', style: { stroke: 'green', }, source: '6', target: '8', animated: true },
    { id: 'link-2', type: 'straight', style: { stroke: 'green', }, source: '7', target: '9', animated: true },
    { id: 'link-3', type: 'straight', style: { stroke: 'blue', }, source: '8', target: '9-a', animated: true },
    { id: 'link-7', type: 'straight', style: { stroke: 'blue', }, source: '9', target: '10', animated: true },
    { id: 'link-7', type: 'straight', style: { stroke: 'blue', }, source: '10', target: '11', animated: true },
    { id: 'link-8', type: 'straight', style: { stroke: 'blue', }, source: '11', target: '12', animated: true },
    { id: 'link-9', type: 'straight', style: { stroke: 'blue', }, source: '12', target: '13', animated: true },
    { id: 'link-10', type: 'straight', style: { stroke: 'blue', }, source: '13', target: '14', animated: true },
    { id: 'link-11', type: 'straight', style: { stroke: 'red', }, source: '16', target: '15', animated: true },
    { id: 'link-12', type: 'straight',label:'yes' ,style: { stroke: 'red', }, source: '14-a', target: '17', animated: true },
    { id: 'link-13', type: 'straight', style: { stroke: 'blue', }, source: '14', target: '18', animated: true },
    { id: 'link-14', type: 'straight',label:'yes' ,style: { stroke: 'red', }, source: '18-a', target: '18-b', animated: true },
    { id: 'link-15', type: 'step',label:'no' ,style: { stroke: 'red', }, source: '18-c', target: '18-d', animated: true },
    { id: 'link-16', type: 'step',style: { stroke: 'red', }, source: '19-a', target: '19-c', animated: true },
    { id: 'link-17',label:'yes' , type: 'step',style: { stroke: 'red', }, source: '19-d', target: '19-b', animated: true },
    { id: 'link-18',label:'no' , type: 'step',style: { stroke: 'red', }, source: '19-e', target: '12-c', animated: true },
    { id: 'link-19', type: 'straight', style: { stroke: 'blue', }, source: '19', target: '20', animated: true },
    { id: 'link-20',label:'yes' , type: 'straight', style: { stroke: 'red', }, source: '20-a', target: '20-c', animated: true },
    {  id: 'link-18',label:'no' , type: 'step',style: { stroke: 'red', }, source: '20-b', target: '20-d', animated: true },








]
const onLoad = (reactFlowInstance) => {
    reactFlowInstance.fitView();
}

function UC_Flow() {

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
                    style={{ width: '120%', height: '120vh' }}
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
                <br />


            </div>
            <h4>Urban Chauffeur</h4>

        </div>
    )
}

export default UC_Flow;