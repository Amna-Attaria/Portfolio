import { motion } from 'framer-motion'
import { EDUCATION } from '../../constants/data'
import SectionHeader from '../common/SectionHeader'
import { staggerItem } from '../../animations/variants'

export default function Education() {
  return (
    <section id="education" className="section-padding relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto">
        <SectionHeader
          eyebrow="Education"
          title={<>Academic <span className="gradient-text">Background</span></>}
          description="Building a strong foundation to support a growing career in software engineering."
        />

        <div className="relative pl-12">
          <div className="timeline-line" />
          <div className="flex flex-col gap-8">
            {EDUCATION.map((item, i) => (
              <motion.div
                key={item.id}
                variants={staggerItem}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative"
              >
                <div className="timeline-dot" style={{ top: '1.25rem' }} />
                <motion.div
                  whileHover={{ x: 4 }}
                  className="glass rounded-2xl p-6 border border-white/[0.06] hover:border-purple-500/20 transition-all ml-4"
                >
                  <div className="flex items-start justify-between flex-wrap gap-3 mb-3">
                    <div>
                      <h3 className="text-white font-bold text-base">{item.degree}</h3>
                      <p className="text-blue-400 font-medium text-sm mt-0.5">{item.institution}</p>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span className="text-slate-400 text-xs">{item.period}</span>
                      <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${
                        item.status === 'In Progress'
                          ? 'bg-blue-500/15 text-blue-400 border border-blue-500/25'
                          : 'bg-green-500/15 text-green-400 border border-green-500/25'
                      }`}>
                        {item.status}
                      </span>
                    </div>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
