// src/pages/ShopPage.jsx
import React, { useState, useEffect } from 'react';
import ProductCard from '../components/productCard';
import { apiFetch } from '../api';

const ShopPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [allProducts, setAllProducts] = useState([]);

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'wigs', name: 'Wigs' },
    { id: 'makeup', name: 'Makeup' },
    { id: 'accessories', name: 'Accessories' },
  ];

  useEffect(() => {
    apiFetch('/api/products?populate=*&pagination[limit]=100')
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(
          data.data.map((item) => ({
            id: item.id,
            title: item.title,
            price: item.price,
            status: item.status,
            category: item.category,
          }))
        );
      })
      .catch(console.error);
  }, []);

  const filteredProducts = allProducts.filter((product) => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-5">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="font-serif text-4xl md:text-5xl mb-3">Shop Collection</h1>
          <p className="text-gray-600 text-lg">
            Premium wigs, makeup, and beauty accessories for confident women.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          {/* Search */}
          <div className="w-full md:w-96">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full p-3 px-4 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-amber-600"
            />
          </div>

          {/* Category Filter */}
          <div className="flex gap-2 flex-wrap">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-br from-amber-700 to-amber-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No products found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShopPage;