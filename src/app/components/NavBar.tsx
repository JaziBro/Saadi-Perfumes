"use client";

import { useSelector } from 'react-redux';
import { RootState } from '../store'; // Adjust the import path to your Redux store
import { Search, X } from "lucide-react";
import { HiMenuAlt1 } from "react-icons/hi";
import Image from "next/image";
import { useState } from "react";
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetFooter } from "@/components/ui/sheet";
import { BsCart3 } from "react-icons/bs";
import { Button } from "./ui/button";
import { ScrollArea, ScrollBar } from "../components/ui/scroll-area";
import logo from "../../../public/images/layer-1.png";

export default function Navbar() {
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const getCartCount = () => cartItems.length;

  const getTotalPrice = () => {
    const total = cartItems.reduce((total, item) => {
      const cleanedPrice = item.price.replace(/[^\d.-]/g, '');
      const numericPrice = parseFloat(cleanedPrice);
      return isNaN(numericPrice) ? total : total + (numericPrice * item.quantity);
    }, 0);
    return total.toFixed(2);
  };

  return (
    <nav className="relative flex items-center justify-between px-4 py-2 bg-white">
      <button onClick={toggleMenu} className="hover:bg-gray-100 p-2 rounded-full">
        {isMenuOpen ? <X size={24} /> : <HiMenuAlt1 size={24} />}
      </button>
      
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <Image src={logo} width={34} height={52} alt="logo" />
      </div>

      <div className="flex gap-x-4 items-center">
        <Search className="hover:bg-gray-100 rounded-full" />
        <Sheet>
          <SheetTrigger asChild>
            <button className="relative p-2 rounded-full hover:bg-gray-100">
              <BsCart3 size={24} />
              {getCartCount() > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-2 py-1">
                  {getCartCount()}
                </span>
              )}
            </button>
          </SheetTrigger>
          <SheetContent className="p-4 w-[300px]">
            <SheetHeader>
              <SheetTitle className="text-xl font-bold text-center">Cart</SheetTitle>
              <SheetDescription className="text-sm">Your Cart has {getCartCount()} item(s)</SheetDescription>
            </SheetHeader>
            <div className="py-4 h-60 overflow-auto">
              <ScrollArea>
                <div className="flex flex-col gap-4 shadow-lg rounded-md">
                  {cartItems.map((item, index) => (
                    <div key={index} className="flex items-center gap-4 p-2 border-b">
                      <Image src={item.image} alt={item.name} className="w-[60px] h-[60px] rounded-lg" />
                      <div className="flex flex-col">
                        <span className="font-semibold">{item.name}</span>
                        <span className="text-sm text-gray-500">{item.price} x {item.quantity}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </div>

            <div className="flex justify-between items-center py-4 border-t">
              <span className="text-lg font-bold">Total:</span>
              <span className="text-lg font-bold">Rs. {getTotalPrice()}</span>
            </div>

            <SheetFooter>
              <Button className="bg-black text-white px-4 py-2 rounded-md w-full">Proceed to Checkout</Button>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
