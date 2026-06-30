import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { FiArrowRight, FiDownload, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'
import { PERSONAL_INFO } from '../../constants/data'

function ParticleCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animId

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const particles = Array.from({ length: 70 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2 + 0.5,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      alpha: Math.random() * 0.6 + 0.2,
      color: Math.random() > 0.5 ? '59,130,246' : '139,92,246',
    }))

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(p => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${p.color},${p.alpha})`
        ctx.fill()
      })
      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 100) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(59,130,246,${0.15 * (1 - dist / 100)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }
      animId = requestAnimationFrame(draw)
    }
    draw()
    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animId)
    }
  }, [])

  return <canvas ref={canvasRef} id="particle-canvas" className="absolute inset-0 w-full h-full" />
}

function RoleTyper({ roles }) {
  const [idx, setIdx] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = roles[idx]
    let timeout
    if (!deleting && text.length < current.length) {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), 80)
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(text.slice(0, -1)), 45)
    } else if (deleting && text.length === 0) {
      setDeleting(false)
      setIdx((idx + 1) % roles.length)
    }
    return () => clearTimeout(timeout)
  }, [text, deleting, idx, roles])

  return (
    <span className="gradient-text">
      {text}
      <span className="animate-pulse text-blue-400">|</span>
    </span>
  )
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 animated-gradient-bg" />
      <ParticleCanvas />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-blue-600/5 to-transparent rounded-full blur-2xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pt-20 sm:pt-28 pb-16 sm:pb-20">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left: Text */}
          <div className="flex flex-col gap-6">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 w-fit px-4 py-2 glass rounded-full border border-green-500/20"
            >
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-green-400 text-sm font-medium">Available for freelance & remote work</span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight break-words"
            >
              {PERSONAL_INFO.tagline.split(' ').slice(0, 2).join(' ')}{' '}
              <span className="gradient-text-warm">{PERSONAL_INFO.tagline.split(' ').slice(2, 4).join(' ')}</span>{' '}
              &{' '}
              <span className="gradient-text">{PERSONAL_INFO.tagline.split(' ').slice(5).join(' ')}</span>
            </motion.h1>

            {/* Role typer */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-slate-300 break-words"
            >
              I'm a{' '}
              <RoleTyper roles={PERSONAL_INFO.roles} />
            </motion.p>

            {/* Value proposition */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-slate-400 text-lg leading-relaxed max-w-xl"
            >
              {PERSONAL_INFO.valueProposition}
            </motion.p>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-8"
            >
              {[['20+', 'Projects'], ['15+', 'Clients'], ['1.5yr', 'Experience']].map(([val, label]) => (
                <div key={label} className="flex flex-col">
                  <span className="text-2xl font-bold gradient-text">{val}</span>
                  <span className="text-slate-500 text-sm">{label}</span>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap items-center gap-4 mt-2"
            >
              <motion.button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary text-base py-3.5 px-7"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                <span>Hire Me</span>
                <FiArrowRight className="relative z-10" />
              </motion.button>
              <motion.a
                href={PERSONAL_INFO.resumeUrl}
                className="btn-secondary text-base py-3.5 px-7"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                <FiDownload /> Download Resume
              </motion.a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex items-center gap-3 mt-2"
            >
              <span className="text-slate-500 text-sm">Find me on:</span>
              {[
                { icon: FiGithub, href: PERSONAL_INFO.github, label: 'GitHub' },
                { icon: FiLinkedin, href: PERSONAL_INFO.linkedin, label: 'LinkedIn' },
                // { icon: FiTwitter, href: PERSONAL_INFO.twitter, label: 'Twitter' },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="w-10 h-10 glass rounded-xl flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500/50 transition-all"
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right: Avatar / Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex items-center justify-center"
          >
            {/* Outer ring */}
            <div className="absolute w-80 h-80 sm:w-96 sm:h-96 rounded-full border border-blue-500/10 animate-spin-slow" />
            <div className="absolute w-72 h-72 sm:w-80 sm:h-80 rounded-full border border-purple-500/10 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '15s' }} />

            {/* Glowing dots on rings */}
            <div className="absolute w-80 h-80 sm:w-96 sm:h-96 rounded-full">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-blue-500 rounded-full shadow-lg shadow-blue-500/50" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-purple-500 rounded-full shadow-lg shadow-purple-500/50" />
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-cyan-400 rounded-full" />
            </div>

            {/* Avatar card */}
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 glass rounded-full overflow-hidden border border-white/10 shadow-2xl shadow-blue-500/20">
              {/* SVG Illustration */}
              <svg viewBox="0 0 300 300" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="bg-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1e1b4b" />
                    <stop offset="100%" stopColor="#0f172a" />
                  </linearGradient>
                  <linearGradient id="skin-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f4c68e" />
                    <stop offset="100%" stopColor="#e8a06d" />
                  </linearGradient>
                </defs>
                <rect width="300" height="300" fill="url(#bg-grad)" />
                {/* Body */}
                <ellipse cx="150" cy="280" rx="80" ry="50" fill="#1e3a5f" />
                <rect x="100" y="195" width="100" height="90" rx="20" fill="#1e3a5f" />
                {/* Neck */}
                <rect x="135" y="175" width="30" height="30" rx="5" fill="url(#skin-grad)" />
                {/* Head */}
                <ellipse cx="150" cy="150" rx="55" ry="60" fill="url(#skin-grad)" />
                {/* Hair */}
                <ellipse cx="150" cy="105" rx="58" ry="30" fill="#1a0a00" />
                <path d="M95 130 Q80 170 90 200" stroke="#1a0a00" strokeWidth="15" fill="none" strokeLinecap="round" />
                <path d="M205 130 Q220 170 210 200" stroke="#1a0a00" strokeWidth="15" fill="none" strokeLinecap="round" />
                {/* Eyes */}
                <ellipse cx="130" cy="152" rx="8" ry="9" fill="#fff" />
                <ellipse cx="170" cy="152" rx="8" ry="9" fill="#fff" />
                <ellipse cx="131" cy="153" rx="5" ry="6" fill="#4B2E00" />
                <ellipse cx="171" cy="153" rx="5" ry="6" fill="#4B2E00" />
                <circle cx="133" cy="150" r="2" fill="#fff" />
                <circle cx="173" cy="150" r="2" fill="#fff" />
                {/* Smile */}
                <path d="M135 172 Q150 185 165 172" stroke="#c0693a" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                {/* Hijab */}
                <path d="M90 120 Q75 200 100 230 L150 240 L200 230 Q225 200 210 120 Q180 90 150 88 Q120 90 90 120Z" fill="#3B82F6" opacity="0.9" />
                <path d="M90 120 Q75 185 95 220" stroke="#2563EB" strokeWidth="3" fill="none" />
                <path d="M210 120 Q225 185 205 220" stroke="#2563EB" strokeWidth="3" fill="none" />
                {/* Laptop */}
                <rect x="85" y="210" width="130" height="70" rx="8" fill="#0f172a" stroke="#3B82F6" strokeWidth="1.5" />
                <rect x="90" y="215" width="120" height="55" rx="5" fill="#1e293b" />
                {/* Code on screen */}
                <rect x="96" y="222" width="60" height="4" rx="2" fill="#3B82F6" opacity="0.7" />
                <rect x="96" y="230" width="80" height="3" rx="2" fill="#8B5CF6" opacity="0.6" />
                <rect x="96" y="237" width="50" height="3" rx="2" fill="#60A5FA" opacity="0.5" />
                <rect x="96" y="244" width="70" height="3" rx="2" fill="#A78BFA" opacity="0.5" />
                <rect x="96" y="251" width="45" height="3" rx="2" fill="#3B82F6" opacity="0.4" />
                {/* Keyboard base */}
                <rect x="75" y="278" width="150" height="12" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="1" />
              </svg>
            </div>

            {/* Floating cards around avatar */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-5 -right-4 glass rounded-xl px-3 py-2 border border-blue-500/20"
            >
              <div className="flex items-center gap-2">
                <span className="text-lg">⚛️</span>
                <div>
                  <p className="text-white text-xs font-semibold">React Expert</p>
                  {/* <p className="text-slate-400 text-[10px]">90% proficiency</p> */}
                </div>
              </div>
            </motion.div>

              <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute -top-5 -left-8 glass rounded-xl px-3 py-2 border border-purple-500/20"
            >
              <div className="flex items-center gap-2">
                <span className="text-lg">📱</span>
                <div>
                  <p className="text-white text-xs font-semibold">Mobile Developer</p>
                  <p className="text-slate-400 text-[10px]">iOS & Android</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute -bottom-1 -left-8 glass rounded-xl px-3 py-2 border border-purple-500/20"
            >
              <div className="flex items-center gap-2">
                <span className="text-lg">🚀</span>
                <div>
                  <p className="text-white text-xs font-semibold">MERN Stack</p>
                  <p className="text-slate-400 text-[10px]">Full Stack Dev</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute bottom-12 -right-8 glass rounded-xl px-3 py-2 border border-green-500/20"
            >
              <div className="flex items-center gap-2">
                <span className="text-green-400">●</span>
                <p className="text-white text-xs font-semibold">Open to work</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-slate-500 text-xs tracking-widest uppercase">Scroll down</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-5 h-8 rounded-full border border-slate-600 flex items-start justify-center pt-1"
          >
            <div className="w-1 h-2 bg-blue-500 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
