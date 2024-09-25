"use client"

import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { motion } from 'framer-motion';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart1 = () => {
  const data = {
    labels: ['Node.js', 'Java', '.NET', 'Python'],
    datasets: [
      {
        label: 'Programming Languages',
        data: [25, 35, 10, 30],
        backgroundColor: [
          'rgba(75, 192, 192, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(153, 102, 255, 0.6)',
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.label}: ${tooltipItem.raw}%`;
          },
        },
      },
    },
  };

  return <Pie data={data} options={options} />;
};

const PieChart2 = () => {
    const data = {
      labels: ['Python', 'NodeJS', '.NET', 'Java'],
      datasets: [
        {
          label: 'Programming Languages',
          data: [20, 25, 15, 40],
          backgroundColor: [
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
          ],
          borderWidth: 1,
        },
      ],
    };
    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          tooltip: {
            callbacks: {
              label: function (tooltipItem) {
                return `${tooltipItem.label}: ${tooltipItem.raw}%`;
              },
            },
          },
        },
      };
    
      return <Pie data={data} options={options} />;
};  

const App = () => {
    return (
      <div className='flex flex-col items-center justify-center py-12 xl:py-0 gap-[65px]'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 1.5, duration: 0.4, ease: 'easeIn' } }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[25px]"
        >
          <div className="p-6 bg-primary rounded-xl shadow-lg w-full max-w-lg">
            <h1 className="text-5xl font-extrabold text-outline text-primary group-hover:text-accent transition-all duration-500">
              Participación por cada tecnología
            </h1>
            <PieChart1 />
          </div>
          <div className="p-6 bg-primary rounded-xl shadow-lg w-full max-w-lg">
            <h1 className="text-5xl font-extrabold text-outline text-primary group-hover:text-accent transition-all duration-500">
              Mejores Proyectos por tecnología
            </h1>
            <PieChart2 />
          </div>
        </motion.div>
      </div>
    );
  };
  

export default App;

