// src/components/BarChart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const BarChart = () => {
  const data = {
    labels: ['Category A', 'Category B', 'Category C', 'Category D'],
    datasets: [
      {
        label: 'Complaints by Category',
        data: [10, 20, 15, 25],
        backgroundColor: ['#FF5733', '#FFA833', '#33FF57', '#3363FF'],
      },
    ],
  };

  return <Bar data={data} />;
};

export default BarChart;
