import React, { useState } from 'react';


// Product Card Component

const ProductCard = ({ title, price, status }) => {
  return (
    <article className="bg-white border border-gray-100 rounded-2xl shadow-md hover:-translate-y-0.5 hover:shadow-xl transition-all overflow-hidden">
      <div className="aspect-[4/3] bg-gradient-to-b from-amber-700/8 to-transparent border-b border-gray-100 flex items-center justify-center text-amber-700/65 font-semibold tracking-widest uppercase text-xs">
        Product
      </div>
      <div className="p-4">
        <h3 className="font-serif text-lg mb-1.5">{title}</h3>
        <div className="flex items-center justify-between gap-2.5 mt-3 text-xs text-gray-600">
          <span className="text-amber-700 font-bold tracking-wide">${price}</span>
          <span>{status}</span>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;