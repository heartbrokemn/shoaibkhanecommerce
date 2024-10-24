/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
/* eslint-disable react/jsx-key */
/* eslint-disable @typescript-eslint/no-require-imports */

import { useAppSelector } from "@/app/store/hooks"
import BestSellingCard from "./bestsellingcard"
import { Product } from "@/app/utils/type"



const BestSelling = () => {
  const prodoct = useAppSelector((state)=>state.products)
  
  const bestSel=prodoct.slice(0,3)
//   const bestSel=[{
//         src:"/images/brownkameez.webp",
//         alt:"Brown Kameez&Shalwar ",
//         title: "Brown Kameez Shalwar ",
//         description:"best and premium qulaity Shalwar Kameez  ",
//         price:1550,
//         category :'Kameezshalwar'
//         ,slug:'Brown-shalwar-kameez',
        
        
        
//       },
// {
//     src:"/images/watch.jpg",
//     alt:"Hand Watch ",
//     title: "Hand Watch ",
//     description:"best and premium qulaity Watch ",
//     price:850
//     ,
//         category :'Watch '
//         ,slug:'Hand-Watch'
// },
// {
//     src:"/images/whiteshoes.jpg",
//     alt:"white Shoes",
//     title: "Shoes ",
//     description:"best and premium qulaity Shoes  ",
//     price:2500
//     ,
//     category :'Shoes'
//     ,slug:'White-Shoes'
//   },
// ]
  return (
    <div className=' mb-[100px] mt-[100px] '>
        {/* Heading  */}
 
        <div className=" text-center justify-between mb-16 mt-28 " >
      <h1 className="scroll-m-20 text-xl text-black font-extrabold tracking-tight lg:text-2xl">
        Best Selling Product 
      </h1>
     
      <div className="flex mt-2 justify-center">
        <div className="w-16 h-1 rounded-full bg-mypurle inline-flex" />
      </div>
    </div>
     {/* Best Selling Product  */}
<div className="flex flex-wrap justify-center items-center gap-5">
 {
    bestSel.map((items:Product,i)=>(
        <BestSellingCard key={i} src={items.image[0]} alt={items.title} title={items.title} description={items.description} price={items.price} category={items.category} slug={items.slug} discounts={items.discounts}  />
    ))
 }   
    </div>    
  
    </div>
  )
 }

export default BestSelling