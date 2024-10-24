/* eslint-disable react/jsx-key */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import SlugCompounent from '@/components/slugcomponent'
import { Button } from '@/components/ui/button'
import Addtocarttoast from '@/components/addtocarttoast'

import { FaHeart, FaMinus, FaPlus, FaShoppingCart } from 'react-icons/fa'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { useState } from 'react'
import { addtocart } from '@/app/store/futures/cart'

const SlugPage = ({params}:{params:{slug:string}}) => {
    const prodoct = useAppSelector((state)=>state.products)
  
    const slug=prodoct.filter((val)=>val.slug == params.slug)
    const [cartitem, setcartitem] = useState(
  {
    id:slug[0].id,
    title:slug[0].title,
    image:slug[0].image[0],
    slug : slug[0].slug,
    price:slug[0].price,
    discounts:slug[0].discounts,
    category : slug[0].category,
    size:slug[0].size[0],
    // uuid:slug[0].
    QTY: slug[0].QTY,
    color : slug[0].color[0]
  }
)
  return (
    <div>
           <div className="container px-5 py-24 mx-auto md:justify-center items-center">
      <div className="lg:w-4/5 mx-auto flex flex-wrap">
     {/* image */}
     <SlugCompounent image={Array.isArray(slug[0].image) ? slug[0].image : [slug[0].image]} />

        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        {/* category */}
          <h2 className="text-sm title-font text-gray-500 tracking-widest uppercase">
           {slug[0].category}
          </h2>
          {/* title */}
          <h1 className="scroll-m-20 text-2xl font-semibold tracking-tight text-black ">
           {slug[0].title}
          </h1>
          
          {/* rating  */}
          <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-mypurle" />
  <input
    type="radio"
    name="rating-2"
    className="mask mask-star-2 bg-mypurle"
    defaultChecked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-mypurle" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-mypurle" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-mypurle" />
</div>
         
           
                <div className="divider"></div>   
          
          {/* description  */}
          <p className="leading-relaxed scroll-m-20 text-base line font-normal ">
         {slug[0].description}
          </p>
          <div className="flex mt-6 items-center pb-5 border-gray-100 mb-5">
            <div className="flex sm:justify-center ">
            
            
              {/* rounded circle color slug page  */}
              <span className="mr-3">Color</span>
              {slug[0].color.map((item,i)=>(

              <button key={i}
              onClick={()=>(setcartitem({...cartitem,color:item}))}
              className="border-2 border-gray-300 mr-1  rounded-full w-6 h-6 focus:outline-none active:border-mypurle focus:border-mypurle" 
              style={{backgroundColor:item}}
              />
              ))}
              
             
            </div>
            {/* size */}
            <div className="flex ml-6 items-center">
              <span className="mr-3">Size</span>
              <div className="relative">
                <select 
                onChange={(e)=>setcartitem({...cartitem,size:e.target.value})}
                className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                    {slug[0].size.map((item,i)=>(

                  <option key={i}>{item}</option>
                    ))}
                </select>
                
                <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
          {/* QTY */}
         <div className='flex items-center '>
         <span className="mr-3">

         </span>
         <Button onClick={()=>(setcartitem({...cartitem,QTY:cartitem.QTY<=1?1:--cartitem.QTY}))} className=' group  bg-black hover:bg-mypurle text-white scroll-m-20 border-b pb-2  rounded-xl  tracking-tight '>
           <FaMinus className='mr-2 h-2 w-4   '/>
          </Button>
          <div className='mr-2 ml-2 scroll-m-20  font-semibold tracking-tight text-base'> {cartitem.QTY} </div>
         <Button onClick={()=>(setcartitem({...cartitem,QTY:++cartitem.QTY}))} className=' group  bg-black hover:bg-mypurle text-white scroll-m-20 border-b pb-2  rounded-xl  tracking-tight '>
           <FaPlus className='mr-2 h-2 w-4   '/>
         </Button>
         
       
         </div>
          {/* divider  */}
     

          <div className="divider"></div> 

          {/* price */}
          <div className="flex items-center justify-between">
            <div>
            <span className={`scroll-m-20 tracking-tight title-font font-semibold text-xl text-gray-900
                ${cartitem.discounts> 0 && "line-through decoration-2 decoration-mypurle"}`}>
              Rs{slug[0].price *cartitem.QTY}
            </span>
             {/* discounted value */}

       {cartitem.discounts>0 &&( <span className="ml-5 scroll-m-20 tracking-tight title-font font-semibold text-xl text-gray-900">
        {(cartitem.price-(cartitem.price*cartitem.discounts)/100)*cartitem.QTY}
         </span>)}
         </div>
        
        {/* add to card */}
        <Addtocarttoast cartitem ={cartitem}/>
            {/* <Button onClick={()=>dispatch(addtocart(cartitem)) } className=' group  bg-black hover:bg-mypurle text-white scroll-m-20 border-b pb-2 text-xs rounded-xl font-semibold tracking-tight'>
           <FaShoppingCart className='mr-2 h-4 w-4 group-hover:animate-bounce '/>
           Add to cart</Button> */}
            
          </div>
          <Button className=' group w-full mt-3 bg-black hover:bg-mypurle text-white scroll-m-20 border-b pb-2 text-xs rounded-xl font-semibold tracking-tight'>
           <FaHeart className='mr-2 h-4 w-4 group-hover:animate-bounce '/>
           Buy Now</Button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default SlugPage