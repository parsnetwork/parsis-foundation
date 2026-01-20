import { Target, Eye, Heart, Users, Award, Globe } from 'lucide-react'

const values = [
  {
    icon: Heart,
    title: 'Cultural Pride',
    description: 'We celebrate the richness and depth of Persian civilization while embracing our place in the modern world.',
  },
  {
    icon: Users,
    title: 'Community First',
    description: 'Every initiative we undertake is driven by the needs and aspirations of the Persian diaspora.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We strive for the highest standards in all our programs, honoring the Persian tradition of scholarly achievement.',
  },
  {
    icon: Globe,
    title: 'Inclusivity',
    description: 'We welcome all who share an appreciation for Persian culture, regardless of background or belief.',
  },
]

const team = [
  {
    name: 'Board of Directors',
    description: 'Our board comprises distinguished Persian-American leaders from academia, business, and the arts who guide our strategic direction.',
  },
  {
    name: 'Advisory Council',
    description: 'Scholars, artists, and community leaders who provide expertise on our programs and cultural initiatives.',
  },
  {
    name: 'Regional Chapters',
    description: 'Local leaders in major cities coordinate community programs and represent the Foundation in their regions.',
  },
]

const milestones = [
  { year: '2020', event: 'PARSIS Foundation established in Los Angeles' },
  { year: '2021', event: 'Launched first scholarship program with 50 recipients' },
  { year: '2022', event: 'Opened digital archive with 10,000+ items' },
  { year: '2023', event: 'Expanded to 15 regional chapters worldwide' },
  { year: '2024', event: 'Partnered with 25 universities for Persian studies' },
  { year: '2025', event: 'Reached 50,000 community members globally' },
]

export function About() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">About PARSIS Foundation</span>
            </h1>
            <p className="text-white/60">
              Preserving Persian heritage and empowering our global community.
            </p>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="glass-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-8 h-8 text-parsis-gold" />
                <h2 className="text-xl font-bold">Our Mission</h2>
              </div>
              <p className="text-white/70">
                To preserve, celebrate, and share Persian cultural heritage while supporting
                the educational and social needs of the Persian diaspora through sustainable,
                community-driven programs.
              </p>
            </div>

            <div className="glass-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <Eye className="w-8 h-8 text-parsis-gold" />
                <h2 className="text-xl font-bold">Our Vision</h2>
              </div>
              <p className="text-white/70">
                A world where Persian heritage thrives across generations, where our community
                is connected and empowered, and where Persian contributions to human civilization
                are recognized and celebrated.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-center mb-8">Our Values</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {values.map((value) => (
                <div key={value.title} className="glass-card p-6">
                  <value.icon className="w-8 h-8 text-parsis-gold mb-3" />
                  <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                  <p className="text-white/60 text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Team Section */}
          <div id="team" className="mb-12">
            <h2 className="text-2xl font-bold text-center mb-8">Leadership</h2>
            <div className="space-y-4">
              {team.map((group) => (
                <div key={group.name} className="glass-card p-6">
                  <h3 className="text-lg font-semibold text-parsis-gold mb-2">{group.name}</h3>
                  <p className="text-white/70">{group.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-center mb-8">Our Journey</h2>
            <div className="glass-card p-6">
              <div className="space-y-4">
                {milestones.map((milestone, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-16 flex-shrink-0">
                      <span className="text-parsis-gold font-bold">{milestone.year}</span>
                    </div>
                    <div className="flex-1 pb-4 border-b border-white/10 last:border-0">
                      <p className="text-white/80">{milestone.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Partners */}
          <div id="partners" className="mb-12">
            <h2 className="text-2xl font-bold text-center mb-8">Our Partners</h2>
            <div className="glass-card p-8 text-center">
              <p className="text-white/70 mb-4">
                We collaborate with universities, cultural institutions, and community organizations
                worldwide to advance our mission.
              </p>
              <p className="text-white/50 text-sm">
                Partner logos and details coming soon.
              </p>
            </div>
          </div>

          {/* Reports */}
          <div id="reports" className="mb-12">
            <h2 className="text-2xl font-bold text-center mb-8">Transparency</h2>
            <div className="glass-card p-8">
              <p className="text-white/70 mb-6 text-center">
                As a 501(c)(3) nonprofit organization, we are committed to full transparency
                in our operations and finances.
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div className="p-4 bg-parsis-deep/50 rounded-lg">
                  <p className="text-2xl font-bold gradient-text">85%</p>
                  <p className="text-white/60 text-sm">Program Spending</p>
                </div>
                <div className="p-4 bg-parsis-deep/50 rounded-lg">
                  <p className="text-2xl font-bold gradient-text">10%</p>
                  <p className="text-white/60 text-sm">Administration</p>
                </div>
                <div className="p-4 bg-parsis-deep/50 rounded-lg">
                  <p className="text-2xl font-bold gradient-text">5%</p>
                  <p className="text-white/60 text-sm">Fundraising</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="glass-card p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
            <p className="text-white/70 mb-6">
              Have questions or want to learn more about our work?
            </p>
            <div className="space-y-2 text-white/60">
              <p>Email: info@parsis.foundation</p>
              <p>Address: Los Angeles, California</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
