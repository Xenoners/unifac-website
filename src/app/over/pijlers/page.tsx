import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Pijlers – Unifac VZW',
  description: 'De vier pijlers waarop Unifac VZW haar werking bouwt.',
}

const pillars = [
  {
    number: '01',
    title: 'Informeren',
    description:
      'Zowel op studentikoos als academisch vlak proberen wij de Antwerpse student zoveel mogelijk te informeren. Via sociale media en wekelijkse overzichten op Facebook en Agora-schermen houden we elke student op de hoogte van wat er leeft aan de Stadscampus.',
  },
  {
    number: '02',
    title: 'Coördineren',
    description:
      'Als overkoepelende studentenvereniging coördineert Unifac de samenwerking tussen de verschillende studentenclubs. We verlenen logistieke steun, verdelen subsidies van de Universiteit en organiseren de kringraad — de maandelijkse vergadering van voorzitters en vicevoorzitters van alle aangesloten clubs.',
  },
  {
    number: '03',
    title: 'Organiseren',
    description:
      'Unifac organiseert kleinere én enkele van de grootste evenementen doorheen het academiejaar: van de Verkenningsdagen en Unifair bij de start van het jaar, over de Grote Verwarringsquiz en het Galabal, tot het Calamartes Festival als cultureel hoogtepunt. Elk evenement heeft een studentikoze, academische of culturele insteek.',
  },
  {
    number: '04',
    title: 'Vertegenwoordigen',
    description:
      'Circa veertien gemotiveerde studenten zetten zich in voor het Antwerpse universitaire studentenleven op academisch, sociaal en cultureel vlak. Unifac zetelt in organen van de Universiteit Antwerpen, de Associatie Antwerpse Universiteiten en Hogescholen (AUHA) en de Stad Antwerpen — als stem van de student.',
  },
]

export default function PijlersPage() {
  return (
    <>
      <PageHeader
        eyebrow="Werking"
        title="De vier pijlers"
        subtitle="Vier fundamentele pijlers dragen de werking van Unifac — samen maken ze het Antwerpse studentenleven zo aangenaam mogelijk."
      />

      <section className="py-24 px-6 bg-deep">
        <div className="max-w-4xl mx-auto space-y-16">
          {pillars.map((pillar, i) => (
            <ScrollReveal key={pillar.number} delay={i * 80}>
              <div className="grid md:grid-cols-[80px_1fr] gap-6 items-start">
                <div className="font-display text-6xl font-extrabold text-white/[0.06] leading-none select-none">
                  {pillar.number}
                </div>
                <div className="border-l border-white/10 pl-8 py-1">
                  <div className="w-8 h-px bg-gold mb-4" />
                  <h2 className="font-display text-2xl font-bold text-white mb-4">{pillar.title}</h2>
                  <p className="text-white/55 leading-relaxed">{pillar.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </>
  )
}
