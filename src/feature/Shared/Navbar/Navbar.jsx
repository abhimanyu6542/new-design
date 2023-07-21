import React, { useEffect, useState } from 'react';
// import Logo from '../../../../public/assets/logo.png'
import { navLinks } from '../../../constants/Navlinks/NavData';
import { HiMenuAlt1, HiX } from 'react-icons/hi';
import MobileNavLinks from './MobileNavLinks';
import NavLink from './NavLink';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const [active, setActive] = useState(null);

  useEffect(() => {
    const scrollActive = () => {
      setActive(window.scrollY > 20);
    };
    window.addEventListener('scroll', scrollActive);
    return () => window.removeEventListener('scroll', scrollActive);
  }, [active]);

  return (
    <>
      <div className={`${active ? 'shadow-lg bg-white' : ''} fixed w-full top-0 left-0 z-20`}>
        <div>
          <div
            className={`${
              active ? 'py-4 transition-all duration-300' : 'py-4 mb-5'
            } container  mx-auto flex items-center justify-between px-2`}
          >
            <div className="flex items-center gap-4">
              <HiMenuAlt1
                className="text-3xl ml-10 sm:ml-0 xl:hidden cursor-pointer"
                onClick={() => setToggle(true)}
              />
              <div className=" ml-10 tracking-wide font-bold text-center sm:text-left">
                {/* <img src={Logo} alt="Logo" /> */}
                <p className=" font-extrabold text-3xl leading-7 ">Zinqler</p>
              </div>
            </div>
            <div className="xl:flex items-center justify-center hidden">
              {navLinks.map((navLink) => {
                return <NavLink key={navLink.id} {...navLink} />;
              })}
            </div>
            <div className="flex">
              <div className="mx-2 hidden sm:block sm:mx-4 text-base">
                <button className="bg-black text-white px-8 py-3 text-lg font-roboto rounded-xl">
                  Book Now
                </button>
              </div>

              {/* Mobile NavLink */}
              {toggle && (
                <motion.div
                  initial={{ x: -500, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="fixed h-full w-[300px] sm:w-96 top-0 left-0 bg-white z-20 navbar text-black flex flex-col justify-center items-start shadow-lg gap-3 py-1"
                >
                  <div className="-mt-52">
                    {navLinks.map((navLink) => {
                      return <MobileNavLinks key={navLink.id} {...navLink} setToggle={setToggle} />;
                    })}
                  </div>

                  <div className="mx-2 sm:mx-4 text-base block sm:hidden">
                    <button className="bg-black text-white px-8 py-3 text-lg font-roboto rounded-xl">
                      Book Now
                    </button>
                  </div>

                  <HiX
                    className="absolute right-12 top-12 text-3xl cursor-pointer"
                    onClick={(prev) => setToggle(!prev)}
                  />
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
