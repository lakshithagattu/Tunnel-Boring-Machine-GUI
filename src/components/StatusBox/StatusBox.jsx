import 'bootstrap/dist/css/bootstrap.min.css';
import {useContext, useState} from 'react';
import {DataContext} from '../../Context/DataContext';
// import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import ControlBox from "../ControlBox/ControlBox";
import ProgressBar from 'react-bootstrap/ProgressBar';
import './StatusBox.css';
const StatusBox = () => {
  const {TBMData} = useContext(DataContext);
  const disabledStates = ['IDLE', 'HELD','SUSPENDED'];
  return (
    <div className="statusbox">
    

      <div className = "TBMstateandbutton">
      <div className = "TBMstatesize">
        <p>TBM State: <span>{TBMData.tbmStatus}</span></p>
      </div>
       
       
      <div className = "StateButton">
        {(TBMData.tbmStatus.toLowerCase() === "idle" || TBMData.tbmStatus.toLowerCase() === "held"|| TBMData.tbmStatus.toLowerCase() === "suspended") ? (
         <Button variant="success">Next State</Button>
          )
        : (
            <Button variant="secondary" disabled>Next State</Button>
          )}  
       </div>
       </div>

      
    <div className = "jackingAndDepth">
        <p>Jacking Cycle: <span>{`${TBMData.jacking_cycle}/100`}</span></p>
        <p>Depth:  {TBMData.depth} ft</p>
      </div>

{/* good stuff do not change */}
      <div className="progress-and-distance">
        <div className="distance">
          <p>Distance: {TBMData.distance} ft</p>
        </div>
        <div className="progress-container">
            <ProgressBar striped variant="success" now={100}/>
        </div>
      </div>


    </div>
  );
};
export default StatusBox;