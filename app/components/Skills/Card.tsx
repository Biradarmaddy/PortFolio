import Image from 'next/image';
import React from 'react'

interface Props {
    name: string;
    images: string;
}

const Card = ({name, images}:Props) => {
  return (
    <div className="p-6 rounded-lg m-3 hover:scale-105 bg-gray-600 cursor-pointer hover:text-white hover:bg-gray-800">
      
        {/* Image Div */}
         <div className="w-[150px] h-[200px] mx-auto">
        <Image
          src={images}
          alt={name}
          width={160}
          height={160}
          className="w-[90%] h-[90%] object-cover"
        />
        <h1 className="font-bold text-center text-[1.5rem] mb-2 text-black">{name}</h1>
      </div>
    </div>
  )
}

export default Card
