import { Menu } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-40 bg-slate-900/80 backdrop-blur border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-900 to-blue-900 ring-1 ring-slate-700 flex items-center justify-center text-amber-300 font-bold">Y</div>
          <span className="text-amber-200 tracking-widest text-sm">EST.</span>
          <span className="text-white font-serif text-xl tracking-[0.15em] group-hover:text-amber-200 transition-colors">YOURFAVCLUB</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#new" className="text-slate-200/90 hover:text-amber-200 transition-colors">New Arrivals</a>
          <a href="#brands" className="text-slate-200/90 hover:text-amber-200 transition-colors">Heritage Brands</a>
          <a href="#gallery" className="text-slate-200/90 hover:text-amber-200 transition-colors">Gallery</a>
          <a href="#contact" className="text-slate-200/90 hover:text-amber-200 transition-colors">Contact</a>
        </nav>

        <button className="md:hidden p-2 text-slate-200 hover:text-amber-200">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </header>
  )
}
