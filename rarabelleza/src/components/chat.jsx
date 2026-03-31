import React, { useState } from 'react';

const CHAT_OPTIONS = [
  {
    question: 'Price?',
    answer: 'Check out our full service pricing here!',
    link: { text: 'View Services & Pricing', href: '/#book' },
  },
  {
    question: 'How do I book?',
    answer: 'You can book an appointment directly on our site!',
    link: { text: 'Book Now', href: '/#book' },
  },
  {
    question: 'Do you do bridal?',
    answer: 'For bridal bookings, please email us directly at rarabellezaartistry@gmail.com with your event date and details.',
  },
  {
    question: 'Where are you located?',
    answer: 'We operate online! You can book your appointment through our website.',
    link: { text: 'Book Online', href: '/#book' },
  },
  {
    question: 'What wigs do you sell?',
    answer: 'Browse our premium wig and beauty collections in our shop!',
    link: { text: 'Shop Collection', href: '/shop' },
  },
  {
    question: 'Do you require a deposit?',
    answer: 'Yes, a non-refundable deposit secures your appointment.',
  },
  {
    question: 'Do you accept card payments?',
    answer: 'Yes, we accept debit and credit card.',
  },
  {
    question: 'How long does shipping take?',
    answer: '3–7 business days.',
  },
  {
    question: 'Can I reschedule?',
    answer: '24-hour notice required.',
  },
];

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Welcome 💫 How can we help today? Tap a question below.' },
  ]);
  const [showFallback, setShowFallback] = useState(false);
  const [contactStep, setContactStep] = useState(null);
  const [contactName, setContactName] = useState('');
  const [inputValue, setInputValue] = useState('');

  const handleQuestion = (option) => {
    setMessages((prev) => [
      ...prev,
      { from: 'user', text: option.question },
      { from: 'bot', text: option.answer, link: option.link },
    ]);
  };

  const handleOther = () => {
    setShowFallback(true);
    setContactStep('name');
    setMessages((prev) => [
      ...prev,
      { from: 'user', text: 'Other question' },
      { from: 'bot', text: 'Please leave your name and email and we\'ll respond shortly. Enter your name below.' },
    ]);
  };

  const handleContactSubmit = () => {
    const trimmed = inputValue.trim();
    if (!trimmed) return;
    setInputValue('');

    if (contactStep === 'name') {
      setContactName(trimmed);
      setContactStep('email');
      setMessages((prev) => [
        ...prev,
        { from: 'user', text: trimmed },
        { from: 'bot', text: `Thanks ${trimmed}! Now please enter your email address.` },
      ]);
    } else if (contactStep === 'email') {
      setContactStep(null);
      setShowFallback(false);
      setMessages((prev) => [
        ...prev,
        { from: 'user', text: trimmed },
        { from: 'bot', text: `Thank you ${contactName}! We've noted your email (${trimmed}) and will get back to you shortly.` },
      ]);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleContactSubmit();
  };

  return (
    <div className="fixed right-4.5 bottom-4.5 z-20">
      {isOpen && (
        <div className="w-80 bg-white rounded-2xl border border-amber-600/25 shadow-xl overflow-hidden mb-2.5 flex flex-col" style={{ maxHeight: '32rem' }}>
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

          {!showFallback && (
            <div className="px-3.5 pb-3.5 flex flex-wrap gap-2 shrink-0">
              {CHAT_OPTIONS.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleQuestion(option)}
                  className="text-xs px-2.5 py-2 rounded-full border border-amber-600/25 bg-white text-amber-700 cursor-pointer hover:bg-amber-700/8"
                >
                  {option.question}
                </button>
              ))}
              <button
                onClick={handleOther}
                className="text-xs px-2.5 py-2 rounded-full border border-amber-600/25 bg-amber-700/8 text-amber-700 cursor-pointer hover:bg-amber-700/15"
              >
                Other question
              </button>
            </div>
          )}

          {showFallback && contactStep && (
            <div className="px-3.5 pb-3.5 flex gap-2 shrink-0">
              <input
                placeholder={contactStep === 'name' ? 'Your name...' : 'Your email...'}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 p-2.5 px-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-amber-600"
              />
              <button
                onClick={handleContactSubmit}
                className="p-2.5 px-3 rounded-xl border border-amber-600/35 bg-amber-700/10 text-amber-700 font-bold cursor-pointer"
              >
                Send
              </button>
            </div>
          )}
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
