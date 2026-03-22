import React, { useState } from 'react';

// Footer Component

const Footer = () => {
  return (
    <footer className="py-10 border-t border-gray-100 bg-gradient-to-b from-white to-amber-50">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div>
            <h3 className="font-serif mb-2.5">RARABELLEZA</h3>
            <p className="text-gray-600 m-0">
              Classic, luxury beauty services and premium collections — built for confident women.
            </p>
            <div className="mt-4.5 text-xs text-gray-600 border-t border-gray-100/8 pt-3.5">
              © {new Date().getFullYear()} RARABELLEZA. All rights reserved.
            </div>
          </div>
          <div className="flex flex-col">
            <h4 className="font-serif text-base mb-2.5">Quick Links</h4>
            <a href="#book" className="block py-2 text-gray-800 no-underline hover:text-amber-700">Book Appointment</a>
            <a href="#shop" className="block py-2 text-gray-800 no-underline hover:text-amber-700">Shop</a>
            <a href="#about" className="block py-2 text-gray-800 no-underline hover:text-amber-700">About</a>
            <a href="#contact" className="block py-2 text-gray-800 no-underline hover:text-amber-700">Contact</a>
          </div>
          <div className="flex flex-col">
            <h4 className="font-serif text-base mb-2.5">Policies</h4>
            <a href="#" className="block py-2 text-gray-800 no-underline hover:text-amber-700">Deposit Policy</a>
            <a href="#" className="block py-2 text-gray-800 no-underline hover:text-amber-700">Cancellation Policy</a>
            <a href="#" className="block py-2 text-gray-800 no-underline hover:text-amber-700">Shipping Policy</a>
            <a href="#" className="block py-2 text-gray-800 no-underline hover:text-amber-700">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;