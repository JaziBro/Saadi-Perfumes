"use client"
import { Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../components/cart/cartSlice';
import { useRouter, useSearchParams } from 'next/navigation';
import Image from "next/image";
import { Button } from "../components/ui/button";
import Navbar from "../components/NavBar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
} from "@/components/ui/select";
import productImage1 from "../../../public/images/perfumes/perfume-1.jpg";
import productImage2 from "../../../public/images/perfumes/perfume-2.jpg";
import productImage3 from "../../../public/images/perfumes/perfume-3.jpg";
import productImage4 from "../../../public/images/perfumes/perfume-4.jpg";
import productImage5 from "../../../public/images/perfumes/perfume-5.jpg";
import productImage6 from "../../../public/images/perfumes/perfume-6.jpg";

// Example product data
const allProducts = [
  { id: '123', name: 'DAYDREAM', price: 'Rs.3,750', image: productImage1.src },
  { id: '124', name: 'PURE', price: 'Rs.3,750', image: productImage2.src },
  { id: '125', name: 'LUXE', price: 'Rs.3,750', image: productImage3.src },
  { id: '126', name: 'ECHO', price: 'Rs.3,750', image: productImage4.src },
  { id: '127', name: 'EDEN', price: 'Rs.3,750', image: productImage5.src },
  { id: '128', name: 'SERENE', price: 'Rs.3,750', image: productImage6.src },
];

function ProductDetails() {
  const dispatch = useDispatch();
  const router = useRouter();
  const searchParams = useSearchParams();
  const productId = searchParams.get('id');

  // Find the product based on productId
  const product = allProducts.find(p => p.id === productId);

  // Function to handle adding product to the cart
  const handleAddToCart = () => {
    // Ensure product exists before adding to the cart
    if (!product) {
      console.error("Product is undefined.");
      return;
    }
    
    dispatch(addToCart({
      id: product.id,
      name: product.name,
      image: product.image,
      price: product.price,
      quantity: 1,
      width: 24, // Assuming default width
      height: 24 // Assuming default height
    }));
  };

  // If no product is found, display a message
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="flex flex-col items-center w-full max-w-sm">
      <h1 className="text-4xl font-bold text-left">{product.name}</h1>
      <Image
        src={product.image}
        alt={product.name}
        width={300}
        height={300}
        className="w-full h-auto object-cover rounded-md"
      />
      <div className="text-center mt-4">
        
        <p className="text-red-600 text-xl font-semibold">{product.price}</p>
        <Button
          onClick={handleAddToCart}
          className="bg-orange-400 text-white py-2 rounded-md w-full mt-3"
        >
          Add to Basket
        </Button>
      </div>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <div className="min-h-screen flex flex-col p-4 bg-white">
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <ProductDetails />
      </Suspense>
    </div>
  );
}
