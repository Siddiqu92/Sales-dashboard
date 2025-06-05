"use client";
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { userData } from '../app/data';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function getQuarterlyTotals() {
  const quarters = {
    Q1: ['January', 'February', 'March'],
    Q2: ['April', 'May', 'June'],
    Q3: ['July', 'August', 'September'],
    Q4: ['October', 'November', 'December'],
  };

  const totals = { Q1: 0, Q2: 0, Q3: 0, Q4: 0 };

  userData.forEach((user) => {
    user.salesPerMonth.forEach(({ month, sales }) => {
      for (const [q, months] of Object.entries(quarters)) {
        if (months.includes(month)) {
          totals[q as keyof typeof totals] += sales;
        }
      }
    });
  });

  return Object.values(totals);
}

export default function QuarterlyChart() {
  const data = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [
      {
        label: 'Sales',
        data: getQuarterlyTotals(),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
    scales: {
      y: { display: false },
    },
  };

  return <Bar data={data} options={options} />;
}
