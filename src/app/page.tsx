'use client';

import React, { useEffect, useState } from 'react';
import { useCart } from '@/context/CartContext';
import { supabase } from '@/utils/supabase';
import { ShoppingCart, Package2, CheckCircle, Truck, ShieldCheck } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image_url: string; // Added image_url typing to your home interface
}

export default function Home() {
  const { addToCart } = useCart();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchLiveProducts() {
      try {
        setLoading(true);
        // Explicitly asking Supabase for the image_url column along with other details
        const { data, error } = await supabase
          .from('products')
          .select('id, name, price, description, image_url');
        
        if (error) {
          console.error('Supabase Query Error:', error.message);
        } else if (data) {
          setProducts(data);
        }
      } catch (err) {
        console.error('Database connection failed:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchLiveProducts();
  }, []);

  return (
    <div className="w-full bg-slate-50 min-h-screen">
      {/* PREMIUM BRAND HERO BANNER */}
      <section className="bg-gradient-to-r from-sky-500 via-blue-700 to-blue-950 text-white py-16 px-4 shadow-inner">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <span className="bg-white/10 text-sky-200 font-semibold text-xs px-3 py-1.5 rounded-full border border-white/20 tracking-wider uppercase backdrop-blur-xs">
              Premium Medical Distribution
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
              Surgical Instruments & <br />
              Hospital Supplies Ecosystem
            </h1>
            <p className="text-sky-100 text-base max-w-lg leading-relaxed">
              Equipping clinical infrastructure with standard compliance medical technologies. Trusted by medical facilities across East Africa.
            </p>
          </div>
          <div className="hidden md:flex bg-white/5 p-8 rounded-2xl border border-white/10 justify-center items-center h-44 text-center backdrop-blur-md">
            <div className="space-y-3">
              <ShieldCheck size={48} className="text-sky-300 mx-auto animate-pulse" />
              <div className="text-lg font-semibold text-white tracking-wide">ISO 13485 Certified Ecosystem</div>
            </div>
          </div>
        </div>
      </section>

      {/* PIPELINE EXPLAINER */}
      <section className="bg-white border-b border-slate-200 py-10 px-4 shadow-xs">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition">
            <div className="bg-sky-50 p-3 rounded-lg text-sky-600"><Package2 size={24} /></div>
            <div>
              <h3 className="font-semibold text-slate-800 text-sm mb-1">1. Select Medical Supplies</h3>
              <p className="text-xs text-slate-500">Add clinical choices to your digital register.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition">
            <div className="bg-sky-50 p-3 rounded-lg text-sky-600"><CheckCircle size={24} /></div>
            <div>
              <h3 className="font-semibold text-slate-800 text-sm mb-1">2. Complete Verification</h3>
              <p className="text-xs text-slate-500">Review line-item totals and delivery destinations seamlessly.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition">
            <div className="bg-sky-50 p-3 rounded-lg text-sky-600"><Truck size={24} /></div>
            <div>
              <h3 className="font-semibold text-slate-800 text-sm mb-1">3. Secure Delivery Dispatch</h3>
              <p className="text-xs text-slate-500">Structured professional doorstep shipping right to your facility.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS CATALOG GRID */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
          <span className="w-1.5 h-6 bg-blue-700 rounded-full"></span>
          <span>Live Catalog Inventory</span>
        </h2>

        {loading ? (
          <div className="text-center py-12 text-sm font-medium text-slate-500 animate-pulse">
            Querying active cloud database nodes...
          </div>
        ) : products.length === 0 ? (
          <div className="text-center py-12 text-sm text-slate-400 border border-dashed border-slate-200 rounded-xl bg-white shadow-xs">
            No products found inside your database tables yet. Add rows in your Supabase Dashboard to see them live!
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div key={product.id} className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs flex flex-col justify-between p-4 hover:shadow-md hover:border-sky-300 transition duration-300">
                <div className="mb-4">
                  
                  {/* UPDATED HOMEPAGE IMAGE PANEL */}
                  <div className="relative w-full h-32 bg-slate-100 rounded-lg overflow-hidden border border-slate-200/60 mb-3">
                    <img 
                      src={product.image_url || '/logo.png'} 
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <h3 className="font-semibold text-slate-800 text-sm min-h-[40px] tracking-tight">{product.name}</h3>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2">{product.description}</p>
                  <div className="mt-3 text-base font-extrabold text-blue-900">
                    KSh {product.price.toLocaleString()}
                  </div>
                </div>

                <button
                  onClick={() => addToCart({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    image_url: product.image_url || ''
                  })}
                  className="w-full bg-red-600 text-white font-semibold py-2.5 rounded-lg hover:bg-red-700 active:scale-[0.98] transition flex items-center justify-center gap-2 text-xs shadow-xs"
                >
                  <ShoppingCart size={14} />
                  <span>Add to Cart Register</span>
                </button>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
