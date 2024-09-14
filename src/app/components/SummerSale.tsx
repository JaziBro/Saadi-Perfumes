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
import { useRouter } from 'next/navigation';

export default function SummerSale() {
  const dispatch = useDispatch();
  const router = useRouter();

  const perfumes = [
    { id: '123', image: perfume1, name: "DAYDREAM", price: "Rs.3,750", reviews: "718 reviews", rating: rating },
    { id: '124', image: perfume2, name: "PURE", price: "Rs.4,250", reviews: "850 reviews", rating: rating },
    { id: '125', image: perfume3, name: "LUXE", price: "Rs.3,990", reviews: "623 reviews", rating: rating },
  ];

  const handleAddToCart = (perfume: any) => {
    dispatch(addToCart({
      id: perfume.id, name: perfume.name, image: perfume.image, price: perfume.price, quantity: 1,
      width: 24,
      height: 24
    }));
  };

  const handleRedirectToCheckout = (id: string) => {
    router.push(`/add-to-cart?id=${id}`);
  };

  return (
    <div className="text-center py-4">
      <div className="text-xl font-bold text-black">SUMMER SALE</div>
      <Button variant="outline" className="border-black rounded-none" onClick={() => handleRedirectToCheckout(perfumes[0].id)}>View All</Button>
      <ScrollArea className="overflow-x-auto py-4 rounded-md">
        <div className="flex gap-6 mt-10 justify-center">
          {perfumes.map((perfume) => (
            <div key={perfume.id} className="flex-shrink-0 w-[140px] text-left space-y-2">
            <div className="relative w-[134px] h-[137px] mx-auto">
              <Image src={perfume.image} alt={perfume.name} className="w-full h-full object-cover rounded-lg transition-transform ease-in-out hover:scale-110" />
            </div>
            <div className="flex justify-center">
              <Image src={perfume.rating} alt="Rating" width={80} height={10} className="w-[80px] h-4 mt-2" />
            </div>
            <div className="mt-2 text-base font-bold text-center">{perfume.name}</div>
            <div className="text-[15px] font-bold text-center">{perfume.price}</div>
            <div className="text-[10px] font-medium text-center">{perfume.reviews}</div>
            <Button
              onClick={() => handleRedirectToCheckout(perfume.id)}
              className="mt-2 bg-black text-white rounded-md text-center w-full"
            >
              Buy Now
            </Button>
           </div>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
}
