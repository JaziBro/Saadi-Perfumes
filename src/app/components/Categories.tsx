"use client"

import Image from "next/image";
import category_1 from "../../../public/images/categories/category-1.png"
import category_2 from "../../../public/images/categories/category-2.png"
import category_3 from "../../../public/images/categories/category-3.png"
import category_4 from "../../../public/images/categories/category-4.png"
import Link from "next/link";

export default function ScentsForEverySeason() {
  const seasons = [
    { name: "Summers", image: category_1 },
    { name: "Winter", image: category_2 },
    { name: "Autumn", image: category_3 },
    { name: "Spring", image: category_4 },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {/* Scents for every season heading */}
      <div className="text-center text-black text-base font-bold font-['Plus Jakarta Sans']">
        SCENTS FOR EVERY SEASON
      </div>

      {/* Season Grid */}

      <Link href="/under-construction">
      <div className="grid grid-cols-2 gap-6 mt-6">
        {seasons.map((season, idx) => (
          <div
            key={idx}
            className="relative overflow-hidden transform transition-transform duration-500 hover:scale-110"
          >
            <Image
              alt={season.name}
              width={145}
              height={138}
              className="rounded-lg transform transition-transform duration-500"
              src={season.image}
            />
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="text-white text-xl font-bold font-['Plus Jakarta Sans']">
                {season.name}
              </div>
            </div>
          </div>
        ))}
      </div>     
      </Link>

    </div>
  );
}
