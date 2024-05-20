import React from 'react'; 
import "./ControlBox.css";


const ControlBox = ({title, children1, children2}) => {
    return (
        <div className = "control-box">
            <h3>
                {title}
            </h3>
            <div className = "child-box">
                {children1}
            </div>
            <div className= "bottom-box">
                {children2}
            </div>
        </div>
    )
}
export default ControlBox;