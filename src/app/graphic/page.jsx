"use client";

import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { motion } from 'framer-motion';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

var beneficios = [50, 80, 150, 120, 130, 150, 170, 180, 175, 173, 171, 190];
var Profesores = [1, 2, 0, 2, 4, 1, 1, 2, 3, 0, 0, 3];
var Clases = [2, 5, 18, 21, 3, 4, 6, 10, 2, 5, 10, 11];
var ventas = [200, 600, 1800, 1100, 1500, 1532, 1300, 1967, 1985, 1895, 1790, 2100];
var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Monthly Data Chart',
    },
  },
};

var miData = {
  labels: meses,
  datasets: [
    {
      label: 'Beneficios',
      data: beneficios,
      tension: 0.5,
      fill: false,
      borderColor: 'rgb(247, 2, 19)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      pointRadius: 3.5,
      pointBorderColor: 'rgb(247, 2, 19)',
      pointBackgroundColor: 'rgba(255, 255,255)',
    },
  ],
};

var miData2 = {
  labels: meses,
  datasets: [
    {
      label: 'Ventas',
      data: ventas,
      tension: 0.5,
      fill: true,
      borderColor: 'rgb(247, 2, 19)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      pointRadius: 3,
      pointBorderColor: 'rgb(247, 2, 19)',
      pointBackgroundColor: 'rgba(255, 255,255)',
    },
  ],
};
var miData3 = {
  labels: meses,
  datasets: [
    {
      label: 'Clases',
      data: Clases,
      tension: 0.5,
      fill: true,
      borderColor: 'rgb(247, 2, 19)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      pointRadius: 3.5,
      pointBorderColor: 'rgb(247, 2, 19)',
      pointBackgroundColor: 'rgba(255, 255,255)',
    },
  ],
};
var miData4 = {
  labels: meses,
  datasets: [
    {
      label: 'Profesores',
      data: Profesores,
      tension: 0.5,
      fill: true,
      borderColor: 'rgb(247, 2, 19)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      pointRadius: 3.5,
      pointBorderColor: 'rgb(247, 2, 19)',
      pointBackgroundColor: 'rgba(255, 255,255)',
    },
  ],
};

const LinesChart = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1, transition: { delay: 1.5, duration: 0.4, ease: "easeIn" }
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[25px]"
        >
          <div>
            <div className="flex flex-col gap-6 p-5 bg-[#27272c] rounded-xl">
              <div className="text-5xl font-extrabold text-outline text-primary group-hover:text-outline-hover transition-all duration-500">
                Usuarios Nuevos  
              </div>
            </div>
            <div className="relative w-full h-15">
              <Line data={miData} options={options} />
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-6 p-5 bg-[#27272c] rounded-xl">
              <div className="text-5xl font-extrabold text-outline text-primary hover:text-accent transition-all duration-500">
                Clases Nuevas  
              </div>
            </div>
            <div className="relative w-full h-96">
              <Line data={miData2} options={options} />
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-6 p-5 bg-[#27272c] rounded-xl">
              <div className="text-5xl font-extrabold text-outline text-primary group-hover:text-accent transition-all duration-500">
                Ventas 
              </div>
            </div>
            <div className="relative w-full h-96">
              <Line data={miData3} options={options} />
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-6 p-5 bg-[#27272c] rounded-xl">
              <div className="text-5xl font-extrabold text-outline text-primary group-hover:text-accent transition-all duration-500">
                Profesores Nuevos  
              </div>
            </div>
            <div className="relative w-full h-96">
              <Line data={miData4} options={options} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LinesChart;


