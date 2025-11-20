const photos = [
  'https://images.unsplash.com/photo-1520974735194-6cbaf0bff81f?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1509635022757-6f44869f18a1?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1548883354-9477597b07bf?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1490367532201-b9bc1dc483f6?q=80&w=1200&auto=format&fit=crop',
]

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-[#0c1221]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-serif text-white mb-10">Lookbook</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {photos.map((src, i) => (
            <div key={i} className="relative overflow-hidden rounded-lg">
              <img src={src} alt="vintage" className="w-full h-48 md:h-64 object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
