import React from 'react';
import { Bar, HorizontalBar } from 'react-chartjs-2';

const data = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], // x軸
  datasets: [
    {
      label: 'Demo bar plot',
      backgroundColor: '#20b2aa',
      hoverBackgroundColor: '#5f9ea0',
      borderColor: 'transparent',
      data: [5, 6, 9, 15, 30, 0, 80], //y軸
    },
  ],
};

const BarPlot: React.FC = () => {
  return (
    <div>
      <Bar data={data} />
      <HorizontalBar data={data} />
    </div>
  );
};

export default BarPlot;
