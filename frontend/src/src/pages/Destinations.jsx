import React from 'react';

const DESTINATIONS = [
  {
    id: 1,
    name: 'Maasai Mara',
    region: 'Rift Valley',
    image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&q=80&w=900',
    desc: 'Home to the Great Wildebeest Migration, the Maasai Mara is arguably the most iconic safari destination in all of Africa. Expect lions, leopards, cheetahs, and vast open plains.',
    highlights: ['Big Five game drives', 'Hot air balloon safaris', 'Maasai village visits', 'River crossings (July-Oct)'],
    bestTime: 'July to October',
  },
  {
    id: 2,
    name: 'Amboseli National Park',
    region: 'Kajiado County',
    image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?auto=format&fit=crop&q=80&w=900',
    desc: 'Famous for its spectacular views of Mount Kilimanjaro and large elephant herds. Amboseli offers some of the best elephant photography in Kenya.',
    highlights: ['Elephant viewing', 'Kilimanjaro backdrop', 'Bird watching', 'Sunset game drives'],
    bestTime: 'June to October',
  },
  {
    id: 3,
    name: 'Diani Beach',
    region: 'Kwale County',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=900',
    desc: 'A pristine stretch of white sand on Kenya\'s south coast with crystal-clear Indian Ocean waters. Perfect for beach lovers seeking a relaxing post-safari escape.',
    highlights: ['Water sports', 'Snorkelling & diving', 'Colobus monkey sanctuary', 'Deep sea fishing'],
    bestTime: 'January to March, June to August',
  },
  {
    id: 4,
    name: 'Mount Kenya',
    region: 'Central Kenya',
    image: 'https://images.unsplash.com/photo-1590688711-d9f3f76f0f6c?auto=format&fit=crop&q=80&w=900',
    desc: 'Africa\'s second highest mountain offering challenging treks through unique Afro-alpine vegetation, giant lobelia, and spectacular glaciers.',
    highlights: ['Trekking & climbing', 'Scenic mountain routes', 'Wildlife spotting', 'Glacial landscapes'],
    bestTime: 'January to March, July to October',
  },
  {
    id: 5,
    name: 'Lamu Island',
    region: 'Lamu County',
    image: 'https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?auto=format&fit=crop&q=80&w=900',
    desc: 'A UNESCO World Heritage Site, Lamu Old Town is the oldest and best-preserved Swahili settlement in East Africa. No motor vehicles, just donkeys and dhows.',
    highlights: ['Dhow sailing', 'Cultural heritage tours', 'Shela Beach', 'Local cuisine'],
    bestTime: 'October to April',
  },
  {
    id: 6,
    name: 'Tsavo National Park',
    region: 'Coast & Taita-Taveta',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=900',
    desc: 'Kenya\'s largest national park split into Tsavo East and West. Known for its red elephants, vast lava fields, and the Lugard Falls on the Galana River.',
    highlights: ['Red elephant viewing', 'Lugard Falls', 'Mzima Springs', 'Vast wilderness'],
    bestTime: 'June to October',
  },
];

const Destinations = () => {
  return (
    <div>
      <div
        className="page-hero"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=2000")' }}
      >
        <div className="page-hero-content">
          <h1>Our Destinations</h1>
          <p>Discover the beauty of Kenya</p>
        </div>
      </div>

      <section className="section" style={{ background: '#fff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 className="section-title">Where We'll Take You</h2>
            <p className="section-subtitle">Six remarkable destinations, each with its own character</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
            {DESTINATIONS.map((dest, i) => (
              <div key={dest.id} style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '3rem',
                alignItems: 'center',
                direction: i % 2 === 1 ? 'rtl' : 'ltr',
              }}>
                <div style={{ direction: 'ltr', borderRadius: '12px', overflow: 'hidden', height: '350px', boxShadow: '0 8px 30px rgba(0,0,0,0.12)' }}>
                  <img src={dest.image} alt={dest.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ direction: 'ltr' }}>
                  <span style={{ fontSize: '0.8rem', color: '#c8860a', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    {dest.region}
                  </span>
                  <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2rem', margin: '0.5rem 0 1rem', color: '#1a1a1a' }}>
                    {dest.name}
                  </h2>
                  <p style={{ color: '#666', lineHeight: 1.8, marginBottom: '1.5rem' }}>{dest.desc}</p>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <p style={{ fontWeight: 600, marginBottom: '0.6rem', fontSize: '0.9rem' }}>Highlights:</p>
                    <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      {dest.highlights.map(h => (
                        <li key={h} style={{ background: '#fdf5e8', color: '#a36d08', padding: '5px 12px', borderRadius: '20px', fontSize: '0.82rem', fontWeight: 500 }}>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p style={{ fontSize: '0.88rem', color: '#888' }}>
                    <strong style={{ color: '#555' }}>Best time to visit:</strong> {dest.bestTime}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Destinations;
