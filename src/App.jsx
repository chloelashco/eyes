import React from 'react';
import closeup from './images/lash-closeup.jpg';
import fullface from './images/lash-fullface.jpg';

export default function App() {
  return (
    <main className="text-white bg-black min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">Chloe Lash Co.</h1>
      <p className="text-lg mb-6">Effortless pretty. Zero drama.</p>
      <div className="space-x-4">
        <a href="https://chloelashco.square.site" className="bg-pink-500 text-white px-4 py-2 rounded">Book Now</a>
        <a href="tel:8014206188" className="bg-white text-black px-4 py-2 rounded">Text / Call</a>
        <a href="https://venmo.com/u/Chloe-Dilley" target="_blank" rel="noopener noreferrer" className="bg-pink-700 text-white px-4 py-2 rounded">Pay / Tip on Venmo</a>
      </div>
    </main>
  );
}
