'use client'
import BestSellingCard from '@/components/bestsellingcard'
import { useAppSelector } from '../store/hooks'



const Categorypage = ({params}: {params:{category:string}}) => {
    const prodoct = useAppSelector((state)=>state.products)
  
    const bestSel=prodoct.filter((val)=>val.category == params.category)
  return (
  <div>
          
        <div className="text-center mb-16 mt-28 " >
      <h1 className="scroll-m-20 capitalize text-xl text-black font-extrabold tracking-tight lg:text-2xl">
  {params.category}
      </h1>
      
     
      <div className="flex mt-2 justify-center">
        <div className="w-16 h-1 rounded-full bg-mypurle inline-flex" />
      </div>
    </div>
    {/* category page sart here */}
    <div className="flex flex-wrap justify-center gap-5">
 {
    bestSel.map((items,i)=>(
        <BestSellingCard key={i} src={items.image[0]} alt={items.title} title={items.title} description={items.description} price={items.price} category={items.category} slug={items.slug} discounts={items.discounts}/>
    ))
 }   
    </div></div>
 
  )
}
export default Categorypage