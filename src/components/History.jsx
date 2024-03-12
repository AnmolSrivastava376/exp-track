import React from 'react'
import NorthIcon from '@mui/icons-material/North';
import SouthIcon from '@mui/icons-material/South';

function History() {
  const SampleData=[
    {
      amount: 500,
      isIncome: false,
      desc: "Pizza"
    },
    {
      amount: 250,
      isIncome: false,
      desc: "Taxi"
    },
    {
      amount: 10000,
      isIncome: true,
      desc: "Stipend"
    },
  ]
  return (
    <div className='w-full h-full bg-[#1f1f27] rounded-[10px] p-[20px] overflow-y-scroll flex flex-col gap-[10px]'>
      {SampleData.map((index)=>{
        return <div className='flex justify-between h-[40px] w-full bg-[#2b2935] rounded-[10px] px-[10px] py-[4px] items-center'>
          <div className='text-white'>INR {index.amount}</div>
          <div className='text-gray-300'>{index.desc}</div>
          <div className='h-full aspect-[0.8] bg-[#e6dddd11] rounded-[10px] flex items-center justify-center'>{index.isIncome?<NorthIcon style={{color: 'green', height: '20px'}}/>:<SouthIcon style={{color: 'red', height: '20px'}}/>}</div>
        </div>
      })}
    </div>
  )
}

export default History