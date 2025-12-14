import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Globe } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Navigation = ({ language, setLanguage }) => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navItems = {
    en: [
      { path: '/', label: 'HOME' },
      { path: '/about', label: 'ABOUT' },
      { path: '/speaking', label: 'SPEAKING' },
      { path: '/books', label: 'BOOKS' },
      { path: '/contact', label: 'CONTACT' }
    ],
    it: [
      { path: '/', label: 'HOME' },
      { path: '/about', label: 'CHI SONO' },
      { path: '/speaking', label: 'SPEAKING' },
      { path: '/books', label: 'LIBRI' },
      { path: '/contact', label: 'CONTATTI' }
    ],
    no: [
      { path: '/', label: 'HJEM' },
      { path: '/about', label: 'OM MEG' },
      { path: '/speaking', label: 'FOREDRAG' },
      { path: '/books', label: 'BØKER' },
      { path: '/contact', label: 'KONTAKT' }
    ]
  }

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'it', label: 'Italiano' },
    { code: 'no', label: 'Norsk' }
  ]

  const content = {
    en: {
      bookSession: "Book Session",
      languageLabel: "Language"
    },
    it: {
      bookSession: "Prenota Sessione",
      languageLabel: "Lingua"
    },
    no: {
      bookSession: "Bestill Økt",
      languageLabel: "Språk"
    }
  }

  const currentContent = content[language]

  return (
    <>
      {/* Fixed Top Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="text-xl lg:text-2xl font-bold text-white hover:text-yellow-400 transition-colors">
              ELIO MONDELLO ANZÀ
            </Link>

            {/* Hamburger Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-12 h-12 flex items-center justify-center bg-yellow-400 hover:bg-yellow-300 transition-colors rounded-full"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-black" />
              ) : (
                <Menu className="w-6 h-6 text-black" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Full Screen Yellow Overlay Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-yellow-400 flex items-center justify-center">
          <div className="w-full max-w-4xl px-8">
            {/* Menu Items */}
            <nav className="space-y-2 mb-12">
              {navItems[language].map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className="block text-4xl lg:text-6xl font-black text-black hover:text-white transition-colors py-2"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Language Selector */}
            <div className="border-t-2 border-black pt-8">
              <div className="text-sm font-bold text-black mb-4">{currentContent.languageLabel}</div>
              <div className="flex gap-4">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code)
                      setIsOpen(false)
                    }}
                    className={`px-6 py-3 font-bold text-lg rounded-full transition-colors ${
                      language === lang.code
                        ? 'bg-black text-yellow-400'
                        : 'bg-white text-black hover:bg-black hover:text-white'
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Navigation
