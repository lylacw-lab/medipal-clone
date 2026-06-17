'use client';

import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { ShoppingBag, ArrowLeft, Truck, CreditCard, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function CheckoutPage() {
  const { cart, getCartTotal, getCartCount, clearCart, removeFromCart } = useCart();
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    institution: '',
    email: '',
    deliveryAddress: '',
    county: 'Nairobi',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderPlaced(true);
    clearCart();
  };

  if (orderPlaced) {
    return (
      <div className="max-w-md mx-auto my-16 p-8 bg-white border border-slate-200 rounded-2xl text-center shadow-sm">
        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 size={36} />
        </div>
        <h2 className="text-2xl font-bold text-slate-800 mb-2">Order Received!</h2>
        <p className="text-slate-600 text-sm mb-6">
          A coordinator will call you on <span className="font-semibold text-teal-700">{formData.phone}</span> shortly to arrange delivery routing.
        </p>
        <Link href="/">
          <button className="w-full bg-teal-700 text-white font-medium py-2.5 rounded-lg hover:bg-teal-800 transition text-sm">
            Return to Storefront
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="mb-6">
        <Link href="/" className="text-teal-700 hover:text-teal-800 text-sm font-medium flex items-center gap-1">
          <ArrowLeft size={16} />
          <span>Back to Product Catalog</span>
        </Link>
      </div>

      <h1 className="text-2xl font-extrabold text-slate-800 mb-8 tracking-tight">Institutional Checkout</h1>

      {cart.length === 0 ? (
        <div className="bg-white border border-slate-200 p-12 rounded-xl text-center">
          <ShoppingBag size={48} className="text-slate-300 mx-auto mb-4" />
          <h2 className="text-lg font-bold text-slate-700 mb-1">Your cart register is completely empty</h2>
          <p className="text-xs text-slate-400 mb-6">Please add medical hardware from the catalog homepage first.</p>
          <Link href="/">
            <button className="bg-teal-700 text-white font-medium px-6 py-2.5 rounded-lg hover:bg-teal-800 text-sm transition">
              View Catalog
            </button>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 bg-white border border-slate-200 p-6 rounded-xl shadow-xs">
            <h2 className="text-base font-bold text-slate-800 mb-4 flex items-center gap-2 pb-2 border-b border-slate-100">
              <Truck size={18} className="text-teal-700" />
              <span>1. Delivery Destination</span>
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1">Full Name *</label>
                  <input type="text" name="fullName" required value={formData.fullName} onChange={handleInputChange} className="w-full border border-slate-300 rounded-lg p-2 text-sm focus:outline-teal-700 text-slate-800" placeholder="Jane Doe" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1">Mobile Line (M-Pesa) *</label>
                  <input type="tel" name="phone" required value={formData.phone} onChange={handleInputChange} className="w-full border border-slate-300 rounded-lg p-2 text-sm focus:outline-teal-700 text-slate-800" placeholder="e.g., 0712345678" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1">Institution Name</label>
                  <input type="text" name="institution" value={formData.institution} onChange={handleInputChange} className="w-full border border-slate-300 rounded-lg p-2 text-sm focus:outline-teal-700 text-slate-800" placeholder="e.g., Nairobi Hospital" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1">Email Address *</label>
                  <input type="email" name="email" required value={formData.email} onChange={handleInputChange} className="w-full border border-slate-300 rounded-lg p-2 text-sm focus:outline-teal-700 text-slate-800" placeholder="contact@facility.org" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1">Destination County *</label>
                  <select name="county" value={formData.county} onChange={handleInputChange} className="w-full border border-slate-300 rounded-lg p-2 text-sm bg-white focus:outline-teal-700 text-slate-800">
                    <option value="Nairobi">Nairobi</option>
                    <option value="Mombasa">Mombasa</option>
                    <option value="Kisumu">Kisumu</option>
                    <option value="Nakuru">Nakuru</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1">Physical Address *</label>
                  <input type="text" name="deliveryAddress" required value={formData.deliveryAddress} onChange={handleInputChange} className="w-full border border-slate-300 rounded-lg p-2 text-sm focus:outline-teal-700 text-slate-800" placeholder="Wing B, Room 402" />
                </div>
              </div>

              <h2 className="text-base font-bold text-slate-800 pt-4 mb-4 flex items-center gap-2 pb-2 border-b border-slate-100">
                <CreditCard size={18} className="text-teal-700" />
                <span>2. Payment Method</span>
              </h2>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl flex items-center gap-3">
                <input type="radio" id="mpesa" name="payment" defaultChecked className="text-teal-700 focus:ring-teal-600" />
                <label htmlFor="mpesa" className="cursor-pointer">
                  <div className="text-sm font-semibold text-slate-800">Lipa na M-Pesa Cashless Dispatch</div>
                  <div className="text-xs text-slate-500">An STK prompt will push automatically upon finalizing your order registry.</div>
                </label>
              </div>

              <button type="submit" className="w-full mt-4 bg-emerald-500 text-white font-semibold py-3 rounded-lg hover:bg-emerald-600 shadow-md transition text-sm">
                Authorize Order Execution (KSh {getCartTotal().toLocaleString()})
              </button>
            </form>
          </div>
          <div className="lg:col-span-5 bg-slate-900 text-white p-6 rounded-xl shadow-xs">
            <h2 className="text-base font-semibold mb-4 pb-2 border-b border-slate-800 tracking-wide uppercase text-slate-400">
              Order Summary ({getCartCount()})
            </h2>

            <div className="divide-y divide-slate-800 max-h-72 overflow-y-auto pr-2 mb-4">
              {cart.map((item) => (
                <div key={item.id} className="py-4 flex justify-between items-start gap-4 text-sm border-b border-slate-800 last:border-0">
                  <div className="flex-grow">
                    <h4 className="font-medium text-slate-200 line-clamp-1">{item.name}</h4>
                    <span className="text-xs text-slate-400 block mt-0.5">
                      Qty: {item.quantity} × KSh {item.price.toLocaleString()}
                    </span>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="font-semibold text-slate-100 block">
                      KSh {(item.price * item.quantity).toLocaleString()}
                    </span>
                    <button 
                      type="button"
                      onClick={() => removeFromCart(item.id)}
                      className="text-rose-400 hover:text-rose-300 text-[11px] underline mt-1 block font-medium transition cursor-pointer ml-auto bg-transparent border-none"
                    >
                      Remove Item
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-2 border-t border-slate-800 pt-4 text-sm text-slate-400">
              <div className="flex justify-between">
                <span>Subtotal Tally</span>
                <span className="text-slate-200">KSh {getCartTotal().toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Fee</span>
                <span className="text-emerald-400 font-medium">FREE</span>
              </div>
              <div className="flex justify-between text-base font-bold text-white pt-2 border-t border-dashed border-slate-800">
                <span>Total Due</span>
                <span className="text-emerald-400">KSh {getCartTotal().toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
