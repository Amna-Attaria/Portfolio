import { motion } from 'framer-motion'
import { CERTIFICATIONS } from '../../constants/data'
import SectionHeader from '../common/SectionHeader'
import { staggerItem } from '../../animations/variants'

export default function Certifications() {
  return (
    <section className="section-padding bg-slate-950/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-0">
        <SectionHeader
          eyebrow="Credentials"
          title={<>Certifications & <span className="gradient-text">Training</span></>}
          description="Formal training that reinforced and expanded my practical development skills."
        />

        <div className="flex flex-wrap justify-center gap-6">
          {CERTIFICATIONS.map((cert, i) => (
            <motion.div
              key={cert.id}
              variants={staggerItem}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ scale: 1.03, y: -6 }}
              className="glass-hover glass rounded-2xl p-7 border border-blue-500/15 w-full sm:max-w-sm flex flex-col gap-4"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/20 flex items-center justify-center text-3xl">
                  {cert.badge}
                </div>
                <div>
                  <h3 className="text-white font-bold text-base">{cert.title}</h3>
                  <p className="text-blue-400 text-sm font-medium">{cert.institute}</p>
                  <p className="text-slate-500 text-xs">{cert.period}</p>
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">{cert.description}</p>
              <div className="flex items-center gap-2 mt-auto">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-green-400 text-xs font-medium">Verified Certificate</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
