import { motion } from 'framer-motion'
import { Calendar, MapPin, Award, BookOpen, Users, Globe } from 'lucide-react'
import { Button } from '@/components/ui/button'
import elioAbout from '../assets/IMG_20230917_191400957_HDR-EDIT.jpg'
import elioProfile from '../assets/YellowInspirationModernInstagramProfilePicture.png'

const About = ({ language }) => {
  const content = {
    en: {
      hero: {
        title: "ELIO'S STORY",
        subtitle: "From Humble Beginnings to International Success",
        description: "A journey of resilience, innovation, and transformation across three countries and multiple industries."
      },
      timeline: [
        {
          year: "2005-2006",
          title: "Master's in Project Management",
          location: "Università degli Studi di Milano, Italy",
          description: "Completed Master of Arts in Project Management with internship at ISTUD business school, laying the foundation for strategic thinking and business leadership.",
          icon: "🎓"
        },
        {
          year: "2003-2004",
          title: "Erasmus Exchange Program",
          location: "Sciences Po Grenoble, France",
          description: "Studied Public Administration through the European Union Exchange Program, developing multicultural perspectives and international networking skills.",
          icon: "🌍"
        },
        {
          year: "2009-2014",
          title: "Educational Leadership",
          location: "Italy & Norway",
          description: "Started as English Language Teacher, evolved into Educational Leadership Consultant. Founded Mondelio, a non-profit with 300+ members offering free courses.",
          icon: "📚"
        },
        {
          year: "2014-Present",
          title: "Property Management Empire",
          location: "Italy",
          description: "Built and managed 250+ short-term rental listings, achieving Top 3 ranking nationally on Airbnb platform with €150k+ annual revenue.",
          icon: "🏠"
        },
        {
          year: "2022-Present",
          title: "AI-Powered Coaching",
          location: "Global",
          description: "Launched Mondosol coaching business, integrating 12 AI virtual assistants to provide personalized coaching in 4 languages across multiple industries.",
          icon: "🤖"
        },
        {
          year: "2023-Present",
          title: "Norwegian Integration",
          location: "Hønefoss, Norway",
          description: "Working as Kindergarten Teacher and Substitute Teacher while expanding coaching business internationally, bridging education and entrepreneurship.",
          icon: "🇳🇴"
        }
      ],
      philosophy: {
        title: "My Philosophy",
        subtitle: "Transformation Through Technology and Human Connection",
        points: [
          {
            title: "Resilience Through Adversity",
            description: "Every setback is a setup for a comeback. My €150k loss taught me that failure is not the opposite of success—it's a stepping stone to it.",
            icon: "💪"
          },
          {
            title: "AI-Human Synergy",
            description: "Technology amplifies human potential. By combining AI tools with personalized coaching, we can achieve unprecedented results in personal and business transformation.",
            icon: "🔗"
          },
          {
            title: "Multicultural Advantage",
            description: "Speaking 4 languages and living in 3 countries has taught me that diversity of perspective is the key to innovative solutions and global success.",
            icon: "🌐"
          },
          {
            title: "Continuous Learning",
            description: "From teaching to property management to AI coaching, I believe in constantly evolving and adapting to new challenges and opportunities.",
            icon: "📈"
          }
        ]
      },
      achievements: {
        title: "Key Achievements",
        items: [
          { label: "Top 3 Airbnb Host", value: "Italy National Ranking", icon: "🏆" },
          { label: "Properties Managed", value: "250+ Listings", icon: "🏠" },
          { label: "Annual Revenue", value: "€150k+", icon: "💰" },
          { label: "Languages Spoken", value: "4 Fluently", icon: "🗣️" },
          { label: "AI Assistants", value: "12 Active", icon: "🤖" },
          { label: "Years Experience", value: "15+ International", icon: "📅" },
          { label: "Industries Served", value: "10+ Different", icon: "🏢" },
          { label: "Countries Lived", value: "3 (Italy, France, Norway)", icon: "🌍" }
        ]
      },
      recognition: {
        title: "Recognition & Awards",
        items: [
          "Top Gun Consulting Maverick Award by Traffic Geyser & Instant Customer",
          "Follow The Expert: Top Consultant by Mike Koenigs",
          "Recognition by #1 bestselling author Ed Rush",
          "Amazon bestselling author for 'Imagine Your Dream'",
          "Featured as top influencer in hospitality by Repubblica",
          "Top 10 Airbnb Host in the world according to Incipit Consulting"
        ]
      }
    },
    it: {
      hero: {
        title: "LA STORIA DI ELIO",
        subtitle: "Da Umili Inizi al Successo Internazionale",
        description: "Un viaggio di resilienza, innovazione e trasformazione attraverso tre paesi e molteplici industrie."
      },
      timeline: [
        {
          year: "2005-2006",
          title: "Master in Project Management",
          location: "Università degli Studi di Milano, Italia",
          description: "Completato Master in Project Management con stage presso ISTUD business school, gettando le basi per il pensiero strategico e la leadership aziendale.",
          icon: "🎓"
        },
        {
          year: "2003-2004",
          title: "Programma Erasmus",
          location: "Sciences Po Grenoble, Francia",
          description: "Studiato Amministrazione Pubblica attraverso il Programma di Scambio dell'Unione Europea, sviluppando prospettive multiculturali e competenze di networking internazionale.",
          icon: "🌍"
        },
        {
          year: "2009-2014",
          title: "Leadership Educativa",
          location: "Italia e Norvegia",
          description: "Iniziato come Insegnante di Inglese, evoluto in Consulente di Leadership Educativa. Fondato Mondelio, un'organizzazione no-profit con 300+ membri.",
          icon: "📚"
        },
        {
          year: "2014-Presente",
          title: "Impero Gestione Immobiliare",
          location: "Italia",
          description: "Costruito e gestito 250+ annunci di affitti brevi, raggiungendo il Top 3 nazionale su Airbnb con €150k+ di fatturato annuale.",
          icon: "🏠"
        },
        {
          year: "2022-Presente",
          title: "Coaching Potenziato dall'IA",
          location: "Globale",
          description: "Lanciato il business di coaching Mondosol, integrando 12 assistenti virtuali IA per fornire coaching personalizzato in 4 lingue.",
          icon: "🤖"
        },
        {
          year: "2023-Presente",
          title: "Integrazione Norvegese",
          location: "Hønefoss, Norvegia",
          description: "Lavorando come Insegnante d'Asilo e Supplente mentre espando il business di coaching internazionalmente.",
          icon: "🇳🇴"
        }
      ],
      philosophy: {
        title: "La Mia Filosofia",
        subtitle: "Trasformazione Attraverso Tecnologia e Connessione Umana",
        points: [
          {
            title: "Resilienza Attraverso le Avversità",
            description: "Ogni battuta d'arresto è una preparazione per un ritorno. La mia perdita di €150k mi ha insegnato che il fallimento non è l'opposto del successo—è un trampolino di lancio.",
            icon: "💪"
          },
          {
            title: "Sinergia IA-Umano",
            description: "La tecnologia amplifica il potenziale umano. Combinando strumenti IA con coaching personalizzato, possiamo raggiungere risultati senza precedenti.",
            icon: "🔗"
          },
          {
            title: "Vantaggio Multiculturale",
            description: "Parlare 4 lingue e vivere in 3 paesi mi ha insegnato che la diversità di prospettiva è la chiave per soluzioni innovative e successo globale.",
            icon: "🌐"
          },
          {
            title: "Apprendimento Continuo",
            description: "Dall'insegnamento alla gestione immobiliare al coaching IA, credo nell'evolversi e adattarsi costantemente a nuove sfide e opportunità.",
            icon: "📈"
          }
        ]
      },
      achievements: {
        title: "Risultati Chiave",
        items: [
          { label: "Top 3 Host Airbnb", value: "Classifica Nazionale Italia", icon: "🏆" },
          { label: "Proprietà Gestite", value: "250+ Annunci", icon: "🏠" },
          { label: "Fatturato Annuale", value: "€150k+", icon: "💰" },
          { label: "Lingue Parlate", value: "4 Fluentemente", icon: "🗣️" },
          { label: "Assistenti IA", value: "12 Attivi", icon: "🤖" },
          { label: "Anni Esperienza", value: "15+ Internazionali", icon: "📅" },
          { label: "Industrie Servite", value: "10+ Diverse", icon: "🏢" },
          { label: "Paesi Vissuti", value: "3 (Italia, Francia, Norvegia)", icon: "🌍" }
        ]
      },
      recognition: {
        title: "Riconoscimenti e Premi",
        items: [
          "Top Gun Consulting Maverick Award da Traffic Geyser & Instant Customer",
          "Follow The Expert: Top Consultant da Mike Koenigs",
          "Riconoscimento dall'autore bestseller #1 Ed Rush",
          "Autore bestseller Amazon per 'Imagine Your Dream'",
          "Presentato come top influencer nell'ospitalità da Repubblica",
          "Top 10 Host Airbnb nel mondo secondo Incipit Consulting"
        ]
      }
    },
    no: {
      hero: {
        title: "ELIOS HISTORIE",
        subtitle: "Fra Ydmyke Begynnelser til Internasjonal Suksess",
        description: "En reise av motstandskraft, innovasjon og transformasjon gjennom tre land og flere bransjer."
      },
      timeline: [
        {
          year: "2005-2006",
          title: "Master i Prosjektledelse",
          location: "Università degli Studi di Milano, Italia",
          description: "Fullført Master i Prosjektledelse med praksis ved ISTUD business school, la grunnlaget for strategisk tenkning og bedriftsledelse.",
          icon: "🎓"
        },
        {
          year: "2003-2004",
          title: "Erasmus Utvekslingsprogram",
          location: "Sciences Po Grenoble, Frankrike",
          description: "Studerte offentlig administrasjon gjennom EUs utvekslingsprogram, utviklet multikulturelle perspektiver og internasjonale nettverksferdigheter.",
          icon: "🌍"
        },
        {
          year: "2009-2014",
          title: "Utdanningsledelse",
          location: "Italia og Norge",
          description: "Startet som engelsklærer, utviklet seg til utdanningsledelseskonsulent. Grunnla Mondelio, en ideell organisasjon med 300+ medlemmer.",
          icon: "📚"
        },
        {
          year: "2014-Nåtid",
          title: "Eiendomsforvaltningsimperium",
          location: "Italia",
          description: "Bygget og forvaltet 250+ korttidsutleie annonser, oppnådde topp 3 rangering nasjonalt på Airbnb med €150k+ årlig inntekt.",
          icon: "🏠"
        },
        {
          year: "2022-Nåtid",
          title: "AI-Drevet Coaching",
          location: "Global",
          description: "Lanserte Mondosol coaching-virksomhet, integrerte 12 AI virtuelle assistenter for å gi personlig coaching på 4 språk.",
          icon: "🤖"
        },
        {
          year: "2023-Nåtid",
          title: "Norsk Integrasjon",
          location: "Hønefoss, Norge",
          description: "Jobber som barnehagelærer og vikar mens jeg utvider coaching-virksomheten internasjonalt, bygger bro mellom utdanning og entreprenørskap.",
          icon: "🇳🇴"
        }
      ],
      philosophy: {
        title: "Min Filosofi",
        subtitle: "Transformasjon Gjennom Teknologi og Menneskelig Forbindelse",
        points: [
          {
            title: "Motstandskraft Gjennom Motgang",
            description: "Hvert tilbakeslag er en oppsetning for et comeback. Mitt €150k tap lærte meg at fiasko ikke er det motsatte av suksess—det er et springbrett til det.",
            icon: "💪"
          },
          {
            title: "AI-Menneskelig Synergi",
            description: "Teknologi forsterker menneskelig potensial. Ved å kombinere AI-verktøy med personlig coaching kan vi oppnå enestående resultater.",
            icon: "🔗"
          },
          {
            title: "Multikulturell Fordel",
            description: "Å snakke 4 språk og bo i 3 land har lært meg at mangfold av perspektiv er nøkkelen til innovative løsninger og global suksess.",
            icon: "🌐"
          },
          {
            title: "Kontinuerlig Læring",
            description: "Fra undervisning til eiendomsforvaltning til AI coaching, tror jeg på å konstant utvikle seg og tilpasse seg nye utfordringer og muligheter.",
            icon: "📈"
          }
        ]
      },
      achievements: {
        title: "Nøkkelprestasjoner",
        items: [
          { label: "Topp 3 Airbnb Vert", value: "Italia Nasjonal Rangering", icon: "🏆" },
          { label: "Eiendommer Forvaltet", value: "250+ Annonser", icon: "🏠" },
          { label: "Årlig Inntekt", value: "€150k+", icon: "💰" },
          { label: "Språk Snakket", value: "4 Flytende", icon: "🗣️" },
          { label: "AI Assistenter", value: "12 Aktive", icon: "🤖" },
          { label: "År Erfaring", value: "15+ Internasjonalt", icon: "📅" },
          { label: "Bransjer Betjent", value: "10+ Forskjellige", icon: "🏢" },
          { label: "Land Bodd", value: "3 (Italia, Frankrike, Norge)", icon: "🌍" }
        ]
      },
      recognition: {
        title: "Anerkjennelse og Priser",
        items: [
          "Top Gun Consulting Maverick Award av Traffic Geyser & Instant Customer",
          "Follow The Expert: Top Consultant av Mike Koenigs",
          "Anerkjennelse av #1 bestselger forfatter Ed Rush",
          "Amazon bestselger forfatter for 'Imagine Your Dream'",
          "Omtalt som topp influencer i gjestfrihet av Repubblica",
          "Topp 10 Airbnb Vert i verden ifølge Incipit Consulting"
        ]
      }
    }
  }

  const currentContent = content[language]

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-yellow-400 mb-6">
                {currentContent.hero.title}
              </h1>
              <h2 className="text-2xl md:text-3xl text-white mb-6">
                {currentContent.hero.subtitle}
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed">
                {currentContent.hero.description}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-yellow-400 rounded-full blur-3xl opacity-20"></div>
                <img
                  src={elioAbout}
                  alt="Elio Mondello Professional"
                  className="relative z-10 w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Professional Journey
            </h2>
            <p className="text-xl text-gray-400">
              Key milestones that shaped my career and expertise
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-yellow-400/30"></div>

            {currentContent.timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-yellow-400 rounded-full border-4 border-gray-900 z-10"></div>

                {/* Content */}
                <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-yellow-400/50 transition-all duration-300">
                    <div className="flex items-center mb-3">
                      <span className="text-2xl mr-3">{item.icon}</span>
                      <span className="text-yellow-400 font-semibold">{item.year}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <div className="flex items-center text-gray-400 mb-3">
                      <MapPin className="w-4 h-4 mr-2" />
                      {item.location}
                    </div>
                    <p className="text-gray-300 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {currentContent.philosophy.title}
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              {currentContent.philosophy.subtitle}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {currentContent.philosophy.points.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-gray-900 p-8 rounded-xl hover:bg-gray-800 transition-all duration-300 group"
              >
                <div className="text-4xl mb-4">{point.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors">
                  {point.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {point.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {currentContent.achievements.title}
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {currentContent.achievements.items.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-gray-800 rounded-xl hover:bg-gray-700 transition-all duration-300"
              >
                <div className="text-3xl mb-3">{achievement.icon}</div>
                <div className="text-lg font-bold text-yellow-400 mb-2">
                  {achievement.value}
                </div>
                <div className="text-sm text-gray-400">{achievement.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition Section */}
      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {currentContent.recognition.title}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {currentContent.recognition.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center p-6 bg-gray-900 rounded-xl hover:bg-gray-800 transition-all duration-300"
              >
                <Award className="w-6 h-6 text-yellow-400 mr-4 flex-shrink-0" />
                <p className="text-gray-300">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-400 to-yellow-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-black/80 mb-8 max-w-2xl mx-auto">
              Let's work together to transform your challenges into opportunities and achieve breakthrough results.
            </p>
            <Button 
              asChild
              size="lg"
              className="bg-black text-yellow-400 hover:bg-gray-900 font-semibold text-lg px-12 py-6"
            >
              <a href="https://mondosol.com/coaching" target="_blank" rel="noopener noreferrer">
                Start Your Transformation
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About
