import React from "react";

const Table = () => {
  return (
    <div className="bg-white w-[90hw]  mt-3 gap-4 rounded-2xl p-8 mx-12 max-md:mx-2 items-center">
      <div className="flex justify-between items-center">
        <div className="text-xl font-bold">Product sell</div>
        <div className="flex justify-center items-center gap-2">
          <div className="bg-white flex gap-2 rounded-full px-4 py-2 text-gray-400 border border-gray-100">
            {" "}
            <img src="./search 1.png" alt="" />
            Search
          </div>
        <div>Latest</div>
        </div>
      </div>
<div className="mt-4  flex-row gap-4">
      <div className="flex items-center m-3 gap-6 justify-between">
        <div className="flex gap-8">
        <img src="./unsplash.png" alt="" />
        <div className="flex flex-col ml-4">
          <p className="font-bold text-xl">Abstract 3d</p>
          <p className="text-gray-400">Stock photo</p>
          </div>
        </div>
        
          <div>
            $49
          </div>
          <div>
            20
          </div>
      </div>
      <div className="flex items-center m-3 gap-6 justify-between">
        <div className="flex gap-8">
        <img src="./unsplash.png" alt="" />
        <div className="flex flex-col ml-4">
          <p className="font-bold text-xl">Abstract 3d</p>
          <p className="text-gray-400">Stock photo</p>
          </div>
        </div>
        
          <div>
            $49
          </div>
          <div>
            20
          </div>
      </div>
      <div className="flex items-center m-3 gap-6 justify-between">
        <div className="flex gap-8">
        <img src="./unsplash.png" alt="" />
        <div className="flex flex-col ml-4">
          <p className="font-bold text-xl">Abstract 3d</p>
          <p className="text-gray-400">Stock photo</p>
          </div>
        </div>
        
          <div>
            $49
          </div>
          <div>
            20
          </div>
      </div>
      
      
      </div>
      
      
    </div>
  );
};

export default Table;
