import Cursor from './components/Cursor'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Stats from './components/Stats'
import About from './components/About'
import Skills from './components/Skills'
import Cta from './components/Cta'

export default function App() {
  return (
    <div className="bg-bg text-chalk font-mono">
      <Cursor />
      <Nav />
      <Hero />
      <Stats />
      <About />
      <Skills />
      <Cta />
    </div>
  )
}
