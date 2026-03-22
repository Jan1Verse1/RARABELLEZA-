import React, { useState } from 'react';

// Booking Form Component
const BookingForm = ({ showForm, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    notes: '',
  });

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = () => {
    console.log('Booking submitted:', formData);
    alert('Booking request submitted! (Demo - connect to backend)');
    onClose();
  };

  if (!showForm) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-5">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-auto shadow-xl">
        <div className="p-5 border-b border-gray-100 flex justify-between items-center">
          <h3 className="font-serif text-lg mb-0">Book Your Appointment</h3>
          <button 
            onClick={onClose}
            className="text-2xl text-amber-700 bg-transparent border-none cursor-pointer hover:opacity-70"
          >
            ✕
          </button>
        </div>
        
        <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-3">
          <input
            placeholder="Full Name *"
            value={formData.name}
            onChange={(e) => handleChange('name', e.target.value)}
            className="p-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-amber-600"
          />
          <input
            type="email"
            placeholder="Email *"
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
            className="p-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-amber-600"
          />
          <input
            placeholder="Phone"
            value={formData.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
            className="p-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-amber-600"
          />
          <select
            value={formData.service}
            onChange={(e) => handleChange('service', e.target.value)}
            className="p-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-amber-600"
          >
            <option value="">Select Service *</option>
            <option>Frontal Wig Install — $150</option>
            <option>Closure Wig Install — $120</option>
            <option>Leave Out Install — $100</option>
            <option>Natural Glam (30 min) — $60</option>
            <option>Full Face Beat (1hr 30min) — $120</option>
            <option>Birthday Glam — $150</option>
            <option>New Appointment — $300</option>
            <option>Touch Up — $150</option>
          </select>
          <input
            type="date"
            value={formData.date}
            onChange={(e) => handleChange('date', e.target.value)}
            className="p-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-amber-600"
          />
          <input
            type="time"
            value={formData.time}
            onChange={(e) => handleChange('time', e.target.value)}
            className="p-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-amber-600"
          />
          <textarea
            placeholder="Notes (reference style, allergies, wig details…)"
            rows="3"
            value={formData.notes}
            onChange={(e) => handleChange('notes', e.target.value)}
            className="md:col-span-2 p-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-amber-600"
          />
          <div className="md:col-span-2 flex gap-3 flex-wrap">
            <button 
              onClick={handleSubmit}
              className="px-4 py-3 rounded-full bg-gradient-to-br from-amber-700 to-amber-500 text-white font-semibold text-sm shadow-lg shadow-amber-700/22"
            >
              Submit Booking Request
            </button>
            <button 
              onClick={onClose}
              className="px-4 py-3 rounded-full border border-amber-600/55 bg-transparent text-amber-700 font-semibold text-sm"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;



