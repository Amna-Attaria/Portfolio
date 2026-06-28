import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { FiStar } from 'react-icons/fi'
import { TESTIMONIALS } from '../../constants/data'
import SectionHeader from '../common/SectionHeader'

const COLORS = ['from-blue-500 to-blue-700', 'from-purple-500 to-purple-700', 'from-cyan-500 to-blue-600', 'from-pink-500 to-purple-600']

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding relative overflow-hidden bg-slate-950/50">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-72 bg-blue-600/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Client Feedback"
          title={<>What Clients <span className="gradient-text">Say</span></>}
          description="Real feedback from clients I've had the pleasure of working with."
        />

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {TESTIMONIALS.map((t, i) => (
            <SwiperSlide key={t.id}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-2xl p-6 border border-white/[0.06] hover:border-blue-500/20 transition-all h-full flex flex-col gap-4"
              >
                {/* Stars */}
                <div className="flex gap-1">
                  {Array(t.rating).fill(0).map((_, j) => (
                    <FiStar key={j} className="text-yellow-400 fill-yellow-400" size={14} />
                  ))}
                </div>

                {/* Quote */}
                <div className="relative">
                  <span className="absolute -top-2 -left-1 text-5xl text-blue-500/20 font-serif leading-none">"</span>
                  <p className="text-slate-300 text-sm leading-relaxed pl-3 italic">{t.review}</p>
                </div>

                {/* Author */}
                <div className="flex items-center gap-3 mt-auto pt-4 border-t border-white/[0.06]">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${COLORS[i % COLORS.length]} flex items-center justify-center text-white font-bold text-sm`}>
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{t.name}</p>
                    <p className="text-slate-400 text-xs">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
