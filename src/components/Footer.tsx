import { ExternalLink } from 'lucide-react'

const programLinks = [
  { href: '/programs#heritage', label: 'Heritage Preservation' },
  { href: '/programs#education', label: 'Educational Initiatives' },
  { href: '/programs#community', label: 'Community Support' },
  { href: '/programs#cultural', label: 'Cultural Programs' },
]

const aboutLinks = [
  { href: '/about', label: 'Our Mission' },
  { href: '/about#team', label: 'Leadership' },
  { href: '/about#partners', label: 'Partners' },
  { href: '/about#reports', label: 'Annual Reports' },
]

const socialLinks = [
  { href: 'https://twitter.com/parsisfoundation', label: 'Twitter' },
  { href: 'https://instagram.com/parsisfoundation', label: 'Instagram' },
  { href: 'https://linkedin.com/company/parsis-foundation', label: 'LinkedIn' },
]

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-parsis-deep py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-semibold mb-4 text-parsis-gold">Programs</h4>
            <ul className="space-y-2">
              {programLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-white text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-parsis-gold">About</h4>
            <ul className="space-y-2">
              {aboutLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-white text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-parsis-gold">Connect</h4>
            <ul className="space-y-2">
              {socialLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-white text-sm flex items-center gap-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-parsis-gold">Contact</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li>info@parsis.foundation</li>
              <li>Los Angeles, CA</li>
              <li>501(c)(3) Nonprofit</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl gradient-text font-bold">PARSIS</span>
            <span className="text-white/40">|</span>
            <span className="text-white/60 text-sm">Foundation</span>
          </div>
          <p className="text-white/40 text-sm">
            2026 PARSIS Foundation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
