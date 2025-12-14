import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { ChevronDown, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

// Import images
import heroImage from '../assets/IMG_20250706_154109459_HDR_PORTRAIT.jpg'
import portfolioImg1 from '../assets/IMG_20250706_154203787_HDR_PORTRAIT.jpg'
import portfolioImg2 from '../assets/IMG_20250706_154257593_HDR_PORTRAIT.jpg'
import portfolioImg3 from '../assets/IMG_20250803_112156728_HDR_PORTRAIT.jpg'
import portfolioImg4 from '../assets/IMG_20250707_150302221_HDR_PORTRAIT.jpg'
import timelineImg1 from '../assets/IMG_20220610_125357490_HDR_PORTRAIT.jpg'
import timelineImg2 from '../assets/IMG_20230917_191400957_HDR-EDIT.jpg'
import timelineImg3 from '../assets/IMG_20240611_162138568_HDR.jpg'

const HomeIntegrated = ({ language = 'en' }) => {
  const names = ['ELIO', 'MONDELLO', 'ANZÀ']
  const [currentNameIndex, setCurrentNameIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNameIndex((prev) => (prev + 1) % names.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  const content = {
    en: {
      hero: {
        subtitle: 'ENTREPRENEUR • SPEAKER • EDUCATOR • AUTHOR',
        tagline: '6 Countries • 1 Story • 47 Years',
        scroll: 'SCROLL'
      },
      about: {
        title: 'TRANSFORMING BUSINESSES THROUGH',
        highlight: 'EDUCATION & INNOVATION',
        description: 'Over 15 years of experience across 6 countries, helping entrepreneurs achieve extraordinary results through multilingual education, property management, and strategic marketing.',
        cta: 'LEARN MORE'
      },
      services: {
        title: 'WHAT I DO',
        items: [
          { title: 'EDUCATION & COACHING', desc: 'Transformative learning in 4 languages across Europe.' },
          { title: 'PROPERTY MANAGEMENT', desc: '250+ properties, €150K+ revenue, Top 3 Airbnb host.' },
          { title: 'MULTILINGUAL MARKETING', desc: 'SEO and digital strategies across European markets.' }
        ]
      },
      journey: {
        title: 'THE JOURNEY',
        subtitle: 'A Life Across Six Countries',
        countries: [
          {
            flag: '🇮🇹',
            name: 'ITALY',
            years: '1978-1996, 2009-2010',
            title: 'The Roots',
            desc: 'Born in Abbiategrasso. Family, first loves, music. Founded Mondelio.',
            image: '/images/childhood/100_0349.JPG'
          },
          {
            flag: '🇺🇸',
            name: 'AMERICA',
            years: '1996-1997',
            title: 'Freedom & Discovery',
            desc: 'First solo trip at 19. Pennsylvania summer camp. Learning independence.',
            image: '/images/america/1735907852443-2556443e-90ef-4b68-98f5-1bef9534d46c_.jpg'
          },
          {
            flag: '🇬🇧',
            name: 'ENGLAND',
            years: '1998-2004, 2006',
            title: 'Work & Multiculturalism',
            desc: 'London. First jobs, English school, international friendships.',
            image: '/images/high_school/1735909757179-d74691b0-4e2d-4f0b-9c43-fdb1e045a665_.jpg'
          },
          {
            flag: '🇫🇷',
            name: 'FRANCE',
            years: '2004-2006',
            title: 'Love & University',
            desc: 'Grenoble. Erasmus. Learning that love is letting go free.',
            image: '/images/university/grenoble.jpg'
          },
          {
            flag: '🇮🇪',
            name: 'IRELAND',
            years: '2006-2007',
            title: 'Rebirth & Resilience',
            desc: 'Dublin. Pubs, rain, music. Finding strength in starting over.',
            image: '/images/modern/IMG_20230917_191400957_HDR-EDIT.jpg'
          },
          {
            flag: '🇳🇴',
            name: 'NORWAY',
            years: '2010-Today',
            title: 'The True Home',
            desc: 'Oslo, Ringerike. Giulia born 2014. Finding freedom to be myself.',
            image: '/images/modern/IMG_20250706_154109459_HDR_PORTRAIT.jpg'
          }
        ]
      },
      portfolio: {
        title: 'PROJECTS & RESULTS',
        items: [
          { title: 'PROPERTY PORTFOLIO', image: portfolioImg1 },
          { title: 'EDUCATION PROGRAMS', image: portfolioImg2 },
          { title: 'MARKETING CAMPAIGNS', image: portfolioImg3 },
          { title: 'SPEAKING ENGAGEMENTS', image: portfolioImg4 }
        ]
      },
      timeline: {
        title: 'PROFESSIONAL TIMELINE',
        items: [
          { year: '1978', title: 'BORN', location: 'Abbiategrasso, Italy', desc: 'Born to a multicultural family.', image: timelineImg1 },
          { year: '2008', title: 'FOUNDED MONDOSOL', location: 'Italy & Norway', desc: 'Language school and cultural organization.', image: timelineImg2 },
          { year: '2014', title: 'PROPERTY MANAGEMENT', location: 'Italy & Norway', desc: 'Launched property management company.', image: timelineImg3 },
          { year: '2019', title: 'SPEAKER', location: 'London', desc: 'First speaking engagement in London.' }
        ]
      },
      news: {
        title: 'NEWS & STORIES',
        items: [
          { title: 'Scaling Property Management Across Europe', category: 'BUSINESS', date: '2025', desc: 'How I built a €150K+ property portfolio managing 250+ properties.', image: portfolioImg1, link: 'https://mondosol.com/short-term-let-property-management/' },
          { title: 'The Power of Multilingual Marketing', category: 'MARKETING', date: '2024', desc: 'Strategies for reaching European markets in their native languages.', image: portfolioImg2, link: 'https://mondosol.com/multilingual-content-metrics/' },
          { title: 'Education as a Business Growth Tool', category: 'EDUCATION', date: '2024', desc: 'Why investing in team education drives extraordinary results.', image: portfolioImg3, link: 'https://mondosol.com/language-coaching-testimonial/' }
        ]
      },
      books: {
        title: 'BOOKS',
        subtitle: 'Sharing knowledge through writing',
        items: [
          { title: 'Imagine Your Dream: How to Reach The Top on The Internet', desc: 'A comprehensive guide to online marketing and digital success.', status: 'AVAILABLE NOW' },
          { title: 'Imagine Your Dream: Live Your Dream', desc: 'Personal development and goal-setting strategies for success.', status: 'AVAILABLE NOW' },
          { title: 'Sei Paesi, Una Storia', desc: 'A heartfelt multicultural memoir exploring identity, family legacy, and belonging across six countries.', status: 'COMING SOON' }
        ],
        cta: 'VIEW ALL BOOKS'
      },
      cta: {
        title: "LET'S CREATE SOMETHING EXTRAORDINARY",
        button: 'GET IN TOUCH'
      }
    },
    it: {
      hero: {
        subtitle: 'IMPRENDITORE • SPEAKER • EDUCATORE • AUTORE',
        tagline: '6 Paesi • 1 Storia • 47 Anni',
        scroll: 'SCORRI'
      },
      about: {
        title: 'TRASFORMARE LE AZIENDE ATTRAVERSO',
        highlight: 'EDUCAZIONE & INNOVAZIONE',
        description: 'Oltre 15 anni di esperienza in 6 paesi, aiutando imprenditori a raggiungere risultati straordinari attraverso educazione multilingue, gestione immobiliare e marketing strategico.',
        cta: 'SCOPRI DI PIÙ'
      },
      services: {
        title: 'COSA FACCIO',
        items: [
          { title: 'EDUCAZIONE & COACHING', desc: 'Apprendimento trasformativo in 4 lingue in Europa.' },
          { title: 'GESTIONE IMMOBILIARE', desc: '250+ proprietà, €150K+ fatturato, Top 3 host Airbnb.' },
          { title: 'MARKETING MULTILINGUE', desc: 'SEO e strategie digitali nei mercati europei.' }
        ]
      },
      journey: {
        title: 'IL VIAGGIO',
        subtitle: 'Una Vita Attraverso Sei Paesi',
        countries: [
          {
            flag: '🇮🇹',
            name: 'ITALIA',
            years: '1978-1996, 2009-2010',
            title: 'Le Radici',
            desc: 'Nato ad Abbiategrasso. Famiglia, primi amori, musica. Fondato Mondelio.',
            image: '/images/childhood/100_0349.JPG'
          },
          {
            flag: '🇺🇸',
            name: 'AMERICA',
            years: '1996-1997',
            title: 'Libertà e Scoperta',
            desc: 'Primo viaggio da solo a 19 anni. Campo estivo Pennsylvania.',
            image: '/images/america/1735907852443-2556443e-90ef-4b68-98f5-1bef9534d46c_.jpg'
          },
          {
            flag: '🇬🇧',
            name: 'INGHILTERRA',
            years: '1998-2004, 2006',
            title: 'Lavoro e Multiculturalismo',
            desc: 'Londra. Primi lavori, scuola di inglese, amicizie internazionali.',
            image: '/images/high_school/1735909757179-d74691b0-4e2d-4f0b-9c43-fdb1e045a665_.jpg'
          },
          {
            flag: '🇫🇷',
            name: 'FRANCIA',
            years: '2004-2006',
            title: 'Amore e Università',
            desc: 'Grenoble. Erasmus. Imparare che amare è lasciare liberi.',
            image: '/images/university/grenoble.jpg'
          },
          {
            flag: '🇮🇪',
            name: 'IRLANDA',
            years: '2006-2007',
            title: 'Rinascita e Resilienza',
            desc: 'Dublino. Pub, pioggia, musica. Trovare forza nel ricominciare.',
            image: '/images/modern/IMG_20230917_191400957_HDR-EDIT.jpg'
          },
          {
            flag: '🇳🇴',
            name: 'NORVEGIA',
            years: '2010-Oggi',
            title: 'La Vera Casa',
            desc: 'Oslo, Ringerike. Giulia nata 2014. Trovare libertà di essere me stesso.',
            image: '/images/modern/IMG_20250706_154109459_HDR_PORTRAIT.jpg'
          }
        ]
      },
      portfolio: {
        title: 'PROGETTI & RISULTATI',
        items: [
          { title: 'PORTFOLIO IMMOBILIARE', image: portfolioImg1 },
          { title: 'PROGRAMMI EDUCATIVI', image: portfolioImg2 },
          { title: 'CAMPAGNE MARKETING', image: portfolioImg3 },
          { title: 'CONFERENZE', image: portfolioImg4 }
        ]
      },
      timeline: {
        title: 'TIMELINE PROFESSIONALE',
        items: [
          { year: '1978', title: 'NATO', location: 'Abbiategrasso, Italia', desc: 'Nato in una famiglia multiculturale.', image: timelineImg1 },
          { year: '2008', title: 'FONDATO MONDOSOL', location: 'Italia & Norvegia', desc: 'Scuola di lingue e organizzazione culturale.', image: timelineImg2 },
          { year: '2014', title: 'GESTIONE IMMOBILIARE', location: 'Italia & Norvegia', desc: 'Lanciata azienda di gestione immobiliare.', image: timelineImg3 },
          { year: '2019', title: 'SPEAKER', location: 'Londra', desc: 'Primo intervento pubblico a Londra.' }
        ]
      },
      news: {
        title: 'NEWS & STORIE',
        items: [
          { title: 'Scalare la Gestione Immobiliare in Europa', category: 'BUSINESS', date: '2025', desc: 'Come ho costruito un portfolio di €150K+ gestendo 250+ proprietà.', image: portfolioImg1, link: 'https://mondosol.com/short-term-let-property-management/' },
          { title: 'Il Potere del Marketing Multilingue', category: 'MARKETING', date: '2024', desc: 'Strategie per raggiungere i mercati europei nelle loro lingue native.', image: portfolioImg2, link: 'https://mondosol.com/multilingual-content-metrics/' },
          { title: "L'Educazione come Strumento di Crescita Aziendale", category: 'EDUCAZIONE', date: '2024', desc: "Perché investire nell'educazione del team porta risultati straordinari.", image: portfolioImg3, link: 'https://mondosol.com/language-coaching-testimonial/' }
        ]
      },
      books: {
        title: 'LIBRI',
        subtitle: 'Condividere conoscenza attraverso la scrittura',
        items: [
          { title: 'Imagine Your Dream: How to Reach The Top on The Internet', desc: 'Una guida completa al marketing online e al successo digitale.', status: 'DISPONIBILE ORA' },
          { title: 'Imagine Your Dream: Live Your Dream', desc: 'Strategie di sviluppo personale e definizione degli obiettivi per il successo.', status: 'DISPONIBILE ORA' },
          { title: 'Sei Paesi, Una Storia', desc: 'Un memoir multiculturale che esplora identità, eredità familiare e appartenenza attraverso sei paesi.', status: 'IN ARRIVO' }
        ],
        cta: 'VEDI TUTTI I LIBRI'
      },
      cta: {
        title: 'CREIAMO QUALCOSA DI STRAORDINARIO',
        button: 'CONTATTAMI'
      }
    },
    no: {
      hero: {
        subtitle: 'ENTREPRENØR • FOREDRAGSHOLDER • UTDANNER • FORFATTER',
        tagline: '6 Land • 1 Historie • 47 År',
        scroll: 'RULL'
      },
      about: {
        title: 'TRANSFORMERE BEDRIFTER GJENNOM',
        highlight: 'UTDANNING & INNOVASJON',
        description: 'Over 15 års erfaring på tvers av 6 land, hjelper entreprenører å oppnå ekstraordinære resultater gjennom flerspråklig utdanning, eiendomsforvaltning og strategisk markedsføring.',
        cta: 'LÆR MER'
      },
      services: {
        title: 'HVA JEG GJØR',
        items: [
          { title: 'UTDANNING & COACHING', desc: 'Transformativ læring på 4 språk i Europa.' },
          { title: 'EIENDOMSFORVALTNING', desc: '250+ eiendommer, €150K+ inntekt, Topp 3 Airbnb vert.' },
          { title: 'FLERSPRÅKLIG MARKEDSFØRING', desc: 'SEO og digitale strategier i europeiske markeder.' }
        ]
      },
      journey: {
        title: 'REISEN',
        subtitle: 'Et Liv På Tvers av Seks Land',
        countries: [
          {
            flag: '🇮🇹',
            name: 'ITALIA',
            years: '1978-1996, 2009-2010',
            title: 'Røttene',
            desc: 'Født i Abbiategrasso. Familie, første kjærlighet, musikk. Grunnla Mondelio.',
            image: '/images/childhood/100_0349.JPG'
          },
          {
            flag: '🇺🇸',
            name: 'AMERIKA',
            years: '1996-1997',
            title: 'Frihet og Oppdagelse',
            desc: 'Første soloreise som 19-åring. Pennsylvania sommerleir.',
            image: '/images/america/1735907852443-2556443e-90ef-4b68-98f5-1bef9534d46c_.jpg'
          },
          {
            flag: '🇬🇧',
            name: 'ENGLAND',
            years: '1998-2004, 2006',
            title: 'Arbeid og Multikulturalisme',
            desc: 'London. Første jobber, engelskskole, internasjonale vennskap.',
            image: '/images/high_school/1735909757179-d74691b0-4e2d-4f0b-9c43-fdb1e045a665_.jpg'
          },
          {
            flag: '🇫🇷',
            name: 'FRANKRIKE',
            years: '2004-2006',
            title: 'Kjærlighet og Universitet',
            desc: 'Grenoble. Erasmus. Lære at å elske er å slippe fri.',
            image: '/images/university/grenoble.jpg'
          },
          {
            flag: '🇮🇪',
            name: 'IRLAND',
            years: '2006-2007',
            title: 'Gjenfødelse og Motstandskraft',
            desc: 'Dublin. Puber, regn, musikk. Finne styrke i å starte på nytt.',
            image: '/images/modern/IMG_20230917_191400957_HDR-EDIT.jpg'
          },
          {
            flag: '🇳🇴',
            name: 'NORGE',
            years: '2010-I dag',
            title: 'Det Sanne Hjem',
            desc: 'Oslo, Ringerike. Giulia født 2014. Finne frihet til å være meg selv.',
            image: '/images/modern/IMG_20250706_154109459_HDR_PORTRAIT.jpg'
          }
        ]
      },
      portfolio: {
        title: 'PROSJEKTER & RESULTATER',
        items: [
          { title: 'EIENDOMSPORTEFOLIO', image: portfolioImg1 },
          { title: 'UTDANNINGSPROGRAMMER', image: portfolioImg2 },
          { title: 'MARKEDSFØRINGSKAMPANJER', image: portfolioImg3 },
          { title: 'FOREDRAG', image: portfolioImg4 }
        ]
      },
      timeline: {
        title: 'PROFESJONELL TIDSLINJE',
        items: [
          { year: '1978', title: 'FØDT', location: 'Abbiategrasso, Italia', desc: 'Født i en multikulturell familie.', image: timelineImg1 },
          { year: '2008', title: 'GRUNNLA MONDOSOL', location: 'Italia & Norge', desc: 'Språkskole og kulturell organisasjon.', image: timelineImg2 },
          { year: '2014', title: 'EIENDOMSFORVALTNING', location: 'Italia & Norge', desc: 'Lanserte eiendomsforvaltningsselskap.', image: timelineImg3 },
          { year: '2019', title: 'FOREDRAGSHOLDER', location: 'London', desc: 'Første foredrag i London.' }
        ]
      },
      news: {
        title: 'NYHETER & HISTORIER',
        items: [
          { title: 'Skalere Eiendomsforvaltning På Tvers av Europa', category: 'VIRKSOMHET', date: '2025', desc: 'Hvordan jeg bygde en €150K+ eiendomsportefolio som forvalter 250+ eiendommer.', image: portfolioImg1, link: 'https://mondosol.com/short-term-let-property-management/' },
          { title: 'Kraften i Flerspråklig Markedsføring', category: 'MARKEDSFØRING', date: '2024', desc: 'Strategier for å nå europeiske markeder på deres morsmål.', image: portfolioImg2, link: 'https://mondosol.com/multilingual-content-metrics/' },
          { title: 'Utdanning som Verktøy for Bedriftsvekst', category: 'UTDANNING', date: '2024', desc: 'Hvorfor investering i teamutdanning gir ekstraordinære resultater.', image: portfolioImg3, link: 'https://mondosol.com/language-coaching-testimonial/' }
        ]
      },
      books: {
        title: 'BØKER',
        subtitle: 'Dele kunnskap gjennom skriving',
        items: [
          { title: 'Imagine Your Dream: How to Reach The Top on The Internet', desc: 'En omfattende guide til online markedsføring og digital suksess.', status: 'TILGJENGELIG NÅ' },
          { title: 'Imagine Your Dream: Live Your Dream', desc: 'Personlig utvikling og målsettingsstrategier for suksess.', status: 'TILGJENGELIG NÅ' },
          { title: 'Sei Paesi, Una Storia', desc: 'En hjertelig multikulturell memoir som utforsker identitet, familiearv og tilhørighet på tvers av seks land.', status: 'KOMMER SNART' }
        ],
        cta: 'SE ALLE BØKER'
      },
      cta: {
        title: 'LA OSS SKAPE NOE EKSTRAORDINÆRT',
        button: 'KONTAKT MEG'
      }
    }
  }

  const t = content[language] || content.en

  return (
    <div className="min-h-screen bg-black text-white">
      {/* 1. HERO SECTION */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Elio Mondello Anzà" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.h2
            key={currentNameIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="text-[15vw] md:text-[20vw] font-black text-yellow-400 leading-none opacity-90"
            style={{ 
              fontFamily: 'Impact, Arial Black, sans-serif',
              letterSpacing: '0.1em'
            }}
          >
            {names[currentNameIndex]}
          </motion.h2>
        </div>

        <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 text-center z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <p className="text-lg md:text-xl font-bold text-white mb-2 tracking-widest">
              {t.hero.subtitle}
            </p>
            <p className="text-sm md:text-base text-yellow-400">
              {t.hero.tagline}
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 z-20">
          <span className="text-sm tracking-widest text-white">{t.hero.scroll}</span>
          <ChevronDown className="animate-bounce text-yellow-400" />
        </motion.div>
      </section>

      {/* 2. ABOUT SECTION */}
      <section className="py-32 bg-black border-t border-yellow-400/20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-4">{t.about.title}</h2>
            <h3 className="text-6xl md:text-8xl font-black text-yellow-400 mb-8">{t.about.highlight}</h3>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">{t.about.description}</p>
            <Link to="/about">
              <Button variant="outline" size="lg" className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black font-bold text-lg px-8 py-6">
                {t.about.cta}
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 3. SERVICES SECTION */}
      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl font-black text-center mb-20 text-yellow-400"
          >
            {t.services.title}
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {t.services.items.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 border-2 border-white/10 hover:border-yellow-400 transition-all duration-300 rounded-lg group"
              >
                <h3 className="text-3xl md:text-4xl font-bold mb-4 group-hover:text-yellow-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-lg text-gray-400 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. THE JOURNEY SECTION */}
      <section className="py-32 bg-black border-t border-yellow-400/20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-6xl md:text-8xl font-black text-yellow-400 mb-4">
              {t.journey.title}
            </h2>
            <p className="text-2xl md:text-3xl text-gray-300">
              {t.journey.subtitle}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.journey.countries.map((country, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl border-2 border-white/10 hover:border-yellow-400 transition-all duration-300"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={country.image}
                    alt={country.name}
                    className="w-full h-full object-cover md:grayscale md:group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex flex-col justify-end p-6">
                  <div className="text-6xl mb-3">{country.flag}</div>
                  <h3 className="text-3xl font-black text-yellow-400 mb-1">{country.name}</h3>
                  <p className="text-sm text-gray-300 mb-2">{country.years}</p>
                  <p className="text-xl font-bold mb-2">{country.title}</p>
                  <p className="text-sm text-gray-400 leading-relaxed">{country.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PORTFOLIO SECTION */}
      <section className="py-32 bg-black border-t border-yellow-400/20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl font-black text-center mb-20 text-yellow-400"
          >
            {t.portfolio.title}
          </motion.h2>

          <div className="grid grid-cols-2 gap-4">
            {t.portfolio.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover md:grayscale md:group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all duration-300 flex items-end p-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-white">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. TIMELINE SECTION */}
      <section className="py-32 bg-black border-t border-yellow-400/20">
        <div className="max-w-5xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl font-black text-center mb-20 text-yellow-400"
          >
            {t.timeline.title}
          </motion.h2>

          <div className="space-y-24">
            {t.timeline.items.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {milestone.image && (
                  <div className="mb-8 rounded-2xl overflow-hidden">
                    <img src={milestone.image} alt={milestone.title} className="w-full h-96 object-cover" />
                  </div>
                )}
                <div className="text-center">
                  <div className="text-8xl md:text-9xl font-black text-yellow-400 mb-4">{milestone.year}</div>
                  <h3 className="text-4xl md:text-5xl font-bold mb-2">{milestone.title}</h3>
                  <p className="text-xl text-yellow-400 mb-4">📍 {milestone.location}</p>
                  <p className="text-lg text-gray-400">{milestone.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. NEWS SECTION */}
      <section className="py-32 bg-black border-t border-yellow-400/20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl font-black text-yellow-400 mb-20 text-center"
          >
            {t.news.title}
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {t.news.items.map((article, index) => (
              <a 
                key={index}
                href={article.link || 'https://mondosol.com'}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer"
                >
                <div className="aspect-[4/5] rounded-lg overflow-hidden mb-6">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover md:grayscale md:group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <span className="px-3 py-1 bg-yellow-400 text-black font-bold rounded">{article.category}</span>
                    <span className="text-gray-400">{article.date}</span>
                  </div>
                  <h3 className="text-2xl font-bold group-hover:text-yellow-400 transition-colors">{article.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{article.desc}</p>
                </div>
              </motion.div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 8. BOOKS SECTION */}
      <section className="py-32 bg-black border-t border-yellow-400/20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-6xl md:text-8xl font-black text-yellow-400 mb-4">{t.books.title}</h2>
            <p className="text-2xl text-gray-400">{t.books.subtitle}</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {t.books.items.map((book, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 border-2 border-white/10 hover:border-yellow-400 transition-all duration-300 rounded-lg"
              >
                <h3 className="text-2xl font-bold mb-4">{book.title}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">{book.desc}</p>
                <span className="inline-block px-4 py-2 bg-yellow-400 text-black font-bold rounded">{book.status}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link to="/books">
              <Button variant="outline" size="lg" className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black font-bold text-lg px-8 py-6">
                {t.books.cta}
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 9. FINAL CTA SECTION */}
      <section className="py-32 bg-yellow-400 text-black">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl font-black mb-12 leading-tight"
          >
            {t.cta.title}
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Link to="/contact">
              <Button size="lg" className="bg-black text-white hover:bg-gray-900 font-bold text-xl px-12 py-8">
                {t.cta.button}
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default HomeIntegrated
