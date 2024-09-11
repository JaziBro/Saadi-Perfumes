import Image from "next/image";
import Navbar from "./components/NavBar";

export default function Home() {
  return (
    <div className="w-full bg-white">
  <div className="w-full max-w-[375px] mx-auto relative">
    {/* Navbar */}
    <div className="">
      <Navbar />
      <div className="w-[34px] h-[52px]"></div>
    </div>

    {/* Summer Sale Section */}
    <div className="text-center mt-20">
      <div className="text-xl font-bold text-black font-['Plus Jakarta Sans']">SUMMER SALE</div>
      <button className="mt-4 px-4 py-2 border border-black/70 text-black text-base font-medium font-['Plus Jakarta Sans']">
        VIEW ALL
      </button>
    </div>

    {/* Best Seller Perfumes */}
    <div className="text-center mt-10">
      <div className="text-xl font-bold text-black font-['Plus Jakarta Sans']">BEST SELLER PERFUMES</div>
      <button className="mt-2 px-3 py-1.5 border border-black/70 text-sm font-medium font-['Plus Jakarta Sans']">
        VIEW ALL
      </button>
    </div>

    {/* Perfume Collection */}
    <div className="flex justify-around mt-10">
      {Array(3).fill("").map((_, idx) => (
        <div key={idx} className="text-center">
          <img className="w-[134px] h-[137px] rounded-lg" src="https://via.placeholder.com/134x137" alt="Perfume" />
          <div className="mt-2 text-base font-bold text-black font-['Plus Jakarta Sans']">THE HARMONY</div>
          <div className="text-[11px] font-light text-black font-['Plus Jakarta Sans']">Rs.3,750</div>
          <div className="text-[10px] font-medium text-black font-['Plus Jakarta Sans']">718 reviews</div>
        </div>
      ))}
    </div>

    {/* Our Collections Section */}
    <div className="text-center mt-20">
      <div className="text-2xl font-bold text-black font-['Plus Jakarta Sans']">OUR COLLECTIONS</div>
      <img className="w-[333px] h-[277px] mt-6 mx-auto" src="https://via.placeholder.com/333x277" alt="Collection" />
    </div>

    {/* Collection Images */}
    <div className="grid grid-cols-1 gap-8 mt-10">
      {Array(4).fill("").map((_, idx) => (
        <img key={idx} className="w-[319px] h-[265px] mx-auto" src="https://via.placeholder.com/319x265" alt="Collection Item" />
      ))}
    </div>

    {/* Footer Information */}
    <div className="mt-20 text-center">
      <div className="text-2xl font-bold text-black">Why Choose Us?</div>

      <div className="flex justify-center items-center mt-10">
        <img className="w-[45px] h-[45px]" src="https://via.placeholder.com/45x45" alt="Icon" />
        <div className="ml-4 text-xl font-bold">Complimentary Perfume Sampler with Every Purchase</div>
      </div>

      {/* Repeat other sections similarly */}
    </div>

    {/* Footer Links */}
    <div className="mt-10 text-center">
      <div className="w-full border-t border-black py-4">
        <div className="tracking-widest text-sm">ORDER INFO</div>
      </div>
      <div className="w-full border-t border-black py-4">
        <div className="tracking-widest text-sm">SIGN UP AND SAVE</div>
      </div>
      <div className="w-full border-t border-black py-4">
        <div className="tracking-widest text-sm">CONTACT US</div>
      </div>
      <div className="text-xs tracking-wide mt-4">©2024 Saadi Signature</div>
    </div>
  </div>
</div>

  );
}
