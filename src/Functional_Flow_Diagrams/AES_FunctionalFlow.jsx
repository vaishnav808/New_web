import React, { useState, Fragment } from 'react';
import "../App.css"
import ReactFlow, { ReactFlowProvider, addEdge, Background, Controls, MiniMap } from 'react-flow-renderer';



const initialElements = [
    /*Node*/
    { id: '1 ', targetPosition: 'left', type: 'text', data: { label: 'INPUT' }, position: { x: -200, y: -150 }, style: { border: '1px solid black', background: 'none', width: 111, height: 40, font: { size: '100%' } } },
    { id: '2', targetPosition: 'left', type: 'text', data: { label: 'OUTPUT' }, position: { x: 188, y: -150 }, style: { border: '1px solid black', background: 'none', width: 111, height: 40, font: { size: '100%' } } },
    { id: '3', targetPosition: 'left', type: 'text', data: { label: 'AES' }, position: { x: -200, y: -150 }, style: { border: '2px solid black', background: 'none', width: 500, height: 40, font: { size: '100%' } } },
    { id: '4', targetPosition: 'left', type: 'text', data: { label: '' }, position: { x: -200, y: -150 }, style: { border: '2px solid black', background: 'none', width: 500, height: 1000, font: { size: '100%' } } },
    { id: '5', type: 'text', data: { label: '' }, position: { x: -90, y: -150 }, style: { border: '2px solid black', background: 'none', width: 280, height: 1000, font: { size: '100%' } } },

    { id: '6', sourcePosition: 'right', type: 'default', data: { label: 'Driver' }, position: { x: -185, y: -100 }, style: { border: '1px solid black', background: 'none', width: 80, height: 40, font: { size: '100%' } } },
    { id: '7', sourcePosition: 'right', type: 'default', data: { label: 'Enviromental data and Invehicle sensors data' }, position: { x: -185, y: -5 }, style: { border: '0px solid black', background: 'none', width: 80, height: 40, font: { size: '5%' } } },
    { id: '7-a', sourcePosition: 'left', type: 'default', data: { label: '' }, position: { x: -185, y: -5 }, style: { border: '1px solid black', background: 'none', width: 80, height: 100, font: { size: '100%' } } },

    { id: '8', targetPosition: 'left', type: 'default', data: { label: 'IgnitionON' }, position: { x: 8, y: -100 }, style: { border: '1px solid black', background: 'none', width: 80, height: 40, font: { size: '5%' } } },
    { id: '9', targetPosition: 'left', type: 'default', data: { label: 'Prediction of collision' }, position: { x: 8, y: -10 }, style: { border: '1px solid black', background: 'none', width: 80, height: 50, font: { size: '5%' } } },
    { id: '9-a', type: 'default', data: { label: '' }, position: { x: 8, y: -10 }, style: { border: '1px solid black', background: 'none', width: 80, height: 50, font: { size: '5%' } } },

    { id: '10', type: 'default', data: { label: 'If collision detected' }, position: { x: 8, y: 80 }, style: { border: '0px solid black', background: 'none', width: 80, height: 50, font: { size: '5%' } } },
    { id: '10-a', sourcePosition: 'right', type: 'default', data: { label: '' }, position: { x: 8, y: 80 }, style: { border: '0px solid black', background: 'none', width: 80, height: 50, font: { size: '5%' } } },
    { id: '10-b', type: 'group', data: { label: '' }, position: { x: 80, y: 10 }, style: { rotate: '45deg', border: '1px solid black', background: 'none', width: 60, height: 60, font: { size: '5%' } } },
    
    { id: '11', sourcePosition: 'right', type: 'default', data: { label: 'AES Activated' }, position: { x: 8, y: 190 }, style: { border: '1px solid black', background: 'none', width: 80, height: 50, font: { size: '5%' } } },
    
    { id: '12', type: 'default', data: { label: 'If collision was prevented by braking' }, position: { x: 8, y: 280 }, style: { border: '0px solid black', background: 'none', width: 100, height: 70, font: { size: '5%' } } },
    { id: '12-a', sourcePosition: 'right', type: 'default', data: { label: '' }, position: { x: 8, y: 280 }, style: { border: '0px solid black', background: 'none', width: 100, height: 50, font: { size: '5%' } } },
    { id: '12-b', type: 'group', data: { label: '' }, position: { x: 220, y: 140 }, style: { rotate: '45deg', border: '1px solid black', background: 'none', width: 80, height: 80, font: { size: '5%' } } },
    
    { id: '13', type: 'default', data: { label: 'Detect obstacle free path' }, position: { x: 0, y: 420 }, style: { border: '1px solid black', background: 'none', width: 120, height: 50, font: { size: '5%' } } },
    
    { id: '14', type: 'default', data: { label: 'Display steering direction to driver takeover' }, position: { x: 0, y: 520 }, style: { border: '1px solid black', background: 'none', width: 120, height:70, font: { size: '5%' } } },
    { id: '14-a', sourcePosition: 'right', type: 'default', data: { label: '' }, position: { x: 0, y:520 }, style: { border: '1px solid black', background: 'none', width: 120, height: 70, font: { size: '5%' } } },
    
    { id: '15', type: 'default', data: { label: 'If driver takecontrol' }, position: { x: 8, y: 680 }, style: { border: '0px solid black', background: 'none', width: 100, height: 70, font: { size: '5%' } } },
    { id: '15-a', sourcePosition: 'right', type: 'default', data: { label: '' }, position: { x: 8, y: 680 }, style: { border: '0px solid black', background: 'none', width: 100, height: 50, font: { size: '5%' } } },
    { id: '15-b', type: 'group', data: { label: '' }, position: { x: 500, y: 420 }, style: { rotate: '45deg', border: '1px solid black', background: 'none', width: 80, height: 80, font: { size: '5%' } } },
    
    { id: '16',targetPosition:'left', type: 'default', data: { label: 'AES not activate' }, position: { x: 210, y: 80 }, style: { border: '1px solid black', background: 'none', width: 80, height: 60, font: { size: '5%' } } },
    { id: '17',targetPosition:'left', type: 'default', data: { label: 'Provide braking assist' }, position: { x: 210, y: 180 }, style: { border: '1px solid black', background: 'none', width: 80, height: 70, font: { size: '5%' } } },
    { id: '18',targetPosition:'left', type: 'default', data: { label: 'AES Deactivate' }, position: { x: 210, y: 280 }, style: { border: '1px solid black', background: 'none', width: 80, height: 50, font: { size: '5%' } } },
    { id: '19',targetPosition:'left', type: 'default', data: { label: 'HMI' }, position: { x: 210, y: 530 }, style: { border: '1px solid black', background: 'none', width: 80, height: 50, font: { size: '5%' } } },
    { id: '20',targetPosition:'left', type: 'default', data: { label: 'AES Deactivate' }, position: { x: 210, y: 680 }, style: { border: '1px solid black', background: 'none', width: 80, height: 50, font: { size: '5%' } } },
    { id: '21',targetPosition:'left', type: 'default', data: { label: 'Provide Steering Assist' }, position: { x: 210, y: 760 }, style: { border: '1px solid black', background: 'none', width: 80, height: 70, font: { size: '5%' } } },


    /*links*/
    { id: 'link-1', type: 'straight', style: { stroke: 'green', }, source: '6', target: '8', animated: true },
    { id: 'link-2', type: 'straight', style: { stroke: 'green', }, source: '7', target: '9', animated: true },
    { id: 'link-3', type: 'straight', style: { stroke: 'blue', }, source: '8', target: '9-a', animated: true },
    { id: 'link-4', type: 'straight', style: { stroke: 'blue', }, source: '9', target: '10', animated: true },
    { id: 'link-5', type: 'straight', style: { stroke: 'blue', },label:'yes', source: '10', target: '11', animated: true },
    { id: 'link-6', type: 'straight', style: { stroke: 'blue', }, source: '12', target: '13', animated: true },
    { id: 'link-7', type: 'straight', style: { stroke: 'blue', }, source: '13', target: '14', animated: true },
    { id: 'link-8', type: 'straight', style: { stroke: 'blue', }, source: '14', target: '15', animated: true },
    { id: 'link-9', type: 'straight',label:'no', style: { stroke: 'red', }, source: '10-a', target: '16', animated: true },
    { id: 'link-10', type: 'straight',label:'Yes', style: { stroke: 'green', }, source: '11', target: '17', animated: true },
    { id: 'link-11', type: 'step',label:'Yes', style: { stroke: 'blue', }, source: '17', target: '12', animated: true },
    { id: 'link-12', type: 'straight',label:'Yes', style: { stroke: 'green', }, source: '12-a', target: '18', animated: true },
    { id: 'link-11', type: 'straight',label:'Yes', style: { stroke: 'green', }, source: '14-a', target: '19', animated: true },
    { id: 'link-11', type: 'straight',label:'Yes', style: { stroke: 'gree', }, source: '15-a', target: '20', animated: true },
    { id: 'link-11', type: 'step',label:'no', style: { stroke: 'red', }, source: '15', target: '21', animated: true },










]
const onLoad = (reactFlowInstance) => {
    reactFlowInstance.fitView();
}

function AES_Flow() {

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
            <h4>Automatic Emergency Steering</h4>

        </div>
    )
}

export default AES_Flow;