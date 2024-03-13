import React, { useState, useEffect } from 'react'
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
import axios from 'axios';

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

function Chart() {
  const [chartData,setChartData] = useState([200,250,500,233,160,50,195,1200,350,200])
  const [labels,setLabels] = useState(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'])
  const data = {
    labels,
    datasets: [
      {
        data: chartData,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };
  useEffect(()=>{
    async function setData(){
      var arr=[]
      var labelArr=[]
      axios.post("http://localhost:5000/api/v1/get").then((resp) => {
        resp.data.map((i)=> !i.isIncome && arr.push(i.amount) && labelArr.push(i.desc))
        if(arr.length>10){
          arr=arr.slice(-10)
        }
        setChartData(arr)
        if(labelArr.length>10){
          labelArr=labelArr.slice(-10)
        }
        setLabels(labelArr)
      });
    }
    setData()
  },[])
  return (
    <div className='w-full h-full bg-[#1f1f27] min-h-[200px] rounded-[10px] p-[20px] flex items-center justify-center'>
      <Line options={options} data={data} />
    </div>
  )
}

export default Chart