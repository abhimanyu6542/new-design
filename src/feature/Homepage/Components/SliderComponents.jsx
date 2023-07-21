import React from 'react';
import Slider from 'react-slick';
import TestimonialCard from './TestimonialCard';

const SliderComponents = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="w-full overflow-x-hidden">
        <h1 className="bg-gradient-to-r from-[#373FFF] to-[#3ACAF8] bg-clip-text text-transparent font-bold font-roboto text-lg leading-6 text-center mt-[400px] sm:mt-14 ">
          Testimonial
        </h1>
        <h1 className="text-center mt-7 mx-5 text-4xl font-bold font-rubik text-[#1D2130] leading-10 ">
          What are our user has to
        </h1>
        <h1 className="text-center mt-1 text-4xl font-bold font-rubik text-[#1D2130] leading-10 ">
          say
        </h1>
        <Slider {...settings}>
          <div className="mx-3">
            <TestimonialCard />
          </div>
          <div className="mx-3">
            <TestimonialCard />
          </div>
          <div className="mx-3">
            <TestimonialCard />
          </div>
          <div className="mx-3">
            <TestimonialCard />
          </div>
          <div className="mx-3">
            <TestimonialCard />
          </div>
          <div className="mx-3">
            <TestimonialCard />
          </div>
          <div className="mx-3">
            <TestimonialCard />
          </div>
          <div className="mx-3">
            <TestimonialCard />
          </div>
          <div className="mx-3">
            <TestimonialCard />
          </div>
        </Slider>
        <div className="">
          <h1 className="text-center top-[180px] mx-6 text-6xl font-bold font-rubik text-[#1D2130] leading-[61px] mt-32">
            Are you ready to grow your
          </h1>
          <h1 className="text-center top-[180px] mx-6 text-6xl font-bold font-rubik text-[#1D2130] leading-[61px]">
            business with us?
          </h1>
          <h1 className="text-center top-[180px] mx-6 text-lg font-normal font-roboto text-[#1D2130] leading-7 mt-10">
            Want to get a tour of our services? Click below to book a demo with us.
          </h1>
          <button className="bg-black text-white mt-10 px-8 py-3 text-lg font-roboto rounded-xl items-center mx-auto flex justify-center">
            Book a Demo
          </button>
        </div>
      </div>
    </>
  );
};

export default SliderComponents;
