"use client";

import React from 'react';
import ReactDOM from 'react-dom';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js';
import { motion } from 'framer-motion';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const BarChart = ({ data }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.label}: ${tooltipItem.raw}`;
          },
        },
      },
    },
  };

  return <Bar data={data} options={options} />;
};

const App = () => {
  const studentsData = {
    labels: ['Node.js', 'Java', '.NET', 'Python'],
    datasets: [
      {
        label: 'Cantidad de Estudiantes',
        data: [50, 80, 30, 60],
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

  const gradesData = {
    labels: ['Node.js', 'Java', '.NET', 'Python'],
    datasets: [
      {
        label: 'Calificaciones Promedio',
        data: [85, 90, 75, 80],
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

  return (
    <div className="flex flex-col items-center justify-center py-12 xl:py-0 gap-[65px] bg-primary text-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 1.5, duration: 0.4, ease: 'easeIn' } }}
        className="grid grid-cols-1 md:grid-cols-2 gap-[25px] w-full max-w-5xl"
      >
        <div className="p-6 bg-primary rounded-xl shadow-lg w-full">
          <h1 className="text-3xl font-extrabold text-outline text-primary group-hover:text-accent transition-all duration-500">Cantidad de Estudiantes por Curso</h1>
          <BarChart data={studentsData} />
        </div>
        <div className="p-6 bg-primary rounded-xl shadow-lg w-full">
          <h1 className="text-3xl font-extrabold text-outline text-primary group-hover:text-accent transition-all duration-500">Calificaciones Promedio de los cursos</h1>
          <BarChart data={gradesData} />
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 1.5, duration: 0.4, ease: 'easeIn' } }}
        className="w-full max-w-5xl p-6 bg-primary rounded-xl shadow-lg"
      >
        <h2 className="text-3xl font-extrabold text-outline text-primary group-hover:text-accent transition-all duration-500">Detalles de los Cursos</h2>
        <ul className="list-disc list-inside text-white">
          <li>Node.js: Curso de backend con Node.js, incluyendo Express y MongoDB.</li>
          <li>Java: Curso de desarrollo backend con Java, Spring Boot y Hibernate.</li>
          <li>.NET: Curso de desarrollo con .NET, incluyendo ASP.NET y Entity Framework.</li>
          <li>Python: Curso de backend con Python, Django y Flask.</li>
        </ul>
      </motion.div>
    </div>
  );
};

export default App;
