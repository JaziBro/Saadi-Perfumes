import Navbar from "./components/NavBar";
import SummerSale from "./components/SummerSale";
import BestSellers from "./components/BestSellers";
import OurCollections from "./components/OurCollections";
import Categories from "./components/Categories";
import { Gift, Headset, ThumbsUp, Star} from "lucide-react";
import { FaArrowsSpin } from "react-icons/fa6";
import Footer from "./components/Footer";

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
      <div className="mt-6">
        <Categories/>
      </div>

      {/* Why Choose Us Section */}
        <div className="mt-10 text-center text-balance">
          <div className="text-2xl font-bold text-black mb-10">Why Choose Us?</div>
          <div className="flex flex-col items-center space-y-10">
            <div className="flex flex-col items-center">
              <Gift className="w-12 h-12 mb-4" />
              <div className="text-xl font-bold">Complimentary Perfume Sample with Every Purchase</div>
            </div>
            <div className="flex flex-col items-center">
              <FaArrowsSpin className="w-12 h-12 mb-4" />
              <div className="text-xl font-bold">Hassle-Free Returns & Exchanges</div>
            </div>
            <div className="flex flex-col items-center">
              <Headset className="w-12 h-12 mb-4" />
              <div className="text-xl font-bold">Personalized Support Just for You</div>
            </div>
            <div className="flex flex-col items-center">
              <ThumbsUp className="w-12 h-12 mb-4" />
              <div className="text-xl font-bold">Trusted by 400,000+ Customers Worldwide</div>
            </div>
            <div className="flex flex-col items-center">
              <Star className="w-12 h-12 mb-4" />
              <div className="text-xl font-bold">20,000+ Glowing 5-Star Reviews</div>
            </div>
          </div>
        </div>
      
      {/* Footer Section */}
        <Footer/>
    </div>
  </div>


  );
}
