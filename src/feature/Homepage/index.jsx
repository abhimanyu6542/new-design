import React from 'react';
import HeroSection from './Components/HeroSection';
import FeatureSection from './Components/FeatureSection';
import PriceSection from './Components/PriceSection';
import SliderComponents from './Components/SliderComponents';
import Banner from './Components/Banner';

const Homepage = () => {
  return (
    <div>
      <HeroSection />
      <FeatureSection />
      <PriceSection />
      <Banner />
      <SliderComponents />
    </div>
  );
};

export default Homepage;
