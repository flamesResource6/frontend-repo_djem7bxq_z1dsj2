import Navbar from './components/Navbar'
import Hero from './components/Hero'
import NewArrivals from './components/NewArrivals'
import Brands from './components/Brands'
import Gallery from './components/Gallery'

function App() {
  return (
    <div className="min-h-screen bg-[#0a1020]">
      <Navbar />
      <main>
        <Hero />
        <NewArrivals />
        <Brands />
        <Gallery />

        <section id="contact" className="py-20 bg-[#0b1220]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-10 items-start">
              <div>
                <h2 className="text-3xl md:text-4xl font-serif text-white">Inquire or Sell</h2>
                <p className="text-slate-300/80 mt-3 max-w-md">Looking for a specific Ralph Lauren blazer in navy? Have a Tommy piece in like-new condition to consign? Send us a note — we respond within 24 hours.</p>
                <ul className="mt-6 space-y-2 text-slate-300/80">
                  <li><span className="text-amber-200">•</span> Condition: Used — Like New</li>
                  <li><span className="text-amber-200">•</span> Palette: Navy, Cream, Camel, Charcoal</li>
                  <li><span className="text-amber-200">•</span> Brands: Ralph Lauren, Tommy Hilfiger, Calvin Klein, Burberry, Lacoste, Armani</li>
                </ul>
              </div>

              <form className="bg-[#0f1830] rounded-xl ring-1 ring-slate-700 p-6 space-y-4">
                <div>
                  <label className="block text-slate-200 text-sm mb-1">Name</label>
                  <input type="text" className="w-full bg-[#0c142a] border border-slate-700 rounded-md px-3 py-2 text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-300/30 focus:border-amber-300/50" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-slate-200 text-sm mb-1">Email</label>
                  <input type="email" className="w-full bg-[#0c142a] border border-slate-700 rounded-md px-3 py-2 text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-300/30 focus:border-amber-300/50" placeholder="you@example.com" />
                </div>
                <div>
                  <label className="block text-slate-200 text-sm mb-1">Message</label>
                  <textarea rows="4" className="w-full bg-[#0c142a] border border-slate-700 rounded-md px-3 py-2 text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-300/30 focus:border-amber-300/50" placeholder="What are you looking for?" />
                </div>
                <button type="button" className="w-full bg-amber-200 hover:bg-amber-300 text-slate-900 font-medium py-2.5 rounded-md transition-colors">Send</button>
                <p className="text-xs text-slate-400 text-center">YourFavClub — Curated vintage, used like new.</p>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-800 bg-[#0a1020]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">© {new Date().getFullYear()} YourFavClub. All rights reserved.</p>
          <nav className="flex items-center gap-6 text-sm">
            <a href="#brands" className="text-slate-400 hover:text-amber-200">Brands</a>
            <a href="#gallery" className="text-slate-400 hover:text-amber-200">Lookbook</a>
            <a href="#contact" className="text-slate-400 hover:text-amber-200">Contact</a>
          </nav>
        </div>
      </footer>
    </div>
  )
}

export default App
