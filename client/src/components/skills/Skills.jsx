import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { SKILLS } from '../../constants/data'
import SectionHeader from '../common/SectionHeader'
import { staggerContainer, staggerItem, fadeInUp } from '../../animations/variants'

const TABS = [
  { key: 'frontend', label: 'Frontend', icon: '⚛️' },
  { key: 'backend', label: 'Backend', icon: '⚙️' },
  { key: 'database', label: 'Database', icon: '🗄️' },
  { key: 'tools', label: 'Tools', icon: '🛠' },
]

const SKILL_ICONS = {
  'React.js': '⚛️', 'Next.js': '▲', 'Tailwind CSS': '🎨', 'Bootstrap': '🎨','JavaScript': 'JS',
  'TypeScript': 'TS', 'Node.js': '🟢', 'Express.js': '⚡', 'MongoDB': '🍃',
  'MySQL': '🐬', 'Git & GitHub': '🐙', 'VS Code': '💙', 'Postman': '📮',
}

function SkillBar({ name, level, delay = 0 }) {
  const [ref, inView] = useInView({ threshold: 0.5, triggerOnce: true })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="glass rounded-xl p-4 border border-white/[0.06] hover:border-blue-500/30 transition-all"
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 glass rounded-lg flex items-center justify-center text-sm font-bold text-blue-400">
            {SKILL_ICONS[name] || name.slice(0, 2)}
          </div>
          <span className="text-white font-medium text-sm">{name}</span>
        </div>
        <span className="text-slate-400 text-sm font-semibold">{level}%</span>
      </div>
      <div className="progress-bar">
        <motion.div
          className="progress-fill"
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay: delay + 0.2, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState('frontend')

  return (
    <section id="skills" className="section-padding relative overflow-hidden bg-slate-950/50">
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-purple-600/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Technical Skills"
          title={<>My <span className="gradient-text">Tech Stack</span></>}
          description="Technologies I use to build fast, scalable, and beautiful digital products."
        />

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {TABS.map(tab => (
            <motion.button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm transition-all ${
                activeTab === tab.key
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                  : 'glass text-slate-400 hover:text-white border border-white/[0.06]'
              }`}
            >
              <span>{tab.icon}</span> {tab.label}
            </motion.button>
          ))}
        </div>

        {/* Skill bars */}
        <motion.div
          key={activeTab}
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto"
        >
          {(SKILLS[activeTab] || []).map((skill, i) => (
            <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={i * 0.08} />
          ))}
        </motion.div>

        {/* Floating skill cloud */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 flex flex-wrap justify-center gap-3"
        >
          {Object.keys(SKILL_ICONS).map((skill, i) => (
            <motion.div
              key={skill}
              animate={{ y: [0, i % 2 === 0 ? -5 : 5, 0] }}
              transition={{ duration: 3 + i * 0.2, repeat: Infinity, ease: 'easeInOut', delay: i * 0.1 }}
              className="glass rounded-xl px-4 py-2 border border-white/[0.06] flex items-center gap-2 text-sm text-slate-300 hover:border-blue-500/30 hover:text-white transition-all cursor-default"
            >
              <span className="text-xs">{SKILL_ICONS[skill]}</span>
              {skill}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
