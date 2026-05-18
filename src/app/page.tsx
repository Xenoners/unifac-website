import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

const stats = [
  { value: '20+', label: 'Clubs' },
  { value: '11', label: 'Activiteiten' },
  { value: '1967', label: 'Opgericht' },
]

const featuredEvents = [
  {
    title: 'Grote Verwarringsquiz',
    date: 'Februari',
    tag: 'Academisch',
    description: 'Ons jaarlijkse quizavond voor studenten en vrienden van de Stadscampus.',
  },
  {
    title: 'Calamartes Festival',
    date: 'Mei',
    tag: 'Festival',
    description: 'Het grote studentenfestival van de UAntwerpen. Muziek, sfeer en studentenleven op zijn best.',
  },
  {
    title: 'Galabal',
    date: 'Maart',
    tag: 'Gala',
    description: 'De meest elegante avond van het academiejaar, voor studenten en alumni.',
  },
  {
    title: 'Verkenningsdagen',
    date: 'September',
    tag: 'Introductie',
    description: 'Welkom aan alle nieuwe studenten! Ontdek het Antwerpse studentenleven.',
  },
]

const pillars = [
  { title: 'Representatie', desc: 'We vertegenwoordigen studenten bij de UAntwerpen en de stad Antwerpen.' },
  { title: 'Evenementen', desc: '11 jaarlijkse evenementen die het academiejaar kleuren.' },
  { title: 'Clubs', desc: 'We ondersteunen 20+ studentenclubs op de Stadscampus.' },
  { title: 'Netwerk', desc: 'Verbinding met partners, alumni en de Antwerpse studentenwereld.' },
]

const clubCategories = [
  {
    name: 'Faculteitsclubs',
    count: '8+',
    description: 'Clubs verbonden aan een specifieke faculteit of opleiding binnen de Stadscampus.',
  },
  {
    name: 'Studiegerelateerd',
    count: '5+',
    description: 'Clubs die aansluiten bij bepaalde studierichtingen of academische interesses.',
  },
  {
    name: 'Thematisch',
    count: '7+',
    description: "Clubs rond specifieke thema's: cultuur, sport, internationaal, en meer.",
  },
]

