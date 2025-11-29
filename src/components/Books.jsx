import { motion } from 'framer-motion'
import { ExternalLink, BookOpen, Bell } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import imagineYourDream from '../assets/imagine-your-dream.jpg'

const Books = ({ language }) => {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)

  const content = {
    en: {
      hero: {
        title: 'BOOKS',
        subtitle: 'PUBLISHED WORKS',
        description: 'Transformative books on personal development, digital marketing, and multicultural identity.'
      },
      published: {
        title: 'AVAILABLE NOW',
        books: [
          {
            title: 'Imagine Your Dream',
            subtitle: 'Live Your Dream - Personal Development',
            description: 'A comprehensive guide to achieving your dreams through goal setting, positive affirmations, and strategic planning. Transform your life with proven methods.',
            category: 'Personal Development',
            link: 'https://www.amazon.com/Imagine-Your-Dream-Agenda-Standard/dp/1519429495',
            image: imagineYourDream
          },
          {
            title: 'Online Media and Video',
            subtitle: 'How to Reach The Top on The Internet',
            description: 'Master the art of video marketing and online media to dominate your niche. Practical strategies for creating compelling content that ranks and converts.',
            category: 'Digital Marketing',
            link: 'https://www.amazon.com/Online-Media-Video-Reach-Internet/dp/1540315371',
            image: null
          }
        ]
      },
      coming: {
        title: 'COMING SOON',
        book: {
          title: 'Sei Paesi, Una Storia',
          subtitle: 'Six Countries, One Story',
          description: 'A powerful multicultural memoir exploring identity, family legacy, and belonging across six countries. A journey through generational patterns, immigration, and the search for home.',
          themes: [
            'Multicultural Identity',
            'Immigration & Belonging',
            'Generational Patterns',
            'Cross-Cultural Family Bonds',
            'Personal Transformation'
          ]
        },
        waitlist: {
          title: 'JOIN THE WAITLIST',
          description: 'Be the first to know when this memoir is published. Get exclusive updates and early access.',
          placeholder: 'Your email address',
          button: 'NOTIFY ME',
          success: 'You\'re on the list! We\'ll notify you when the book launches.'
        }
      },
      cta: {
        title: 'EXPLORE MORE',
        description: 'Visit my Amazon author page to see all available books and editions.',
        button: 'VIEW ON AMAZON'
      }
    },
    it: {
      hero: {
        title: 'LIBRI',
        subtitle: 'OPERE PUBBLICATE',
        description: 'Libri trasformativi su sviluppo personale, marketing digitale e identità multiculturale.'
      },
      published: {
        title: 'DISPONIBILI ORA',
        books: [
          {
            title: 'Imagine Your Dream',
            subtitle: 'Live Your Dream - Sviluppo Personale',
            description: 'Una guida completa per realizzare i tuoi sogni attraverso la definizione degli obiettivi, affermazioni positive e pianificazione strategica. Trasforma la tua vita con metodi comprovati.',
            category: 'Sviluppo Personale',
            link: 'https://www.amazon.com/Imagine-Your-Dream-Agenda-Standard/dp/1519429495',
            image: imagineYourDream
          },
          {
            title: 'Online Media and Video',
            subtitle: 'Come Raggiungere il Top su Internet',
            description: 'Padroneggia l\'arte del video marketing e media online per dominare la tua nicchia. Strategie pratiche per creare contenuti coinvolgenti che si posizionano e convertono.',
            category: 'Marketing Digitale',
            link: 'https://www.amazon.com/Online-Media-Video-Reach-Internet/dp/1540315371',
            image: null
          }
        ]
      },
      coming: {
        title: 'IN ARRIVO',
        book: {
          title: 'Sei Paesi, Una Storia',
          subtitle: 'Six Countries, One Story',
          description: 'Un potente memoir multiculturale che esplora identità, eredità familiare e appartenenza attraverso sei paesi. Un viaggio attraverso schemi generazionali, immigrazione e ricerca di casa.',
          themes: [
            'Identità Multiculturale',
            'Immigrazione e Appartenenza',
            'Schemi Generazionali',
            'Legami Familiari Interculturali',
            'Trasformazione Personale'
          ]
        },
        waitlist: {
          title: 'ISCRIVITI ALLA LISTA D\'ATTESA',
          description: 'Sii il primo a sapere quando questo memoir sarà pubblicato. Ricevi aggiornamenti esclusivi e accesso anticipato.',
          placeholder: 'Il tuo indirizzo email',
          button: 'AVVISAMI',
          success: 'Sei nella lista! Ti avviseremo quando il libro sarà lanciato.'
        }
      },
      cta: {
        title: 'ESPLORA DI PIÙ',
        description: 'Visita la mia pagina autore Amazon per vedere tutti i libri ed edizioni disponibili.',
        button: 'VEDI SU AMAZON'
      }
    },
    no: {
      hero: {
        title: 'BØKER',
        subtitle: 'PUBLISERTE VERK',
        description: 'Transformative bøker om personlig utvikling, digital markedsføring og multikulturell identitet.'
      },
      published: {
        title: 'TILGJENGELIG NÅ',
        books: [
          {
            title: 'Imagine Your Dream',
            subtitle: 'Live Your Dream - Personlig Utvikling',
            description: 'En omfattende guide til å oppnå drømmene dine gjennom målsetting, positive bekreftelser og strategisk planlegging. Transformer livet ditt med dokumenterte metoder.',
            category: 'Personlig Utvikling',
            link: 'https://www.amazon.com/Imagine-Your-Dream-Agenda-Standard/dp/1519429495',
            image: imagineYourDream
          },
          {
            title: 'Online Media and Video',
            subtitle: 'Hvordan Nå Toppen på Internett',
            description: 'Mestre kunsten av videomarkedsføring og online media for å dominere din nisje. Praktiske strategier for å skape engasjerende innhold som rangerer og konverterer.',
            category: 'Digital Markedsføring',
            link: 'https://www.amazon.com/Online-Media-Video-Reach-Internet/dp/1540315371',
            image: null
          }
        ]
      },
      coming: {
        title: 'KOMMER SNART',
        book: {
          title: 'Sei Paesi, Una Storia',
          subtitle: 'Seks Land, En Historie',
          description: 'En kraftfull multikulturell memoir som utforsker identitet, familiearv og tilhørighet på tvers av seks land. En reise gjennom generasjonsmønstre, immigrasjon og søken etter hjem.',
          themes: [
            'Multikulturell Identitet',
            'Immigrasjon & Tilhørighet',
            'Generasjonsmønstre',
            'Tverrkulturelle Familiebånd',
            'Personlig Transformasjon'
          ]
        },
        waitlist: {
          title: 'BLI MED PÅ VENTELISTEN',
          description: 'Vær den første til å vite når denne memoiren publiseres. Få eksklusive oppdateringer og tidlig tilgang.',
          placeholder: 'Din e-postadresse',
          button: 'VARSLE MEG',
          success: 'Du er på listen! Vi varsler deg når boken lanseres.'
        }
      },
      cta: {
        title: 'UTFORSK MER',
        description: 'Besøk min Amazon forfatterside for å se alle tilgjengelige bøker og utgaver.',
        button: 'SE PÅ AMAZON'
      }
    }
  }

  const t = content[language]

  const handleWaitlist = (e) => {
    e.preventDefault()
    setIsSubscribed(true)
    setTimeout(() => {
      setIsSubscribed(false)
      setEmail('')
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-black text-white pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="text-yellow-400/10"
          >
            <BookOpen className="w-[40vw] h-[40vw]" />
          </motion.div>
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

      {/* Published Books */}
      <section className="py-32 bg-black border-t-2 border-yellow-400/20">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-4xl md:text-6xl font-black mb-16 text-yellow-400">
            {t.published.title}
          </h3>

          <div className="grid md:grid-cols-2 gap-12">
            {t.published.books.map((book, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group border-2 border-white/10 hover:border-yellow-400 transition-all duration-300 rounded-lg overflow-hidden"
              >
                {/* Book Cover */}
                {book.image && (
                  <div className="aspect-square bg-gray-900 flex items-center justify-center overflow-hidden">
                    <img
                      src={book.image}
                      alt={book.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                {!book.image && (
                  <div className="aspect-square bg-gradient-to-br from-yellow-400/20 to-gray-900 flex items-center justify-center">
                    <BookOpen className="w-32 h-32 text-yellow-400/30" />
                  </div>
                )}

                {/* Book Info */}
                <div className="p-8">
                  <div className="text-sm text-yellow-400 mb-2 tracking-widest">
                    {book.category}
                  </div>
                  <h4 className="text-3xl font-black mb-2">{book.title}</h4>
                  <p className="text-lg text-gray-400 mb-4">{book.subtitle}</p>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {book.description}
                  </p>

                  <a
                    href={book.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-300 transition-colors"
                  >
                    VIEW ON AMAZON
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon - Memoir */}
      <section className="py-32 bg-black border-t-2 border-yellow-400/20">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl md:text-6xl font-black mb-16 text-yellow-400">
              {t.coming.title}
            </h3>

            <div className="border-2 border-yellow-400/30 rounded-lg p-8 md:p-12">
              <h4 className="text-4xl md:text-5xl font-black mb-4">
                {t.coming.book.title}
              </h4>
              <p className="text-xl text-gray-400 mb-6">
                {t.coming.book.subtitle}
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                {t.coming.book.description}
              </p>

              {/* Themes */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
                {t.coming.book.themes.map((theme, index) => (
                  <div
                    key={index}
                    className="bg-yellow-400/10 border border-yellow-400/30 px-4 py-3 rounded-lg text-center text-sm font-medium"
                  >
                    {theme}
                  </div>
                ))}
              </div>

              {/* Waitlist Form */}
              <div className="bg-black/50 border-2 border-yellow-400 rounded-lg p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Bell className="w-6 h-6 text-yellow-400" />
                  <h5 className="text-2xl font-black">
                    {t.coming.waitlist.title}
                  </h5>
                </div>
                <p className="text-gray-300 mb-6">
                  {t.coming.waitlist.description}
                </p>

                {isSubscribed ? (
                  <div className="text-center py-4">
                    <div className="text-4xl mb-2">✓</div>
                    <p className="text-lg font-bold text-yellow-400">
                      {t.coming.waitlist.success}
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleWaitlist} className="flex gap-4">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={t.coming.waitlist.placeholder}
                      required
                      className="flex-1 bg-transparent border-2 border-white/20 focus:border-yellow-400 px-6 py-3 rounded-lg transition-colors outline-none"
                    />
                    <Button
                      type="submit"
                      className="bg-yellow-400 text-black hover:bg-yellow-300 font-bold px-8"
                    >
                      {t.coming.waitlist.button}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-black border-t-2 border-yellow-400/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-4xl md:text-6xl font-black mb-6">
            {t.cta.title}
          </h3>
          <p className="text-xl text-gray-300 mb-8">
            {t.cta.description}
          </p>
          <a
            href="https://www.amazon.com/stores/author/B00JGLYXO8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-yellow-400 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors"
          >
            {t.cta.button}
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  )
}

export default Books
