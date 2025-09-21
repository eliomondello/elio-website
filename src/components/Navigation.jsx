import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Globe } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Navigation = ({ language, setLanguage }) => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navItems = {
    en: [
      { path: '/', label: 'Home' },
      { path: '/about', label: 'About' },
      { path: '/portfolio', label: 'Portfolio' },
      { path: '/testimonials', label: 'Testimonials' },
      { path: '/services', label: 'Services' },
      { path: '/contact', label: 'Contact' }
    ],
    it: [
      { path: '/', label: 'Home' },
      { path: '/about', label: 'Chi Sono' },
      { path: '/portfolio', label: 'Portfolio' },
      { path: '/testimonials', label: 'Testimonianze' },
      { path: '/services', label: 'Servizi' },
      { path: '/contact', label: 'Contatti' }
    ],
    no: [
      { path: '/', label: 'Hjem' },
      { path: '/about', label: 'Om Meg' },
      { path: '/portfolio', label: 'Portfolio' },
      { path: '/testimonials', label: 'Anbefalinger' },
      { path: '/services', label: 'Tjenester' },
      { path: '/contact', label: 'Kontakt' }
    ]
  }

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'it', label: 'Italiano' },
    { code: 'no', label: 'Norsk' }
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-yellow-400/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-yellow-400 hover:text-yellow-300 transition-colors">
            ELIO MONDELLO
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems[language].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-yellow-400 ${
                  location.pathname === item.path ? 'text-yellow-400' : 'text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
            
            {/* Language Selector */}
            <div className="relative group">
              <Button variant="ghost" size="sm" className="text-white hover:text-yellow-400">
                <Globe className="w-4 h-4 mr-2" />
                {languages.find(lang => lang.code === language)?.label}
              </Button>
              <div className="absolute right-0 mt-2 w-32 bg-black border border-yellow-400/20 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={`block w-full text-left px-4 py-2 text-sm hover:bg-yellow-400/10 ${
                      language === lang.code ? 'text-yellow-400' : 'text-white'
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <Button 
              asChild
              className="bg-yellow-400 text-black hover:bg-yellow-300 font-semibold"
            >
              <a href="https://mondosol.com/coaching" target="_blank" rel="noopener noreferrer">
                Book Session
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-yellow-400"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/95 border-t border-yellow-400/20">
              {navItems[language].map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 text-base font-medium transition-colors hover:text-yellow-400 ${
                    location.pathname === item.path ? 'text-yellow-400' : 'text-white'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              
              {/* Mobile Language Selector */}
              <div className="px-3 py-2">
                <div className="text-sm text-gray-400 mb-2">Language</div>
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code)
                      setIsOpen(false)
                    }}
                    className={`block w-full text-left py-1 text-sm ${
                      language === lang.code ? 'text-yellow-400' : 'text-white'
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>

              {/* Mobile CTA Button */}
              <div className="px-3 py-2">
                <Button 
                  asChild
                  className="w-full bg-yellow-400 text-black hover:bg-yellow-300 font-semibold"
                >
                  <a href="https://mondosol.com/coaching" target="_blank" rel="noopener noreferrer">
                    Book Session
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
