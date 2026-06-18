'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppBubble() {
  // Your target mobile line contact parameter string from yesterday's header template
  const phoneNumber = "254710535709"; 
  
  // Custom encoded message text that fills the customer's text window automatically
  const message = encodeURIComponent(
    "Hello Hawk Scientific, I am visiting your web store and would like to request a quotation for medical equipment."
  );

  const whatsappUrl = `https://wa.me{phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-emerald-500 hover:bg-emerald-600 text-white p-4 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300 z-50 group border border-emerald-400/20"
      title="Chat with us on WhatsApp"
    >
      {/* Dynamic expanding brand text string that pulls out when a cursor hovers near */}
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:mr-2 text-sm font-semibold tracking-wide whitespace-nowrap transition-all duration-500 ease-in-out">
        Chat with Us
      </span>
      <MessageCircle size={24} className="fill-white/10" />
    </a>
  );
}