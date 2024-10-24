'use client'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react'
import Slider from "react-slick";
import BestSellingCard from "./bestsellingcard";
import { useAppSelector } from "@/app/store/hooks";

const FeaturedProduct = () => {
    // my data 

const bestSel = useAppSelector((state)=>state.products.slice(0,9))
// caraousal setting
const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
    return (
    <div className="mb-[100px] mt-[100px]">
      <div className="text-center mb-16 ">
      <h1 className="scroll-m-20 text-xl text-black font-extrabold tracking-tight lg:text-2xl text-center">
       Feature Product
      </h1>
     
      <div className="flex mt-2 justify-center">
        <div className="w-16 h-1 rounded-full bg-mypurle inline-flex" />
      </div>
    </div>
{/* carousal  */}
<Slider {...settings}>
{
    bestSel.map((items,i)=>(
        <BestSellingCard key={i} src={items.image[0]} alt={items.title} title={items.title} description={items.description} price={items.price} category={items.category} slug={items.slug} discounts={items.discounts}/>
    ))
 }   
      </Slider>
    </div>
  )
}

export default FeaturedProduct