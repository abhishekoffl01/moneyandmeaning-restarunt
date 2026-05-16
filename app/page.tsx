import Link from 'next/link'

// ─── Dish data ─────────────────────────────────────────────────────────────
const featuredDishes = [
  {
    name: 'Donne Chicken Biryani',
    desc: 'Slow-cooked in a donne leaf with spiced Karnataka masala, smoky and aromatic.',
    price: '₹320',
    tag: 'House Special',
    img: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&q=80',
  },
  {
    name: 'Kundapura Chicken',
    desc: 'Coastal Karnataka specialty with coconut paste, red chilli and curry leaves.',
    price: '₹280',
    tag: 'Coastal Classic',
    img: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=600&q=80',
  },
  {
    name: 'Mangalorean Fish Fry',
    desc: 'Fresh seer fish marinated in red chilli-turmeric paste, tawa-fried to perfection.',
    price: '₹380',
    tag: 'Chef\'s Pick',
    img: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=600&q=80',
  },
  {
    name: 'Mutton Ragi Mudde',
    desc: 'Hearty Malnad combination of ragi mudde with slow-simmered mutton saaru.',
    price: '₹340',
    tag: 'Malnad Heritage',
    img: 'https://images.unsplash.com/photo-1574484284002-952d92456975?w=600&q=80',
  },
]

const testimonials = [
  {
    name: 'Suresh Gowda',
    role: 'Food Blogger, Bengaluru',
    text: 'The Donne Biryani here is the closest thing to what my grandmother made in her village kitchen. Absolutely authentic and soul-satisfying.',
    stars: 5,
  },
  {
    name: 'Priya Nair',
    role: 'Regular Guest',
    text: 'Money & Meaning has redefined Karnataka non-veg dining for me. The Kundapura Chicken is unmatched in the entire city.',
    stars: 5,
  },
  {
    name: 'Karthik Rao',
    role: 'Chef & Restaurateur',
    text: 'As someone in the industry, I deeply appreciate the authenticity. The spice blends and cooking techniques are truly traditional.',
    stars: 5,
  },
]

const galleryImages = [
  'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80',
  'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80',
  'https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=600&q=80',
  'https://images.unsplash.com/photo-1481833761820-0509d3217039?w=600&q=80',
  'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80',
  'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=600&q=80',
]

