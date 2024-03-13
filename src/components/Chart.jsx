import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
);

export const options = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: 'Previous 10 expenses',
    },
  },
  options: {
    legend: {
      display: false
    }
  }
};

const labels = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

const data = {
  labels,
  datasets: [
    {
      data: [200,250,500,233,160,50,195,1200,350,200],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};
function Chart() {
  return (
    <div className='w-full h-full bg-[#1f1f27] min-h-[200px] rounded-[10px] p-[20px] flex items-center justify-center'>
      <Line options={options} data={data} />
    </div>
  )
}

export default Chart