export default function HomePage() {
  return (
    <>
      {/* ── HERO ────────────────────────────────── */}
      <section className="relative min-h-[calc(100vh-72px)] flex items-center justify-center overflow-hidden bg-deep">
        {/* Background layers */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Dot grid */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />
          {/* Navy radial glow */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse 80% 70% at 50% 40%, rgba(0,48,135,0.55) 0%, transparent 70%)',
              animation: 'gradientPulse 9s ease-in-out infinite',
            }}
          />
          {/* Gold bottom accent */}
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px]"
            style={{
              background:
                'radial-gradient(ellipse at center bottom, rgba(245,166,35,0.07) 0%, transparent 70%)',
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center py-20">
          {/* Eyebrow */}
          <div className="anim-fade-up" style={{ animationDelay: '0.05s' }}>
            <span className="inline-flex items-center gap-3 text-[11px] tracking-[0.22em] text-white/35 uppercase font-medium mb-10">
              <span className="block w-10 h-px bg-white/15" />
              Universiteit Antwerpen · Stadscampus
              <span className="block w-10 h-px bg-white/15" />
            </span>
          </div>

          {/* Title */}
          <h1
            className="font-display text-[clamp(5rem,14vw,10rem)] font-extrabold leading-none tracking-tight text-white anim-fade-up"
            style={{ animationDelay: '0.2s' }}
          >
            UNIFAC
          </h1>

          {/* Rule + subtitle */}
          <div className="anim-fade-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center justify-center gap-4 my-7">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold/60" />
              <div className="w-1.5 h-1.5 bg-gold rounded-full" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold/60" />
            </div>
            <p className="text-base md:text-lg text-white/50 max-w-md mx-auto leading-relaxed">
              Overkoepelende studentenvereniging aan de Stadscampus.
              Jouw toegang tot het Antwerpse studentenleven.
            </p>
          </div>

          {/* CTAs */}
          <div
            className="flex flex-wrap justify-center gap-3 mt-10 anim-fade-up"
            style={{ animationDelay: '0.6s' }}
          >
            <Link
              href="/activiteiten"
              className="bg-gold text-deep font-bold px-7 py-3.5 rounded-full text-sm hover:bg-gold-light transition-all duration-200 hover:-translate-y-px"
            >
              Onze activiteiten
            </Link>
            <Link
              href="/over"
              className="border border-white/15 text-white/80 px-7 py-3.5 rounded-full text-sm hover:border-white/30 hover:text-white hover:bg-white/4 transition-all duration-200"
            >
              Over Unifac
            </Link>
          </div>

          {/* Stats */}
          <div
            className="grid grid-cols-3 divide-x divide-white/10 mt-20 max-w-sm mx-auto anim-fade-up"
            style={{ animationDelay: '0.8s' }}
          >
            {stats.map((stat) => (
              <div key={stat.label} className="px-4 text-center">
                <div className="font-display text-3xl font-bold text-gold">{stat.value}</div>
                <div className="text-[10px] text-white/35 mt-1.5 tracking-widest uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 anim-fade-up" style={{ animationDelay: '1.1s' }}>
          <div className="w-5 h-8 border border-white/15 rounded-full flex justify-center items-start pt-2">
            <div
              className="w-px h-2 bg-white/30 rounded-full"
              style={{ animation: 'scrollBounce 2.2s ease-in-out infinite' }}
            />
          </div>
        </div>
      </section>

      {/* ── ABOUT ────────────────────────────────── */}
      <section className="py-28 px-6 bg-surface">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <ScrollReveal type="left">
              <span className="text-[11px] tracking-[0.22em] text-gold uppercase font-semibold">
                Wie zijn wij
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white mt-3 mb-6 leading-[1.1]">
                Het hart van het<br />studentenleven
              </h2>
              <p className="text-white/50 text-base leading-relaxed mb-8">
                Unifac brengt je in contact met het Antwerpse studentenleven. Als koepelvereniging
                ondersteunen we meer dan 20 studentenclubs, organiseren we grote evenementen en
                vertegenwoordigen we studenten binnen de universiteit en de stad Antwerpen.
              </p>
              <Link
                href="/over"
                className="inline-flex items-center gap-2 text-gold font-semibold text-sm hover:gap-3 transition-all duration-200"
              >
                Meer over Unifac
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div className="grid grid-cols-2 gap-3">
                {pillars.map((item, i) => (
                  <div
                    key={item.title}
                    className="bg-card border border-white/5 rounded-2xl p-5 hover:border-white/10 hover:-translate-y-0.5 transition-all duration-250"
                    style={{ transitionDelay: `${i * 40}ms` }}
                  >
                    <h3 className="font-display font-bold text-white text-sm mb-2">{item.title}</h3>
                    <p className="text-white/35 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── EVENTS ────────────────────────────────── */}
      <section className="py-28 px-6 bg-deep">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
              <div>
                <span className="text-[11px] tracking-[0.22em] text-gold uppercase font-semibold">
                  Jaarkalender
                </span>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-white mt-2">
                  Activiteiten
                </h2>
              </div>
              <Link
                href="/activiteiten"
                className="inline-flex items-center gap-2 text-white/40 hover:text-white text-sm transition-colors duration-200"
              >
                Bekijk alles
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {featuredEvents.map((event, i) => (
              <ScrollReveal key={event.title} delay={i * 80}>
                <div className="group bg-surface border border-white/[0.06] rounded-2xl p-6 hover:border-white/12 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/40 transition-all duration-300 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-[11px] font-semibold text-gold bg-gold/10 px-2.5 py-1 rounded-full">
                      {event.tag}
                    </span>
                    <span className="text-[11px] text-white/25 font-medium tracking-wide">{event.date}</span>
                  </div>
                  <h3 className="font-display font-bold text-white text-base mb-3 leading-snug flex-1">
                    {event.title}
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed">{event.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLUBS ────────────────────────────────── */}
      <section className="py-28 px-6 bg-surface">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-[11px] tracking-[0.22em] text-gold uppercase font-semibold">
                Studentenclubs
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
                Clubs
              </h2>
              <p className="text-white/40 text-sm max-w-sm mx-auto leading-relaxed">
                Unifac overkoepelt drie soorten studentenclubs aan de Stadscampus
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-5">
            {clubCategories.map((cat, i) => (
              <ScrollReveal key={cat.name} delay={i * 120}>
                <div className="relative bg-card border border-white/[0.06] rounded-2xl p-8 hover:border-gold/15 hover:-translate-y-1 transition-all duration-300 group overflow-hidden">
                  {/* Ghost count */}
                  <div className="absolute -top-3 -right-2 font-display font-extrabold text-[80px] leading-none text-white/[0.025] group-hover:text-white/[0.04] transition-colors select-none">
                    {cat.count}
                  </div>
                  <div className="relative">
                    <div className="w-8 h-px bg-gold mb-6" />
                    <h3 className="font-display font-bold text-white text-xl mb-3">{cat.name}</h3>
                    <p className="text-white/40 text-sm leading-relaxed">{cat.description}</p>
                    <div className="mt-6 text-xs font-bold text-gold tracking-widest uppercase">{cat.count} clubs</div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="text-center mt-12">
              <Link
                href="/clubs"
                className="inline-flex items-center gap-2 text-gold font-semibold text-sm hover:gap-3 transition-all duration-200"
              >
                Ontdek alle clubs
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── JOIN CTA ────────────────────────────────── */}
      <section className="py-36 px-6 bg-deep relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse 70% 80% at 50% 50%, rgba(0,48,135,0.35) 0%, transparent 70%)',
            }}
          />
          {/* Subtle horizontal lines */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)',
              backgroundSize: '100% 80px',
            }}
          />
        </div>

        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <ScrollReveal>
            <span className="text-[11px] tracking-[0.22em] text-gold uppercase font-semibold">
              Sluit je aan
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mt-3 mb-6 leading-[1.1]">
              Word deel van<br />Unifac
            </h2>
            <p className="text-white/45 text-base mb-12 leading-relaxed max-w-md mx-auto">
              Ben jij een gepassioneerde student die het studentenleven aan de Stadscampus
              wil mee vormgeven? Solliciteer voor het bestuur.
            </p>
            <a
              href="mailto:bestuur@unifac.be"
              className="inline-flex items-center gap-3 bg-gold text-deep font-bold px-8 py-4 rounded-full text-sm hover:bg-gold-light transition-all duration-200 hover:-translate-y-0.5"
            >
              Contacteer het bestuur
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
