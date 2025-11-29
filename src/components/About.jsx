import { motion } from 'framer-motion'
import { MapPin, Award, Globe } from 'lucide-react'

// Timeline images
import teachingPhoto from '../assets/IMG_20250706_154109459_HDR_PORTRAIT.jpg'
import airbnbPhoto from '../assets/IMG_20250610_104440397_HDR_PORTRAIT.jpg'
import norwayPhoto from '../assets/IMG_20250710_113431773_HDR_PORTRAIT.jpg'

const About = ({ language }) => {
  const content = {
    en: {
      hero: {
        title: 'ABOUT',
        subtitle: 'ELIO',
        tagline: 'FROM MILAN TO THE WORLD',
        description: 'A journey of transformation, innovation, and impact across 6 countries, 15+ years, and multiple industries.'
      },
      story: {
        title: 'MY STORY',
        paragraphs: [
          'Born in Abbiategrasso, Milan in 1978, I grew up immersed in Italian entrepreneurial culture. From an early age, I understood that success comes from combining passion with strategic thinking.',
          'My journey took me across Europe—from studying Public Administration at Sciences Po Grenoble to building educational platforms in Italy and Norway. Each experience shaped my unique approach to business and education.',
          'Today, I help entrepreneurs and businesses scale through education, multilingual marketing, and property management expertise. With 250+ properties managed, €150K+ in revenue, and coaching clients across 4 languages, I bridge cultures and industries to create extraordinary results.'
        ]
      },
      highlights: {
        title: 'KEY ACHIEVEMENTS',
        items: [
          {
            number: '250+',
            label: 'PROPERTIES MANAGED',
            description: 'Top 3 Airbnb host in Italy'
          },
          {
            number: '€150K+',
            label: 'ANNUAL REVENUE',
            description: 'Property management success'
          },
          {
            number: '6',
            label: 'COUNTRIES',
            description: 'International experience'
          },
          {
            number: '4',
            label: 'LANGUAGES',
            description: 'Multilingual coaching'
          },
          {
            number: '15+',
            label: 'YEARS',
            description: 'Industry expertise'
          },
          {
            number: '300+',
            label: 'MEMBERS',
            description: 'Mondelio non-profit community'
          }
        ]
      },
      philosophy: {
        title: 'MY PHILOSOPHY',
        quote: 'TRANSFORMATION THROUGH EDUCATION, INNOVATION, AND HUMAN CONNECTION',
        description: 'I believe in empowering individuals and businesses to achieve their full potential. By combining cutting-edge technology with timeless human values, we create sustainable success that transcends borders and industries.'
      }
    },
    it: {
      hero: {
        title: 'CHI SONO',
        subtitle: 'ELIO',
        tagline: 'DA MILANO AL MONDO',
        description: 'Un viaggio di trasformazione, innovazione e impatto attraverso 6 paesi, 15+ anni e molteplici settori.'
      },
      story: {
        title: 'LA MIA STORIA',
        paragraphs: [
          'Nato ad Abbiategrasso, Milano nel 1978, sono cresciuto immerso nella cultura imprenditoriale italiana. Fin da piccolo ho capito che il successo deriva dalla combinazione di passione e pensiero strategico.',
          'Il mio viaggio mi ha portato attraverso l\'Europa—dallo studio di Pubblica Amministrazione a Sciences Po Grenoble alla costruzione di piattaforme educative in Italia e Norvegia. Ogni esperienza ha plasmato il mio approccio unico al business e all\'educazione.',
          'Oggi aiuto imprenditori e aziende a crescere attraverso educazione, marketing multilingue ed esperienza nella gestione immobiliare. Con oltre 250 proprietà gestite, €150K+ di fatturato e clienti di coaching in 4 lingue, collego culture e settori per creare risultati straordinari.'
        ]
      },
      highlights: {
        title: 'RISULTATI CHIAVE',
        items: [
          {
            number: '250+',
            label: 'PROPRIETÀ GESTITE',
            description: 'Top 3 host Airbnb in Italia'
          },
          {
            number: '€150K+',
            label: 'FATTURATO ANNUO',
            description: 'Successo gestione immobiliare'
          },
          {
            number: '6',
            label: 'PAESI',
            description: 'Esperienza internazionale'
          },
          {
            number: '4',
            label: 'LINGUE',
            description: 'Coaching multilingue'
          },
          {
            number: '15+',
            label: 'ANNI',
            description: 'Esperienza nel settore'
          },
          {
            number: '300+',
            label: 'MEMBRI',
            description: 'Comunità non-profit Mondelio'
          }
        ]
      },
      philosophy: {
        title: 'LA MIA FILOSOFIA',
        quote: 'TRASFORMAZIONE ATTRAVERSO EDUCAZIONE, INNOVAZIONE E CONNESSIONE UMANA',
        description: 'Credo nel potenziare individui e aziende per raggiungere il loro pieno potenziale. Combinando tecnologia all\'avanguardia con valori umani senza tempo, creiamo successo sostenibile che trascende confini e settori.'
      }
    },
    no: {
      hero: {
        title: 'OM MEG',
        subtitle: 'ELIO',
        tagline: 'FRA MILANO TIL VERDEN',
        description: 'En reise av transformasjon, innovasjon og påvirkning på tvers av 6 land, 15+ år og flere bransjer.'
      },
      story: {
        title: 'MIN HISTORIE',
        paragraphs: [
          'Født i Abbiategrasso, Milano i 1978, vokste jeg opp nedsenket i italiensk gründerkultur. Fra tidlig alder forsto jeg at suksess kommer fra å kombinere lidenskap med strategisk tenkning.',
          'Min reise tok meg over Europa—fra å studere offentlig administrasjon ved Sciences Po Grenoble til å bygge utdanningsplattformer i Italia og Norge. Hver erfaring formet min unike tilnærming til business og utdanning.',
          'I dag hjelper jeg gründere og bedrifter med å vokse gjennom utdanning, flerspråklig markedsføring og eiendomsforvaltningsekspertise. Med 250+ eiendommer forvaltet, €150K+ i inntekt og coachingklienter på tvers av 4 språk, bygger jeg bro mellom kulturer og bransjer for å skape ekstraordinære resultater.'
        ]
      },
      highlights: {
        title: 'NØKKELPRESTASJONER',
        items: [
          {
            number: '250+',
            label: 'EIENDOMMER FORVALTET',
            description: 'Topp 3 Airbnb-vert i Italia'
          },
          {
            number: '€150K+',
            label: 'ÅRLIG INNTEKT',
            description: 'Eiendomsforvaltningssuksess'
          },
          {
            number: '6',
            label: 'LAND',
            description: 'Internasjonal erfaring'
          },
          {
            number: '4',
            label: 'SPRÅK',
            description: 'Flerspråklig coaching'
          },
          {
            number: '15+',
            label: 'ÅR',
            description: 'Bransjeekspertise'
          },
          {
            number: '300+',
            label: 'MEDLEMMER',
            description: 'Mondelio ideell fellesskap'
          }
        ]
      },
      philosophy: {
        title: 'MIN FILOSOFI',
        quote: 'TRANSFORMASJON GJENNOM UTDANNING, INNOVASJON OG MENNESKELIG FORBINDELSE',
        description: 'Jeg tror på å styrke enkeltpersoner og bedrifter til å oppnå sitt fulle potensial. Ved å kombinere banebrytende teknologi med tidløse menneskelige verdier, skaper vi bærekraftig suksess som transcenderer grenser og bransjer.'
      }
    }
  }

  const t = content[language]

  return (
    <div className="min-h-screen bg-black text-white pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="text-[15vw] md:text-[20vw] font-black text-yellow-400/10 leading-none"
            style={{ fontFamily: 'Impact, Arial Black, sans-serif' }}
          >
            {t.hero.subtitle}
          </motion.h1>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-4"
          >
            {t.hero.title}
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl md:text-5xl font-bold text-yellow-400 mb-6"
          >
            {t.hero.tagline}
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300"
          >
            {t.hero.description}
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-32 bg-black border-t border-yellow-400/20">
        <div className="max-w-5xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black text-yellow-400 mb-16"
          >
            {t.story.title}
          </motion.h2>

          <div className="space-y-8">
            {t.story.paragraphs.map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-xl md:text-2xl text-gray-300 leading-relaxed"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black text-center mb-20 text-yellow-400"
          >
            {t.highlights.title}
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {t.highlights.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 border-2 border-white/10 hover:border-yellow-400 transition-all duration-300 rounded-lg"
              >
                <div className="text-5xl md:text-6xl font-black text-yellow-400 mb-2">
                  {item.number}
                </div>
                <div className="text-sm md:text-base font-bold mb-2">
                  {item.label}
                </div>
                <div className="text-xs md:text-sm text-gray-400">
                  {item.description}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 bg-yellow-400 text-black">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black mb-8"
          >
            {t.philosophy.title}
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-8 leading-tight"
          >
            {t.philosophy.quote}
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl leading-relaxed"
          >
            {t.philosophy.description}
          </motion.p>
        </div>
      </section>
    </div>
  )
}

export default About
