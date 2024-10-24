'use client'
import React from 'react'
import { FaShoppingCart } from 'react-icons/fa';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from './ui/button';
import { addtocart } from '@/app/store/futures/cart';
import { useAppDispatch } from '@/app/store/hooks';
const Addtocarttoast = ({cartitem}) => {
const dispatch = useAppDispatch()

    const notify = () => 
    toast.success('Product added Successfully', {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
        });
    return (
        <>
    <div className='w-fit' onClick={() => dispatch(addtocart(cartitem))}>
            {/* <button onClick={notify}>Notify!</button> */}
            <Button onClick={notify} className=' group  bg-black hover:bg-mypurle text-white scroll-m-20 border-b pb-2 text-xs rounded-xl font-semibold tracking-tight'>
                <FaShoppingCart className='mr-2 h-4 w-4 group-hover:animate-bounce ' />
                Add to cart</Button>

        </div><ToastContainer
                position="bottom-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark" /></>
  )
}

export default Addtocarttoast