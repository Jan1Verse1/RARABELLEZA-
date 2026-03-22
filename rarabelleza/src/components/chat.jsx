import React, { useState } from 'react';


// Chat Widget Component
const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const handleQuickReply = reply => {
    alert(reply);
  };

  const handleSend = () => {
    if (message.trim()) {
      alert('Message received: ' + message);
      setMessage('');
    }
  };

  return (
    <div className="fixed right-4.5 bottom-4.5 z-20">
      {isOpen && (
        <div className="w-80 bg-white rounded-2xl border border-amber-600/25 shadow-xl overflow-hidden mb-2.5">
          <div className="p-3.5 bg-gradient-to-br from-amber-700/10 to-amber-500/12 border-b border-amber-600/18 flex items-center justify-between gap-2.5">
            <strong className="font-serif">RARABELLEZA Support</strong>
            <button 
              onClick={() => setIsOpen(false)}
              className="px-3 py-2 rounded-full border border-amber-600/55 bg-transparent text-amber-700 text-xs cursor-pointer"
            >
              Close
            </button>
          </div>
          <div className="p-3.5">
            <div className="bg-amber-700/8 border border-amber-600/18 p-2.5 px-3 rounded-2xl text-gray-800 text-xs mb-2.5">
              Welcome 💫 How can we help today?
            </div>
            <div className="flex flex-wrap gap-2 mb-2.5">
              <button
                onClick={() => handleQuickReply('You can book in the Book Appointment section.')}
                className="text-xs px-2.5 py-2 rounded-full border border-amber-600/25 bg-white text-amber-700 cursor-pointer hover:bg-amber-700/8"
              >
                Book Appointment
              </button>
              <button
                onClick={() => handleQuickReply('Hair, Makeup & Ombré Brows available. Bridal by email.')}
                className="text-xs px-2.5 py-2 rounded-full border border-amber-600/25 bg-white text-amber-700 cursor-pointer hover:bg-amber-700/8"
              >
                View Services
              </button>
              <button
                onClick={() => handleQuickReply('Shop wigs & makeup in the Shop section.')}
                className="text-xs px-2.5 py-2 rounded-full border border-amber-600/25 bg-white text-amber-700 cursor-pointer hover:bg-amber-700/8"
              >
                Shop Products
              </button>
              <button
                onClick={() => handleQuickReply('Bridal: rarabellezaartistry@gmail.com')}
                className="text-xs px-2.5 py-2 rounded-full border border-amber-600/25 bg-white text-amber-700 cursor-pointer hover:bg-amber-700/8"
              >
                Bridal Booking
              </button>
            </div>
            <div className="flex gap-2">
              <input
                placeholder="Type a message..."
                value={message}
                onChange={e => setMessage(e.target.value)}
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