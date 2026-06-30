import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import { PROJECTS } from '../../constants/data'
import SectionHeader from '../common/SectionHeader'
import { staggerContainer, staggerItem } from '../../animations/variants'

const FILTERS = ['All', 'Featured', 'React', 'Next.js', 'Node.js']

export default function Projects() {
  const [filter, setFilter] = useState('All')

  const filtered = PROJECTS.filter(p => {
    if (filter === 'All') return true
    if (filter === 'Featured') return p.featured
    return p.tags.some(t => t.includes(filter))
  })

  return (
    <section id="projects" className="section-padding relative overflow-hidden bg-slate-950/50">
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-0">
        <SectionHeader
          eyebrow="My Work"
          title={<>Featured <span className="gradient-text">Projects</span></>}
          description="A selection of real-world applications I've designed and built end-to-end."
        />

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-10">
          {FILTERS.map(f => (
            <motion.button
              key={f}
              onClick={() => setFilter(f)}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className={`px-3 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                filter === f
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                  : 'glass text-slate-400 hover:text-white border border-white/[0.06]'
              }`}
            >
              {f}
            </motion.button>
          ))}
        </div>

        {/* Projects grid */}
        <motion.div
          layout
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                layout
                variants={staggerItem}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -8 }}
                className="glass rounded-2xl overflow-hidden border border-white/[0.06] group cursor-default flex flex-col"
              >
                {/* Image */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060b14] via-[#060b14]/40 to-transparent opacity-70 group-hover:opacity-50 transition-opacity" />

                  {/* Overlay buttons */}
                  <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="w-11 h-11 glass rounded-xl flex items-center justify-center text-white hover:text-blue-400 transition-colors border border-white/20"
                      onClick={e => e.stopPropagation()}
                    >
                      <FiGithub size={18} />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="w-11 h-11 glass rounded-xl flex items-center justify-center text-white hover:text-purple-400 transition-colors border border-white/20"
                      onClick={e => e.stopPropagation()}
                    >
                      <FiExternalLink size={18} />
                    </a>
                  </div>

                  {project.featured && (
                    <div className="absolute top-3 left-3 px-2.5 py-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-xs font-semibold text-white">
                      Featured
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col gap-3 flex-1">
                  <h3 className="text-white font-bold text-base leading-snug">{project.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed flex-1">{project.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {project.tags.map(tag => (
                      <span key={tag} className="tech-tag">{tag}</span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3 mt-2 pt-3 border-t border-white/[0.06]">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 text-slate-400 hover:text-white text-sm font-medium transition-colors"
                    >
                      <FiGithub size={14} /> Code
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 text-slate-400 hover:text-blue-400 text-sm font-medium transition-colors"
                    >
                      <FiExternalLink size={14} /> Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View more CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12"
        >
          <a
            href="https://github.com/amnakhan"
            target="_blank"
            rel="noreferrer"
            className="btn-secondary flex items-center gap-2"
          >
            <FiGithub /> View All on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}
