import React from 'react'
import { Link } from 'react-router-dom'
import { 
  ArrowRight, 
  Award, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2
} from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade, Pagination } from 'swiper/modules'
import { motion } from 'framer-motion'

import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'

const Home: React.FC = () => {
  const { t, i18n } = useTranslation()

  const sliderImages = [
    "https://images.pexels.com/photos/1668860/pexels-photo-1668860.jpeg?auto=compress&cs=tinysrgb&w=1920",
    "https://images.pexels.com/photos/6474471/pexels-photo-6474471.jpeg?auto=compress&cs=tinysrgb&w=1920",
    "https://images.pexels.com/photos/7217928/pexels-photo-7217928.jpeg?auto=compress&cs=tinysrgb&w=1920",
    "https://images.pexels.com/photos/6538890/pexels-photo-6538890.jpeg?auto=compress&cs=tinysrgb&w=1920",
    "https://images.pexels.com/photos/5691631/pexels-photo-5691631.jpeg?auto=compress&cs=tinysrgb&w=1920"
  ]

  const formatTitle = (text: string) => {
    return text.toLocaleUpperCase(i18n.language === 'tr' ? 'tr-TR' : 'en-US')
  }

  const SectionHeading = ({ title, centered = false }: { title: string, centered?: boolean }) => (
    <div className={`flex items-center gap-4 mb-16 ${centered ? 'justify-center' : ''}`}>
      <h2 className="text-lg md:text-xl font-bold text-dark-brand tracking-[0.2em] whitespace-nowrap">
        {formatTitle(title)}
      </h2>
      <div className="h-[1px] flex-grow max-w-xs bg-gray-100"></div>
    </div>
  )

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  }

  return (
    <div className="min-h-screen bg-white-brand">
      {/* Hero Section */}
      <section className="relative h-[80vh] md:h-[85vh] w-full overflow-hidden">
        <Swiper
          modules={[Autoplay, EffectFade, Pagination]}
          effect="fade"
          speed={1200}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          pagination={{ clickable: true }}
          className="h-full w-full"
        >
          {sliderImages.map((image, index) => (
            <SwiperSlide key={index}>
              <div
                className="relative h-full w-full bg-cover bg-center"
                style={{ backgroundImage: `url('${image}')` }}
              >
                <div className="absolute inset-0 bg-black/30" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="absolute inset-0 z-10 flex items-center justify-center text-white-brand">
          <div className="text-center px-4 md:px-6 max-w-4xl flex flex-col items-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 drop-shadow-lg"
            >
              {t('home.hero_title')}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base md:text-xl mb-10 opacity-90 max-w-2xl font-light tracking-wide"
            >
              {t('home.hero_subtitle')}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link
                to="/iletisim"
                className="inline-flex items-center px-8 py-4 bg-orange-brand hover:bg-orange-700 text-white-brand font-semibold rounded-full shadow-xl transition duration-300 ease-in-out text-sm md:text-base"
              >
                {t('home.hero_button')} <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Brand Intro */}
      <section className="py-20 md:py-32 bg-white-brand">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <div className="inline-block px-4 py-1 bg-orange-50 text-orange-brand font-semibold rounded-full mb-6 tracking-widest uppercase text-xs">
                {t('about.title')}
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-dark-brand mb-8 leading-tight">
                {t('home.brand_intro_title')}
              </h2>
              <div className="space-y-6">
                <p className="text-xl md:text-2xl text-gray-800 font-light leading-relaxed border-l-4 border-orange-brand pl-6">
                  {t('home.brand_intro_text1')}
                </p>
                <p className="text-lg text-gray-600 leading-relaxed font-light">
                  {t('home.brand_intro_text2')}
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2 relative w-full"
            >
              <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/5691631/pexels-photo-5691631.jpeg?auto=compress&cs=tinysrgb&w=1260" 
                  alt="LeoNL Professional Painting" 
                  className="w-full h-[400px] md:h-[600px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading title={t('home.why_choose_us')} />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: <Award />, title: 'feature_1_title', desc: 'feature_1_description' },
              { icon: <Sparkles />, title: 'feature_2_title', desc: 'feature_2_description' },
              { icon: <ShieldCheck />, title: 'feature_3_title', desc: 'feature_3_description' }
            ].map((feature, idx) => (
              <div key={idx} className="p-10 bg-white-brand rounded-3xl shadow-sm border border-gray-100">
                <div className="bg-orange-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8 text-orange-brand">
                  {React.cloneElement(feature.icon as React.ReactElement, { size: 32 })}
                </div>
                <h3 className="text-2xl font-semibold text-dark-brand mb-4">{t(`home.${feature.title}`)}</h3>
                <p className="text-gray-500 font-light leading-relaxed">{t(`home.${feature.desc}`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Bento Grid */}
      <section className="py-20 md:py-32 bg-white-brand">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading title={t('home.services_title')} />

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-12 gap-6"
          >
            <motion.div 
              variants={itemVariants}
              className="md:col-span-12 lg:col-span-8 md:row-span-2 rounded-3xl shadow-xl overflow-hidden bg-dark-brand relative min-h-[500px]"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('https://images.pexels.com/photos/6474471/pexels-photo-6474471.jpeg?auto=compress&cs=tinysrgb&w=1260')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              <div className="relative z-10 h-full flex flex-col p-12 justify-end">
                <h3 className="text-3xl md:text-5xl font-bold text-white mb-4">{t('home.service_paint_title')}</h3>
                <p className="text-gray-200 text-xl max-w-md mb-10 font-light">{t('home.service_paint_desc')}</p>
                <Link to="/galeri" className="inline-flex items-center w-fit px-8 py-4 bg-orange-brand text-white font-semibold rounded-full hover:bg-orange-700 transition-all">
                  {t('gallery.title')} <ArrowRight className="ml-2" size={20} />
                </Link>
              </div>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="md:col-span-6 lg:col-span-4 bg-dark-brand rounded-3xl p-10 shadow-lg border border-gray-800"
            >
              <h3 className="text-2xl font-semibold text-white mb-4">{t('home.service_stuc_title')}</h3>
              <p className="text-gray-400 font-light leading-relaxed">{t('home.service_stuc_desc')}</p>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="md:col-span-6 lg:col-span-4 md:row-span-2 bg-orange-brand rounded-3xl p-10 shadow-lg text-white"
            >
              <h3 className="text-2xl font-semibold mb-6">{t('home.service_prep_title')}</h3>
              <p className="mb-8 opacity-90 font-light">{t('home.service_prep_desc')}</p>
              <ul className="space-y-4">
                {[1, 2, 3, 4].map((i) => (
                  <li key={i} className="flex items-center gap-3 bg-white/10 p-3 rounded-xl font-light">
                    <CheckCircle2 size={18} className="shrink-0" />
                    <span>{t(`home.service_prep_item${i}`)}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="md:col-span-6 lg:col-span-4 bg-white-brand rounded-3xl p-8 shadow-sm border border-gray-100"
            >
              <h3 className="text-xl font-semibold text-dark-brand mb-2">{t('home.service_door_title')}</h3>
              <p className="text-gray-500 font-light text-sm">{t('home.service_door_desc')}</p>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="md:col-span-6 lg:col-span-4 bg-white-brand rounded-3xl p-8 shadow-sm border border-gray-100"
            >
              <h3 className="text-xl font-semibold text-dark-brand mb-2">{t('home.service_frame_title')}</h3>
              <p className="text-gray-500 font-light text-sm">{t('home.service_frame_desc')}</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Compact CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-orange-brand to-orange-700 text-white-brand text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="container mx-auto px-4"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">{t('home.cta_title')}</h2>
          <p className="text-lg md:text-xl mb-10 opacity-90 max-w-xl mx-auto font-light leading-relaxed">{t('home.cta_subtitle')}</p>
          <Link
            to="/iletisim"
            className="inline-flex items-center px-10 py-4 bg-white-brand text-orange-brand hover:bg-gray-100 text-lg font-semibold rounded-full shadow-xl transition-all hover:scale-105 active:scale-95"
          >
            {t('home.cta_button')} <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </section>
    </div>
  )
}

export default Home
