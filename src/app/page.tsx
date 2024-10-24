import React from 'react'
import Hero from '@/components/hero'
import Services from '@/components/services'
import Promotion from '@/components/promotion'
import Categories from '@/components/categories'
import BestSelling from '@/components/bestselling'
import FeaturedProduct from '@/components/featuredProduct'


const Page = () => {
  return (
    <div>
      <Hero/>
    
      <FeaturedProduct />
      <Services/>
      <Promotion/>
      <Categories/>
      <BestSelling/>
    </div>

  )
}

export default Page