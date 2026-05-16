'use client'
import { useState } from 'react'

const categories = [
  'All',
  'Chicken Specials',
  'Mutton Specials',
  'Fish & Seafood',
  'Biryani',
  'South Indian Meals',
  'Starters',
  'Beverages',
  'Desserts',
]

const menuItems = [
  // Chicken Specials
  { name: 'Kundapura Chicken Curry', category: 'Chicken Specials', price: '₹280', desc: 'Coastal Karnataka specialty with fresh coconut paste, red chilli and curry leaves.', tag: 'Bestseller', img: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=400&q=75', veg: false },
  { name: 'Chicken Ghee Roast', category: 'Chicken Specials', price: '₹320', desc: 'Mangalorean classic — tangy tamarind-chilli marinade roasted in pure desi ghee.', tag: 'Chef\'s Pick', img: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&q=75', veg: false },
  { name: 'Neer Dosa with Chicken Curry', category: 'Chicken Specials', price: '₹220', desc: 'Delicate lacey rice crepes paired with a spiced coconut chicken curry.', tag: '', img: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400&q=75', veg: false },
  { name: 'Chicken Pepper Fry', category: 'Chicken Specials', price: '₹290', desc: 'Bold black pepper and whole spice dry fry — intensely aromatic and flavourful.', tag: 'Spicy', img: 'https://images.unsplash.com/photo-1630851840628-f6b6da9b7e21?w=400&q=75', veg: false },

  // Mutton Specials
  { name: 'Ragi Mudde with Mutton Saaru', category: 'Mutton Specials', price: '₹340', desc: 'Malnad heritage — earthy finger millet balls with slow-simmered mutton broth.', tag: 'Heritage', img: 'https://images.unsplash.com/photo-1574484284002-952d92456975?w=400&q=75', veg: false },
  { name: 'Mutton Chops Fry', category: 'Mutton Specials', price: '₹360', desc: 'Tender mutton chops marinated overnight and pan-fried with green masala.', tag: 'Bestseller', img: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=400&q=75', veg: false },
  { name: 'Mutton Sukka', category: 'Mutton Specials', price: '₹380', desc: 'Dry mutton preparation with freshly grated coconut and whole Chettinad spices.', tag: '', img: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&q=75', veg: false },

  // Fish & Seafood
  { name: 'Mangalorean Fish Fry', category: 'Fish & Seafood', price: '₹380', desc: 'Seer fish in red chilli-turmeric-vinegar marinade, tawa-fried to a golden crisp.', tag: 'Must Try', img: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=400&q=75', veg: false },
  { name: 'Kane Fish Tawa Fry', category: 'Fish & Seafood', price: '₹420', desc: 'Lady fish (kane) — a Karnataka coastal delicacy pan-fried with fresh masala.', tag: 'Seasonal', img: 'https://images.unsplash.com/photo-1559454403-b8fb88521f11?w=400&q=75', veg: false },
  { name: 'Prawn Sukka', category: 'Fish & Seafood', price: '₹440', desc: 'Tiger prawns tossed with dry coconut masala, curry leaves and coastal spices.', tag: 'Chef\'s Pick', img: 'https://images.unsplash.com/photo-1604909052434-1d684dd6c96d?w=400&q=75', veg: false },
  { name: 'Crab Masala', category: 'Fish & Seafood', price: '₹550', desc: 'Whole crabs in a thick, fiery coconut-based Karnataka gravy. Served with neer dosa.', tag: 'Weekend Special', img: 'https://images.unsplash.com/photo-1519984388953-d2406bc725e1?w=400&q=75', veg: false },

  // Biryani
  { name: 'Donne Chicken Biryani', category: 'Biryani', price: '₹320', desc: 'Slow-cooked in a donne leaf, layered with aromatic Karnataka masala rice.', tag: 'House Special', img: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&q=75', veg: false },
  { name: 'Mutton Biryani', category: 'Biryani', price: '₹380', desc: 'Dum-cooked mutton biryani with aged Basmati, saffron and whole spices.', tag: 'Classic', img: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=400&q=75', veg: false },
  { name: 'Prawn Biryani', category: 'Biryani', price: '₹420', desc: 'Coastal-style prawn biryani with coconut milk and green masala layered rice.', tag: '', img: 'https://images.unsplash.com/photo-1599043513900-ed6fe01d3833?w=400&q=75', veg: false },

  // South Indian Meals
  { name: 'Karnataka Non-Veg Thali', category: 'South Indian Meals', price: '₹480', desc: 'Full Karnataka meal: rice, rasam, sambar, fish curry, chicken, papad, pickle & dessert.', tag: 'Complete Meal', img: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400&q=75', veg: false },
  { name: 'Akki Roti with Chicken', category: 'South Indian Meals', price: '₹240', desc: 'Crispy rice flour flatbread with a side of Karnataka-style chicken curry.', tag: '', img: 'https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?w=400&q=75', veg: false },

  // Starters
  { name: 'Chicken 65', category: 'Starters', price: '₹220', desc: 'Crispy fried chicken bites in a tangy red marinade — a South Indian bar staple.', tag: 'Popular', img: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=400&q=75', veg: false },
  { name: 'Fish Amritsari', category: 'Starters', price: '₹280', desc: 'Battered fish pakoda with ajwain and gram flour — served with mint chutney.', tag: '', img: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=400&q=75', veg: false },
  { name: 'Prawn Cocktail', category: 'Starters', price: '₹320', desc: 'Chilled prawns with house-made cocktail sauce and lime, served on ice.', tag: '', img: 'https://images.unsplash.com/photo-1604909052434-1d684dd6c96d?w=400&q=75', veg: false },

  // Beverages
  { name: 'Filter Coffee', category: 'Beverages', price: '₹60', desc: 'Traditional South Indian decoction coffee with full-cream milk, served in a davara set.', tag: 'Classic', img: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&q=75', veg: true },
  { name: 'Buttermilk (Majjige)', category: 'Beverages', price: '₹50', desc: 'Spiced, diluted curd with ginger, curry leaves and coriander — refreshing and cooling.', tag: '', img: 'https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=400&q=75', veg: true },
  { name: 'Fresh Lime Soda', category: 'Beverages', price: '₹80', desc: 'Sweet or salted fresh lime with chilled soda — the perfect accompaniment to spicy food.', tag: '', img: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=400&q=75', veg: true },

  // Desserts
  { name: 'Elaneer Payasa', category: 'Desserts', price: '₹140', desc: 'Tender coconut kheer with cardamom and saffron — a Karnataka coastal favourite.', tag: 'Signature', img: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&q=75', veg: true },
  { name: 'Bele Halwa', category: 'Desserts', price: '₹120', desc: 'Karnataka-style lentil halwa with ghee, jaggery and cashews.', tag: '', img: 'https://images.unsplash.com/photo-1589307357824-66e9f4938de4?w=400&q=75', veg: true },
]

export default function MenuPage() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? menuItems : menuItems.filter((m) => m.category === active)

  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-16 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600891964092-4316c288032e?w=1400&q=70"
            alt="Menu"
            className="w-full h-full object-cover"
            style={{ filter: 'brightness(0.2)' }}
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(26,15,10,0.6), rgba(26,15,10,0.95))' }} />
        </div>
        <div className="relative z-10">
          <p className="section-label mb-3">What We Serve</p>
          <h1 className="section-title" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>Our Menu</h1>
          <div className="divider max-w-xs mx-auto mt-4" />
          <p className="mt-4" style={{ color: 'rgba(245,230,200,0.6)', fontStyle: 'italic' }}>Authentic Karnataka recipes, prepared fresh daily.</p>
        </div>
      </section>

      {/* Filter */}
      <section className="sticky top-20 z-40 py-4 px-6 overflow-x-auto" style={{ background: 'rgba(26,15,10,0.97)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(212,168,83,0.15)' }}>
        <div className="flex gap-3 max-w-7xl mx-auto min-w-max lg:min-w-0 lg:flex-wrap lg:justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className="whitespace-nowrap px-5 py-2 text-xs tracking-widest uppercase transition-all duration-300"
              style={{
                fontFamily: 'var(--font-body)',
                background: active === cat ? 'var(--amber)' : 'transparent',
                color: active === cat ? 'var(--dark)' : 'rgba(245,230,200,0.6)',
                border: active === cat ? '1px solid var(--amber)' : '1px solid rgba(212,168,83,0.2)',
                fontWeight: active === cat ? 700 : 400,
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Menu grid */}
      <section className="py-16 px-6" style={{ background: 'var(--dark)', minHeight: '60vh' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((item) => (
              <div
                key={item.name}
                className="card-hover group"
                style={{ background: 'var(--brown)', border: '1px solid rgba(212,168,83,0.12)', overflow: 'hidden' }}
              >
                <div className="relative overflow-hidden" style={{ height: '200px' }}>
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(26,15,10,0.6), transparent)' }} />
                  {item.tag && (
                    <span
                      className="absolute top-2 left-2 px-2 py-0.5 text-xs"
                      style={{ background: 'var(--amber)', color: 'var(--dark)', fontSize: '0.6rem', letterSpacing: '0.08em', textTransform: 'uppercase', fontFamily: 'var(--font-display)', fontWeight: 700 }}
                    >
                      {item.tag}
                    </span>
                  )}
                  <span
                    className="absolute top-2 right-2 w-6 h-6 flex items-center justify-center text-xs rounded-full"
                    style={{ background: item.veg ? '#22c55e' : '#ef4444', color: 'white', fontSize: '0.5rem', fontWeight: 700 }}
                    title={item.veg ? 'Vegetarian' : 'Non-Vegetarian'}
                  >
                    {item.veg ? '●' : '●'}
                  </span>
                </div>
                <div className="p-4">
                  <p className="text-xs mb-1" style={{ color: 'var(--amber)', letterSpacing: '0.15em', textTransform: 'uppercase', fontSize: '0.65rem' }}>
                    {item.category}
                  </p>
                  <h3 className="mb-2" style={{ fontFamily: 'var(--font-display)', color: 'var(--cream)', fontSize: '1.05rem', fontWeight: 700, lineHeight: 1.3 }}>
                    {item.name}
                  </h3>
                  <p style={{ color: 'rgba(245,230,200,0.5)', fontSize: '0.85rem', lineHeight: '1.5', marginBottom: '0.75rem' }}>
                    {item.desc}
                  </p>
                  <div className="flex items-center justify-between pt-3" style={{ borderTop: '1px solid rgba(212,168,83,0.12)' }}>
                    <span style={{ color: 'var(--gold)', fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 700 }}>
                      {item.price}
                    </span>
                    <a
                      href={`https://wa.me/919060663612?text=${encodeURIComponent(`Hi! I'd like to order ${item.name} from Money & Meaning.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs px-3 py-1.5 transition-all duration-300"
                      style={{ background: 'rgba(196,124,46,0.15)', color: 'var(--amber)', border: '1px solid rgba(196,124,46,0.3)', fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}
                    >
                      Order
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-24">
              <p style={{ color: 'rgba(245,230,200,0.4)', fontSize: '1.2rem' }}>No items in this category.</p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
