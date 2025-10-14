import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion, AnimatePresence } from 'framer-motion'

// Import all images
import img1 from '../assets/73f58f9b-1e3f-4484-8811-734a13a7fbc6-IMG_20250709_164428041_HDR_PORTRAIT.jpg'
import img2 from '../assets/IMG_20230917_191400957_HDR-EDIT.jpg'
import img3 from '../assets/IMG_20240611_162138568_HDR.jpg'
import img4 from '../assets/WIN_20201005_22_30_13_Pro-EDIT.jpg'
import img5 from '../assets/9164aa45-760b-43cf-98a7-93bb71e291f7.jpg'
import img6 from '../assets/IMG_20220610_125357490_HDR_PORTRAIT.jpg'

const Home = ({ language }) => {
  const [currentImage, setCurrentImage] = useState(0)
  
  const heroImages = [img1, img2, img3, img4, img5, img6]

  const content = {
    en: {
      hero: {
        firstName: "ELIO",
        lastName: "MONDELLO ANZÀ",
        title: "CONTENT SPECIALIST",
        scroll: "SCROLL"
      },
      cta: {
        primary: "VIEW MY WORK",
        secondary: "CONTACT"
      },
      stats: [
        { number: "250+", label: "PROPERTIES" },
        { number: "€150K+", label: "REVENUE" },
        { number: "TOP 3", label: "AIRBNB" },
        { number: "15+", label: "YEARS" },
        { number: "4", label: "LANGUAGES" }
      ]
    },
    it: {
      hero: {
        firstName: "ELIO",
        lastName: "MONDELLO ANZÀ",
        title: "SPECIALISTA CONTENUTI",
        scroll: "SCORRI"
      },
      cta: {
        primary: "VEDI IL MIO LAVORO",
        secondary: "CONTATTO"
      },
      stats: [
        { number: "250+", label: "PROPRIETÀ" },
        { number: "€150K+", label: "FATTURATO" },
        { number: "TOP 3", label: "AIRBNB" },
        { number: "15+", label: "ANNI" },
        { number: "4", label: "LINGUE" }
      ]
    },
    no: {
      hero: {
        firstName: "ELIO",
        lastName: "MONDELLO ANZÀ",
        title: "INNHOLDSSPESIALIST",
        scroll: "RULL"
      },
      cta: {
        primary: "SE MITT ARBEID",
        secondary: "KONTAKT"
      },
      stats: [
        { number: "250+", label: "EIENDOMMER" },
        { number: "€150K+", label: "INNTEKT" },
        { number: "TOP 3", label: "AIRBNB" },
        { number: "15+", label: "ÅR" },
        { number: "4", label: "SPRÅK" }
      ]
    }
  }

  const currentContent = content[language]

  // Auto-rotate images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [heroImages.length])

  return (
    <div className="min-h-screen bg-black">
      
      {/* HERO SECTION - HUGE IMAGE, MINIMAL TEXT */}
      <section className="relative h-screen flex items-center overflow-hidden">
        
        {/* Text Side - Left 40% */}
        <div className="relative z-10 w-full lg:w-2/5 px-6 lg:px-12 xl:px-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-bold leading-none mb-6">
              <span className="block text-[15vw] lg:text-[8vw] xl:text-[10vw] text-white tracking-tighter">
                {currentContent.hero.firstName}
              </span>
              <span className="block text-[10vw] lg:text-[5vw] xl:text-[6vw] text-yellow-400 tracking-tight">
                {currentContent.hero.lastName}
              </span>
            </h1>
            
            <p className="text-2xl lg:text-3xl xl:text-4xl text-white font-bold mb-10 tracking-wide">
              {currentContent.hero.title}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                asChild
                size="lg"
                className="bg-yellow-400 text-black hover:bg-yellow-300 font-bold text-lg px-8 py-6"
              >
                <Link to="/portfolio">
                  {currentContent.cta.primary}
                </Link>
              </Button>
              
              <Button 
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-black font-bold text-lg px-8 py-6"
              >
                <Link to="/contact">
                  {currentContent.cta.secondary}
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* HUGE IMAGE Side - Right 60% */}
        <div className="absolute lg:relative right-0 top-0 w-full lg:w-3/5 h-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0"
            >
              <img 
                src={heroImages[currentImage]} 
                alt="Elio Mondello"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent lg:via-transparent"></div>
            </motion.div>
          </AnimatePresence>

          {/* Image Indicators */}
          <div className="absolute bottom-10 right-10 flex gap-3 z-20">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`h-3 rounded-full transition-all ${
                  index === currentImage ? 'bg-yellow-400 w-12' : 'bg-white/50 w-3'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center z-20">
          <p className="text-yellow-400 font-bold text-sm mb-2 tracking-widest">{currentContent.hero.scroll}</p>
          <ChevronDown className="w-6 h-6 text-yellow-400 animate-bounce mx-auto" />
        </div>
      </section>

      {/* STATS - Minimal */}
      <section className="py-16 bg-black border-t border-yellow-400/20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {currentContent.stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-yellow-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-white font-bold tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VISUAL SECTION 1 - COPYWRITING */}
      <section className="min-h-screen flex items-center bg-black">
        <div className="w-full">
          <div className="grid lg:grid-cols-2 gap-0 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="p-12 lg:p-20"
            >
              <h2 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white mb-8 leading-none">
                COPY<br/>WRITING
              </h2>
              <Button 
                asChild
                size="lg"
                className="bg-yellow-400 text-black hover:bg-yellow-300 font-bold text-xl px-10 py-6"
              >
                <Link to="/portfolio">
                  SEE WORK
                </Link>
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="h-[600px] lg:h-screen"
            >
              <img 
                src={img2} 
                alt="Copywriting"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* VISUAL SECTION 2 - SEO */}
      <section className="min-h-screen flex items-center bg-black">
        <div className="w-full">
          <div className="grid lg:grid-cols-2 gap-0 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="h-[600px] lg:h-screen order-2 lg:order-1"
            >
              <img 
                src={img3} 
                alt="SEO"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="p-12 lg:p-20 order-1 lg:order-2"
            >
              <h2 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-yellow-400 mb-8 leading-none">
                SEO &<br/>GEO
              </h2>
              <Button 
                asChild
                size="lg"
                className="bg-white text-black hover:bg-gray-200 font-bold text-xl px-10 py-6"
              >
                <Link to="/services">
                  LEARN MORE
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* VISUAL SECTION 3 - MULTILINGUAL */}
      <section className="min-h-screen flex items-center bg-black">
        <div className="w-full">
          <div className="grid lg:grid-cols-2 gap-0 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="p-12 lg:p-20"
            >
              <h2 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white mb-8 leading-none">
                MULTI<br/>LINGUAL
              </h2>
              <Button 
                asChild
                size="lg"
                className="bg-yellow-400 text-black hover:bg-yellow-300 font-bold text-xl px-10 py-6"
              >
                <Link to="/contact">
                  WORK WITH ME
                </Link>
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="h-[600px] lg:h-screen"
            >
              <img 
                src={img4} 
                alt="Multilingual"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src={img5} 
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 text-center px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-7xl md:text-8xl lg:text-9xl font-bold text-white mb-12 leading-none"
          >
            LET'S WORK<br/>
            <span className="text-yellow-400">TOGETHER</span>
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Button 
              asChild
              size="lg"
              className="bg-yellow-400 text-black hover:bg-yellow-300 font-bold text-3xl px-16 py-10"
            >
              <Link to="/contact">
                GET IN TOUCH
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

    </div>
  )
}

export default Home

