import React from 'react';
import ChartBar from './ChartBar/ChartBar';
import './Chart.css';

const Chart = ({ dataPoints, hideChart }) => {
  const dataPointValues = dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);
  return (
    <>
      <div className='chart'>
        {dataPoints.map((dataPoint) => (
          <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={totalMaximum}
            label={dataPoint.label}
          />
        ))}
      </div>
      <div className='chart-button'>
        <button className='chart-button__action' onClick={hideChart}>
          Hide Chart
        </button>
      </div>
    </>
  );
};

export default Chart;
