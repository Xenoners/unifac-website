import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-white/[0.06] text-white">
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <div className="font-display text-lg font-extrabold tracking-widest text-white mb-4">
            UNIFAC
          </div>
          <p className="text-sm text-white/40 leading-relaxed mb-4">
            Overkoepelende studentenvereniging aan de Stadscampus van de
            Universiteit Antwerpen. Opgericht in 1967.
          </p>
          <p className="text-xs text-white/20">BTW BE0409.834.601</p>
        </div>

        <div>
          <h3 className="font-display font-bold text-xs tracking-[0.2em] text-white/40 uppercase mb-5">
            Contact
          </h3>
          <address className="not-italic text-sm text-white/50 space-y-1.5">
            <p>Kleine Kauwenberg 22</p>
            <p>2000 Antwerpen</p>
            <p className="pt-1">
              <a href="tel:+3232654404" className="hover:text-gold transition-colors duration-200">
                +32 (0)3 265 44 04
              </a>
            </p>
            <p>
              <a href="mailto:info@unifac.be" className="hover:text-gold transition-colors duration-200">
                info@unifac.be
              </a>
            </p>
          </address>
        </div>

        <div>
          <h3 className="font-display font-bold text-xs tracking-[0.2em] text-white/40 uppercase mb-5">
            Volg ons
          </h3>
          <ul className="text-sm text-white/50 space-y-2.5">
            {[
              { label: 'Instagram', href: 'https://www.instagram.com/unifac_ua', sub: '@unifac_ua' },
              { label: 'Facebook', href: 'https://www.facebook.com/unifac', sub: null },
              { label: 'TikTok', href: 'https://www.tiktok.com/@unifac_ua', sub: '@unifac_ua' },
              { label: 'LinkedIn', href: 'https://www.linkedin.com/company/unifac-vzw', sub: null },
            ].map(({ label, href, sub }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors duration-200 inline-flex items-center gap-2"
                >
                  {label}
                  {sub && <span className="text-white/25 text-xs">{sub}</span>}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/[0.04]">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-white/25">
          <p>© {new Date().getFullYear()} Unifac VZW. Alle rechten voorbehouden.</p>
          <nav className="flex gap-6">
            <Link href="/over" className="hover:text-white/50 transition-colors">Over ons</Link>
            <Link href="/contact" className="hover:text-white/50 transition-colors">Contact</Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
