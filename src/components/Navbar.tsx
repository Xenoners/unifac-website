'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  {
    label: 'Unifac',
    href: '/over',
    children: [
      { label: 'Over ons', href: '/over' },
      { label: 'Pijlers', href: '/over/pijlers' },
    ],
  },
  { label: 'Team', href: '/team' },
  { label: 'Activiteiten', href: '/activiteiten' },
  { label: 'Clubs', href: '/clubs' },
  { label: 'Partners', href: '/partners' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-deep/90 backdrop-blur-lg border-b border-white/[0.06] shadow-xl shadow-black/30'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between h-18">
        <Link
          href="/"
          className="font-display text-xl font-extrabold tracking-widest text-white hover:text-gold transition-colors duration-300"
        >
          UNIFAC
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navItems.map((item) =>
            item.children ? (
              <li key={item.label} className="relative">
                <button
                  onClick={() => setDropdownOpen((o) => !o)}
                  onBlur={() => setTimeout(() => setDropdownOpen(false), 150)}
                  className={`flex items-center gap-1.5 transition-colors duration-200 ${
                    pathname.startsWith('/over') ? 'text-gold' : 'text-white/70 hover:text-white'
                  }`}
                >
                  {item.label}
                  <svg
                    className={`w-3 h-3 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {dropdownOpen && (
                  <ul className="absolute top-full left-0 mt-2 bg-card/95 backdrop-blur-md border border-white/8 rounded-xl shadow-2xl min-w-[160px] py-1.5 overflow-hidden">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ) : (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className={`transition-colors duration-200 ${
                    pathname === item.href ? 'text-gold' : 'text-white/70 hover:text-white'
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            )
          )}
        </ul>

        {/* CTA */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="bg-gold text-deep text-sm font-bold px-5 py-2.5 rounded-full hover:bg-gold-light transition-all duration-200 hover:-translate-y-px"
          >
            Word lid
          </Link>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden p-2 text-white/70 hover:text-white transition-colors"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Menu openen"
        >
          <div className="w-5 flex flex-col gap-1.5">
            <span
              className={`block h-px bg-current transition-all duration-300 origin-center ${
                mobileOpen ? 'rotate-45 translate-y-2.5' : ''
              }`}
            />
            <span
              className={`block h-px bg-current transition-all duration-300 ${
                mobileOpen ? 'opacity-0 scale-x-0' : ''
              }`}
            />
            <span
              className={`block h-px bg-current transition-all duration-300 origin-center ${
                mobileOpen ? '-rotate-45 -translate-y-2.5' : ''
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } bg-deep/95 backdrop-blur-lg border-t border-white/[0.06]`}
      >
        <ul className="flex flex-col px-6 py-5 gap-4 text-sm font-medium">
          {navItems.map((item) =>
            item.children ? (
              <li key={item.label}>
                <span className="text-gold font-bold tracking-wide text-xs uppercase">{item.label}</span>
                <ul className="mt-2 ml-3 flex flex-col gap-2">
                  {item.children.map((child) => (
                    <li key={child.href}>
                      <Link
                        href={child.href}
                        className="text-white/60 hover:text-white transition-colors"
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className={`transition-colors ${pathname === item.href ? 'text-gold' : 'text-white/60 hover:text-white'}`}
                >
                  {item.label}
                </Link>
              </li>
            )
          )}
          <li className="pt-2">
            <Link
              href="/contact"
              className="inline-block bg-gold text-deep text-sm font-bold px-5 py-2.5 rounded-full hover:bg-gold-light transition-colors"
            >
              Word lid
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}
