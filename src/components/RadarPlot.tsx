import React from 'react';
import { Radar } from 'react-chartjs-2';

const data = {
  labels: [
    'React',
    'Vue',
    'Angluar',
    'javascript',
    'TypeScript',
    'Redux',
    'REST API',
  ],
  datasets: [
    {
      label: 'Person A',
      backgroundColor: 'rgba(179,181,198,0.2',
      borderColor: '#008b8b',
      pointBorderColor: '#008b8b',
      pointBackgroundColor: '#fff',
      data: [100, 50, 30, 90, 50, 70, 40],
    },
    {
      label: 'Person B',
      backgroundColor: 'rgba(179,181,198,0.2',
      borderColor: '#ff1493',
      pointBorderColor: '#ff1493',
      pointBackgroundColor: '#fff',
      data: [90, 67, 22, 15, 70, 25, 80],
    },
  ],
};

const RadarPlot: React.FC = () => {
  return (
    <div>
      <Radar data={data} />
    </div>
  );
};

export default RadarPlot;
