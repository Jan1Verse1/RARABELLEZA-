// src/pages/ContactPage.jsx
import React, { useState } from 'react';
import { apiFetch } from '../api';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState(null); // 'success' | 'error'

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await apiFetch('/api/contact-messages', {
        method: 'POST',
        body: JSON.stringify({ data: formData }),
      });
      if (!res.ok) throw new Error('Failed to send message');
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus(null), 3000);
    } catch (err) {
      console.error(err);
      setStatus('error');
      setTimeout(() => setStatus(null), 3000);
    }
  };

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-5">
        {/* Page Header */}
        <div className="mb-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl mb-3">Get in Touch</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Have questions? Want to book bridal services or collaborate? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white border border-gray-100 rounded-2xl shadow-md p-6">
            <h2 className="font-serif text-2xl mb-4">Send us a Message</h2>
            
            {status === 'success' && (
              <div className="mb-4 p-3 rounded-xl bg-green-50 border border-green-200 text-green-800 text-sm text-center">
                Message sent successfully!
              </div>
            )}
            {status === 'error' && (
              <div className="mb-4 p-3 rounded-xl bg-red-50 border border-red-200 text-red-800 text-sm text-center">
                Something went wrong. Please try again.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  className="w-full p-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-amber-600"
                  placeholder="Jane Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  className="w-full p-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-amber-600"
                  placeholder="jane@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Subject *
                </label>
                <select
                  required
                  value={formData.subject}
                  onChange={(e) => handleChange('subject', e.target.value)}
                  className="w-full p-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-amber-600"
                >
                  <option value="">Select a subject</option>
                  <option value="booking">Service Booking Question</option>
                  <option value="bridal">Bridal Makeup Inquiry</option>
                  <option value="shop">Shop/Product Question</option>
                  <option value="collaboration">Collaboration</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  required
                  rows="5"
                  value={formData.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  className="w-full p-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-amber-600"
                  placeholder="Tell us how we can help you..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 rounded-full bg-gradient-to-br from-amber-700 to-amber-500 text-white font-semibold text-sm shadow-lg shadow-amber-700/22 hover:-translate-y-0.5 transition-all"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Email Card */}
            <div className="bg-white border border-gray-100 rounded-2xl shadow-md p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-amber-700/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-serif text-xl mb-2">Email</h3>
                  <p className="text-gray-600 mb-2">For all inquiries and bridal bookings:</p>
                  <a
                    href="mailto:rarabellezaartistry@gmail.com"
                    className="text-amber-700 font-bold hover:underline"
                  >
                    rarabellezaartistry@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Hours Card */}
            <div className="bg-white border border-gray-100 rounded-2xl shadow-md p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-amber-700/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-serif text-xl mb-2">Business Hours</h3>
                  <div className="space-y-1 text-gray-600 text-sm">
                    <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
                    <p>Saturday: 10:00 AM - 6:00 PM</p>
                    <p>Sunday: By Appointment Only</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Card */}
            <div className="bg-white border border-gray-100 rounded-2xl shadow-md p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-amber-700/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-amber-700" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-serif text-xl mb-2">Follow Us</h3>
                  <p className="text-gray-600 mb-3">Stay updated on our latest work and offerings</p>
                  <div className="flex gap-3">
                    <a href="#" className="text-amber-700 hover:text-amber-800">Instagram</a>
                    <span className="text-gray-300">•</span>
                    <a href="#" className="text-amber-700 hover:text-amber-800">Facebook</a>
                    <span className="text-gray-300">•</span>
                    <a href="#" className="text-amber-700 hover:text-amber-800">TikTok</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;