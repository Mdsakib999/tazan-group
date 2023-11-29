import React from 'react';

const HomeProduct = () => {
    return (
        <div>
            
            <div className='text-center mt-16 mb-10'>
            <h1 className='text-3xl lg:text-5xl font-bold'>Our Product's</h1>
            <p className='text-lg text-gray-500 mt-3'>We offer high-quality products at affordable prices.</p>
            </div>

            <img className='b ml-[550px]' src="https://imgusr.tradekey.com/p-636516-20120223085025/magicoh-pellet-binder.jpg" alt="" />

            <button
            className="ml-[600px] my-10 px-3 lg:px-4 py-2 rounded-md
          text-black lg:text-xl font-bold bg-gradient-to-r from-green-600 to-lime-300 hover:from-lime-300 hover:to-green-600  ..."
          >
            See All
          </button>
            <div>
                
            </div>
        </div>
    );
};

export default HomeProduct;