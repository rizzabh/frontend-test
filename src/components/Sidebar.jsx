import React from "react"
const Sidebar = () => {
  return (
    <div className="p-4 sticky top-0 left-0 max-md:px-0 w-80 2xl:min-w-80 bg-white shadow-xl border-black h-[105vh] max-md:w-fit">
        <div className="flex items-center gap-2 p-4 justify-left">
          <div className="flex gap-2"><img src="./setting 1.png" alt="" />
          <h1 className="text-2xl font-bold  max-md:hidden">Dashboard</h1> </div>
          <p className="text-gray-400 max-md:hidden">v1.0</p>
        </div>
        <div className="bg-[#5932EA] m-4 gap-5 flex p-[0.688rem] font-medium cursor-pointer max-md:w-fit hover:bg-violet-900 rounded-md text-white">
          <img src="./key-square.png" alt="" /><div className="max-md:hidden"> Dashboard</div></div>
          <InactiveButton buttonName="Projects" imageSrc="./3d-square 1.png" />
          <InactiveButton buttonName="Customers" imageSrc="./user-square 1.png" />
          <InactiveButton buttonName="Income" imageSrc="./wallet-money 2.png" />
          <InactiveButton buttonName="Promote" imageSrc="./discount-shape 1.png" />
          <InactiveButton buttonName="Help" imageSrc="./message-question 1.png" />
          
          
          <div className="advertisement max-md:hidden w-full border mt-44 p-4 bg-gradient-to-r from-[#f597fd] to-[#4623E9] rounded-3xl shadow-lg h-40">
            <h2 className="text-white text-center font-normal text-xl">Upgrade to  PRO to get access all Features!</h2>

            <div className="text-center px-4 bg-white py-3 mt-3 mx-4 rounded-full font-semibold text-purple-600">Get Pro Now!</div>

          </div>

          <div className="profile m-4 mt-8 flex gap-4 items-center max-md:mt-96">
            <img src="./Ellipse 8.png" alt="" />
            <div className="">
              <p className="font-semibold max-md:hidden">Evano</p>
              <p className="text-sm text-gray-400 max-md:hidden">Project manager</p>
            </div>
              <img src="./chevron-down 2.png" alt="" className="ml-8 max-md:hidden" />
          </div>

    </div>
  ) 
}

export default Sidebar
export const InactiveButton = ({ buttonName, imageSrc }) => {
  return (
    <div className="flex items-center hover:bg-gray-200 rounded-md max-md:w-fit justify-between m-4 cursor-pointer">
      <div className="gap-5 flex p-[0.688rem] font-normal cursor-pointer rounded-md text-gray-400">
        <img src={imageSrc} alt="" />
        <div className="max-md:hidden">{buttonName}</div>
      </div>
      <img src="./chevron-right 2.png" alt="" className="p-2 max-md:hidden" />
    </div>
  );
};

