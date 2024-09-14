"use client"

import { toast, useToast } from '@/hooks/use-toast';
import { useState } from 'react';
import { useSelector } from 'react-redux'; // Assuming you have a redux setup for cart
import { RootState } from '../store';  // Adjust the path as necessary
import { CreditCard, Handshake } from 'lucide-react';
import cash_on_delivery from "../../../public/cash-on-delivery.png"
import { Button } from '../components/ui/button';
import Image from "next/image"

export default function CheckoutPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    voucherCode: '',
  });

  // Use RootState to type the state argument in useSelector
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();  // Prevent the form from submitting the traditional way
    // Logic to handle form submission, e.g., sending data to an API or processing payment
    toast({
      title: "Payment Successful",
      description: "Payment created successfully.",
    });
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + parseFloat(item.price) * item.quantity, 0).toFixed(2);
  };
  
  return (
    <div className="container mx-auto px-4">
      
      <div className="flex flex-col md:flex-row justify-between">
        <form className="w-full md:w-1/2 p-4 bg-gray-200 shadow-lg" onSubmit={handleSubmit}>
          <div className="mb-4">
            <h1 className='font-bold mb-10 text-xl border-b'>Checkout</h1>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">           
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="voucherCode">
              Got a voucher code?
            </label>
            <input
              type="text"
              name="voucherCode"
              value={formData.voucherCode}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <span className="text-xl font-bold">Choose Payment Method</span>
            <div className="justify-between my-4">
            <Button type='button' className='bg-blue-500 hover:bg-blue-600 rounded-sm mb-5 h-10'>
                <CreditCard className="mr-2 h-4 w-4" /> 
                Credit Card
            </Button>   
            <Button type='button' className='bg-lime-500 hover:bg-lime-600 rounded-sm h-10'>
                <Handshake className="mr-2 h-4 w-4 outline-white" /> 
                Cash On Delivery
            </Button>  
            </div>
          </div>
          <Button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Submit
          </Button>
        </form>
        <div className="w-full md:w-1/2 p-4">
          <h2 className="text-xl font-bold">Cart</h2>
          {cartItems.map((item, index) => (
            <div key={index} className="flex justify-between my-2 p-2 border-b">
              <img src={item.image} alt={item.name} className="h-10 w-10 object-cover" />
              <span>{item.name}</span>
              <span>{item.quantity} x ${item.price}</span>
            </div>
          ))}
          <div className="text-right">
            <div className="font-bold">Total: ${calculateTotal()}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
