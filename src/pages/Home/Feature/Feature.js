import React from 'react';

const Feature = () => {
    return (
        <div id='feature'>
        
            <section className="px-4 py-10 mx-auto max-w-7xl">
              <div className='py-16'> 
              <h1 className='text-4xl pb-1 font-extrabold text-gray-800'>Our <span className='text-blue-800'>Features </span></h1>
          <p className='py-1 text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p></div>
           
  <div className="grid  items-center grid-cols-1 mb-24 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24">
    <div>
      <h2 className="mb-4 text-2xl font-extrabold tracking-tight text-center text-gray-800 md:leading-tight sm:text-left md:text-4xl"><span className='text-blue-800'>Clear overview </span>for efficient  tracking</h2>
      <p className="mb-5 text-base text-center text-gray-600 sm:text-left md:text-lg">
        Handle your subscriptions and transactions efficiently with the clear overview in Dashboard. Features like the smart search option allow you to quickly find any data you’re looking for.
      </p>
      <a href="#" className="w-full btn btn-dark btn-lg sm:w-auto">Learn More</a>
    
    </div>
   
    <div className="w-full h-full py-16">
        <img src="https://images.unsplash.com/photo-1478476868527-002ae3f3e159?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aGVhbHRoY2FyZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=600&q=60" alt="" />
    </div>
  
  </div>
  <hr className='pb-16' />
  <div className="grid flex-col-reverse items-center grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24">
    <div className="order-none md:order-2">
      <h2 className="mb-4 text-2xl font-extrabold tracking-tight text-center text-gray-800 md:leading-tight sm:text-left md:text-4xl"> <span className='text-blue-800'>Decide how</span>  you integrate Payments</h2>
      <p className="mb-5 text-base text-center text-gray-600 sm:text-left md:text-lg">
        Love to code? Next to our ready-made and free plugins you can use our expansive yet simple API; decide how you integrate Payments and build advanced and reliable products yourself from
        scratch.
      </p>
      <a href="#" className="w-full  btn btn-dark btn-lg sm:w-auto">Learn More</a>
    </div>
    <div className="w-full h-full py-16 ">
        
        <img src="https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aGVhbHRoY2FyZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=600&q=60" alt="" />
    </div>
  </div>
</section>

        </div>
    );
};

export default Feature;