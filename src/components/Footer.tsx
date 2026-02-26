import React from 'react'
import { Link } from 'react-router-dom'
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const Footer: React.FC = () => {
  const { t } = useTranslation()
  const logoUrl = "https://res.cloudinary.com/dqrfaaoie/image/upload/v1772108757/ileonl_x61gna.png"

  return (
    <footer className="bg-dark-brand text-gray-400 py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="flex flex-col items-center md:items-start">
            <Link to="/" className="mb-8">
              <img 
                src={logoUrl} 
                alt="LeoNL Logo" 
                className="h-12 w-auto object-contain brightness-0 invert" 
              />
            </Link>
            <p className="text-sm leading-relaxed max-w-xs font-light opacity-70 text-center md:text-left">
              {t('footer.company_description')}
            </p>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-white-brand mb-8 uppercase tracking-widest text-sm font-semibold">
              {t('footer.quick_links')}
            </h3>
            <ul className="space-y-4 font-light">
              {['home', 'about', 'gallery', 'contact'].map((key) => (
                <li key={key}>
                  <Link 
                    to={key === 'home' ? '/' : `/${key === 'about' ? 'hakkimizda' : key === 'gallery' ? 'galeri' : 'iletisim'}`} 
                    className="hover:text-orange-brand transition duration-300"
                  >
                    {t(`navbar.${key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-white-brand mb-8 uppercase tracking-widest text-sm font-semibold">
              {t('footer.contact_us')}
            </h3>
            <div className="space-y-4 mb-10 font-light">
              <div className="flex items-center justify-center md:justify-start gap-3">
                <Mail className="h-4 w-4 text-orange-brand" />
                <span className="text-sm">info@leolnl.com</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-3">
                <Phone className="h-4 w-4 text-orange-brand" />
                <span className="text-sm">+90 555 123 45 67</span>
              </div>
            </div>
            <div className="flex justify-center md:justify-start space-x-4">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, idx) => (
                <a key={idx} href="#" className="bg-white/5 p-3 rounded-xl hover:bg-orange-brand hover:text-white transition-all duration-300">
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 mt-20 pt-10 text-center">
          <p className="text-xs font-light opacity-40 tracking-widest">
            &copy; {new Date().getFullYear()} LeoNL. {t('footer.all_rights_reserved')}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
