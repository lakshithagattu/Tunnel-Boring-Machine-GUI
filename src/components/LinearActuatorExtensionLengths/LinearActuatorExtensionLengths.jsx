import "./LinearActuatorExtensionLength.css"
import MetricBox from "../MetricBox/MetricBox";

function LinearActuatorExtensionLength({extensionLengths}) {
    const length1 = extensionLengths[0];
    const length2 = extensionLengths[1];
    const length3 = extensionLengths[2];
    const length4 = extensionLengths[3];
    const length5 = extensionLengths[4];
    const length6 = extensionLengths[5];
   return(
        <div className = 'linear-actuator-ext-lengths'>
            <MetricBox title="Linear Actuator Extension (cm)">
                <div className="big-circle">
                    <div className="top-left">
                        <p>{length1}</p>
                    </div>
                    <div className="top-right">
                        <p>{length2}</p>
                    </div>

                    <div className="bottom-left-top">
                        <p>{length3}</p>
                    </div>
                    <div className="bottom-right-top">
                        <p>{length4}</p>
                    </div>

                    <div className="bottom-left-bottom">
                        <p>{length5}</p>
                    </div>
                    <div className="bottom-right-bottom">
                        <p>{length6}</p>
                    </div>
                </div>
            </MetricBox>
            
        </div>
   ) 
}

export default LinearActuatorExtensionLength