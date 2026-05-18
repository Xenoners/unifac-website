import type { Metadata } from 'next'
import Image from 'next/image'
import PageHeader from '@/components/PageHeader'
import ScrollReveal from '@/components/ScrollReveal'
import { getTeamMembers, urlFor } from '@/lib/sanity'

export const metadata: Metadata = {
  title: 'Team – Unifac VZW',
  description: 'Maak kennis met het bestuur van Unifac VZW.',
}

const team = [
  { name: 'Myrthe De Bie', role: 'Voorzitter' },
  { name: 'Olivia Schuermans', role: 'Vice-voorzitter' },
  { name: 'Seie Goossens', role: 'Financiën' },
  { name: 'Lisa Nys', role: 'Financiën' },
  { name: 'Maurane De Waele', role: 'Public Relations' },
  { name: 'Roxane Dils', role: 'Public Relations' },
  { name: 'Jakob Van Elsen', role: 'Public Relations' },
  { name: 'Feebe De Greef', role: 'Media & Marketing' },
  { name: 'Lumi Letouche', role: 'Media & Marketing' },
  { name: 'Isabeau Vanhoof', role: 'Media & Marketing' },
  { name: 'Sander Bedert', role: 'Cultuur' },
  { name: 'Dasilva Heylen', role: 'Cultuur' },
  { name: 'Eline Tilemans', role: 'Technisch Verantwoordelijke' },
  { name: 'Ronan Wouters', role: 'Technisch Verantwoordelijke' },
]

const roleOrder = [
  'Voorzitter',
  'Vice-voorzitter',
  'Financiën',
  'Public Relations',
  'Media & Marketing',
  'Cultuur',
  'Technisch Verantwoordelijke',
]

function getInitials(name: string) {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

export default async function TeamPage() {
  const sanityMembers = await getTeamMembers()
  const members = sanityMembers?.length ? sanityMembers : team

  const grouped = roleOrder.reduce<Record<string, typeof members>>((acc, role) => {
    const roleMembers = members.filter((m) => m.role === role)
    if (roleMembers.length) acc[role] = roleMembers
    return acc
  }, {})

  return (
    <>
      <PageHeader
        eyebrow="Bestuur"
        title="Het Unifac-team"
        subtitle="Circa veertien gemotiveerde studenten zetten zich in voor het Antwerpse universitaire studentenleven. Het bestuur werkt zonder hiërarchie — iedereen draagt de blauwe trui als gelijke."
      />

      <section className="py-24 px-6 bg-deep">
        <div className="max-w-5xl mx-auto space-y-16">
          {Object.entries(grouped).map(([role, members], gi) => (
            <ScrollReveal key={role} delay={gi * 60}>
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-[11px] tracking-[0.22em] text-gold uppercase font-semibold">{role}</span>
                  <div className="flex-1 h-px bg-white/[0.06]" />
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {members.map((member, i) => (
                    <div
                      key={member.name}
                      className="bg-surface border border-white/[0.06] rounded-2xl p-5 hover:border-white/12 hover:-translate-y-0.5 transition-all duration-300"
                      style={{ transitionDelay: `${i * 40}ms` }}
                    >
                      {'photo' in member && member.photo ? (
                        <div className="w-14 h-14 rounded-xl overflow-hidden mb-4 border border-white/10">
                          <Image
                            src={urlFor(member.photo).width(112).height(112).fit('crop').url()}
                            alt={member.name}
                            width={56}
                            height={56}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ) : (
                        <div className="w-10 h-10 rounded-xl bg-navy/60 border border-white/10 flex items-center justify-center mb-4">
                          <span className="font-display font-bold text-gold text-sm">{getInitials(member.name)}</span>
                        </div>
                      )}
                      <p className="font-display font-bold text-white text-sm leading-snug">{member.name}</p>
                      <p className="text-white/35 text-xs mt-1">{member.role}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-20 px-6 bg-surface border-t border-white/[0.06]">
        <div className="max-w-xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="font-display text-2xl font-bold text-white mb-4">Word deel van het bestuur</h2>
            <p className="text-white/45 text-sm leading-relaxed mb-8">
              Elke lente organiseert Unifac de Kiesweek, waarbij studenten zich kandidaat kunnen stellen voor het
              nieuwe bestuur. Wil je het studentenleven aan de Stadscampus mee vormgeven?
            </p>
            <a
              href="mailto:bestuur@unifac.be"
              className="inline-flex items-center gap-2 bg-gold text-deep font-bold px-6 py-3 rounded-full text-sm hover:bg-gold-light transition-all duration-200 hover:-translate-y-px"
            >
              Solliciteer via bestuur@unifac.be
            </a>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
