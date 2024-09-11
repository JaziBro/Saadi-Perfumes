import Image from "next/image";
import perfume1 from "../../../public/images/perfumes/perfume-1.jpg";
import perfume2 from "../../../public/images/perfumes/perfume-2.jpg";
import perfume3 from "../../../public/images/perfumes/perfume-3.jpg";
import rating from "../../../public/images/rating.svg";
import {ScrollArea, ScrollBar} from "@/app/components/ui/scroll-area";
import {Button} from "@/app/components/ui/button";

export default function SummerSale() {
  // Array of perfume data (image, name, price, reviews)
  const perfumes = [
    {
      image: perfume1,
      name: "FLOWERBOMB BLOOM",
      price: "Rs.3,750",
      reviews: "718 reviews",
      rating: rating
    },
    {
      image: perfume2,
      name: "JUILETTE HAS A GUN",
      price: "Rs.4,250",
      reviews: "850 reviews",
      rating: rating
    },
    {
      image: perfume3,
      name: "ESCADA",
      price: "Rs.3,990",
      reviews: "623 reviews",
      rating: rating
    },
  ];

  return (
    <div className="text-center py-4">
      <div className="text-xl font-bold text-black font-['Plus Jakarta Sans']">SUMMER SALE</div>
      <Button variant="outline" className="border-black rounded-none border-collapse">View All</Button>

      <ScrollArea className="overflow-x-auto py-4 rounded-md">
        <div className="flex gap-6 mt-10">
          {/* Loop through the perfumes array */}
          {perfumes.map((perfume, idx) => (
            <div key={idx} className="flex-shrink-0 w-[140px] text-center">
              <Image className="w-[134px] h-[137px] rounded-lg" src={perfume.image} alt={perfume.name} />
              <div className="w-[95px] h-4 mx-auto mt-2">
                <Image src={perfume.rating} alt="Rating" width={95} height={20} />
              </div>
              <div className="mt-2 text-base font-bold text-black font-['Plus Jakarta Sans']">{perfume.name}</div>
              <div className="text-[11px] font-light text-black font-['Plus Jakarta Sans']">{perfume.price}</div>
              <div className="text-[10px] font-medium text-black font-['Plus Jakarta Sans']">{perfume.reviews}</div>
            </div>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      
    </div>
  );
}
