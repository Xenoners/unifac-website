import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Clubs – Unifac VZW',
  description: 'Ontdek de 17 studentenclubs die Unifac VZW overkoepelt aan de Stadscampus van de Universiteit Antwerpen.',
}

type Category = 'Faculteit & Departement' | 'Studiegerelateerd' | 'Thematisch'

const clubs: {
  name: string
  fullName: string
  founded: string
  colors: string
  category: Category
  description: string
}[] = [
  {
    name: 'Wikings-NSK',
    fullName: 'Faculteitskring van de Faculteit Bedrijfswetenschappen en Economie (FBE)',
    founded: '1910',
    colors: 'Rood – Wit – Rood',
    category: 'Faculteit & Departement',
    description:
      'De oudste club van \'t Stad, ontstaan in 2003 na de fusie van Wikings en NSK. Vertegenwoordigt ~3000 studenten in TEW-richtingen: Bedrijfskunde, Economisch Beleid, Handelsingenieur, Beleidsinformatica en SEW. Met roots tot 1884.',
  },
  {
    name: 'Sofia',
    fullName: 'Faculteitsclub Rechten',
    founded: '1960',
    colors: 'Blauw – Wit',
    category: 'Faculteit & Departement',
    description:
      'Faculteitsclub der Rechten van de Universiteit Antwerpen. TD\'s, cantussen, galabal en een jaarlijkse skivakantie. Organiseert "Antwerp Law Jobdays" en biedt een cursusdienst en peter-meterwerking voor eerstejaars.',
  },
  {
    name: 'PSW',
    fullName: 'Praesidium Sociale Wetenschappen',
    founded: '1959',
    colors: 'Sinopel – Argent – Purper',
    category: 'Faculteit & Departement',
    description:
      'Faculteitsclub voor Communicatie-, Politieke, Sociale en Onderwijswetenschappen. Infosessies, tweedehandsboeken, peter-meterwerking, sport (basket, voetbal, volleybal), skireis, cantussen, TD\'s en een jaarlijks galabal.',
  },
  {
    name: 'MODULOR',
    fullName: 'Faculteitsclub Ontwerpwetenschappen',
    founded: '2012',
    colors: 'Zwart – Wit',
    category: 'Faculteit & Departement',
    description:
      'Voor architectuur, interieurarchitectuur, productontwikkeling, stedenbouw en erfgoedstudies. Wekelijkse TAXI-lezingen, Dans Der Design (galabal), TD\'s en sportploegen: FC BAKSTEEN, BBC BETON en VC ASBET.',
  },
  {
    name: 'Klio',
    fullName: 'Departementsclub Geschiedenis en Wijsbegeerte',
    founded: '2000',
    colors: 'Donkerblauw – Bordeaux – Donkerblauw',
    category: 'Faculteit & Departement',
    description:
      'Vernoemd naar Clio, de Griekse muze van geschiedenis. Al meer dan 20 jaar: feest, cultuur, sport en studie. Initiatiedag (geen doop), peter-meterwerking en infosessies voor eerstejaars.',
  },
  {
    name: 'IMBIT',
    fullName: 'Studentenvereniging Handelsingenieur in de Beleidsinformatica',
    founded: '2008',
    colors: 'Blauw – Wit',
    category: 'Faculteit & Departement',
    description:
      'Dé club voor Handelsingenieurs in de beleidsinformatica. Professionele evenementen ("Meet the boss", workshops) én studentikoze activiteiten (kartingcup, bierbowling, TD). Jaarlijkse HIB-tournée naar Europese steden.',
  },
  {
    name: 'Lingua',
    fullName: 'Departementsclub Taal- en Letterkunde & Toegepaste Taalkunde',
    founded: '2004',
    colors: 'Rood – Zwart – Wit',
    category: 'Faculteit & Departement',
    description:
      '"Lingua is ons hart en ons leven." Uitstappen naar theater en film, open podia, kortfilmfestival. Peter-meterwerking, Drive vol samenvattingen, exameninfosessies en tutor voor eerstejaars.',
  },
  {
    name: 'Socio Economica',
    fullName: 'Studentenvereniging Sociaal Economische Wetenschappen',
    founded: '2009',
    colors: 'Geel – Wit – Bordeaux',
    category: 'Studiegerelateerd',
    description:
      '15 jaar actief. Gratis bijlessen bij tutoren, infosessies, workshops bij bedrijven, jobbeurs en alumniavond. Sociaal: TD\'s, galabal, vier cantussen (incl. fameuze Rougecantus), bierbowling en quiz.',
  },
  {
    name: 'ELSA Antwerpen',
    fullName: 'European Law Students\' Association',
    founded: '1981',
    colors: 'Donkerblauw – Wit',
    category: 'Studiegerelateerd',
    description:
      'Grootste juridische vereniging ter wereld: 60.000+ leden in 42 landen. Lezingen (o.a. Jef Vermassen), kantoorbezoeken, jaarlijkse jobbeurs, summerschools en uitwisselingen. Consultatieve status bij Raad van Europa, UNESCO en WIPO.',
  },
  {
    name: 'AIESEC UA',
    fullName: 'Internationale organisatie voor leiderschap via buitenlandse ervaringen',
    founded: '1956',
    colors: 'Blauw – Wit',
    category: 'Studiegerelateerd',
    description:
      'Wereldwijd netwerk in 110+ landen met 1 miljoen+ alumni. Drie programma\'s: Global Volunteer, Global Teacher en Global Talent. Leert tijdmanagement, probleemoplossing en netwerken via internationale ervaringen.',
  },
  {
    name: 'AntwerpMUN',
    fullName: 'Model United Nations Antwerpen',
    founded: '2013',
    colors: 'Oranje – Donkerblauw',
    category: 'Studiegerelateerd',
    description:
      'Studentenvereniging rond de VN voor diplomatie-, rechten- en politiekstudenten. Lezingen, workshopss en netwerkevents. Groot jaarlijks hoogtepunt: vierdaagse VN-simulatie waarbij je een land vertegenwoordigt in een VN-orgaan.',
  },
  {
    name: 'Capitant',
    fullName: 'The Student\'s Gateway to the World of Finance',
    founded: '2010',
    colors: 'Zwart – Wit',
    category: 'Studiegerelateerd',
    description:
      'Financiële geletterdheid verhogen én begeleiding bij de overstap naar de financiële sector. Evenementen: Beleggingstrack, World of Finance, Investment Banking Track, Asset Management Track en de Amsterdam-London Finance Trip.',
  },
  {
    name: 'Abundantia',
    fullName: 'Studentenclub der Duveldrinkers',
    founded: '1999',
    colors: 'Zwart – Rood – Zwart',
    category: 'Thematisch',
    description:
      'Club die draait rond de godendrank Duvel. Stamcafé: De Salamander. Jaarlijkse highlight tijdens Calamartes: "Abundantly Jazz" — een avond met Antwerpse jazzmuzikanten in de spiegeltent.',
  },
  {
    name: 'ESN Antwerp',
    fullName: 'Erasmus Student Network',
    founded: '2008',
    colors: 'Blauw – Wit – Blauw',
    category: 'Thematisch',
    description:
      'Faciliteert studenten die in het buitenland studeren en verwelkomt internationale studenten in Antwerpen. City trips, parties en een brug tussen lokale en internationale studentenwereld.',
  },
  {
    name: 'Prisma',
    fullName: 'Studentenvereniging waar solidariteit centraal staat',
    founded: '1994',
    colors: 'Bordeaux – Zilver – Bordeaux',
    category: 'Thematisch',
    description:
      'Winst van alle activiteiten gaat naar een lokaal goed doel (o.a. Think Pink, Make A Wish). Tweejaarlijks bloeddonatie-evenement "Bloedserieus". Cocktailfeestjes, cantussen en spelletjesavonden — iedereen welkom.',
  },
  {
    name: 'UA Sportraad',
    fullName: 'Overkoepelend praesidium voor sport en gezondheid aan de UAntwerpen',
    founded: '1967',
    colors: 'Rood – Wit – Blauw',
    category: 'Thematisch',
    description:
      'Organiseert Antwerp Students League (basket, volleybal, voetbal), wekelijkse lessen (yoga, zumba, fatburning) en evenementen als de Midnightswim. MOVE-abonnement voor bijna kosteloos sporten het hele jaar.',
  },
  {
    name: 'Conservatio',
    fullName: 'Vereniging voor studenten met een passie voor kunst en erfgoed',
    founded: '2019',
    colors: 'Blauw – Wit',
    category: 'Thematisch',
    description:
      'Museumbezoeken, lezingen en kijkjes achter de schermen bij erfgoedinstellingen. Maar ook gezellige cafémomenten en dansavonden. Geïnteresseerd in gezelligheid én kunst? Dan zit je hier goed.',
  },
]

