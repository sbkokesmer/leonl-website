import React from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { 
  Search, 
  Layers, 
  Palette, 
  Paintbrush, 
  CheckCircle,
  Award,
  ShieldCheck,
  Handshake
} from 'lucide-react'

const About: React.FC = () => {
  const { t, i18n } = useTranslation()

  const steps = [
    { icon: <Search size={24} />, key: 'step1' },
    { icon: <Layers size={24} />, key: 'step2' },
    { icon: <Palette size={24} />, key: 'step3' },
    { icon: <Paintbrush size={24} />, key: 'step4' },
    { icon: <CheckCircle size={24} />, key: 'step5' }
  ]

  const values = [
    { icon: <Award size={32} />, title: t('about.value1_title'), description: t('about.value1_desc') },
    { icon: <ShieldCheck size={32} />, title: t('about.value2_title'), description: t('about.value2_desc') },
    { icon: <Handshake size={32} />, title: t('about.value3_title'), description: t('about.value3_desc') }
  ]

  // Turkish specific uppercase handling
  const formatTitle = (text: string) => {
    return text.toLocaleUpperCase(i18n.language === 'tr' ? 'tr-TR' : 'en-US')
  }

  const SectionHeading = ({ title, centered = false, light = false }: { title: string, centered?: boolean, light?: boolean }) => (
    <div className={`flex items-center gap-4 mb-16 ${centered ? 'justify-center' : ''}`}>
      <h2 className={`text-lg md:text-xl font-bold tracking-[0.2em] whitespace-nowrap ${light ? 'text-white-brand' : 'text-dark-brand'}`}>
        {formatTitle(title)}
      </h2>
      <div className={`h-[1px] flex-grow max-w-xs ${light ? 'bg-white/10' : 'bg-gray-100'}`}></div>
    </div>
  )

  return (
    <div className="min-h-screen bg-white-brand">
      {/* Banner */}
      <section className="relative h-[60vh] w-full overflow-hidden flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.pexels.com/photos/7218525/pexels-photo-7218525.jpeg?auto=compress&cs=tinysrgb&w=1920')" }}
        >
          <div className="absolute inset-0 bg-dark-brand/70" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl md:text-7xl font-bold text-white-brand leading-tight mb-6">
              {t('about.banner_title')} <br />
              <span className="text-orange-brand">{t('about.banner_highlight')}</span>
            </h1>
            <p className="text-xl text-gray-200 font-light max-w-lg">{t('about.subtitle')}</p>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-20 items-start">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <SectionHeading title={t('about.title')} />
              <div className="space-y-8 text-lg text-gray-600 leading-relaxed font-light">
                <p>{t('about.paragraph1')}</p>
                <p className="bg-gray-50 p-8 border-l-4 border-orange-brand italic rounded-r-2xl">{t('about.paragraph2')}</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:w-1/2 relative w-full pt-12"
            >
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/8005397/pexels-photo-8005397.jpeg?auto=compress&cs=tinysrgb&w=1260"
                  alt="Professional Painting Detail"
                  className="w-full h-[400px] md:h-[500px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading title={t('about.values_title')} />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white-brand p-10 rounded-3xl shadow-sm border border-gray-100 text-center"
              >
                <div className="text-orange-brand mb-6 flex justify-center">{value.icon}</div>
                <h3 className="text-xl font-semibold text-dark-brand mb-4">{value.title}</h3>
                <p className="text-gray-500 font-light leading-relaxed text-base">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Working Principles Section - Updated to Dark Brand Background */}
      <section className="py-24 md:py-32 bg-dark-brand">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading title={t('about.principles_title')} centered light />
          
          <div className="relative">
            {/* Connection Line (Desktop) */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-white/5 -translate-y-1/2 z-0" />
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative z-10">
              {steps.map((step, index) => (
                <motion.div
                  key={step.key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="relative mb-6">
                    <div className="w-20 h-20 rounded-2xl bg-white/5 shadow-2xl border border-white/10 flex items-center justify-center text-orange-brand group-hover:bg-orange-brand group-hover:text-white transition-all duration-500 transform group-hover:-translate-y-2">
                      {step.icon}
                    </div>
                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-orange-brand text-white text-xs font-bold flex items-center justify-center shadow-lg">
                      0{index + 1}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-white-brand mb-3 px-4">
                    {t(`about.${step.key}`)}
                  </h3>
                  <div className="w-8 h-1 bg-orange-brand/20 group-hover:w-16 group-hover:bg-orange-brand transition-all duration-500 rounded-full" />
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-20 text-center"
          >
            <p className="text-gray-400 font-light italic text-lg">
              "{t('about.principles_highlight')}"
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About
