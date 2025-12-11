import { Link } from 'react-router-dom'
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

const Home = ({ language = 'en' }) => {
  const content = {
    en: {
      hero: {
        name: 'ELIO',
        subtitle: 'MONDELLO ANZÀ',
        roles: ['ENTREPRENEUR', 'SPEAKER', 'EDUCATOR', 'AUTHOR'],
        description: 'Helping businesses scale across Europe.',
        cta: 'DISCOVER MY WORK',
        scroll: 'SCROLL'
      },
      about: {
        title: 'TRANSFORMING BUSINESSES THROUGH',
        highlight: 'EDUCATION & INNOVATION',
        description: 'Over 15 years of experience across 6 countries, helping entrepreneurs achieve extraordinary results.',
        cta: 'LEARN MORE'
      },
      services: {
        title: 'WHAT I DO',
        items: [
          { title: 'EDUCATION & COACHING', desc: 'Transformative learning in 4 languages.' },
          { title: 'PROPERTY MANAGEMENT', desc: '250+ properties, €150K+ revenue, Top 3 Airbnb host.' },
          { title: 'MULTILINGUAL MARKETING', desc: 'SEO and digital strategies across Europe.' }
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
        title: 'FROM HUMBLE BEGINNINGS',
        items: [
          { year: '1978', title: 'BORN', location: 'Abbiategrasso, Italy', desc: 'Born to a multicultural family.', image: timelineImg1 },
          { year: '2011', title: 'FIRST BUSINESS', location: 'Italy', desc: 'Started first entrepreneurial venture.', image: timelineImg2 },
          { year: '2014', title: 'PROPERTY MANAGEMENT', location: 'Italy & Norway', desc: 'Launched property management company.', image: timelineImg3 },
          { year: '2019', title: 'SPEAKER', location: 'London', desc: 'First speaking engagement in London.' }
        ]
      },
      news: {
        title: 'NEWS & STORIES',
        items: [
          { title: 'Scaling Property Management Across Europe', category: 'BUSINESS', date: '2025', desc: 'How I built a €150K+ property portfolio managing 250+ properties.', image: portfolioImg1 },
          { title: 'The Power of Multilingual Marketing', category: 'MARKETING', date: '2024', desc: 'Strategies for reaching European markets in their native languages.', image: portfolioImg2 },
          { title: 'Education as a Business Growth Tool', category: 'EDUCATION', date: '2024', desc: 'Why investing in team education drives extraordinary results.', image: portfolioImg3 }
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
        name: 'ELIO',
        subtitle: 'MONDELLO ANZÀ',
        roles: ['IMPRENDITORE', 'SPEAKER', 'EDUCATORE', 'AUTORE'],
        description: 'Aiuto le aziende a crescere in Europa.',
        cta: 'SCOPRI IL MIO LAVORO',
        scroll: 'SCORRI'
      },
      about: {
        title: 'TRASFORMARE LE AZIENDE ATTRAVERSO',
        highlight: 'EDUCAZIONE & INNOVAZIONE',
        description: 'Oltre 15 anni di esperienza in 6 paesi, aiutando imprenditori a raggiungere risultati straordinari.',
        cta: 'SCOPRI DI PIÙ'
      },
      services: {
        title: 'COSA FACCIO',
        items: [
          { title: 'EDUCAZIONE & COACHING', desc: 'Apprendimento trasformativo in 4 lingue.' },
          { title: 'GESTIONE IMMOBILIARE', desc: '250+ proprietà, €150K+ fatturato, Top 3 host Airbnb.' },
          { title: 'MARKETING MULTILINGUE', desc: 'SEO e strategie digitali in Europa.' }
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
        title: 'DALLE UMILI ORIGINI',
        items: [
          { year: '1978', title: 'NATO', location: 'Abbiategrasso, Italia', desc: 'Nato in una famiglia multiculturale.', image: timelineImg1 },
          { year: '2011', title: 'PRIMA ATTIVITÀ', location: 'Italia', desc: 'Avviata prima impresa imprenditoriale.', image: timelineImg2 },
          { year: '2014', title: 'GESTIONE IMMOBILIARE', location: 'Italia & Norvegia', desc: 'Lanciata azienda di gestione immobiliare.', image: timelineImg3 },
          { year: '2019', title: 'SPEAKER', location: 'Londra', desc: 'Primo intervento pubblico a Londra.' }
        ]
      },
      news: {
        title: 'NEWS & STORIE',
        items: [
          { title: 'Scalare la Gestione Immobiliare in Europa', category: 'BUSINESS', date: '2025', desc: 'Come ho costruito un portfolio di €150K+ gestendo 250+ proprietà.', image: portfolioImg1 },
          { title: 'Il Potere del Marketing Multilingue', category: 'MARKETING', date: '2024', desc: 'Strategie per raggiungere i mercati europei nelle loro lingue native.', image: portfolioImg2 },
          { title: "L'Educazione come Strumento di Crescita Aziendale", category: 'EDUCAZIONE', date: '2024', desc: 'Perché investire nell\'educazione del team porta risultati straordinari.', image: portfolioImg3 }
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
        name: 'ELIO',
        subtitle: 'MONDELLO ANZÀ',
        roles: ['ENTREPRENØR', 'FOREDRAGSHOLDER', 'UTDANNER', 'FORFATTER'],
        description: 'Hjelper bedrifter å vokse i Europa.',
        cta: 'OPPDAG MITT ARBEID',
        scroll: 'RULL'
      },
      about: {
        title: 'TRANSFORMERE BEDRIFTER GJENNOM',
        highlight: 'UTDANNING & INNOVASJON',
        description: 'Over 15 års erfaring på tvers av 6 land, hjelper entreprenører å oppnå ekstraordinære resultater.',
        cta: 'LÆR MER'
      },
      services: {
        title: 'HVA JEG GJØR',
        items: [
          { title: 'UTDANNING & COACHING', desc: 'Transformativ læring på 4 språk.' },
          { title: 'EIENDOMSFORVALTNING', desc: '250+ eiendommer, €150K+ inntekt, Topp 3 Airbnb vert.' },
          { title: 'FLERSPRÅKLIG MARKEDSFØRING', desc: 'SEO og digitale strategier i Europa.' }
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
        title: 'FRA ØDMYKE BEGYNNELSER',
        items: [
          { year: '1978', title: 'FØDT', location: 'Abbiategrasso, Italia', desc: 'Født i en multikulturell familie.', image: timelineImg1 },
          { year: '2011', title: 'FØRSTE VIRKSOMHET', location: 'Italia', desc: 'Startet første entreprenørielle satsing.', image: timelineImg2 },
          { year: '2014', title: 'EIENDOMSFORVALTNING', location: 'Italia & Norge', desc: 'Lanserte eiendomsforvaltningsselskap.', image: timelineImg3 },
          { year: '2019', title: 'FOREDRAGSHOLDER', location: 'London', desc: 'Første foredrag i London.' }
        ]
      },
      news: {
        title: 'NYHETER & HISTORIER',
        items: [
          { title: 'Skalere Eiendomsforvaltning På Tvers av Europa', category: 'VIRKSOMHET', date: '2025', desc: 'Hvordan jeg bygde en €150K+ eiendomsportefolio som forvalter 250+ eiendommer.', image: portfolioImg1 },
          { title: 'Kraften i Flerspråklig Markedsføring', category: 'MARKEDSFØRING', date: '2024', desc: 'Strategier for å nå europeiske markeder på deres mordsmål.', image: portfolioImg2 },
          { title: 'Utdanning som Verktøy for Bedriftsvekst', category: 'UTDANNING', date: '2024', desc: 'Hvorfor investering i teamutdanning gir ekstraordinære resultater.', image: portfolioImg3 }
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
      {/* 1. HERO SECTION - Full Screen Minimal */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Full Screen Background Image */}
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Elio Mondello Anzà" 
            className="w-full h-full object-cover"
          />
          {/* Dark overlay for better text visibility */}
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Center: Large Name Overlay with Animation */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              y: [0, -10, 0]
            }}
            transition={{ 
              opacity: { duration: 1, delay: 0.3 },
              scale: { duration: 1, delay: 0.3 },
              y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
            }}
            className="text-[15vw] md:text-[20vw] font-black text-yellow-400 leading-none opacity-90"
            style={{ 
              fontFamily: 'Impact, Arial Black, sans-serif',
              letterSpacing: '0.1em'
            }}
          >
            {t.hero.name}
          </motion.h2>
        </div>

        {/* Bottom Center: Scroll Indicator */}
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

      {/* 4. PORTFOLIO SECTION */}
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

      {/* 5. TIMELINE SECTION */}
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

      {/* 6. NEWS SECTION */}
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
              <motion.div
                key={index}
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
            ))}
          </div>
        </div>
      </section>

      {/* 7. BOOKS SECTION */}
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

      {/* 8. FINAL CTA SECTION */}
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

export default Home
