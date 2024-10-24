

import Image from 'next/image'
import { Button } from './ui/button'
import { FaShoppingCart,FaHeart } from 'react-icons/fa'
import Link from 'next/link'

const BestSellingCard = ({src, alt, title, description, price,category,slug,discounts}:{src:string, alt:string,title:string, description:string, price:number , category:string , slug:string,discounts:number}) => {
  return (
 
 <div className="max-w-[300px] h-[35rem]    p-4 mx-auto shadow-md rounded-xl relative group ">
      <Link href={`/${category}/${slug}`}>
    <div className='block  h-[23rem] rounded overflow-hidden'>
       {/* image div */}
       <Image src={src} width={400} height={400} alt={alt}/>
    </div>
    {/* typography  */}
     <div className="mt-4">
{title &&(
       <h2 className="mt-2 scroll-m-20  pb-2 text-lg font-semibold tracking-tight transition-colors first:mt-0 text-black line-clamp-1">{title}</h2>
      )} 
      {description&&(
       <p className="mt-2 scroll-m-20 line-clamp-1  pb-0 text-sm font-semibold tracking-tight   text-black ">{description}</p>
      )}
       {price &&(
        <div className=' flex gap-4 items-center'>
       <p className={` mt-2 scroll-m-20 pb-2 text-base font-semibold tracking-tight   text-black  ${discounts> 0 && "line-through decoration-2 decoration-mypurle"}`}>
        {price} </p>
       {/* discounted value */}
       {discounts>0 &&( <p className="mt-2 scroll-m-20 border-b pb-2 text-base font-semibold tracking-tight  line-clamp-1   text-black ">{price-(price*discounts)/100} </p>)}
       
       </div> )}
     </div>
     </Link>
     {/* Button div  */}
     <div>
        <div className='absolute    bottom-2 right-2'>

        </div>
       <Button className=' group  bg-black hover:bg-mypurle text-white scroll-m-20 border-b pb-2 text-xs rounded-xl absolute    bottom-2 right-2 font-semibold tracking-tight'>
           <FaShoppingCart className='mr-2 h-4 w-4 group-hover:text-white hover:animate-bounce  '/>
           Add to cart</Button>
       
       
           <Button className=' group  bg-black hover:bg-mypurle text-white scroll-m-20 border-b pb-2 text-xs rounded-xl absolute    bottom-2 left-2 font-semibold tracking-tight'>
           <FaHeart className='mr-2 h-4 w-4 group-hover:text-white hover:animate-bounce  '/>
        Buy Now</Button>
       {discounts>0&&(
        <div className='scroll-m-20 text-xs font-semibold tracking-tight text-white p-1 ml-2 text-center bg-mypurle absolute rounded-tr-xl rounded-br-xl top-0 left-2 w-[87px]'>{`${discounts}%Off`}</div>
       )}
   
     </div>
   </div>
  )
}

export default BestSellingCard