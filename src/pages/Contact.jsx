import { useState } from 'react';

/*
  ACTION REQUIRED:
  Replace 'YOUR_FORM_ID' with your actual Formspree form ID.
  Get one free at https://formspree.io — it takes 2 minutes.
  Your form ID looks like: xpzgkrby
*/
const FORMSPREE_ID = 'meenbdrq';

const contactItems = [
  {
    icon: '✉️',
    label: 'Email',
    value: 'imrexxdigitalsolutions@gmail.com',
    href: 'mailto:imrexxdigitalsolutions@gmail.com',
  },
  {
    icon: '📞',
    label: 'Phone / WhatsApp',
    value: '+234 802 806 2682',
    href: 'tel:+2348028062682',
  },
  {
    icon: '📍',
    label: 'Location',
    value: 'Abuja, Nigeria',
    href: null,
  },
  {
    icon: '𝕏',
    label: 'X (Twitter)',
    value: '@Imrexx_dev',
    href: 'https://x.com/Imrexx_dev',
  },
];

function Contact() {
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <main className="fade-in">

      {/* ── Hero ── */}
      <section style={heroStyle}>
        <div className="container">
          <p className="section-label">Let's Talk</p>
          <h1 style={{ maxWidth: '600px' }}>
            Ready to Transform<br />
            <span style={{ color: 'var(--primary)' }}>Your Business?</span>
          </h1>
          <p style={heroSubStyle}>
            We respond within 24 hours. Fill in the form or reach out directly,
            whichever works for you.
          </p>
        </div>
      </section>

      {/* ── Two-col layout ── */}
      <section style={sectionStyle}>
        <div className="container">
          <div style={gridStyle}>

            {/* Left — contact details */}
            <div style={leftColStyle}>
              <h2 style={colHeadStyle}>Contact Details</h2>
              <div style={contactListStyle}>
                {contactItems.map((item) => (
                  <div key={item.label} style={contactItemStyle}>
                    <span style={contactIconStyle}>{item.icon}</span>
                    <div>
                      <p style={contactLabelStyle}>{item.label}</p>
                      {item.href ? (
                        <a href={item.href} style={contactValueLinkStyle} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                          {item.value}
                        </a>
                      ) : (
                        <p style={contactValueStyle}>{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div style={availStyle}>
                <span style={{ color: 'var(--primary)', fontSize: '0.65rem' }}>●</span>
                <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  Available for new projects, typical response under 24h
                </p>
              </div>
            </div>

            {/* Right — form */}
            <div style={rightColStyle}>
              <h2 style={colHeadStyle}>Send a Message</h2>

              {status === 'success' ? (
                <div style={successBoxStyle}>
                  <span style={{ fontSize: '2rem' }}>✓</span>
                  <h3 style={{ color: 'var(--primary)', marginBottom: '0.3rem' }}>Message Sent!</h3>
                  <p style={{ margin: 0, fontSize: '0.88rem' }}>
                    We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={formStyle}>
                  <div style={fieldStyle}>
                    <label htmlFor="name" style={labelStyle}>Your Name</label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      placeholder="e.g. Dave Chappelle"
                      value={form.name}
                      onChange={handleChange}
                      style={inputStyle}
                      required
                    />
                  </div>

                  <div style={fieldStyle}>
                    <label htmlFor="email" style={labelStyle}>Email Address</label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={handleChange}
                      style={inputStyle}
                      required
                    />
                  </div>

                  <div style={fieldStyle}>
                    <label htmlFor="message" style={labelStyle}>How can we help?</label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your project, timeline, and budget..."
                      value={form.message}
                      onChange={handleChange}
                      style={textareaStyle}
                      required
                    />
                  </div>

                  {status === 'error' && (
                    <p style={errorStyle}>
                      ⚠ Something went wrong. Email us directly at imrexxdigitalsolutions@gmail.com
                    </p>
                  )}

                  <button
                    type="submit"
                    className="btn"
                    disabled={status === 'sending'}
                    style={{ width: '100%', justifyContent: 'center', opacity: status === 'sending' ? 0.7 : 1 }}
                  >
                    {status === 'sending' ? 'Sending...' : 'Send Message'}
                  </button>
                  <p style={formNoteStyle}>
                    No sales pitch. Just a straight conversation about your project.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

/* ── Styles ── */
const heroStyle = { padding: '6rem 0 3rem' };

const heroSubStyle = {
  fontFamily: 'var(--font-mono)',
  fontSize: '0.95rem',
  color: 'var(--text-muted)',
  lineHeight: 1.8,
  maxWidth: '520px',
  marginTop: '1rem',
};

const sectionStyle = { padding: '2rem 0 7rem' };

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: '3rem',
  alignItems: 'start',
};

const colHeadStyle = {
  fontFamily: 'var(--font-display)',
  fontWeight: 700,
  fontSize: '1.3rem',
  color: 'var(--text)',
  marginBottom: '1.75rem',
};

const leftColStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '0',
};

const contactListStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '0',
  borderTop: '1px solid var(--border)',
};

const contactItemStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  padding: '1.1rem 0',
  borderBottom: '1px solid var(--border)',
};

const contactIconStyle = {
  fontSize: '1.2rem',
  width: '40px',
  height: '40px',
  background: 'var(--surface)',
  border: '1px solid var(--border)',
  borderRadius: '10px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
};

const contactLabelStyle = {
  fontFamily: 'var(--font-mono)',
  fontSize: '0.72rem',
  color: 'var(--text-dim)',
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  margin: '0 0 0.2rem',
};

const contactValueStyle = {
  fontFamily: 'var(--font-mono)',
  fontSize: '0.9rem',
  color: 'var(--text)',
  margin: 0,
};

const contactValueLinkStyle = {
  fontFamily: 'var(--font-mono)',
  fontSize: '0.9rem',
  color: 'var(--primary)',
  textDecoration: 'none',
  transition: 'color 0.2s',
  display: 'block',
};

const availStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  marginTop: '1.5rem',
  padding: '0.75rem 1rem',
  background: 'var(--surface)',
  border: '1px solid var(--border)',
  borderRadius: 'var(--radius)',
};

const rightColStyle = {};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.25rem',
};

const fieldStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
};

const labelStyle = {
  fontFamily: 'var(--font-mono)',
  fontSize: '0.78rem',
  color: 'var(--text-muted)',
  letterSpacing: '0.05em',
};

const inputStyle = {
  padding: '0.85rem 1rem',
  borderRadius: 'var(--radius)',
  border: '1px solid var(--border)',
  background: 'var(--surface)',
  color: 'var(--text)',
  fontFamily: 'var(--font-mono)',
  fontSize: '0.9rem',
  transition: 'all 0.2s ease',
  width: '100%',
};

const textareaStyle = {
  ...inputStyle,
  minHeight: '140px',
  resize: 'vertical',
};

const successBoxStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.75rem',
  padding: '3rem 2rem',
  background: 'var(--surface)',
  border: '1px solid var(--border)',
  borderRadius: 'var(--radius-xl)',
  textAlign: 'center',
  minHeight: '260px',
};

const errorStyle = {
  fontFamily: 'var(--font-mono)',
  fontSize: '0.82rem',
  color: '#ff6b6b',
  background: 'rgba(255,107,107,0.08)',
  border: '1px solid rgba(255,107,107,0.2)',
  borderRadius: 'var(--radius)',
  padding: '0.75rem 1rem',
  margin: 0,
};

const formNoteStyle = {
  fontFamily: 'var(--font-mono)',
  fontSize: '0.75rem',
  color: 'var(--text-dim)',
  textAlign: 'center',
  margin: '0',
};

export default Contact;
