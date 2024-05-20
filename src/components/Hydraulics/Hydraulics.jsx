import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import ProgressBar from 'react-bootstrap/ProgressBar';
import ControlBox from "../ControlBox/ControlBox";
import './Hydraulics.css'; // Import the CSS file

const Hydraulics = ({ errorCode }) => {
    const [state, setState] = useState("Extending");
    const [inchValue, setValue] = useState(17);
    const maxExtend = 24;
    const minRetract = 0;

    function extend() {
        setState("Extending");
        setValue(prevValue => {
            const newValue = Math.min(prevValue + 1, maxExtend);
            return newValue;
        });
        if (inchValue === maxExtend) {
            fullyExtend();
        }
    }

    function fullyExtend() {
        setState("Extended");
    }

    function retract() {
        setState("Retracting");    
        setValue(prevValue => {
            const newValue = Math.max(prevValue - 1, minRetract);
            return newValue;
        });
        if (inchValue === minRetract) {
            fullyRetract();
        }
    }

    function fullyRetract() {
        setState("Retracted");
    }

    function neutral() {
        setState("Neutral")
    }

    // function progressBarWidth() {
    //     return `${(inchValue / maxExtend) * 100}%`;
    // }

    function handleSubmit(event) {
        event.preventDefault();
        // (send data to the server)
    }

    return (
        <div className="hydraulics-control-container">
            <ControlBox title="Hydraulics"
                children1={
                    <div>
                        <form className="form" onSubmit={handleSubmit}></form>
                        <ProgressBar variant="success" now={100} />
                        <div className="button-container">
                            <Button className="extend-btn" variant="success" onClick={extend}>Extend</Button>
                            <Button className="neutral-btn" variant="secondary" onClick={neutral}>Neutral</Button>
                            <Button className="retract-btn" variant="warning" onClick={retract}>Retract</Button>
                        </div>
                    </div>
                }
                children2={
                    <div>
                        <p className="solenoid-state-text">Solenoid State: <span style={{ color: state === "Extending" ? "green" : state === "Retracting" ? "yellow" : "white" }}>{state}</span></p>
                    </div>
                }
            />
        </div>
    );
};

export default Hydraulics;







