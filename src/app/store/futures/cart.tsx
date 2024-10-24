/* eslint-disable @typescript-eslint/no-unused-vars */

import { Cart } from '@/app/utils/type'
import { createSlice } from '@reduxjs/toolkit'
import { validateHeaderName } from 'http'




// Define the initial state using that type
const initialState: Cart[] = []
export const cartSlice = createSlice({
  name: 'cart',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
  // add cart functionality start 
  addtocart(state,action){
    const uuid = Math.floor(1000+Math.random()*9000) 
const newobject={...action.payload,uuid}
state.push(newobject)
  },
  // delet to cart 
  delitem(state,{payload}){
    return state.filter((val,i)=>val.uuid!==payload)
  },
  // addition of  item
  addcart(state,action){
    const obj= state.find(
      (val)=>val.id == action.payload.id && val.color == action.payload.color  && val.size  == action.payload.size)
      if (obj){
        ++obj.QTY;
        const newstate= state.filter((val)=>val.id !== obj?.id)
state= [...newstate,obj];
return;
      }
  },
  // subtraction of item 
  subtactioCart(state,action){
    const obj =  state.find(
      (val)=>val.id == action.payload.id && val.color == action.payload.color  && val.size  == action.payload.size);
     if (obj !== undefined){
      if ( obj.QTY <=  1 ){
        return; state.filter((val)=>val.uuid !== obj?.uuid)
      }
      --obj.QTY;
      const newstate = state.filter((val)=>val.uuid == obj.uuid) 
    state = [...newstate,obj] 
    return
    }
  }
  },
})

export const { addtocart,delitem, addcart , subtactioCart} = cartSlice.actions


export default cartSlice.reducer