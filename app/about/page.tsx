import Link from 'next/link'

export const metadata = {
  title: 'Our Story | Money & Meaning',
  description: 'Learn about Money & Meaning — a premium Karnataka non-veg restaurant celebrating coastal, Malnad and traditional South Indian cuisine.',
}

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-24 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1400&q=80"
            alt="Restaurant"
            className="w-full h-full object-cover"
            style={{ filter: 'brightness(0.25)' }}
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(26,15,10,0.5), rgba(26,15,10,0.95))' }} />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="section-label mb-4">Est. 2020</p>
          <h1 className="section-title mb-6" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>Our Story</h1>
          <div className="divider max-w-xs mx-auto mb-6" />
          <p style={{ color: 'rgba(245,230,200,0.7)', fontSize: '1.1rem', fontStyle: 'italic' }}>
            A love letter to Karnataka's forgotten flavours.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 px-6" style={{ background: 'var(--dark)' }}>
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="section-label">The Beginning</p>
            <h2 className="section-title mb-6" style={{ fontSize: '2.5rem' }}>Born from a<br />Village Kitchen</h2>
            <div style={{ height: '2px', width: '60px', background: 'var(--gold)', marginBottom: '2rem' }} />
            <div className="space-y-5" style={{ color: 'rgba(245,230,200,0.7)', fontSize: '1.05rem', lineHeight: '1.85' }}>
              <p>
                Money & Meaning began not in a boardroom, but in the aromatic kitchen of a coastal Karnataka home. Our founder, Prakash Shetty, grew up watching his grandmother prepare elaborate non-veg feasts for the entire village — simmering Kundapura curries over wood fire, grinding fresh coconut masala by hand, and wrapping biryani in donne leaves.
              </p>
              <p>
                After years working in the culinary industry across India, Prakash realised that authentic Karnataka non-veg cuisine — with all its regional complexity — was being oversimplified or lost entirely in Bengaluru's restaurant scene.
              </p>
              <p>
                In 2020, he opened Money & Meaning on Church Street: a place where every dish would honour its origin, and every guest would experience the true depth of Karnataka's food culture.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&q=80" alt="Kitchen" className="w-full object-cover" style={{ height: '250px' }} />
            <img src="https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=400&q=80" alt="Food" className="w-full object-cover mt-8" style={{ height: '250px' }} />
            <img src="https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=400&q=80" alt="Dining" className="w-full object-cover -mt-4" style={{ height: '250px' }} />
            <img src="https://images.unsplash.com/photo-1481833761820-0509d3217039?w=400&q=80" alt="Restaurant" className="w-full object-cover mt-4" style={{ height: '250px' }} />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6" style={{ background: 'var(--brown)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="section-label">What We Stand For</p>
            <h2 className="section-title">Our Culinary Philosophy</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🌶️',
                title: 'Authentic Spices',
                desc: 'We source spices directly from Coorg, Kodagu, and Malnad farms. No shortcuts. No packaged masalas. Only hand-ground, slow-roasted spice blends.',
              },
              {
                icon: '🐟',
                title: 'Fresh & Local',
                desc: 'Our seafood arrives daily from Mangalore and Udupi coast. Chicken and mutton are procured from trusted local farms — never frozen.',
              },
              {
                icon: '🔥',
                title: 'Traditional Cooking',
                desc: 'We cook on wood and charcoal where the recipe demands it. Ragi mudde is hand-rolled. Coconut chutney is stone-ground. Some things must not change.',
              },
            ].map((v) => (
              <div
                key={v.title}
                className="p-8 text-center card-hover"
                style={{ background: 'var(--dark)', border: '1px solid rgba(212,168,83,0.15)' }}
              >
                <div className="text-5xl mb-4">{v.icon}</div>
                <h3
                  className="mb-4"
                  style={{ fontFamily: 'var(--font-display)', color: 'var(--gold)', fontSize: '1.35rem', fontWeight: 700 }}
                >
                  {v.title}
                </h3>
                <p style={{ color: 'rgba(245,230,200,0.65)', fontSize: '1rem', lineHeight: '1.75' }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 px-6" style={{ background: 'var(--dark)' }}>
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=700&q=80"
              alt="Chef"
              className="w-full object-cover"
              style={{ height: '500px' }}
            />
            <div
              className="absolute -bottom-4 -right-4 p-6 text-center"
              style={{ background: 'var(--amber)', minWidth: '160px' }}
            >
              <p style={{ fontFamily: 'var(--font-display)', color: 'var(--dark)', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Head Chef</p>
              <p style={{ fontFamily: 'var(--font-display)', color: 'var(--dark)', fontSize: '1.25rem', fontWeight: 700 }}>Prakash Shetty</p>
            </div>
          </div>
          <div>
            <p className="section-label">The Hands Behind the Flavour</p>
            <h2 className="section-title mb-6" style={{ fontSize: '2.5rem' }}>Meet Our<br />Head Chef</h2>
            <div style={{ height: '2px', width: '60px', background: 'var(--gold)', marginBottom: '2rem' }} />
            <div className="space-y-5" style={{ color: 'rgba(245,230,200,0.7)', fontSize: '1.05rem', lineHeight: '1.85' }}>
              <p>
                Chef Prakash Shetty brings over 18 years of experience in South Indian cuisine. Trained under legendary coastal Karnataka chefs, he spent years perfecting the nuances of Mangalorean, Udupi, and Malnad cooking traditions.
              </p>
              <p>
                His belief is simple: great food is honest food. Every dish that leaves our kitchen carries his personal signature — meticulous balance of heat, acidity, and depth that makes Karnataka cuisine unlike anything else in India.
              </p>
            </div>
            <div className="flex gap-8 mt-8">
              {[{ num: '18+', label: 'Years Experience' }, { num: '60+', label: 'Signature Recipes' }].map((s) => (
                <div key={s.label}>
                  <p style={{ fontFamily: 'var(--font-display)', color: 'var(--gold)', fontSize: '2.5rem', fontWeight: 900, lineHeight: 1 }}>{s.num}</p>
                  <p style={{ color: 'var(--amber)', fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginTop: '0.25rem' }}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center" style={{ background: 'var(--brown)' }}>
        <p className="section-label mb-4">Ready to Experience It?</p>
        <h2 className="section-title mb-8" style={{ fontSize: '2.5rem' }}>Reserve Your Table Today</h2>
        <Link href="/reservation" className="btn-gold">Book a Table</Link>
      </section>
    </>
  )
}
