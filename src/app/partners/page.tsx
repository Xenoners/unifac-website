import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Partners – Unifac VZW',
  description: 'Ontdek de partners en sponsors van Unifac VZW.',
}

const partners = [
  {
    name: 'Universiteit Antwerpen',
    type: 'Hoofdpartner',
    description:
      'Onze thuisbasis. We werken nauw samen met de UA om studenten en verenigingen aan de Stadscampus te faciliteren. De universiteit ondersteunt onze werking structureel.',
  },
  {
    name: 'Stad Antwerpen',
    type: 'Hoofdpartner',
    description:
      'Continue overleg en ondersteuning bij de organisatie van evenementen in de stad. Als schakel tussen student en stad brengt Unifac de Antwerpse studentenwereld dichter bij de stadsgemeenschap.',
  },
  {
    name: 'BDO Belgium',
    type: 'Partner',
    description:
      'Wereldwijde adviesfirma met expertise in Audit & Assurance, Fiscaliteit & Juridisch, Accountancy en Advies. "Voor ons ben je niet zomaar een nummer."',
  },
  {
    name: 'Nalu Energy Drink',
    type: 'Partner',
    description:
      'Nalu\'s Fruity Energizers en Tea Energizers met lage calorieën, cafeïne en B-vitamines. "We celebrate creative lifestyles to inspire people to turn big ideas into reality."',
  },
  {
    name: 'Coca-Cola Europacific Partners',
    type: 'Partner',
    description:
      'Produceert, verdeelt en verkoopt merken in België en Luxemburg — goed voor 11 miljoen consumpties per dag. Focus op suikerreductie, innovatie en recyclage.',
  },
  {
    name: 'Holiways',
    type: 'Reispartner',
    description:
      'Onze officiële reispartner. Samen met Holiways organiseren we de jaarlijkse Unifac-reis — van Porto en Kopenhagen tot Albanië in 2026.',
  },
  {
    name: 'Da Giovanni',
    type: 'Partner',
    description:
      'Vaste partner van Unifac bij de organisatie van onze evenementen aan de Stadscampus.',
  },
]

export default function PartnersPage() {
  return (
    <>
      <PageHeader
        eyebrow="Samenwerking"
        title="Partners"
        subtitle="Unifac kan rekenen op de steun van vaste partners die het Antwerpse studentenleven mee mogelijk maken."
      />

      <section className="py-24 px-6 bg-deep">
        <div className="max-w-5xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
            {partners.map((partner, i) => (
              <ScrollReveal key={partner.name} delay={i * 70}>
                <div className="bg-surface border border-white/[0.06] rounded-2xl p-7 hover:border-white/12 hover:-translate-y-0.5 transition-all duration-300 h-full flex flex-col">
                  <span className="text-[11px] font-semibold text-gold bg-gold/10 px-2.5 py-1 rounded-full self-start mb-5">
                    {partner.type}
                  </span>
                  <h2 className="font-display font-bold text-white text-lg mb-3 leading-snug">{partner.name}</h2>
                  <p className="text-white/40 text-sm leading-relaxed flex-1">{partner.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Become a partner */}
          <ScrollReveal>
            <div className="bg-surface border border-white/[0.06] rounded-3xl p-12 text-center">
              <span className="text-[11px] tracking-[0.22em] text-gold uppercase font-semibold block mb-4">
                Samenwerken
              </span>
              <h2 className="font-display text-3xl font-bold text-white mb-5">Word partner van Unifac</h2>
              <p className="text-white/45 text-base leading-relaxed mb-10 max-w-lg mx-auto">
                Wil je je merk verbinden met het Antwerpse studentenleven? Tijdens Students on Stage bereiken we
                meer dan 10.000 studenten. Neem contact op voor een partnerschap op maat.
              </p>
              <a
                href="mailto:pr@unifac.be"
                className="inline-flex items-center gap-2 bg-gold text-deep font-bold px-7 py-3.5 rounded-full text-sm hover:bg-gold-light transition-all duration-200 hover:-translate-y-px"
              >
                Contacteer pr@unifac.be
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
