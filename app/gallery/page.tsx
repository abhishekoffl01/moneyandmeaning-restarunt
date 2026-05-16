'use client'

const images = [
  { src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80', alt: 'Restaurant interior', size: 'large', label: 'Our Dining Room' },
  { src: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&q=80', alt: 'Donne Biryani', size: 'medium', label: 'Donne Chicken Biryani' },
  { src: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=600&q=80', alt: 'Chicken curry', size: 'medium', label: 'Kundapura Chicken' },
  { src: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=600&q=80', alt: 'Fish fry', size: 'medium', label: 'Mangalorean Fish Fry' },
  { src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80', alt: 'Ambiance', size: 'large', label: 'Evening Ambiance' },
  { src: 'https://images.unsplash.com/photo-1574484284002-952d92456975?w=600&q=80', alt: 'Mutton dish', size: 'medium', label: 'Mutton Saaru' },
  { src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80', alt: 'Bar area', size: 'medium', label: 'Our Bar' },
  { src: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=600&q=80', alt: 'Night dining', size: 'medium', label: 'Dinner Service' },
  { src: 'https://images.unsplash.com/photo-1481833761820-0509d3217039?w=600&q=80', alt: 'Table setting', size: 'medium', label: 'Table Setting' },
  { src: 'https://images.unsplash.com/photo-1604909052434-1d684dd6c96d?w=600&q=80', alt: 'Prawn dish', size: 'medium', label: 'Prawn Sukka' },
  { src: 'https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=800&q=80', alt: 'Private dining', size: 'large', label: 'Private Dining Area' },
  { src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80', alt: 'Filter coffee', size: 'medium', label: 'Filter Coffee' },
]

export default function GalleryPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-16 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1481833761820-0509d3217039?w=1400&q=70"
            alt="Gallery"
            className="w-full h-full object-cover"
            style={{ filter: 'brightness(0.2)' }}
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(26,15,10,0.6), rgba(26,15,10,0.95))' }} />
        </div>
        <div className="relative z-10">
          <p className="section-label mb-3">Visual Stories</p>
          <h1 className="section-title" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>Gallery</h1>
          <div className="divider max-w-xs mx-auto mt-4" />
          <p className="mt-4" style={{ color: 'rgba(245,230,200,0.6)', fontStyle: 'italic' }}>
            A feast for the eyes before the feast for the palate.
          </p>
        </div>
      </section>

      {/* Gallery grid */}
      <section className="py-16 px-6" style={{ background: 'var(--dark)' }}>
        <div className="max-w-7xl mx-auto">
          {/* Masonry-style grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {images.map((img, i) => (
              <div
                key={i}
                className="group relative overflow-hidden break-inside-avoid mb-4"
                style={{
                  border: '1px solid rgba(212,168,83,0.1)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.02)'
                  e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.5)'
                  e.currentTarget.style.zIndex = '10'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)'
                  e.currentTarget.style.boxShadow = 'none'
                  e.currentTarget.style.zIndex = '1'
                }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{
                    height: img.size === 'large' ? '350px' : '250px',
                  }}
                />
                {/* Overlay on hover */}
                <div
                  className="absolute inset-0 flex items-end p-5 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                  style={{ background: 'linear-gradient(to top, rgba(26,15,10,0.85) 0%, transparent 60%)' }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      color: 'var(--cream)',
                      fontSize: '1rem',
                      fontWeight: 600,
                    }}
                  >
                    {img.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram section */}
      <section className="py-16 px-6 text-center" style={{ background: 'var(--brown)' }}>
        <p className="section-label mb-3">Follow Our Story</p>
        <h2 className="section-title mb-4" style={{ fontSize: '2.5rem' }}>On Instagram</h2>
        <p style={{ color: 'rgba(245,230,200,0.6)', marginBottom: '2rem' }}>
          Follow us <span style={{ color: 'var(--amber)' }}>@moneyandmeaning</span> for daily updates, behind-the-scenes moments, and food that inspires.
        </p>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline"
        >
          Follow on Instagram
        </a>
      </section>
    </>
  )
}
