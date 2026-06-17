'use client';

import React from 'react';
import { useCart } from '../context/CartContext';
import { ShoppingCart, Search, Phone, User, Heart } from 'lucide-react';

export default function Header() {
  const { getCartCount, getCartTotal } = useCart();

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      {/* Top Notification bar */}
      <div className="bg-blue-900 text-white text-xs py-2 px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Phone size={14} />
          <span>Call Us / WhatsApp: +254 710 535 709</span>
        </div>
        <div>
          <span>Free Delivery within Nairobi CBD for orders over KSh 5,000</span>
        </div>
      </div>

      {/* Main Header Area */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Logo Text placeholder */}
        <div className="font-bold text-2xl text-teal-800 tracking-tight cursor-pointer">
          HAWK<span className="text-emerald-500">SCIENTIFIC</span>
        </div>

        {/* Intelligent Search Input */}
        <div className="w-full md:w-1/2 relative flex">
          <input
            type="text"
            placeholder="Search medical equipment, hospital furniture, consumables..."
            className="w-full border border-slate-300 rounded-l-lg py-2 px-4 pr-10 focus:outline-none focus:border-teal-600 text-slate-700 text-sm"
          />
          <button className="bg-blue-900 text-white px-5 rounded-r-lg hover:bg-teal-800 flex items-center justify-center transition">
            <Search size={18} />
          </button>
        </div>

        {/* User Account & Cart Section */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-1 cursor-pointer text-slate-600 hover:text-teal-700 transition">
            <User size={20} />
            <span className="text-sm hidden lg:inline font-medium">Account</span>
          </div>
          
          {/* Cart Icon Widget with dynamic number badge */}
          <div className="relative flex items-center gap-2 cursor-pointer text-slate-600 hover:text-teal-700 transition">
            <div className="relative">
              <ShoppingCart size={22} />
              {getCartCount() > 0 && (
                <span className="absolute -top-2 -right-2 bg-emerald-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold animate-pulse">
                  {getCartCount()}
                </span>
              )}
            </div>
            <div className="hidden sm:flex flex-col text-left">
              <span className="text-xs text-slate-400">Your Cart</span>
              <span className="text-xs font-semibold text-slate-700">KSh {getCartTotal().toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Lower Navigation Categories */}
      <nav className="border-t border-slate-100 bg-slate-50 overflow-x-auto">
        <ul className="max-w-7xl mx-auto px-4 py-3 flex gap-8 text-sm font-medium text-slate-600 whitespace-nowrap">
          <li className="text-teal-700 font-semibold border-b-2 border-teal-700 pb-1 cursor-pointer">Home</li>
          <li className="hover:text-teal-700 cursor-pointer transition">Theatre Equipment</li>
          <li className="hover:text-teal-700 cursor-pointer transition">Laboratory Consumables</li>
          <li className="hover:text-teal-700 cursor-pointer transition">Hospital Furniture</li>
          <li className="hover:text-teal-700 cursor-pointer transition">Homecare Products</li>
          <li className="hover:text-teal-700 cursor-pointer transition">Dental & Orthopedic</li>
        </ul>
      </nav>
    </header>
  );
}