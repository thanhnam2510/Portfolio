import Navbar from '@/components/layout/Navbar/Navbar'
import Footer from '@/components/layout/Footer/Footer'
import BackToTop from '@/components/layout/BackToTop/BackToTop'
import Hero from '@/sections/Hero/Hero'
import About from '@/sections/About/About'
import Skills from '@/sections/Skills/Skills'
import Experience from '@/sections/Experience/Experience'
import Projects from '@/sections/Projects/Projects'
import Education from '@/sections/Education/Education'
import Contact from '@/sections/Contact/Contact'
import { SECTION_IDS } from '@/data/navigation'
import { useActiveSection } from '@/hooks/useActiveSection'

const App = () => {
  const activeSection = useActiveSection(SECTION_IDS)

  return (
    <>
      <Navbar activeSection={activeSection} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}

export default App
