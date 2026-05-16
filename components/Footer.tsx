import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{ background: '#0d0805', borderTop: '1px solid rgba(212,168,83,0.15)' }}>
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h2 className="font-display text-2xl font-bold mb-2" style={{ color: 'var(--gold)', fontFamily: 'var(--font-display)' }}>
              Money & Meaning
            </h2>
            <p className="text-sm tracking-widest uppercase mb-5" style={{ color: 'var(--amber)', fontSize: '0.65rem' }}>
              Authentic Karnataka Flavours
            </p>
            <p style={{ color: 'rgba(245,230,200,0.6)', fontSize: '1rem', lineHeight: '1.7' }}>
              A premium dining experience rooted in Karnataka's rich culinary heritage — coastal, Malnad, and traditional South Indian.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm tracking-widest uppercase font-semibold mb-6" style={{ color: 'var(--gold)', fontFamily: 'var(--font-display)' }}>
              Explore
            </h3>
            <ul className="space-y-3">
              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'Our Story' },
                { href: '/menu', label: 'Our Menu' },
                { href: '/gallery', label: 'Gallery' },
                { href: '/reservation', label: 'Book a Table' },
                { href: '/contact', label: 'Contact' },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="footer-link transition-colors duration-300"
                    style={{ color: 'rgba(245,230,200,0.6)', fontSize: '0.95rem' }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-sm tracking-widest uppercase font-semibold mb-6" style={{ color: 'var(--gold)', fontFamily: 'var(--font-display)' }}>
              Hours
            </h3>
            <div className="space-y-3" style={{ color: 'rgba(245,230,200,0.6)', fontSize: '0.95rem' }}>
              <div className="flex justify-between gap-4">
                <span>Mon – Fri</span>
                <span style={{ color: 'var(--amber)' }}>7:00 AM – 11:30 PM</span>
              </div>
              <div className="flex justify-between gap-4">
                <span>Sat – Sun</span>
                <span style={{ color: 'var(--amber)' }}>7:00 AM – 11:30 PM</span>
              </div>
              <div className="mt-4 pt-4" style={{ borderTop: '1px solid rgba(212,168,83,0.15)' }}>
                <p className="text-xs" style={{ color: 'var(--amber)' }}>Reservations recommended on weekends</p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm tracking-widest uppercase font-semibold mb-6" style={{ color: 'var(--gold)', fontFamily: 'var(--font-display)' }}>
              Find Us
            </h3>
            <div className="space-y-4" style={{ color: 'rgba(245,230,200,0.6)', fontSize: '0.95rem' }}>
              <div>
                <p>12 Church Street</p>
                <p>Bengaluru, Karnataka</p>
                <p>India – 560 001</p>
              </div>
              <div className="space-y-2">
                <a href="tel:+919876543210" className="block transition-colors" style={{ color: 'var(--amber)' }}>
                  +91 98765 43210
                </a>
                <a href="mailto:hello@moneyandmeaning.in" className="block transition-colors" style={{ color: 'var(--amber)' }}>
                  hello@moneyandmeaning.in
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: '1px', background: 'linear-gradient(to right, transparent, rgba(212,168,83,0.3), transparent)', margin: '0 0 2rem' }} />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p style={{ color: 'rgba(245,230,200,0.35)', fontSize: '0.8rem' }}>
            © {new Date().getFullYear()} Money & Meaning. All rights reserved.
          </p>
          <p style={{ color: 'rgba(245,230,200,0.35)', fontSize: '0.8rem' }}>
            Crafted with ❤️ in Bengaluru
          </p>
        </div>
      </div>
    </footer>
  )
}
