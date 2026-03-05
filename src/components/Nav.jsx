import { useState, useEffect } from 'react'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#about', label: '// about' },
    { href: '#skills', label: '// skills' },
    { href: '#cta',   label: '// contact' },
  ]

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 px-4 sm:px-12 py-5 flex justify-between items-center z-[100] border-b border-line transition-all duration-300 ${
          scrolled ? 'bg-bg/98 backdrop-blur-md' : 'bg-bg/95 backdrop-blur-sm'
        }`}
      >
        <div className="text-green text-[11px] sm:text-[13px] tracking-[2px]">CAZZAROLLI.DEV</div>

        {/* Desktop links */}
        <div className="hidden sm:flex gap-8">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-muted no-underline text-[11px] tracking-[1.5px] transition-colors duration-200 hover:text-green"
            >
              {label}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="sm:hidden flex flex-col justify-center items-center gap-[5px] w-8 h-8 bg-transparent border-none cursor-pointer p-0"
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span
            className="block w-5 h-px bg-green transition-all duration-300 origin-center"
            style={{ transform: open ? 'translateY(6px) rotate(45deg)' : 'none' }}
          />
          <span
            className="block w-5 h-px bg-green transition-all duration-300"
            style={{ opacity: open ? 0 : 1, transform: open ? 'scaleX(0)' : 'none' }}
          />
          <span
            className="block w-5 h-px bg-green transition-all duration-300 origin-center"
            style={{ transform: open ? 'translateY(-6px) rotate(-45deg)' : 'none' }}
          />
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className="sm:hidden fixed top-[61px] left-0 right-0 z-[99] border-b border-line bg-bg/98 backdrop-blur-md overflow-hidden transition-all duration-300"
        style={{ maxHeight: open ? '200px' : '0', opacity: open ? 1 : 0 }}
      >
        <div className="flex flex-col px-4 py-4 gap-1">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="text-muted no-underline text-[11px] tracking-[1.5px] py-3 border-b border-line last:border-none transition-colors duration-200 hover:text-green"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </>
  )
}
