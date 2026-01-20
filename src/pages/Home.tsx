import { Link } from 'react-router-dom'
import { ArrowRight, BookOpen, Heart, Users, GraduationCap, Globe, Landmark } from 'lucide-react'

const stats = [
  { label: 'Community Members', value: '50,000+', change: 'Worldwide' },
  { label: 'Programs Active', value: '12', change: 'All regions' },
  { label: 'Scholarships Awarded', value: '500+', change: 'Since 2020' },
  { label: 'Cultural Events', value: '200+', change: 'Annual' },
]

const features = [
  {
    icon: BookOpen,
    title: 'Heritage Preservation',
    description: 'Documenting and preserving Persian language, literature, art, and historical artifacts for future generations.',
  },
  {
    icon: GraduationCap,
    title: 'Educational Initiatives',
    description: 'Scholarships, language programs, and academic resources for Persian students and researchers worldwide.',
  },
  {
    icon: Users,
    title: 'Community Support',
    description: 'Building networks and providing resources for Persian diaspora communities across the globe.',
  },
  {
    icon: Heart,
    title: 'Humanitarian Aid',
    description: 'Emergency relief, healthcare support, and assistance for Persian communities in need.',
  },
  {
    icon: Globe,
    title: 'Cultural Exchange',
    description: 'Fostering understanding through cultural events, exhibitions, and cross-cultural dialogue.',
  },
  {
    icon: Landmark,
    title: 'Institution Building',
    description: 'Supporting the creation and maintenance of Persian cultural centers and educational institutions.',
  },
]

export function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-parsis-gold/10 border border-parsis-gold/20 mb-8">
            <span className="text-parsis-gold text-sm font-medium">Persian Heritage Foundation</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="gradient-text">Preserving Persian Heritage</span>
          </h1>

          <p className="text-xl text-white/70 max-w-2xl mx-auto mb-10">
            The PARSIS Foundation supports cultural preservation, education, and community
            programs for the Persian diaspora worldwide.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/programs"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-parsis-gold to-parsis-bronze text-parsis-deep font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              Our Programs
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/donate"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/5 transition-colors"
            >
              Support Our Mission
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-y border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl md:text-4xl font-bold gradient-text mb-2">{stat.value}</p>
                <p className="text-white/60 text-sm">{stat.label}</p>
                <p className="text-parsis-gold text-xs mt-1">{stat.change}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="glass-card p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
              Our Mission
            </h2>
            <p className="text-lg text-white/80 text-center leading-relaxed">
              The PARSIS Foundation is dedicated to preserving and celebrating Persian heritage
              while supporting the Persian diaspora through education, cultural programs, and
              community initiatives. We believe that maintaining our cultural identity strengthens
              both our community and the broader world.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center mt-8">
              <div>
                <p className="text-parsis-gold font-semibold mb-2">Preserve</p>
                <p className="text-white/70 text-sm">
                  Safeguarding Persian language, art, literature, and traditions.
                </p>
              </div>
              <div>
                <p className="text-parsis-gold font-semibold mb-2">Educate</p>
                <p className="text-white/70 text-sm">
                  Providing learning opportunities and academic support.
                </p>
              </div>
              <div>
                <p className="text-parsis-gold font-semibold mb-2">Connect</p>
                <p className="text-white/70 text-sm">
                  Building bridges within the diaspora and with the world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="gradient-text">What We Do</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="glass-card p-6">
                <feature.icon className="w-10 h-10 text-parsis-gold mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-white/60">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-white/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Us in Preserving Our Heritage
          </h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">
            Your support helps us continue our mission of cultural preservation,
            education, and community building for Persians worldwide.
          </p>
          <Link
            to="/donate"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-parsis-gold to-parsis-bronze text-parsis-deep font-semibold rounded-lg hover:opacity-90 transition-opacity glow-gold"
          >
            Make a Donation
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
