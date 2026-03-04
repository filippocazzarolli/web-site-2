export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 px-4 sm:px-12 py-5 flex justify-between items-center z-[100] border-b border-line bg-bg/95 backdrop-blur-sm">
      <div className="text-green text-[11px] sm:text-[13px] tracking-[2px]">CAZZAROLLI.DEV</div>
      <div className="hidden sm:flex gap-8">
        <a href="#about" className="text-muted no-underline text-[11px] tracking-[1.5px] transition-colors duration-200 hover:text-green">// about</a>
        <a href="#skills" className="text-muted no-underline text-[11px] tracking-[1.5px] transition-colors duration-200 hover:text-green">// skills</a>
        <a href="#cta" className="text-muted no-underline text-[11px] tracking-[1.5px] transition-colors duration-200 hover:text-green">// contact</a>
      </div>
    </nav>
  )
}
