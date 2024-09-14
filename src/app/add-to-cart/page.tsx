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

// Example product data. Ideally, this should be fetched or passed dynamically.
const allProducts = [
  { id: '123', name: 'DAYDREAM', price: 'Rs.3,750', image: productImage.src },
  { id: '124', name: 'PURE', price: 'Rs.4,500', image: productImage2.src },
  { id: '125', name: 'LUXE', price: 'Rs.2,500', image: productImage3.src },
  { id: '126', name: 'EDEN', price: 'Rs.3,750', image: productImage4.src },
  { id: '127', name: 'ECHO', price: 'Rs.4,500', image: productImage5.src },
  { id: '128', name: 'SERENE', price: 'Rs.2,500', image: productImage6.src },
];

export default function CheckoutPage() {
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
      <div className="flex flex-col items-center justify-center w-full mt-4">
        <Image
          src={product.image}
          alt={product.name}
          width={200}
          height={200}
          className="w-full max-w-[300px] h-auto object-cover rounded-md"
        />
      </div>
      {/* add a select quantity section n then ensure to add the same quantity in cart */}
       <div className="flex flex-col items-center justify-center w-full mt-4">
        <select className="w-full max-w-[300px] p-2 border border-gray-300 rounded-md">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div> 

      <div className="mt-4 p-4 bg-white rounded-lg shadow-md w-full max-w-[400px] mx-auto">
        <h1 className="text-lg font-bold mb-2 text-center">{product.name}</h1>
        <p className="text-base mb-4 text-center text-gray-700 font-bold">{product.price}</p>
        <Button
          onClick={handleAddToCart}
          className="w-full bg-black text-white py-2 rounded-md text-center"
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
}
