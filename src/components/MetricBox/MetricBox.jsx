import {React, useContext} from 'react';
import './MetricBox.css';
import { DataContext } from '../../Context/DataContext'




const MetricBox = ({ title, children }) => {


  const {data, setData} = useContext(DataContext);

  return (
    <div className="metric-box">
      <h3 className='metric-box-h3'>
        {title}
      </h3>
      <div className = "metric-box-div">
        {children}
      </div>
    </div>
  );
};

export default MetricBox;