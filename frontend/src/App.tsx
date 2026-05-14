import Hero from "./components/Hero"
import About from "./components/About"
import OurTeam from "./components/OurTeam"
import AboutPrevious from "./components/AboutPrevious"
import GetInTouch from "./components/GetInTouch"
import SponsorsSection from "./components/SponsorsSection"
import SectionDivider from "./components/SectionDivider"

const App = () => {
  return (
    <div>
      <Hero />
      <SponsorsSection />
      <SectionDivider />
      <About />
      <OurTeam />
      <AboutPrevious />
      <GetInTouch />
    </div>
  )
}

export default App
