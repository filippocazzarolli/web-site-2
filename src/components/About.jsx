import { useFadeUp } from '../hooks/useFadeUp'

export default function About() {
  const [leftRef, leftVisible] = useFadeUp()
  const [rightRef, rightVisible] = useFadeUp()

  return (
    <section id="about" className="min-h-screen flex flex-col justify-center px-4 sm:px-12 py-20 border-b border-line">
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-10 lg:gap-16 w-full max-w-[1100px]">
      {/* Left: text */}
      <div ref={leftRef} className={'flex-1 fade-up' + (leftVisible ? ' visible' : '')}>
        <div className="text-[10px] text-green tracking-[4px] mb-6 flex items-center gap-3">
          <span className="opacity-50">//</span> WHO AM I
        </div>
        <h2 className="font-bold leading-[1.2] mb-6" style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}>
          Senior dev.<br />AI builder.<br />Problem solver.
        </h2>
        <div className="text-muted text-[13px] leading-[2]">
          <p className="mb-4">Appassionato di sviluppo software e dell&apos;ecosistema Linux, sono costantemente orientato alla realizzazione di progetti innovativi e ad alto valore. Con oltre 25 anni di esperienza nel settore IT, ho maturato una forte capacità di guidare persone e team verso la creazione di prodotti e servizi di qualità, lavorando con determinazione, visione e attenzione agli obiettivi.</p>
          <p className="mb-4">Integro competenze tecniche approfondite con solide capacità comunicative e organizzative, che coltivo ogni giorno per evolvere professionalmente e generare impatto concreto nei contesti in cui opero.</p>
          <p>Negli ultimi anni ho integrato l&apos;AI in decine di prodotti: dall&apos;automazione dei processi ai sistemi conversazionali avanzati. Non come trend, ma come strumento concreto.</p>
        </div>
      </div>

      {/* Center: terminal window (più stretto) */}
      <div
        ref={rightRef}
        className={'fade-up' + (rightVisible ? ' visible' : '')}
        style={{ transitionDelay: '0.2s', width: '280px', flexShrink: 0 }}
      >
        <div className="border border-gray bg-[#0d0d0d]">
          <div className="px-4 py-2.5 bg-[#161616] border-b border-gray flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
            <span className="ml-2 text-[11px] text-[#555]">profile.json</span>
          </div>
          <div className="p-6 text-xs leading-[2]">
            <div><span className="text-blue">const</span> <span className="text-green">developer</span> <span className="text-chalk"> = &#123;</span></div>
            <div>&nbsp;&nbsp;<span className="text-chalk">name:</span> <span className="text-green">&quot;Filippo Cazzarolli&quot;</span>,</div>
            <div>&nbsp;&nbsp;<span className="text-chalk">role:</span> <span className="text-green">&quot;Full Stack Developer&quot;</span>,</div>
            <div>&nbsp;&nbsp;<span className="text-chalk">experience:</span> <span className="text-green">25</span>,</div>
            <div>&nbsp;&nbsp;<span className="text-chalk">projects:</span> <span className="text-green">48+</span>,</div>
            <div>&nbsp;&nbsp;<span className="text-chalk">location:</span> <span className="text-green">&quot;Verona, IT&quot;</span>,</div>
            <div>&nbsp;&nbsp;<span className="text-chalk">available:</span> <span className="text-blue">true</span>,</div>
            <div>&nbsp;&nbsp;<span className="text-chalk">passion:</span> [</div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green">&quot;clean architecture&quot;</span>,</div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green">&quot;Web Application&quot;</span>,</div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green">&quot;AI integration&quot;</span>,</div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green">&quot;hard problems&quot;</span></div>
            <div>&nbsp;&nbsp;]</div>
            <div><span className="text-chalk">&#125;</span></div>
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}
