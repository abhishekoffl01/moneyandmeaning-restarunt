'use client'
import { useState } from 'react'

export default function ReservationPage() {
  const [form, setForm] = useState({
    name: '', phone: '', email: '', guests: '2', date: '', time: '7:00 PM', request: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const times = [
    '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM',
    '7:00 PM', '8:00 PM', '9:00 PM', '10:00 PM', '11:00 PM',
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
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
            src="https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=1400&q=70"
            alt="Reservation"
            className="w-full h-full object-cover"
            style={{ filter: 'brightness(0.2)' }}
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(26,15,10,0.6), rgba(26,15,10,0.95))' }} />
        </div>
        <div className="relative z-10">
          <p className="section-label mb-3">Reserve Your Experience</p>
          <h1 className="section-title" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>Book a Table</h1>
          <div className="divider max-w-xs mx-auto mt-4" />
          <p className="mt-4" style={{ color: 'rgba(245,230,200,0.6)', fontStyle: 'italic' }}>
            Reservations recommended, especially on weekends.
          </p>
        </div>
      </section>

      {/* Form section */}
      <section className="py-20 px-6" style={{ background: 'var(--dark)' }}>
        <div className="max-w-5xl mx-auto grid lg:grid-cols-5 gap-16 items-start">
          {/* Info sidebar */}
          <div className="lg:col-span-2">
            <p className="section-label mb-4">Plan Your Visit</p>
            <h2 className="section-title mb-8" style={{ fontSize: '2rem' }}>Reservation Details</h2>

            <div className="space-y-6">
              {[
                { icon: '📍', title: 'Location', info: '12 Church Street, Bengaluru, Karnataka – 560 001' },
                { icon: '🕐', title: 'Hours', info: 'Open daily: 7:00 AM – 11:30 PM' },
                { icon: '📞', title: 'Phone', info: '+91 98765 43210' },
                { icon: '✉️', title: 'Email', info: 'hello@moneyandmeaning.in' },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <span className="text-2xl mt-0.5">{item.icon}</span>
                  <div>
                    <p style={{ color: 'var(--amber)', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.25rem' }}>{item.title}</p>
                    <p style={{ color: 'rgba(245,230,200,0.7)', fontSize: '0.95rem' }}>{item.info}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 p-5" style={{ background: 'var(--brown)', border: '1px solid rgba(212,168,83,0.15)' }}>
              <p style={{ color: 'var(--gold)', fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 600, marginBottom: '0.5rem' }}>
                ✦ Prefer WhatsApp?
              </p>
              <p style={{ color: 'rgba(245,230,200,0.6)', fontSize: '0.9rem', marginBottom: '1rem' }}>
                Message us directly for quick reservations and special arrangements.
              </p>
              <a
                href={`https://wa.me/919060663612?text=${encodeURIComponent('Hi Money & Meaning, I would like to know more about your menu and table reservations.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold text-xs"
              >
                WhatsApp Us
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="p-8 md:p-10" style={{ background: 'var(--brown)', border: '1px solid rgba(212,168,83,0.2)' }}>
              {submitted ? (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">✦</div>
                  <h3 className="section-title mb-4" style={{ fontSize: '2rem', color: 'var(--gold)' }}>Reservation Received!</h3>
                  <p style={{ color: 'rgba(245,230,200,0.7)', marginBottom: '2rem' }}>
                    Thank you, {form.name}. We've received your reservation request and will confirm via phone or email shortly.
                  </p>
                  <button onClick={() => setSubmitted(false)} className="btn-outline">Make Another Reservation</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block mb-2 text-xs tracking-widest uppercase" style={{ color: 'var(--amber)' }}>Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                        className="form-input"
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-xs tracking-widest uppercase" style={{ color: 'var(--amber)' }}>Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        placeholder="+91 XXXXX XXXXX"
                        className="form-input"
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-xs tracking-widest uppercase" style={{ color: 'var(--amber)' }}>Email</label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className="form-input"
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-xs tracking-widest uppercase" style={{ color: 'var(--amber)' }}>Number of Guests *</label>
                      <select name="guests" value={form.guests} onChange={handleChange} required className="form-input">
                        {['1', '2', '3', '4', '5', '6', '7', '8', '10', '12', '15+'].map((n) => (
                          <option key={n} value={n} style={{ background: 'var(--dark)' }}>{n} {n === '1' ? 'Guest' : 'Guests'}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block mb-2 text-xs tracking-widest uppercase" style={{ color: 'var(--amber)' }}>Date *</label>
                      <input
                        type="date"
                        name="date"
                        value={form.date}
                        onChange={handleChange}
                        required
                        min={new Date().toISOString().split('T')[0]}
                        className="form-input"
                        style={{ colorScheme: 'dark' }}
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-xs tracking-widest uppercase" style={{ color: 'var(--amber)' }}>Time *</label>
                      <select name="time" value={form.time} onChange={handleChange} required className="form-input">
                        {times.map((t) => (
                          <option key={t} value={t} style={{ background: 'var(--dark)' }}>{t}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block mb-2 text-xs tracking-widest uppercase" style={{ color: 'var(--amber)' }}>Special Requests</label>
                    <textarea
                      name="request"
                      value={form.request}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Dietary requirements, occasion details, seating preferences..."
                      className="form-input resize-none"
                    />
                  </div>

                  <button type="submit" className="btn-gold w-full text-center">
                    Confirm Reservation
                  </button>

                  <p className="text-center text-xs" style={{ color: 'rgba(245,230,200,0.35)' }}>
                    By reserving, you agree to our cancellation policy. Reservations held for 15 minutes.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
