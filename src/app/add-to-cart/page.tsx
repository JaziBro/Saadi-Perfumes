"use client";

import { useDispatch } from 'react-redux';
import { addToCart } from '../components/cart/cartSlice';
import { useRouter, useSearchParams } from 'next/navigation';
import Image from "next/image";
import { Button } from "../components/ui/button";
import productImage from "../../../public/images/perfumes/perfume-1.jpg";
import productImage2 from "../../../public/images/perfumes/perfume-2.jpg";
import productImage3 from "../../../public/images/perfumes/perfume-3.jpg";
import productImage4 from "../../../public/images/perfumes/perfume-4.jpg";
import productImage5 from "../../../public/images/perfumes/perfume-5.jpg";
import productImage6 from "../../../public/images/perfumes/perfume-6.jpg";
import Navbar from "../components/NavBar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectLabel
} from "@/components/ui/select"
import Footer from '../components/Footer';

// Example product data. Ideally, this should be fetched or passed dynamically.
const allProducts = [
  { id: '123', name: 'DAYDREAM', price: 'Rs.3,750', image: productImage.src },
  { id: '124', name: 'PURE', price: 'Rs.4,500', image: productImage2.src },
  { id: '125', name: 'LUXE', price: 'Rs.2,500', image: productImage3.src },
  { id: '126', name: 'EDEN', price: 'Rs.3,750', image: productImage4.src },
  { id: '127', name: 'ECHO', price: 'Rs.4,500', image: productImage5.src },
  { id: '128', name: 'SERENE', price: 'Rs.2,500', image: productImage6.src },
];

export default function AddToCartPage() {
  const dispatch = useDispatch();
  const router = useRouter();
  const searchParams = useSearchParams();
  const productId = searchParams.get('id');

  // Find the product by ID
  const product = allProducts.find(p => p.id === productId);

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    dispatch(addToCart({
      id: product.id,
      name: product.name,
      image: product.image,
      price: product.price,
      quantity: 1,
      width: 24,
      height: 24
    }));
  };

  return (
    <div className="min-h-screen flex flex-col p-4">
      <Navbar />
      <div>
        <h1 className="text-4xl font-bold mb-2 text-left mt-16">{product.name}</h1>          
        <p className="text-gray-500 font-['Plus Jakarta Sans'] mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, dolores. Et exercitationem suscipit nostrum officiis expedita corrupti illum eum animi necessitatibus, voluptatem tempora ea quo veniam voluptatum. Totam, illum ullam!</p>       

        <div className='border-black border-t border-b mt-10'>
          <p className="mb-4 text-center text-gray-700 font-bold text-2xl mt-10">{product.price}</p> 
          <Button
            onClick={handleAddToCart}
            className="bg-black text-white py-2 text-center mb-10 items-center border-collapse rounded-none w-full h-10"
          >
            Add to Cart
          </Button>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center w-full mt-4">
        <Image
          src={product.image}
          alt={product.name}
          width={200}
          height={100}
          className="w-52 h-52 object-cover"
        />    
        {/* <div className='mt-10'>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select the quantity" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="apple">1</SelectItem>
              <SelectItem value="banana">2</SelectItem>
              <SelectItem value="blueberry">3</SelectItem>
              <SelectItem value="grapes">4</SelectItem>
              <SelectItem value="pineapple">5</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        </div>     */}

      </div>
      <footer className="font-['Plus Plus Jakarta Sans'] text-center text-xs mt-16">
        © 2024 Saadi Signature
      </footer>
      {/* add a select quantity section n then ensure to add the same quantity in cart */}
       {/* <div className="flex flex-col items-center justify-center w-full mt-4"> */}

</div>
  );
}
