import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiArrowUp } from 'react-icons/fi'
import { NAV_LINKS, PERSONAL_INFO } from '../../constants/data'

export default function Footer() {
  const year = new Date().getFullYear()

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
  const scrollTo = (href) => {
    const el = document.getElementById(href.replace('#', ''))
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="relative overflow-hidden border-t border-white/[0.06]">
      {/* BG */}
      <div className="absolute inset-0 bg-[#060b14]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-40 bg-blue-600/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-0 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold shadow-lg shadow-blue-500/30">
                AK
              </div>
              <span className="text-white font-bold text-xl">Amna Khan</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Building scalable and beautiful digital experiences. Available for freelance projects and remote opportunities.
            </p>
            {/* Social */}
            <div className="flex gap-2 mt-2">
              {[
                { icon: FiGithub, href: PERSONAL_INFO.github },
                { icon: FiLinkedin, href: PERSONAL_INFO.linkedin },
                { icon: FiTwitter, href: PERSONAL_INFO.twitter },
                { icon: FiMail, href: `mailto:${PERSONAL_INFO.email}` },
              ].map(({ icon: Icon, href }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 glass rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500/30 transition-all"
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm tracking-wide uppercase">Navigation</h4>
            <ul className="flex flex-col gap-2.5">
              {NAV_LINKS.map(link => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-slate-400 text-sm hover:text-white hover:translate-x-1 transition-all flex items-center gap-1"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm tracking-wide uppercase">Contact</h4>
            <div className="flex flex-col gap-2.5">
              <a href={`mailto:${PERSONAL_INFO.email}`} className="text-slate-400 text-sm hover:text-white transition-colors">
                {PERSONAL_INFO.email}
              </a>
              <p className="text-slate-400 text-sm">Pakistan 🇵🇰</p>
              <div className="flex items-center gap-2 mt-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-green-400 text-xs font-medium">Available for work</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {year} <span className="text-slate-400">Amna Khan</span>. Crafted with ❤️ and lots of ☕
          </p>
          <motion.button
            onClick={scrollTop}
            className="w-10 h-10 glass rounded-xl flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500/30 transition-all"
            whileHover={{ scale: 1.1, y: -2 }}
            aria-label="Back to top"
          >
            <FiArrowUp size={16} />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
