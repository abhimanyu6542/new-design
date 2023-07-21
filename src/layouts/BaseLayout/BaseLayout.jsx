import React from 'react';
import Footer from '../../feature/Shared/Footer/Footer';
import Navbar from '../../feature/Shared/Navbar/Navbar';


import { Outlet } from 'react-router-dom';


const BaseLayout = () => {

  return (
    <>
      <Navbar />
      <div className='mt-20'>
        <Outlet />
      </div>
      <Footer />

    </>
  );
};

export default BaseLayout;
