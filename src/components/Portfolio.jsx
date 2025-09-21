import { motion } from 'framer-motion'
import { ExternalLink, TrendingUp, Users, Award, Globe } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Portfolio = ({ language }) => {
  const content = {
    en: {
      hero: {
        title: "PORTFOLIO",
        subtitle: "Proven Results Across Multiple Industries",
        description: "From property management to digital transformation, explore the projects that showcase my expertise and the tangible results achieved for clients."
      },
      projects: [
        {
          title: "Airbnb Management Empire",
          category: "Property Management",
          description: "Built and managed 250+ short-term rental listings across Italy, achieving Top 3 national ranking on Airbnb platform.",
          results: [
            "€150k+ annual revenue generated",
            "Top 3 national ranking in Italy",
            "250+ properties successfully managed",
            "Industry recognition as top influencer"
          ],
          metrics: {
            revenue: "€150k+",
            properties: "250+",
            ranking: "Top 3",
            years: "10+"
          },
          image: "property",
          technologies: ["Data Analytics", "Revenue Optimization", "Customer Service", "Market Analysis"]
        },
        {
          title: "Digital Marketing Transformation",
          category: "Digital Solutions",
          description: "Developed comprehensive digital strategies for 50+ businesses across multiple industries, focusing on WordPress development and SEO optimization.",
          results: [
            "50+ businesses transformed digitally",
            "Significant increase in online presence",
            "Custom WordPress solutions delivered",
            "SEO rankings improved dramatically"
          ],
          metrics: {
            clients: "50+",
            industries: "10+",
            growth: "200%+",
            satisfaction: "98%"
          },
          image: "digital",
          technologies: ["WordPress", "SEO", "Digital Marketing", "AI Integration"]
        },
        {
          title: "Educational Leadership Consulting",
          category: "Education & Training",
          description: "Consulted and transformed educational institutions through AI integration and strategic coaching across Italy and Norway.",
          results: [
            "15+ educational institutions served",
            "AI integration successfully implemented",
            "Teacher training programs developed",
            "International education standards achieved"
          ],
          metrics: {
            institutions: "15+",
            teachers: "300+",
            countries: "3",
            years: "14+"
          },
          image: "education",
          technologies: ["AI Integration", "Curriculum Development", "Teacher Training", "Strategic Planning"]
        },
        {
          title: "Pet Sitter Website Development",
          category: "Local Business Growth",
          description: "Modern website upgrade for Eugenio's pet sitting service in Milan, resulting in significant business growth and online visibility.",
          results: [
            "200% increase in bookings",
            "Modern bilingual website (Italian/English)",
            "Enhanced online presence",
            "Streamlined booking process"
          ],
          metrics: {
            bookings: "+200%",
            languages: "2",
            visibility: "+150%",
            conversion: "+180%"
          },
          image: "petsitter",
          technologies: ["WordPress", "Multilingual SEO", "Booking System", "Local Marketing"]
        },
        {
          title: "Physiotherapy Clinic Digital Makeover",
          category: "Healthcare Digital Transformation",
          description: "Complete digital transformation for healthcare practice using AI and digital solutions to improve patient experience and operational efficiency.",
          results: [
            "40% increase in new patients",
            "65% reduction in no-shows",
            "AI-powered appointment system",
            "Enhanced patient communication"
          ],
          metrics: {
            patients: "+40%",
            efficiency: "+65%",
            satisfaction: "95%",
            automation: "80%"
          },
          image: "healthcare",
          technologies: ["AI Automation", "Patient Management", "Digital Health", "Communication Systems"]
        },
        {
          title: "Mondosol Coaching Platform",
          category: "AI-Powered Coaching",
          description: "Built comprehensive coaching platform integrating 12 AI virtual assistants to provide personalized coaching in 4 languages.",
          results: [
            "12 AI assistants successfully integrated",
            "Multilingual coaching in 4 languages",
            "Personalized transformation programs",
            "Global client base established"
          ],
          metrics: {
            assistants: "12",
            languages: "4",
            clients: "100+",
            success: "92%"
          },
          image: "coaching",
          technologies: ["AI Integration", "Machine Learning", "Multilingual NLP", "Coaching Methodologies"]
        }
      ],
      skills: {
        title: "Core Competencies",
        categories: [
          {
            name: "Property Management",
            skills: ["Revenue Optimization", "Market Analysis", "Customer Service", "Operations Management"],
            level: 95
          },
          {
            name: "Digital Marketing",
            skills: ["WordPress Development", "SEO Optimization", "Content Strategy", "Analytics"],
            level: 90
          },
          {
            name: "AI Integration",
            skills: ["Machine Learning", "Automation", "Data Analysis", "Process Optimization"],
            level: 88
          },
          {
            name: "Multilingual Coaching",
            skills: ["Cross-cultural Communication", "Language Training", "Personal Development", "Business Coaching"],
            level: 92
          }
        ]
      }
    },
    it: {
      hero: {
        title: "PORTFOLIO",
        subtitle: "Risultati Comprovati in Molteplici Settori",
        description: "Dalla gestione immobiliare alla trasformazione digitale, esplora i progetti che dimostrano la mia competenza e i risultati tangibili ottenuti per i clienti."
      },
      projects: [
        {
          title: "Impero Gestione Airbnb",
          category: "Gestione Immobiliare",
          description: "Costruito e gestito 250+ annunci di affitti brevi in tutta Italia, raggiungendo il Top 3 della classifica nazionale su Airbnb.",
          results: [
            "€150k+ di fatturato annuale generato",
            "Top 3 classifica nazionale in Italia",
            "250+ proprietà gestite con successo",
            "Riconoscimento come top influencer del settore"
          ],
          metrics: {
            revenue: "€150k+",
            properties: "250+",
            ranking: "Top 3",
            years: "10+"
          },
          image: "property",
          technologies: ["Analisi Dati", "Ottimizzazione Ricavi", "Servizio Clienti", "Analisi di Mercato"]
        },
        {
          title: "Trasformazione Marketing Digitale",
          category: "Soluzioni Digitali",
          description: "Sviluppato strategie digitali complete per 50+ aziende in molteplici settori, concentrandosi su sviluppo WordPress e ottimizzazione SEO.",
          results: [
            "50+ aziende trasformate digitalmente",
            "Significativo aumento della presenza online",
            "Soluzioni WordPress personalizzate consegnate",
            "Ranking SEO migliorati drasticamente"
          ],
          metrics: {
            clients: "50+",
            industries: "10+",
            growth: "200%+",
            satisfaction: "98%"
          },
          image: "digital",
          technologies: ["WordPress", "SEO", "Marketing Digitale", "Integrazione IA"]
        }
      ],
      skills: {
        title: "Competenze Principali",
        categories: [
          {
            name: "Gestione Immobiliare",
            skills: ["Ottimizzazione Ricavi", "Analisi di Mercato", "Servizio Clienti", "Gestione Operazioni"],
            level: 95
          },
          {
            name: "Marketing Digitale",
            skills: ["Sviluppo WordPress", "Ottimizzazione SEO", "Strategia Contenuti", "Analytics"],
            level: 90
          },
          {
            name: "Integrazione IA",
            skills: ["Machine Learning", "Automazione", "Analisi Dati", "Ottimizzazione Processi"],
            level: 88
          },
          {
            name: "Coaching Multilingue",
            skills: ["Comunicazione Interculturale", "Formazione Linguistica", "Sviluppo Personale", "Business Coaching"],
            level: 92
          }
        ]
      }
    },
    no: {
      hero: {
        title: "PORTFOLIO",
        subtitle: "Dokumenterte Resultater På Tvers av Flere Bransjer",
        description: "Fra eiendomsforvaltning til digital transformasjon, utforsk prosjektene som viser min ekspertise og de konkrete resultatene oppnådd for klienter."
      },
      projects: [
        {
          title: "Airbnb Forvaltningsimperium",
          category: "Eiendomsforvaltning",
          description: "Bygget og forvaltet 250+ korttidsutleie annonser over hele Italia, oppnådde Top 3 nasjonal rangering på Airbnb-plattformen.",
          results: [
            "€150k+ årlig inntekt generert",
            "Top 3 nasjonal rangering i Italia",
            "250+ eiendommer vellykket forvaltet",
            "Bransjeanerkjennelse som topp influencer"
          ],
          metrics: {
            revenue: "€150k+",
            properties: "250+",
            ranking: "Topp 3",
            years: "10+"
          },
          image: "property",
          technologies: ["Dataanalyse", "Inntektsoptimalisering", "Kundeservice", "Markedsanalyse"]
        }
      ],
      skills: {
        title: "Kjernekompetanser",
        categories: [
          {
            name: "Eiendomsforvaltning",
            skills: ["Inntektsoptimalisering", "Markedsanalyse", "Kundeservice", "Driftsledelse"],
            level: 95
          },
          {
            name: "Digital Markedsføring",
            skills: ["WordPress Utvikling", "SEO Optimalisering", "Innholdsstrategi", "Analyse"],
            level: 90
          },
          {
            name: "AI Integrasjon",
            skills: ["Maskinlæring", "Automatisering", "Dataanalyse", "Prosessoptimalisering"],
            level: 88
          },
          {
            name: "Flerspråklig Coaching",
            skills: ["Tverrkulturell Kommunikasjon", "Språktrening", "Personlig Utvikling", "Business Coaching"],
            level: 92
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

      {/* Projects Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {currentContent.projects.map((project, index) => (
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
                  <div className="mb-4">
                    <span className="text-yellow-400 text-sm font-semibold uppercase tracking-wide">
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    {project.title}
                  </h3>
                  
                  <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    {Object.entries(project.metrics).map(([key, value]) => (
                      <div key={key} className="text-center p-4 bg-gray-900 rounded-lg">
                        <div className="text-2xl font-bold text-yellow-400 mb-1">
                          {value}
                        </div>
                        <div className="text-xs text-gray-400 capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Results */}
                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-white mb-4">Key Results</h4>
                    <ul className="space-y-2">
                      {project.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-center text-gray-300">
                          <Award className="w-4 h-4 text-yellow-400 mr-3 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-4">Technologies & Methods</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-yellow-400/10 text-yellow-400 rounded-full text-sm border border-yellow-400/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Image Placeholder */}
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="relative">
                    <div className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center border border-gray-700">
                      <div className="text-center">
                        <div className="text-6xl mb-4">
                          {project.category.includes('Property') ? '🏠' :
                           project.category.includes('Digital') ? '🚀' :
                           project.category.includes('Education') ? '📚' :
                           project.category.includes('Pet') ? '🐕' :
                           project.category.includes('Healthcare') ? '🏥' : '🤖'}
                        </div>
                        <p className="text-gray-400 text-lg font-medium">
                          {project.category}
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

      {/* Skills Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {currentContent.skills.title}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {currentContent.skills.categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-gray-800 p-8 rounded-xl"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-white">{category.name}</h3>
                  <span className="text-yellow-400 font-bold text-xl">{category.level}%</span>
                </div>
                
                <div className="mb-6">
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${category.level}%` }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                      className="bg-gradient-to-r from-yellow-400 to-yellow-500 h-3 rounded-full"
                    ></motion.div>
                  </div>
                </div>

                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                      {skill}
                    </div>
                  ))}
                </div>
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
              Ready to Achieve Similar Results?
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Let's discuss how my proven methodologies and expertise can help transform your business and achieve breakthrough results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                size="lg"
                className="bg-yellow-400 text-black hover:bg-yellow-300 font-semibold text-lg px-8 py-6"
              >
                <a href="https://mondosol.com/coaching" target="_blank" rel="noopener noreferrer">
                  Start Your Project
                </a>
              </Button>
              
              <Button 
                asChild
                variant="outline"
                size="lg"
                className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black font-semibold text-lg px-8 py-6"
              >
                <a href="/contact">
                  Discuss Your Needs
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Portfolio
