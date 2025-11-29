import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Services = ({ language }) => {
  const content = {
    en: {
      hero: {
        title: 'SERVICES',
        subtitle: 'TRANSFORM YOUR BUSINESS',
        description: 'Comprehensive solutions to unlock your potential and accelerate success across multiple domains.'
      },
      services: [
        {
          title: 'PROPERTY MANAGEMENT',
          icon: '🏠',
          tagline: 'Maximize Revenue, Minimize Effort',
          description: 'Strategic consulting to transform property portfolios using data-driven insights and AI technologies.',
          highlights: [
            'Increase rental income by 40-60%',
            'Top 3 Airbnb host expertise',
            '250+ properties managed',
            'AI-powered analytics'
          ]
        },
        {
          title: 'DIGITAL MARKETING',
          icon: '🚀',
          tagline: 'Dominate Your Market Online',
          description: 'Comprehensive digital strategies including SEO, content marketing, and AI-powered solutions.',
          highlights: [
            'Increase visibility by 200%+',
            'Multilingual SEO expertise',
            'WordPress development',
            'Conversion optimization'
          ]
        },
        {
          title: 'MULTILINGUAL COACHING',
          icon: '🗣️',
          tagline: 'Break Language Barriers',
          description: 'Personalized coaching in 4 languages helping businesses expand internationally.',
          highlights: [
            'Italian, English, Norwegian, French',
            'Cross-cultural communication',
            'International business etiquette',
            'Global networking strategies'
          ]
        },
        {
          title: 'EDUCATION & TEACHING',
          icon: '📚',
          tagline: 'Inspire the Next Generation',
          description: 'Multilingual teaching and educational support for all levels from kindergarten to high school.',
          highlights: [
            'Language instruction specialist',
            'Student engagement expert',
            'Curriculum development',
            'Educational technology integration'
          ]
        }
      ],
      cta: {
        title: "READY TO TRANSFORM YOUR BUSINESS?",
        subtitle: "Let's discuss how I can help you achieve extraordinary results.",
        button: 'BOOK A CONSULTATION'
      }
    },
    it: {
      hero: {
        title: 'SERVIZI',
        subtitle: 'TRASFORMA IL TUO BUSINESS',
        description: 'Soluzioni complete per sbloccare il tuo potenziale e accelerare il successo in molteplici domini.'
      },
      services: [
        {
          title: 'GESTIONE IMMOBILIARE',
          icon: '🏠',
          tagline: 'Massimizza i Ricavi, Minimizza lo Sforzo',
          description: 'Consulenza strategica per trasformare portafogli immobiliari usando insights basati sui dati e tecnologie AI.',
          highlights: [
            'Aumenta i ricavi del 40-60%',
            'Esperienza Top 3 host Airbnb',
            '250+ proprietà gestite',
            'Analytics potenziati da AI'
          ]
        },
        {
          title: 'MARKETING DIGITALE',
          icon: '🚀',
          tagline: 'Domina il Tuo Mercato Online',
          description: 'Strategie digitali complete inclusi SEO, content marketing e soluzioni potenziate da AI.',
          highlights: [
            'Aumenta visibilità del 200%+',
            'Esperienza SEO multilingue',
            'Sviluppo WordPress',
            'Ottimizzazione conversioni'
          ]
        },
        {
          title: 'COACHING MULTILINGUE',
          icon: '🗣️',
          tagline: 'Abbatti le Barriere Linguistiche',
          description: 'Coaching personalizzato in 4 lingue per aiutare le aziende ad espandersi internazionalmente.',
          highlights: [
            'Italiano, Inglese, Norvegese, Francese',
            'Comunicazione interculturale',
            'Etichetta business internazionale',
            'Strategie networking globale'
          ]
        },
        {
          title: 'EDUCAZIONE & INSEGNAMENTO',
          icon: '📚',
          tagline: 'Ispira la Prossima Generazione',
          description: 'Insegnamento multilingue e supporto educativo per tutti i livelli dalla scuola materna alle superiori.',
          highlights: [
            'Specialista istruzione linguistica',
            'Esperto coinvolgimento studenti',
            'Sviluppo curriculum',
            'Integrazione tecnologie educative'
          ]
        }
      ],
      cta: {
        title: "PRONTO A TRASFORMARE IL TUO BUSINESS?",
        subtitle: "Discutiamo come posso aiutarti a raggiungere risultati straordinari.",
        button: 'PRENOTA UNA CONSULENZA'
      }
    },
    no: {
      hero: {
        title: 'TJENESTER',
        subtitle: 'TRANSFORMER DIN BEDRIFT',
        description: 'Omfattende løsninger for å låse opp potensialet ditt og akselerere suksess på tvers av flere domener.'
      },
      services: [
        {
          title: 'EIENDOMSFORVALTNING',
          icon: '🏠',
          tagline: 'Maksimer Inntekt, Minimer Innsats',
          description: 'Strategisk rådgivning for å transformere eiendomsporteføljer ved hjelp av datadrevne innsikter og AI-teknologier.',
          highlights: [
            'Øk leieinntekter med 40-60%',
            'Topp 3 Airbnb-vertsekspertise',
            '250+ eiendommer forvaltet',
            'AI-drevet analyse'
          ]
        },
        {
          title: 'DIGITAL MARKEDSFØRING',
          icon: '🚀',
          tagline: 'Dominer Markedet Ditt Online',
          description: 'Omfattende digitale strategier inkludert SEO, innholdsmarkedsføring og AI-drevne løsninger.',
          highlights: [
            'Øk synlighet med 200%+',
            'Flerspråklig SEO-ekspertise',
            'WordPress-utvikling',
            'Konverteringsoptimalisering'
          ]
        },
        {
          title: 'FLERSPRÅKLIG COACHING',
          icon: '🗣️',
          tagline: 'Bryt Språkbarrierer',
          description: 'Personlig coaching på 4 språk som hjelper bedrifter med å ekspandere internasjonalt.',
          highlights: [
            'Italiensk, Engelsk, Norsk, Fransk',
            'Tverrkulturell kommunikasjon',
            'Internasjonal forretningsetikette',
            'Globale nettverksstrategier'
          ]
        },
        {
          title: 'UTDANNING & UNDERVISNING',
          icon: '📚',
          tagline: 'Inspirer Neste Generasjon',
          description: 'Flerspråklig undervisning og pedagogisk støtte for alle nivåer fra barnehage til videregående.',
          highlights: [
            'Språkinstruksjonsspesialist',
            'Elevengasjementsekspert',
            'Læreplanutvikkling',
            'Pedagogisk teknologiintegrering'
          ]
        }
      ],
      cta: {
        title: "KLAR TIL Å TRANSFORMERE BEDRIFTEN DIN?",
        subtitle: "La oss diskutere hvordan jeg kan hjelpe deg med å oppnå ekstraordinære resultater.",
        button: 'BESTILL EN KONSULTASJON'
      }
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
            {t.hero.title}
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

      {/* Services Grid */}
      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {t.services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-8 md:p-12 border-2 border-white/10 hover:border-yellow-400 transition-all duration-300 rounded-lg"
              >
                <div className="text-6xl mb-6">{service.icon}</div>
                <h3 className="text-3xl md:text-4xl font-black mb-3 group-hover:text-yellow-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-lg md:text-xl text-yellow-400 font-bold mb-4">
                  {service.tagline}
                </p>
                <p className="text-base md:text-lg text-gray-400 mb-8 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                      <span className="text-gray-300">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-yellow-400 text-black">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black mb-6 leading-tight"
          >
            {t.cta.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl mb-12"
          >
            {t.cta.subtitle}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-black text-white hover:bg-gray-900 font-bold text-xl px-12 py-8 group"
              >
                {t.cta.button}
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Services
