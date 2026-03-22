// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/header';
import Footer from './Components/footer';
import ChatWidget from './Components/chat';
import BookingForm from './Components/bookingForm';
import LandingPage from './Pages/LandingPage';
import ShopPage from './Pages/Shop';
import ContactPage from './Pages/Contact';

const App = () => {
  const [showBookingForm, setShowBookingForm] = useState(false);

  return (
    <Router>
      <div className="font-sans leading-relaxed text-gray-900 bg-white">
        <Header setShowBookingForm={setShowBookingForm} />
        
        <Routes>
          <Route 
            path="/" 
            element={<LandingPage setShowBookingForm={setShowBookingForm} />} 
          />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>

        <Footer />
        <ChatWidget />
        <BookingForm showForm={showBookingForm} onClose={() => setShowBookingForm(false)} />
      </div>
    </Router>
  );
};

export default App;

// import React, { useState } from 'react';
// import Header from './components/header';
// import Hero from './components/hero';
// import ServiceCard from './components/serviceCard';
// import ProductCard from './components/productCard';
// import Testimonial from './components/testimonials';
// import Footer from './components/footer';
// import ChatWidget from './components/chat';
// import BookingForm from './components/bookingForm';

// // ==================== MAIN APP ====================


// const App = () => {
//   const [showBookingForm, setShowBookingForm] = useState(false);

//   const services = [
//     {
//       title: 'Wig Installs',
//       description: 'Frontal • Closure • Leave Out',
//       price: 'From $100',
//       category: 'Hair Appointments',
//     },
//     {
//       title: 'Glam Appointments',
//       description: 'Natural • Full Face • Birthday',
//       price: 'From $60',
//       category: 'Makeup',
//     },
//     {
//       title: 'Microshading',
//       description: 'New • Touch Up',
//       price: 'From $150',  
//       category: 'Ombré Brows',
//     },
//   ];

//   const products = [
//     { title: 'Raw Filipino Straight', price: 250, status: 'In stock' },
//     { title: 'Raw Filipino Wavy', price: 275, status: 'In stock' },
//     { title: 'Lipgloss', price: 18, status: 'New' },
//     { title: 'Makeup Brushes', price: 45, status: 'Best seller' },
//   ];

//   const testimonials = [
//     {
//       text: 'The service was flawless—clean, calm, and luxury from start to finish.',
//       author: 'Sarah M.',
//       rating: '★★★★★',
//     },
//     {
//       text: 'My install was perfect. I felt confident and expensive.',
//       author: 'Jasmine T.',
//       rating: '★★★★★',
//     },
//     {
//       text: 'Makeup was exactly what I wanted—soft glam, premium finish.',
//       author: 'Nicole R.',
//       rating: '★★★★★',
//     },
//   ];

//   return (
//     <div style={styles.app}>
//       <Header setShowBookingForm={setShowBookingForm} />

//       <Hero onBookClick={() => setShowBookingForm(true)} />

//       {/* Services Section */}
//       <section id="book" style={styles.section}>
//         <div style={styles.container}>
//           <div style={styles.sectionHead}>
//             <div>
//               <h2 style={styles.h2}>Book Services</h2>
//               <div style={styles.muted}>Hair installs • Makeup • Ombré brow microshading</div>
//             </div>
//           </div>
//           <div style={styles.grid3}>
//             {services.map((service, idx) => (
//               <ServiceCard
//                 key={idx}
//                 {...service}
//                 onBook={() => setShowBookingForm(true)}
//               />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Shop Preview */}
//       <section id="shop" style={styles.strip}>
//         <div style={styles.container}>
//           <div style={styles.stripInner}>
//             <div>
//               <strong style={styles.stripStrong}>Shop Premium Collections</strong>
//               <div style={styles.muted}>
//                 Raw Filipino • Bone Straight • Curly • Brushes • Lipgloss • Gems
//               </div>
//             </div>
//             <button style={styles.btnPrimary}>Go to Shop</button>
//           </div>
//         </div>
//       </section>

//       {/* Products */}
//       <section style={styles.section}>
//         <div style={styles.container}>
//           <div style={styles.sectionHead}>
//             <div>
//               <h2 style={styles.h2}>Best Sellers</h2>
//               <div style={styles.muted}>Premium wigs & makeup products</div>
//             </div>
//           </div>
//           <div style={styles.grid4}>
//             {products.map((product, idx) => (
//               <ProductCard key={idx} {...product} />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Testimonials */}
//       <section style={styles.section}>
//         <div style={styles.container}>
//           <div style={styles.sectionHead}>
//             <div>
//               <h2 style={styles.h2}>Client Reviews</h2>
//               <div style={styles.muted}>What our clients say</div>
//             </div>
//           </div>
//           <div style={styles.testimonials}>
//             {testimonials.map((testimonial, idx) => (
//               <Testimonial key={idx} {...testimonial} />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* About */}
//       <section id="about" style={styles.section}>
//         <div style={styles.container}>
//           <div style={styles.sectionHead}>
//             <div>
//               <h2 style={styles.h2}>About RARABELLEZA</h2>
//               <div style={styles.muted}>Luxury beauty services + curated products.</div>
//             </div>
//           </div>
//           <div style={styles.card}>
//             <div style={styles.cardBody}>
//               <p style={{ margin: 0 }}>
//                 RARABELLEZA is built for confident women who love clean luxury. Book appointments
//                 online and shop premium wigs and beauty essentials.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Contact */}
//       <section id="contact" style={styles.section}>
//         <div style={styles.container}>
//           <div style={styles.sectionHead}>
//             <div>
//               <h2 style={styles.h2}>Contact</h2>
//               <div style={styles.muted}>For Bridal, collaborations, or support.</div>
//             </div>
//           </div>
//           <div style={styles.card}>
//             <div style={styles.cardBody}>
//               <p style={{ margin: '0 0 10px' }}>
//                 Email:{' '}
//                 <a href="mailto:rarabellezaartistry@gmail.com" style={styles.emailLink}>
//                   rarabellezaartistry@gmail.com
//                 </a>
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       <Footer />
//       <ChatWidget />
//       <BookingForm showForm={showBookingForm} onClose={() => setShowBookingForm(false)} />
//     </div>
//   );
// };


// export default App;