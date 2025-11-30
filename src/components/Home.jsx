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
        description: 'Education Specialist, Property Management Expert, and Multilingual Coach helping businesses scale across Europe.',
        cta: 'DISCOVER MY WORK',
        scroll: 'SCROLL'
      },
      about: {
        title: 'TRANSFORMING BUSINESSES THROUGH',
        highlight: 'EDUCATION & INNOVATION',
        description: 'With over 15 years of experience across 6 countries, I help entrepreneurs and businesses achieve extraordinary results through strategic education, multilingual marketing, and property management expertise.',
        cta: 'LEARN MORE'
      },
      services: {
        title: 'WHAT I DO',
        items: [
          { title: 'EDUCATION & COACHING', desc: 'Empowering individuals and teams with transformative learning experiences in 4 languages.' },
          { title: 'PROPERTY MANAGEMENT', desc: 'Managing 250+ properties with €150K+ revenue. Top 3 Airbnb host expertise.' },
          { title: 'MULTILINGUAL MARKETING', desc: 'SEO, copywriting, and digital strategies across European markets.' }
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
          { year: '1992', title: 'BORN', location: 'Sicily, Italy', desc: 'Born to a multicultural family.', image: timelineImg1 },
          { year: '2010', title: 'EDUCATION', location: 'Europe', desc: 'Studied across multiple countries.', image: timelineImg2 },
          { year: '2015', title: 'FIRST BUSINESS', location: 'Norway', desc: 'Launched property management company.', image: timelineImg3 },
          { year: '2025', title: 'AUTHOR & SPEAKER', location: 'International', desc: 'Published books and speaking globally.' }
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
    }
  }

  const t = content[language] || content.en

  return (
    <div className="min-h-screen bg-black text-white">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="text-[20vw] md:text-[25vw] font-black text-yellow-400 leading-none tracking-tighter"
            style={{ fontFamily: 'Impact, Arial Black, sans-serif' }}
          >
            {t.hero.name}
          </motion.h1>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center mt-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              {t.hero.name} {t.hero.subtitle};{' '}
              {t.hero.roles.map((role, index) => (
                <span key={index}>
                  {index > 0 && ', '}
                  <span className="text-yellow-400">{role}</span>
                </span>
              ))}
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              {t.hero.description}
            </p>
            <Link to="/about">
              <Button size="lg" className="bg-yellow-400 text-black hover:bg-yellow-300 font-bold text-lg px-8 py-6 group">
                {t.hero.cta}
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative"
          >
            <div className="aspect-[3/4] rounded-2xl overflow-hidden">
              <img src={heroImage} alt="Elio Mondello Anzà" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 z-20">
          <span className="text-sm tracking-widest text-yellow-400">{t.hero.scroll}</span>
          <ChevronDown className="animate-bounce text-yellow-400" />
        </div>
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
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
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
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
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
