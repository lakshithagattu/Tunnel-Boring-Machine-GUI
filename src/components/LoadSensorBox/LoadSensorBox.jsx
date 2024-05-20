import React from 'react';
import './LoadSensorBox.css';
import MetricBox from "../MetricBox/MetricBox";

const LoadSensorBox = ({ sensorValues }) => {
const lowerBound = 5;  
const upperBound = 15;

  const colorClass = (value) => (
    value >= lowerBound && value <= upperBound ? 'green' : 'red'
  );

  return (
    <div className="load-sensor-values">
      <MetricBox title="Load Sensors">
        <div className="big-circle">
          <div className={`top ${colorClass(sensorValues[0])}`}>
            <p>{sensorValues[0]}</p>
          </div>
          <div className={`right ${colorClass(sensorValues[1])}`}>
            <p>{sensorValues[1]}</p>
          </div>
          <div className={`left ${colorClass(sensorValues[2])}`}>
            <p>{sensorValues[2]}</p>
          </div>
        </div>
      </MetricBox>
    </div>
  );
};

export default LoadSensorBox;
