import React from 'react';
import './NavigationBox.css';
import MetricBox from '../MetricBox/MetricBox';

const NavigationBox = () => {
  return (
  <div className='navigation-box-dimensions'>
    <MetricBox title="Navigation">
        <div className='circle'>
        <svg className="crosshair" viewBox="0 0 100 100">
            {/* Red Horizontal line */}
            <line x1="35" y1="50" x2="65" y2="50" stroke="red" strokeWidth="2" />
            {/* Red Vertical line */}
            <line x1="50" y1="35" x2="50" y2="65" stroke="red" strokeWidth="2" />
            {/* Black Horizontal line */}
            <line x1="60" y1="60" x2="80" y2="60" stroke="black" strokeWidth="2" />
            {/* Black Vertical line */}
            <line x1="70" y1="50" x2="70" y2="70" stroke="black" strokeWidth="2" />
          </svg>
        </div>
    </MetricBox>
</div>
  );
};

export default NavigationBox;
