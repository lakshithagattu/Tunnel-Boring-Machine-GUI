import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import ControlBox from "../ControlBox/ControlBox";
import "./LinearActuatorControl.css"
const LinearActuatorControl = ()=> {
    const[yaw, setYaw] = useState(0)
    const[pitch, setPitch] = useState(0)
    const[translate, setTranslate] = useState(0)
    const[formYaw, setFormYaw] = useState(0)
    const[formPitch, setFormPitch] = useState(0)
    const [formTranslate, setFormTranslate] = useState(0)

    function handleYawChange(event) {
        setFormYaw(event.target.value);
    }
    function handleYawSubmit(event) {
        event.preventDefault();
        setYaw(formYaw);        
        // (send data to the server)
        setFormYaw(0);
    
    }
    function handlePitchChange(event) {
        setFormPitch(event.target.value);
    }
    function handlePitchSubmit(event) {
        event.preventDefault();
       
        setPitch(formPitch);        
        // (send data to the server)
        setFormPitch(0);
    
    }

    function handleTranslateChange(event) {
        setFormTranslate(event.target.value);
    }

    function handleTranslateSubmit(event){
        event.preventDefault();
        setTranslate(formTranslate);
        setFormTranslate(0);
    }
    return (
        <div className = "linear-actuator-control">
            <ControlBox title = "Linear Actuator Control"
                children1={
                <div>
                    <form className = "forms" onSubmit={handlePitchSubmit}>
                        <input
                            class = "forms"
                            name="pitch"
                            type="float"
                            min = "0"
                            max = "180"
                            value={formPitch}
                            onChange={handlePitchChange}
                        />{/* change max to max pitch*/}
                        <Button className = "button-block" type="submit">Set Pitch</Button>
                    </form>
                    <form className = "forms" onSubmit={handleTranslateSubmit}>
                        <input
                            class = "forms"
                            name="translate"
                            type="float"
                            min = "0"
                            max = "20"
                            value={formTranslate}
                            onChange={handleTranslateChange}
                        />{/* change max to max pitch*/}
                        <Button className = "button-block" type="submit">Set Trans</Button>
                    </form>
                    <form className = "forms" onSubmit={handleYawSubmit}>
                    <input
                        class = "forms"
                        name="yaw"
                        type="float"
                        min = "0"
                        max = "180"
                        value={formYaw}
                        onChange={handleYawChange}
                    />{/* change max to max Yaw*/}
                        <Button className = "button-block" type="submit">Set Yaw</Button>
                    </form>
                </div>
                }
                children2={
                    <div>
                        <p>
                            Pitch: {pitch}
                        </p>
                        <p>
                            Translation: {translate}
                        </p>
                        <p>
                            Yaw: {yaw}
                        </p>
                    </div>
                }>
            </ControlBox>
        </div>

    )

}
export default LinearActuatorControl