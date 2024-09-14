import Image from "next/image"
import our_collections_1 from "../../../public/images/our-collections/our-collections-1.jpg"
import our_collections_2 from "../../../public/images/our-collections/our-collections-2.png"
import our_collections_3 from "../../../public/images/our-collections/our-collections-3.png"
import our_collections_4 from "../../../public/images/our-collections/our-collections-4.png"
import Link from "next/link"

const collections = [
    {
      image: our_collections_1,
      name: "MEN PERFUMES",
    },
    {
      image: our_collections_4,
      name: "WOMEN PERFUMES",
    },
    {
      image: our_collections_2,
      name: "GIFT BOXES",     
    },
    {
      image: our_collections_3,
      name: "TESTING KITS"
    },
];

export default function OurCollections() {
  return (
    <div className="flex flex-col items-center mt-20">
      {/* Heading */}
      <div className="text-center text-2xl font-bold text-black font-['Plus Jakarta Sans']">
        OUR COLLECTIONS
      </div>

      {/* Collection Images */}
      <Link href="/under-construction">
      <div className="grid grid-cols-1 gap-8 mt-10">
        {/* Loop through the collections array */}
        {collections.map((collection, idx) => (
          <div
            key={idx}
            className="text-center relative overflow-hidden transform transition-transform duration-500 hover:scale-110"
          >
            <Image
              className="w-[333px] h-[277px] mx-auto object-cover transform transition-transform duration-500"
              src={collection.image}
              alt={collection.name}
            />
 
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-xl font-['Plus Jakarta Sans']">
              {collection.name}
            </div>
          </div>
        ))}
      </div>    
      </Link>
    </div>
  )
}