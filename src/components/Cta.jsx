import { useFadeUp } from '../hooks/useFadeUp'

export default function Cta() {
  const [titleRef, titleVisible] = useFadeUp()
  const [cmdRef, cmdVisible] = useFadeUp()

  return (
    <section id="cta" className="min-h-screen flex flex-col justify-center items-start px-4 sm:px-12 py-20">
      <div className="text-[10px] text-green tracking-[4px] mb-4">// CONTACT</div>

      <h2
        ref={titleRef}
        className={`font-bold leading-[1.1] mb-12 fade-up${titleVisible ? ' visible' : ''}`}
        style={{ fontSize: 'clamp(36px, 6vw, 80px)' }}
      >
        Hai un progetto?<br />Parliamo.
      </h2>

      <div
        ref={cmdRef}
        className={`flex items-center border border-gray px-4 sm:px-8 py-5 text-base max-w-[600px] w-full cursor-pointer transition-all duration-300 hover:border-green hover:shadow-[0_0_20px_rgba(0,255,136,0.15)] fade-up${cmdVisible ? ' visible' : ''}`}
        style={{ transitionDelay: '0.2s' }}
      >
        <span className="text-green mr-3">$&nbsp;</span>
        <span className="text-chalk flex-1">filippo.developer@gmail.com</span>
        <button
          className="bg-green text-black border-none px-5 py-2 font-mono text-[11px] font-bold tracking-[2px] cursor-pointer transition-opacity duration-200 hover:opacity-80"
          onClick={() => window.location.href = 'mailto:filippo.developer@gmail.com'}
        >
          SEND →
        </button>
      </div>

      <p className="mt-5 text-[11px] text-muted tracking-[1px]">
        Rispondo entro 24h. Sempre.
      </p>
    </section>
  )
}
