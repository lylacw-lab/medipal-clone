'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { useCart } from '@/context/CartContext'; 
import { supabase } from '@/utils/supabase';     
import { ShoppingCart, ArrowLeft, Package } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  image_url: string;
}

export default function CategoryPage() {
  const { category } = useParams(); 
  const { addToCart } = useCart();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const pageTitle = typeof category === 'string' 
    ? category.charAt(0).toUpperCase() + category.slice(1) + " Catalog"
    : "Medical Catalog";

  useEffect(() => {
    async function fetchCategoryProducts() {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('products')
          .select('id, name, price, description, category, image_url')
          .eq('category', category); 
        
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

    if (category) fetchCategoryProducts();
  }, [category]);

  return (
    <div className="bg-slate-50 min-h-screen py-10 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Back Link */}
        <div className="mb-6">
          <Link href="/" className="text-sky-600 hover:text-blue-800 text-sm font-medium flex items-center gap-1 transition">
            <ArrowLeft size={16} />
            <span>Back to Main Storefront</span>
          </Link>
        </div>

        {/* Dynamic Header Banner */}
        <div className="bg-gradient-to-r from-sky-500 via-blue-700 to-blue-950 text-white rounded-2xl p-8 mb-10 shadow-md">
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight">{pageTitle}</h1>
          <p className="text-sky-100 text-sm mt-2 max-w-xl">
            Surgical-grade infrastructure and laboratory equipment compliant with medical safety standards. Distributed across Kenya.
          </p>
        </div>

        {/* Live Database Products Loop */}
        {loading ? (
          <div className="text-center py-12 text-sm font-medium text-slate-500 animate-pulse">
            Querying cloud database catalog nodes...
          </div>
        ) : products.length === 0 ? (
          <div className="text-center py-12 text-sm text-slate-400 border border-dashed border-slate-200 rounded-xl bg-white shadow-xs">
            <Package size={40} className="mx-auto mb-3 text-slate-300" />
            <p>No products loaded under the "{category}" category row yet.</p>
            <p className="text-xs text-slate-400 mt-1">Add items with the lowercase category tag in your Supabase Dashboard to see them load live.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div key={product.id} className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs flex flex-col justify-between p-4 hover:shadow-md hover:border-sky-300 transition duration-300">
                <div className="mb-4">
                  
                  {/* Native Resilient Image Handling Panel */}
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
                  onClick={() => addToCart({ id: product.id, name: product.name, price: product.price, image_url: product.image_url || '' })}
                  className="w-full bg-red-600 text-white font-semibold py-2.5 rounded-lg hover:bg-red-700 transition flex items-center justify-center gap-2 text-xs shadow-xs"
                >
                  <ShoppingCart size={14} />
                  <span>Add to Cart Register</span>
                </button>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
