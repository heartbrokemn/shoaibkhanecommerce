/* eslint-disable react/jsx-key */
'use client'
/* eslint-disable @typescript-eslint/no-unused-vars */

import React from 'react'
import Image from 'next/image'
import { FaMinus, FaPlus, FaTrash } from 'react-icons/fa'
import { Button } from './ui/button'
import { useAppDispatch, useAppSelector } from '@/app/store/hooks'
import { addcart, delitem, subtactioCart } from '@/app/store/futures/cart'

const CartCard = () => {
  const cartarray = useAppSelector ((state)=>state.Cart)
const dispatch=useAppDispatch();
return (
<>
{cartarray.length >=1 && cartarray.map((item,i)=>(
      <div key={i} className='flex px- py-3 justify-center items-center ml-14 mt-[50px] mb-[100px]'>
      {/* Image */}
      <Image src={item.image} alt={item.title} width={80} height={80} className="w-[100px] h-[100px]"/>
      {/* some info  */}
      <div className='flex px-5 justify-between items-center w-full'>
       
      <div>  {/* title */}
      <h2 className='text-sm font-semibold leading-none line-clamp-1 text-black'>{item.title}</h2>
      {/* size */}
      <p className='mt-2 text-black/80 text-sm font-semiboldleading-none line-clamp-1'>
     size:&nbsp;
     <span>{item.size} </span> </p>
           {/* color */}
         <div >  <p className='mt-2  text-black/80 text-sm font-semiboldleading-none '>
     color:&nbsp;
     <span>{  <button 
              className="border-2 border-gray-300   rounded-full w-4 h-4 text-center focus:outline-none active:border-none focus:border-mypurle " 
              style={{backgroundColor:item.color}}
              />} </span> </p></div>
     {/* quantity */}
     <div className='mt-2 flex items-center'>
      <Button onClick={()=>(dispatch(subtactioCart(item)))} className='group hover:bg-mypurle hover:text-white bg-black text-white w-fit h-full rounded text-xs duration-300'>
          <FaMinus className  ='h-2 w-2 group-hover:text-white'/>
      </Button>
      <div className='mr-2 ml-2  scroll-m-20 text-sm font-semibold tracking-tight'>{item.QTY}</div>
      <Button onClick={()=>(dispatch(addcart(item)))} className='group hover:bg-mypurle hover:text-white bg-black text-white w-fit h-full rounded text-xs duration-300'>
          <FaPlus className='h-2 w-2 group-hover:text-white'/>
      </Button>
     </div>
   {/* price and delete  */}
   <div className='  lg:hidden flex-col mt-3 items-end  gap-1'>
      <h3 className='text-sm font-semibold leading-none line-clamp-1 text-black'> <span> Price : &nbsp;</span>
      &#36;{item.discounts>0? (item.price-((item.price*item.discounts)/100))*item.QTY :item.price*item.QTY}</h3>
<FaTrash onClick={()=>dispatch(delitem(item.uuid))} className=' text-base font-semibold leading-none line-clamp-1  text-red-600 cursor-pointer mt-2'/>
  </div>
    
     </div>
    {/* price and delete  */}
    <div className='  hidden lg:flex flex-col mt-3 items-end  gap-1'>
      <h3 className='text-sm font-semibold leading-none line-clamp-1 text-black'> <span> Price : &nbsp;</span>
      &#36;{item.discounts>0? (item.price-((item.price*item.discounts)/100))*item.QTY :item.price*item.QTY}</h3>
<FaTrash onClick={()=>dispatch(delitem(item.uuid))} className=' text-base font-semibold leading-none line-clamp-1  text-red-600 cursor-pointer mt-2'/>
  </div>
    
  <div/>
      </div>

   </div>
))}
</>      

    
  )
}

export default CartCard