import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    const isMobile = window.innerWidth <= 768
    if (isMobile) return

    let mouseX = 0, mouseY = 0
    let ringX = 0, ringY = 0

    const onMouseMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      if (dotRef.current) {
        dotRef.current.style.left = `${mouseX}px`
        dotRef.current.style.top = `${mouseY}px`
      }
    }

    const animate = () => {
      ringX += (mouseX - ringX) * 0.12
      ringY += (mouseY - ringY) * 0.12
      if (ringRef.current) {
        ringRef.current.style.left = `${ringX}px`
        ringRef.current.style.top = `${ringY}px`
      }
      requestAnimationFrame(animate)
    }
    animate()

    const onMouseEnterLink = () => {
      if (ringRef.current) {
        ringRef.current.style.width = '60px'
        ringRef.current.style.height = '60px'
        ringRef.current.style.borderColor = 'rgba(139,92,246,0.7)'
      }
    }
    const onMouseLeaveLink = () => {
      if (ringRef.current) {
        ringRef.current.style.width = '36px'
        ringRef.current.style.height = '36px'
        ringRef.current.style.borderColor = 'rgba(59,130,246,0.5)'
      }
    }

    document.addEventListener('mousemove', onMouseMove)
    document.querySelectorAll('a, button, [role=button]').forEach(el => {
      el.addEventListener('mouseenter', onMouseEnterLink)
      el.addEventListener('mouseleave', onMouseLeaveLink)
    })

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  if (typeof window !== 'undefined' && window.innerWidth <= 768) return null

  return (
    <>
      <div ref={dotRef} className="cursor-dot" style={{ position: 'fixed', transform: 'translate(-50%,-50%)', pointerEvents: 'none', zIndex: 9999 }} />
      <div ref={ringRef} className="cursor-ring" style={{ position: 'fixed', transform: 'translate(-50%,-50%)', pointerEvents: 'none', zIndex: 9998 }} />
    </>
  )
}
