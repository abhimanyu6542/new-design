import React from 'react';
import { BsCheck } from 'react-icons/bs';
import Group from '/assets/Group.png';
import Group1 from '/assets/Group-1.png';
import Group2 from '/assets/Group-2.png';

const PriceSection = () => {
  return (
    <>
      <div className="border-2 border-white priceSection h-[450px] mb-44 mt-10">
        <h1 className="heading font-bold font-roboto text-2xl leading-6 text-center mt-9 md:mt-28 ">
          Pricing
        </h1>
        <h1 className="text-center mt-2 md:mt-7 text-4xl mx-5 font-bold font-rubik text-[#1D2130] leading-10 ">
          Simple pricing for your business
        </h1>
        <h1 className="text-center mt-4 mx-5 text-lg font-medium font-rubik text-[#1D2130] leading-8 ">
          Plan that is carefully crafted to suit your business.
        </h1>
        <div className="md:h-64 sm:mt-1 md:mt-10 md:mx-auto mb-10 mx-5 flex flex-col md:flex-row justify-center items-center shadow-2xl rounded-xl md:w-[800px]  w-auto bg-[#FFFFFF] md:flex md:justify-around">
          <div className="w-[40%] px-0 py-5 sm:p-9 mx-auto flex justify-center flex-col items-center">
            <p className="sm:font-extrabold font-semibold leading-4 sm:leading-8 text-lg text-[#171923]">
              Only at
            </p>
            <p className="sm:font-extrabold font-medium leading-4 my-2 sm:my-0 sm:leading-[60px] text-xl sm:text-6xl text-[#171923]">
              $329
            </p>
            <p className="font-medium leading-3 sm:leading-7 text-base sm:text-lg text-[#171923]">
              billed per month
            </p>
            <button className="bg-black text-white px-10 sm:px-8 py-0 mt-2 sm:py-3 flex justify-center text-center text-lg font-roboto rounded-xl">
              Get Started
            </button>
          </div>
          <div className="w-[60%] py-3 sm:p-3 ">
            <p className="text-lg font-roboto leading-5 sm:leading-7 text-[#2D3748]">
              Access these features when you get this pricing package for your business.
            </p>
            <ul className="text-gray-500 text-lg lg:text-lg mt-2 font-medium">
              <li>
                <div className="flex flex-row text-lg font-roboto leading-6 sm:leading-7 text-[#2D3748]">
                  <BsCheck className="mr-2 mt-1 bg-gradient-to-r from-[#373FFF] to-[#3ACAF8] text-white rounded-full" />
                  International calling and messaging API
                </div>
              </li>
              <li>
                <div className="flex flex-row text-lg font-roboto leading-6 sm:leading-7 text-[#2D3748]">
                  <BsCheck className="mr-2 mt-1 bg-gradient-to-r from-[#373FFF] to-[#3ACAF8] text-white rounded-full" />
                  Additional phone numbers
                </div>
              </li>
              <li>
                <div className="flex flex-row text-lg font-roboto leading-6 sm:leading-7 text-[#2D3748]">
                  <BsCheck className="mr-2 mt-1 bg-gradient-to-r from-[#373FFF] to-[#3ACAF8] text-white rounded-full" />
                  Automated messages via Zapier
                </div>
              </li>
              <li>
                <div className="flex flex-row text-lg font-roboto leading-6 sm:leading-7 text-[#2D3748]">
                  <BsCheck className="mr-2 mt-1 bg-gradient-to-r from-[#373FFF] to-[#3ACAF8] text-white rounded-full" />
                  24/7 support and consulting
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 mb-5 md:w-[700px] mx-auto justify-center items-start">
          <div className="flex flex-row my-1 sm:my-auto">
            <img src={Group} alt="" />
            <span className="text-lg font-bold leading-6 text-[#171923] mx-3">
              30 days money back Guarantee
            </span>
          </div>
          <div className="flex flex-row my-1 sm:my-auto">
            <img src={Group1} alt="" />
            <span className="text-lg font-bold leading-6 text-[#171923] mx-3">
              No setup fees 100% hassle-free
            </span>
          </div>
          <div className="flex flex-row my-1 sm:my-auto">
            <img src={Group2} alt="" />
            <span className="text-lg font-bold leading-6 text-[#171923] mx-3">
              Easy Monthly Subscriptions.
            </span>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default PriceSection;
