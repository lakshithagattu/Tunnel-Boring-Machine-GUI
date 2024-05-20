import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import ControlBox from "./components/ControlBox/ControlBox";
import MotorControl from './components/MotorControl/MotorControl';
import Conditioner from './components/Conditioner/Conditioner';
import Hydraulics from "./components/Hydraulics/Hydraulics";
import WaterControl from './components/WaterControl/WaterControl';
import MetricBox from "./components/MetricBox/MetricBox";
import {EBoxState} from "./components/ElectricBox/EBoxState";
import {useContext, useState, useEffect} from 'react';
import {DataContext} from './Context/DataContext';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import LinearActuatorExtensionLength from './components/LinearActuatorExtensionLengths/LinearActuatorExtensionLengths';
import LinearActuatorControl from './components/LinearActuatorControl/LinearActuatorControl';
import SensorDisplayRange from './components/SensorDisplayRange/SensorDisplayRange';
import {Modal} from 'react-bootstrap'
import Switches from './components/Switches/Switches'
import Ebox from './components/Ebox/Ebox';
import ConnectionStatus from './components/ConnectionStatus/ConnectionStatus';
import FlowMetrics from './components/FlowMetrics/FlowMetrics';
import StatusBox from './components/StatusBox/StatusBox';
import Form from 'react-bootstrap/Form';

