import { useToast } from '@/hooks/use-toast';
import { Toast } from '@/components/ui/toast';
import { useState } from 'react';
import { useSelector } from 'react-redux'; // Assuming you have a redux setup for cart

export default function CheckoutPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    voucherCode: '',
  });
  const cartItems = useSelector((state) => state.cart.items); // Access cart items from redux store
  const toast = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission, e.g., sending data to an API or processing payment
    toast({
      title: "Payment Successful",
      description: "Payment created successfully.",
      status: "success",
    });
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between">
        <form className="w-full md:w-1/2 p-4" onSubmit={handleSubmit}>
          <div className="mb-4">
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
            <div className="flex justify-between my-4">
              <button type="button" className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Klarna</button>
              <button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">PayPal</button>
              {/* Add other payment methods similarly */}
            </div>
          </div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Submit
          </button>
        </form>
        <div className="w-full md:w-1/2 p-4">
          <h2 className="text-lg font-bold">Basket</h2>
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
