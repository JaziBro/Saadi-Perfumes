"use client";

import { useDispatch } from 'react-redux';
import { addToCart } from '../components/cart/cartSlice';
import Image from "next/image";
import perfume1 from "../../../public/images/perfumes/perfume-1.jpg";
import perfume2 from "../../../public/images/perfumes/perfume-2.jpg";
import perfume3 from "../../../public/images/perfumes/perfume-3.jpg";
import rating from "../../../public/images/rating.svg";
import { ScrollArea, ScrollBar } from "../components/ui/scroll-area";
import { Button } from "../components/ui/button";

export default function SummerSale() {
  const dispatch = useDispatch();

  const perfumes = [
    { image: perfume1, name: "DAYDREAM", price: "Rs.3,750", reviews: "718 reviews", rating: rating },
    { image: perfume2, name: "PURE", price: "Rs.4,250", reviews: "850 reviews", rating: rating },
    { image: perfume3, name: "LUXE", price: "Rs.3,990", reviews: "623 reviews", rating: rating },
  ];

  const handleAddToCart = (perfume: any) => {
    dispatch(addToCart({ id: perfume.name, name: perfume.name, image: perfume.image, price: perfume.price, quantity: 1 }));
  };

  return (
    <div className="text-center py-4">
      <div className="text-xl font-bold text-black">SUMMER SALE</div>
      <Button variant="outline" className="border-black rounded-none">View All</Button>

      <ScrollArea className="overflow-x-auto py-4 rounded-md">
        <div className="flex gap-6 mt-10 justify-center">
          {perfumes.map((perfume, idx) => (
            <div key={idx} className="flex-shrink-0 w-[140px] text-center">
              <Image src={perfume.image} alt={perfume.name} className="w-[134px] h-[137px] rounded-lg transition-transform ease-in-out hover:scale-110" />
              <Image src={perfume.rating} alt="Rating" width={95} height={20} className='w-[95px] h-4 mx-auto mt-2' />
              <div className="mt-2 text-base font-bold">{perfume.name}</div>
              <div className="text-[11px] font-light">{perfume.price}</div>
              <div className="text-[10px] font-medium">{perfume.reviews}</div>
              <Button onClick={() => handleAddToCart(perfume)} className="mt-2 bg-black text-white rounded-md w-full">Add to Cart</Button>
            </div>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
}
