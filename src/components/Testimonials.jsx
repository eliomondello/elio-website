import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const Testimonials = ({ language }) => {
  const content = {
    en: {
      hero: {
        title: 'TESTIMONIALS',
        subtitle: 'WHAT CLIENTS SAY',
        description: 'Real feedback from real clients who achieved extraordinary results.'
      },
      testimonials: [
        {
          name: 'Marco Rossi',
          role: 'Property Owner',
          company: 'Milan, Italy',
          quote: 'Elio transformed my property business. Revenue increased by 60% in the first year. His expertise in Airbnb management is unmatched.',
          rating: 5
        },
        {
          name: 'Sarah Johnson',
          role: 'Business Owner',
          company: 'Oslo, Norway',
          quote: 'Working with Elio on our digital marketing strategy was a game-changer. His multilingual SEO expertise helped us expand into new markets.',
          rating: 5
        },
        {
          name: 'Giovanni Bianchi',
          role: 'School Director',
          company: 'Rome, Italy',
          quote: 'Elio\'s teaching methods and AI integration brought our educational programs to the next level. Students are more engaged than ever.',
          rating: 5
        },
        {
          name: 'Anna Larsen',
          role: 'Entrepreneur',
          company: 'Bergen, Norway',
          quote: 'The coaching sessions in Norwegian helped me navigate cultural differences and grow my business internationally. Highly recommended!',
          rating: 5
        },
        {
          name: 'Luca Ferrari',
          role: 'Marketing Manager',
          company: 'Florence, Italy',
          quote: 'Elio\'s content strategy and SEO work delivered results beyond our expectations. Our online visibility increased by 250%.',
          rating: 5
        },
        {
          name: 'Emma Andersen',
          role: 'Parent',
          company: 'Hønefoss, Norway',
          quote: 'As a kindergarten teacher, Elio brings creativity, patience, and genuine care for children. My daughter loves his classes!',
          rating: 5
        }
      ]
    },
    it: {
      hero: {
        title: 'TESTIMONIANZE',
        subtitle: 'COSA DICONO I CLIENTI',
        description: 'Feedback reali da clienti reali che hanno raggiunto risultati straordinari.'
      },
      testimonials: [
        {
          name: 'Marco Rossi',
          role: 'Proprietario Immobiliare',
          company: 'Milano, Italia',
          quote: 'Elio ha trasformato il mio business immobiliare. Il fatturato è aumentato del 60% nel primo anno. La sua esperienza nella gestione Airbnb è impareggiabile.',
          rating: 5
        },
        {
          name: 'Sarah Johnson',
          role: 'Imprenditrice',
          company: 'Oslo, Norvegia',
          quote: 'Lavorare con Elio sulla nostra strategia di marketing digitale è stato rivoluzionario. La sua esperienza SEO multilingue ci ha aiutato ad espanderci in nuovi mercati.',
          rating: 5
        },
        {
          name: 'Giovanni Bianchi',
          role: 'Direttore Scolastico',
          company: 'Roma, Italia',
          quote: 'I metodi di insegnamento di Elio e l\'integrazione AI hanno portato i nostri programmi educativi al livello successivo. Gli studenti sono più coinvolti che mai.',
          rating: 5
        },
        {
          name: 'Anna Larsen',
          role: 'Imprenditrice',
          company: 'Bergen, Norvegia',
          quote: 'Le sessioni di coaching in norvegese mi hanno aiutato a navigare le differenze culturali e far crescere il mio business internazionalmente. Altamente raccomandato!',
          rating: 5
        },
        {
          name: 'Luca Ferrari',
          role: 'Marketing Manager',
          company: 'Firenze, Italia',
          quote: 'La strategia di contenuti e il lavoro SEO di Elio hanno portato risultati oltre le nostre aspettative. La nostra visibilità online è aumentata del 250%.',
          rating: 5
        },
        {
          name: 'Emma Andersen',
          role: 'Genitore',
          company: 'Hønefoss, Norvegia',
          quote: 'Come insegnante di scuola materna, Elio porta creatività, pazienza e genuina cura per i bambini. Mia figlia adora le sue lezioni!',
          rating: 5
        }
      ]
    },
    no: {
      hero: {
        title: 'ANBEFALINGER',
        subtitle: 'HVA KLIENTER SIER',
        description: 'Ekte tilbakemeldinger fra ekte klienter som oppnådde ekstraordinære resultater.'
      },
      testimonials: [
        {
          name: 'Marco Rossi',
          role: 'Eiendomseier',
          company: 'Milano, Italia',
          quote: 'Elio transformerte eiendomsvirksomheten min. Inntektene økte med 60% det første året. Hans ekspertise innen Airbnb-forvaltning er uovertruffen.',
          rating: 5
        },
        {
          name: 'Sarah Johnson',
          role: 'Bedriftseier',
          company: 'Oslo, Norge',
          quote: 'Å jobbe med Elio på vår digitale markedsføringsstrategi var en game-changer. Hans flerspråklige SEO-ekspertise hjalp oss med å ekspandere til nye markeder.',
          rating: 5
        },
        {
          name: 'Giovanni Bianchi',
          role: 'Skoledirektør',
          company: 'Roma, Italia',
          quote: 'Elios undervisningsmetoder og AI-integrering tok våre utdanningsprogrammer til neste nivå. Elevene er mer engasjerte enn noensinne.',
          rating: 5
        },
        {
          name: 'Anna Larsen',
          role: 'Entreprenør',
          company: 'Bergen, Norge',
          quote: 'Coachingøktene på norsk hjalp meg med å navigere kulturelle forskjeller og vokse virksomheten min internasjonalt. Anbefales på det sterkeste!',
          rating: 5
        },
        {
          name: 'Luca Ferrari',
          role: 'Markedssjef',
          company: 'Firenze, Italia',
          quote: 'Elios innholdsstrategi og SEO-arbeid leverte resultater utover våre forventninger. Vår online synlighet økte med 250%.',
          rating: 5
        },
        {
          name: 'Emma Andersen',
          role: 'Forelder',
          company: 'Hønefoss, Norge',
          quote: 'Som barnehagelærer bringer Elio kreativitet, tålmodighet og ekte omsorg for barn. Datteren min elsker timene hans!',
          rating: 5
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
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="text-yellow-400/10"
          >
            <Quote className="w-[40vw] h-[40vw]" />
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

      {/* Testimonials Grid */}
      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {t.testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-8 md:p-10 border-2 border-white/10 hover:border-yellow-400 transition-all duration-300 rounded-lg"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Quote */}
                <Quote className="w-12 h-12 text-yellow-400/20 mb-4" />
                <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="border-t border-white/10 pt-6">
                  <div className="font-bold text-xl text-yellow-400 mb-1">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-400">
                    {testimonial.role}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonial.company}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Testimonials
