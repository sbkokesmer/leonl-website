import React from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

interface GalleryItem {
  id: number
  titleKey: string
  image: string
  size: 'small' | 'medium' | 'large' | 'wide' | 'tall'
}

const Gallery: React.FC = () => {
  const { t, i18n } = useTranslation()

  const stucProjects: GalleryItem[] = [
    { id: 1, titleKey: 'gallery.projects.stuc_1', image: 'https://images.pexels.com/photos/6474471/pexels-photo-6474471.jpeg?auto=compress&cs=tinysrgb&w=800', size: 'wide' },
    { id: 2, titleKey: 'gallery.projects.stuc_2', image: 'https://images.pexels.com/photos/7217928/pexels-photo-7217928.jpeg?auto=compress&cs=tinysrgb&w=800', size: 'small' },
    { id: 3, titleKey: 'gallery.projects.stuc_3', image: 'https://images.pexels.com/photos/6538890/pexels-photo-6538890.jpeg?auto=compress&cs=tinysrgb&w=800', size: 'tall' },
    { id: 4, titleKey: 'gallery.projects.stuc_4', image: 'https://images.pexels.com/photos/5691631/pexels-photo-5691631.jpeg?auto=compress&cs=tinysrgb&w=800', size: 'medium' },
    { id: 5, titleKey: 'gallery.projects.stuc_5', image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800', size: 'small' },
  ]

  const gypsumProjects: GalleryItem[] = [
    { id: 6, titleKey: 'gallery.projects.gypsum_1', image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800', size: 'medium' },
    { id: 7, titleKey: 'gallery.projects.gypsum_2', image: 'https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=800', size: 'wide' },
    { id: 8, titleKey: 'gallery.projects.gypsum_3', image: 'https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=800', size: 'small' },
    { id: 9, titleKey: 'gallery.projects.gypsum_4', image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800', size: 'tall' },
  ]

  const paintProjects: GalleryItem[] = [
    { id: 10, titleKey: 'gallery.projects.paint_1', image: 'https://images.pexels.com/photos/1668860/pexels-photo-1668860.jpeg?auto=compress&cs=tinysrgb&w=800', size: 'tall' },
    { id: 11, titleKey: 'gallery.projects.paint_2', image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800', size: 'medium' },
    { id: 12, titleKey: 'gallery.projects.paint_3', image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800', size: 'wide' },
    { id: 13, titleKey: 'gallery.projects.paint_4', image: 'https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg?auto=compress&cs=tinysrgb&w=800', size: 'small' },
    { id: 14, titleKey: 'gallery.projects.paint_5', image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800', size: 'medium' },
  ]

  const getSizeClass = (size: string) => {
    switch (size) {
      case 'wide': return 'md:col-span-2 h-64'
      case 'tall': return 'md:row-span-2 h-[530px]'
      default: return 'h-64'
    }
  }

  // Turkish specific uppercase handling
  const formatTitle = (text: string) => {
    return text.toLocaleUpperCase(i18n.language === 'tr' ? 'tr-TR' : 'en-US')
  }

  const GallerySection = ({ title, items }: { title: string, items: GalleryItem[] }) => (
    <div className="mb-20">
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-lg md:text-xl font-bold text-dark-brand tracking-[0.2em]">
          {formatTitle(title)}
        </h2>
        <div className="h-[1px] flex-grow bg-gray-100"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`relative group overflow-hidden rounded-2xl bg-gray-100 ${getSizeClass(item.size)}`}
          >
            <img
              src={item.image}
              alt={t(item.titleKey)}
              className="w-full h-full object-cover transition-transform duration-1000 ease-in-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-0 left-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
              <p className="text-white font-light text-base tracking-wide">
                {t(item.titleKey)}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-white-brand pt-32 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mb-24">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-6xl md:text-9xl font-bold text-dark-brand mb-8 tracking-tighter leading-[0.9]"
          >
            {t('gallery.title')}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="text-base md:text-lg text-gray-400 leading-relaxed font-light max-w-2xl"
          >
            {t('gallery.description')}
          </motion.p>
        </div>

        <GallerySection title={t('gallery.cat_stuc')} items={stucProjects} />
        <GallerySection title={t('gallery.cat_gypsum')} items={gypsumProjects} />
        <GallerySection title={t('gallery.cat_paint')} items={paintProjects} />
      </div>
    </div>
  )
}

export default Gallery
