import {useContext} from "react";
import MetricBox from "../MetricBox/MetricBox";
import {DataContext} from '../../Context/DataContext';
import "./FlowMetrics.css"



const FlowMetrics = () => {
    const {TBMData} = useContext(DataContext);
    return (
        <div className="container">
        <MetricBox title = "Flow Metric"
            children = {
                <div className = "flow-metric-container">
                    <MetricBox title ="Flow rate in"
                    children = {
                        <p>
                            {TBMData.Flow_rate_in} gal/min
                        </p>
                    }
                    />
                    <MetricBox title ="Slurry out"
                    children = {
                        <p>
                            {TBMData.Slurry_out} gal/min
                        </p>
                    }
                    />
                </div>
            }
        />
        </div>
    );
}
export default FlowMetrics;
