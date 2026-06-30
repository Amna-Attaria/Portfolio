import { motion } from 'framer-motion'
import { EXPERIENCE, ACHIEVEMENTS } from '../../constants/data'
import SectionHeader from '../common/SectionHeader'
import { fadeInLeft, fadeInRight, staggerItem } from '../../animations/variants'

export default function Experience() {
  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 bg-purple-600/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-0">
        <SectionHeader
          eyebrow="My Journey"
          title={<>Experience & <span className="gradient-text">Achievements</span></>}
          description="Real-world experience building scalable products and winning competitive recognitions."
        />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Timeline */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-sm">💼</span>
              Work Experience
            </h3>

            <div className="relative pl-12">
              <div className="timeline-line" />
              <div className="flex flex-col gap-8">
                {EXPERIENCE.map((item, i) => (
                  <motion.div
                    key={item.id}
                    variants={staggerItem}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 }}
                    className="relative"
                  >
                    <div className="timeline-dot" style={{ top: '0.75rem' }} />
                    <div className="glass rounded-2xl p-5 border border-white/[0.06] hover:border-blue-500/20 transition-all ml-4">
                      <div className="flex items-start justify-between flex-wrap gap-2 mb-3">
                        <div>
                          <h4 className="text-white font-bold">{item.title}</h4>
                          <p className="text-blue-400 text-sm font-medium">{item.company}</p>
                        </div>
                        <div className="text-right">
                          <span className="text-slate-400 text-xs">{item.period}</span>
                          <p className="text-purple-400 text-xs font-medium">{item.duration}</p>
                        </div>
                      </div>
                      <p className="text-slate-400 text-sm leading-relaxed mb-3">{item.description}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {item.tags.map(tag => (
                          <span key={tag} className="tech-tag">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center text-sm">🏆</span>
              Achievements
            </h3>

            <div className="flex flex-col gap-5">
              {ACHIEVEMENTS.map((item, i) => (
                <motion.div
                  key={item.id}
                  variants={staggerItem}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  whileHover={{ scale: 1.02, y: -3 }}
                  className="glass-hover glass rounded-2xl p-6 border border-white/[0.06]"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border border-yellow-500/20 flex items-center justify-center text-2xl">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-bold">{item.title}</h4>
                      <p className="text-yellow-400 text-sm font-medium">{item.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              ))}

              {/* Additional stat */}
              <motion.div
                variants={staggerItem}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="glass rounded-2xl p-6 border border-green-500/20"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center text-2xl">
                    ⭐
                  </div>
                  <div>
                    <h4 className="text-white font-bold">Upwork Profile</h4>
                    <p className="text-green-400 text-sm font-medium">5.0 ★ Average Rating</p>
                  </div>
                </div>
                <p className="text-slate-400 text-sm mt-3">Maintained a perfect client satisfaction score across all freelance engagements.</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
