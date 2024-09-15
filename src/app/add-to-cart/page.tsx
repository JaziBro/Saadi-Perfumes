"use client"
import { Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../components/cart/cartSlice';
import { useRouter, useSearchParams } from 'next/navigation';
import Image from "next/image";
import { Button } from "../components/ui/button";
import Navbar from "../components/NavBar";
import productImage1 from "../../../public/images/perfumes/perfume-1.jpg";
import productImage2 from "../../../public/images/perfumes/perfume-2.jpg";
import productImage3 from "../../../public/images/perfumes/perfume-3.jpg";
import productImage4 from "../../../public/images/perfumes/perfume-4.jpg";
import productImage5 from "../../../public/images/perfumes/perfume-5.jpg";
import productImage6 from "../../../public/images/perfumes/perfume-6.jpg";
import rating from "../../../public/images/rating.svg";
import { toast, useToast } from '@/hooks/use-toast';

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

    toast({
      title: "Product Added to Cart Succesfully!",
      description: `${product.name} has been added to your cart.`,
    });
    
  };

  // If no product is found, display a message
  if (!product) {
    return <div>Product not found</div>;
  }

  // function to redirect to checkout page
  const redirectToCheckout = () => {
    router.push('/checkout');
  };

  return (
    <div className="">
      <Image
        src={product.image}
        alt={product.name}
        width={300}
        height={300}
        className="w-full h-auto object-cover rounded-md mt-10"
      />
      <Image
        src={rating}
        width={24}
        height={24}
        alt="Rating"
        className="w-24 h-24" //Adjusted width and height
      />
      <h1 className="text-4xl font-bold text-left mt-2 font-['Plus-Jarakta-Sans'] ">{product.name}</h1>
      <p className="text-gray-500 font-['Plus-Jarakta-Sans'] text-left mt-5" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sed cumque maiores repellat quos totam accusantium est quae fugiat, illum tenetur ad quasi neque amet tempore maxime deserunt quam corrupti!</p>
      <h3 className='text-left font-bold font-[Plus-Jarakta-Sans] mt-5'>Fragrance Notes</h3>
      <ul className='text-left'>
        <li className='text-gray-500 font-[Plus-Jarakta-Sans]'>Top: Citrus, Bergamot</li>
        <li className='text-gray-500 font-[Plus-Jarakta-Sans]'>Heart: Jasmine, Rose</li>
        <li className='text-gray-500 font-[Plus-Jarakta-Sans]'>Base: Musk, Vanilla</li>
      </ul>
      <div className='border-black border-t border-b mt-10'>
        <p className="text-red-600 text-xl font-semibold text-center mt-5">{product.price}</p>
        <Button
            onClick={handleAddToCart}
            className=" text-white py-2 border-collapse rounded-none w-full mt-5 mb-2 hover:scale-110 hover:bg-black"
          >
            Add to Cart
        </Button>
        <Button
            onClick={redirectToCheckout}
            className="text-black rounded-none py-2 w-full mb-5 border-t boder-b border-r border-l border-b border-black bg-white hover:scale-110 hover:bg-white"
          >
            Buy Now
        </Button>
      </div>
      <div className="text-center mt-4">
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
