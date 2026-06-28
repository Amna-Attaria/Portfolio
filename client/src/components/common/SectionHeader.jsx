import { motion } from 'framer-motion'
import { fadeInUp } from '../../animations/variants'

export default function SectionHeader({ eyebrow, title, description, align = 'center' }) {
  const textAlign = align === 'center' ? 'text-center items-center' : 'text-left items-start'
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      className={`flex flex-col gap-4 mb-16 ${textAlign}`}
    >
      {eyebrow && (
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-blue-500/20 self-start mx-auto w-fit">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
          <span className="text-blue-400 text-sm font-medium tracking-wide uppercase">{eyebrow}</span>
        </div>
      )}
      <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
        {title}
      </h2>
      {description && (
        <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
      <div className={`flex items-center gap-3 mt-2 ${align === 'center' ? 'justify-center' : ''}`}>
        <div className="h-px w-12 bg-gradient-to-r from-blue-500 to-transparent" />
        <div className="w-2 h-2 rounded-full bg-purple-500" />
        <div className="h-px w-12 bg-gradient-to-l from-purple-500 to-transparent" />
      </div>
    </motion.div>
  )
}
