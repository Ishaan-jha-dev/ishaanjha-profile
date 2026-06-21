import './index.css'
import HeroSection from './components/HeroSection'
import MarqueeSection from './components/MarqueeSection'
import AboutSection from './components/AboutSection'
import ProjectsSection from './components/ProjectsSection'
import ContactSection from './components/ContactSection'

function App() {
  return (
    <div
      style={{
        backgroundColor: '#0C0C0C',
        overflowX: 'clip',
      }}
    >
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  )
}

export default App
