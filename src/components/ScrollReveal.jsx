import { useEffect, useRef, useState } from 'react'

export default function ScrollReveal({
  as: Component = 'div',
  children,
  className = '',
  delay = 0,
  direction = 'up',
  once = true,
  ...props
}) {
  const elementRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = elementRef.current

    if (!element) {
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)

          if (once) {
            observer.unobserve(element)
          }
        } else if (!once) {
          setIsVisible(false)
        }
      },
      {
        rootMargin: '0px 0px -80px 0px',
        threshold: 0.16,
      },
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [once])

  return (
    <Component
      {...props}
      ref={elementRef}
      style={{ '--reveal-delay': `${delay}ms` }}
      className={`scroll-reveal scroll-reveal-${direction} ${
        isVisible ? 'is-visible' : ''
      } ${className}`}
    >
      {children}
    </Component>
  )
}
