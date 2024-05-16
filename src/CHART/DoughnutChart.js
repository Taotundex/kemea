import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChart = () => {
  const data = {
    labels: ['Montant emprunté', 'Coût des intérêts'],
    datasets: [
      {
        data: [80, 20], // Example values
        backgroundColor: ['#0066ff', '#80bfff'],
        hoverBackgroundColor: ['#0052cc', '#66a3ff'],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    cutout: '80%',
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
  };

  return (
    <div style={{ position: 'relative', width: '200px', height: '200px' }}>
      <Doughnut data={data} options={options} />
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
        }}
      >
        <div>Estimation</div>
        <div style={{ fontSize: '24px', fontWeight: 'bold' }}>2 756 €</div>
        <div>par mois</div>
      </div>
    </div>
  );
};

export default DonutChart;
