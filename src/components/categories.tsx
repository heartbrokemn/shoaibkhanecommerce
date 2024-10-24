/* eslint-disable @typescript-eslint/no-require-imports */
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Categories = () => {
  return (
    <div className='mt-[100px] mb-[100px]'>
          <div className="text-center mb-16 mt-28 " >
      <h1 className="scroll-m-20 text-xl text-black font-extrabold tracking-tight lg:text-2xl">
        Our Categories 
      </h1>
     
      <div className="flex mt-2 justify-center">
        <div className="w-16 h-1 rounded-full bg-mypurle inline-flex" />
      </div>
    </div>
    {/* categories start here */}
    <div className=' p-5 max-w-fit-lg grid grid-cols-1 w-[100%] lg:grid-cols-4 gap-4 md:grid-cols-2 '>
        {/* category 1 */}
        <div className='mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative' >
            <Link href='/pants'> 
            <Image src={require('../../public/images/blackpant.jpg')} alt='Shirts' width={1000} height={1000}
            className='rounded-xl duration-500 group hover:scale-125 w-60 h-150'
            />
            
            <div className=' hidden lg:block absolute -bottom-24 group-hover:bottom-2 duration-500 scroll-m-20 text-4xl font-extrabold tracking-tight bg-black/60 text-center text-white   w-full'>
                <h1 className='uppercase'>Black Pant</h1>
                

            </div>
            <div className='block lg:hidden absolute bottom-2 duration-500 z-[100] scroll-m-20 text-4xl font-extrabold tracking-tight bg-black/60 text-center text-white w-full'>
                <h1 className='uppercase'>Black Pant</h1>
                

            </div>
      
        </Link>
        </div>
        {/* category 2*/}
        <div className='mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative' >
            <Link href='/shirts'> 
            <Image src={require('../../public/images/shirtimg.jpg')} alt='Shirts' width={1000} height={1000}
            className='rounded-xl duration-500 group hover:scale-125 w-60 h-150'
            />
            
            <div className=' hidden lg:block absolute -bottom-24 group-hover:bottom-2 duration-500 scroll-m-20 text-4xl font-extrabold tracking-tight bg-black/60 text-center text-white   w-full'>
                <h1 className='uppercase'>Shirt</h1>
                

            </div>
            <div className='block lg:hidden absolute bottom-2 duration-500 z-[100] scroll-m-20 text-4xl font-extrabold tracking-tight bg-black/60 text-center text-white w-full'>
                <h1 className='uppercase'>Shirt</h1>
                

            </div>
      
        </Link>
        </div>
        {/* category 3 */}
        <div className='mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative' >
            <Link href='/shoes'> 
            <Image src={require('../../public/images/shoes.jpeg')}alt ='Shirts' width={1000} height={1000}
            className='rounded-xl duration-500 group hover:scale-125 w-60'
            />
            
            <div className=' hidden lg:block absolute -bottom-24 group-hover:bottom-2 duration-500 scroll-m-20 text-4xl font-extrabold tracking-tight bg-black/60 text-center text-white   w-full'>
                <h1 className='uppercase'>Shoes</h1>
                

            </div>
            <div className='block lg:hidden absolute bottom-2 duration-500 z-[100] scroll-m-20 text-4xl font-extrabold tracking-tight bg-black/60 text-center text-white w-full'>
                <h1 className='uppercase'>Shoes</h1>
                

            </div>
      
        </Link>
        </div>
        {/* category 4 */}
        <div className='mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative' >
            <Link href='/accessories'> 
            <Image src={require('../../public/images/watch.jpg')} alt='Shirts' width={1000} height={1000}
            className='rounded-xl duration-500 group hover:scale-125 w-60 h-150'
            />
           <div className=' hidden lg:block absolute -bottom-24 group-hover:bottom-2 duration-500 scroll-m-20 text-4xl font-extrabold tracking-tight bg-black/60 text-center text-white   w-full'>
                <h1 className='uppercase'>Accessories</h1>
                

            </div>
            <div className='block lg:hidden absolute bottom-2 duration-500 z-[100] scroll-m-20 text-4xl font-extrabold tracking-tight bg-black/60 text-center text-white w-full'>
                <h1 className='uppercase '>Accessories</h1>
                

            </div>
      
        </Link>
        </div>
          {/* category 5
          <div className='mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative' >
            <Link href='/accessories'> 
            <Image src={require('../../public/images/brownkameez.webp')} alt='Shalwar Kameez ' width={1000} height={1000}
            className='rounded-xl duration-500 group hover:scale-125 w-60 h-150'
            />
           <div className=' hidden lg:block absolute -bottom-24 group-hover:bottom-2 duration-500 scroll-m-20 text-4xl font-extrabold tracking-tight bg-black/60 text-center text-white   w-full'>
                <h1 className='uppercase'>Shalwar Kameez </h1>
                

            </div>
            <div className='block lg:hidden absolute bottom-2 duration-500 z-[100] scroll-m-20 text-4xl font-extrabold tracking-tight bg-black/60 text-center text-white w-full'>
                <h1 className='uppercase '>Shalwar Kameez</h1>
                

            </div>
      
        </Link>
        </div> */}
    </div>
    

    
    </div>
  )
}

export default Categories