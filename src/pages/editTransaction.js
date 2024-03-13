import React from 'react'

function EditTransaction() {
  return (
    <div className='w-[100vw] h-[100vh] bg-[#121212] flex items-center justify-center p-[20px]'>
      <div className='w-full h-fit flex flex-col p-[20px] rounded-[20px] max-w-[500px] bg-[#1f1f27] gap-[20px]'>
        <div className='text-white font-700 text-[32px] leading-[32px]'>Edit Transaction</div>
        <div className='w-full h-[1px] bg-gray-700 mb-[10px]'></div>
        <input type="text" placeholder='Enter Description' className='bg-[#1f1f27] h-[50px] text-[20px] border border-gray-200 px-[4px] py-[6px] text-white rounded-[10px] pl-[10px]'></input>
        <input type='number' placeholder='Enter Amount' className='bg-[#1f1f27] h-[50px] text-[20px] border border-gray-200 px-[4px] py-[6px] text-white rounded-[10px] pl-[10px]'></input>
        <select className='bg-[#1f1f27] h-[50px] text-[20px] border border-gray-200 px-[4px] text-white rounded-[10px] pl-[6px]'>
          <option>Expenditure</option>
          <option>Income</option>
        </select>
        <div className='bg-[#c03535] cursor-pointer w-fit self-center text-[20px] text-white px-[12px] py-[6px] rounded-[10px]'>Save</div>
      </div>
    </div>
  )
}

export default EditTransaction