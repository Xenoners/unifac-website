import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Contact – Unifac VZW',
  description: 'Neem contact op met Unifac VZW via mail, telefoon of sociale media.',
}

const contactPoints = [
  {
    label: 'Algemene vragen',
    email: 'info@unifac.be',
    description: 'Voor vragen over Unifac, activiteiten of clubs.',
  },
  {
    label: 'Partnerships & sponsoring',
    email: 'pr@unifac.be',
    description: 'Geïnteresseerd in een samenwerking of sponsoring?',
  },
  {
    label: 'Bestuur',
    email: 'bestuur@unifac.be',
    description: 'Direct contact met het bestuur van Unifac.',
  },
  {
    label: 'Kiesweek',
    email: 'kiesweek@unifac.be',
    description: 'Kandidaatstelling en info rond de Kiesweek.',
  },
]

const socials = [
  { label: 'Instagram', sub: '@unifac_ua', href: 'https://www.instagram.com/unifac_ua' },
  { label: 'Facebook', sub: 'unifac', href: 'https://www.facebook.com/unifac' },
  { label: 'TikTok', sub: '@unifac_ua', href: 'https://www.tiktok.com/@unifac_ua' },
  { label: 'LinkedIn', sub: 'unifac-vzw', href: 'https://www.linkedin.com/company/unifac-vzw' },
]

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Bereikbaarheid"
        title="Contact"
        subtitle="Heb je een vraag, wil je samenwerken of je kandidaat stellen? Neem contact op via onderstaande kanalen."
      />

      <section className="py-24 px-6 bg-deep">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">

          {/* Left column */}
          <div className="space-y-12">
            <ScrollReveal>
              <div>
                <span className="text-[11px] tracking-[0.22em] text-gold uppercase font-semibold block mb-5">
                  Adres
                </span>
                <address className="not-italic text-white/60 leading-relaxed text-base">
                  <strong className="text-white font-display font-bold">Unifac VZW</strong><br />
                  Kleine Kauwenberg 22<br />
                  2000 Antwerpen
                </address>
                <a
                  href="tel:+3232654404"
                  className="inline-block mt-4 text-gold font-semibold hover:text-gold-light transition-colors text-sm"
                >
                  +32 (0)3 265 44 04
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div>
                <span className="text-[11px] tracking-[0.22em] text-gold uppercase font-semibold block mb-5">
                  E-mail
                </span>
                <ul className="space-y-5">
                  {contactPoints.map((cp) => (
                    <li key={cp.email}>
                      <p className="text-white/35 text-xs mb-1">{cp.label}</p>
                      <a
                        href={`mailto:${cp.email}`}
                        className="font-display font-semibold text-white hover:text-gold transition-colors text-sm"
                      >
                        {cp.email}
                      </a>
                      <p className="text-white/25 text-xs mt-0.5">{cp.description}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div>
                <span className="text-[11px] tracking-[0.22em] text-gold uppercase font-semibold block mb-5">
                  Sociale media
                </span>
                <ul className="space-y-3">
                  {socials.map((s) => (
                    <li key={s.label}>
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-white/60 hover:text-gold transition-colors text-sm"
                      >
                        <span className="font-semibold text-white/80">{s.label}</span>
                        <span className="text-white/25">{s.sub}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>

          {/* Right column */}
          <ScrollReveal delay={150} type="left">
            <div className="space-y-5">
              {/* Map placeholder */}
              <div className="bg-surface border border-white/[0.06] rounded-2xl h-64 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-white/20 text-sm font-display font-bold">Kleine Kauwenberg 22</p>
                  <p className="text-white/15 text-xs mt-1">2000 Antwerpen</p>
                </div>
              </div>

              {/* Info card */}
              <div className="bg-surface border border-white/[0.06] rounded-2xl p-7">
                <div className="w-6 h-px bg-gold mb-5" />
                <h3 className="font-display font-bold text-white text-lg mb-2">Unifac VZW</h3>
                <p className="text-white/40 text-sm leading-relaxed mb-4">
                  Studentenvereniging van de Universitaire Faculteiten Stadscampus Antwerpen — overkoepelende
                  studentenvereniging aan de Stadscampus van de Universiteit Antwerpen.
                </p>
                <p className="text-white/20 text-xs">BTW BE0409.834.601</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
