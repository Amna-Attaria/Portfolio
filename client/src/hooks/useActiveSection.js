import { useState, useEffect } from 'react'

export const useActiveSection = (sections) => {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const observers = []

    sections.forEach((sectionId) => {
      const el = document.getElementById(sectionId)
      if (!el) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(sectionId)
          }
        },
        { rootMargin: '-40% 0px -55% 0px' }
      )

      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((obs) => obs.disconnect())
  }, [sections])

  return activeSection
}
