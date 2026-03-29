import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('http://localhost:8000/api/inquiries/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setSubmitted(true);
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        setError('Something went wrong. Please try again or call us directly.');
      }
    } catch {
      setError('Could not connect to server. Please call us or email us directly.');
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = {
    width: '100%',
    padding: '12px 16px',
    border: '1.5px solid #e0d8d0',
    borderRadius: '8px',
    fontSize: '0.95rem',
    fontFamily: "'DM Sans', sans-serif",
    color: '#1a1a1a',
    background: '#fff',
    outline: 'none',
    transition: 'border-color 0.2s',
  };

  const labelStyle = {
    display: 'block',
    fontWeight: 600,
    fontSize: '0.88rem',
    marginBottom: '6px',
    color: '#444',
  };

  return (
    <div>
      <div
        className="page-hero"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=2000")' }}
      >
        <div className="page-hero-content">
          <h1>Contact Us</h1>
          <p>We'd love to plan your perfect safari</p>
        </div>
      </div>

      <section className="section" style={{ background: '#fff' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '4rem', alignItems: 'start' }}>

            <div>
              <h2 className="section-title" style={{ marginBottom: '1rem', fontSize: '2rem' }}>Get In Touch</h2>
              <p style={{ color: '#666', lineHeight: 1.8, marginBottom: '2.5rem' }}>
                Whether you want to book a tour, enquire about accommodation, or just have a question, our team is happy to help.
              </p>

              {[
                { icon: '📍', title: 'Our Office', info: 'Waiyaki Way, Nairobi, Kenya' },
                { icon: '📞', title: 'Phone', info: '+254 700 000 000' },
                { icon: '📧', title: 'Email', info: 'info@tembotours.co.ke' },
                { icon: '🕐', title: 'Working Hours', info: 'Mon-Sat: 8am - 6pm EAT' },
              ].map(({ icon, title, info }) => (
                <div key={title} style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', alignItems: 'flex-start' }}>
                  <span style={{ fontSize: '1.4rem', flexShrink: 0 }}>{icon}</span>
                  <div>
                    <p style={{ fontWeight: 600, marginBottom: '2px', color: '#1a1a1a' }}>{title}</p>
                    <p style={{ color: '#666', fontSize: '0.9rem' }}>{info}</p>
                  </div>
                </div>
              ))}

              <div style={{ marginTop: '2rem', padding: '1.5rem', background: '#fdf5e8', borderRadius: '10px', borderLeft: '4px solid #c8860a' }}>
                <p style={{ fontWeight: 600, marginBottom: '0.4rem', color: '#1a1a1a' }}>Emergency Line</p>
                <p style={{ color: '#666', fontSize: '0.88rem' }}>For urgent assistance during your tour, call our 24/7 hotline:</p>
                <p style={{ fontWeight: 700, color: '#c8860a', marginTop: '0.4rem' }}>+254 722 000 000</p>
              </div>
            </div>

            <div style={{ background: '#faf8f5', borderRadius: '16px', padding: '2.5rem', border: '1px solid #ede5d8' }}>
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '3rem 0' }}>
                  <span style={{ fontSize: '3rem' }}>🎉</span>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.6rem', margin: '1rem 0 0.5rem' }}>
                    Message Sent!
                  </h3>
                  <p style={{ color: '#666', lineHeight: 1.7 }}>
                    Thank you for reaching out. Our team will get back to you within 24 hours to start planning your adventure.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    style={{ marginTop: '1.5rem', background: '#c8860a', color: '#fff', border: 'none', padding: '10px 24px', borderRadius: '6px', fontWeight: 600, cursor: 'pointer', fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.4rem', marginBottom: '2rem', color: '#1a1a1a' }}>
                    Send us a message
                  </h3>

                  {error && (
                    <div style={{ background: '#fff0f0', color: '#c00', padding: '12px 16px', borderRadius: '6px', marginBottom: '1rem', fontSize: '0.88rem' }}>
                      {error}
                    </div>
                  )}

                  <div style={{ marginBottom: '1.25rem' }}>
                    <label style={labelStyle}>Full Name *</label>
                    <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="John Doe" style={inputStyle}
                      onFocus={e => e.target.style.borderColor = '#c8860a'}
                      onBlur={e => e.target.style.borderColor = '#e0d8d0'}
                    />
                  </div>

                  <div style={{ marginBottom: '1.25rem' }}>
                    <label style={labelStyle}>Email Address *</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="john@example.com" style={inputStyle}
                      onFocus={e => e.target.style.borderColor = '#c8860a'}
                      onBlur={e => e.target.style.borderColor = '#e0d8d0'}
                    />
                  </div>

                  <div style={{ marginBottom: '1.25rem' }}>
                    <label style={labelStyle}>Subject *</label>
                    <input type="text" name="subject" value={form.subject} onChange={handleChange} required placeholder="Safari enquiry" style={inputStyle}
                      onFocus={e => e.target.style.borderColor = '#c8860a'}
                      onBlur={e => e.target.style.borderColor = '#e0d8d0'}
                    />
                  </div>

                  <div style={{ marginBottom: '1.75rem' }}>
                    <label style={labelStyle}>Message *</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell us about your dream safari..."
                      style={{ ...inputStyle, resize: 'vertical', minHeight: '130px' }}
                      onFocus={e => e.target.style.borderColor = '#c8860a'}
                      onBlur={e => e.target.style.borderColor = '#e0d8d0'}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    style={{
                      width: '100%',
                      background: loading ? '#d4a040' : '#c8860a',
                      color: '#fff',
                      border: 'none',
                      padding: '14px',
                      borderRadius: '8px',
                      fontWeight: 600,
                      fontSize: '1rem',
                      cursor: loading ? 'not-allowed' : 'pointer',
                      fontFamily: "'DM Sans', sans-serif",
                      transition: 'background 0.2s',
                    }}
                  >
                    {loading ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
