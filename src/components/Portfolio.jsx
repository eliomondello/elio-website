import { motion } from 'framer-motion'
import { TrendingUp, Users, Award, Globe } from 'lucide-react'

const Portfolio = ({ language }) => {
  const content = {
    en: {
      hero: {
        title: 'PORTFOLIO',
        subtitle: 'PROVEN RESULTS',
        description: 'Real projects. Real impact. Real results across multiple industries.'
      },
      projects: [
        {
          title: 'PROPERTY MANAGEMENT',
          category: 'Business Excellence',
          tagline: '€150K+ Revenue, Top 3 National Ranking',
          description: 'Built and managed 250+ short-term rental properties achieving industry-leading results.',
          metrics: [
            { label: 'PROPERTIES', value: '250+' },
            { label: 'REVENUE', value: '€150K+' },
            { label: 'RANKING', value: 'TOP 3' },
            { label: 'YEARS', value: '10+' }
          ]
        },
        {
          title: 'DIGITAL MARKETING',
          category: 'Growth & Strategy',
          tagline: '50+ Businesses Transformed',
          description: 'Comprehensive digital strategies including SEO, content creation, and WordPress development.',
          metrics: [
            { label: 'CLIENTS', value: '50+' },
            { label: 'INDUSTRIES', value: '10+' },
            { label: 'GROWTH', value: '200%+' },
            { label: 'SATISFACTION', value: '98%' }
          ]
        },
        {
          title: 'EDUCATION & TEACHING',
          category: 'Impact & Innovation',
          tagline: '300+ Students, 15+ Institutions',
          description: 'Multilingual teaching across all levels from kindergarten to high school in Italy and Norway.',
          metrics: [
            { label: 'STUDENTS', value: '300+' },
            { label: 'INSTITUTIONS', value: '15+' },
            { label: 'LANGUAGES', value: '4' },
            { label: 'EXPERIENCE', value: '14+ YRS' }
          ]
        },
        {
          title: 'MULTILINGUAL COACHING',
          category: 'Personal Development',
          tagline: 'Global Reach, Local Impact',
          description: 'Personalized coaching in 4 languages helping individuals and businesses achieve extraordinary results.',
          metrics: [
            { label: 'LANGUAGES', value: '4' },
            { label: 'COUNTRIES', value: '6' },
            { label: 'CLIENTS', value: '100+' },
            { label: 'SUCCESS RATE', value: '95%' }
          ]
        }
      ]
    },
    it: {
      hero: {
        title: 'PORTFOLIO',
        subtitle: 'RISULTATI PROVATI',
        description: 'Progetti reali. Impatto reale. Risultati reali in molteplici settori.'
      },
      projects: [
        {
          title: 'GESTIONE IMMOBILIARE',
          category: 'Eccellenza Aziendale',
          tagline: '€150K+ Fatturato, Top 3 Ranking Nazionale',
          description: 'Costruito e gestito oltre 250 proprietà in affitto breve raggiungendo risultati leader del settore.',
          metrics: [
            { label: 'PROPRIETÀ', value: '250+' },
            { label: 'FATTURATO', value: '€150K+' },
            { label: 'RANKING', value: 'TOP 3' },
            { label: 'ANNI', value: '10+' }
          ]
        },
        {
          title: 'MARKETING DIGITALE',
          category: 'Crescita & Strategia',
          tagline: '50+ Aziende Trasformate',
          description: 'Strategie digitali complete inclusi SEO, creazione contenuti e sviluppo WordPress.',
          metrics: [
            { label: 'CLIENTI', value: '50+' },
            { label: 'SETTORI', value: '10+' },
            { label: 'CRESCITA', value: '200%+' },
            { label: 'SODDISFAZIONE', value: '98%' }
          ]
        },
        {
          title: 'EDUCAZIONE & INSEGNAMENTO',
          category: 'Impatto & Innovazione',
          tagline: '300+ Studenti, 15+ Istituzioni',
          description: 'Insegnamento multilingue a tutti i livelli dalla scuola materna alle superiori in Italia e Norvegia.',
          metrics: [
            { label: 'STUDENTI', value: '300+' },
            { label: 'ISTITUZIONI', value: '15+' },
            { label: 'LINGUE', value: '4' },
            { label: 'ESPERIENZA', value: '14+ ANNI' }
          ]
        },
        {
          title: 'COACHING MULTILINGUE',
          category: 'Sviluppo Personale',
          tagline: 'Portata Globale, Impatto Locale',
          description: 'Coaching personalizzato in 4 lingue aiutando individui e aziende a raggiungere risultati straordinari.',
          metrics: [
            { label: 'LINGUE', value: '4' },
            { label: 'PAESI', value: '6' },
            { label: 'CLIENTI', value: '100+' },
            { label: 'TASSO SUCCESSO', value: '95%' }
          ]
        }
      ]
    },
    no: {
      hero: {
        title: 'PORTFOLIO',
        subtitle: 'DOKUMENTERTE RESULTATER',
        description: 'Ekte prosjekter. Ekte påvirkning. Ekte resultater på tvers av flere bransjer.'
      },
      projects: [
        {
          title: 'EIENDOMSFORVALTNING',
          category: 'Forretningseksellens',
          tagline: '€150K+ Inntekt, Topp 3 Nasjonal Rangering',
          description: 'Bygget og forvaltet 250+ korttidsutleieeiendommer og oppnådde bransjeledende resultater.',
          metrics: [
            { label: 'EIENDOMMER', value: '250+' },
            { label: 'INNTEKT', value: '€150K+' },
            { label: 'RANGERING', value: 'TOPP 3' },
            { label: 'ÅR', value: '10+' }
          ]
        },
        {
          title: 'DIGITAL MARKEDSFØRING',
          category: 'Vekst & Strategi',
          tagline: '50+ Bedrifter Transformert',
          description: 'Omfattende digitale strategier inkludert SEO, innholdsproduksjon og WordPress-utvikling.',
          metrics: [
            { label: 'KLIENTER', value: '50+' },
            { label: 'BRANSJER', value: '10+' },
            { label: 'VEKST', value: '200%+' },
            { label: 'TILFREDSHET', value: '98%' }
          ]
        },
        {
          title: 'UTDANNING & UNDERVISNING',
          category: 'Påvirkning & Innovasjon',
          tagline: '300+ Studenter, 15+ Institusjoner',
          description: 'Flerspråklig undervisning på alle nivåer fra barnehage til videregående i Italia og Norge.',
          metrics: [
            { label: 'STUDENTER', value: '300+' },
            { label: 'INSTITUSJONER', value: '15+' },
            { label: 'SPRÅK', value: '4' },
            { label: 'ERFARING', value: '14+ ÅR' }
          ]
        },
        {
          title: 'FLERSPRÅKLIG COACHING',
          category: 'Personlig Utvikling',
          tagline: 'Global Rekkevidde, Lokal Påvirkning',
          description: 'Personlig coaching på 4 språk som hjelper enkeltpersoner og bedrifter med å oppnå ekstraordinære resultater.',
          metrics: [
            { label: 'SPRÅK', value: '4' },
            { label: 'LAND', value: '6' },
            { label: 'KLIENTER', value: '100+' },
            { label: 'SUKSESSRATE', value: '95%' }
          ]
        }
      ]
    }
  }

  const t = content[language]

  return (
    <div className="min-h-screen bg-black text-white pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="text-[15vw] md:text-[20vw] font-black text-yellow-400/10 leading-none"
            style={{ fontFamily: 'Impact, Arial Black, sans-serif' }}
          >
            WORK
          </motion.h1>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-black mb-6 text-yellow-400"
          >
            {t.hero.subtitle}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300"
          >
            {t.hero.description}
          </motion.p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4 space-y-32">
          {t.projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="border-t-2 border-yellow-400/20 pt-16"
            >
              <div className="mb-4 text-sm tracking-widest text-yellow-400">
                {project.category}
              </div>
              
              <h3 className="text-5xl md:text-7xl font-black mb-4 hover:text-yellow-400 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-2xl md:text-3xl font-bold text-gray-300 mb-6">
                {project.tagline}
              </p>
              
              <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl leading-relaxed">
                {project.description}
              </p>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {project.metrics.map((metric, i) => (
                  <div key={i} className="text-center p-6 border border-white/10 rounded-lg hover:border-yellow-400 transition-all">
                    <div className="text-4xl md:text-5xl font-black text-yellow-400 mb-2">
                      {metric.value}
                    </div>
                    <div className="text-sm text-gray-400">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Portfolio
