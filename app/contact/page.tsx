'use client'
import { useState } from 'react'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-16 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=1400&q=70"
            alt="Contact"
            className="w-full h-full object-cover"
            style={{ filter: 'brightness(0.2)' }}
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(26,15,10,0.6), rgba(26,15,10,0.95))' }} />
        </div>
        <div className="relative z-10">
          <p className="section-label mb-3">Reach Out</p>
          <h1 className="section-title" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>Contact Us</h1>
          <div className="divider max-w-xs mx-auto mt-4" />
          <p className="mt-4" style={{ color: 'rgba(245,230,200,0.6)', fontStyle: 'italic' }}>
            We'd love to hear from you. Drop us a message.
          </p>
        </div>
      </section>

      {/* Contact cards */}
      <section className="py-16 px-6" style={{ background: 'var(--dark)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              {
                icon: '📍',
                title: 'Visit Us',
                lines: ['12 Church Street', 'Bengaluru, Karnataka', 'India – 560 001'],
                action: null,
              },
              {
                icon: '📞',
                title: 'Call Us',
                lines: ['+91 98765 43210', 'hello@moneyandmeaning.in', 'Open 7 AM – 11:30 PM'],
                action: { href: 'tel:+919876543210', label: 'Call Now' },
              },
              {
                icon: '💬',
                title: 'WhatsApp',
                lines: ['+91 90606 63612', 'Quick responses on WhatsApp', 'For reservations & enquiries'],
                action: {
                  href: `https://wa.me/919060663612?text=${encodeURIComponent('Hi Money & Meaning, I would like to know more about your menu and table reservations.')}`,
                  label: 'Message Us',
                  external: true,
                },
              },
            ].map((card) => (
              <div
                key={card.title}
                className="p-8 text-center card-hover"
                style={{ background: 'var(--brown)', border: '1px solid rgba(212,168,83,0.15)' }}
              >
                <div className="text-4xl mb-4">{card.icon}</div>
                <h3
                  className="mb-4"
                  style={{ fontFamily: 'var(--font-display)', color: 'var(--gold)', fontSize: '1.25rem', fontWeight: 700 }}
                >
                  {card.title}
                </h3>
                <div className="space-y-1 mb-6">
                  {card.lines.map((line, i) => (
                    <p key={i} style={{ color: 'rgba(245,230,200,0.6)', fontSize: '0.95rem' }}>{line}</p>
                  ))}
                </div>
                {card.action && (
                  <a
                    href={card.action.href}
                    target={card.action.external ? '_blank' : undefined}
                    rel={card.action.external ? 'noopener noreferrer' : undefined}
                    className="btn-gold text-xs"
                  >
                    {card.action.label}
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Form & Map */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <p className="section-label mb-3">Send a Message</p>
              <h2 className="section-title mb-8" style={{ fontSize: '2rem' }}>Get in Touch</h2>

              <div className="p-8" style={{ background: 'var(--brown)', border: '1px solid rgba(212,168,83,0.15)' }}>
                {submitted ? (
                  <div className="text-center py-8">
                    <div className="text-5xl mb-4">✦</div>
                    <h3 style={{ fontFamily: 'var(--font-display)', color: 'var(--gold)', fontSize: '1.5rem', marginBottom: '1rem' }}>
                      Message Sent!
                    </h3>
                    <p style={{ color: 'rgba(245,230,200,0.6)', marginBottom: '1.5rem' }}>
                      Thank you for reaching out. We'll get back to you within 24 hours.
                    </p>
                    <button onClick={() => setSubmitted(false)} className="btn-outline text-xs">Send Another Message</button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block mb-2 text-xs tracking-widest uppercase" style={{ color: 'var(--amber)' }}>Name *</label>
                        <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="Your name" className="form-input" />
                      </div>
                      <div>
                        <label className="block mb-2 text-xs tracking-widest uppercase" style={{ color: 'var(--amber)' }}>Phone</label>
                        <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" className="form-input" />
                      </div>
                    </div>
                    <div>
                      <label className="block mb-2 text-xs tracking-widest uppercase" style={{ color: 'var(--amber)' }}>Email *</label>
                      <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="your@email.com" className="form-input" />
                    </div>
                    <div>
                      <label className="block mb-2 text-xs tracking-widest uppercase" style={{ color: 'var(--amber)' }}>Subject</label>
                      <select name="subject" value={form.subject} onChange={handleChange} className="form-input">
                        <option value="" style={{ background: 'var(--dark)' }}>Select a topic</option>
                        <option value="reservation" style={{ background: 'var(--dark)' }}>Table Reservation</option>
                        <option value="feedback" style={{ background: 'var(--dark)' }}>Feedback</option>
                        <option value="events" style={{ background: 'var(--dark)' }}>Private Events</option>
                        <option value="catering" style={{ background: 'var(--dark)' }}>Catering</option>
                        <option value="other" style={{ background: 'var(--dark)' }}>Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block mb-2 text-xs tracking-widest uppercase" style={{ color: 'var(--amber)' }}>Message *</label>
                      <textarea name="message" value={form.message} onChange={handleChange} required rows={5} placeholder="Tell us how we can help..." className="form-input resize-none" />
                    </div>
                    <button type="submit" className="btn-gold w-full">Send Message</button>
                  </form>
                )}
              </div>
            </div>

            {/* Map */}
            <div>
              <p className="section-label mb-3">How to Find Us</p>
              <h2 className="section-title mb-8" style={{ fontSize: '2rem' }}>Our Location</h2>
              <div style={{ height: '420px', border: '1px solid rgba(212,168,83,0.2)', overflow: 'hidden' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9844376714963!2d77.60456807559661!3d12.972441487336977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sChurch%20Street%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1716000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) saturate(0.7)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Money & Meaning map"
                />
              </div>
              <div className="mt-4 p-4" style={{ background: 'var(--brown)', border: '1px solid rgba(212,168,83,0.12)' }}>
                <p style={{ color: 'var(--cream)', fontSize: '0.95rem' }}>
                  📍 12 Church Street, Bengaluru, Karnataka, India – 560 001
                </p>
                <p className="mt-1" style={{ color: 'rgba(245,230,200,0.5)', fontSize: '0.85rem' }}>
                  Near MG Road Metro Station · Parking available nearby
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
