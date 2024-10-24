import { Button } from "./ui/button"
import { FaShoppingCart } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="mb-[100px]">
        <div
  className="hero min-h-[40rem] custom-background" >
  <div className="hero-overlay bg-opacity-60 "></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-4 text-5xl font-bold">Premium Quality <span className="text-mypurle">Clothes</span></h1>
      <p className="mb-3">
    Our Premium Quality Clothes are crafted from the finest materials, ensuring both style and durability.
      </p>
  
    <Button className="outline outline-offset-2 outline-2 rounded-xl outline-mypurle group hover:outline-white duration-300 ">
      <FaShoppingCart className="mr-2 h-6 w-6 group-hover:animate-bounce " /> Shop Now
    </Button>



    </div>
  </div>
</div>
    </div>
  )
}

export default Hero