// ─── Page ──────────────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&q=85"
            alt="Restaurant interior"
            className="w-full h-full object-cover"
            style={{ filter: 'brightness(0.35)' }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(135deg, rgba(26,15,10,0.7) 0%, rgba(45,24,16,0.5) 50%, rgba(26,15,10,0.8) 100%)',
            }}
          />
        </div>

        {/* Decorative border */}
        <div
          className="absolute inset-6 z-10 pointer-events-none hidden md:block"
          style={{ border: '1px solid rgba(212,168,83,0.25)' }}
        />

        {/* Content */}
        <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
          <p
            className="animate-fade-up section-label mb-6"
            style={{ opacity: 0, animationFillMode: 'forwards' }}
          >
            ✦ Est. 2020, Bengaluru ✦
          </p>
          <h1
            className="animate-fade-up delay-100 mb-6"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(3rem, 8vw, 7rem)',
              fontWeight: 900,
              lineHeight: 1.0,
              color: 'var(--ivory)',
              textShadow: '0 4px 30px rgba(0,0,0,0.5)',
              opacity: 0,
              animationFillMode: 'forwards',
            }}
          >
            Money
            <span style={{ display: 'block', color: 'var(--gold)' }}>&</span>
            Meaning
          </h1>
          <p
            className="animate-fade-up delay-200 mb-10"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(1rem, 2vw, 1.4rem)',
              color: 'rgba(245,230,200,0.8)',
              fontStyle: 'italic',
              letterSpacing: '0.05em',
              opacity: 0,
              animationFillMode: 'forwards',
            }}
          >
            Authentic Karnataka Flavours Served with Tradition
          </p>

          {/* Decorative line */}
          <div className="animate-fade-up delay-300 flex items-center justify-center gap-4 mb-10" style={{ opacity: 0, animationFillMode: 'forwards' }}>
            <div style={{ width: '60px', height: '1px', background: 'var(--gold)' }} />
            <span style={{ color: 'var(--gold)', fontSize: '1.2rem' }}>✦</span>
            <div style={{ width: '60px', height: '1px', background: 'var(--gold)' }} />
          </div>

          <div
            className="animate-fade-up delay-400 flex flex-wrap gap-4 justify-center"
            style={{ opacity: 0, animationFillMode: 'forwards' }}
          >
            <Link href="/reservation" className="btn-gold">Reserve a Table</Link>
            <Link href="/menu" className="btn-outline">Explore Menu</Link>
          </div>

          {/* Info bar */}
          <div
            className="animate-fade-up delay-500 flex flex-wrap justify-center gap-8 mt-14"
            style={{ opacity: 0, animationFillMode: 'forwards' }}
          >
            {[
              { label: 'Open Daily', value: '7 AM – 11:30 PM' },
              { label: 'Location', value: 'Church Street, Bengaluru' },
              { label: 'Reservations', value: '+91 98765 43210' },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <p className="text-xs tracking-widest uppercase mb-1" style={{ color: 'var(--amber)' }}>{item.label}</p>
                <p style={{ color: 'var(--cream)', fontSize: '0.95rem' }}>{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
          <span className="text-xs tracking-widest uppercase" style={{ color: 'rgba(212,168,83,0.6)' }}>Scroll</span>
          <div
            className="w-px h-12"
            style={{
              background: 'linear-gradient(to bottom, var(--gold), transparent)',
              animation: 'float 1.5s ease-in-out infinite',
            }}
          />
        </div>
      </section>

      {/* FEATURED DISHES */}
      <section className="py-24 px-6" style={{ background: 'var(--dark)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="section-label">From Our Kitchen</p>
            <h2 className="section-title mb-4">Signature Dishes</h2>
            <div className="divider max-w-xs mx-auto" />
            <p style={{ color: 'rgba(245,230,200,0.6)', maxWidth: '550px', margin: '1rem auto 0', fontSize: '1.05rem' }}>
              Each dish tells a story — of spice routes, coastal fishing villages, and generations of family recipes from Karnataka's diverse regions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredDishes.map((dish, i) => (
              <div
                key={dish.name}
                className="card-hover group"
                style={{
                  background: 'var(--brown)',
                  border: '1px solid rgba(212,168,83,0.15)',
                  overflow: 'hidden',
                }}
              >
                {/* Image */}
                <div className="relative overflow-hidden" style={{ height: '220px' }}>
                  <img
                    src={dish.img}
                    alt={dish.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(26,15,10,0.6), transparent)' }} />
                  <span
                    className="absolute top-3 right-3 text-xs px-3 py-1"
                    style={{
                      background: 'var(--amber)',
                      color: 'var(--dark)',
                      fontFamily: 'var(--font-display)',
                      fontSize: '0.65rem',
                      letterSpacing: '0.1em',
                    }}
                  >
                    {dish.tag}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3
                    className="font-display mb-2"
                    style={{ fontFamily: 'var(--font-display)', color: 'var(--cream)', fontSize: '1.15rem', fontWeight: 700 }}
                  >
                    {dish.name}
                  </h3>
                  <p style={{ color: 'rgba(245,230,200,0.55)', fontSize: '0.9rem', marginBottom: '1rem', lineHeight: '1.6' }}>
                    {dish.desc}
                  </p>
                  <div className="flex items-center justify-between">
                    <span style={{ color: 'var(--gold)', fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 700 }}>
                      {dish.price}
                    </span>
                    <Link
                      href="/menu"
                      className="text-xs tracking-widest uppercase border-b pb-0.5 transition-colors duration-300"
                      style={{ color: 'var(--amber)', borderColor: 'var(--amber)', fontSize: '0.7rem' }}
                    >
                      View Menu
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/menu" className="btn-outline">View Full Menu</Link>
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="py-24 px-6" style={{ background: 'var(--brown)' }}>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&q=80"
                alt="Restaurant interior"
                className="w-full object-cover"
                style={{ height: '280px' }}
              />
              <img
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=500&q=80"
                alt="Karnataka cuisine"
                className="w-full object-cover mt-10"
                style={{ height: '280px' }}
              />
            </div>
            {/* Badge */}
            <div
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-center px-8 py-5"
              style={{
                background: 'var(--dark)',
                border: '1px solid var(--gold)',
                minWidth: '180px',
              }}
            >
              <p style={{ color: 'var(--gold)', fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 900, lineHeight: 1 }}>5+</p>
              <p style={{ color: 'var(--amber)', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Years of Heritage</p>
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="section-label">Who We Are</p>
            <h2 className="section-title mb-6">A Story Written<br />in Spice & Fire</h2>
            <div className="divider max-w-xs mb-8" />
            <p style={{ color: 'rgba(245,230,200,0.7)', fontSize: '1.05rem', marginBottom: '1.25rem', lineHeight: '1.8' }}>
              Money & Meaning was born from a simple belief — that the finest food tells the truth of its land. We bring you the soul of Karnataka's three great culinary traditions: the bold heat of coastal Mangalore, the earthy comfort of Malnad, and the ceremonial grandeur of traditional South Indian feasts.
            </p>
            <p style={{ color: 'rgba(245,230,200,0.7)', fontSize: '1.05rem', marginBottom: '2rem', lineHeight: '1.8' }}>
              Every dish is prepared with locally sourced spices, traditional grinding stones, and recipes passed down through generations — because authentic flavour cannot be rushed.
            </p>
            <Link href="/about" className="btn-gold">Our Full Story</Link>
          </div>
        </div>
      </section>

      {/* RESTAURANT STORY / STATS */}
      <section
        className="py-24 px-6 relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #1a0f0a 0%, #2d1810 50%, #1a0f0a 100%)',
        }}
      >
        {/* Decorative */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, var(--gold) 0, var(--gold) 1px, transparent 0, transparent 50%)',
            backgroundSize: '30px 30px',
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="section-label">By the Numbers</p>
            <h2 className="section-title">Our Heritage</h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { num: '5+', label: 'Years of Excellence' },
              { num: '120+', label: 'Menu Dishes' },
              { num: '50,000+', label: 'Happy Guests' },
              { num: '3', label: 'Culinary Traditions' },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                    fontWeight: 900,
                    color: 'var(--gold)',
                    lineHeight: 1,
                    marginBottom: '0.5rem',
                  }}
                >
                  {s.num}
                </p>
                <p style={{ color: 'rgba(245,230,200,0.6)', fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 px-6" style={{ background: 'var(--dark)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="section-label">Guest Voices</p>
            <h2 className="section-title">What Our Guests Say</h2>
            <div className="divider max-w-xs mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="p-8 card-hover"
                style={{
                  background: 'var(--brown)',
                  border: '1px solid rgba(212,168,83,0.15)',
                  position: 'relative',
                }}
              >
                {/* Quote mark */}
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '5rem',
                    color: 'var(--amber)',
                    opacity: 0.2,
                    position: 'absolute',
                    top: '1rem',
                    left: '1.5rem',
                    lineHeight: 1,
                  }}
                >
                  "
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <span key={i} style={{ color: 'var(--gold)' }}>★</span>
                  ))}
                </div>

                <p style={{ color: 'rgba(245,230,200,0.75)', fontStyle: 'italic', fontSize: '1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                  "{t.text}"
                </p>

                <div style={{ borderTop: '1px solid rgba(212,168,83,0.2)', paddingTop: '1rem' }}>
                  <p style={{ color: 'var(--cream)', fontWeight: 600, fontFamily: 'var(--font-display)' }}>{t.name}</p>
                  <p style={{ color: 'var(--amber)', fontSize: '0.8rem' }}>{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="py-24 px-6" style={{ background: 'var(--brown)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="section-label">Visual Stories</p>
            <h2 className="section-title">A Glimpse Inside</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {galleryImages.map((src, i) => (
              <div
                key={i}
                className="group relative overflow-hidden"
                style={{ height: i === 0 || i === 4 ? '320px' : '220px' }}
              >
                <img
                  src={src}
                  alt={`Gallery ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                  style={{ background: 'rgba(196,124,46,0.2)' }}
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/gallery" className="btn-outline">View Full Gallery</Link>
          </div>
        </div>
      </section>

      {/* RESERVATION CTA */}
      <section
        className="py-24 px-6 relative overflow-hidden text-center"
        style={{
          background: 'linear-gradient(135deg, rgba(45,24,16,0.97) 0%, rgba(26,15,10,0.98) 100%)',
        }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=60")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div
          className="absolute inset-0"
          style={{ background: 'rgba(26,15,10,0.85)' }}
        />

        <div className="relative z-10 max-w-2xl mx-auto">
          <p className="section-label mb-4">Reserve Your Experience</p>
          <h2 className="section-title mb-6">Join Us for a<br />Memorable Meal</h2>
          <div className="divider max-w-xs mx-auto mb-8" />
          <p style={{ color: 'rgba(245,230,200,0.7)', fontSize: '1.05rem', marginBottom: '2.5rem' }}>
            Whether it's a quiet dinner for two or a grand family celebration — we'll make every visit unforgettable.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/reservation" className="btn-gold">Book a Table</Link>
            <a
              href={`https://wa.me/919060663612?text=${encodeURIComponent('Hi Money & Meaning, I would like to know more about your menu and table reservations.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="py-20 px-6" style={{ background: 'var(--dark)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <p className="section-label">Visit Us</p>
            <h2 className="section-title">Find Our Restaurant</h2>
          </div>
          <div
            className="w-full overflow-hidden"
            style={{ height: '420px', border: '1px solid rgba(212,168,83,0.25)' }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9844376714963!2d77.60456807559661!3d12.972441487336977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sChurch%20Street%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1716000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) saturate(0.7)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Money & Meaning Location"
            />
          </div>
          <div
            className="flex flex-wrap justify-center gap-12 mt-8 py-6 px-6"
            style={{ background: 'var(--brown)', border: '1px solid rgba(212,168,83,0.15)' }}
          >
            {[
              { icon: '📍', label: 'Address', value: '12 Church Street, Bengaluru, Karnataka' },
              { icon: '📞', label: 'Phone', value: '+91 98765 43210' },
              { icon: '🕐', label: 'Hours', value: '7:00 AM – 11:30 PM Daily' },
            ].map((c) => (
              <div key={c.label} className="text-center">
                <p className="text-2xl mb-1">{c.icon}</p>
                <p style={{ color: 'var(--amber)', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.25rem' }}>{c.label}</p>
                <p style={{ color: 'var(--cream)', fontSize: '0.95rem' }}>{c.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
