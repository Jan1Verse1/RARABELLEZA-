// src/pages/LandingPage.jsx
import React, { useState, useEffect } from 'react';
import Hero from '../components/hero';
import ServiceCard from '../components/serviceCard';
import ProductCard from '../components/productCard';
import Testimonial from '../components/testimonials';
import { API_URL, apiFetch } from '../api';

const LandingPage = ({ setShowBookingForm }) => {
  const [services, setServices] = useState([]);
  const [products, setProducts] = useState([]);
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    apiFetch('/api/services?populate=*')
      .then((res) => res.json())
      .then((data) => {
        setServices(
          data.data.map((item) => ({
            title: item.title,
            description: item.description,
            price: item.price,
            category: item.category,
            image: item.image ? `${API_URL}${item.image.url}` : null,
          }))
        );
      })
      .catch(console.error);

    apiFetch('/api/products?populate=*&pagination[limit]=4&sort=createdAt:desc')
      .then((res) => res.json())
      .then((data) => {
        setProducts(
          data.data.map((item) => ({
            title: item.title,
            price: item.price,
            status: item.status,
          }))
        );
      })
      .catch(console.error);

    apiFetch('/api/testimonials')
      .then((res) => res.json())
      .then((data) => {
        setTestimonials(
          data.data.map((item) => ({
            text: item.text,
            author: item.author,
            rating: '★'.repeat(item.rating),
          }))
        );
      })
      .catch(console.error);
  }, []);

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

      {/* FAQ */}
      <section id="faq" className="py-12">
        <div className="max-w-7xl mx-auto px-5">
          <div className="mb-4.5">
            <h2 className="font-serif text-3xl m-0">Frequently Asked Questions</h2>
            <div className="text-gray-600">Quick answers to common questions</div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { q: 'Do you require a deposit?', a: 'Yes, a non-refundable deposit secures your appointment.' },
              { q: 'Do you accept card payments?', a: 'Yes, we accept debit and credit card.' },
              { q: 'How long does shipping take?', a: '3–7 business days.' },
              { q: 'Can I reschedule?', a: '24-hour notice required.' },
            ].map((item, idx) => (
              <div key={idx} className="bg-white border border-gray-100 rounded-2xl shadow-md p-4">
                <strong className="text-amber-700 font-serif">Q: {item.q}</strong>
                <p className="mt-2 mb-0 text-gray-700">A: {item.a}</p>
              </div>
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