import { useEffect, useRef, useState } from 'react'
import { useFadeUp } from '../hooks/useFadeUp'

const backend = [
  { name: 'Node.js / Express', pct: 95 },
  { name: 'Python / FastAPI', pct: 90 },
  { name: 'Java / Spring Boot', pct: 85 },
  { name: 'PostgreSQL / MongoDB', pct: 88 },
  { name: 'Docker / Kubernetes', pct: 80 },
]

const frontend = [
  { name: 'React / Next.js', pct: 92 },
  { name: 'Angular / TypeScript', pct: 85 },
  { name: 'CSS / Tailwind', pct: 88 },
  { name: 'Flutter / Dart', pct: 78 },
  { name: 'OpenAI / Gemini / Anthropic / LangChain', pct: 82 },
]

function SkillItem({ name, pct, index }) {
  const ref = useRef(null)
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setWidth(pct)
      },
      { threshold: 0.2 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [pct])

  return (
    <div ref={ref} className="mb-6">
      <div className="flex items-baseline gap-3 mb-2">
        <span className="text-[10px] text-green opacity-30 tabular-nums w-5 shrink-0">
          {String(index + 1).padStart(2, '0')}
        </span>
        <span className="text-chalk text-xs">{name}</span>
      </div>
      <div className="h-[2px] bg-[#1f1f1f] relative overflow-hidden ml-8">
        <div
          className="h-full bg-green"
          style={{
            width: `${width}%`,
            transition: `width 1.4s cubic-bezier(0.23,1,0.32,1) ${index * 0.08}s`,
            boxShadow: '0 0 6px #00ff88',
          }}
        />
      </div>
    </div>
  )
}

function SkillGroup({ title, items, delay }) {
  const [ref, visible] = useFadeUp()

  return (
    <div
      ref={ref}
      className={`fade-up${visible ? ' visible' : ''}`}
      style={{ transitionDelay: delay }}
    >
      <div className="flex items-center gap-3 mb-8">
        <span className="text-[11px] tracking-[3px] text-green">[{title}]</span>
        <div className="flex-1 h-px bg-line" />
      </div>
      {items.map((s, i) => (
        <SkillItem key={s.name} {...s} index={i} />
      ))}
    </div>
  )
}

export default function Skills() {
  const [labelRef, labelVisible] = useFadeUp()
  const [headingRef, headingVisible] = useFadeUp()

  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col items-start px-4 sm:px-12 py-16 sm:py-[120px] border-b border-line"
    >
      <div
        ref={labelRef}
        className={`text-[10px] text-green tracking-[4px] mb-6 flex items-center gap-3 fade-up${labelVisible ? ' visible' : ''}`}
      >
        <span className="opacity-50">//</span> SKILLS
      </div>

      <h2
        ref={headingRef}
        className={`font-bold mb-16 fade-up${headingVisible ? ' visible' : ''}`}
        style={{ fontSize: 'clamp(28px, 4vw, 48px)', transitionDelay: '0.1s' }}
      >
        What I build with.
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-20 w-full max-w-[1000px]">
        <SkillGroup title="BACKEND" items={backend} delay="0.2s" />
        <SkillGroup title="FRONTEND" items={frontend} delay="0.35s" />
      </div>
    </section>
  )
}
