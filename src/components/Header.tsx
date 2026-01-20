import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { href: '/programs', label: 'Programs' },
  { href: '/about', label: 'About' },
  { href: '/donate', label: 'Donate' },
]

export function Header() {
  const location = useLocation()

  return (
    <header className="border-b border-white/10 bg-parsis-deep/80 backdrop-blur-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-parsis-gold to-parsis-bronze flex items-center justify-center">
            <span className="text-xl font-bold text-parsis-deep">P</span>
          </div>
          <div>
            <span className="text-xl font-bold gradient-text">PARSIS</span>
            <span className="text-xs text-white/50 block">Foundation</span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`text-sm font-medium transition-colors ${
                location.pathname === link.href
                  ? 'text-parsis-gold'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            to="/donate"
            className="px-6 py-2 bg-gradient-to-r from-parsis-gold to-parsis-bronze text-parsis-deep font-semibold rounded-lg hover:opacity-90 transition-opacity"
          >
            Support Us
          </Link>
        </div>
      </div>
    </header>
  )
}
