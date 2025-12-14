import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { Mic, Users, Globe, Award, Calendar, MessageSquare } from 'lucide-react'

// Import images
import speakingImg1 from '../assets/IMG_20250706_154109459_HDR_PORTRAIT.jpg'
import speakingImg2 from '../assets/IMG_20250706_154203787_HDR_PORTRAIT.jpg'
import speakingImg3 from '../assets/IMG_20250706_154257593_HDR_PORTRAIT.jpg'

const Speaking = ({ language = 'en' }) => {
  const content = {
    en: {
      hero: {
        title: 'SPEAKING',
        subtitle: 'INSPIRING AUDIENCES ACROSS EUROPE',
        description: 'International speaker sharing insights on entrepreneurship, multilingual business, property management, and cultural integration.'
      },
      intro: {
        title: 'TRANSFORMING AUDIENCES',
        subtitle: 'Through Education & Experience',
        text: 'With over 15 years of international business experience across 6 countries, I bring unique perspectives on entrepreneurship, multilingual marketing, property management, and cultural integration. My speaking engagements combine practical strategies with inspiring personal stories of building businesses across European markets.'
      },
      topics: {
        title: 'SPEAKING TOPICS',
        items: [
          {
            icon: Globe,
            title: 'Multilingual Business Growth',
            desc: 'How to scale your business across European markets using multilingual strategies, cultural adaptation, and localized marketing.'
          },
          {
            icon: Users,
            title: 'Property Management Excellence',
            desc: 'Building a successful property management business: from €0 to €150K+ revenue, managing 250+ properties, becoming Top 3 Airbnb host.'
          },
          {
            icon: MessageSquare,
            title: 'Education as Business Strategy',
            desc: 'Why investing in language education and cultural training drives extraordinary business results and team performance.'
          },
          {
            icon: Award,
            title: 'Entrepreneurship Across Borders',
            desc: 'Lessons from building businesses in Italy, Norway, and across Europe. Navigating regulations, cultures, and opportunities.'
          },
          {
            icon: Calendar,
            title: 'From Immigrant to Entrepreneur',
            desc: 'Personal journey of adaptation, resilience, and success. Finding opportunities in new countries and building a life abroad.'
          },
          {
            icon: Mic,
            title: 'Digital Marketing in 4 Languages',
            desc: 'SEO, content marketing, and social media strategies for reaching international audiences in their native languages.'
          }
        ]
      },
      experience: {
        title: 'SPEAKING EXPERIENCE',
        events: [
          {
            year: '2019',
            title: 'International Business Conference',
            location: 'London, UK',
            desc: 'Keynote speaker on multilingual marketing strategies for European markets.',
            attendees: '200+'
          },
          {
            year: '2020-2024',
            title: 'Business Workshops & Seminars',
            location: 'Italy & Norway',
            desc: 'Multiple speaking engagements on property management, Airbnb optimization, and entrepreneurship.',
            attendees: '500+'
          },
          {
            year: '2024',
            title: 'Education & Integration Events',
            location: 'Norway',
            desc: 'Speaking on cultural integration, language learning, and immigrant entrepreneurship.',
            attendees: '150+'
          }
        ]
      },
      languages: {
        title: 'SPEAKING LANGUAGES',
        items: [
          { lang: 'English', level: 'Native/Fluent', flag: '🇬🇧' },
          { lang: 'Italian', level: 'Native/Fluent', flag: '🇮🇹' },
          { lang: 'Norwegian', level: 'Professional', flag: '🇳🇴' },
          { lang: 'French', level: 'Professional', flag: '🇫🇷' }
        ]
      },
      formats: {
        title: 'SPEAKING FORMATS',
        items: [
          { title: 'Keynote Speeches', desc: '45-60 minutes', icon: '🎤' },
          { title: 'Workshops', desc: '2-4 hours', icon: '👥' },
          { title: 'Panel Discussions', desc: '30-45 minutes', icon: '💬' },
          { title: 'Webinars', desc: '60-90 minutes', icon: '💻' },
          { title: 'Corporate Training', desc: 'Half/Full day', icon: '🏢' },
          { title: 'Podcast Interviews', desc: '30-60 minutes', icon: '🎙️' }
        ]
      },
      testimonials: {
        title: 'WHAT AUDIENCES SAY',
        items: [
          {
            quote: 'Elio\'s insights on multilingual marketing completely transformed our European expansion strategy.',
            author: 'Business Owner',
            location: 'London, UK'
          },
          {
            quote: 'Practical, actionable advice delivered with passion and authenticity. Highly recommended speaker.',
            author: 'Event Organizer',
            location: 'Oslo, Norway'
          },
          {
            quote: 'His property management strategies helped us scale from 10 to 50+ properties in one year.',
            author: 'Property Manager',
            location: 'Milan, Italy'
          }
        ]
      },
      cta: {
        title: 'BOOK ELIO FOR YOUR EVENT',
        subtitle: 'Available for conferences, workshops, corporate events, and webinars across Europe',
        button: 'GET IN TOUCH'
      }
    },
    it: {
      hero: {
        title: 'SPEAKING',
        subtitle: 'ISPIRARE IL PUBBLICO IN EUROPA',
        description: 'Speaker internazionale che condivide intuizioni su imprenditoria, business multilingue, gestione immobiliare e integrazione culturale.'
      },
      intro: {
        title: 'TRASFORMARE IL PUBBLICO',
        subtitle: 'Attraverso Educazione ed Esperienza',
        text: 'Con oltre 15 anni di esperienza nel business internazionale in 6 paesi, porto prospettive uniche su imprenditoria, marketing multilingue, gestione immobiliare e integrazione culturale. I miei interventi combinano strategie pratiche con storie personali ispiratrici sulla costruzione di business nei mercati europei.'
      },
      topics: {
        title: 'ARGOMENTI',
        items: [
          {
            icon: Globe,
            title: 'Crescita Business Multilingue',
            desc: 'Come scalare il tuo business nei mercati europei usando strategie multilingue, adattamento culturale e marketing localizzato.'
          },
          {
            icon: Users,
            title: 'Eccellenza nella Gestione Immobiliare',
            desc: 'Costruire un business di gestione immobiliare di successo: da €0 a €150K+ di fatturato, gestendo 250+ proprietà, diventando Top 3 host Airbnb.'
          },
          {
            icon: MessageSquare,
            title: 'Educazione come Strategia Aziendale',
            desc: 'Perché investire nell\'educazione linguistica e nella formazione culturale porta risultati aziendali straordinari e migliora le prestazioni del team.'
          },
          {
            icon: Award,
            title: 'Imprenditoria Oltre i Confini',
            desc: 'Lezioni dalla costruzione di business in Italia, Norvegia e in tutta Europa. Navigare regolamenti, culture e opportunità.'
          },
          {
            icon: Calendar,
            title: 'Da Immigrato a Imprenditore',
            desc: 'Viaggio personale di adattamento, resilienza e successo. Trovare opportunità in nuovi paesi e costruire una vita all\'estero.'
          },
          {
            icon: Mic,
            title: 'Marketing Digitale in 4 Lingue',
            desc: 'SEO, content marketing e strategie social media per raggiungere pubblici internazionali nelle loro lingue native.'
          }
        ]
      },
      experience: {
        title: 'ESPERIENZA SPEAKING',
        events: [
          {
            year: '2019',
            title: 'Conferenza Business Internazionale',
            location: 'Londra, UK',
            desc: 'Keynote speaker su strategie di marketing multilingue per i mercati europei.',
            attendees: '200+'
          },
          {
            year: '2020-2024',
            title: 'Workshop e Seminari Aziendali',
            location: 'Italia & Norvegia',
            desc: 'Molteplici interventi su gestione immobiliare, ottimizzazione Airbnb e imprenditoria.',
            attendees: '500+'
          },
          {
            year: '2024',
            title: 'Eventi Educazione e Integrazione',
            location: 'Norvegia',
            desc: 'Interventi su integrazione culturale, apprendimento linguistico e imprenditoria immigrata.',
            attendees: '150+'
          }
        ]
      },
      languages: {
        title: 'LINGUE',
        items: [
          { lang: 'Inglese', level: 'Madrelingua/Fluente', flag: '🇬🇧' },
          { lang: 'Italiano', level: 'Madrelingua/Fluente', flag: '🇮🇹' },
          { lang: 'Norvegese', level: 'Professionale', flag: '🇳🇴' },
          { lang: 'Francese', level: 'Professionale', flag: '🇫🇷' }
        ]
      },
      formats: {
        title: 'FORMATI',
        items: [
          { title: 'Keynote', desc: '45-60 minuti', icon: '🎤' },
          { title: 'Workshop', desc: '2-4 ore', icon: '👥' },
          { title: 'Panel', desc: '30-45 minuti', icon: '💬' },
          { title: 'Webinar', desc: '60-90 minuti', icon: '💻' },
          { title: 'Formazione Aziendale', desc: 'Mezza/Intera giornata', icon: '🏢' },
          { title: 'Podcast', desc: '30-60 minuti', icon: '🎙️' }
        ]
      },
      testimonials: {
        title: 'COSA DICE IL PUBBLICO',
        items: [
          {
            quote: 'Le intuizioni di Elio sul marketing multilingue hanno completamente trasformato la nostra strategia di espansione europea.',
            author: 'Imprenditore',
            location: 'Londra, UK'
          },
          {
            quote: 'Consigli pratici e attuabili forniti con passione e autenticità. Speaker altamente raccomandato.',
            author: 'Organizzatore Eventi',
            location: 'Oslo, Norvegia'
          },
          {
            quote: 'Le sue strategie di gestione immobiliare ci hanno aiutato a scalare da 10 a 50+ proprietà in un anno.',
            author: 'Property Manager',
            location: 'Milano, Italia'
          }
        ]
      },
      cta: {
        title: 'PRENOTA ELIO PER IL TUO EVENTO',
        subtitle: 'Disponibile per conferenze, workshop, eventi aziendali e webinar in tutta Europa',
        button: 'CONTATTAMI'
      }
    },
    no: {
      hero: {
        title: 'FOREDRAG',
        subtitle: 'INSPIRERE PUBLIKUM I EUROPA',
        description: 'Internasjonal foredragsholder som deler innsikt om entreprenørskap, flerspråklig business, eiendomsforvaltning og kulturell integrasjon.'
      },
      intro: {
        title: 'TRANSFORMERE PUBLIKUM',
        subtitle: 'Gjennom Utdanning og Erfaring',
        text: 'Med over 15 års internasjonal forretningserfaring på tvers av 6 land, bringer jeg unike perspektiver på entreprenørskap, flerspråklig markedsføring, eiendomsforvaltning og kulturell integrasjon. Mine foredrag kombinerer praktiske strategier med inspirerende personlige historier om å bygge virksomheter i europeiske markeder.'
      },
      topics: {
        title: 'FOREDRAGS EMNER',
        items: [
          {
            icon: Globe,
            title: 'Flerspråklig Forretningsvekst',
            desc: 'Hvordan skalere virksomheten din i europeiske markeder ved å bruke flerspråklige strategier, kulturell tilpasning og lokalisert markedsføring.'
          },
          {
            icon: Users,
            title: 'Eiendomsforvaltning Fortreffelighet',
            desc: 'Bygge en vellykket eiendomsforvaltningsvirksomhet: fra €0 til €150K+ inntekt, forvalte 250+ eiendommer, bli Topp 3 Airbnb vert.'
          },
          {
            icon: MessageSquare,
            title: 'Utdanning som Forretningsstrategi',
            desc: 'Hvorfor investering i språkutdanning og kulturell opplæring gir ekstraordinære forretningsresultater og teamytelse.'
          },
          {
            icon: Award,
            title: 'Entreprenørskap På Tvers av Grenser',
            desc: 'Leksjoner fra å bygge virksomheter i Italia, Norge og over hele Europa. Navigere reguleringer, kulturer og muligheter.'
          },
          {
            icon: Calendar,
            title: 'Fra Innvandrer til Entreprenør',
            desc: 'Personlig reise av tilpasning, motstandskraft og suksess. Finne muligheter i nye land og bygge et liv i utlandet.'
          },
          {
            icon: Mic,
            title: 'Digital Markedsføring på 4 Språk',
            desc: 'SEO, innholdsmarkedsføring og sosiale medier strategier for å nå internasjonale publikum på deres morsmål.'
          }
        ]
      },
      experience: {
        title: 'FOREDRAGSERFARING',
        events: [
          {
            year: '2019',
            title: 'Internasjonal Forretningskonferanse',
            location: 'London, UK',
            desc: 'Hovedtaler om flerspråklige markedsføringsstrategier for europeiske markeder.',
            attendees: '200+'
          },
          {
            year: '2020-2024',
            title: 'Forretningsworkshops og Seminarer',
            location: 'Italia & Norge',
            desc: 'Flere foredrag om eiendomsforvaltning, Airbnb-optimalisering og entreprenørskap.',
            attendees: '500+'
          },
          {
            year: '2024',
            title: 'Utdannings- og Integrasjonsarrangementer',
            location: 'Norge',
            desc: 'Foredrag om kulturell integrasjon, språklæring og innvandrerentreprenørskap.',
            attendees: '150+'
          }
        ]
      },
      languages: {
        title: 'FOREDRAGSSPRÅK',
        items: [
          { lang: 'Engelsk', level: 'Morsmål/Flytende', flag: '🇬🇧' },
          { lang: 'Italiensk', level: 'Morsmål/Flytende', flag: '🇮🇹' },
          { lang: 'Norsk', level: 'Profesjonell', flag: '🇳🇴' },
          { lang: 'Fransk', level: 'Profesjonell', flag: '🇫🇷' }
        ]
      },
      formats: {
        title: 'FOREDRAGSFORMATER',
        items: [
          { title: 'Hovedforedrag', desc: '45-60 minutter', icon: '🎤' },
          { title: 'Workshops', desc: '2-4 timer', icon: '👥' },
          { title: 'Paneldiskusjoner', desc: '30-45 minutter', icon: '💬' },
          { title: 'Webinarer', desc: '60-90 minutter', icon: '💻' },
          { title: 'Bedriftsopplæring', desc: 'Halv/Hel dag', icon: '🏢' },
          { title: 'Podcast-intervjuer', desc: '30-60 minutter', icon: '🎙️' }
        ]
      },
      testimonials: {
        title: 'HVA PUBLIKUM SIER',
        items: [
          {
            quote: 'Elios innsikt om flerspråklig markedsføring transformerte fullstendig vår europeiske ekspansjonsstrategi.',
            author: 'Bedriftseier',
            location: 'London, UK'
          },
          {
            quote: 'Praktiske, handlingsrettede råd levert med lidenskap og autentisitet. Sterkt anbefalt foredragsholder.',
            author: 'Arrangør',
            location: 'Oslo, Norge'
          },
          {
            quote: 'Hans eiendomsforvaltningsstrategier hjalp oss å skalere fra 10 til 50+ eiendommer på ett år.',
            author: 'Eiendomsforvalter',
            location: 'Milano, Italia'
          }
        ]
      },
      cta: {
        title: 'BOOK ELIO TIL DITT ARRANGEMENT',
        subtitle: 'Tilgjengelig for konferanser, workshops, bedriftsarrangementer og webinarer i hele Europa',
        button: 'KONTAKT MEG'
      }
    }
  }

  const t = content[language] || content.en

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${speakingImg1})` }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="relative z-10 text-center px-4">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-yellow-400 text-sm tracking-[0.3em] mb-4"
          >
            {t.hero.title}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6"
          >
            ELIO
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-4"
          >
            {t.hero.subtitle}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-base md:text-lg text-gray-400 max-w-3xl mx-auto"
          >
            {t.hero.description}
          </motion.p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-4">{t.intro.title}</h2>
          <p className="text-2xl text-yellow-400 mb-8">{t.intro.subtitle}</p>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
            {t.intro.text}
          </p>
        </motion.div>
      </section>

      {/* Topics Section */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-bold text-center mb-16 text-yellow-400"
        >
          {t.topics.title}
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.topics.items.map((topic, index) => {
            const Icon = topic.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 border-2 border-white/10 hover:border-yellow-400 rounded-lg transition-all duration-300 group"
              >
                <Icon className="w-12 h-12 text-yellow-400 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-3 group-hover:text-yellow-400 transition-colors">
                  {topic.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">{topic.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-bold text-center mb-16 text-yellow-400"
        >
          {t.experience.title}
        </motion.h2>

        <div className="space-y-12">
          {t.experience.events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex gap-8 items-start border-l-4 border-yellow-400 pl-8 py-4"
            >
              <div className="min-w-[100px]">
                <div className="text-4xl font-black text-yellow-400">{event.year}</div>
                <div className="text-sm text-gray-400 mt-2">{event.attendees} attendees</div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
                <p className="text-yellow-400 mb-3">📍 {event.location}</p>
                <p className="text-gray-400 leading-relaxed">{event.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Languages Section */}
      <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-bold text-center mb-16 text-yellow-400"
        >
          {t.languages.title}
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.languages.items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-8 border-2 border-white/10 hover:border-yellow-400 rounded-lg transition-all duration-300"
            >
              <div className="text-6xl mb-4">{item.flag}</div>
              <h3 className="text-2xl font-bold mb-2">{item.lang}</h3>
              <p className="text-gray-400">{item.level}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Formats Section */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-bold text-center mb-16 text-yellow-400"
        >
          {t.formats.title}
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.formats.items.map((format, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="p-6 bg-zinc-900 rounded-lg hover:bg-zinc-800 transition-all duration-300"
            >
              <div className="text-4xl mb-3">{format.icon}</div>
              <h3 className="text-xl font-bold mb-2">{format.title}</h3>
              <p className="text-gray-400">{format.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-bold text-center mb-16 text-yellow-400"
        >
          {t.testimonials.title}
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {t.testimonials.items.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 bg-zinc-900 rounded-lg"
            >
              <p className="text-lg text-gray-300 mb-6 italic leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-white/10 pt-4">
                <p className="font-bold text-yellow-400">{testimonial.author}</p>
                <p className="text-sm text-gray-400">{testimonial.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-yellow-400 text-black">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black mb-6 leading-tight"
          >
            {t.cta.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl mb-12"
          >
            {t.cta.subtitle}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
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

export default Speaking
