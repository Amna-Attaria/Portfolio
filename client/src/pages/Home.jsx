import Hero from '../components/hero/Hero'
import About from '../components/about/About'
import Stats from '../components/stats/Stats'
import Skills from '../components/skills/Skills'
import Services from '../components/services/Services'
import Projects from '../components/projects/Projects'
import Experience from '../components/experience/Experience'
import Testimonials from '../components/testimonials/Testimonials'
import Education from '../components/education/Education'
import Certifications from '../components/certifications/Certifications'
import Blog from '../components/blog/Blog'
import Contact from '../components/contact/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Experience />
      <Testimonials />
      <Education />
      <Certifications />
      {/* <Blog /> */}
      <Contact />
    </>
  )
}
