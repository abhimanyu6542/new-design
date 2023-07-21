import React from 'react';
import Avatar from '/assets/avatar.jpg';

const TestimonialCard = () => {
  return (
    <>
      <div className="sm:w-96 w-60 shadow-xl bg-[#ffffff] rounded-xl sm:h-72 h-auto sm:p-2 m-6 mx-auto">
        <div className="ml-3 mt-3 p-3">
          <div className="flex">
            <div className="h-14 w-14 rounded-full text-center self-center mt-6">
              <img src={Avatar} alt="icon" />
            </div>
            <div className="ml-3">
              <h1 className="mt-5 text-[#323B4B] font-bold text-lg leading-7">Sophie Moore</h1>
              <h1 className=" text-[#6F6C90] font-normal text-lg leading-7">
                Product Developer at Webflow
              </h1>
            </div>
          </div>
          <p className="text-[#5F6673] font-normal leading-7 text-lg text-center my-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum ipsa a animi veritatis
            ducimus vel illo laborum,{' '}
          </p>
        </div>
      </div>
    </>
  );
};

export default TestimonialCard;
