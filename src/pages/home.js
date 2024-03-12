import React from 'react'
import Nav from '../components/Nav'
import History from "../components/History"
import Chart from "../components/Chart"
import "../App.css"

function Home() {
  return (
    <div className='w-[100vw] h-[100vh] overflow-y-scroll bg-[#121212] p-[20px] flex flex-col gap-[20px]'>
        <div className='w-full h-full flex-[1]'>
            <Nav/>
        </div>
        <div className='w-full h-full flex-[9] flex gap-[20px] col900'>
            <div className='w-full h-full flex flex-col flex-[30] bg-[#1f1f27] rounded-[10px]'>
                <History/>
            </div>
            <div className='w-full h-full flex flex-col flex-[70] flex-adj'>
                <Chart/>
            </div>
        </div>
    </div>
  )
}

export default Home