import { motion } from 'framer-motion'
import { FiArrowRight, FiClock } from 'react-icons/fi'
import { BLOG_POSTS } from '../../constants/data'
import SectionHeader from '../common/SectionHeader'
import { staggerContainer, staggerItem } from '../../animations/variants'

export default function Blog() {
  return (
    <section id="blog" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-purple-600/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-0">
        <SectionHeader
          eyebrow="Writing"
          title={<>Thoughts & <span className="gradient-text">Insights</span></>}
          description="Articles on full-stack development, architecture patterns, and lessons from building real products."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {BLOG_POSTS.map((post) => (
            <motion.article
              key={post.id}
              variants={staggerItem}
              whileHover={{ y: -6 }}
              className="glass rounded-2xl overflow-hidden border border-white/[0.06] group cursor-pointer"
            >
              <div className="h-44 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="p-5 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="tech-tag">{post.category}</span>
                  <div className="flex items-center gap-1 text-slate-500 text-xs">
                    <FiClock size={11} />
                    {post.readTime}
                  </div>
                </div>
                <h3 className="text-white font-bold text-base leading-snug group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">{post.excerpt}</p>
                <div className="flex items-center justify-between mt-2 pt-3 border-t border-white/[0.06]">
                  <span className="text-slate-500 text-xs">{post.date}</span>
                  <button className="flex items-center gap-1.5 text-blue-400 text-sm font-medium hover:gap-2.5 transition-all">
                    Read more <FiArrowRight size={13} />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
