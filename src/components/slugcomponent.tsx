/* eslint-disable react/jsx-key */
'use client'
import Image, { StaticImageData } from 'next/image'
import React, { useState } from 'react'

interface SlugComponentProps {
  image: (string | StaticImageData)[]
}

const SlugCompounent: React.FC<SlugComponentProps> = ({ image }) => {
  const [path, setPath] = useState<string | StaticImageData | null>(null)

  return (
    <div>
      <Image src={path || image[0]} alt="ecommerce" width={350} height={350} />
      <div className="flex items-center justify-evenly mx-auto mt-2">
        {image.map((item, i) => (
          <div key={i} className="cursor-pointer">
            <Image
              src={item}
              width={60}
              height={60}
              alt="abc"
              onClick={() => setPath(item)}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default SlugCompounent
