import './SensorDisplayRange.css';


const SensorDisplayRange = ({title, sensorValue, sensorMin, sensorMax}) => {
    let sensor_value;

    if (sensorValue <= sensorMax && sensorValue>=sensorMin){
        console.log(title + " in range. Value: " + sensorValue)
        sensor_value = "sensor-value-reading in-range"
    }
    else{
        console.log(title + " out of range. Value: " + sensorValue)
        sensor_value = "sensor-value-reading out-range"
    }
    return(
        <div className='sensor-container'>
        <h3 className='title'>{title}</h3>    
        <div className='border'>
            <div className = {sensor_value}>
            <p>
                {sensorValue}
            </p>
            </div>
                <div className='sensor-row'>

                    <div className='sensor-limit-reading'> 
                    <p>Min</p>
                    <p>{sensorMin}</p>
                    </div>

                    <div className="line"></div>

                    <div className='sensor-limit-reading'>
                    <p>Max</p>
                    <p>{sensorMax}</p>
                    </div>
                </div>
        </div>
        </div>
    )
}

export default SensorDisplayRange;