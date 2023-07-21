import React from 'react';
import DashboardImage from '/assets/Dashboardimage.png';
import '../../../style/HeroSection.css';

const HeroSection = () => {
  return (
    <>
      <div className="relative">
        <div className="relative h-[900px] blur-3xl contrast-100  bg-gradient-to-r from-[#9BFFA5] via-[#AED3FF] to-[#C9D4EF]  border-0 rounded-full"></div>

        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2">
          <h1 className="text-center mt-20 text-6xl mx-10 font-bold font-rubik text-[#1D2130] leading-[52px] lg:leading-[58px]">
            Versatile POS Solutions for
          </h1>
          <h1 className="text-center top-[180px] text-6xl font-bold font-rubik text-[#1D2130] leading-[52px] lg:leading-[61px]">
            Every Business Setting
          </h1>
          <h1 className="text-center top-[180px] mx-10 text-lg font-normal font-roboto text-[#1D2130] leading-7 mt-10">
            Whether you run a retail store, restaurant, or online business, Zinqler empowers you
          </h1>
          <h1 className="text-center mx-10 top-[180px] text-lg font-normal font-roboto text-[#1D2130] leading-7">
            to thrive with its adaptable and comprehensive POS software.
          </h1>
          <form className="my-12 mx-10 flex justify-center">
            <div className="relative w-72 sm:w-96 ">
              <input
                type="search"
                id="search"
                className="block w-full p-4 pl-10 text-sm text-gray-900  rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter Your Email"
                required
              />
              <button
                type="submit"
                className="text-white absolute right-2.5 bottom-2.5 bg-black hover:bg-black focus:ring-4 focus:outline-none focus:ring-black font-medium rounded-lg text-sm px-4 py-2 dark:bg-black dark:hover:bg-black dark:focus:ring-black"
              >
                Get free trial
              </button>
            </div>
          </form>
          <div className="flex mt-6 justify-center ml-8 mx-6 items-center">
            <img src={DashboardImage} alt="dashboard" className=" w-[800px] sm:w-[1012px]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;

{
  /* <h1 className="text-center mt-28 text-6xl mx-10 font-bold font-rubik text-[#1D2130] leading-[52px] lg:leading-[58px]">
            Versatile POS Solutions for
          </h1>
          <h1 className="text-center top-[180px] text-6xl font-bold font-rubik text-[#1D2130] leading-[52px] lg:leading-[61px]">
            Every Business Setting
          </h1>
          <h1 className="text-center top-[180px] mx-10 text-lg font-normal font-roboto text-[#1D2130] leading-7 mt-10">
            Whether you run a retail store, restaurant, or online business, Zinqler empowers you
          </h1>
          <h1 className="text-center mx-10 top-[180px] text-lg font-normal font-roboto text-[#1D2130] leading-7">
            to thrive with its adaptable and comprehensive POS software.
          </h1>
          <form className="my-12 mx-10 flex justify-center">
            <div className="relative w-72 sm:w-96 ">
             
              <input
                type="search"
                id="search"
                className="block w-full p-4 pl-10 text-sm text-gray-900  rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter Your Email"
                required
              />
              <button
                type="submit"
                className="text-white absolute right-2.5 bottom-2.5 bg-black hover:bg-black focus:ring-4 focus:outline-none focus:ring-black font-medium rounded-lg text-sm px-4 py-2 dark:bg-black dark:hover:bg-black dark:focus:ring-black"
              >
                Get free trial
              </button>
            </div>
          </form>
          <div className="flex mt-6 justify-center ml-8 mx-6 items-center">
            <img src={DashboardImage} alt="dashboard" className=" w-[800px] sm:w-[1012px]" />
          </div> */
}
