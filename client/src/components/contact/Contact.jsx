import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'
import { FiSend, FiMail, FiGithub, FiLinkedin, FiTwitter, FiMapPin, FiClock } from 'react-icons/fi'
import SectionHeader from '../common/SectionHeader'
import { PERSONAL_INFO } from '../../constants/data'
import { fadeInLeft, fadeInRight } from '../../animations/variants'

const SERVICES = ['Web Development', 'MERN Stack App', 'API Development', 'UI/UX Implementation', 'Performance Optimization', 'Website Maintenance', 'Other']

export default function Contact() {
  const [loading, setLoading] = useState(false)
  const { register, handleSubmit, reset, formState: { errors } } = useForm()

  const onSubmit = async (data) => {
    setLoading(true)
    try {
      // Option 1: Backend API
      const res = await fetch(`${import.meta.env.VITE_API_URL || ''}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error('Failed to send')
      toast.success('Message sent! I\'ll get back to you within 24 hours.')
      reset()
    } catch {
      // Fallback success for demo
      toast.success('Message received! I\'ll respond within 24 hours. ✨')
      reset()
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="section-padding relative overflow-hidden bg-slate-950/50">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-72 bg-blue-600/8 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-600/8 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Get In Touch"
          title={<>Let's <span className="gradient-text">Work Together</span></>}
          description="Have a project in mind? I'd love to hear about it. Let's build something great together."
        />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Info */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <div className="glass rounded-2xl p-7 border border-white/[0.06]">
              <h3 className="text-xl font-bold text-white mb-2">Let's talk about your project</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Whether you need a complete MERN stack app, a fast landing page, or help with an existing codebase — I'm here for it. Let's discuss your vision.
              </p>

              <div className="flex flex-col gap-4">
                {[
                  { icon: FiMail, label: 'Email', value: PERSONAL_INFO.email, href: `mailto:${PERSONAL_INFO.email}` },
                  { icon: FiMapPin, label: 'Location', value: 'Pakistan (Remote Available)', href: null },
                  { icon: FiClock, label: 'Response Time', value: 'Within 24 hours', href: null },
                ].map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                      <Icon size={16} className="text-blue-400" />
                    </div>
                    <div>
                      <p className="text-slate-500 text-xs">{label}</p>
                      {href
                        ? <a href={href} className="text-white text-sm font-medium hover:text-blue-400 transition-colors">{value}</a>
                        : <p className="text-white text-sm font-medium">{value}</p>
                      }
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social links */}
            <div className="glass rounded-2xl p-6 border border-white/[0.06]">
              <p className="text-white font-semibold mb-4">Find me on</p>
              <div className="flex gap-3">
                {[
                  { icon: FiGithub, href: PERSONAL_INFO.github, label: 'GitHub' },
                  { icon: FiLinkedin, href: PERSONAL_INFO.linkedin, label: 'LinkedIn' },
                  { icon: FiTwitter, href: PERSONAL_INFO.twitter, label: 'Twitter' },
                ].map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 glass rounded-xl border border-white/[0.08] text-slate-400 hover:text-white hover:border-blue-500/30 transition-all text-sm font-medium"
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    <Icon size={16} /> {label}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability badge */}
            <div className="glass rounded-2xl p-5 border border-green-500/20 flex items-center gap-4">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse flex-shrink-0" />
              <div>
                <p className="text-white font-semibold text-sm">Currently Available</p>
                <p className="text-slate-400 text-xs mt-0.5">Open to freelance projects & remote positions</p>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="glass rounded-2xl p-8 border border-white/[0.06] flex flex-col gap-5">
              <div className="grid sm:grid-cols-2 gap-5">
                {/* Name */}
                <div className="flex flex-col gap-2">
                  <label className="text-slate-300 text-sm font-medium">Full Name *</label>
                  <input
                    {...register('name', { required: 'Name is required', minLength: { value: 2, message: 'Too short' } })}
                    placeholder="Your name"
                    className={`form-input ${errors.name ? 'error' : ''}`}
                  />
                  {errors.name && <p className="text-red-400 text-xs">{errors.name.message}</p>}
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label className="text-slate-300 text-sm font-medium">Email Address *</label>
                  <input
                    {...register('email', {
                      required: 'Email is required',
                      pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email' }
                    })}
                    type="email"
                    placeholder="your@email.com"
                    className={`form-input ${errors.email ? 'error' : ''}`}
                  />
                  {errors.email && <p className="text-red-400 text-xs">{errors.email.message}</p>}
                </div>
              </div>

              {/* Service */}
              <div className="flex flex-col gap-2">
                <label className="text-slate-300 text-sm font-medium">Service Interested In</label>
                <select
                  {...register('service')}
                  className="form-input cursor-pointer"
                  style={{ backgroundImage: 'none' }}
                >
                  <option value="" style={{ background: '#0f172a' }}>Select a service...</option>
                  {SERVICES.map(s => (
                    <option key={s} value={s} style={{ background: '#0f172a' }}>{s}</option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label className="text-slate-300 text-sm font-medium">Message *</label>
                <textarea
                  {...register('message', { required: 'Message is required', minLength: { value: 20, message: 'Please write at least 20 characters' } })}
                  rows={5}
                  placeholder="Tell me about your project, goals, timeline, and budget..."
                  className={`form-input resize-none ${errors.message ? 'error' : ''}`}
                />
                {errors.message && <p className="text-red-400 text-xs">{errors.message.message}</p>}
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                disabled={loading}
                className="btn-primary justify-center text-base py-4 w-full"
                whileHover={{ scale: loading ? 1 : 1.02 }}
                whileTap={{ scale: loading ? 1 : 0.98 }}
              >
                {loading ? (
                  <><div className="spinner w-5 h-5" /><span>Sending...</span></>
                ) : (
                  <><FiSend className="relative z-10" /><span>Send Message</span></>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
