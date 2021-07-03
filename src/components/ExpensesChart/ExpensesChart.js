import React, { useState } from 'react';
import Chart from '../Chart/Chart';
import '../Chart/Chart.css';

const ExpensesChart = ({ expenses }) => {
  const [chartVisibility, setChartVisibility] = useState(false);
  const chartData = [
    { label: 'Jan', value: 0 },
    { label: 'Feb', value: 0 },
    { label: 'Mar', value: 0 },
    { label: 'Apr', value: 0 },
    { label: 'May', value: 0 },
    { label: 'Jun', value: 0 },
    { label: 'Jul', value: 0 },
    { label: 'Aug', value: 0 },
    { label: 'Sep', value: 0 },
    { label: 'Oct', value: 0 },
    { label: 'Nov', value: 0 },
    { label: 'Dec', value: 0 },
  ];

  for (const expense of expenses) {
    const expenseMonth = expense.date.getMonth();
    chartData[expenseMonth].value += expense.amount;
  }

  const showChartHandler = () => {
    setChartVisibility(true);
  };
  const hideChartHandler = () => {
    setChartVisibility(false);
  };
  return (
    <div>
      {!chartVisibility && (
        <div className='chart-button'>
          <button className='chart-button__action' onClick={showChartHandler}>
            Show Expenses Chart
          </button>
        </div>
      )}
      {chartVisibility && (
        <Chart dataPoints={chartData} hideChart={hideChartHandler} />
      )}
    </div>
  );
};

export default ExpensesChart;
