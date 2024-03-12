import React, { useState } from "react";
import NorthIcon from "@mui/icons-material/North";
import SouthIcon from "@mui/icons-material/South";
import "../App.css";

function History() {
  const SampleData = [
    {
      amount: 500,
      isIncome: false,
      desc: "Pizza",
    },
    {
      amount: 250,
      isIncome: false,
      desc: "Taxi",
    },
    {
      amount: 20000,
      isIncome: true,
      desc: "Stipend",
    },
  ];
  return (
    <div className="w-full h-full h-adj rounded-[10px] px-[20px] py-[10px] overflow-y-scroll flex flex-col gap-[10px]">
      <div className="text-[24px] text-gray-500 leading-[40px]">Transaction History <span className="text-[12px] text-gray-600">(Click to edit)</span></div>
      {SampleData.map((index) => {
        return (
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
        );
      })}
    </div>
  );
}

export default History;