function App() {

  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  // const sendData = () => {
  //   axios.post('data', {name: "john", age: 30}, config)
  //   .then(res => {
  //     console.log(res.data);
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   });
  // }

  const [mode, setMode] = useState('Autonomous');

  const [showAlertMessages, setShowAlertMessages] = useState(false);

  const [TBMData, setTBMData] = useState({"distance":50,"jacking_cycle":0, "depth":3, "tbmStatus":"IDLE", "high_power":50, "low_power":20, "pressure_1":20.0, "pressure_2":25.0, "pressure_3":25.0, "pressure_4":25.0, "pressure_5":25.0, "Ebox_door_1": "Open", "Ebox_door_2": "Closed", "Flow_rate_in": 80.0, "Slurry_out": 120.0, "temp1": 60.0, "temp2":120.0, "temp4": 60.0, "temp3":120.0, "temp5": 60.0, "temp6":120.0, "temp8": 60.0, "temp7":120.0, "connected": false});

  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {

    axios.get('http://localhost:3001/').then((response) => {
    console.log(response.data);
    setTBMData(response.data);
    }).catch((e) => {
      console.log(`Error: ${e}`);
    });

  }, [])     
    
  return (
    <DataContext.Provider value={{TBMData}}>
      <div className='background'>

        <Modal
          show={showAlert}
          onHide={() => setShowAlert(false)}
          centered
          autoFocus={false}
          restoreFocus={false}
          enforceFocus={false}
      >
        <Modal.Header>
        <Modal.Title>Warning:  is out of Range</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          is out of range with a value of 
        </Modal.Body>
        <Modal.Footer>
            <Button
                variant='danger'
                tabIndex={-1}
                onClick={() => setShowAlert(false)}
            >
                Dismiss
            </Button>
        </Modal.Footer>
      </Modal>

        <div className='left-section'>
            {/* Temperature Sensor  */}
            <MetricBox title="Temperature Sensor">
              <div className='row'>
                <SensorDisplayRange title='Temp Sensor 1' sensorValue={TBMData.temp1} sensorMin={10} sensorMax={100}/>
                <SensorDisplayRange title='Temp Sensor 2' sensorValue={TBMData.temp2} sensorMin={10} sensorMax={100}/>
                <SensorDisplayRange title='Temp Sensor 3' sensorValue={TBMData.temp3} sensorMin={10} sensorMax={100}/>
              </div>
              <div className='row'>
                <SensorDisplayRange title='Temp Sensor 4' sensorValue={TBMData.temp4} sensorMin={10} sensorMax={100}/>
                <SensorDisplayRange title='Temp Sensor 5' sensorValue={TBMData.tbmTemp1} sensorMin={10} sensorMax={100}/>
                <SensorDisplayRange title='Temp Sensor 6' sensorValue={TBMData.tbmTemp2} sensorMin={10} sensorMax={100}/>
              </div>
              <div className='row'>
                <SensorDisplayRange title='Temp Sensor 7' sensorValue={TBMData.tbmTemp3} sensorMin={10} sensorMax={100}/>
                <SensorDisplayRange title='Temp Sensor 8' sensorValue={TBMData.tbmTemp4} sensorMin={10} sensorMax={100}/>
              </div>
            </MetricBox>

            {/* Presure Transducer */}
            <MetricBox title="Pressure Transducer (PSI)">
              <div className='row'>
                <SensorDisplayRange title='Pressure 1' sensorValue={TBMData.pressureTrans1} sensorMin={10} sensorMax={100}/>
                <SensorDisplayRange title='Pressure 2' sensorValue={TBMData.pressureTrans2} sensorMin={10} sensorMax={100}/>
                <SensorDisplayRange title='Pressure 3' sensorValue={TBMData.pressureTrans3} sensorMin={10} sensorMax={100}/>
              </div>
              <div className='row'>
                <SensorDisplayRange title='Pressure 4' sensorValue={TBMData.pressureTrans4} sensorMin={10} sensorMax={100}/>
                <SensorDisplayRange title='Pressure 5' sensorValue={TBMData.pressureTrans5} sensorMin={10} sensorMax={100}/>
              </div>
            </MetricBox>

            {/* Power  */}
            <MetricBox title="Power">
              <div className='row'>
                <SensorDisplayRange title='Low Power (120V)' sensorValue={TBMData.low_power} sensorMin={10} sensorMax={100}/>
                <SensorDisplayRange title='High Power (480V)' sensorValue={TBMData.high_power} sensorMin={10} sensorMax={100}/>
              </div>
            </MetricBox>
        </div> 


        <div className='middle-section'>
          {/* <img class="title-image" alt="" src="/image-2@2x.png"></img> */}
          <div className='diggeridoos-logo'>
            <h3>The Diggeridoos at Virginia Tech</h3>
          </div>

          <div className='inner-middle-section'>
            
            {/* <MotorControl/> */}
            <div className='control-row'>
              <Hydraulics/>
              <MotorControl/>
            </div>

            <div className='control-row'>
              <Conditioner/>
              <WaterControl/>
            </div>

            <div className='control-row'>
              <LinearActuatorControl/>
            </div>

            <div className='bottom-control-row'>
              {/* <Switches/> */}
              <div className='mode-container'>
                <p>
                  Mode: {mode}
                  <Form>
                      <Form.Check type='switch' onChange={() => {setMode(`${mode === 'Autonomous' ? 'Manual' : 'Autonomous'}`)}}/>
                  </Form>
                </p>
              </div>
                        
              <Button className='abort-button' variant='danger'>Abort</Button>

              <div className='alert-container'>
                <p>
                  Alert Messages: {showAlertMessages ? 'ON' : 'OFF'}
                  <Form>
                      <Form.Check type='switch' onChange={() => {setShowAlertMessages(!showAlertMessages)}}/>
                  </Form>
                </p>
              </div>
            </div>
          </div>
        </div>



        <div className='right-section'>
          
          <MetricBox title="TBM Status">
            <StatusBox/>
          </MetricBox>
          

          <LinearActuatorExtensionLength extensionLengths={[TBMData.linAct1,TBMData.linAct2,TBMData.linAct3,TBMData.linAct4,TBMData.linAct5,TBMData.linAct6]}></LinearActuatorExtensionLength>
          <FlowMetrics/>
          <Ebox>
          </Ebox>
          <div className='bottom-right-side'>
          <ConnectionStatus>
          </ConnectionStatus>
          </div>
        </div>
      </div>
    </DataContext.Provider>
  );
}

export default App;

