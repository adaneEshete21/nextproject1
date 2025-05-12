"use client"
import React from 'react'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

import { Bar } from 'react-chartjs-2'
const Report = () => {
    const chartData = {
      labels: ["Total Sales", "Active Users", "New Users"],
      datasets: [
        {
          label: "Statistics",
          data: [23100, 1234, 234], // Data for the chart
          backgroundColor: ["#4F46E5", "#10B981", "#F59E0B"], // Colors for bars
          borderColor: ["#4F46E5", "#10B981", "#F59E0B"],
          borderWidth: 1,
        },
      ],
    };
     const chartOptions = {
       responsive: true,
       plugins: {
         legend: {
           position: "top",
         },
         title: {
           display: true,
           text: "Dashboard Statistics",
         },
       },
     };

  return (
    <div className="col-span-2 bg-gray-50 shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Report Overview</h2>
      <div className="flex">
        <div className="w-1/3 p-4">
          <h3 className="text-lg font-semibold">Total Sales</h3>
          <p>23100</p>
          <p>34%</p>
        </div>
        <div className="w-1/3 p-4">
          <h3 className="text-lg font-semibold">Active Users</h3>
          <p>1234</p>
          <p>12%</p>
        </div>
        <div className="w-1/3 p-4">
          <h3 className="text-lg font-semibold">New Users</h3>
          <p>234</p>
          <p>5%</p>
        </div>
      </div>

      {/* Bar Chart */}
      <div className="mt-6">
        <Bar data={chartData} options={chartOptions} />
      </div>
    </div>
  );
}

export default Report
