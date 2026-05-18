import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Over Unifac – Unifac VZW',
  description: 'Leer meer over de geschiedenis, waarden en werking van Unifac VZW, de overkoepelende studentenvereniging aan de UAntwerpen Stadscampus.',
}

const milestones = [
  { year: '1967', text: 'Unifac opgericht op 28 februari.' },
  { year: '1983', text: 'Eerste Unifac Openings-TD.' },
  { year: '2003', text: 'Fusie van UFSIA, RUCA en UIA tot de Universiteit Antwerpen.' },
  { year: '2008', text: 'ESN Antwerp en IMBIT opgericht.' },
  { year: '2009', text: 'Eerste editie van het Calamartes Festival op het Hof van Liere.' },
  { year: '2015', text: 'Eerste Antwerpse Beiaardcantus op de Groenplaats.' },
  { year: '2017', text: '50-jarig jubileum gevierd.' },
  { year: '2019', text: 'Oprichting van Conservatio.' },
]

const symbols = [
  {
    title: 'Schild',
    desc: 'Driedelig wapen: het logo van de UA, het wapen van Ignatius van Loyola (erfenis van UFSIA) en het wapen van de Stad Antwerpen.',
  },
  {
    title: 'De blauwe trui',
    desc: 'Koningsblauw, zonder titels of onderscheid. Een symbool van gelijkwaardigheid binnen het bestuur — "de blauwe macht".',
  },
  {
    title: 'Vlag',
    desc: 'Volledig blauw met wit borduurwerk. Eén kleur, één team.',
  },
  {
    title: 'Lint',
    desc: 'Volledig wit als symbool van neutraliteit — Unifac vertegenwoordigt álle studenten, ongeacht achtergrond.',
  },
]

export default function OverPage() {
  return (
    <>
      <PageHeader
        eyebrow="Over ons"
        title="Unifac VZW"
        subtitle="Studentenvereniging van de Universitaire Faculteiten Stadscampus Antwerpen — opgericht op 28 februari 1967."
      />

      {/* Mission */}
      <section className="py-20 px-6 bg-deep">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="max-w-3xl">
              <span className="text-[11px] tracking-[0.22em] text-gold uppercase font-semibold">Missie</span>
              <h2 className="font-display text-3xl font-bold text-white mt-3 mb-6">Wie zijn wij?</h2>
              <p className="text-white/60 leading-relaxed text-lg mb-5">
                Unifac vzw, of voluit de Studentenvereniging van de Universitaire Faculteiten Stadscampus Antwerpen,
                is de overkoepelende studentenvereniging aan de Stadscampus van de Universiteit Antwerpen. Wij baseren
                ons op vier fundamentele pijlers om het studentenleven van elke student in Antwerpen zo aangenaam
                mogelijk te maken.
              </p>
              <p className="text-white/60 leading-relaxed mb-5">
                Dankzij onze centrale ligging in zowel de studentenbuurt als het centrum van Antwerpen garanderen we
                een vlotte en directe wisselwerking tussen onszelf en studenten, winkels, bedrijven etc. — en laat
                ons toe snel in te spelen op vragen en noden van studenten én partners.
              </p>
              <p className="text-white/60 leading-relaxed">
                De Universiteit Antwerpen faciliteert naar schatting 23.000 studenten. Om alle studenten te kunnen
                vertegenwoordigen, zetelt Unifac in verscheidene organen van de universiteit, de Associatie Antwerpse
                Universiteiten en Hogescholen (AUHA), en de Stad Antwerpen. Als schakel tussen student en
                stad/universiteit bieden we zo op een dynamische manier vele mogelijkheden aan onze partners.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Symbols */}
      <section className="py-20 px-6 bg-surface">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <span className="text-[11px] tracking-[0.22em] text-gold uppercase font-semibold">Identiteit</span>
            <h2 className="font-display text-3xl font-bold text-white mt-3 mb-12">Onze symbolen</h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {symbols.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 80}>
                <div className="bg-card border border-white/[0.06] rounded-2xl p-6 hover:border-white/12 hover:-translate-y-0.5 transition-all duration-300">
                  <div className="w-6 h-px bg-gold mb-5" />
                  <h3 className="font-display font-bold text-white mb-3">{s.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-6 bg-deep">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <span className="text-[11px] tracking-[0.22em] text-gold uppercase font-semibold">Historiek</span>
            <h2 className="font-display text-3xl font-bold text-white mt-3 mb-12">Geschiedenis</h2>
          </ScrollReveal>
          <div className="relative ml-4 border-l border-white/10 space-y-8">
            {milestones.map((m, i) => (
              <ScrollReveal key={m.year} delay={i * 60}>
                <div className="relative pl-8">
                  <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-surface border-2 border-gold" />
                  <span className="font-display font-bold text-gold text-sm block mb-1">{m.year}</span>
                  <p className="text-white/50 text-sm leading-relaxed">{m.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
