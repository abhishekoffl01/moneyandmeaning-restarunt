'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'Our Story' },
  { href: '/menu', label: 'Menu' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/reservation', label: 'Book a Table' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-3' : 'py-5'
      }`}
      style={{
        background: scrolled
          ? 'rgba(26,15,10,0.97)'
          : 'linear-gradient(to bottom, rgba(26,15,10,0.85), transparent)',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(212,168,83,0.2)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none">
          <span
            className="font-display text-xl font-bold tracking-wider"
            style={{ color: 'var(--gold)', fontFamily: 'var(--font-display)' }}
          >
            Money & Meaning
          </span>
          <span
            className="text-xs tracking-widest uppercase"
            style={{ color: 'var(--amber)', fontSize: '0.6rem', letterSpacing: '0.25em' }}
          >
            Authentic Karnataka Flavours
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm tracking-widest uppercase transition-colors duration-300 ${
                pathname === link.href
                  ? 'text-gold'
                  : 'text-cream hover:text-gold'
              }`}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.75rem',
                color: pathname === link.href ? 'var(--gold)' : undefined,
              }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:+919876543210"
            className="btn-gold text-xs px-5 py-2"
          >
            +91 98765 43210
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span
            className="block w-6 h-0.5 transition-all duration-300"
            style={{
              background: 'var(--gold)',
              transform: menuOpen ? 'rotate(45deg) translateY(8px)' : 'none',
            }}
          />
          <span
            className="block w-6 h-0.5 transition-all duration-300"
            style={{
              background: 'var(--gold)',
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            className="block w-6 h-0.5 transition-all duration-300"
            style={{
              background: 'var(--gold)',
              transform: menuOpen ? 'rotate(-45deg) translateY(-8px)' : 'none',
            }}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className="lg:hidden overflow-hidden transition-all duration-500"
        style={{
          maxHeight: menuOpen ? '500px' : '0',
          background: 'rgba(26,15,10,0.98)',
          backdropFilter: 'blur(20px)',
        }}
      >
        <nav className="flex flex-col px-6 py-6 gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm tracking-widest uppercase border-b pb-4"
              style={{
                fontFamily: 'var(--font-body)',
                color: pathname === link.href ? 'var(--gold)' : 'var(--cream)',
                borderColor: 'rgba(212,168,83,0.15)',
              }}
            >
              {link.label}
            </Link>
          ))}
          <a href="tel:+919876543210" className="btn-gold text-center text-xs mt-2">
            +91 98765 43210
          </a>
        </nav>
      </div>
    </header>
  )
}
