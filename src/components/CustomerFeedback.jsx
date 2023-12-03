import React from 'react';

const CustomerFeedback = () => {
    return (
        <div>
            <div className="text-center mt-16 mb-10">
        <h1 className=" text-3xl lg:text-5xl font-bold">Happy Client's</h1>
        <p className="text-lg text-gray-500 mt-5 w-[85%] lg:w-[75%] mx-auto">Inspired by the unwavering faith and kind words of our esteemed customers, we embark on a journey of continuous improvement, striving to surpass expectations.
        </p>
      </div>


      <div>
        <h1 className='w-[85%] lg:w-[60%] mx-auto px-7 py-4 lg:py-7 rounded-lg bg-zinc-50 shadow-md text-lg text-center'><span className='text-5xl font-mono text-sky-700'>"</span> Lorem ipsum dolor sit amet consectetur adipi sicing elit. Dolores, ducimus. <span className='text-5xl font-mono text-sky-700'>"</span></h1>

        <div className='flex items-center justify-center gap-x-4'>
            <div className='w-[60px] h-[60px] rounded-full' >

            <img className='rounded-full h-full w-full' src="https://img.freepik.com/free-photo/awkward-smiling-man-feel-indecisive_176420-18009.jpg?w=996&t=st=1701583573~exp=1701584173~hmac=0034ab6010aedc19e1c2bb3f3a7a37b59c533313a7c7b89ad9c6e06b70c72ed1" alt="" />
            </div>

            <div className='my-5'>
                <p className='font-semibold'>Abdul Hakim</p>
                <p>Feed Miller</p>
            </div>
        </div>
      </div>
        </div>
    );
};

export default CustomerFeedback;