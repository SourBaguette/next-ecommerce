"use client";

import Image from "next/image";
import { useState } from "react";

// const images = [
//   {
//     id: 1,
//     url: "https://images.pexels.com/photos/3621949/pexels-photo-3621949.jpeg?auto=compress&cs=tinysrgb&w=600",
//   },
//   {
//     id: 2,
//     url: "https://images.pexels.com/photos/3732659/pexels-photo-3732659.jpeg?auto=compress&cs=tinysrgb&w=600",
//   },
//   {
//     id: 3,
//     url: "https://images.pexels.com/photos/3294254/pexels-photo-3294254.jpeg?auto=compress&cs=tinysrgb&w=600",
//   },
//   {
//     id: 4,
//     url: "https://images.pexels.com/photos/68507/spring-flowers-flowers-collage-floral-68507.jpeg?auto=compress&cs=tinysrgb&w=600",
//   },
// ];

const ProductImages = ({items}:{items:any}) => {
  const [index, setIndex] = useState(0);

  return (
    <div>
      <div className="">
        <div className="h-[500px] relative">
          <Image
            src={items[index].image?.url}
            alt=""
            fill
            className="object-cover rounded-md"
            sizes="50vw"
          />
        </div>
      </div>
      <div className="flex justify-between gap-4 mt-8">
        {items.map((item:any, i:number) => (
          <div
            className="w-1/4 h-32 relative gap-4 mt-8 cursor-pointer"
            key={item._id}
            onClick={() => setIndex(i)}
          >
            <Image
              src={item.image?.url}
              alt=""
              fill
              className="object-cover rounded-md"
              sizes="30vw"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
