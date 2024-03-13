import React, { useEffect, useState } from "react";
import NorthIcon from "@mui/icons-material/North";
import SouthIcon from "@mui/icons-material/South";
import { Link } from "react-router-dom";
import "../App.css";
import axios from 'axios'

function History() {
  const [SampleData, setSampleData] = useState([{}])
  useEffect(() => {
    try {
        axios.post('http://localhost:5000/api/v1/get').then(resp => setSampleData(resp.data))
    }
    catch (err) {
        console.log(err)
    }
}, [])
  return (
    <div className="w-full h-full h-adj rounded-[10px] px-[20px] py-[10px] overflow-y-scroll flex flex-col gap-[10px]">
      <div className="text-[24px] text-gray-500 leading-[40px]">Transaction History <span className="text-[12px] text-gray-600">(Click to edit)</span></div>
      {SampleData?.map((index) => {
        return (
          <Link to="/edit">
          <div className="flex cursor-pointer justify-between h-[40px] w-full bg-[#2b2935] rounded-[10px] px-[10px] py-[4px] items-center hover:bg-[#312d3f]">
            <div className="text-white">INR {index.amount}</div>
            <div className="text-gray-500">{index.desc}</div>
            <div className="h-full aspect-[0.8] bg-[#e6dddd11] rounded-[10px] flex items-center justify-center">
              {index.isIncome ? (
                <NorthIcon style={{ color: "green", height: "20px" }} />
              ) : (
                <SouthIcon style={{ color: "red", height: "20px" }} />
              )}
            </div>
          </div>
          </Link>
        );
      })}
    </div>
  );
}

export default History;
