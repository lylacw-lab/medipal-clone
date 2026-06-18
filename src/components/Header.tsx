'use client';

import React from 'react';
import Link from 'next/link'; 
import Image from 'next/image'; 
import brandLogo from '../../public/logo.png'; 
import { useCart } from '../context/CartContext';
import { ShoppingCart, Search, Phone, User } from 'lucide-react';

export default function Header() {
  const { getCartCount, getCartTotal } = useCart();

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      {/* Top Notification bar with exact matching brand gradient */}
      <div className="bg-gradient-to-r from-sky-400 to-blue-700 text-white text-xs py-2 px-4 flex justify-between items-center">
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
        
        {/* Logo Section */}
        <Link href="/" className="flex items-center cursor-pointer min-w-[240px]">
          <Image 
            src={brandLogo} 
            alt="Hawk Scientific Logo" 
            width={260} 
            priority
            className="object-contain max-h-[75px] w-auto transition-transform hover:scale-102"
          />
        </Link>

        {/* Search Input Field */}
        <div className="w-full md:w-1/2 relative flex">
          <input
            type="text"
            placeholder="Search medical equipment, hospital furniture, consumables..."
            className="w-full border border-slate-300 rounded-l-lg py-2 px-4 pr-10 focus:outline-none focus:border-sky-400 text-slate-700 text-sm"
          />
          <button className="bg-gradient-to-r from-sky-400 to-blue-700 text-white px-5 rounded-r-lg hover:from-red-600 hover:to-red-700 flex items-center justify-center transition duration-300">
            <Search size={18} />
          </button>
        </div>

        {/* User Account & Cart Section */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-1 cursor-pointer text-slate-600 hover:text-sky-500 transition">
            <User size={20} />
            <span className="text-sm hidden lg:inline font-medium">Account</span>
          </div>
          
          {/* Cart Icon Widget */}
          <Link href="/checkout" className="relative flex items-center gap-2 cursor-pointer text-slate-600 hover:text-sky-500 transition">
            <div className="relative">
              <ShoppingCart size={22} />
              {getCartCount() > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold animate-pulse">
                  {getCartCount()}
                </span>
              )}
            </div>
            <div className="hidden sm:flex flex-col text-left">
              <span className="text-xs text-slate-400">Your Cart</span>
              <span className="text-xs font-semibold text-slate-700">KSh {getCartTotal().toLocaleString()}</span>
            </div>
          </Link>
        </div>
      </div>

      {/* Lower Navigation Categories - Fully Active Routes */}
      <nav className="border-t border-slate-100 bg-slate-50 overflow-x-auto">
        <ul className="max-w-7xl mx-auto px-4 py-3 flex gap-8 text-sm font-medium text-slate-600 whitespace-nowrap">
          <li>
            <Link href="/" className="hover:text-sky-500 focus:text-sky-500 active:text-sky-500 pb-1 cursor-pointer transition">
              Home
            </Link>
          </li>
          <li>
            <Link href="/theatre" className="hover:text-sky-500 focus:text-sky-500 pb-1 cursor-pointer transition">
              Theatre Equipment
            </Link>
          </li>
          <li>
            <Link href="/laboratory" className="hover:text-sky-500 focus:text-sky-500 pb-1 cursor-pointer transition">
              Laboratory Consumables
            </Link>
          </li>
          <li>
            <Link href="/furniture" className="hover:text-sky-500 focus:text-sky-500 pb-1 cursor-pointer transition">
              Hospital Furniture
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
