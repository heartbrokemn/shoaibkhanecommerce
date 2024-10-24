"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
// import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const components: { title: string; href: string; description: string }[] = [
  {
    title:"Pants",
    href: "/pants",
    description:
      "Stylish and comfortable, these men's pants are designed to offer a perfect fit for any occasion. Made from high-quality fabric, they provide a soft and breathable feel throughout the day. Featuring a modern cut, they pair well with both casual and formal outfits. The pants include multiple pockets for convenience and are available in various sizes and colors to suit your personal style. Whether youre at the office or out for the weekend, these pants offer the ideal blend of fashion and functionality",
  },
  {
    title:"Shirts",
    href: "/shirts",
    description:
      "This stylish shirt is crafted from premium quality cotton, ensuring maximum comfort and breathability. Featuring a modern fit, it comes with a sleek button-down collar, making it versatile for both casual and semi-formal occasions. The smooth fabric feels soft on the skin, and the subtle stitching details add a touch of elegance. Available in a range of colors and sizes, this shirt is perfect for adding a refined yet effortless look to your wardrobe"
  },
  {
    title:"Shalwar Kameez",
    href: "/shalwarkameez",
    description:
      "Shalwar kameez is a traditional and cultural outfit popular in Pakistan, India, and Bangladesh. It consists of two main pieces:"
  },  {
    title:"Shoes",
    href: "/shoes",
    description:
      "Sneakers, loafers, and slip-ons fall into this category. These shoes are designed for everyday wear, providing comfort and a relaxed look. They come in a wide range of styles, colors, and materials, making them versatile for casual outings, work, or leisure activities"
  },
  {
    title:"Accessories",
    href: "/accessories",
    description:
      "Men's accessories like watches, belts, and sunglasses add both style and practicality to any outfit. Bracelets, rings, and ties offer subtle touches that elevate a man's overall look."
  },
  
]

export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
      <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Home 
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Man</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-black ">
              {components.map((component) => (
              <Link      key={component.title}
              href={component.href}
              legacyBehavior passHref>
              <ListItem
             
                  title={component.title}
             >
                  {component.description}
                </ListItem></Link>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/about" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              About 
            </NavigationMenuLink>
            
          </Link>
          <Link href="/contact" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
             Contact 
            </NavigationMenuLink>
            
          </Link>
        </NavigationMenuItem>
        
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-mypurle duration-700 hover:text-white  focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
