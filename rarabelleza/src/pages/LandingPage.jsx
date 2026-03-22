// src/pages/LandingPage.jsx
import React, {useState} from 'react';
import Hero from '../components/hero';
import ServiceCard from '../components/serviceCard';
import ProductCard from '../components/productCard';
import Testimonial from '../components/testimonials';

const LandingPage = ({ setShowBookingForm }) => {
  const services = [
    {
      title: 'Wig Installs',
      description: 'Frontal • Closure • Leave Out',
      price: 'From $100',
      category: 'Hair Appointments',
    },
    {
      title: 'Glam Appointments',
      description: 'Natural • Full Face • Birthday',
      price: 'From $60',
      category: 'Makeup',
    },
    {
      title: 'Microshading',
      description: 'New • Touch Up',
      price: 'From $150',
      category: 'Ombré Brows',
    },
  ];

  const products = [
    { title: 'Raw Filipino Straight', price: 250, status: 'In stock' },
    { title: 'Raw Filipino Wavy', price: 275, status: 'In stock' },
    { title: 'Lipgloss', price: 18, status: 'New' },
    { title: 'Makeup Brushes', price: 45, status: 'Best seller' },
  ];

  const testimonials = [
    {
      text: 'The service was flawless—clean, calm, and luxury from start to finish.',
      author: 'Sarah M.',
      rating: '★★★★★',
    },
    {
      text: 'My install was perfect. I felt confident and expensive.',
      author: 'Jasmine T.',
      rating: '★★★★★',
    },
    {
      text: 'Makeup was exactly what I wanted—soft glam, premium finish.',
      author: 'Nicole R.',
      rating: '★★★★★',
    },
  ];

  return (
    <>
      <Hero onBookClick={() => setShowBookingForm(true)} />

      {/* Services Section */}
      <section id="book" className="py-12">
        <div className="max-w-7xl mx-auto px-5">
          <div className="flex items-end justify-between gap-4 mb-4.5">
            <div>
              <h2 className="font-serif text-3xl m-0">Book Services</h2>
              <div className="text-gray-600">Hair installs • Makeup • Ombré brow microshading</div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4.5">
            {services.map((service, idx) => (
              <ServiceCard key={idx} {...service} onBook={() => setShowBookingForm(true)} />
            ))}
          </div>
        </div>
      </section>

      {/* Shop Preview */}
      <section id="shop" className="bg-gradient-to-br from-amber-700/10 to-amber-500/12 border-y border-amber-600/18 py-5.5">
        <div className="max-w-7xl mx-auto px-5">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div>
              <strong className="font-serif text-lg">Shop Premium Collections</strong>
              <div className="text-gray-600">
                Raw Filipino • Bone Straight • Curly • Brushes • Lipgloss • Gems
              </div>
            </div>
            <button className="px-4 py-3 rounded-full bg-gradient-to-br from-amber-700 to-amber-500 text-white font-semibold text-sm shadow-lg shadow-amber-700/22">
              Go to Shop
            </button>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-5">
          <div className="flex items-end justify-between gap-4 mb-4.5">
            <div>
              <h2 className="font-serif text-3xl m-0">Best Sellers</h2>
              <div className="text-gray-600">Premium wigs & makeup products</div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {products.map((product, idx) => (
              <ProductCard key={idx} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-5">
          <div className="flex items-end justify-between gap-4 mb-4.5">
            <div>
              <h2 className="font-serif text-3xl m-0">Client Reviews</h2>
              <div className="text-gray-600">What our clients say</div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {testimonials.map((testimonial, idx) => (
              <Testimonial key={idx} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-12">
        <div className="max-w-7xl mx-auto px-5">
          <div className="flex items-end justify-between gap-4 mb-4.5">
            <div>
              <h2 className="font-serif text-3xl m-0">About RARABELLEZA</h2>
              <div className="text-gray-600">Luxury beauty services + curated products.</div>
            </div>
          </div>
          <div className="bg-white border border-gray-100 rounded-2xl shadow-md overflow-hidden">
            <div className="p-4">
              <p className="m-0">
                RARABELLEZA is built for confident women who love clean luxury. Book appointments
                online and shop premium wigs and beauty essentials.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingPage;