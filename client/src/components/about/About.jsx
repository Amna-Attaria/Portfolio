import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiCode, FiUsers, FiBriefcase, FiLayers } from 'react-icons/fi'
import SectionHeader from '../common/SectionHeader'
import { staggerContainer, staggerItem, fadeInLeft, fadeInRight } from '../../animations/variants'

const HIGHLIGHTS = [
  { icon: FiCode, title: 'Problem Solver', desc: 'Turning complex ideas into elegant, practical solutions that work at scale.', color: 'blue' },
  { icon: FiLayers, title: 'Full Stack Developer', desc: 'Building complete applications from database to pixel-perfect UI.', color: 'purple' },
  { icon: FiBriefcase, title: 'Freelancer', desc: 'Delivering focused, client-first digital experiences since 2022.', color: 'cyan' },
  { icon: FiCode, title: 'Clean Code', desc: 'Writing scalable, maintainable, and performance-optimized codebases.', color: 'green' },
]

const COLOR_MAP = {
  blue: { bg: 'rgba(59,130,246,0.1)', border: 'rgba(59,130,246,0.2)', text: '#60A5FA' },
  purple: { bg: 'rgba(139,92,246,0.1)', border: 'rgba(139,92,246,0.2)', text: '#A78BFA' },
  cyan: { bg: 'rgba(6,182,212,0.1)', border: 'rgba(6,182,212,0.2)', text: '#67E8F9' },
  green: { bg: 'rgba(34,197,94,0.1)', border: 'rgba(34,197,94,0.2)', text: '#86EFAC' },
}

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* BG decoration */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-600/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-600/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto" ref={ref}>
        <SectionHeader
          eyebrow="About Me"
          title={<>The Story <span className="gradient-text">Behind the Code</ span></>}
          description="A passionate developer who turned curiosity into craft."
        />

        <div className="grid lg:grid-cols-2 gap-16 items-center mt-8">
          {/* Left: Story */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <div className="glass rounded-2xl p-8 border border-white/[0.06]">
              <h3 className="text-2xl font-bold text-white mb-4">Hi, I'm Amna 👋</h3>
              <div className="flex flex-col gap-4 text-slate-400 leading-relaxed">
                <p>
                  It started with curiosity — a late night, a broken website, and the spark of wanting to understand <em className="text-slate-300 not-italic">why things work</em>. That curiosity turned into passion, and passion turned into profession.
                </p>
                <p>
                  Today, I'm a <span className="text-white font-medium">MERN Stack Developer</span> with 1.5 years of freelancing experience, helping startups and businesses bring their ideas to life through clean code, thoughtful architecture, and interfaces people actually enjoy using.
                </p>
                <p>
                  I've shipped 20+ projects — from fast-moving MVPs to polished SaaS dashboards — and I genuinely care about every detail: performance, accessibility, and the one micro-interaction that makes a user smile.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring the latest web technologies, contributing to open-source, or sketching out ideas for my next side project. I believe in lifelong learning and that the best developers are always students of their craft.
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-6">
                {['React', 'Node.js', 'MongoDB', 'TypeScript', 'Tailwind CSS',  'Flutter', 'Next.js'].map(tag => (
                  <span key={tag} className="tech-tag">{tag}</span>
                ))}
              </div>
            </div>

            {/* Experience badge */}
            <div className="flex items-center gap-4">
              <div className="glass rounded-2xl px-6 py-4 border border-blue-500/20 flex items-center gap-4 flex-1">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-blue-500/30">
                  1.5
                </div>
                <div>
                  <p className="text-white font-semibold">Years of Freelancing</p>
                  <p className="text-slate-400 text-sm">Real projects. Real clients.</p>
                </div>
              </div>
              <div className="glass rounded-2xl px-6 py-4 border border-purple-500/20 flex items-center gap-4 flex-1">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-purple-500/30">
                  20+
                </div>
                <div>
                  <p className="text-white font-semibold">Projects Shipped</p>
                  <p className="text-slate-400 text-sm">From idea to deployment.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Highlight cards */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {HIGHLIGHTS.map((item, i) => {
              const colors = COLOR_MAP[item.color]
              return (
                <motion.div
                  key={item.title}
                  variants={staggerItem}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.03, y: -4 }}
                  className="glass-hover glass rounded-2xl p-5 cursor-default"
                  style={{ borderColor: colors.border }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: colors.bg, border: `1px solid ${colors.border}` }}
                  >
                    <item.icon size={20} style={{ color: colors.text }} />
                  </div>
                  <h4 className="text-white font-semibold mb-2">{item.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
