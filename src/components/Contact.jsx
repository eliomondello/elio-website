import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Contact = ({ language }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const content = {
    en: {
      hero: {
        title: 'CONTACT',
        subtitle: "LET'S WORK TOGETHER",
        description: 'Ready to transform your business? Get in touch and let\'s create something extraordinary.'
      },
      form: {
        name: 'Your Name',
        email: 'Your Email',
        message: 'Your Message',
        submit: 'SEND MESSAGE',
        success: 'Message sent! I\'ll get back to you soon.'
      },
      info: {
        email: 'eliomondello@mondosol.com',
        location: 'Hønefoss, Norway'
      }
    },
    it: {
      hero: {
        title: 'CONTATTI',
        subtitle: 'LAVORIAMO INSIEME',
        description: 'Pronto a trasformare il tuo business? Mettiti in contatto e creiamo qualcosa di straordinario.'
      },
      form: {
        name: 'Il Tuo Nome',
        email: 'La Tua Email',
        message: 'Il Tuo Messaggio',
        submit: 'INVIA MESSAGGIO',
        success: 'Messaggio inviato! Ti risponderò presto.'
      },
      info: {
        email: 'eliomondello@mondosol.com',
        location: 'Hønefoss, Norvegia'
      }
    },
    no: {
      hero: {
        title: 'KONTAKT',
        subtitle: 'LA OSS JOBBE SAMMEN',
        description: 'Klar til å transformere virksomheten din? Ta kontakt og la oss skape noe ekstraordinært.'
      },
      form: {
        name: 'Ditt Navn',
        email: 'Din E-post',
        message: 'Din Melding',
        submit: 'SEND MELDING',
        success: 'Melding sendt! Jeg kommer tilbake til deg snart.'
      },
      info: {
        email: 'eliomondello@mondosol.com',
        location: 'Hønefoss, Norge'
      }
    }
  }

  const t = content[language]

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate form submission
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', email: '', message: '' })
    }, 3000)
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div className="min-h-screen bg-black text-white pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="text-[15vw] md:text-[20vw] font-black text-yellow-400/10 leading-none"
            style={{ fontFamily: 'Impact, Arial Black, sans-serif' }}
          >
            TALK
          </motion.h1>
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

      {/* Contact Section */}
      <section className="py-32 bg-black">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="border-l-4 border-yellow-400 pl-6">
                <Mail className="w-8 h-8 text-yellow-400 mb-4" />
                <h3 className="text-2xl font-bold mb-2">EMAIL</h3>
                <a
                  href={`mailto:${t.info.email}`}
                  className="text-lg text-gray-300 hover:text-yellow-400 transition-colors"
                >
                  {t.info.email}
                </a>
              </div>

              <div className="border-l-4 border-yellow-400 pl-6">
                <MapPin className="w-8 h-8 text-yellow-400 mb-4" />
                <h3 className="text-2xl font-bold mb-2">LOCATION</h3>
                <p className="text-lg text-gray-300">{t.info.location}</p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {isSubmitted ? (
                <div className="h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">✓</div>
                    <p className="text-2xl font-bold text-yellow-400">
                      {t.form.success}
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={t.form.name}
                      required
                      className="w-full bg-transparent border-2 border-white/20 focus:border-yellow-400 px-6 py-4 text-lg rounded-lg transition-colors outline-none"
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t.form.email}
                      required
                      className="w-full bg-transparent border-2 border-white/20 focus:border-yellow-400 px-6 py-4 text-lg rounded-lg transition-colors outline-none"
                    />
                  </div>

                  <div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={t.form.message}
                      required
                      rows={6}
                      className="w-full bg-transparent border-2 border-white/20 focus:border-yellow-400 px-6 py-4 text-lg rounded-lg transition-colors outline-none resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-yellow-400 text-black hover:bg-yellow-300 font-bold text-lg py-6 group"
                  >
                    {t.form.submit}
                    <Send className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
