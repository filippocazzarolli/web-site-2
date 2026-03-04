import { useEffect, useRef } from 'react'

export default function Cursor() {
  const ref = useRef(null)

  useEffect(() => {
    const move = (e) => {
      if (ref.current) {
        ref.current.style.left = e.clientX + 'px'
        ref.current.style.top = e.clientY + 'px'
      }
    }
    document.addEventListener('mousemove', move)
    return () => document.removeEventListener('mousemove', move)
  }, [])

  return (
    <div
      ref={ref}
      className="animate-blink fixed w-3 h-5 bg-green pointer-events-none z-[9999] -translate-y-0.5 hidden md:block"
      style={{ opacity: 0.9 }}
    />
  )
}
