import { useState } from 'react'
import { motion } from 'framer-motion'

// Timeline images
import timelineImg1 from '../assets/IMG_20220610_125357490_HDR_PORTRAIT.jpg'
import timelineImg2 from '../assets/IMG_20230917_191400957_HDR-EDIT.jpg'
import timelineImg3 from '../assets/IMG_20240611_162138568_HDR.jpg'
import heroImage from '../assets/IMG_20250706_154109459_HDR_PORTRAIT.jpg'

const About = ({ language = 'en' }) => {
  const [activeYear, setActiveYear] = useState(null)

  const content = {
    en: {
      hero: {
        title: 'ABOUT',
        subtitle: 'ELIO',
        tagline: 'FROM ABBIATEGRASSO TO THE WORLD',
        description: 'A journey of transformation, innovation, and impact across 6 countries, 47 years, and multiple industries.'
      },
      story: {
        title: 'MY STORY',
        paragraphs: [
          'Born in Abbiategrasso, Milan in 1978, I grew up in a multicultural family that shaped my global perspective from an early age. My journey has taken me across Europe and beyond, building bridges between cultures, languages, and industries.',
          'From studying Public Administration at Sciences Po Grenoble through the Erasmus program to building educational platforms across Italy and Norway, each chapter of my life has been driven by a passion for learning, teaching, and empowering others.',
          'Today, I help entrepreneurs and businesses scale through education, multilingual marketing, and property management expertise. With 15+ years of experience, Top 3 Airbnb ranking in Italy, and coaching clients across 5 languages, I bridge cultures and industries to create extraordinary results.'
        ]
      },
      timeline: {
        title: 'MY JOURNEY',
        subtitle: 'From humble beginnings to international impact',
        events: [
          {
            year: '1978',
            title: 'BORN IN ABBIATEGRASSO',
            location: 'Milan, Italy',
            description: 'Born into a multicultural family in the heart of Lombardy. Early exposure to different cultures and languages shaped my worldview and passion for international connections.',
            image: timelineImg1,
            category: 'ORIGINS'
          },
          {
            year: '1992-1997',
            title: 'LICEO SCIENTIFICO BLAISE PASCAL',
            location: 'Milan, Italy',
            description: 'High School Diploma in Science and Computers. Director of the School Magazine "Target", developing early leadership and communication skills.',
            category: 'EDUCATION'
          },
          {
            year: '1997-1998',
            title: 'CDM JOURNALISM SCHOOL',
            location: 'Milan, Italy',
            description: 'Journalism Certification at the most important school of journalism in Italy. Organized and attended course with Vice Director Mr. Caporali, developing professional writing skills.',
            category: 'EDUCATION'
          },
          {
            year: '2001-2004',
            title: 'UNIVERSITÀ DEGLI STUDI DI MILANO',
            location: 'Milan, Italy',
            description: 'Bachelor of Arts (B.A.) in Communication and Media, Grade 95/110. Online university magazine internship, web design course, dissertation in Italian and French on "European media".',
            image: timelineImg2,
            category: 'EDUCATION'
          },
          {
            year: '2002-2003',
            title: 'CRAZY COLOR FOUNDATION',
            location: 'Italy',
            description: 'Event Manager Certificate. Internship as DJ and entertainer in the 4th biggest holiday resort in Italy, gaining experience in entertainment and event management.',
            category: 'EXPERIENCE'
          },
          {
            year: '2003-2004',
            title: 'ERASMUS AT SCIENCES PO GRENOBLE',
            location: 'Grenoble, France',
            description: 'Public Administration degree through European Union Exchange Program (Erasmus). Worked as community event manager, inspired mixed culture by creating social events with cooking classes, music and engaging opportunities for all students.',
            image: timelineImg3,
            category: 'EDUCATION'
          },
          {
            year: '2005',
            title: 'EUROPEAN MEDIA DISSERTATION',
            location: 'Italy',
            description: 'Published "A European Medium for a European Public Opinion" on Tesionline. Dissertation about European media, public opinion, and media influence on European integration.',
            category: 'PUBLICATIONS'
          },
          {
            year: '2005-2006',
            title: 'MASTER IN PROJECT MANAGEMENT',
            location: 'Milan, Italy',
            description: 'Master of Arts (M.A.) in Project Management at Università degli Studi di Milano. Internship in ISTUD business school, developing technical proficiency in project management.',
            category: 'EDUCATION'
          },
          {
            year: '2008',
            title: 'FOUNDED MONDOSOL',
            location: 'Italy & Norway',
            description: 'Founded Mondosol, a language school and cultural organization helping businesses scale across Europe through multilingual education, marketing, and business consulting.',
            category: 'ENTREPRENEURSHIP'
          },
          {
            year: '2010-2011',
            title: 'INTERNET MARKETING CAMPAIGN',
            location: 'International',
            description: '"Learn a Language with Mondello" - Video, article, podcast campaign optimized for search engines. Training with top American internet marketing company "Traffic Keyser".',
            category: 'MARKETING'
          },
          {
            year: '2011',
            title: 'FIRST BUSINESS IN ITALY',
            location: 'Italy',
            description: 'Launched first entrepreneurial venture in Italy, combining education, consulting, and digital marketing services for small businesses and entrepreneurs.',
            category: 'ENTREPRENEURSHIP'
          },
          {
            year: '2012',
            title: 'PUBLISHED "HOW TO CREATE AND MARKET A WEBSITE"',
            location: 'International',
            description: 'Released comprehensive guide on www.eliomondello.com covering 5 marketing tips, utilizing internet for leads, new media revolution, and mobile media strategies.',
            category: 'PUBLICATIONS'
          },
          {
            year: '2012-2013',
            title: 'ITALIAN NORWEGIAN CHAMBER OF COMMERCE WEBSITE',
            location: 'Oslo, Norway',
            description: 'Led team of experts (graphic designer, project manager, copy writer, programmer) to create new website for Italian Norwegian Chamber of Commerce in Oslo.',
            category: 'PROJECTS'
          },
          {
            year: '2013-PRESENT',
            title: 'NORWEGIAN LANGUAGE BLOG',
            location: 'Hønefoss, Norway',
            description: 'Created WordPress blog for Læringssenter in Ringerike with elegant theme and interactive communication between school, teachers and students in multiple languages.',
            category: 'PROJECTS'
          },
          {
            year: '2014',
            title: 'PROPERTY MANAGEMENT COMPANY',
            location: 'Italy & Norway',
            description: 'Launched property management business across Italy and Norway. Eventually became Top 3 Airbnb host in Italy, managing properties and helping hosts optimize their listings.',
            category: 'ENTREPRENEURSHIP'
          },
          {
            year: '2014',
            title: 'PUBLISHED "IMAGINE YOUR DREAM"',
            location: 'Amazon',
            description: 'Released "Imagine Your Dream" on Amazon - a book about core principles and rock-solid strategies for implementing change and achieving success.',
            category: 'PUBLICATIONS'
          },
          {
            year: '2019',
            title: 'SPEAKER IN LONDON',
            location: 'London, UK',
            description: 'First major speaking engagement in London as invited host. Shared insights on entrepreneurship, multilingual marketing, and scaling businesses across Europe.',
            category: 'SPEAKING'
          },
          {
            year: '2024-PRESENT',
            title: 'THIERRY FEUERBACHER BARNEHAGE',
            location: 'Thierry Feuerbacher, Norway',
            description: 'Teacher and educator at kindergarten/preschool, combining education expertise with multicultural experience to inspire young learners.',
            category: 'EDUCATION'
          },
          {
            year: '2024-PRESENT',
            title: 'SCHULSTAD-OGBU PSYCHIATRIC CENTER',
            location: 'Thierry Feuerbacher, Norway',
            description: 'Staff member at psychiatric center, applying communication and cultural integration skills to support mental health and wellbeing.',
            category: 'HEALTHCARE'
          },
          {
            year: '2025',
            title: 'INTERNATIONAL CONSULTANT & EDUCATOR',
            location: 'Europe',
            description: 'Continuing to help businesses scale through property management, multilingual marketing, education consulting, and speaking engagements across Europe.',
            category: 'PRESENT'
          }
        ]
      },
      skills: {
        title: 'EXPERTISE',
        categories: [
          {
            name: 'Languages',
            items: ['English (Native)', 'Italian (Native)', 'French (Professional)', 'Norwegian (Working)', 'Spanish (Limited)']
          },
          {
            name: 'Business',
            items: ['Property Management', 'Airbnb Optimization', 'Business Consulting', 'Multilingual Marketing', 'SEO & Copywriting']
          },
          {
            name: 'Education',
            items: ['Teaching & Training', 'Curriculum Development', 'Online Learning', 'Cultural Integration', 'Public Speaking']
          },
          {
            name: 'Digital',
            items: ['Web Development', 'Content Management', 'Social Media Marketing', 'Google Analytics', 'WordPress']
          }
        ]
      }
    },
    it: {
      hero: {
        title: 'CHI SONO',
        subtitle: 'ELIO',
        tagline: 'DA ABBIATEGRASSO AL MONDO',
        description: 'Un viaggio di trasformazione, innovazione e impatto attraverso 6 paesi, 47 anni e molteplici settori.'
      },
      story: {
        title: 'LA MIA STORIA',
        paragraphs: [
          'Nato ad Abbiategrasso, Milano nel 1978, sono cresciuto in una famiglia multiculturale che ha plasmato la mia prospettiva globale fin dalla giovane età. Il mio viaggio mi ha portato attraverso l\'Europa e oltre, costruendo ponti tra culture, lingue e industrie.',
          'Dallo studio di Amministrazione Pubblica a Sciences Po Grenoble attraverso il programma Erasmus alla costruzione di piattaforme educative in Italia e Norvegia, ogni capitolo della mia vita è stato guidato da una passione per l\'apprendimento, l\'insegnamento e l\'empowerment degli altri.',
          'Oggi aiuto imprenditori e aziende a crescere attraverso educazione, marketing multilingue ed esperienza nella gestione immobiliare. Con oltre 15 anni di esperienza, ranking Top 3 Airbnb in Italia e clienti in 5 lingue, collego culture e industrie per creare risultati straordinari.'
        ]
      },
      timeline: {
        title: 'IL MIO PERCORSO',
        subtitle: 'Dalle umili origini all\'impatto internazionale',
        events: content.en.timeline.events.map(event => ({
          ...event,
          // Italian translations would go here
        }))
      },
      skills: {
        title: 'COMPETENZE',
        categories: content.en.skills.categories
      }
    },
    no: {
      hero: {
        title: 'OM MEG',
        subtitle: 'ELIO',
        tagline: 'FRA ABBIATEGRASSO TIL VERDEN',
        description: 'En reise av transformasjon, innovasjon og påvirkning gjennom 6 land, 47 år og flere bransjer.'
      },
      story: {
        title: 'MIN HISTORIE',
        paragraphs: [
          'Født i Abbiategrasso, Milano i 1978, vokste jeg opp i en multikulturell familie som formet mitt globale perspektiv fra en tidlig alder. Min reise har tatt meg gjennom Europa og utover, og bygget broer mellom kulturer, språk og bransjer.',
          'Fra å studere offentlig administrasjon ved Sciences Po Grenoble gjennom Erasmus-programmet til å bygge utdanningsplattformer i Italia og Norge, har hvert kapittel i livet mitt vært drevet av en lidenskap for læring, undervisning og myndiggjøring av andre.',
          'I dag hjelper jeg gründere og bedrifter med å skalere gjennom utdanning, flerspråklig markedsføring og eiendomsforvaltningsekspertise. Med 15+ års erfaring, Top 3 Airbnb-rangering i Italia og klienter på 5 språk, bygger jeg broer mellom kulturer og bransjer for å skape ekstraordinære resultater.'
        ]
      },
      timeline: {
        title: 'MIN REISE',
        subtitle: 'Fra ydmyke begynnelser til internasjonal påvirkning',
        events: content.en.timeline.events.map(event => ({
          ...event,
          // Norwegian translations would go here
        }))
      },
      skills: {
        title: 'EKSPERTISE',
        categories: content.en.skills.categories
      }
    }
  }

  const t = content[language]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
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
            className="text-6xl md:text-8xl lg:text-9xl font-bold mb-4"
          >
            {t.hero.subtitle}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-2"
          >
            {t.hero.tagline}
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

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center">
          <p className="text-sm tracking-widest text-gray-400 mb-2">SCROLL</p>
          <div className="w-px h-16 bg-gradient-to-b from-gray-400 to-transparent mx-auto"></div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
        >
          {t.story.title}
        </motion.h2>
        <div className="space-y-6 text-lg md:text-xl text-gray-300 leading-relaxed">
          {t.story.paragraphs.map((paragraph, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              {paragraph}
            </motion.p>
          ))}
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4 md:px-8 bg-zinc-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{t.timeline.title}</h2>
            <p className="text-xl text-gray-400">{t.timeline.subtitle}</p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-yellow-400/30 transform md:-translate-x-1/2"></div>

            {/* Timeline Events */}
            <div className="space-y-12">
              {t.timeline.events.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`relative flex flex-col md:flex-row items-start md:items-center ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Year Circle */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-yellow-400 rounded-full transform -translate-x-1/2 md:translate-x-0"></div>

                  {/* Content */}
                  <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <span className="inline-block px-3 py-1 bg-yellow-400/20 text-yellow-400 text-sm rounded-full mb-2">
                      {event.category}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-2">{event.year}</h3>
                    <h4 className="text-xl md:text-2xl font-bold mb-2">{event.title}</h4>
                    <p className="text-gray-400 mb-2">{event.location}</p>
                    <p className="text-gray-300">{event.description}</p>
                  </div>

                  {/* Image */}
                  {event.image && (
                    <div className={`mt-4 md:mt-0 ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-64 object-cover rounded-lg"
                        style={{ filter: 'none' }}
                      />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
        >
          {t.skills.title}
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.skills.categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-zinc-900 p-6 rounded-lg"
            >
              <h3 className="text-xl font-bold text-yellow-400 mb-4">{category.name}</h3>
              <ul className="space-y-2 text-gray-300">
                {category.items.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-yellow-400 mr-2">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default About
