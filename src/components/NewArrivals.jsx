const items = [
  {
    brand: 'Ralph Lauren',
    title: 'Cable-Knit Wool Sweater',
    price: 95,
    img: 'https://images.unsplash.com/photo-1520975891764-60554b03b787?q=80&w=1200&auto=format&fit=crop',
    color: 'Navy',
  },
  {
    brand: 'Tommy Hilfiger',
    title: 'Heritage Flag Crewneck',
    price: 80,
    img: 'https://images.unsplash.com/photo-1520975682035-7cde8b4f37d4?q=80&w=1200&auto=format&fit=crop',
    color: 'Cream',
  },
  {
    brand: 'Calvin Klein',
    title: 'Minimal Denim Jacket',
    price: 110,
    img: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop',
    color: 'Beige',
  },
]

export default function NewArrivals() {
  return (
    <section id="new" className="py-20 bg-[#0b1220]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif text-white">New Arrivals</h2>
            <p className="text-slate-300/80 mt-2">Freshly sourced. Curated weekly. Each piece authenticated and cleaned.</p>
          </div>
          <a href="#contact" className="text-amber-200 hover:text-amber-300">Request a piece</a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <article key={item.title} className="group overflow-hidden rounded-xl bg-[#0f1830] ring-1 ring-slate-700">
              <div className="aspect-[4/5] overflow-hidden">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <span className="text-amber-200 text-xs tracking-widest">{item.brand}</span>
                  <span className="text-slate-300 text-xs">{item.color}</span>
                </div>
                <h3 className="mt-2 text-white font-medium">{item.title}</h3>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-amber-200 font-semibold">${item.price}</span>
                  <button className="px-3 py-1.5 rounded-md border border-slate-700 text-slate-200 hover:border-amber-300 hover:text-amber-200 text-sm">Inquire</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
