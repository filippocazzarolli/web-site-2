import { useEffect, useRef, useState } from 'react'

const words = ['I build systems.', 'I think in code.', 'I ship products.']

export default function Hero() {
  const [typed, setTyped] = useState('')
  const stateRef = useRef({ wi: 0, ci: 0, deleting: false })

  useEffect(() => {
    let timeout
    function tick() {
      const { wi, ci, deleting } = stateRef.current
      const word = words[wi]
      if (!deleting) {
        const newCi = ci + 1
        setTyped(word.slice(0, newCi))
        stateRef.current.ci = newCi
        if (newCi === word.length) {
          stateRef.current.deleting = true
          timeout = setTimeout(tick, 2000)
          return
        }
      } else {
        const newCi = ci - 1
        setTyped(word.slice(0, newCi))
        stateRef.current.ci = newCi
        if (newCi === 0) {
          stateRef.current.deleting = false
          stateRef.current.wi = (wi + 1) % words.length
        }
      }
      timeout = setTimeout(tick, deleting ? 50 : 90)
    }
    timeout = setTimeout(tick, 90)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center px-4 sm:px-12 pt-[100px] pb-20 border-b border-line relative overflow-hidden"
    >
      {/* Dot grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(0,255,136,0.12) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          maskImage: 'radial-gradient(ellipse 80% 80% at 60% 50%, transparent 30%, black 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 60% 50%, transparent 30%, black 100%)',
        }}
      />

      {/* Vertical accent line */}
      <div
        className="absolute left-0 top-[20%] bottom-[20%] w-px pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #00ff88 30%, #00ff88 70%, transparent)', opacity: 0.15 }}
      />

      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-4 text-muted text-xs">
          <span className="text-green">filippo@dev</span>
          <span>:</span>
          <span className="text-blue">~/portfolio</span>
          <span>$</span>
        </div>

        <h1 className="font-bold leading-[1.05] mb-6 text-chalk" style={{ fontSize: 'clamp(42px, 7vw, 96px)' }}>
          I don&apos;t just write code.<br />
          <span className="text-green">{typed}</span>
          <span className="animate-blink-fast inline-block w-1 h-[0.9em] bg-green ml-1 align-middle" />
        </h1>

        <p className="text-sm text-muted tracking-[2px] mb-12 max-w-[520px] leading-[1.8]">
          <span className="text-green">Full Stack Developer</span> con 25 anni di esperienza.<br />
          Architetture solide. Interfacce che parlano. AI che lavora.
        </p>

        <div className="flex flex-col gap-1.5 text-xs text-muted">
          <div>$ <span className="text-green">✓</span> Backend loaded — Node.js, Python, Java</div>
          <div>$ <span className="text-green">✓</span> Frontend loaded — React, NextJS, Angular, TypeScript</div>
          <div>$ <span className="text-blue">→</span> AI modules active — 48+ projects deployed</div>
          <div>$ <span className="text-green">_</span> Ready to build.</div>
        </div>
      </div>

      <div className="scroll-hint absolute bottom-8 left-4 sm:left-12 text-xs text-muted tracking-[2px] flex items-center gap-3">
        scroll
      </div>
    </section>
  )
}
