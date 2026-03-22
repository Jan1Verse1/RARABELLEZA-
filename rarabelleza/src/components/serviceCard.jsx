import React,  { useState }  from 'react';

// Service Card Component
const ServiceCard = ({ title, description, price, image, category, onBook }) => {
  return (
    <article className="bg-white border border-gray-100 rounded-2xl shadow-md hover:-translate-y-0.5 hover:shadow-xl hover:border-amber-600/25 transition-all overflow-hidden">
      {/* Image Section */}
      <div className="aspect-[4/3] bg-gradient-to-b from-amber-700/8 to-transparent border-b border-gray-100 overflow-hidden">
        {image ? (
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-amber-700/65 font-semibold tracking-widest uppercase text-xs">
            {category}
          </div>
        )}
      </div>
      
      {/* Content Section */}
      <div className="p-4">
        <h3 className="font-serif text-lg mb-1.5">{title}</h3>
        <div className="text-gray-600 text-xs">{description}</div>
        <div className="flex items-center justify-between gap-2.5 mt-3 text-xs text-gray-600">
          <span className="text-amber-700 font-bold tracking-wide">{price}</span>
          <button 
            onClick={onBook}
            className="px-3.5 py-2.5 rounded-full bg-gradient-to-br from-amber-700 to-amber-500 text-white font-semibold shadow-lg shadow-amber-700/22 hover:-translate-y-0.5 transition-all"
          >
            Book
          </button>
        </div>
      </div>
    </article>
  );
};

export default ServiceCard;

// import React, { useState } from 'react';


// // Service Card Component

// const ServiceCard = ({ title, description, price, image, category, onBook }) => {
//   return (
//     <article className="bg-white border border-gray-100 rounded-2xl shadow-md hover:-translate-y-0.5 hover:shadow-xl hover:border-amber-600/25 transition-all overflow-hidden">
//       <div className="aspect-[4/3] bg-gradient-to-b from-amber-700/8 to-transparent border-b border-gray-100 flex items-center justify-center text-amber-700/65 font-semibold tracking-widest uppercase text-xs">
//         {image}
//       </div>
//       <div className="p-4">
//         <h3 className="font-serif text-lg mb-1.5">{title}</h3>
//         <div className="text-gray-600 text-xs">{description}</div>
//         <div className="flex items-center justify-between gap-2.5 mt-3 text-xs text-gray-600">
//           <span className="text-amber-700 font-bold tracking-wide">{price}</span>
//           <button 
//             onClick={onBook}
//             className="px-3.5 py-2.5 rounded-full bg-gradient-to-br from-amber-700 to-amber-500 text-white font-semibold shadow-lg shadow-amber-700/22 hover:-translate-y-0.5 transition-all"
//           >
//             Book
//           </button>
//         </div>
//       </div>
//     </article>
//   );
// };;

// export default ServiceCard;