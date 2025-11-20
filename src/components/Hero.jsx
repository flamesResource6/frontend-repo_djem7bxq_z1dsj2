export default function Hero() {
  return (
    <section className="relative pt-28 pb-20 overflow-hidden bg-gradient-to-br from-[#0b1220] via-[#0e1526] to-[#0b1220]">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#14203a] blur-3xl opacity-50" />
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-[#1b2a4b] blur-3xl opacity-40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.05),transparent_60%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-amber-200/80 tracking-[0.35em] text-xs uppercase mb-5">Vintage • Curated • Like New</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white leading-tight">
              YourFavClub
              <span className="block text-2xl sm:text-3xl text-amber-200/90 mt-3 tracking-wide">Old Money Vintage</span>
            </h1>
            <p className="mt-6 text-slate-300/90 leading-relaxed max-w-xl">
              Handpicked classics from iconic houses — Ralph Lauren, Tommy Hilfiger, Calvin Klein and more. Timeless navy, cream and camel palettes. Every piece is pre-loved and preserved, ready for its next chapter.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <a href="#new" className="px-6 py-3 rounded-md bg-amber-200 text-slate-900 font-medium hover:bg-amber-300 transition-colors">Shop New Arrivals</a>
              <a href="#brands" className="px-6 py-3 rounded-md border border-slate-700 text-slate-200 hover:border-amber-300 hover:text-amber-200 transition-colors">Explore Brands</a>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] w-full max-w-md ml-auto rounded-2xl overflow-hidden ring-1 ring-slate-700 shadow-2xl shadow-black/40">
              <img
                src="https://images.unsplash.com/photo-1516826957135-700dedea698c?q=80&w=1200&auto=format&fit=crop"
                alt="Vintage wardrobe"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-[#0f1830] border border-slate-700 rounded-xl p-4 text-slate-200/90 backdrop-blur">
              <p className="text-xs tracking-widest">CURATED | AUTHENTICATED | LIKE NEW</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
