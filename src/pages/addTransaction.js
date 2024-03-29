import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
function AddTransaction() {
  const navigate = useNavigate()
  const [desc, setDesc] = useState("")
  const [amount,setAmount] = useState()
  const [isIncome,setIsIncome] = useState(false)
  const HandleClick = async (newObj)=>{
    try{
      await axios.post("http://localhost:5000/api/v1/add", newObj)
      console.log("Success")
      alert("Data entered successfully")
      setAmount(0)
      setDesc("")
      setIsIncome("Expenditure")
      navigate('/')
    } catch(e){
      console.log(e)
    }
  }
  return (
    <div className='w-[100vw] h-[100vh] bg-[#121212] flex items-center justify-center p-[20px]'>
      <div className='w-full h-fit flex flex-col p-[20px] rounded-[20px] max-w-[500px] bg-[#1f1f27] gap-[20px]'>
        <div className='text-white font-700 text-[32px] leading-[32px]'>Add Transaction</div>
        <div className='w-full h-[1px] bg-gray-700 mb-[10px]'></div>
        <input type="text" placeholder='Enter Description' className='bg-[#1f1f27] h-[50px] text-[20px] border border-gray-200 px-[4px] py-[6px] text-white rounded-[10px] pl-[10px]' value={desc} onChange={(e)=>setDesc(e.target.value)}></input>
        <input type='number' placeholder='Enter Amount' className='bg-[#1f1f27] h-[50px] text-[20px] border border-gray-200 px-[4px] py-[6px] text-white rounded-[10px] pl-[10px]' value={amount} onChange={(e)=>setAmount(e.target.value)}></input>
        <select className='bg-[#1f1f27] h-[50px] text-[20px] border border-gray-200 px-[4px] text-white rounded-[10px] pl-[6px]' value={isIncome} onChange={(e)=>setIsIncome(e.target.value)}>
          <option>Expenditure</option>
          <option>Income</option>
        </select>
        <div className='bg-[#c03535] cursor-pointer w-fit self-center text-[20px] text-white px-[12px] py-[6px] rounded-[10px]' onClick={()=>{
          const newObj={
            desc: desc,
            amount: amount,
            isIncome: isIncome==="Income"
          };
          HandleClick(newObj)
        }}>Submit</div>
      </div>
    </div>
  )
}

export default AddTransaction