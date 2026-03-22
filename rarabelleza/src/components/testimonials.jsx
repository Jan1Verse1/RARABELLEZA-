import React, { useState } from 'react';


// Testimonial Component
const Testimonial = ({ text, author, rating }) => {
  return (
    <blockquote className="m-0 p-4.5 rounded-2xl border border-gray-100 bg-white shadow-md">
      <p className="mb-3">{text}</p>
      <footer className="flex items-center justify-between text-gray-600 text-xs">
        <span>{author}</span>
        <span>{rating}</span>
      </footer>
    </blockquote>
  );
};

export default Testimonial; 