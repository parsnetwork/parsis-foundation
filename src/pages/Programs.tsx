import { BookOpen, GraduationCap, Users, Heart, Globe, Music, Palette, Library } from 'lucide-react'

const programs = [
  {
    id: 'heritage',
    icon: Library,
    title: 'Heritage Preservation',
    description: 'Documenting and preserving Persian cultural artifacts, manuscripts, and oral histories.',
    initiatives: [
      'Digital Archive Project - Digitizing rare manuscripts and historical documents',
      'Oral History Initiative - Recording stories from Persian elders worldwide',
      'Artifact Conservation - Supporting museums and cultural institutions',
      'Historical Research Grants - Funding academic research on Persian history',
    ],
  },
  {
    id: 'education',
    icon: GraduationCap,
    title: 'Educational Initiatives',
    description: 'Supporting Persian students and promoting Persian language education.',
    initiatives: [
      'PARSIS Scholarships - Merit and need-based scholarships for Persian students',
      'Persian Language Schools - Supporting weekend schools worldwide',
      'Teacher Training Program - Developing certified Persian language instructors',
      'Academic Exchange - Facilitating student and scholar exchanges',
    ],
  },
  {
    id: 'community',
    icon: Users,
    title: 'Community Support',
    description: 'Building and strengthening Persian diaspora communities globally.',
    initiatives: [
      'Community Center Network - Supporting local Persian cultural centers',
      'Youth Leadership Program - Developing the next generation of community leaders',
      'Professional Network - Connecting Persian professionals worldwide',
      'Family Support Services - Resources for newly arrived families',
    ],
  },
  {
    id: 'cultural',
    icon: Music,
    title: 'Cultural Programs',
    description: 'Celebrating and promoting Persian arts, music, and traditions.',
    initiatives: [
      'Nowruz Festivals - Organizing Persian New Year celebrations',
      'Concert Series - Showcasing Persian classical and contemporary music',
      'Film Festival - Annual Persian film screenings and awards',
      'Poetry Nights - Regular gatherings celebrating Persian literature',
    ],
  },
  {
    id: 'arts',
    icon: Palette,
    title: 'Arts & Literature',
    description: 'Supporting Persian artists and writers while promoting our artistic heritage.',
    initiatives: [
      'Artist Residencies - Providing space and support for Persian artists',
      'Publishing Support - Helping publish Persian literature in translation',
      'Gallery Exhibitions - Showcasing Persian visual arts',
      'Creative Writing Workshops - Nurturing new Persian literary voices',
    ],
  },
  {
    id: 'humanitarian',
    icon: Heart,
    title: 'Humanitarian Aid',
    description: 'Providing assistance to Persian communities facing hardship.',
    initiatives: [
      'Emergency Relief Fund - Rapid response for crises affecting Persians',
      'Healthcare Support - Medical assistance for those in need',
      'Refugee Assistance - Supporting Persian refugees with resettlement',
      'Food Security Program - Addressing hunger in vulnerable communities',
    ],
  },
  {
    id: 'language',
    icon: BookOpen,
    title: 'Language Preservation',
    description: 'Ensuring Persian language thrives across generations.',
    initiatives: [
      'Online Learning Platform - Free Persian language courses',
      'Children\'s Books - Publishing Persian children\'s literature',
      'Dictionary Project - Comprehensive modern Persian dictionary',
      'Dialect Documentation - Recording regional Persian dialects',
    ],
  },
  {
    id: 'exchange',
    icon: Globe,
    title: 'Cultural Exchange',
    description: 'Building bridges between Persian and other world cultures.',
    initiatives: [
      'International Partnerships - Collaborating with cultural organizations',
      'Cultural Ambassadors - Training representatives for cultural outreach',
      'Exchange Programs - Student and professional exchanges',
      'Interfaith Dialogue - Promoting understanding across communities',
    ],
  },
]

export function Programs() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Our Programs</span>
            </h1>
            <p className="text-white/60 max-w-2xl mx-auto">
              The PARSIS Foundation operates comprehensive programs across heritage preservation,
              education, community building, and cultural promotion.
            </p>
          </div>

          <div className="space-y-8">
            {programs.map((program) => (
              <div key={program.id} id={program.id} className="glass-card p-6 md:p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-parsis-gold/20 to-parsis-bronze/20 flex items-center justify-center flex-shrink-0">
                    <program.icon className="w-6 h-6 text-parsis-gold" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-2">{program.title}</h2>
                    <p className="text-white/60">{program.description}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  {program.initiatives.map((initiative, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-parsis-deep/50 rounded-lg">
                      <div className="w-2 h-2 rounded-full bg-parsis-gold mt-2 flex-shrink-0" />
                      <p className="text-white/80 text-sm">{initiative}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Get Involved */}
          <div className="mt-12 p-8 border border-parsis-gold/20 rounded-lg bg-parsis-gold/5 text-center">
            <h2 className="text-2xl font-bold mb-4">Get Involved</h2>
            <p className="text-white/60 mb-6 max-w-xl mx-auto">
              Whether through volunteering, donations, or partnerships, there are many ways
              to support our programs and make a difference in the Persian community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/donate"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-parsis-gold to-parsis-bronze text-parsis-deep font-semibold rounded-lg hover:opacity-90"
              >
                Donate Now
              </a>
              <a
                href="mailto:volunteer@parsis.foundation"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/5"
              >
                Volunteer With Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
