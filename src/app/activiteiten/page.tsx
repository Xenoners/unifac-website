import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Activiteiten – Unifac VZW',
  description: 'Ontdek alle activiteiten en evenementen van Unifac VZW doorheen het academiejaar.',
}

const events = [
  {
    title: 'Verkenningsdagen',
    period: 'September',
    tag: 'Introductie',
    description:
      'Nog voor het academiejaar start, neemt Unifac — in samenwerking met de pastorale dienst — eerstejaarsstudenten mee op een driedaagse in de Hoge Rielen te Kasterlee. Ze leren hun medestudenten en ouderejaars kennen zodat er al meteen bekende gezichten in de aula zitten.',
  },
  {
    title: 'Students on Stage',
    period: 'Oktober',
    tag: 'Festival',
    description:
      'Hét openingsfestival waarmee het studentenleven wordt ingezet. Op de eerste maandag van het academiejaar toveren we het Sint-Jansplein om tot een immens studentenfestival: een namiddag vol muziek, feest en plezier aan studentikoze prijzen.',
  },
  {
    title: 'Unifair',
    period: 'Oktober',
    tag: 'Clubs',
    description:
      'Een infomarkt op de Stadscampus waar meer dan 30 studentenorganisaties klaarstaan om jou te leren kennen. Van sport en cultuur tot internationale clubs — jij vindt zeker een vereniging die bij jou past. Nadien: gratis frietjes en een drankje!',
  },
  {
    title: 'De Grote Verwarringsquiz',
    period: 'Februari',
    tag: 'Quiz',
    description:
      'Elk jaar uitverkocht. We toveren het studentenrestaurant Komida om in een tempel waar menig student zijn brein breekt over verwarrende vragen in originele themarondes. Elke ploeg wint een prijs — inclusief de fameuze "boefprijs" voor de snackshelden.',
  },
  {
    title: 'Sinterklaas',
    period: 'December',
    tag: 'Traditie',
    description:
      'Verkleed als Sinterklaas en roetpieten vallen we aula\'s en drukke plaatsen binnen om elke student te verrassen met iets lekkers — net voor de examenperiode aanbreekt.',
  },
  {
    title: 'Kerst op UAntwerpen',
    period: 'December',
    tag: 'Feest',
    description:
      'Een gezellige kerstmarkt op het Hof van Liere vlak voor de kerstvakantie. Kringraadverenigingen stellen kraampjes op, er klinkt muziek, en alle opbrengsten gaan naar een goed doel. Als afsluiter: een kerstdiner in het studentenrestaurant.',
  },
  {
    title: 'Reis',
    period: 'Februari',
    tag: 'Reis',
    description:
      'Na de examenperiode: een welverdiende studentenreis. Eerder reisden we naar Firenze, Praag, Barcelona, Londen, Berlijn, Kopenhagen en Porto. Dit jaar (2026): Albanië — 5 dagen Tirana en Durrës via reispartner Holiways voor slechts €395.',
  },
  {
    title: 'Kiesweek',
    period: 'Maart – April',
    tag: 'Bestuur',
    description:
      'De week voor de paasvakantie stellen faculteitsclubs én Unifac hun nieuwe team voor. Middag-TD\'s, een festival op het Theaterplein, en de verkiezing van de nieuwe Unifac-voorzitter — alles gratis voor studenten.',
  },
  {
    title: 'Galabal van de UAntwerpen',
    period: 'Maart',
    tag: 'Gala',
    description:
      'Een stijlvolle avond op een exclusieve locatie voor studenten en medewerkers van de universiteit. Georganiseerd samen met NOVA en de Studentenraad: een driegangendiner gevolgd door een dansfeest.',
  },
  {
    title: 'Calamartes Festival',
    period: 'Mei',
    tag: 'Festival',
    description:
      'Hét cultuurfestival van de Universiteit Antwerpen. Op de parking van het R-gebouw schittert een spiegeltent waar van \'s morgens tot \'s avonds culturele activiteiten doorgaan. Muziek, tentoptredens, drankjes aan studentikoze prijzen.',
  },
  {
    title: 'Antwerp 10 Miles',
    period: 'April',
    tag: 'Sport',
    description:
      'Unifac is aanwezig op de UAntwerp Mile met de nodige muziek en sfeer. Kom supporteren, vier mee — en wie weet trakteren we langs de zijlijn.',
  },
]

export default function ActiviteitenPage() {
  return (
    <>
      <PageHeader
        eyebrow="Jaarkalender"
        title="Activiteiten"
        subtitle="Elk academiejaar organiseert Unifac een gevarieerd programma van 11 evenementen — van introductiedagen tot galas en festivals."
      />

      <section className="py-24 px-6 bg-deep">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {events.map((event, i) => (
              <ScrollReveal key={event.title} delay={Math.floor(i / 2) * 80}>
                <div className="bg-surface border border-white/[0.06] rounded-2xl p-7 hover:border-white/12 hover:-translate-y-0.5 transition-all duration-300 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-[11px] font-semibold text-gold bg-gold/10 px-2.5 py-1 rounded-full">
                      {event.tag}
                    </span>
                    <span className="text-[11px] text-white/25 tracking-wide">{event.period}</span>
                  </div>
                  <h2 className="font-display font-bold text-white text-lg mb-3 leading-snug">{event.title}</h2>
                  <p className="text-white/45 text-sm leading-relaxed flex-1">{event.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
