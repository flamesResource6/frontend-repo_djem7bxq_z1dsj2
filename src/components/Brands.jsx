const brands = [
  { name: 'Ralph Lauren', img: 'https://images.unsplash.com/photo-1618517047922-c02f5ab38d80?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Tommy Hilfiger', img: 'https://images.unsplash.com/photo-1605731414532-6b26976cc153?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Calvin Klein', img: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Burberry', img: 'https://images.unsplash.com/photo-1520975922284-88d32f62b2d0?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Lacoste', img: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Armani', img: 'https://images.unsplash.com/photo-1520974722073-a50b92c2e43f?q=80&w=1200&auto=format&fit=crop' },
]

export default function Brands() {
  return (
    <section id="brands" className="py-20 bg-[#0c1221]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif text-white">Heritage Brands</h2>
            <p className="text-slate-300/80 mt-2">Staples of the old-money wardrobe. Carefully sourced, gently used.</p>
          </div>
          <a href="#gallery" className="text-amber-200 hover:text-amber-300">See all</a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {brands.map((b) => (
            <div key={b.name} className="group rounded-xl overflow-hidden ring-1 ring-slate-700 bg-[#0f1830]">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={b.img} alt={b.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
              </div>
              <div className="p-4 flex items-center justify-between">
                <h3 className="text-white font-medium">{b.name}</h3>
                <span className="text-amber-200 text-xs tracking-widest">USED • LIKE NEW</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
