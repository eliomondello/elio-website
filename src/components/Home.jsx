import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Star, Users, TrendingUp, Globe, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import elioPortrait from '../assets/73f58f9b-1e3f-4484-8811-734a13a7fbc6-IMG_20250709_164428041_HDR_PORTRAIT.jpg'
import elioProfile from '../assets/YellowInspirationModernInstagramProfilePicture.png'

const Home = ({ language }) => {
  const [currentStat, setCurrentStat] = useState(0)

  const content = {
    en: {
      hero: {
        title: "ELIO MONDELLO ANZÀ",
        highlight: "AI-POWERED BUSINESS TRANSFORMATION",
        subtitle: "Help Italian Entrepreneurs in Norway Grow with Technology & Winning Strategies",
        description: "15 years in international education and business development. I transform businesses with AI automation, multilingual coaching, and proven strategies tested on 250+ properties generating €150k+ revenue.",
        cta: "Book Free Consultation",
        scroll: "Scroll to Discover"
      },
      stats: [
        { number: "250+", label: "Properties Managed", icon: "🏠" },
        { number: "€150K+", label: "Annual Revenue", icon: "💰" },
        { number: "Top 3", label: "Airbnb Italy", icon: "⭐" },
        { number: "15+", label: "Years Experience", icon: "📈" },
        { number: "4", label: "Languages", icon: "🌍" },
        { number: "12", label: "AI Assistants", icon: "🤖" }
      ],
      services: {
        title: "How I Help You Grow",
        subtitle: "Three proven areas for business transformation",
        items: [
          {
            title: "AI Business Automation",
            description: "Transform your operations with 12 specialized AI assistants and proven automation strategies",
            icon: "🤖"
          },
          {
            title: "International Expansion",
            description: "Multilingual coaching and cultural insights to expand your business globally",
            icon: "🌍"
          },
          {
            title: "Property & Revenue Optimization",
            description: "Proven strategies that generated €150k+ revenue from 250+ properties",
            icon: "📈"
          }
        ]
      },
      packages: {
        title: "Coaching Packages",
        subtitle: "Choose the perfect package for your transformation journey",
        items: [
          {
            name: "Starter",
            price: "€297",
            features: ["4 Personalized Sessions", "Basic AI Toolkit", "30-Day Email Support"],
            popular: false
          },
          {
            name: "Professional",
            price: "€997",
            features: ["8 Advanced Sessions", "Comprehensive AI Integration", "Unlimited Email Support", "Monthly Progress Review"],
            popular: true
          },
          {
            name: "Elite Transformation",
            price: "€1,999",
            features: ["Unlimited Sessions", "Full AI Ecosystem Access", "Personal AI Assistant", "Quarterly Strategic Planning", "Priority Support"],
            popular: false
          }
        ]
      }
    },
    it: {
      hero: {
        title: "ELIO MONDELLO ANZÀ",
        highlight: "TRASFORMAZIONE DIGITALE CON IA",
        subtitle: "Aiuto Imprenditori Italiani in Norvegia a Crescere con Tecnologia e Strategie Vincenti",
        description: "15 anni nell'educazione e sviluppo business internazionale. Trasformo aziende con automazione IA, coaching multilingue e strategie testate su 250+ proprietà che generano €150k+ di fatturato.",
        cta: "Prenota Consulenza Gratuita",
        scroll: "Scorri per Scoprire"
      },
      stats: [
        { number: "250+", label: "Proprietà Gestite", icon: "🏠" },
        { number: "€150K+", label: "Fatturato Annuale", icon: "💰" },
        { number: "Top 3", label: "Airbnb Italia", icon: "⭐" },
        { number: "15+", label: "Anni Esperienza", icon: "📈" },
        { number: "4", label: "Lingue", icon: "🌍" },
        { number: "12", label: "Assistenti IA", icon: "🤖" }
      ],
      services: {
        title: "Come Ti Aiuto a Crescere",
        subtitle: "Tre aree comprovate per la trasformazione aziendale",
        items: [
          {
            title: "Automazione Business con IA",
            description: "Trasforma le tue operazioni con 12 assistenti IA specializzati e strategie di automazione testate",
            icon: "🤖"
          },
          {
            title: "Espansione Internazionale",
            description: "Coaching multilingue e insights culturali per espandere il tuo business globalmente",
            icon: "🌍"
          },
          {
            title: "Ottimizzazione Proprietà e Ricavi",
            description: "Strategie comprovate che hanno generato €150k+ di fatturato da 250+ proprietà",
            icon: "📈"
          }
        ]
      },
      packages: {
        title: "Pacchetti Coaching",
        subtitle: "Scegli il pacchetto perfetto per il tuo percorso di trasformazione",
        items: [
          {
            name: "Starter",
            price: "€297",
            features: ["4 Sessioni Personalizzate", "Toolkit IA Base", "Supporto Email 30 Giorni"],
            popular: false
          },
          {
            name: "Professional",
            price: "€997",
            features: ["8 Sessioni Avanzate", "Integrazione IA Completa", "Supporto Email Illimitato", "Revisione Mensile"],
            popular: true
          },
          {
            name: "Elite Transformation",
            price: "€1,999",
            features: ["Sessioni Illimitate", "Accesso Ecosistema IA", "Assistente IA Personale", "Pianificazione Strategica", "Supporto Prioritario"],
            popular: false
          }
        ]
      }
    },
    no: {
      hero: {
        title: "ELIO MONDELLO ANZÀ",
        highlight: "AI-DREVET DIGITAL TRANSFORMASJON",
        subtitle: "Hjelper Italienske Entreprenører i Norge å Vokse med Teknologi og Vinnende Strategier",
        description: "15 år innen internasjonal utdanning og forretningsutvikling. Jeg transformerer virksomheter med AI-automatisering, flerspråklig coaching og beviste strategier testet på 250+ eiendommer som genererer €150k+ inntekt.",
        cta: "Book Gratis Konsultasjon",
        scroll: "Rull for å Oppdage"
      },
      stats: [
        { number: "250+", label: "Eiendommer Forvaltet", icon: "🏠" },
        { number: "€150K+", label: "Årlig Inntekt", icon: "💰" },
        { number: "Topp 3", label: "Airbnb Italia", icon: "⭐" },
        { number: "15+", label: "År Erfaring", icon: "📈" },
        { number: "4", label: "Språk", icon: "🌍" },
        { number: "12", label: "AI Assistenter", icon: "🤖" }
      ],
      services: {
        title: "Hvordan Jeg Hjelper Deg Vokse",
        subtitle: "Tre beviste områder for virksomhetstransformasjon",
        items: [
          {
            title: "AI Business Automatisering",
            description: "Transformer dine operasjoner med 12 spesialiserte AI-assistenter og beviste automatiseringsstrategier",
            icon: "🤖"
          },
          {
            title: "Internasjonal Ekspansjon",
            description: "Flerspråklig coaching og kulturelle innsikter for å utvide virksomheten globalt",
            icon: "🌍"
          },
          {
            title: "Eiendom & Inntektsoptimalisering",
            description: "Beviste strategier som genererte €150k+ inntekt fra 250+ eiendommer",
            icon: "📈"
          }
        ]
      },
      packages: {
        title: "Coaching Pakker",
        subtitle: "Velg den perfekte pakken for din transformasjonsreise",
        items: [
          {
            name: "Starter",
            price: "€297",
            features: ["4 Personlige Økter", "Grunnleggende AI Verktøy", "30-Dagers E-post Støtte"],
            popular: false
          },
          {
            name: "Professional",
            price: "€997",
            features: ["8 Avanserte Økter", "Omfattende AI Integrasjon", "Ubegrenset E-post Støtte", "Månedlig Fremgangsgjennomgang"],
            popular: true
          },
          {
            name: "Elite Transformation",
            price: "€1,999",
            features: ["Ubegrensede Økter", "Full AI Økosystem Tilgang", "Personlig AI Assistent", "Kvartalsvis Strategisk Planlegging", "Prioritert Støtte"],
            popular: false
          }
        ]
      }
    }
  }

  const currentContent = content[language]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % currentContent.stats.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [currentContent.stats.length])

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
          <div className="absolute inset-0 opacity-50" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23fbbf24' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                <span className="text-white">{currentContent.hero.title}</span>
                <br />
                <span className="text-yellow-400">{currentContent.hero.highlight}</span>
              </h1>
              
              <h2 className="text-xl md:text-2xl text-white mb-6 font-medium">
                {currentContent.hero.subtitle}
              </h2>
              
              <p className="text-lg text-white mb-8 max-w-2xl font-medium">
                {currentContent.hero.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  asChild
                  size="lg"
                  className="bg-yellow-400 text-black hover:bg-yellow-300 font-semibold text-lg px-8 py-6"
                >
                  <a href="https://mondosol.com/coaching" target="_blank" rel="noopener noreferrer">
                    {currentContent.hero.cta}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </Button>
                
                <Button 
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black font-semibold text-lg px-8 py-6"
                >
                  <Link to="/about">
                    Learn My Story
                  </Link>
                </Button>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-yellow-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>
                <img
                  src={elioPortrait}
                  alt="Elio Mondello"
                  className="relative z-10 w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center"
          >
            <p className="text-gray-400 text-sm mb-2">{currentContent.hero.scroll}</p>
            <ChevronDown className="w-6 h-6 text-yellow-400 mx-auto animate-bounce" />
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {currentContent.stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`text-center p-6 rounded-lg transition-all duration-300 ${
                  currentStat === index ? 'bg-yellow-400/10 border border-yellow-400/30' : 'hover:bg-gray-800'
                }`}
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-2xl md:text-3xl font-bold text-yellow-400 mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {currentContent.services.title}
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto font-medium">
              {currentContent.services.subtitle}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {currentContent.services.items.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-gray-900 p-8 rounded-xl hover:bg-gray-800 transition-all duration-300 group"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-200 leading-relaxed font-medium">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {currentContent.packages.title}
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto font-medium">
              {currentContent.packages.subtitle}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {currentContent.packages.items.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className={`relative p-8 rounded-xl border-2 transition-all duration-300 ${
                  pkg.popular 
                    ? 'border-yellow-400 bg-yellow-400/5 scale-105' 
                    : 'border-gray-700 bg-gray-800 hover:border-yellow-400/50'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                  <div className="text-4xl font-bold text-yellow-400">{pkg.price}</div>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <Star className="w-4 h-4 text-yellow-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button 
                  asChild
                  className={`w-full ${
                    pkg.popular 
                      ? 'bg-yellow-400 text-black hover:bg-yellow-300' 
                      : 'bg-gray-700 text-white hover:bg-yellow-400 hover:text-black'
                  }`}
                >
                  <a href="https://mondosol.com/coaching" target="_blank" rel="noopener noreferrer">
                    Choose {pkg.name}
                  </a>
                </Button>
              </motion.div>
            ))}
          </div>
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
              Ready to Transform Your Life?
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Join hundreds of successful entrepreneurs and business leaders who have transformed their lives with my AI-powered coaching approach.
            </p>
            <Button 
              asChild
              size="lg"
              className="bg-yellow-400 text-black hover:bg-yellow-300 font-semibold text-lg px-12 py-6"
            >
              <a href="https://mondosol.com/coaching" target="_blank" rel="noopener noreferrer">
                Book Your Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home
