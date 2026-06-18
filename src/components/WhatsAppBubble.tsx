'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppBubble() {
  const handleWhatsAppRedirect = () => {
    const phoneNumber = "254710535709"; 
    const messageText = "Hello Hawk Scientific, I am visiting your web store and would like to request a quotation for medical equipment.";
    
    // MASTER FALLBACK METHOD: Uses the heavy API domain instead of the wa.me shortcut
    const whatsappUrl = `https://whatsapp.com{phoneNumber}&text=${encodeURIComponent(messageText)}&type=phone_number&app_absent=0`;
    
    // Redirects the current page location smoothly
    window.location.href = whatsappUrl;
  };

  return (
    <button
      onClick={handleWhatsAppRedirect}
      className="fixed bottom-6 right-6 bg-emerald-500 hover:bg-emerald-600 text-white p-4 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300 z-50 group border border-emerald-400/20 cursor-pointer"
      title="Chat with us on WhatsApp"
    >
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:mr-2 text-sm font-semibold tracking-wide whitespace-nowrap transition-all duration-500 ease-in-out">
        Chat with Us
      </span>
      <MessageCircle size={24} className="fill-white/10" />
    </button>
  );
}
