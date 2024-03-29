import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div className='w-full h-full flex text-white rounded-[10px] bg-[#1f1f27] justify-between px-[20px]'>
        <div className='w-fit h-full flex items-center text-[32px]'>Anmol Srivastava</div>
        <div className='w-fit h-full flex items-center'>
            <Link to="/add">
            <div className='w-fit h-fit px-[8px] py-[4px] bg-[#353a3f] rounded-[6px] cursor-pointer hover:bg-[#525961]'>Add New</div>
            </Link>
        </div>
    </div>
  )
}

export default Nav