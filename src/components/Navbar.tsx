import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Globe, ChevronDown } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isLangOpen, setIsLangOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { t, i18n } = useTranslation()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
    setIsLangOpen(false)
  }, [location])

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
    setIsLangOpen(false)
    setIsOpen(false)
  }

  // Helper function for correct Turkish uppercase handling
  const formatTitle = (text: string) => {
    return text.toLocaleUpperCase(i18n.language === 'tr' ? 'tr-TR' : 'en-US')
  }

  const navLinks = [
    { name: t('navbar.home'), path: '/' },
    { name: t('navbar.about'), path: '/hakkimizda' },
    { name: t('navbar.gallery'), path: '/galeri' },
    { name: t('navbar.contact'), path: '/iletisim' },
  ]

  const logoUrl = "https://res.cloudinary.com/dqrfaaoie/image/upload/v1772108757/ileonl_x61gna.png"

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white-brand shadow-lg py-2' : 'bg-white-brand/90 backdrop-blur-md py-4'
    }`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img 
            src={logoUrl} 
            alt="LeoNL Logo" 
            className="h-10 md:h-12 w-auto object-contain"
          />
        </Link>

        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-dark-brand hover:text-orange-brand transition duration-300 ease-in-out font-medium text-sm tracking-wider ${
                location.pathname === link.path ? 'text-orange-brand' : ''
              }`}
            >
              {formatTitle(link.name)}
            </Link>
          ))}
          
          <div className="relative">
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center text-dark-brand hover:text-orange-brand transition duration-300 font-medium text-sm tracking-wider focus:outline-none"
            >
              <Globe className="h-4 w-4 mr-1" />
              {formatTitle(i18n.language)}
              <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isLangOpen ? 'rotate-180' : ''}`} />
            </button>
            
            <AnimatePresence>
              {isLangOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute right-0 mt-4 w-32 bg-white-brand rounded-xl shadow-2xl py-2 z-50 border border-gray-100"
                >
                  {['tr', 'en', 'nl'].map((lang) => (
                    <button
                      key={lang}
                      onClick={() => changeLanguage(lang)}
                      className={`block px-4 py-2 text-sm font-medium w-full text-left hover:bg-orange-50 transition-colors ${
                        i18n.language === lang ? 'text-orange-brand' : 'text-dark-brand'
                      }`}
                    >
                      {lang === 'tr' ? 'Türkçe' : lang === 'en' ? 'English' : 'Nederlands'}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="md:hidden flex items-center space-x-4">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-dark-brand p-2 focus:outline-none"
          >
            {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white-brand border-t border-gray-100 overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-xl font-light tracking-wide ${
                    location.pathname === link.path ? 'text-orange-brand' : 'text-dark-brand'
                  }`}
                >
                  {formatTitle(link.name)}
                </Link>
              ))}
              
              <div className="pt-6 border-t border-gray-100">
                <p className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-4">Dil Seçimi</p>
                <div className="flex flex-wrap gap-3">
                  {['tr', 'en', 'nl'].map((lang) => (
                    <button
                      key={lang}
                      onClick={() => changeLanguage(lang)}
                      className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${
                        i18n.language === lang 
                        ? 'bg-orange-brand border-orange-brand text-white' 
                        : 'bg-gray-50 border-gray-200 text-dark-brand'
                      }`}
                    >
                      {formatTitle(lang)}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
