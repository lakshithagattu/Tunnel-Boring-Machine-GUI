import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import ControlBox from "../ControlBox/ControlBox";
import './Conditioner.css'; // Import the CSS file

const Conditioner = ({ errorCode }) => {
    const [power, setPower] = useState("OFF");

    function turnOn() {
        setPower("ON");
    }

    function turnOff() {
        setPower("OFF");
    }

    return (
        <div className="conditioner-control-container"> {/* This div will receive the styles */}
            <ControlBox title="Conditioner"
                children1={
                    <div>
                       
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '10px' }}> {/* Added marginTop for spacing */}
                            <div>
                                <Button variant="success" onClick={turnOn} style={{ marginRight: '10px' }}>ON</Button>
                                <Button variant="warning" onClick={turnOff}>OFF</Button>
                            </div>
                        </div>
                    </div>
                }
                children2={
                    <div>
                        <p className="info-text-size">Status: {power}</p> 
                    </div>
                }
            />
        </div>
    );
};

export default Conditioner;
