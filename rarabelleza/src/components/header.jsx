// src/components/header.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = ({ setShowBookingForm }) => {
  const location = useLocation();
  
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex items-center justify-between py-5 gap-4">
          <Link to="/" className="flex items-baseline gap-2.5 no-underline">
            <div className="font-serif font-bold text-2xl tracking-wide">RARABELLEZA</div>
            <div className="text-xs text-amber-700 border-l border-gray-200 pl-2.5">
              Luxury Beauty
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6 items-center">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors ${
                isActive('/') 
                  ? 'text-amber-700' 
                  : 'text-gray-700 hover:text-amber-700'
              }`}
            >
              Home
            </Link>
            <Link
              to="/shop"
              className={`text-sm font-medium transition-colors ${
                isActive('/shop') 
                  ? 'text-amber-700' 
                  : 'text-gray-700 hover:text-amber-700'
              }`}
            >
              Shop
            </Link>
                  <Link
              to="/shop"
              className={`text-sm font-medium transition-colors ${
                isActive('/shop') 
                  ? 'text-amber-700' 
                  : 'text-gray-700 hover:text-amber-700'
              }`}
            >
             Book Appointment
            </Link>
                  <Link
              to="/shop"
              className={`text-sm font-medium transition-colors ${
                isActive('/shop') 
                  ? 'text-amber-700' 
                  : 'text-gray-700 hover:text-amber-700'
              }`}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`text-sm font-medium transition-colors ${
                isActive('/contact') 
                  ? 'text-amber-700' 
                  : 'text-gray-700 hover:text-amber-700'
              }`}
            >
              Contact
            </Link>
          </nav>

          <div className="flex gap-2.5 items-center">
            <Link
              to="/shop"
              className="hidden sm:inline-flex px-4 py-3 rounded-full border border-amber-600/55 bg-transparent text-amber-700 font-semibold text-sm hover:bg-amber-600/8 transition-all"
            >
              Shop
            </Link>
            <button
              onClick={() => setShowBookingForm(true)}
              className="px-4 py-3 rounded-full border-none bg-gradient-to-br from-amber-700 to-amber-500 text-white font-semibold text-sm shadow-lg shadow-amber-700/22 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-amber-700/28 transition-all"
            >
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

// import React, { useState } from 'react';


// // Header Component

// const Header = ({ setShowBookingForm }) => {
//   return (
//     <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
//       <div className="max-w-7xl mx-auto px-5">
//         <div className="flex items-center justify-between py-5 gap-4">
//           <a href="#home" className="flex items-baseline gap-2.5 no-underline">
//             <div className="font-serif font-bold text-2xl tracking-wide">RARABELLEZA</div>
//             <div className="text-xs text-amber-700 border-l border-gray-200 pl-2.5">Luxury Beauty</div>
//           </a>

//           <div className="flex gap-2.5 items-center">
//             <button className="px-4 py-3 rounded-full border border-amber-600/55 bg-transparent text-amber-700 font-semibold text-sm hover:bg-amber-600/8 transition-all">
//               Shop
//             </button>
//             <button 
//               onClick={() => setShowBookingForm(true)}
//               className="px-4 py-3 rounded-full border-none bg-gradient-to-br from-amber-700 to-amber-500 text-white font-semibold text-sm shadow-lg shadow-amber-700/22 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-amber-700/28 transition-all"
//             >
//               Book Appointment
//             </button>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };
// // const Header = ({ setShowBookingForm }) => {
// //   return (
// //     <header style={styles.header}>
// //       <div style={styles.container}>
// //         <div style={styles.nav}>
// //           <a style={styles.brand} href="#home">
// //             <div style={styles.logo}>RARABELLEZA</div>
// //             <div style={styles.tag}>Luxury Beauty</div>
// //           </a>

// //           <div style={styles.navCta}>
// //             <button style={styles.btnOutline}>Shop</button>
// //             <button style={styles.btnPrimary} onClick={() => setShowBookingForm(true)}>
// //               Book Appointment
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //     </header>
// //   );
// // };

// export default Header;  