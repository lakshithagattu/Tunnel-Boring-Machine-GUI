import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import ControlBox from "../ControlBox/ControlBox";
import './WaterControl.css'; // Import the CSS file

const WaterControl = ({ errorCode }) => {
    const [power, setPower] = useState("OFF");
    const [formWaterSpeed, setFormSpeed] = useState(0);
    const [flowRate, setSpeed] = useState(0);

    function turnOn() {
        setPower("ON");
    }

    function turnOff() {
        setPower("OFF");
    }

    function handleChange(event) {
        setFormSpeed(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        setSpeed(formWaterSpeed);
        // (send data to the server)
    }

    return (
        <div className="water-control-container"> {/* This div will receive the styles */}
            <ControlBox title="Water Control"
                children1={
                    <div>
                        <form className="form" onSubmit={handleSubmit}>
                            <input
                                name="water-speed"
                                type="number"
                                min="0"
                                max="100"
                                value={formWaterSpeed}
                                onChange={handleChange}
                            />
                            <div style={{ marginTop: '10px' }}> {/* Adjusted margin here for spacing */}
                                <Button className='button-block' type="submit">Set Flow Rate</Button>
                            </div>
                        </form>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '10px' }}> {/* Added marginTop for spacing */}
                            <div>
                                <Button className='button-block' variant="success" onClick={turnOn} style={{ marginRight: '10px' }}>ON</Button>
                                <Button className='button-block' variant="danger" onClick={turnOff}>OFF</Button>
                            </div>
                        </div>
                    </div>
                }
                children2={
                    <div>
                        <p>Flow Rate: {flowRate}</p>
                        <p>Status: {power}</p> 
                        <p>Error code: {errorCode}</p>
                    </div>
                }
            />
        </div>
    );
};

export default WaterControl;
