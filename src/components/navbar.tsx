/* eslint-disable @typescript-eslint/no-require-imports */
'use client'
import Link from 'next/link';
import React from 'react'
import Image from 'next/image';

import { NavigationMenuDemo } from './navlink';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useAppSelector } from '@/app/store/hooks';



// ye hum ne daisy ui se import ki hai 

const Navbar = () => {
  const cart = useAppSelector((state)=> state.Cart)
  return (
    <div><div className="navbar bg-black text-white">
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="p-0 text-2xl lg:hidden">
        <GiHamburgerMenu/>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-black text-mypurle rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li><Link href={"/"}>Home</Link></li>
        <li>
          <details>
            <summary>Man</summary>
            <ul className="p-2">
              <li><Link href={"/pants"}>Pants</Link></li>
              <li><Link href={"/shirts"}>Shirts</Link></li>
              <li><Link href={"/shalwarkameez"}>Shalwar Kameez</Link></li>
              <li><Link href={"/shoes"}>Shoes</Link></li>
              <li><Link href={"/accessories"}>Accessories</Link></li>

            
            </ul>

          </details>
        </li>
        <li><Link href={"/aboutus"}>About us </Link></li>
        <li><Link href={"contactus"}>Contact </Link></li>
        </ul>
      </div>
      
        {/* logo Image */}
        <Image src={require("../../public/images/logowebsite.png")}
          alt={'Logo'}
        
          width={125}
          className="hidden lg:block"
          height={125}
           />
      
    </div>
    <div className="navbar-center">
    <Image src={require("../../public/images/logowebsite.png")}
          alt={'Logo'}
        
          width={125}
          className="block lg:hidden"
          height={125}
           />
      <div className=' hidden lg:flex'> 
    <NavigationMenuDemo/>
    </div>
    </div>
    <div className="navbar-end">
<Link href={'/cart'}>
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circlem cursor-pointer">
        <div className="indicator">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          {cart.length>0 &&
          <span className="badge  badge-sm indicator-item">{cart.length} </span>}
        </div>
      </div>
      </Link>
    </div>
  </div></div>
  )
}

export default Navbar