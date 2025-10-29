import React from "react";
import fullface from "./images/lash-fullface.jpg";

export default function LinkPage() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center py-10">
      <img src={fullface} alt="Chloe Lash Co." className="h-24 w-24 rounded-full mb-4" />
      <h1 className="text-2xl font-bold mb-2">Chloe Lash Co.</h1>
      <p className="text-sm mb-6">Lashes • Brows • Confidence</p>
      <a href="https://chloelashco.square.site" className="bg-white text-black px-4 py-2 rounded mb-3">Book Now</a>
      <a href="tel:8014206188" className="border border-white px-4 py-2 rounded mb-3">Text / Call</a>
      <a href="https://venmo.com/u/Chloe-Dilley" target="_blank" rel="noopener noreferrer" className="bg-pink-700 text-white px-4 py-2 rounded">Pay / Tip on Venmo</a>
    </main>
  );
}
