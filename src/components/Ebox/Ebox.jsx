import {useContext} from "react";
import MetricBox from "../MetricBox/MetricBox";
import {DataContext} from '../../Context/DataContext';
import "./Ebox.css"


const Ebox = () => {

    const {TBMData} = useContext(DataContext);

    let box1;
    let box2;

    if (TBMData.Ebox_door_1 === "Closed"){
        console.log("Ebox door 1 closed");
        box1 = "closed-box"
    }
    else{
        console.log("Ebox door 1 open");
        box1 = "open-box"
    }

    if (TBMData.Ebox_door_2 === "Closed"){
        console.log("Ebox door 2 closed");
        box2 = "closed-box"
    }
    else{
        console.log("Ebox door 2 open");
        box2 = "open-box"
    }

    return (
        <div className = "ebox-container" >
        <MetricBox title = "EBox">
            <div className = "sensor-box">
                <p>
                    box 1
                </p>
                <div className = {box1}/>
            </div>
            <div className = "sensor-box">
                <p>
                    box 2
                </p>
                <div className = {box2}/>
            </div>
            <p>
                red = open | green = closed
            </p>
        </MetricBox>
        </div>
    );
}

export default Ebox;
