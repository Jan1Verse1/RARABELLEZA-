import React, { useState } from 'react';

const BOT_RESPONSES = [
  {
    keywords: ['price', 'pricing', 'cost', 'how much', 'rate'],
    reply: 'Check out our full service pricing here!',
    link: { text: 'View Services & Pricing', href: '/#book' },
  },
  {
    keywords: ['book', 'appointment', 'schedule'],
    reply: 'You can book an appointment directly on our site!',
    link: { text: 'Book Now', href: '/#book' },
  },
  {
    keywords: ['bridal', 'wedding', 'bride'],
    reply: 'For bridal bookings, please email us directly at rarabellezaartistry@gmail.com with your event date and details.',
  },
  {
    keywords: ['location', 'located', 'where', 'address'],
    reply: 'We operate online! You can book your appointment through our website and we\'ll sort out the details.',
    link: { text: 'Book Online', href: '/#book' },
  },
  {
    keywords: ['wig', 'wigs', 'sell', 'shop', 'product', 'hair'],
    reply: 'Browse our premium wig and beauty collections in our shop!',
    link: { text: 'Shop Collection', href: '/shop' },
  },
  {
    keywords: ['deposit'],
    reply: 'Yes, a non-refundable deposit is required to secure your appointment.',
  },
  {
    keywords: ['card', 'payment', 'pay', 'debit', 'credit'],
    reply: 'Yes, we accept both debit and credit card payments.',
  },
  {
    keywords: ['shipping', 'delivery', 'deliver'],
    reply: 'Shipping typically takes 3–7 business days.',
  },
  {
    keywords: ['reschedule', 'cancel', 'change'],
    reply: '24-hour notice is required for rescheduling or cancellations.',
  },
];

function getBotReply(text) {
  const lower = text.toLowerCase();
  for (const entry of BOT_RESPONSES) {
    if (entry.keywords.some((kw) => lower.includes(kw))) {
      return entry;
    }
  }
  return null;
}

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Welcome 💫 How can we help today?' },
  ]);
  const [awaitingContact, setAwaitingContact] = useState(false);
  const [contactStep, setContactStep] = useState(null); // 'name' | 'email'
  const [contactName, setContactName] = useState('');

  const addMessages = (...msgs) => {
    setMessages((prev) => [...prev, ...msgs]);
  };

  const handleQuickReply = (text) => {
    const match = getBotReply(text);
    const botMsg = match
      ? { from: 'bot', text: match.reply, link: match.link }
      : { from: 'bot', text };
    addMessages({ from: 'user', text }, botMsg);
  };

  const handleSend = () => {
    const trimmed = message.trim();
    if (!trimmed) return;
    setMessage('');

    if (contactStep === 'name') {
      setContactName(trimmed);
      setContactStep('email');
      addMessages(
        { from: 'user', text: trimmed },
        { from: 'bot', text: `Thanks ${trimmed}! Now please enter your email address.` }
      );
      return;
    }

    if (contactStep === 'email') {
      setContactStep(null);
      setAwaitingContact(false);
      addMessages(
        { from: 'user', text: trimmed },
        { from: 'bot', text: `Thank you ${contactName}! We've noted your email (${trimmed}) and will get back to you shortly.` }
      );
      return;
    }

    const match = getBotReply(trimmed);
    if (match) {
      addMessages(
        { from: 'user', text: trimmed },
        { from: 'bot', text: match.reply, link: match.link }
      );
    } else {
      setAwaitingContact(true);
      setContactStep('name');
      addMessages(
        { from: 'user', text: trimmed },
        { from: 'bot', text: "I'm not sure about that one. Please leave your name and we'll get back to you shortly." }
      );
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="fixed right-4.5 bottom-4.5 z-20">
      {isOpen && (
        <div className="w-80 bg-white rounded-2xl border border-amber-600/25 shadow-xl overflow-hidden mb-2.5 flex flex-col" style={{ maxHeight: '28rem' }}>
          <div className="p-3.5 bg-gradient-to-br from-amber-700/10 to-amber-500/12 border-b border-amber-600/18 flex items-center justify-between gap-2.5 shrink-0">
            <strong className="font-serif">RARABELLEZA Support</strong>
            <button
              onClick={() => setIsOpen(false)}
              className="px-3 py-2 rounded-full border border-amber-600/55 bg-transparent text-amber-700 text-xs cursor-pointer"
            >
              Close
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-3.5 space-y-2">
            {messages.map((msg, idx) => (
              <div key={idx} className={msg.from === 'user' ? 'flex justify-end' : ''}>
                <div
                  className={
                    msg.from === 'user'
                      ? 'bg-amber-600 text-white p-2.5 px-3 rounded-2xl text-xs max-w-[80%]'
                      : 'bg-amber-700/8 border border-amber-600/18 p-2.5 px-3 rounded-2xl text-gray-800 text-xs max-w-[80%]'
                  }
                >
                  {msg.text}
                  {msg.link && (
                    <a
                      href={msg.link.href}
                      className="block mt-1.5 text-amber-700 underline font-semibold text-xs"
                    >
                      {msg.link.text} →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {!awaitingContact && (
            <div className="px-3.5 pb-2 flex flex-wrap gap-2 shrink-0">
              <button
                onClick={() => handleQuickReply('Book Appointment')}
                className="text-xs px-2.5 py-2 rounded-full border border-amber-600/25 bg-white text-amber-700 cursor-pointer hover:bg-amber-700/8"
              >
                Book Appointment
              </button>
              <button
                onClick={() => handleQuickReply('View Services & Pricing')}
                className="text-xs px-2.5 py-2 rounded-full border border-amber-600/25 bg-white text-amber-700 cursor-pointer hover:bg-amber-700/8"
              >
                View Services
              </button>
              <button
                onClick={() => handleQuickReply('What wigs do you sell?')}
                className="text-xs px-2.5 py-2 rounded-full border border-amber-600/25 bg-white text-amber-700 cursor-pointer hover:bg-amber-700/8"
              >
                Shop Products
              </button>
              <button
                onClick={() => handleQuickReply('Bridal Booking')}
                className="text-xs px-2.5 py-2 rounded-full border border-amber-600/25 bg-white text-amber-700 cursor-pointer hover:bg-amber-700/8"
              >
                Bridal Booking
              </button>
            </div>
          )}

          <div className="px-3.5 pb-3.5 flex gap-2 shrink-0">
            <input
              placeholder={contactStep === 'name' ? 'Your name...' : contactStep === 'email' ? 'Your email...' : 'Type a message...'}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 p-2.5 px-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-amber-600"
            />
            <button
              onClick={handleSend}
              className="p-2.5 px-3 rounded-xl border border-amber-600/35 bg-amber-700/10 text-amber-700 font-bold cursor-pointer"
            >
              Send
            </button>
          </div>
        </div>
      )}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full border border-amber-600/35 bg-gradient-to-br from-amber-700 to-amber-500 text-white shadow-lg shadow-amber-700/25 cursor-pointer grid place-items-center"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M4 5.8C4 4.8 4.8 4 5.8 4h12.4C19.2 4 20 4.8 20 5.8v8.6c0 1-.8 1.8-1.8 1.8H9l-4.2 3v-3H5.8C4.8 16.2 4 15.4 4 14.4V5.8Z"
            fill="white"
            opacity=".95"
          />
        </svg>
      </button>
    </div>
  );
};

export default ChatWidget;
