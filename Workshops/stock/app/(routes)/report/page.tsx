'use client';

import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Box } from '@mui/material';
// import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      // position: 'top' as const,
      position: 'bottom' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};

// function getRandomInt(): any {
//   let randoms = [];
//   for (let index = 0; index <= labels.length; index++) {
//     randoms.push(Math.floor(Math.random() * (50000 - 5 + 1)) + 5);
//   }
//   return randoms;
// }

function getRandomNumberBetween0And100() {
  return Math.floor(Math.random() * 101);
}

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      // data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      data: labels.map(() => getRandomNumberBetween0And100()),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      // data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      data: labels.map(() => getRandomNumberBetween0And100()),
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
    {
      label: 'Dataset 3',
      data: labels.map(() => getRandomNumberBetween0And100()),
      backgroundColor: 'rgba(153, 162, 235, 0.5)',
    },
  ],
};

export default function Report() {
  // return <Bar style={{ height: 300 }} options={options} data={data} />;
  return (
    <Box
      className="h-[300px]"
      // className="h-full"
      // className="h-4/5"
      // sx={{ height: 600 }}
    >
      <Bar options={options} data={data} />
    </Box>
  );
}
