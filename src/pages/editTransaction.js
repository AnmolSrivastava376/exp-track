import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'
function AddTransaction() {
  const id = useParams()
  const [desc, setDesc] = useState("")
  const [amount,setAmount] = useState()
  const [isIncome,setIsIncome] = useState(false)
  const navigate = useNavigate();
  const HandleClick = async (newObj)=>{
    try{
      await axios.post("http://localhost:5000/api/v1/edit", newObj)
      alert("Data edited successfully")
      navigate('/')
    } catch(e){
      console.log(e)
    }
  }
  useEffect(()=>{
    async function editT(){
      await axios.post("http://localhost:5000/api/v1/getItem", id).then((resp)=>{setAmount(resp.data[0].amount); setDesc(resp.data[0].desc); setIsIncome(resp.data[0].isIncome?"Income":"Expenditure")})
    }
    editT();
  },[])
  return (
    <div className='w-[100vw] h-[100vh] bg-[#121212] flex items-center justify-center p-[20px]'>
      <div className='w-full h-fit flex flex-col p-[20px] rounded-[20px] max-w-[500px] bg-[#1f1f27] gap-[20px]'>
        <div className='text-white font-700 text-[32px] leading-[32px]'>Edit Transaction</div>
        <div className='w-full h-[1px] bg-gray-700 mb-[10px]'></div>
        <input type="text" placeholder='Enter Description' className='bg-[#1f1f27] h-[50px] text-[20px] border border-gray-200 px-[4px] py-[6px] text-white rounded-[10px] pl-[10px]' value={desc} onChange={(e)=>setDesc(e.target.value)}></input>
        <input type='number' placeholder='Enter Amount' className='bg-[#1f1f27] h-[50px] text-[20px] border border-gray-200 px-[4px] py-[6px] text-white rounded-[10px] pl-[10px]' value={amount} onChange={(e)=>setAmount(e.target.value)}></input>
        <select className='bg-[#1f1f27] h-[50px] text-[20px] border border-gray-200 px-[4px] text-white rounded-[10px] pl-[6px]' value={isIncome} onChange={(e)=>setIsIncome(e.target.value)}>
          <option>Expenditure</option>
          <option>Income</option>
        </select>
        <div className='w-full flex gap-[10px] justify-center'>
        <div className='bg-[#23661d] cursor-pointer w-fit text-[20px] text-white px-[12px] py-[6px] rounded-[10px]' onClick={()=>{
          const newObj={
            desc: desc,
            amount: amount,
            isIncome: isIncome==="Income",
            id: id.id
          };
          HandleClick(newObj)
        }}>Submit</div>
        <div className='bg-[#c03535] cursor-pointer w-fit self-center text-[20px] text-white px-[12px] py-[6px] rounded-[10px]' onClick={async ()=>{
          await axios.post('http://localhost:5000/api/v1/delete', id).then(()=>{alert("Deleted this entry");navigate('/')})
        }}>Delete</div>
        </div>
      </div>
    </div>
  )
}

export default AddTransaction