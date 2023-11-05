// src/components/PieChart.js
import React from 'react';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';

const PieChart = () => {
  const data = {
    labels: ['Category A', 'Category B', 'Category C', 'Category D'],
    datasets: [
      {
        data: [10, 20, 15, 25],
        backgroundColor: ['#FF5733', '#FFA833', '#33FF57', '#3363FF'],
      },
    ],
  };

  return <Pie data={data} />;
};

export default PieChart;
