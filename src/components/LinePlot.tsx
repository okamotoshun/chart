import React from 'react';
import { Line } from 'react-chartjs-2'; // labels[].length = datasets.data.length

const data = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], // x軸
  datasets: [
    {
      label: 'Demo Line plot',
      backgroundColor: '#008080',
      pointBorderWidth: 10, // マウスの大きさ
      borderColor: '7fffd4',
      data: [5, 6, 9, 15, 30, 40, 80], //y軸
    },
  ],
};

const LinePlot: React.FC = () => {
  return (
    <div>
      <Line data={data} />
    </div>
  );
};

export default LinePlot;
