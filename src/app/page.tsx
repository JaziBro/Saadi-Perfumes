import Image from "next/image";
import Navbar from "./components/NavBar";
import our_collections from "../../public/images/our-collections/our-collections-1.jpg";
import our_collections2 from "../../public/images/our-collections/our-collections-2.png";
import SummerSale from "./components/SummerSale";
import BestSellers from "./components/BestSellers";
import OurCollections from "./components/OurCollections";
import logo from "./../../public/images/logo.png"
import Categories from "./components/Categories";

export default function Home() {
  return (
  <div className="w-full bg-white">
    <div className="w-full max-w-[375px] mx-auto relative">
      {/* Navbar */}
      <div className="my-3">
        <Navbar />
        <div className="w-[34px] h-[52px]"></div>
      </div>

      {/* Summer Sale Section */}
      <div className="mt-10">
        <SummerSale />
      </div>

      {/* Best Sellers Section */}
      <div className="mt-10">
        <BestSellers/>
      </div>

      {/* Our Collections Section */}
      <div>
        <OurCollections/>
      </div>

      {/*Scents from every season section*/}
      <div>
        <Categories/>
      </div>
      {/* Footer Information */}
      <div className="mt-20 text-center">
        <div className="text-2xl font-bold text-black">Why Choose Us?</div>
        <div className="flex justify-center items-center mt-10">
          <Image className="w-[105px] h-[211px]" src={logo} alt="Icon"/>
          <div className="ml-4 text-xl font-bold">Complimentary Perfume Sampler with Every Purchase</div>
        </div>
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
