import {useContext} from "react";
import MetricBox from "../MetricBox/MetricBox";
import {DataContext} from '../../Context/DataContext';
import "./ConnectionStatus.css"


const ConnectionStatus = () => {

    const {TBMData} = useContext(DataContext);

    let display_connection;
    let output_text = 'Disconnected';

    if (TBMData.connected === true){  // Add the condition for testing if the TBM is connected to embeded side
        console.log("Embeded is connected");
        display_connection = "connected"
        output_text = "Connected"
    }
    else{
        console.log("Embeded is Disconnected");
        display_connection = "disconnected"
        output_text = "Disconnected"
    }

    return (
        <div className = "connection-container" >
        <MetricBox title = "Connection">
            <div className = "sensor-box">
                <div className = {display_connection}>
                <p>
                    {output_text}
                </p>
                </div>
            </div>
        </MetricBox>
        </div>
    );
}

export default ConnectionStatus;
