import React from "react";
import { FaRegCalendarMinus } from "react-icons/fa";

const Main = () => {
  return (
    <div className="pt-[25px] px-[25px] bg-gray-800">
      <div className="flex items-center justify-between">
        <h1 className="text-gray-500 text-[28px] leading-[34px] font-normal cursor-pointer">
          Dashboard
        </h1>
        <button className="bg-green-500 h-[32px] rounded-[3px] text-white flex items-center justify-center px-[30px] cursor-pointer">
          Visite Portfolio
        </button>
      </div>
      <div className="grid grid-cols-4 gap-[30px] mt-[25px] pb-[15px]">


        <div className="h-[100px] rounded-[8px] bg-gray-600 border-l-[4px] border-[#4E73DF] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out">
          <div>
            <h2 className="text-white text-[18px] leading-[17px] font-bold">
              Monthly project reviews
            </h2>
            <h1 className="text-[20px] leading-[24px] font-bold text-gray-400 mt-[5px]">
              {" "}
              +4
            </h1>
          </div>
          <FaRegCalendarMinus fontSize={"28px"} color="white" />
        </div>


        <div className="h-[100px] rounded-[8px] bg-gray-600 border-l-[4px] border-green-500 flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out">
          <div>
            <h2 className="text-white text-[18px] leading-[17px] font-bold">
              Monthly project reviews
            </h2>
            <h1 className="text-[20px] leading-[24px] font-bold text-gray-400 mt-[5px]">
              {" "}
              +4
            </h1>
          </div>
          <FaRegCalendarMinus fontSize={"28px"} color="white" />
        </div>


        <div className="h-[100px] rounded-[8px] bg-gray-600 border-l-[4px] border-indigo-600 flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out">
          <div>
            <h2 className="text-white text-[18px] leading-[17px] font-bold">
              Monthly project reviews
            </h2>
            <h1 className="text-[20px] leading-[24px] font-bold text-gray-400 mt-[5px]">
              {" "}
              +4
            </h1>
          </div>
          <FaRegCalendarMinus fontSize={"28px"} color="white" />
        </div>


        <div className="h-[100px] rounded-[8px] bg-gray-600 border-l-[4px] border-orange-500 flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out">
          <div>
            <h2 className="text-white text-[18px] leading-[17px] font-bold">
              Monthly project reviews
            </h2>
            <h1 className="text-[20px] leading-[24px] font-bold text-gray-400 mt-[5px]">
              {" "}
              +4
            </h1>
          </div>
          <FaRegCalendarMinus fontSize={"28px"} color="white" />
        </div>
      </div>
    </div>
  );
};

export default Main;
