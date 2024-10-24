import { StaticImageData } from "next/image";
// product ki type 
export type Product = {
  src: string[];
  alt: string;
    id:number;
    title:string;
    image?:string[]|StaticImageData|undefined;
    slug : string;
    price:number;
    category : string;
    description : string;
    size:string[];
    color: string [];
    discounts?:number;
QTY: number
}
// cart ki type jo future mai hai 
export type Cart = {
    id:number,
    title:string,
    image?:string|StaticImageData|undefined,
    slug : string,
    price:number,
    discounts?:number;
    category : string,
    size:string,
    uuid:number| string| undefined,
     color:string,

QTY: number
}