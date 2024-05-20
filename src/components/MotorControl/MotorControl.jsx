import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import ControlBox from "../ControlBox/ControlBox";
import './MotorControl.css'; // Import the CSS file

const MotorControl = ({ errorCode }) => {
    const [power, setPower] = useState("OFF");
    const [direction, setDirection] = useState("clockwise");
    const [formMotorSpeed, setFormSpeed] = useState(0);
    const [motorSpeed, setSpeed] = useState(0);


   

    function turnOn() {
        setPower("ON");
    }

    function changeDirection() {
        setDirection(direction === "clockwise" ? "counter-clockwise" : "clockwise");
    }

    function turnOff() {
        setPower("OFF");
    }

    function handleChange(event) {
        setFormSpeed(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        setSpeed(formMotorSpeed);
        let jsonData = {
            'motorRPM' : formMotorSpeed
        }

        
        // (send data to the server)
    }

    return (
        <div className="motor-control-container"> {/* This div will receive the styles */}
            <ControlBox title="Motor Control"
                children1={
                    <div>
                        <form className="form" onSubmit={handleSubmit}>
                            <input
                                name="motor-speed"
                                type="number"
                                min="0"
                                max="100"
                                value={formMotorSpeed}
                                onChange={handleChange}
                            />
                            <div style={{ marginTop: '10px' }}>
                                <Button className='button-block' type="submit">Set RPM</Button>
                            </div>
                        </form>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <div style={{ marginBottom: '10px' }}>
                                <Button className='button-block' variant="success" onClick={turnOn} style={{ marginRight: '10px' }}>ON</Button>
                                <Button className='button-block' variant="danger" onClick={turnOff}>OFF</Button>
                            </div>
                            <div>
                                <Button className='button-block' variant="secondary" onClick={changeDirection}>TOGGLE DIRECTION</Button>
                            </div>
                        </div>
                    </div>
                }
                children2={
                    <div>
                        <p>RPM: {motorSpeed}</p>
                        <p>Status: {power}</p> 
                        <p>Direction: {direction}</p>
                        <p>Error code: {errorCode}</p>
                    </div>
                }
            />
        </div>
    );
};

export default MotorControl;
