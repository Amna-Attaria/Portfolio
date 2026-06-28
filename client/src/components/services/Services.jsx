import { motion } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'
import { SERVICES } from '../../constants/data'
import SectionHeader from '../common/SectionHeader'
import { staggerContainer, staggerItem } from '../../animations/variants'

export default function Services() {
  return (
    <section id="services" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-600/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-600/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="What I Offer"
          title={<>Services That <span className="gradient-text">Deliver Results</span></>}
          description="End-to-end development services designed to take your idea from concept to conversion-ready product."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.id}
              variants={staggerItem}
              whileHover={{ scale: 1.02, y: -6 }}
              className="glass-hover glass rounded-2xl p-6 cursor-default flex flex-col gap-4 group"
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-2xl shadow-lg shadow-black/30 group-hover:scale-110 transition-transform`}>
                {service.icon}
              </div>

              <div>
                <h3 className="text-white font-bold text-lg mb-2">{service.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{service.description}</p>
              </div>

              {/* Features */}
              <ul className="flex flex-col gap-1.5 mt-auto">
                {service.features.map(f => (
                  <li key={f} className="flex items-center gap-2 text-slate-400 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center gap-2 text-blue-400 text-sm font-medium mt-2 group-hover:text-blue-300 transition-colors"
              >
                Get Started <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
