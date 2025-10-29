import React from 'react';
import closeup from './images/lash-closeup.jpg';
import fullface from './images/lash-fullface.jpg';
import venmoQR from './images/chloe_dilley_venmo_qr.png';

export default function App() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white flex flex-col font-sans">
      {/* NAV */}
      <header className="w-full border-b border-white/10 backdrop-blur bg-white/5 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center h-9 w-9 rounded-2xl bg-white/5 border border-white/20 p-1.5 shadow-[0_10px_40px_rgba(255,255,255,0.15)]">
              <span className="text-[10px] text-white/70 font-medium tracking-wide">LOGO</span>
            </div>
            <div className="leading-tight">
              <div className="text-sm font-semibold text-white">Chloe Lash Co.</div>
              <div className="text-[10px] text-white/60">Lashes • Brows • Confidence</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="hidden md:inline-block text-xs font-medium text-white/70 hover:text-white transition-colors">Services</button>
            <button className="hidden md:inline-block text-xs font-medium text-white/70 hover:text-white transition-colors">Gallery</button>
            <button className="hidden md:inline-block text-xs font-medium text-white/70 hover:text-white transition-colors">Policies</button>
            <a
              href="https://chloelashco.square.site"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-slate-900 text-xs font-semibold rounded-xl px-4 py-2 shadow-[0_20px_60px_rgba(255,255,255,0.5)] hover:shadow-[0_30px_80px_rgba(255,255,255,0.7)] transition-shadow"
            >
              Book Now
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-40 -left-40 h-80 w-80 bg-pink-400/20 blur-[120px] rounded-full" />
          <div className="absolute top-20 right-0 h-80 w-80 bg-purple-500/20 blur-[160px] rounded-full" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08)_0%,rgba(0,0,0,0)_70%)]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 py-20 lg:py-28 grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-[10px] font-medium text-white/70 px-3 py-1 rounded-full mb-6 shadow-inner shadow-white/10">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-pink-400 animate-pulse" />
              New clients welcome
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight leading-[1.1]">
              Effortless pretty.<br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-fuchsia-200 to-white">
                Zero drama.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-white/70 leading-relaxed mt-6 max-w-xl">
              Chloe Lash Co. specializes in clean, soft, wearable eyelash extensions
              and natural brow work — so you can wake up done. No mascara. No filter.
              Just you, but rude levels of pretty.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="https://chloelashco.square.site"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-slate-900 text-sm font-semibold rounded-xl px-5 py-3 shadow-[0_20px_60px_rgba(255,255,255,0.4)] hover:shadow-[0_30px_80px_rgba(255,255,255,0.6)] transition-shadow text-center"
              >
                Book Your Set
              </a>
              <a
                href="#gallery"
                className="bg-transparent border border-white/20 hover:border-white/40 text-white/90 text-sm font-semibold rounded-xl px-5 py-3 text-center"
              >
                See the Work
              </a>
            </div>

            <div className="mt-8 flex items-center gap-4 text-[11px] text-white/50">
              <div className="flex -space-x-2">
                <div className="h-7 w-7 rounded-full ring-2 ring-slate-900 bg-white/10 text-[10px] flex items-center justify-center font-semibold text-white/80">
                  ★5
                </div>
                <div className="h-7 w-7 rounded-full ring-2 ring-slate-900 bg-white/10 text-[10px] flex items-center justify-center font-semibold text-white/80">
                  ★5
                </div>
                <div className="h-7 w-7 rounded-full ring-2 ring-slate-900 bg-pink-400/10 border border-pink-300/40 text-[10px] flex items-center justify-center font-semibold text-pink-200">
                  +20
                </div>
              </div>
              <div>
                <div className="font-semibold text-white/80 leading-tight">100% 5★ client reviews</div>
                <div className="leading-tight">Clean. Gentle. Long retention.</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-tr from-pink-400/30 via-white/0 to-purple-500/30 rounded-3xl blur-xl opacity-40" />
            <div className="relative bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 shadow-[0_30px_120px_rgba(0,0,0,0.8)]">
              <div className="text-[10px] font-medium text-white/60 flex items-center gap-2 mb-4">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-pink-400 animate-pulse" />
                Fresh volume set
              </div>
              <div className="aspect-[4/3] w-full rounded-2xl border border-white/10 overflow-hidden shadow-inner shadow-black/60 bg-slate-800/50">
                <img src={fullface} alt="Full lash + brow set" className="w-full h-full object-cover" />
              </div>
              <div className="grid grid-cols-3 gap-4 text-center mt-6">
                <div>
                  <div className="text-xl font-semibold text-white">2+ wks</div>
                  <div className="text-[11px] text-white/60 leading-tight">before first fill (avg)</div>
                </div>
                <div>
                  <div className="text-xl font-semibold text-white">0</div>
                  <div className="text-[11px] text-white/60 leading-tight">stickies / clumps</div>
                </div>
                <div>
                  <div className="text-xl font-semibold text-white">100%</div>
                  <div className="text-[11px] text-white/60 leading-tight">custom mapped</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="relative py-16 px-4" id="gallery">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold text-pink-300 bg-pink-400/10 border border-pink-400/30 rounded-lg inline-block px-2 py-1">
              Recent work
            </div>
            <h2 className="text-white text-2xl sm:text-3xl font-semibold leading-tight mt-4">
              Real clients. No filters.
            </h2>
            <p className="text-white/60 text-sm sm:text-base leading-relaxed mt-3 max-w-lg">
              Every set is mapped to that client’s face, eye shape, and vibe. No extensions stuck together. No angry eyes. No crunchy brows.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-[0_30px_120px_rgba(0,0,0,0.8)]">
              <div className="aspect-[4/3] w-full overflow-hidden bg-slate-800/50">
                <img src={closeup} alt="Lash isolation closeup" className="w-full h-full object-cover" />
              </div>
              <div className="p-4 border-t border-white/10 text-xs text-white/70 leading-relaxed">
                Mega volume placement • clean isolation • zero stickies
              </div>
            </div>

            <div className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-[0_30px_120px_rgba(0,0,0,0.8)]">
              <div className="aspect-[4/3] w-full overflow-hidden bg-slate-800/50">
                <img src={fullface} alt="Full set + brow cleanup" className="w-full h-full object-cover" />
              </div>
              <div className="p-4 border-t border-white/10 text-xs text-white/70 leading-relaxed">
                Full set + brow cleanup • fluffy but still wearable
              </div>
            </div>

            <div className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-[0_30px_120px_rgba(0,0,0,0.8)] flex flex-col">
              <div className="relative aspect-[4/3] w-full bg-slate-800/50 flex items-center justify-center text-center p-6 overflow-hidden">
                <div className="text-white/80 text-sm font-semibold leading-tight max-w-[12rem]">
                  Short studio video / lash reveal coming soon
                </div>
                <div className="absolute bottom-3 right-3 bg-white/10 rounded-full border border-white/20 backdrop-blur px-2 py-1 text-[10px] font-medium text-white/80 flex items-center gap-1">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-pink-400" />
                  video
                </div>
              </div>
              <div className="p-4 border-t border-white/10 text-xs text-white/70 leading-relaxed">
                Watch Chloe work up close • prep, placement, final fluff
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-10 text-sm">
            <div className="text-white/60 leading-relaxed text-xs sm:text-[13px] max-w-md">
              See more fresh sets, healed brows, and before/afters on Instagram.
            </div>
            <a
              href="https://www.instagram.com/chloellashco"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl border border-white/20 hover:border-white/40 text-white/90 font-semibold px-4 py-2 text-xs sm:text-sm bg-white/5 hover:bg-white/10 transition-colors"
            >
              View Instagram ↗
            </a>
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="relative py-16 px-4">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-pink-500/20 via-pink-400/10 to-transparent border border-pink-400/30 rounded-3xl p-8 sm:p-10 shadow-[0_40px_160px_rgba(236,72,153,0.4)]">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="text-xs font-semibold text-pink-300 bg-pink-400/10 border border-pink-400/30 rounded-lg inline-block px-2 py-1">
                Ready to feel like "you" again?
              </div>
              <h3 className="text-white text-2xl font-semibold leading-tight mt-4">
                Book your appointment
                <span className="text-pink-300"> before my schedule closes.</span>
              </h3>
              <p className="text-white/70 text-sm leading-relaxed mt-4">
                Most regulars pre-book fills every 2-3 weeks. If you need evenings or weekends, grab a spot now.
              </p>
            </div>
            <div className="flex flex-col gap-3 text-sm items-center">
              <a
                href="https://chloelashco.square.site"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-slate-900 font-semibold rounded-xl px-5 py-3 w-full shadow-[0_20px_60px_rgba(255,255,255,0.4)] hover:shadow-[0_30px_80px_rgba(255,255,255,0.6)] transition-shadow text-center"
              >
                Book Now
              </a>
              <a
                href="tel:8014206188"
                className="bg-transparent border border-white/20 hover:border-white/40 text-white/90 font-semibold rounded-xl px-5 py-3 w-full text-center"
              >
                Text or Call: (801) 420-6188
              </a>
              <div className="flex flex-col items-center gap-2 mt-4">
                <div className="text-[11px] text-white/70">Want to tip Chloe or prepay?</div>
                <a
                  href="https://venmo.com/u/Chloe-Dilley"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2"
                >
                  <img src={venmoQR} alt="Venmo QR for Chloe Dilley" className="h-24 w-24 rounded-xl border border-white/10 shadow-lg" />
                  <span className="text-[11px] text-white/60">@Chloe-Dilley</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mt-auto border-t border-white/10 bg-black/40">
        <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-4 gap-8 text-sm text-white/60">
          <div className="md:col-span-2">
            <div className="text-white font-semibold text-base">Chloe Lash Co.</div>
            <div className="text-white/40 text-xs mt-1">14442 E Draper Pkwy, Draper, UT 84020</div>
            <p className="mt-4 leading-relaxed text-white/60 text-sm max-w-sm">
              Soft, clean, customized lash extensions and brows. Zero judgment, just good energy and good lighting.
            </p>
          </div>
          <div>
            <div className="text-white font-semibold text-sm mb-3">Services</div>
            <ul className="space-y-2">
              <li><a href="https://chloelashco.square.site" className="hover:text-white">Full Sets</a></li>
              <li><a href="https://chloelashco.square.site" className="hover:text-white">Fills</a></li>
              <li><a href="https://chloelashco.square.site" className="hover:text-white">Brow Lamination</a></li>
            </ul>
          </div>
          <div>
            <div className="text-white font-semibold text-sm mb-3">Info</div>
            <ul className="space-y-2">
              <li><a href="https://chloelashco.square.site" className="hover:text-white">Studio Policies</a></li>
              <li><a href="https://chloelashco.square.site" className="hover:text-white">Aftercare</a></li>
              <li><a href="https://chloelashco.square.site" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/5 py-6 text-[11px] text-white/40 text-center">
          © {new Date().getFullYear()} Chloe Lash Co. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