const categories: Category[] = ['Faculteit & Departement', 'Studiegerelateerd', 'Thematisch']

const categoryDescriptions: Record<Category, string> = {
  'Faculteit & Departement': 'Clubs verbonden aan een specifieke faculteit of opleiding binnen de Stadscampus.',
  Studiegerelateerd: 'Clubs die aansluiten bij bepaalde studierichtingen of vakgebieden.',
  Thematisch: "Clubs rond specifieke thema's: cultuur, sport, erfgoed, solidariteit en meer.",
}

export default function ClubsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Studentenclubs"
        title="Clubs"
        subtitle="Unifac overkoepelt 17 studentenclubs aan de Stadscampus — van oudste faculteitsclubs tot jonge thematische verenigingen."
      />

      <section className="py-24 px-6 bg-deep">
        <div className="max-w-5xl mx-auto space-y-20">
          {categories.map((cat, ci) => {
            const filtered = clubs.filter((c) => c.category === cat)
            return (
              <div key={cat}>
                <ScrollReveal delay={ci * 60}>
                  <div className="flex items-end gap-4 mb-10">
                    <div>
                      <span className="text-[11px] tracking-[0.22em] text-gold uppercase font-semibold">{cat}</span>
                      <p className="text-white/35 text-sm mt-1">{categoryDescriptions[cat]}</p>
                    </div>
                    <div className="flex-1 h-px bg-white/[0.06] mb-1" />
                    <span className="text-white/20 text-xs font-display font-bold mb-1">{filtered.length} clubs</span>
                  </div>
                </ScrollReveal>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {filtered.map((club, i) => (
                    <ScrollReveal key={club.name} delay={i * 60}>
                      <div className="bg-surface border border-white/[0.06] rounded-2xl p-6 hover:border-white/12 hover:-translate-y-0.5 transition-all duration-300 h-full flex flex-col">
                        <div className="flex items-start justify-between gap-2 mb-4">
                          <h3 className="font-display font-bold text-white text-lg leading-tight">{club.name}</h3>
                          <span className="text-[10px] text-white/25 whitespace-nowrap mt-1">est. {club.founded}</span>
                        </div>
                        <p className="text-gold/70 text-[11px] font-medium mb-3 leading-snug">{club.fullName}</p>
                        <p className="text-white/40 text-sm leading-relaxed flex-1">{club.description}</p>
                        <div className="mt-5 pt-4 border-t border-white/[0.06]">
                          <span className="text-[10px] text-white/20 tracking-wide">{club.colors}</span>
                        </div>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-surface border-t border-white/[0.06]">
        <div className="max-w-xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="font-display text-2xl font-bold text-white mb-4">Jouw club niet gevonden?</h2>
            <p className="text-white/45 text-sm leading-relaxed mb-8">
              Wil je een nieuwe club oprichten of je club aansluiten bij Unifac? Neem contact op via info@unifac.be.
            </p>
            <a
              href="mailto:info@unifac.be"
              className="inline-flex items-center gap-2 bg-gold text-deep font-bold px-6 py-3 rounded-full text-sm hover:bg-gold-light transition-all duration-200 hover:-translate-y-px"
            >
              Contacteer ons
            </a>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
