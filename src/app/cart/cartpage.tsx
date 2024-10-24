'use client'
import CardCart from '@/components/cardcart'
import { Button } from '@/components/ui/button'
import { useAppSelector } from '../store/hooks'
const CartPage = () => {
  const cartarray =useAppSelector((state)=>state.Cart)
  const total = cartarray.reduce((total,arr)=>{return(total+((arr.price-(arr.price*arr.discounts)/100))*arr.QTY)},0)
    return (
    <div className=' grid lg:grid-cols-3 grid-cols-1'>
    {/* items */}
    <div className='col-span-2'>
   <CardCart />
    </div>
    {/* summary */}
    <div className=' bg-black/5 p-5 rounded-xl'>
    {/* heading  */}
<h2 className=' scroll-m-20 text-lg font-semibold tracking-tight'>Order Summary </h2>
    {/* Divider */}
    <div className='divider mt-0 mb-1'></div>
    {/* pricing */}
    <div className=' text-sm font-medium tracking-tight'>
    {/* product pricing */}
        <div className='flex  items-center justify-between capitalize font-semibold'> 
    <h2>Sub Total</h2>
    <h2>Rs.{total}</h2>
    </div>
{/* Delivery Charges */}
<div className='flex items-center justify-between font-semibold capitalize'> 
    <h2>Delivery Charges</h2>
    <h2>TBD</h2>
    </div>
    {/* service charges */}
    <div className='flex items-center justify-between  font-semibold capitalize'> 
    <h2>Setvice Charges </h2>
    <h2>TBD</h2>
    </div>
     </div>
     <div className='divider mt-0 mb-1'></div>
     {/* Estimated total  */}
<div className='flex  items-center justify-between capitalize'>
<h2>  Estimated total </h2>
<h2>Rs.{total}</h2>
</div>
<div className='divider mt-0 mb-1 '></div>
{/* checkout button */}
<div className=' flex items-center justify-center w-full '>
<Button className='justify-center items-center rounded-xl bg-black  text-white hover:bg-mypurle hover:text-white duration-300 hover:shadow-md '> Proceed to check  </Button>
</div>
{/* Divider */}
<div className='divider mt-0 mb-1 '></div>
{/* note */}
<p className=' text-xs  font-semibold tracking-tight text-black w-[97%] text-center italic'>
{`Delivery charges and the  sales tax will be calculated in the chackout page` }
</p>
</div>
</div>
  )
}

export default CartPage