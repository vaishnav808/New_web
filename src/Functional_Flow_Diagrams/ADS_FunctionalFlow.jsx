import React, { useState, Fragment } from 'react';
import "../App.css"
import ReactFlow, { ReactFlowProvider, addEdge, Background, Controls, MiniMap } from 'react-flow-renderer';


const initialElements = [
    
 /*Node*/
 { id: '1 ', targetPosition: 'left', type: 'text', data: { label: 'INPUT' }, position: { x: -200, y: -150 }, style: { border: '1px solid black', background: 'none', width: 120, height: 40, font: { size: '100%' } } },
 { id: '2', targetPosition: 'left', type: 'text', data: { label: 'OUTPUT' }, position: { x: 200, y: -150 }, style: { border: '1px solid black', background: 'none', width: 140, height: 40, font: { size: '100%' } } },
 { id: '3', targetPosition: 'left', type: 'text', data: { label: 'AES' }, position: { x: -200, y: -150 }, style: { border: '2px solid black', background: 'none', width: 540, height: 40, font: { size: '100%' } } },
 { id: '4', targetPosition: 'left', type: 'text', data: { label: '' }, position: { x: -200, y: -150 }, style: { border: '2px solid black', background: 'none', width: 540, height: 1450, font: { size: '100%' } } },
 { id: '5', type: 'text', data: { label: '' }, position: { x: -80, y: -150 }, style: { border: '2px solid black', background: 'none', width: 280, height: 1450, font: { size: '100%' } } },

 { id: '6', sourcePosition: 'right', type: 'default', data: { label: 'Driver' }, position: { x: -185, y: -100 }, style: { border: '1px solid black', background: 'none', width: 80, height: 40, font: { size: '100%' } } },
 { id: '7', sourcePosition: 'right', type: 'default', data: { label: 'Enviromental data and Invehicle sensors data' }, position: { x: -185, y: 1 }, style: { border: '0px solid black', background: 'none', width: 80, height: 40, font: { size: '5%' } } },
 { id: '7-a', sourcePosition: 'left', type: 'default', data: { label: '' }, position: { x: -185, y: -5 }, style: { border: '1px solid black', background: 'none', width: 80, height: 100, font: { size: '100%' } } },

 { id: '8', targetPosition: 'left', type: 'default', data: { label: 'IgnitionON' }, position: { x: 8, y: -100 }, style: { border: '1px solid black', background: 'none', width: 80, height: 40, font: { size: '5%' } } },
 { id: '9', targetPosition: 'left', type: 'default', data: { label: 'Turn On Acc' }, position: { x: 8, y: -10 }, style: { border: '1px solid black', background: 'none', width: 80, height: 50, font: { size: '5%' } } },
 { id: '22', targetPosition: 'left', type: 'default', data: { label: 'Set speed' }, position: { x: 8, y: 80 }, style: { border: '1px solid black', background: 'none', width: 80, height: 30, font: { size: '5%' } } },

 { id: '9-a', type: 'default', data: { label: '' }, position: { x: 8, y: -10 }, style: { border: '1px solid black', background: 'none', width: 80, height: 50, font: { size: '5%' } } },

{ id: '10-b', type: 'group', data: { label: '' }, position: { x: 160, y: 80 }, style: { rotate: '45deg', border: '1px solid black', background: 'none', width: 60, height: 60, font: { size: '5%' } } },
 { id: '42', type: 'default', data: { label: 'Condition' }, position: { x: 6, y: 190 }, style: { border: '0px solid black', background: 'none', width: 100, height: 20, font: { size: '5%' } } },

 { id: '11', sourcePosition: 'right', type: 'default', data: { label: 'Detect location of egovehicle' }, position: { x: 8, y: 290 }, style: { border: '1px solid black', background: 'none', width: 80, height: 50, font: { size: '5%' } } },
 
// { id: '12-a', sourcePosition: 'right', type: 'default', data: { label: '' }, position: { x: 8, y: 280 }, style: { border: '0px solid black', background: 'none', width: 100, height: 50, font: { size: '5%' } } },

 { id: '13', type: 'default', data: { label: 'Perform cruise control' }, position: { x: 0, y: 400 }, style: { border: '1px solid black', background: 'none', width: 120, height: 50, font: { size: '5%' } } },
 { id: '23', sourcePosition: 'right', type: 'default', data: { label: '' }, position: { x: 0, y:400 }, style: { border: '1px solid black', background: 'none', width: 120, height: 50, font: { size: '5%' } } },

 { id: '15', type: 'default', data: { label: 'Egovehicle on road' }, position: { x: 8, y: 520 }, style: { border: '0px solid black', background: 'none', width: 100, height: 70, font: { size: '5%' } } },
 { id: '15-a', sourcePosition: 'right', type: 'default', data: { label: '' }, position: { x: 8, y: 520 }, style: { border: '0px solid black', background: 'none', width: 100, height: 50, font: { size: '5%' } } },
 { id: '15-b', type: 'group', data: { label: '' }, position: { x: 380, y: 300 }, style: { rotate: '45deg', border: '1px solid black', background: 'none', width: 80, height: 80, font: { size: '5%' } } },
 
 { id: '17',targetPosition:'left', type: 'default', data: { label: 'Deactivate HDA' }, position: { x: 210, y: 180 }, style: { border: '1px solid black', background: 'none', width: 80, height: 50, font: { size: '5%' } } },
 { id: '18',targetPosition:'left', type: 'default', data: { label: 'Perform break/acc' }, position: { x: 210, y: 400 }, style: { border: '1px solid black', background: 'none', width: 80, height: 50, font: { size: '5%' } } },
 { id: '20',targetPosition:'left', type: 'default', data: { label: 'Perform cruising' }, position: { x: 210, y: 520 }, style: { border: '1px solid black', background: 'none', width: 80, height: 50, font: { size: '5%' } } },
 { id: '21',targetPosition:'left', type: 'default', data: { label: 'Provide Steering Assist' }, position: { x: 210, y: 600 }, style: { border: '1px solid black', background: 'none', width: 80, height: 50, font: { size: '5%' } } },

 { id: '24',targetPosition:'left', type: 'default', data: { label: 'continue cruising' }, position: { x: 210, y: 680 }, style: { border: '1px solid black', background: 'none', width: 80, height: 50, font: { size: '5%' } } },
 { id: '25',targetPosition:'left', type: 'default', data: { label: 'provide sterring Assist' }, position: { x: 210, y: 760 }, style: { border: '1px solid black', background: 'none', width: 80, height: 50, font: { size: '5%' } } },
 { id: '26', type: 'default', data: { label: 'lane centering' }, position: { x: 8, y: 680 }, style: { border: '0px solid black', background: 'none', width: 100, height: 70, font: { size: '5%' } } },
 { id: '26-a', sourcePosition: 'right', type: 'default', data: { label: '' }, position: { x: 8, y: 680 }, style: { border: '0px solid black', background: 'none', width: 100, height: 50, font: { size: '5%' } } },
 { id: '26-b', type: 'group', data: { label: '' }, position: { x: 650, y: 570 }, style: { rotate: '45deg', border: '1px solid black', background: 'none', width: 80, height: 80, font: { size: '5%' } } },
     
 { id: '27',targetPosition:'left', type: 'default', data: { label: 'ADS Deactivate' }, position: { x: 210, y: 900 }, style: { border: '1px solid black', background: 'none', width: 80, height: 50, font: { size: '5%' } } },
 { id: '28',targetPosition:'left', type: 'default', data: { label: 'HDA continues driving' }, position: { x: 210, y: 980 }, style: { border: '1px solid black', background: 'none', width: 80, height: 50, font: { size: '5%' } } },
 { id: '29', type: 'default', data: { label: 'If driver takecontrol' }, position: { x: 8, y: 900 }, style: { border: '0px solid black', background: 'none', width: 100, height: 70, font: { size: '5%' } } },
 { id: '29-a', sourcePosition: 'right', type: 'default', data: { label: '' }, position: { x: 8, y: 900 }, style: { border: '0px solid black', background: 'none', width: 100, height: 50, font: { size: '5%' } } },
 { id: '29-b', type: 'group', data: { label: '' }, position: { x: 800, y: 720 }, style: { rotate: '45deg', border: '1px solid black', background: 'none', width: 80, height: 80, font: { size: '5%' } } },
     
 { id: '30',targetPosition:'left', type: 'default', data: { label: 'ADS Deactivate' }, position: { x: 210, y: 1100 }, style: { border: '1px solid black', background: 'none', width: 80, height: 50, font: { size: '5%' } } },
 { id: '31',targetPosition:'left', type: 'default', data: { label: 'Provide Warning' }, position: { x: 210, y: 1180 }, style: { border: '1px solid black', background: 'none', width: 80, height: 50, font: { size: '5%' } } },
 { id: '32', type: 'default', data: { label: 'driver override in critical condition' }, position: { x: 8, y: 1100 }, style: { border: '0px solid black', background: 'none', width: 100, height: 70, font: { size: '5%' } } },
 { id: '32-a', sourcePosition: 'right', type: 'default', data: { label: '' }, position: { x: 8, y: 1100 }, style: { border: '0px solid black', background: 'none', width: 100, height: 50, font: { size: '5%' } } },
 { id: '32-b', type: 'group', data: { label: '' }, position: { x: 500, y: 410 }, style: { rotate: '45deg', border: '1px solid black', background: 'none', width: 80, height: 80, font: { size: '5%' } } },
     




 /*links*/
 { id: 'link-1', type: 'straight', style: { stroke: 'green', }, source: '6', target: '8', animated: true },
{ id: 'link-3', type: 'straight', style: { stroke: 'blue', }, source: '8', target: '9-a', animated: true },
 { id: 'link-4', type: 'straight', style: { stroke: 'blue', }, source: '9', target: '10', animated: true },
 { id: 'link-5', type: 'straight', style: { stroke: 'blue', },label:'yes', source: '10', target: '11', animated: true },
 { id: 'link-6', type: 'straight', style: { stroke: 'blue', }, source: '12', target: '13', animated: true },
 { id: 'link-7', type: 'straight', style: { stroke: 'blue', }, source: '13', target: '14', animated: true },
 { id: 'link-8', type: 'straight', style: { stroke: 'blue', }, source: '14', target: '15', animated: true },
 { id: 'link-9', type: 'straight',label:'no', style: { stroke: 'red', }, source: '12-b', target: '16', animated: true },
 { id: 'link-10', type: 'straight',label:'Yes', style: { stroke: 'green', }, source: '42', target: '17', animated: true },
 { id: 'link-12', type: 'step',label:'Yes', style: { stroke: 'blue', }, source: '17', target: '12', animated: true },
 { id: 'link-13', type: 'straight',label:'Yes', style: { stroke: 'green', }, source: '23', target: '18', animated: true },
 { id: 'link-11', type: 'straight',label:'Yes', style: { stroke: 'gree', }, source: '15-a', target: '20', animated: true },

 { id: 'link-15', type: 'straight',label:'Yes', style: { stroke: 'gree', }, source: '26-a', target: '24', animated: true },
 { id: 'link-11', type: 'step',label:'no', style: { stroke: 'red', }, source: '15', target: '21', animated: true },
 { id: 'link-14', type: 'step',label:'no', style: { stroke: 'red', }, source: '26', target: '25', animated: true },

 { id: 'link-16', type: 'straight',label:'Yes', style: { stroke: 'gree', }, source: '29-a', target: '27', animated: true },
 { id: 'link-17', type: 'step',label:'no', style: { stroke: 'red', }, source: '29', target: '28', animated: true },

 { id: 'link-18', type: 'straight',label:'Yes', style: { stroke: 'gree', }, source: '32-a', target: '30', animated: true },
 { id: 'link-19', type: 'step',label:'no', style: { stroke: 'red', }, source: '32', target: '31', animated: true },

 { id: 'link-20', type: 'straight', style: { stroke: 'red', }, source: '22', target: '42', animated: true },
 { id: 'link-21', type: 'straight', style: { stroke: 'red', }, source: '25', target: '29', animated: true },
 { id: 'link-22', type: 'straight', style: { stroke: 'red', }, source: '28', target: '32', animated: true },
 





]
const onLoad = (reactFlowInstance) => {
    reactFlowInstance.fitView();
}


function ADS_Flow() {

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

export default ADS_Flow;