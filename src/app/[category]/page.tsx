
/* eslint-disable react/jsx-key */

import Categorypage from "./categorypage"



const Category = ({params}: {params:{category:string}}) => {

 
  
  return (
<div className=' mb-[100px] mt-[50px]'>
  <Categorypage params={params}/>
    </div>
  )
}

export default Category