// src/pages/DashboardPage.js
import React from 'react';
import BarChart from "./BarPlot"
import PieChart from './PieChart';
import DataTable from './Table';

const complaintData = [
  { id: 1, category: 'Category A', date: '2023-11-05', status: 'Resolved' },
  { id: 2, category: 'Category B', date: '2023-11-06', status: 'Open' },
  { id: 3, category: 'Category C', date: '2023-11-07', status: 'Resolved' },
  { id: 4, category: 'Category D', date: '2023-11-08', status: 'Open' },
];

const DashboardPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold">Complaint Dashboard</h1>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h2 className="text-xl font-semibold">Bar Chart</h2>
          <BarChart />
        </div>
        <div>
          <h2 className="text-xl font-semibold">Pie Chart</h2>
          <PieChart />
        </div>
      </div>
      <div>
        <h2 className="text-xl font-semibold mt-4">Complaint Data</h2>
        <DataTable data={complaintData} />
      </div>
    </div>
  );
};

export default DashboardPage;
