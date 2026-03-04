import { useEffect, useRef, useState } from 'react'

function StatBlock({ label, target, suffix, children, delay = 0 }) {
  const ref = useRef(null)
  const [count, setCount] = useState(0)
  const [visible, setVisible] = useState(false)
  const doneRef = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !doneRef.current) {
          doneRef.current = true
          setVisible(true)
          const step = Math.ceil(target / 60)
          let cur = 0
          const t = setInterval(() => {
            cur = Math.min(cur + step, target)
            setCount(cur)
            if (cur >= target) clearInterval(t)
          }, 25)
        }
      },
      { threshold: 0.2 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [target])

  return (
    <div
      ref={ref}
      className={`stat-bar stats-cell fade-up px-4 sm:px-8 py-10 sm:py-[60px] flex flex-col${visible ? ' visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="text-[10px] text-muted tracking-[3px] mb-4">{label}</div>
      <div
        className="font-space text-green leading-none"
        style={{ fontSize: 'clamp(60px,10vw,120px)', textShadow: '0 0 40px rgba(0,255,136,0.15)' }}
      >
        {count}
        {suffix && <span className="text-[0.5em] align-top mt-2 inline-block">{suffix}</span>}
      </div>
      <div className="text-[11px] text-muted mt-3 tracking-[1px] leading-[1.6]">
        {children}
      </div>
    </div>
  )
}

export default function Stats() {
  return (
    <section id="stats" className="min-h-screen flex flex-col justify-center px-4 sm:px-12 py-20 border-b border-line">
      <div className="stats-grid grid w-full max-w-[1400px] border border-gray">
        <StatBlock label="ANNI DI ESPERIENZA" target={25} delay={0}>
          Dal 2000 ad oggi.<br />Enterprise, startup, prodotto.
        </StatBlock>
        <StatBlock label="PROGETTI AI COMPLETATI" target={48} suffix="+" delay={150}>
          Web app, mobile app  
          e soluzioni di Intelligenza Artificiale.
        </StatBlock>
        <StatBlock label="CLIENTI SERVITI" target={20} suffix="+" delay={450}>
          Aziende di ogni dimensione,<br />dalla piccola all&apos;enterprise.
        </StatBlock>
        <StatBlock label="SETTORI COPERTI" target={8} suffix="+" delay={600}>
          Finance, healthcare, retail,<br />logistica e altri.
        </StatBlock>
      </div>
    </section>
  )
}
