import { motion } from 'framer-motion'
import { Star, Quote, MapPin, Briefcase } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Testimonials = ({ language }) => {
  const content = {
    en: {
      hero: {
        title: "CLIENT SUCCESS STORIES",
        subtitle: "Real Transformations, Real Results",
        description: "Discover how my AI-powered coaching and consulting services have transformed businesses and lives across multiple industries and countries."
      },
      testimonials: [
        {
          name: "Marco S.",
          role: "Entrepreneur",
          company: "Tech Startup",
          location: "Milan, Italy",
          image: "marco",
          rating: 5,
          quote: "Elio's AI-powered coaching transformed my struggling startup into a thriving business. His strategic insights and personalized approach made all the difference in turning around our company.",
          results: [
            "Revenue increased by 300%",
            "Team productivity improved by 150%",
            "Successfully secured Series A funding"
          ],
          category: "Business Transformation"
        },
        {
          name: "Elena R.",
          role: "Freelance Consultant",
          company: "Digital Marketing Agency",
          location: "Rome, Italy",
          image: "elena",
          rating: 5,
          quote: "The strategic insights and personalized approach helped me redefine my professional trajectory. Elio's multilingual expertise opened new markets for my services.",
          results: [
            "Client base expanded internationally",
            "Monthly revenue doubled",
            "Established presence in 3 new countries"
          ],
          category: "Professional Development"
        },
        {
          name: "Yuki Tanaka",
          role: "Founder",
          company: "Sustainable Fashion House",
          location: "Tokyo, Japan",
          image: "yuki",
          rating: 5,
          quote: "Overcame language barriers through Mondosol's personalized language courses. Within eight months, I became fluent enough to expand internationally.",
          results: [
            "Achieved business-level English fluency",
            "Expanded to European markets",
            "Increased international sales by 250%"
          ],
          category: "Language & Communication"
        },
        {
          name: "Carlos Mendoza",
          role: "Educational Entrepreneur",
          company: "Online Learning Platform",
          location: "Bogotá, Colombia",
          image: "carlos",
          rating: 5,
          quote: "Mastered English through Mondosol's language learning platform. In one year, I advanced my career significantly and expanded my business reach.",
          results: [
            "Launched English-language courses",
            "Student enrollment increased 400%",
            "Established partnerships in North America"
          ],
          category: "Education & Growth"
        },
        {
          name: "Maria Andersen-Romano",
          role: "CEO",
          company: "Nordic-Mediterranean Consulting",
          location: "Oslo, Norway",
          image: "maria",
          rating: 5,
          quote: "Credits Mondosol for transforming her cultural heritage into a successful consulting business. The program equipped her with essential tools for international success.",
          results: [
            "Built successful consulting practice",
            "Leveraged multicultural background",
            "Achieved 6-figure annual revenue"
          ],
          category: "Cultural Integration"
        },
        {
          name: "Dr. Ahmed Al-Rashid",
          role: "Medical Practitioner",
          company: "International Medical Center",
          location: "Dubai, UAE",
          image: "ahmed",
          rating: 5,
          quote: "Mondosol's communication training was essential for working with international patients. The multilingual approach improved patient care significantly.",
          results: [
            "Enhanced patient communication",
            "Reduced misunderstandings by 80%",
            "Improved patient satisfaction scores"
          ],
          category: "Healthcare Communication"
        },
        {
          name: "Sofia Petrova",
          role: "CEO",
          company: "EcoVerde Solutions",
          location: "Sofia, Bulgaria",
          image: "sofia",
          rating: 5,
          quote: "Mondosol's Business English Coaching helped me effectively communicate with international investors. In six months, I secured major funding rounds.",
          results: [
            "Secured €2M in Series A funding",
            "Established investor relationships",
            "Expanded to 5 European markets"
          ],
          category: "Investment & Funding"
        },
        {
          name: "Ruggero Vasari",
          role: "Farm Owner",
          company: "Agriturismo Sicily",
          location: "Messina, Italy",
          image: "ruggero",
          rating: 5,
          quote: "Transformed our farm hotel near Messina with Mondosol's help, achieving full occupancy and becoming one of Italy's top agritourism destinations.",
          results: [
            "Achieved 100% occupancy rate",
            "Ranked among top agritourism in Italy",
            "Revenue increased by 400%"
          ],
          category: "Tourism & Hospitality"
        },
        {
          name: "Lucia Bianchini",
          role: "Entrepreneur",
          company: "Vacation Rental Business",
          location: "Florence, Italy",
          image: "lucia",
          rating: 5,
          quote: "Mondosol streamlined my vacation rental business reservations, centralized my calendar, and optimized operations for maximum efficiency.",
          results: [
            "Streamlined booking process",
            "Increased booking efficiency by 200%",
            "Reduced operational overhead by 40%"
          ],
          category: "Operations Optimization"
        }
      ],
      stats: {
        title: "Impact by Numbers",
        items: [
          { number: "100+", label: "Clients Served", icon: "👥" },
          { number: "15+", label: "Industries", icon: "🏢" },
          { number: "25+", label: "Countries", icon: "🌍" },
          { number: "92%", label: "Success Rate", icon: "📈" },
          { number: "€2M+", label: "Client Revenue Generated", icon: "💰" },
          { number: "4.9/5", label: "Average Rating", icon: "⭐" }
        ]
      }
    },
    it: {
      hero: {
        title: "STORIE DI SUCCESSO DEI CLIENTI",
        subtitle: "Trasformazioni Reali, Risultati Reali",
        description: "Scopri come i miei servizi di coaching e consulenza potenziati dall'IA hanno trasformato aziende e vite in molteplici settori e paesi."
      },
      testimonials: [
        {
          name: "Marco S.",
          role: "Imprenditore",
          company: "Startup Tecnologica",
          location: "Milano, Italia",
          image: "marco",
          rating: 5,
          quote: "Il coaching potenziato dall'IA di Elio ha trasformato la mia startup in difficoltà in un'azienda fiorente. Le sue intuizioni strategiche e l'approccio personalizzato hanno fatto la differenza.",
          results: [
            "Fatturato aumentato del 300%",
            "Produttività del team migliorata del 150%",
            "Finanziamento Serie A ottenuto con successo"
          ],
          category: "Trasformazione Aziendale"
        }
      ],
      stats: {
        title: "Impatto in Numeri",
        items: [
          { number: "100+", label: "Clienti Serviti", icon: "👥" },
          { number: "15+", label: "Settori", icon: "🏢" },
          { number: "25+", label: "Paesi", icon: "🌍" },
          { number: "92%", label: "Tasso di Successo", icon: "📈" },
          { number: "€2M+", label: "Fatturato Clienti Generato", icon: "💰" },
          { number: "4.9/5", label: "Valutazione Media", icon: "⭐" }
        ]
      }
    },
    no: {
      hero: {
        title: "KLIENT SUKSESSHISTORIER",
        subtitle: "Ekte Transformasjoner, Ekte Resultater",
        description: "Oppdag hvordan mine AI-drevne coaching- og konsulenttjenester har transformert virksomheter og liv på tvers av flere bransjer og land."
      },
      testimonials: [
        {
          name: "Marco S.",
          role: "Entreprenør",
          company: "Tech Startup",
          location: "Milano, Italia",
          image: "marco",
          rating: 5,
          quote: "Elios AI-drevne coaching transformerte min slitende startup til en blomstrende virksomhet. Hans strategiske innsikter og personlige tilnærming gjorde all forskjellen.",
          results: [
            "Inntekt økte med 300%",
            "Teamproduktivitet forbedret med 150%",
            "Vellykket sikret Serie A finansiering"
          ],
          category: "Virksomhetstransformasjon"
        }
      ],
      stats: {
        title: "Påvirkning i Tall",
        items: [
          { number: "100+", label: "Klienter Betjent", icon: "👥" },
          { number: "15+", label: "Bransjer", icon: "🏢" },
          { number: "25+", label: "Land", icon: "🌍" },
          { number: "92%", label: "Suksessrate", icon: "📈" },
          { number: "€2M+", label: "Klientinntekt Generert", icon: "💰" },
          { number: "4.9/5", label: "Gjennomsnittlig Vurdering", icon: "⭐" }
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-yellow-400 mb-6">
              {currentContent.hero.title}
            </h1>
            <h2 className="text-2xl md:text-3xl text-white mb-6">
              {currentContent.hero.subtitle}
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
              {currentContent.hero.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {currentContent.stats.title}
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {currentContent.stats.items.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-gray-800 rounded-xl hover:bg-gray-700 transition-all duration-300"
              >
                <div className="text-3xl mb-3">{stat.icon}</div>
                <div className="text-2xl md:text-3xl font-bold text-yellow-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentContent.testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-900 p-8 rounded-xl border border-gray-800 hover:border-yellow-400/30 transition-all duration-300 group"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center text-black font-bold text-lg mr-4">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">{testimonial.name}</h3>
                      <p className="text-gray-400 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>

                {/* Category */}
                <div className="mb-4">
                  <span className="text-yellow-400 text-xs font-semibold uppercase tracking-wide">
                    {testimonial.category}
                  </span>
                </div>

                {/* Quote */}
                <div className="mb-6">
                  <Quote className="w-6 h-6 text-yellow-400 mb-3" />
                  <p className="text-gray-300 leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>
                </div>

                {/* Company & Location */}
                <div className="mb-6 space-y-2">
                  <div className="flex items-center text-gray-400 text-sm">
                    <Briefcase className="w-4 h-4 mr-2" />
                    {testimonial.company}
                  </div>
                  <div className="flex items-center text-gray-400 text-sm">
                    <MapPin className="w-4 h-4 mr-2" />
                    {testimonial.location}
                  </div>
                </div>

                {/* Results */}
                <div>
                  <h4 className="text-white font-semibold mb-3">Key Results:</h4>
                  <ul className="space-y-2">
                    {testimonial.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="flex items-center text-gray-300 text-sm">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 flex-shrink-0"></div>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Success Story */}
      <section className="py-20 bg-gradient-to-r from-yellow-400 to-yellow-500">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center text-black"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              "From €150k Loss to Breakthrough Success"
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl mb-8 leading-relaxed">
                My own transformation story is proof that setbacks can become setups for incredible comebacks. 
                After losing €150k, I rebuilt stronger than ever, creating a thriving AI-powered coaching business 
                that has helped hundreds of clients achieve their own breakthrough results.
              </p>
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">€150k</div>
                  <div className="text-sm">Initial Loss</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">12 Months</div>
                  <div className="text-sm">Recovery Time</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">300%</div>
                  <div className="text-sm">Growth Achieved</div>
                </div>
              </div>
              <p className="text-lg italic">
                "Every setback is a setup for a comeback. Let me help you write your success story."
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Join These Success Stories?
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Transform your challenges into opportunities. Start your journey to breakthrough success with personalized AI-powered coaching.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                size="lg"
                className="bg-yellow-400 text-black hover:bg-yellow-300 font-semibold text-lg px-8 py-6"
              >
                <a href="https://mondosol.com/coaching" target="_blank" rel="noopener noreferrer">
                  Book Your Consultation
                </a>
              </Button>
              
              <Button 
                asChild
                variant="outline"
                size="lg"
                className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black font-semibold text-lg px-8 py-6"
              >
                <a href="/services">
                  Explore Services
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Testimonials
