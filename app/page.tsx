import Image from 'next/image'
import Link from 'next/link'
import SignupForm from './components/SignupForm'

export default function HomePage() {
  return (
    <>
      {/* ===== NAV ===== */}
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: '24px 56px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: 'rgba(255, 253, 243, 0.7)',
          backdropFilter: 'saturate(180%) blur(20px)',
          WebkitBackdropFilter: 'saturate(180%) blur(20px)',
          borderBottom: '1px solid rgba(25, 36, 63, 0.05)',
        }}
      >
        <Link
          href="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            fontFamily: 'var(--font-inter-tight), system-ui, sans-serif',
            fontSize: '20px',
            fontWeight: 500,
            letterSpacing: '-0.025em',
            color: 'var(--navy-dark)',
          }}
        >
          <span className="nav-brand-mark" aria-hidden="true" />
          <span>Rose Hill Review</span>
        </Link>
        <div style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
          <Link href="#how" style={{ fontSize: '14px', fontWeight: 500, color: 'var(--navy-med)' }}>
            How it works
          </Link>
          <Link href="#audience" style={{ fontSize: '14px', fontWeight: 500, color: 'var(--navy-med)' }} className="nav-hide">
            Who it&apos;s for
          </Link>
          <Link href="#issues" style={{ fontSize: '14px', fontWeight: 500, color: 'var(--navy-med)' }} className="nav-hide">
            Issues
          </Link>
          <Link href="/contact" style={{ fontSize: '14px', fontWeight: 500, color: 'var(--navy-med)' }} className="nav-hide">
            Contact
          </Link>
          <Link
            href="#subscribe"
            style={{
              padding: '10px 20px',
              background: 'var(--navy-dark)',
              color: 'var(--white)',
              borderRadius: '100px',
              fontSize: '13px',
              fontWeight: 500,
            }}
          >
            Subscribe
          </Link>
        </div>
        <style>{`@media (max-width: 640px) { .nav-hide { display: none !important; } nav { padding: 18px 24px !important; } }`}</style>
      </nav>

      {/* ===== HERO ===== */}
      <section
        style={{
          paddingTop: '180px',
          paddingLeft: '56px',
          paddingRight: '56px',
          paddingBottom: 0,
          textAlign: 'center',
          maxWidth: '1100px',
          margin: '0 auto',
        }}
      >
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            fontFamily: 'var(--font-inter-tight), system-ui, sans-serif',
            fontSize: '13px',
            fontWeight: 500,
            letterSpacing: '0.04em',
            color: 'var(--navy-med)',
            marginBottom: '40px',
            padding: '8px 18px',
            background: 'var(--linen)',
            borderRadius: '100px',
          }}
        >
          <span className="pulse-dot" aria-hidden="true" />
          A psychedelic brief from Rose Hill Life Sciences
        </div>

        <h1
          style={{
            fontFamily: 'var(--font-inter-tight), system-ui, sans-serif',
            fontWeight: 200,
            letterSpacing: '-0.04em',
            lineHeight: 0.95,
            fontSize: 'clamp(56px, 9vw, 132px)',
            marginBottom: '32px',
            color: 'var(--navy-dark)',
            maxWidth: '1000px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          Find the{' '}
          <span className="gradient-text">signal.</span>
        </h1>

        <p
          style={{
            fontSize: 'clamp(18px, 1.6vw, 22px)',
            lineHeight: 1.5,
            color: 'var(--navy-med)',
            maxWidth: '640px',
            margin: '0 auto 64px',
            fontWeight: 400,
          }}
        >
          Psychedelic medicine is having its scientific moment. Most coverage cannot tell breakthrough from press release. Every Tuesday, you get the difference, in plain language, with the citations to back it up.
        </p>

        {/* Hero object */}
        <div
          style={{
            position: 'relative',
            margin: '0 auto 80px',
            maxWidth: '920px',
            aspectRatio: '16/9',
          }}
        >
          <div className="hero-object">
            <div className="grain" aria-hidden="true" />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                color: 'var(--white)',
                padding: '56px',
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-inter-tight), system-ui, sans-serif',
                  fontSize: '13px',
                  fontWeight: 500,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'rgba(255, 253, 243, 0.85)',
                  marginBottom: '28px',
                }}
              >
                {/* TODO: update Vol. 047 issue number placeholder */}
                This week &middot; Vol. 047
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-inter-tight), system-ui, sans-serif',
                  fontWeight: 300,
                  fontSize: 'clamp(28px, 3.4vw, 44px)',
                  lineHeight: 1.15,
                  letterSpacing: '-0.025em',
                  color: 'var(--white)',
                  maxWidth: '720px',
                  marginBottom: '24px',
                }}
              >
                The Compass Phase 3 readout, without the spin: what 941 patients actually showed us.
              </div>
              <div
                style={{
                  fontSize: '14px',
                  fontWeight: 500,
                  color: 'rgba(255, 253, 243, 0.75)',
                  letterSpacing: '0.04em',
                }}
              >
                7 min read &middot; Tuesday, May 5
              </div>
            </div>
          </div>
        </div>

        {/* Hero signup */}
        <div
          id="subscribe"
          style={{
            maxWidth: '520px',
            margin: '0 auto 120px',
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-inter-tight), system-ui, sans-serif',
              fontSize: '12px',
              fontWeight: 500,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--navy-lite)',
              textAlign: 'center',
              marginBottom: '16px',
            }}
          >
            Get the next issue, free
          </div>
          <SignupForm variant="hero" />
          <div
            style={{
              textAlign: 'center',
              marginTop: '16px',
              fontSize: '13px',
              color: 'var(--navy-lite)',
            }}
          >
            {/* TODO: update subscriber count */}
            Join <strong style={{ color: 'var(--navy-dark)', fontWeight: 500 }}>8,400+ readers</strong> &middot; One email per week &middot; Unsubscribe anytime
          </div>
        </div>
      </section>

      {/* ===== STORY: Signal vs Noise ===== */}
      <section
        style={{
          padding: '140px 56px',
          background: 'var(--linen)',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div
            style={{
              maxWidth: '760px',
              margin: '0 auto 100px',
              textAlign: 'center',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-inter-tight), system-ui, sans-serif',
                fontSize: '12px',
                fontWeight: 500,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--navy-lite)',
                marginBottom: '24px',
              }}
            >
              Why this exists
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-inter-tight), system-ui, sans-serif',
                fontWeight: 200,
                letterSpacing: '-0.04em',
                lineHeight: 0.95,
                fontSize: 'clamp(40px, 5vw, 68px)',
                color: 'var(--navy-dark)',
                marginBottom: '32px',
              }}
            >
              The field is loud. We make it{' '}
              <span className="gradient-text">legible.</span>
            </h2>
            <p
              style={{
                fontSize: '19px',
                lineHeight: 1.55,
                color: 'var(--navy-med)',
                fontWeight: 400,
              }}
            >
              In 2026, more than 1,800 articles will be published about psychedelic medicine. Most will be press releases dressed as journalism. A small fraction will move the science forward. We read everything. We write only about what matters.
            </p>
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section
        id="how"
        style={{
          padding: '140px 56px',
          background: 'var(--white)',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ maxWidth: '760px', margin: '0 auto 80px', textAlign: 'center' }}>
            <div
              style={{
                fontFamily: 'var(--font-inter-tight), system-ui, sans-serif',
                fontSize: '12px',
                fontWeight: 500,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--navy-lite)',
                marginBottom: '24px',
              }}
            >
              How a Tuesday morning works
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-inter-tight), system-ui, sans-serif',
                fontWeight: 200,
                letterSpacing: '-0.04em',
                lineHeight: 0.95,
                fontSize: 'clamp(40px, 5vw, 64px)',
                color: 'var(--navy-dark)',
                marginBottom: '24px',
              }}
            >
              Three steps.{' '}
              <span className="gradient-text">One inbox.</span>
            </h2>
            <p style={{ fontSize: '18px', lineHeight: 1.55, color: 'var(--navy-med)' }}>
              Every issue follows the same arc: observation, evidence, takeaway. The structure is what makes it readable in five minutes and useful for the rest of the week.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '32px',
            }}
            className="how-grid"
          >
            {/* Step 1 */}
            <div
              style={{
                background: 'var(--linen)',
                borderRadius: '24px',
                padding: '40px',
                display: 'flex',
                flexDirection: 'column',
                gap: '24px',
                transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
              className="how-card"
            >
              <div className="how-illustration">
                <svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                  <defs>
                    <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#B49DD5"/>
                      <stop offset="100%" stopColor="#527FC1"/>
                    </linearGradient>
                  </defs>
                  <rect width="320" height="240" fill="#EFEDE4"/>
                  <rect x="40" y="80" width="120" height="140" rx="6" fill="#FFFDF3" stroke="#19243F" strokeOpacity="0.1" strokeWidth="1" transform="rotate(-8 100 150)"/>
                  <rect x="60" y="70" width="120" height="140" rx="6" fill="#FFFDF3" stroke="#19243F" strokeOpacity="0.15" strokeWidth="1" transform="rotate(-3 120 140)"/>
                  <rect x="80" y="60" width="120" height="140" rx="6" fill="#FFFDF3" stroke="#19243F" strokeOpacity="0.2" strokeWidth="1"/>
                  <line x1="92" y1="80" x2="180" y2="80" stroke="#747F93" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="92" y1="92" x2="170" y2="92" stroke="#C4D1E8" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="92" y1="104" x2="175" y2="104" stroke="#C4D1E8" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="92" y1="116" x2="160" y2="116" stroke="#C4D1E8" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="92" y1="128" x2="172" y2="128" stroke="#C4D1E8" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="92" y1="140" x2="155" y2="140" stroke="#C4D1E8" strokeWidth="2" strokeLinecap="round"/>
                  <circle cx="220" cy="130" r="44" fill="none" stroke="url(#g1)" strokeWidth="6"/>
                  <line x1="252" y1="162" x2="280" y2="190" stroke="url(#g1)" strokeWidth="6" strokeLinecap="round"/>
                  <circle cx="220" cy="130" r="36" fill="#FFFDF3" fillOpacity="0.5"/>
                </svg>
              </div>
              <div style={{ fontFamily: 'var(--font-inter-tight), system-ui, sans-serif', fontSize: '12px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--navy-lite)' }}>
                Step 01 / Read
              </div>
              <h3 style={{ fontFamily: 'var(--font-inter-tight), system-ui, sans-serif', fontSize: '26px', fontWeight: 400, letterSpacing: '-0.02em', color: 'var(--navy-dark)', lineHeight: 1.2 }}>
                We comb 50+ primary sources.
              </h3>
              <p style={{ fontSize: '15px', lineHeight: 1.6, color: 'var(--navy-med)' }}>
                PubMed, ClinicalTrials.gov, FDA filings, EMA notices, conference proceedings, and direct conversations with researchers. So you do not have to.
              </p>
            </div>

            {/* Step 2 */}
            <div
              style={{
                background: 'var(--linen)',
                borderRadius: '24px',
                padding: '40px',
                display: 'flex',
                flexDirection: 'column',
                gap: '24px',
                transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
              className="how-card"
            >
              <div className="how-illustration">
                <svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                  <defs>
                    <linearGradient id="g2" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#527FC1"/>
                      <stop offset="100%" stopColor="#F2C875"/>
                    </linearGradient>
                  </defs>
                  <rect width="320" height="240" fill="#EFEDE4"/>
                  <path d="M 60 60 L 260 60 L 200 130 L 200 200 L 160 220 L 160 130 Z" fill="url(#g2)" fillOpacity="0.3" stroke="url(#g2)" strokeWidth="2"/>
                  <circle cx="90" cy="50" r="8" fill="#C4D1E8"/>
                  <circle cx="120" cy="42" r="6" fill="#B49DD5"/>
                  <circle cx="160" cy="48" r="10" fill="#527FC1"/>
                  <circle cx="200" cy="42" r="7" fill="#F2C875"/>
                  <circle cx="230" cy="50" r="8" fill="#C4D1E8"/>
                  <circle cx="170" cy="210" r="6" fill="#19243F"/>
                  <circle cx="180" cy="225" r="5" fill="#19243F"/>
                  <circle cx="190" cy="215" r="6" fill="#19243F"/>
                  <line x1="80" y1="90" x2="240" y2="90" stroke="#FFFDF3" strokeWidth="1.5" strokeDasharray="3,3"/>
                  <line x1="100" y1="115" x2="220" y2="115" stroke="#FFFDF3" strokeWidth="1.5" strokeDasharray="3,3"/>
                </svg>
              </div>
              <div style={{ fontFamily: 'var(--font-inter-tight), system-ui, sans-serif', fontSize: '12px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--navy-lite)' }}>
                Step 02 / Filter
              </div>
              <h3 style={{ fontFamily: 'var(--font-inter-tight), system-ui, sans-serif', fontSize: '26px', fontWeight: 400, letterSpacing: '-0.02em', color: 'var(--navy-dark)', lineHeight: 1.2 }}>
                We separate signal from noise.
              </h3>
              <p style={{ fontSize: '15px', lineHeight: 1.6, color: 'var(--navy-med)' }}>
                Press releases get cross-checked against trial data. Hot takes get checked against the underlying paper. Hype gets named as such.
              </p>
            </div>

            {/* Step 3 */}
            <div
              style={{
                background: 'var(--linen)',
                borderRadius: '24px',
                padding: '40px',
                display: 'flex',
                flexDirection: 'column',
                gap: '24px',
                transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
              className="how-card"
            >
              <div className="how-illustration">
                <svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                  <defs>
                    <linearGradient id="g3" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#F2C875"/>
                      <stop offset="100%" stopColor="#B49DD5"/>
                    </linearGradient>
                  </defs>
                  <rect width="320" height="240" fill="#EFEDE4"/>
                  <rect x="60" y="80" width="200" height="120" rx="8" fill="#FFFDF3" stroke="#19243F" strokeOpacity="0.15" strokeWidth="2"/>
                  <path d="M 60 88 L 160 150 L 260 88" fill="none" stroke="#19243F" strokeOpacity="0.2" strokeWidth="2"/>
                  <line x1="80" y1="170" x2="180" y2="170" stroke="#747F93" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="80" y1="182" x2="160" y2="182" stroke="#C4D1E8" strokeWidth="2" strokeLinecap="round"/>
                  <circle cx="240" cy="60" r="20" fill="url(#g3)" fillOpacity="0.85"/>
                  <path d="M 240 50 L 240 70 M 230 60 L 250 60" stroke="#FFFDF3" strokeWidth="2.5" strokeLinecap="round"/>
                  <line x1="280" y1="70" x2="295" y2="65" stroke="url(#g3)" strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
                  <line x1="280" y1="80" x2="298" y2="80" stroke="url(#g3)" strokeWidth="2" strokeLinecap="round" opacity="0.4"/>
                </svg>
              </div>
              <div style={{ fontFamily: 'var(--font-inter-tight), system-ui, sans-serif', fontSize: '12px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--navy-lite)' }}>
                Step 03 / Send
              </div>
              <h3 style={{ fontFamily: 'var(--font-inter-tight), system-ui, sans-serif', fontSize: '26px', fontWeight: 400, letterSpacing: '-0.02em', color: 'var(--navy-dark)', lineHeight: 1.2 }}>
                Tuesday morning, in your inbox.
              </h3>
              <p style={{ fontSize: '15px', lineHeight: 1.6, color: 'var(--navy-med)' }}>
                500 to 1,000 words. Charts where they help. Citations always. Written so a curious patient and a working researcher both leave with something useful.
              </p>
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 1024px) { .how-grid { grid-template-columns: 1fr 1fr !important; } }
          @media (max-width: 640px) { .how-grid { grid-template-columns: 1fr !important; } #how { padding: 90px 24px !important; } }
          .how-card:hover { transform: translateY(-6px); }
        `}</style>
      </section>

      {/* ===== AUDIENCE ===== */}
      <section
        id="audience"
        style={{ padding: '140px 56px', background: 'var(--linen)' }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ maxWidth: '760px', margin: '0 auto 80px', textAlign: 'center' }}>
            <div style={{ fontFamily: 'var(--font-inter-tight), system-ui, sans-serif', fontSize: '12px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--navy-lite)', marginBottom: '24px' }}>
              Who it&apos;s for
            </div>
            <h2 style={{ fontFamily: 'var(--font-inter-tight), system-ui, sans-serif', fontWeight: 200, letterSpacing: '-0.04em', lineHeight: 0.95, fontSize: 'clamp(40px, 5vw, 64px)', color: 'var(--navy-dark)', marginBottom: '24px' }}>
              Four kinds of readers.{' '}
              <span className="gradient-text">One newsletter.</span>
            </h2>
            <p style={{ fontSize: '18px', lineHeight: 1.55, color: 'var(--navy-med)' }}>
              The psychedelic medicine space moves fast and gets reported badly. The Rose Hill Review exists for the readers who cannot afford either problem.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }} className="audience-grid">
            {[
              {
                iconBg: 'linear-gradient(135deg, var(--lavender), var(--sky-blue))',
                tag: '01 / Patients & advocates',
                title: 'For people navigating real conditions.',
                desc: "Veterans, those exploring options for treatment-resistant depression, PTSD, stroke recovery, plus the people supporting them. Get clarity on what is available, what is coming, and what is still hype.",
                icon: <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="white" strokeWidth="1.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>,
              },
              {
                iconBg: 'linear-gradient(135deg, var(--sky-blue), var(--navy-med))',
                tag: '02 / Investors & operators',
                title: 'For investors and operators who need reliable signal.',
                desc: 'LPs, family offices, and operators trying to separate credible early-stage opportunities from PR-driven promotion. We name names, cite sources, and flag what is actually moving.',
                icon: <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="white" strokeWidth="1.5"><path d="M3 3v18h18M7 14l4-4 4 4 5-5"/></svg>,
              },
              {
                iconBg: 'linear-gradient(135deg, var(--sunshine), var(--lavender))',
                tag: '03 / Researchers & clinicians',
                title: 'For researchers and clinicians who need consolidated coverage.',
                desc: 'Neuroscientists, psychiatrists, and trial coordinators who want consolidated weekly updates on protocols, outcomes, and regulatory shifts — drawn from primary sources, not secondhand summaries.',
                icon: <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="white" strokeWidth="1.5"><path d="M9 2v6.5L4 12v8h16v-8l-5-3.5V2zM9 2h6"/></svg>,
              },
              {
                iconBg: 'linear-gradient(135deg, var(--light-blue), var(--sunshine))',
                tag: '04 / Curious public',
                title: 'For people who just want to understand.',
                desc: 'Health journalists, policy thinkers, and the genuinely curious. Accessible explainers grounded in primary research. No woo. No moral panic. Just the work.',
                icon: <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="white" strokeWidth="1.5"><path d="M12 2a10 10 0 1 0 10 10M12 2v10l7 7M12 2a10 10 0 0 1 10 10"/></svg>,
              },
            ].map((card) => (
              <div key={card.tag} style={{ background: 'var(--white)', borderRadius: '24px', padding: '48px', display: 'flex', gap: '32px', alignItems: 'flex-start', transition: 'box-shadow 0.3s ease' }} className="audience-card">
                <div style={{ width: '64px', height: '64px', borderRadius: '18px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: card.iconBg }} aria-hidden="true">
                  {card.icon}
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-inter-tight), system-ui, sans-serif', fontSize: '12px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--sky-blue)', marginBottom: '16px' }}>
                    {card.tag}
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-inter-tight), system-ui, sans-serif', fontSize: '22px', fontWeight: 500, letterSpacing: '-0.02em', color: 'var(--navy-dark)', marginBottom: '8px' }}>
                    {card.title}
                  </h3>
                  <p style={{ fontSize: '15px', lineHeight: 1.6, color: 'var(--navy-med)' }}>{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 1024px) { .audience-grid { grid-template-columns: 1fr !important; } }
          @media (max-width: 640px) { .audience-card { flex-direction: column !important; padding: 32px !important; } #audience { padding: 90px 24px !important; } }
          .audience-card:hover { box-shadow: 0 20px 40px -20px rgba(25, 36, 63, 0.12); }
        `}</style>
      </section>

      {/* ===== RECENT ISSUES ===== */}
      <section id="issues" style={{ padding: '140px 56px', background: 'var(--white)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '64px', gap: '40px', flexWrap: 'wrap' }}>
            <div style={{ maxWidth: '600px' }}>
              <div style={{ fontFamily: 'var(--font-inter-tight), system-ui, sans-serif', fontSize: '12px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--navy-lite)', marginBottom: '24px' }}>Recent issues</div>
              <h2 style={{ fontFamily: 'var(--font-inter-tight), system-ui, sans-serif', fontWeight: 200, letterSpacing: '-0.04em', lineHeight: 0.95, fontSize: 'clamp(40px, 5vw, 64px)', color: 'var(--navy-dark)' }}>
                The latest from <span className="gradient-text">Rose Hill Review.</span>
              </h2>
            </div>
            <a href="/archive" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '14px 24px', border: '1px solid rgba(25, 36, 63, 0.15)', borderRadius: '100px', fontSize: '14px', fontWeight: 500, color: 'var(--navy-dark)', transition: 'all 0.2s ease' }} className="view-all-link">
              {/* TODO: update archive count */}
              Browse all 47 issues
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>

          {/* Featured */}
          <div style={{ marginBottom: '32px' }}>
            <article className="issue-card-large" style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', background: 'var(--linen)', borderRadius: '24px', overflow: 'hidden', cursor: 'pointer', transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)' }}>
              <div style={{ padding: '64px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '480px' }}>
                <div>
                  <div style={{ display: 'flex', gap: '12px', fontFamily: 'var(--font-inter-tight), system-ui, sans-serif', fontSize: '12px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--navy-lite)', marginBottom: '32px' }}>
                    <span style={{ color: 'var(--sky-blue)' }}>Featured &middot; Clinical Trials</span>
                    <span>&middot;</span>
                    <span>May 5, 2026</span>
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-inter-tight), system-ui, sans-serif', fontSize: 'clamp(28px, 3vw, 38px)', fontWeight: 400, letterSpacing: '-0.025em', color: 'var(--navy-dark)', lineHeight: 1.1, marginBottom: '20px' }}>
                    The COMP360 Phase 3 readout, <span className="gradient-text">without the spin.</span>
                  </h3>
                  <p style={{ fontSize: '16px', lineHeight: 1.6, color: 'var(--navy-med)', marginBottom: '32px' }}>
                    Compass Pathways&apos; Phase 3 data for treatment-resistant depression dropped this week. Headlines called it a breakthrough. The actual numbers tell a more interesting, more honest story. Here is what 941 patients across 32 sites actually showed us, plus the three caveats every investor and clinician needs to know.
                  </p>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '14px', color: 'var(--navy-lite)' }}>
                  <span>7 min read</span>
                  <div className="read-arrow">
                    <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" stroke="white" width="16" height="16"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </div>
                </div>
              </div>
              <div className="issue-card-large-visual">
                <div className="grain-strong" aria-hidden="true" />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '56px', color: 'var(--white)' }}>
                  <div style={{ fontFamily: 'var(--font-inter-tight), system-ui, sans-serif', fontSize: '12px', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', opacity: 0.8, marginBottom: '8px' }}>This week</div>
                  {/* TODO: update Vol. 047 issue number placeholder */}
                  <div style={{ fontFamily: 'var(--font-inter-tight), system-ui, sans-serif', fontSize: 'clamp(48px, 8vw, 96px)', fontWeight: 200, letterSpacing: '-0.04em', lineHeight: 1 }}>047</div>
                </div>
              </div>
            </article>
          </div>

          {/* Issue grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }} className="issues-grid">
            {[
              { cat: 'Regulatory', vol: 'Vol. 046', title: "FDA's new psychedelic guidance, decoded.", date: 'Apr 28', time: '5 min' },
              { cat: 'Patient story', vol: 'Vol. 045', title: 'A veteran, a trial, and what came after.', date: 'Apr 21', time: '6 min' },
              { cat: 'Research', vol: 'Vol. 044', title: "The neuroplasticity paper everyone's misreading.", date: 'Apr 14', time: '4 min' },
            ].map((issue) => (
              <article key={issue.vol} className="issue-card" style={{ background: 'var(--linen)', borderRadius: '20px', padding: '36px', cursor: 'pointer', transition: 'transform 0.3s ease', display: 'flex', flexDirection: 'column', minHeight: '280px' }}>
                <div style={{ display: 'flex', gap: '12px', fontFamily: 'var(--font-inter-tight), system-ui, sans-serif', fontSize: '12px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--navy-lite)', marginBottom: '32px' }}>
                  {/* TODO: placeholder Vol. numbers */}
                  <span style={{ color: 'var(--sky-blue)' }}>{issue.cat}</span>
                  <span>&middot;</span>
                  <span>{issue.vol}</span>
                </div>
                <h3 style={{ fontFamily: 'var(--font-inter-tight), system-ui, sans-serif', fontSize: '22px', fontWeight: 400, letterSpacing: '-0.02em', color: 'var(--navy-dark)', lineHeight: 1.2, marginBottom: '24px', flex: 1 }}>
                  {issue.title}
                </h3>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '13px', color: 'var(--navy-lite)', fontWeight: 500 }}>
                  <span>{issue.date} &middot; {issue.time}</span>
                  <div className="arrow-circle">
                    <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" stroke="var(--navy-med)" width="12" height="12"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 1024px) { .issues-grid { grid-template-columns: 1fr 1fr !important; } .issue-card-large { grid-template-columns: 1fr !important; } }
          @media (max-width: 640px) { .issues-grid { grid-template-columns: 1fr !important; } #issues { padding: 90px 24px !important; } }
          .issue-card-large:hover { transform: translateY(-4px); }
          .issue-card:hover { transform: translateY(-4px); }
          .view-all-link:hover { background: var(--navy-dark) !important; color: var(--white) !important; border-color: var(--navy-dark) !important; }
        `}</style>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section style={{ padding: '140px 56px', background: 'var(--linen)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 80px' }}>
            <div style={{ fontFamily: 'var(--font-inter-tight), system-ui, sans-serif', fontSize: '12px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--navy-lite)', marginBottom: '24px' }}>What readers say</div>
            <h2 style={{ fontFamily: 'var(--font-inter-tight), system-ui, sans-serif', fontWeight: 200, letterSpacing: '-0.04em', lineHeight: 0.95, fontSize: 'clamp(40px, 5vw, 64px)', color: 'var(--navy-dark)', marginBottom: '24px' }}>
              From the inboxes of <span className="gradient-text">people who&apos;d know.</span>
            </h2>
            <p style={{ fontSize: '18px', lineHeight: 1.55, color: 'var(--navy-med)' }}>
              Researchers, investors, and patients sharing what the Rose Hill Review does for their week.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }} className="testimonials-grid">
            {[
              {
                quote: 'The only psychedelic newsletter I forward to my entire research team. They do the work of reading the actual papers so we do not have to argue about second-hand summaries.',
                initials: 'PI', name: 'Principal Investigator', role: 'Academic Medical Center',
                quoteColor: 'var(--lavender)', avatarBg: 'linear-gradient(135deg, var(--lavender), var(--sky-blue))',
              },
              {
                quote: 'I run a fund focused on this space. The Rose Hill Review is the first thing I read Tuesday morning. It is the only one I trust to flag a press release dressed up as a breakthrough.',
                initials: 'MP', name: 'Managing Partner', role: 'Life Sciences VC',
                quoteColor: 'var(--sky-blue)', avatarBg: 'linear-gradient(135deg, var(--sky-blue), var(--navy-med))',
              },
              {
                quote: 'As a veteran exploring trial options, this newsletter cut through more confusion in three issues than six months of forums. Honest, careful, never selling me anything.',
                initials: 'V', name: 'U.S. Military Veteran', role: 'Reader',
                quoteColor: 'var(--sunshine)', avatarBg: 'linear-gradient(135deg, var(--sunshine), var(--lavender))',
              },
            ].map((t, i) => (
              <div key={i} style={{ background: 'var(--white)', padding: '40px', borderRadius: '24px', display: 'flex', flexDirection: 'column' }}>
                <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32" style={{ color: t.quoteColor, marginBottom: '24px', flexShrink: 0 }} aria-hidden="true">
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1zm12 0c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/>
                </svg>
                <p style={{ fontFamily: 'var(--font-inter-tight), system-ui, sans-serif', fontSize: '18px', fontWeight: 400, lineHeight: 1.45, letterSpacing: '-0.01em', color: 'var(--navy-dark)', marginBottom: '32px', flex: 1 }}>
                  {t.quote}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', paddingTop: '24px', borderTop: '1px solid rgba(25, 36, 63, 0.08)' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-inter-tight), system-ui, sans-serif', fontSize: '14px', color: 'var(--white)', fontWeight: 500, background: t.avatarBg, flexShrink: 0 }} aria-hidden="true">
                    {t.initials}
                  </div>
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--navy-dark)' }}>{t.name}</div>
                    <div style={{ fontSize: '13px', color: 'var(--navy-lite)', marginTop: '2px' }}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 1024px) { .testimonials-grid { grid-template-columns: 1fr 1fr !important; } }
          @media (max-width: 640px) { .testimonials-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>

      {/* ===== ABOUT ===== */}
      <section id="about" style={{ padding: '140px 56px', background: 'var(--white)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: '80px', alignItems: 'center' }} className="about-grid">
            <div className="about-photo-wrap" style={{ position: 'relative', aspectRatio: '4/5' }}>
              <div style={{ width: '100%', height: '100%', borderRadius: '18px', overflow: 'hidden', position: 'relative' }}>
                <Image
                  src="/assets/domenic.jpg"
                  alt="Domenic Suppa, editor of the Rose Hill Review"
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 1024px) 480px, 400px"
                  priority
                />
              </div>
              <div style={{ position: 'absolute', bottom: '24px', left: '24px', padding: '12px 20px', background: 'rgba(25, 36, 63, 0.85)', backdropFilter: 'blur(12px)', borderRadius: '100px', color: 'var(--white)', fontFamily: 'var(--font-inter-tight), system-ui, sans-serif', fontSize: '12px', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                Editor &middot; Rose Hill Review
              </div>
            </div>

            <div>
              <div style={{ fontFamily: 'var(--font-inter-tight), system-ui, sans-serif', fontSize: '12px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--navy-lite)', marginBottom: '24px' }}>About</div>
              <h2 style={{ fontFamily: 'var(--font-inter-tight), system-ui, sans-serif', fontWeight: 200, letterSpacing: '-0.04em', lineHeight: 0.95, fontSize: 'clamp(40px, 4.5vw, 56px)', color: 'var(--navy-dark)', marginBottom: '32px' }}>
                From <span className="gradient-text">Rose Hill Life Sciences.</span>
              </h2>
              <p style={{ fontSize: '17px', lineHeight: 1.65, color: 'var(--navy-med)', marginBottom: '20px' }}>
                Domenic is the co-founder and Chief Operating Officer of Rose Hill Health Holdings, with 11+ years as a senior executive in operationally complex, highly regulated industries. His path into alternative medicine started in 2010 with a seed investment into Evolab, a Denver-based vertically integrated cannabis company, where he served as COO from 2013 to 2018 through the acquisition by Harvest Health and Recreation (HARV: CSE). He went on to lead manufacturing operations at Supreme Cannabis (CSE: FIRE), supported the BLISSCO acquisition, and has worked with national brands including KKE, Monogram, Native Sun, Terps, and Tilt.
              </p>
              <p style={{ fontSize: '17px', lineHeight: 1.65, color: 'var(--navy-med)', marginBottom: '20px' }}>
                The Rose Hill Review was built because credible science kept getting crowded out by hot takes, and credible companies kept getting conflated with hype factories. Each issue is built from primary sources: peer-reviewed papers, regulatory filings, trial registries, and direct conversations with the researchers and clinicians shaping the field. The goal is not to be the loudest voice in psychedelic medicine. It is to be the one you trust when the next headline drops.
              </p>
              <div style={{ marginTop: '40px', paddingTop: '32px', borderTop: '1px solid rgba(25, 36, 63, 0.1)', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }} className="creds-grid">
                {[
                  { label: 'Co-founder, COO', value: 'Rose Hill Life Sciences' },
                  { label: 'Industry experience', value: '11+ years operations' },
                  { label: 'Connect', value: null, link: 'https://www.linkedin.com/in/domenic-suppa-19550316/' },
                ].map((c) => (
                  <div key={c.label}>
                    <div style={{ fontFamily: 'var(--font-inter-tight), system-ui, sans-serif', fontSize: '11px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--navy-lite)', marginBottom: '8px' }}>{c.label}</div>
                    {c.link ? (
                      <a href={c.link} target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--font-inter-tight), system-ui, sans-serif', fontSize: '17px', fontWeight: 500, color: 'var(--sky-blue)', letterSpacing: '-0.015em', lineHeight: 1.3, borderBottom: '1px solid var(--sky-blue)', paddingBottom: '2px' }}>
                        LinkedIn
                      </a>
                    ) : (
                      <div style={{ fontFamily: 'var(--font-inter-tight), system-ui, sans-serif', fontSize: '17px', fontWeight: 500, color: 'var(--navy-dark)', letterSpacing: '-0.015em', lineHeight: 1.3 }}>{c.value}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 1024px) { .about-grid { grid-template-columns: 1fr !important; gap: 56px !important; } .about-photo-wrap { max-width: 480px !important; margin: 0 auto !important; } }
          @media (max-width: 640px) { #about { padding: 90px 24px !important; } .creds-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>

      {/* ===== CTA ===== */}
      <section style={{ padding: '140px 56px', background: 'var(--navy-dark)', color: 'var(--white)', position: 'relative', overflow: 'hidden' }}>
        <div className="cta-bg" aria-hidden="true" />
        <div style={{ position: 'relative', maxWidth: '760px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontFamily: 'var(--font-inter-tight), system-ui, sans-serif', fontSize: '12px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--sunshine)', marginBottom: '24px' }}>
            {/* TODO: update subscriber count */}
            Join 8,400+ readers
          </div>
          <h2 style={{ fontFamily: 'var(--font-inter-tight), system-ui, sans-serif', fontWeight: 200, letterSpacing: '-0.04em', lineHeight: 0.95, fontSize: 'clamp(48px, 6.5vw, 88px)', color: 'var(--white)', marginBottom: '32px' }}>
            One email.<br />
            Every Tuesday.<br />
            <span className="gradient-text">Worth the open.</span>
          </h2>
          <p style={{ fontSize: '19px', color: 'rgba(255, 253, 243, 0.7)', marginBottom: '48px' }}>
            The next issue ships in five days. Get on the list and start with Vol. 048.
          </p>
          <SignupForm variant="cta" />
        </div>
        <style>{`@media (max-width: 640px) { section[style*="background: var(--navy-dark)"] { padding: 90px 24px !important; } }`}</style>
      </section>

      {/* ===== FOOTER ===== */}
      <footer style={{ background: 'var(--navy-dark)', color: 'rgba(239, 237, 228, 0.6)', padding: '60px 56px 40px', borderTop: '1px solid rgba(239, 237, 228, 0.08)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '48px', marginBottom: '48px' }} className="footer-grid">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontFamily: 'var(--font-inter-tight), system-ui, sans-serif', fontSize: '20px', fontWeight: 500, letterSpacing: '-0.025em', color: 'var(--linen)', marginBottom: '16px' }}>
              <span className="nav-brand-mark" aria-hidden="true" />
              <span>Rose Hill Review</span>
            </div>
            <p style={{ fontSize: '14px', maxWidth: '320px', lineHeight: 1.6 }}>
              A weekly newsletter on psychedelic medicine. Published by Rose Hill Life Sciences.
            </p>
          </div>
          <div>
            <h4 style={{ fontFamily: 'var(--font-inter-tight), system-ui, sans-serif', fontSize: '11px', fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--linen)', marginBottom: '20px' }}>The Newsletter</h4>
            {[['#issues', 'Recent issues'], ['/archive', 'Full archive'], ['#subscribe', 'Subscribe']].map(([href, label]) => (
              <a key={href} href={href} style={{ display: 'block', fontSize: '14px', color: 'rgba(239, 237, 228, 0.6)', marginBottom: '12px' }}>{label}</a>
            ))}
          </div>
          <div>
            <h4 style={{ fontFamily: 'var(--font-inter-tight), system-ui, sans-serif', fontSize: '11px', fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--linen)', marginBottom: '20px' }}>Rose Hill</h4>
            {[['https://rosehill.life', 'Main site'], ['https://rosehill.life/blog', 'Blog'], ['mailto:domenic@rosehill.life', 'Contact']].map(([href, label]) => (
              <a key={href} href={href} style={{ display: 'block', fontSize: '14px', color: 'rgba(239, 237, 228, 0.6)', marginBottom: '12px' }}>{label}</a>
            ))}
          </div>
          <div>
            <h4 style={{ fontFamily: 'var(--font-inter-tight), system-ui, sans-serif', fontSize: '11px', fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--linen)', marginBottom: '20px' }}>Connect</h4>
            {[['https://twitter.com/RHLifeSciences', 'X / Twitter'], ['https://linkedin.com/company/rosehilllifesciences/', 'LinkedIn'], ['https://instagram.com/rosehill_lifesciences', 'Instagram']].map(([href, label]) => (
              <a key={href} href={href} target="_blank" rel="noopener noreferrer" style={{ display: 'block', fontSize: '14px', color: 'rgba(239, 237, 228, 0.6)', marginBottom: '12px' }}>{label}</a>
            ))}
          </div>
        </div>
        <div style={{ maxWidth: '1200px', margin: '0 auto', paddingTop: '32px', borderTop: '1px solid rgba(239, 237, 228, 0.08)', display: 'flex', justifyContent: 'space-between', fontSize: '13px', color: 'rgba(239, 237, 228, 0.5)' }} className="footer-bottom-bar">
          <span>&copy; 2026 Rose Hill Life Sciences</span>
          <span>Shrewsbury, MA</span>
        </div>
        <style>{`
          @media (max-width: 1024px) { .footer-grid { grid-template-columns: 1fr 1fr !important; } }
          @media (max-width: 640px) { .footer-grid { grid-template-columns: 1fr !important; } footer { padding: 48px 24px 32px !important; } .footer-bottom-bar { flex-direction: column; gap: 8px; } }
        `}</style>
      </footer>
    </>
  )
}
