import React from 'react';
import { MapPin, Mail, Phone, Clock, ShieldCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-12 pb-6 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        
        {/* Column 1: Company Profile */}
        <div>
          <h3 className="text-white font-bold text-lg mb-4">HAWK SCIENTIFIC</h3>
          <p className="text-sm text-slate-400 leading-relaxed mb-4">
            A leading premium supplier of surgical equipment, clinical diagnostic tools, medical furniture, and professional emergency response supplies in Kenya.
          </p>
          <div className="flex items-center gap-2 text-xs bg-slate-800 p-3 rounded-lg text-emerald-400 font-medium">
            <ShieldCheck size={18} />
            <span>Fully Licensed Distributor</span>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-white font-bold text-base mb-4">Our Categories</h3>
          <ul className="space-y-2.5 text-sm">
            <li className="hover:text-white cursor-pointer transition">Operating Theatre</li>
            <li className="hover:text-white cursor-pointer transition">Laboratory Equipment</li>
            <li className="hover:text-white cursor-pointer transition">Physiotherapy & Rehab</li>
            <li className="hover:text-white cursor-pointer transition">Maternity Care</li>
            <li className="hover:text-white cursor-pointer transition">Hospital Wear</li>
          </ul>
        </div>

        {/* Column 3: Business Hours */}
        <div>
          <h3 className="text-white font-bold text-base mb-4">Operational Hours</h3>
          <ul className="space-y-3 text-sm text-slate-400">
            <li className="flex items-center gap-2">
              <Clock size={16} className="text-teal-500" />
              <span>Mon - Fri: 8:00 AM - 5:00 PM</span>
            </li>
            <li className="flex items-center gap-2">
              <Clock size={16} className="text-teal-500" />
              <span>Saturday: 9:00 AM - 1:00 PM</span>
            </li>
            <li className="flex items-center gap-2 text-amber-400">
              <span>Sundays & Public Holidays: Closed</span>
            </li>
          </ul>
        </div>

        {/* Column 4: Physical Location Contact Details */}
        <div>
          <h3 className="text-white font-bold text-base mb-4">Contact Information</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin size={18} className="text-teal-500 shrink-0 mt-0.5" />
              <span className="text-slate-400">Ambasadour court, Milimani,3rd Floor, Nairobi, Kenya</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-teal-500" />
              <span className="text-slate-400">+254 710 535 709</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-teal-500" />
              <span className="text-slate-400">info@hawkscientific.co.ke</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Copyright line */}
      <div className="max-w-7xl mx-auto px-4 pt-6 border-t border-slate-800 text-center text-xs text-slate-500 flex flex-col sm:flex-row justify-between items-center gap-4">
        <span>© {new Date().getFullYear()} Hawk Scientific. All Rights Reserved.</span>
        <div className="flex gap-4">
          <span className="hover:underline cursor-pointer">Terms of Service</span>
          <span className="hover:underline cursor-pointer">Privacy Policy</span>
        </div>
      </div>
    </footer>
  );
}
