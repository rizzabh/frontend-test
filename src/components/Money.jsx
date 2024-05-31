import React from "react";

const Money = () => {
  return (
    <div className="bg-white grid grid-cols-3 gap-3 2xl:gap-20  mt-3 max-[1255px]:grid-cols-2 max-sm:grid-cols-1 rounded-2xl p-8 w-fit mx-12  items-center max-md:mx-2">
      <div className="flex gap-4 items-center">
        <img src="./green.png" alt="" />
        <div className="border-r pr-8">
            <p className="text-gray-400 ">Earning</p>
            <h1 className="text-3xl font-bold">$198k</h1>
            <p> <span className="text-green-600 font-semibold">36.8%</span> this month</p>
        </div>
        
      </div> 
      <div className="flex gap-4 items-center">
        <img src="./blue.png" alt="" />
        <div className="border-r pr-8">
            <p className="text-gray-400 ">Balance</p>
            <h1 className="text-3xl font-bold">$18k</h1>
            <p> <span className="text-red-600 font-semibold">36.8%</span> this month</p>
        </div>
        
      </div> 
      <div className="flex gap-4 items-center">
        <img src="./pink.png" alt="" />
        <div className="pr-8">
            <p className="text-gray-400 ">Total Balance</p>
            <h1 className="text-3xl font-bold">$198k</h1>
            <p> <span className="text-green-600 font-semibold">36.8%</span> this month</p>
        </div>
        
      </div> 
      
    </div>
  );
};

export default Money;
