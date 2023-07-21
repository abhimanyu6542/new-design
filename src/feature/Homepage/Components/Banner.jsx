import React from 'react';
// shapes --
import bigShape1 from '/assets/circleShape-b1.png';
import bigShape2 from '/assets/circleShape-b2.png';
import smallShape1 from '/assets/circleShape-s1.png';
import smallShape2 from '/assets/circleShape-s2.png';

function Banner() {
    return ( 
        <>
            <div className='md:mt-64 mt-[470px] sm:mb-0 -mb-96'>

                <div className='relative m-10'>
                    <div className='relative w-full h-80 sm:h-72 bg-gradient-to-r from-[#9BFFA5] via-[#AED3FF] to-[#C9D4EF] border-0 rounded-md'></div>
                    <div className='absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center'>
                        <h1 className='text-4xl font-bold text-center w-auto text-slate-500'>Enjoy the seamless process of POS</h1>
                        <button className='mt-7 px-10 py-2 text-lg text-white font-semibold bg-[#1D2130] border-0 rounded-md'>Book a demo</button>
                    </div>

                    {/* -- shapes-section -- */}
                    <div className=''>
                        <div className='absolute top-10 left-10'>
                            <img src={smallShape1} alt="smallShape1" className='' />
                            <img src={smallShape2} alt="smallShape2" className='absolute top-3 left-3 ' />
                        </div>
                        <div className='absolute top-10 left-60' >
                            <img src={bigShape1} alt="bigShape1" className='' />
                            <img src={bigShape2} alt="bigShape2" className='absolute top-7 left-7' />
                        </div>
                        
                        <div className='absolute top-10 right-40' >
                            <img src={bigShape1} alt="bigShape1" className='' />
                            <img src={bigShape2} alt="bigShape2" className='absolute top-7 right-7' />
                        </div>
                        <div className='absolute bottom-10 right-10'>
                            <img src={smallShape1} alt="smallShape1" className='' />
                            <img src={smallShape2} alt="smallShape2" className='absolute top-3 right-3 ' />
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner;