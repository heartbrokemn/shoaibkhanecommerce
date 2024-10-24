import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { Button } from './ui/button'

const Promotion = () => {
  return (
    <div className='mt-[100px] mb-[100px]'>
    {/* Promotion heading  */}
         <div className="text-center mb-16 mt-10">
      <h1 className="scroll-m-20 text-xl text-black font-extrabold tracking-tight lg:text-2xl">
        Our Promotion 
      </h1>
     
      <div className="flex mt-2 justify-center">
        <div className="w-16 h-1 rounded-full bg-mypurle inline-flex" />
      </div>
    </div>
    {/* Promotion star here */}
    <div className='p-5 grid cols-1 lg:grid-cols-2 gap-5 '>
        {/* 1st children */}
        <div
  className="hero h-[20rem] promo-1 rounded-2xl "
 >
  <div className="hero-overlay bg-opacity-50 rounded-2xl"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className=" scroll-m-20 text-4xl font-bold tracking-tight uppercase ">Get upto <span className='text-mypurle text-6xl'>40%</span> off

      </h1>
      <p className="mb-5 scroll-m-20 text-base font-medium text-whitemytracking-tight mt-1 ">
        
        Flash Sale , get upto 40% off on the season variant. 
      </p>
      <Button className="outline outline-offset-1 outline-2 rounded-xl outline-mypurle group hover:outline-white duration-300 ">
      <FaShoppingCart className="mr-2 h-6 w-6 group-hover:animate-bounce " /> Shop Now
    </Button>
    </div>
  </div>
</div>

{/* 2nd child */}
<div
  className="hero h-[20rem] promo-2 rounded-2xl "
 >
  <div className="hero-overlay bg-opacity-45 rounded-2xl"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className=" scroll-m-20 text-4xl font-bold tracking-tight uppercase ">Get upto <span className='text-mypurle text-6xl'>25%</span> off

      </h1>
      <p className="mb-5 scroll-m-20 text-base font-medium text-whitemytracking-tight mt-1 ">
        
        Flash Sale , get upto 25% off on the New Jewellery Arrival . 
      </p>
      <Button className="outline outline-offset-1 outline-2 rounded-xl outline-mypurle group hover:outline-white duration-300 ">
      <FaShoppingCart className="mr-2 h-6 w-6 group-hover:animate-bounce " /> Shop Now
    </Button>
    </div>
  </div>
</div>

    </div>

    </div>
  )
}

export default Promotion