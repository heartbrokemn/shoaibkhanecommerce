/* eslint-disable @typescript-eslint/no-require-imports */

import Image from "next/image"
const Services = () => {
  return (
    <div className="mb-[100px] mt[100px] ">
        <section className="text-gray-600 body-font ">
  <div className="container px-5 py-20 mx-auto">
    <div className="text-center mb-16 ">
      <h1 className="scroll-m-20 text-xl text-black font-extrabold tracking-tight lg:text-2xl">
        Our Services
      </h1>
     
      <div className="flex mt-2 justify-center">
        <div className="w-16 h-1 rounded-full bg-mypurle inline-flex" />
      </div>
    </div>
    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-15-mt-0 md:space-y-0 space-y-6">
    
    {/* delivery  */}
      <div className="p-5 lg:w-1/3 mx-auto flex  flex-col text-center items-center">
        <div className=" inline-flex items-center justify-center rounded-full ">
      <Image src={require('../../public/images/final.png')}
      width={100}
      height={100}
      alt="Delivery" className="mb-3"/>
        </div>

        <div className="flex-grow ">
          <h2 className="capitalize hover:text-mypurle cursor-pointer scroll-m-20 text-2xl font-bold text-black tracking-tight lg:text-xl mt-5 mb-3">
            Free Delivery
          </h2>
          <p className="text-black line-clamp-2 scroll-m-20  text-base font-semibold tracking-tight transition-colors">
            Free Delivery on above $500
          </p>

        </div>
      </div>
        {/* 24/7 Services  */}
        <div className="p-4 lg:w-1/3 mx-auto flex flex-col text-center items-center">
        <div className=" inline-flex items-center justify-center rounded-full mb- flex-shrink-0">
      <Image src={require('../../public/images/helpline-01.png')}
      width={100}
      height={100}
      alt="Delivery"/>
        </div>

        <div className="flex-grow ">
          <h2 className="capitalize hover:text-mypurle cursor-pointer scroll-m-20 text-2xl font-bold text-black tracking-tight lg:text-xl mt-5 mb-3">
            24/7 Customer Service
          </h2>
          <p className="text-black line-clamp-2 scroll-m-20  text-base font-semibold tracking-tight transition-colors">
            For Queries & Question Feel Free to Contact  
          </p>

        </div>
      </div>
      
        {/* Monayback  */}
        <div className="p-4 lg:w-1/3 mx-auto flex flex-col text-center items-center">
        <div className=" inline-flex items-center justify-center rounded-full mb- flex-shrink-0">
      <Image src={require('../../public/images/money back-01.png')}
      height={100}
      alt="Delivery"
      className="mt-0"/>
        </div>

        <div className="flex-grow ">
          <h2 className="capitalize hover:text-mypurle cursor-pointer scroll-m-20 text-2xl font-bold text-black tracking-tight lg:text-xl mt-3 mb-3">
           Money Back Guarantee
          </h2>
          <p className="text-black line-clamp-2 scroll-m-20  text-base font-semibold tracking-tight transition-colors">
        Get Money Back Guarantee on Damage Products
          </p>

        </div>
      </div>
      
    </div>
  
  </div>
</section>

    </div>
  )
}

export default Services