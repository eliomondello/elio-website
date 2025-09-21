import { motion } from 'framer-motion'
import { Check, ArrowRight, Star, Clock, Users, Globe, Zap, Target } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Services = ({ language }) => {
  const content = {
    en: {
      hero: {
        title: "SERVICES",
        subtitle: "Transform Your Business with AI-Powered Solutions",
        description: "Comprehensive coaching and consulting services designed to unlock your potential and accelerate your success across multiple domains."
      },
      services: [
        {
          title: "Property Management Consulting",
          icon: "🏠",
          description: "Strategic consulting to maximize rental income, optimize operations, and transform property portfolios using data-driven insights and AI technologies.",
          features: [
            "Revenue optimization strategies",
            "Operational efficiency improvements",
            "AI-powered analytics and insights",
            "Market analysis and positioning",
            "Guest experience enhancement",
            "Automated booking management"
          ],
          benefits: [
            "Increase rental income by 40-60%",
            "Reduce operational overhead by 30%",
            "Achieve higher guest satisfaction scores",
            "Streamline property management processes"
          ],
          pricing: "Custom pricing based on portfolio size",
          duration: "3-6 months engagement"
        },
        {
          title: "Digital Marketing Solutions",
          icon: "🚀",
          description: "Comprehensive digital marketing strategies including WordPress website development, SEO optimization, and AI-powered marketing solutions for businesses.",
          features: [
            "WordPress website development",
            "SEO optimization and strategy",
            "AI-powered content creation",
            "Social media marketing",
            "Analytics and performance tracking",
            "Conversion rate optimization"
          ],
          benefits: [
            "Increase online visibility by 200%+",
            "Generate more qualified leads",
            "Improve search engine rankings",
            "Build strong digital presence"
          ],
          pricing: "Starting from €2,500",
          duration: "2-4 months project timeline"
        },
        {
          title: "Multilingual Coaching",
          icon: "🗣️",
          description: "Personalized coaching in Italian, English, Norwegian, and French. Helping businesses and individuals unlock their potential through tailored guidance and cultural insights.",
          features: [
            "Cross-cultural communication training",
            "Language learning acceleration",
            "International business etiquette",
            "Cultural adaptation strategies",
            "Professional presentation skills",
            "Global networking techniques"
          ],
          benefits: [
            "Expand into international markets",
            "Improve cross-cultural communication",
            "Build global professional networks",
            "Increase cultural competency"
          ],
          pricing: "€150-300 per session",
          duration: "Flexible scheduling"
        }
      ],
      packages: {
        title: "Coaching Packages",
        subtitle: "Choose the perfect package for your transformation journey",
        items: [
          {
            name: "Starter",
            price: "€297",
            duration: "1 Month",
            description: "Perfect for individuals starting their transformation journey",
            features: [
              "4 Personalized Coaching Sessions",
              "Basic AI Strategy Toolkit",
              "30-Day Email Support",
              "Goal Setting & Planning",
              "Progress Tracking Tools"
            ],
            popular: false,
            cta: "Get Started"
          },
          {
            name: "Professional",
            price: "€997",
            duration: "2 Months",
            description: "Ideal for professionals and small business owners",
            features: [
              "8 Advanced Coaching Sessions",
              "Comprehensive AI Integration",
              "Unlimited Email Support",
              "Monthly Progress Review",
              "Custom Strategy Development",
              "Resource Library Access",
              "Priority Scheduling"
            ],
            popular: true,
            cta: "Most Popular"
          },
          {
            name: "Elite Transformation",
            price: "€1,999",
            duration: "3 Months",
            description: "Complete transformation for serious entrepreneurs",
            features: [
              "Unlimited Coaching Sessions",
              "Full AI Ecosystem Access",
              "Personal AI Assistant Setup",
              "Quarterly Strategic Planning",
              "Priority Email & Call Support",
              "Custom Tool Development",
              "Network Introduction",
              "Success Guarantee"
            ],
            popular: false,
            cta: "Transform Now"
          }
        ]
      },
      process: {
        title: "How It Works",
        steps: [
          {
            number: "01",
            title: "Discovery Call",
            description: "We start with a comprehensive consultation to understand your goals, challenges, and current situation.",
            icon: "🎯"
          },
          {
            number: "02",
            title: "Strategy Development",
            description: "I create a personalized strategy tailored to your specific needs and objectives using AI-powered insights.",
            icon: "📋"
          },
          {
            number: "03",
            title: "Implementation",
            description: "Together, we execute the strategy with regular coaching sessions, tools, and continuous support.",
            icon: "⚡"
          },
          {
            number: "04",
            title: "Optimization",
            description: "We continuously monitor progress and optimize the approach to ensure maximum results and success.",
            icon: "📈"
          }
        ]
      },
      specializations: {
        title: "Specialized Services",
        items: [
          {
            title: "AI Integration for Businesses",
            description: "Help businesses integrate AI tools and automation to improve efficiency and reduce costs.",
            icon: "🤖"
          },
          {
            title: "International Expansion Consulting",
            description: "Guide businesses through international expansion with cultural insights and market strategies.",
            icon: "🌍"
          },
          {
            title: "Educational Institution Consulting",
            description: "Transform educational institutions with modern teaching methods and technology integration.",
            icon: "📚"
          },
          {
            title: "Heritage Language Preservation",
            description: "Help individuals and communities preserve and revitalize their cultural and linguistic heritage.",
            icon: "🏛️"
          }
        ]
      }
    },
    it: {
      hero: {
        title: "SERVIZI",
        subtitle: "Trasforma il Tuo Business con Soluzioni Potenziate dall'IA",
        description: "Servizi completi di coaching e consulenza progettati per sbloccare il tuo potenziale e accelerare il tuo successo in molteplici domini."
      },
      packages: {
        title: "Pacchetti Coaching",
        subtitle: "Scegli il pacchetto perfetto per il tuo percorso di trasformazione",
        items: [
          {
            name: "Starter",
            price: "€297",
            duration: "1 Mese",
            description: "Perfetto per individui che iniziano il loro percorso di trasformazione",
            features: [
              "4 Sessioni di Coaching Personalizzate",
              "Toolkit IA Base",
              "Supporto Email 30 Giorni",
              "Definizione Obiettivi e Pianificazione",
              "Strumenti di Monitoraggio Progressi"
            ],
            popular: false,
            cta: "Inizia Ora"
          },
          {
            name: "Professional",
            price: "€997",
            duration: "2 Mesi",
            description: "Ideale per professionisti e piccoli imprenditori",
            features: [
              "8 Sessioni di Coaching Avanzate",
              "Integrazione IA Completa",
              "Supporto Email Illimitato",
              "Revisione Mensile Progressi",
              "Sviluppo Strategia Personalizzata",
              "Accesso Libreria Risorse",
              "Programmazione Prioritaria"
            ],
            popular: true,
            cta: "Più Popolare"
          },
          {
            name: "Elite Transformation",
            price: "€1,999",
            duration: "3 Mesi",
            description: "Trasformazione completa per imprenditori seri",
            features: [
              "Sessioni di Coaching Illimitate",
              "Accesso Ecosistema IA Completo",
              "Configurazione Assistente IA Personale",
              "Pianificazione Strategica Trimestrale",
              "Supporto Email e Chiamate Prioritario",
              "Sviluppo Strumenti Personalizzati",
              "Introduzioni Network",
              "Garanzia di Successo"
            ],
            popular: false,
            cta: "Trasforma Ora"
          }
        ]
      }
    },
    no: {
      hero: {
        title: "TJENESTER",
        subtitle: "Transformer Din Virksomhet med AI-Drevne Løsninger",
        description: "Omfattende coaching- og konsulenttjenester designet for å låse opp ditt potensial og akselerere din suksess på tvers av flere domener."
      },
      packages: {
        title: "Coaching Pakker",
        subtitle: "Velg den perfekte pakken for din transformasjonsreise",
        items: [
          {
            name: "Starter",
            price: "€297",
            duration: "1 Måned",
            description: "Perfekt for individer som starter sin transformasjonsreise",
            features: [
              "4 Personlige Coaching Økter",
              "Grunnleggende AI Verktøysett",
              "30-Dagers E-post Støtte",
              "Målsetting og Planlegging",
              "Fremgangsverktøy"
            ],
            popular: false,
            cta: "Kom i Gang"
          },
          {
            name: "Professional",
            price: "€997",
            duration: "2 Måneder",
            description: "Ideell for profesjonelle og små bedriftseiere",
            features: [
              "8 Avanserte Coaching Økter",
              "Omfattende AI Integrasjon",
              "Ubegrenset E-post Støtte",
              "Månedlig Fremgangsgjennomgang",
              "Tilpasset Strategiutvikling",
              "Ressursbibliotek Tilgang",
              "Prioritert Planlegging"
            ],
            popular: true,
            cta: "Mest Populær"
          },
          {
            name: "Elite Transformation",
            price: "€1,999",
            duration: "3 Måneder",
            description: "Komplett transformasjon for seriøse entreprenører",
            features: [
              "Ubegrensede Coaching Økter",
              "Full AI Økosystem Tilgang",
              "Personlig AI Assistent Oppsett",
              "Kvartalsvis Strategisk Planlegging",
              "Prioritert E-post og Telefonstøtte",
              "Tilpasset Verktøyutvikling",
              "Nettverksintroduksjon",
              "Suksessgaranti"
            ],
            popular: false,
            cta: "Transformer Nå"
          }
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

      {/* Services Overview */}
      {currentContent.services && (
        <section className="py-20 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Core Services
              </h2>
              <p className="text-xl text-gray-400">
                Comprehensive solutions tailored to your specific needs
              </p>
            </motion.div>

            <div className="space-y-16">
              {currentContent.services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                  }`}
                >
                  {/* Content */}
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className="flex items-center mb-6">
                      <span className="text-4xl mr-4">{service.icon}</span>
                      <h3 className="text-3xl font-bold text-white">{service.title}</h3>
                    </div>
                    
                    <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="mb-8">
                      <h4 className="text-xl font-semibold text-white mb-4">What's Included:</h4>
                      <div className="grid md:grid-cols-2 gap-3">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-gray-300">
                            <Check className="w-4 h-4 text-yellow-400 mr-3 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Benefits */}
                    <div className="mb-8">
                      <h4 className="text-xl font-semibold text-white mb-4">Expected Results:</h4>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-gray-300">
                            <Target className="w-4 h-4 text-yellow-400 mr-3 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Pricing & Duration */}
                    <div className="flex flex-col sm:flex-row gap-4 mb-8">
                      <div className="bg-gray-800 p-4 rounded-lg flex-1">
                        <div className="text-yellow-400 font-semibold mb-1">Investment</div>
                        <div className="text-white font-bold">{service.pricing}</div>
                      </div>
                      <div className="bg-gray-800 p-4 rounded-lg flex-1">
                        <div className="text-yellow-400 font-semibold mb-1">Timeline</div>
                        <div className="text-white font-bold">{service.duration}</div>
                      </div>
                    </div>

                    <Button 
                      asChild
                      className="bg-yellow-400 text-black hover:bg-yellow-300 font-semibold"
                    >
                      <a href="https://mondosol.com/coaching" target="_blank" rel="noopener noreferrer">
                        Get Started
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </a>
                    </Button>
                  </div>

                  {/* Visual */}
                  <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                    <div className="relative">
                      <div className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center border border-gray-700">
                        <div className="text-center">
                          <div className="text-8xl mb-4">{service.icon}</div>
                          <p className="text-gray-400 text-xl font-medium">
                            {service.title}
                          </p>
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-yellow-400/5 rounded-2xl blur-xl"></div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Coaching Packages */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {currentContent.packages.title}
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
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
                      {pkg.cta}
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                  <div className="text-4xl font-bold text-yellow-400 mb-2">{pkg.price}</div>
                  <div className="text-gray-400 mb-4">{pkg.duration}</div>
                  <p className="text-gray-300 text-sm">{pkg.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <Check className="w-4 h-4 text-yellow-400 mr-3 flex-shrink-0" />
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
                    {pkg.popular ? pkg.cta : `Choose ${pkg.name}`}
                  </a>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      {currentContent.process && (
        <section className="py-20 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {currentContent.process.title}
              </h2>
              <p className="text-xl text-gray-400">
                A proven methodology for achieving breakthrough results
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {currentContent.process.steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="text-center"
                >
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold text-xl mx-auto mb-4">
                      {step.number}
                    </div>
                    <div className="text-4xl">{step.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Specializations */}
      {currentContent.specializations && (
        <section className="py-20 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {currentContent.specializations.title}
              </h2>
              <p className="text-xl text-gray-400">
                Unique expertise in niche areas
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {currentContent.specializations.items.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-gray-900 p-8 rounded-xl hover:bg-gray-800 transition-all duration-300 group"
                >
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-4">{item.icon}</span>
                    <h3 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-400 to-yellow-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-black/80 mb-8 max-w-2xl mx-auto">
              Book a free consultation to discuss your goals and discover how my services can help you achieve breakthrough results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                size="lg"
                className="bg-black text-yellow-400 hover:bg-gray-900 font-semibold text-lg px-8 py-6"
              >
                <a href="https://mondosol.com/coaching" target="_blank" rel="noopener noreferrer">
                  Book Free Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              
              <Button 
                asChild
                variant="outline"
                size="lg"
                className="border-black text-black hover:bg-black hover:text-yellow-400 font-semibold text-lg px-8 py-6"
              >
                <a href="/contact">
                  Get Custom Quote
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Services
