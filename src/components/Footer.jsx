export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-line px-4 sm:px-12 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <div className="flex items-center gap-3 text-[10px] text-muted tracking-[1.5px]">
        <span className="text-green opacity-50">&gt;</span>
        <span>© {year} Filippo Cazzarolli. All rights reserved.</span>
      </div>
      <div className="flex items-center gap-2 text-[10px] text-muted tracking-[1px]">
        <span>built with</span>
        <span className="text-green">React</span>
        <span>+</span>
        <span className="text-green">Vite</span>
        <span className="animate-blink text-green ml-1">▋</span>
      </div>
    </footer>
  )
}
