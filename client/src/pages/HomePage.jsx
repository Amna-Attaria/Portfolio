import { lazy, Suspense } from 'react'
import Hero from '../components/hero/Hero'

// Lazy load below-fold sections for performance
const About = lazy(() => import('../components/about/About'))
const Skills = lazy(() => import('../components/skills/Skills'))
const Services = lazy(() => import('../components/services/Services'))
const Projects = lazy(() => import('../components/projects/Projects'))
const Experience = lazy(() => import('../components/experience/Experience'))
const Testimonials = lazy(() => import('../components/testimonials/Testimonials'))
const Stats = lazy(() => import('../components/stats/Stats'))
const Education = lazy(() => import('../components/education/Education'))
const Certifications = lazy(() => import('../components/certifications/Certifications'))
const Blog = lazy(() => import('../components/blog/Blog'))
const Contact = lazy(() => import('../components/contact/Contact'))

// Simple fallback for lazy sections
const SectionSkeleton = () => (
  <div className="section-padding">
    <div className="container-custom">
      <div className="h-64 glass-card rounded-2xl animate-pulse" />
    </div>
  </div>
)

const HomePage = () => {
  return (
    <>
      <Hero />
      <Suspense fallback={<SectionSkeleton />}>
        <About />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <Stats />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <Skills />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <Services />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <Projects />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <Experience />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <Testimonials />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <Education />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <Certifications />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <Blog />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <Contact />
      </Suspense>
    </>
  )
}

export default HomePage
