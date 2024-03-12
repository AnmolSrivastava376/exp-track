import React from 'react'
import Nav from '../components/Nav'

function Home() {
  return (
    <div className='w-[100vw] h-[100vh] overflow-hidden bg-[#121212] p-[20px] flex flex-col gap-[20px]'>
        <div className='w-full h-full flex-[1]'>
            <Nav/>
        </div>
        <div className='w-full h-full flex-[9]'></div>
    </div>
  )
}

export default Home